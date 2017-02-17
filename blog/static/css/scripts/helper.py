

import urllib2
import os
import json
import re
import shutil
#***************************************************************************
# Common helper methods
#***************************************************************************


class Helper():
    """Helper class to generate documentation"""
    @staticmethod
    def get_all_files_from(sub_directory, file_type):
        """Get all files from directories"""
        md_files = []
        exclude = set(['node_modules', 'test', 'test-output', 'scripts', 'site', 'site-output'])
        current_directory = os.path.realpath(sub_directory)
        for path, subdirs, files in os.walk(current_directory):
            subdirs[:] = [d for d in subdirs if d not in exclude]
            subdirs[:] = [d for d in subdirs if not d[0] == '.']
            for name in files:
                file_path = os.path.join(path, name)
                if file_path.endswith(file_type):
                    md_files.append(file_path)
        return md_files

    @staticmethod
    def pathtodir(path):
        """Path to director"""
        if not os.path.exists(path):
            l = []
            p = "/"
            l = path.split("/")
            i = 1
            while i < len(l):
                p = p + l[i] + "/"
                i = i + 1
                if not os.path.exists(p):
                    os.mkdir(p, 0755)

    @staticmethod
    def copy_file(src, dest, buffer_size=16000):
        """Copy file from source to destination"""
        with open(src, 'rb') as fsrc:
            with open(dest, 'wb') as fdest:
                shutil.copyfileobj(fsrc, fdest, buffer_size)


# Generate a directory if it doesn't exists.
    @staticmethod
    def gen_directory(output_path):
        """Generate directory"""
        if not os.path.isfile(output_path) and not os.path.isdir(output_path):
            os.mkdir(output_path)

    @staticmethod
    def between(left, right, text):
        """Text between two strings"""
        startpos = text.find(left) + len(left)
        endpos = text.find(right, startpos)
        if endpos == -1:
            return ''
        else:
            return text[startpos:endpos]

    @staticmethod
    def write_to_file(file_name, content):
        """Write to file"""
        file = open(file_name, "w")
        file.write(content)
        file.close()

    # replace h1,h2,...h6
    @staticmethod
    def replace_h1_hash(content):
        """Replace h1"""
        string_to_find = ""
        for index in reversed(range(0, 7)):
            string_to_find = ""
            for ind in range(index + 1):
                string_to_find = string_to_find + "#"
            if content.find(string_to_find) == 0:
                content = '<H' + str(index + 1) + '>' + content.replace(
                    string_to_find, '', 1) + '</H' + str(index + 1) + '>'
        return content

    @staticmethod
    def replace_h1_star(content):
        """Replace h1"""
        string_to_find = ""
        for index in reversed(range(0, 7)):
            string_to_find = ""
            for ind in range(index + 1):
                string_to_find = string_to_find + "*"
            if content.find(string_to_find) == 0:
                content = '<H' + str(index + 1) + '>' + content.replace(
                    string_to_find, '', 1) + '</H' + str(index + 1) + '>'
        return content

    @staticmethod
    def replace_list(content):
        """Replace list"""
        if content.find("- ") == 0:
            content = '<ul><li>' + content.replace('- ', '', 1) + '</li></ul>'
        if content.find("* ") == 0:
            content = '<ul><li>' + content.replace('* ', '', 1) + '</li></ul>'
        return content

    @staticmethod
    def replace_image(content):
        if content.find("![") == 0:
            image_url = content.split('](')
            content = '<img  src="' + \
                image_url[1].replace(')<br>', '') + '"/>'
        return content

    @staticmethod
    def replace_url(content):
        """Replace url"""
        if content.find("[") == 0:
            link_data = content.split('](')
            if len(link_data) > 1:
                content = '<a href="' + link_data[1].replace(')  <br>', '') + '">' + link_data[
                    0].replace('[', '') + '</a><br>'
        return content



    @staticmethod
    def replace_quote(content):
        """Replace quote"""
        if content.find("> ") == 0:
            content = '<div style="border-left:4px solid lightgray;padding-left:20px;"> ' + \
                content.replace('> ', '') + '</div>'
        return content

    @staticmethod
    def replace_table(content):
        """Replace table"""
        table_row = content.split('|')
        processed_cont = ""
        for idx, cont in enumerate(table_row):
            if idx != 0:
                processed_cont = processed_cont+ '<td >'+cont +'</td>'
        if processed_cont == "":
            return content;
        else:
            if '--------' in processed_cont:
              processed_cont = ""
            else:
              processed_cont = '<table><tr>'+ processed_cont +'</tr></table>'
            return processed_cont

    @staticmethod
    def generate_handle_table_marker(content):
        """Generate code block"""
        code_block = content.split('__TABLE_MARKER__CUSTOM')
        processed_cont = ""
        for idx, cont in enumerate(code_block):
            if (idx % 2) == 0:
                current_len = len(code_block) - 1
                if idx != current_len:
                    processed_cont = processed_cont + cont.replace('<table>',' ').replace('</table>',' ') + '<table>'
                else:
                    processed_cont = processed_cont + cont
            else:
                processed_cont = processed_cont + cont.replace('<table>',' ').replace('</table>',' ') + '</table>'
        return processed_cont


    @staticmethod
    def handle_tables(content):
        """Replace table"""
        reprocessed_content = ''
        if content and '<table' in content:
            lines = content.split('<br>')
            for idx, line in enumerate(lines):
                next_line = None
                previous_line = lines[idx-1]
                current_line  = lines[idx]
                if idx + 1< len(lines):
                    next_line = lines[idx+1]

                contains_table = False
                if '<table' not in previous_line and '<table' in line:
                    contains_table = True
                    reprocessed_content = reprocessed_content + '__TABLE_MARKER__CUSTOM'+line.replace('<td','<th').replace('<\td','<\th')
                if  next_line and '<table' not in next_line  and '<table' in line: 
                    contains_table = True
                    reprocessed_content = reprocessed_content + line+ '__TABLE_MARKER__CUSTOM'
                if previous_line is None or contains_table == False:
                    reprocessed_content = reprocessed_content + line
        else:
            return content
        reprocessed_content = Helper.generate_handle_table_marker(reprocessed_content)
        return reprocessed_content


    @staticmethod
    def generate_cdx_component(content):
        """Replace cdx component"""
        code_block = content.split('<!--CDX-COMPONENT-->')
        processed_cont = ""
        for idx, cont in enumerate(code_block):
            if (idx % 2) == 0:
                current_len = len(code_block) - 1
                if idx != current_len:
                    processed_cont = processed_cont + cont + ''
                else:
                    processed_cont = processed_cont + cont
            else:
                processed_cont = processed_cont + cont
        return processed_cont

    @staticmethod
    def replace_bold(content):
        """Replace ** bold component"""
        code_block = content.split('**')
        processed_cont = ""
        for idx, cont in enumerate(code_block):
            if (idx % 2) == 0:
                current_len = len(code_block) - 1
                if idx != current_len:
                    processed_cont = processed_cont + cont
                else:
                    processed_cont = processed_cont +cont
            else:
                processed_cont = processed_cont + '<b>'+ cont + '</b>'
        return processed_cont

    @staticmethod
    def generate_code_block(content, identifier,style):
        """Generate code block"""
        code_block = content.split(identifier)
        processed_cont = ""
        for idx, cont in enumerate(code_block):
            if (idx % 2) == 0:
                current_len = len(code_block) - 1
                if idx != current_len:
                    processed_cont = processed_cont + cont + '<span hljs '+style+'>'
                else:
                    processed_cont = processed_cont + cont
            else:
                processed_cont = processed_cont + cont.replace('<br>','\n') + '</span>'
        return processed_cont

    @staticmethod
    def generate_multiple_code_block(content):
        """Generate code block"""
        return Helper.generate_code_block(content, '```','')
    
    @staticmethod
    def generate_single_code_block(content):
        """Generate code block"""
        return Helper.generate_code_block(content, '`','class=single_block')


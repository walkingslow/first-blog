import urllib2
import os
import json
import helper
import sys
#***************************************************************************
# Supported styles
# Different headings
# H1 - #, H2 - ##, H3 - ###, H4 - ####,  H5 - #####, H6 - ######
# <br> - \n
# *<space>,-<space> ul,li
# <img>
# quore starts with >
#***************************************************************************
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)));
OUTPUT_PATH = os.path.realpath(__location__ + '/../') + '/site-output'
INPUT_PATH = os.path.realpath(__location__ + '/../')
#***************************************************************************
# Common helper methods
#***************************************************************************

def init():
    "Initialization"
    global side_menu
    global CONTROLLER_SCRIPT
    side_menu = ''
    CONTROLLER_SCRIPT = ''


def replace_every_where(content):
    "Replace every where"
    content = content.replace('\n', '<br>')
    content = content.replace('```html', '```')
    content = content.replace('```css', '```')
    
    return content


def replace_first_occurence(content):
    "Replace first occurence "
    content = content.strip()
    content = helper.Helper.replace_h1_hash(content)
    # content = helper.Helper.replace_h1_star(content)
    content = helper.Helper.replace_list(content)
    content = helper.Helper.replace_image(content)
    content = helper.Helper.replace_quote(content)
    content = helper.Helper.replace_url(content)
    content = helper.Helper.replace_table(content)
    return content


def get_menu_from_metadata():
    """Get menu data from metadata file"""
    metadata_menu = None
    try:
        metadata_file = open(__location__ + "/metadata.json")
        metadata_content = metadata_file.read()
        metadata = json.loads(metadata_content)
        if metadata["menu"]:
            metadata_menu = metadata["menu"]
            #global side_menu
            #side_menu = metadata_content
    except:
        print 'No metadata.json file found. Falling back to folder structure'
        print sys.exc_info()[0]
    return metadata_menu


def generate_side_menu(menu_list):
    global side_menu
    global CONTROLLER_SCRIPT
    previous_menu = ''
    menu_from_meta = get_menu_from_metadata()
    if menu_from_meta is not None:
        for meta_menu in menu_from_meta:
            all_files_path = ""
            for all_files in meta_menu["files"]:
                all_files_path = all_files_path + all_files
            if len(meta_menu["files"]) > 1:
                meta_menu["filePath"] = all_files_path.replace('/','-')
                all_files_path = meta_menu["filePath"]
            else:
                meta_menu["filePath"] = all_files_path

            second_part = all_files_path.replace('/', '', 1)
            second_part_no_ext = second_part.replace('.html', '')
            side_menu = json.dumps({'menu':menu_from_meta})
            #second_part = meta_menu["filePath"].replace('/', '', 1)
            #second_part_no_ext = second_part.replace('.html', '')
            CONTROLLER_SCRIPT = CONTROLLER_SCRIPT + '''
                          $routeProvider.
                          when('/{path}', {{
                            templateUrl: '{templateUrl}',
                          }})
                      '''.format(path=meta_menu["title"], templateUrl=second_part + '.html')

    if menu_from_meta is None:
        menu_dict = {}
        menu_dict['menu'] = []
    for menu in menu_list:
        convert_to_html(menu)
        current_file_name_only = os.path.basename(menu)
        current_file_name_only = current_file_name_only.replace('.md', '.html')
        current_file_name_no_ext = current_file_name_only.replace('.html', '')
        full_new_path = menu.replace(INPUT_PATH, OUTPUT_PATH)
        full_new_path = full_new_path.replace('.md', '.html')
        full_new_path = full_new_path.split(OUTPUT_PATH)
        second_part = full_new_path[1].replace('/', '', 1)
        second_part_no_ext = second_part.replace('.html', '')
        if menu_from_meta is None:
            if previous_menu != second_part_no_ext.replace(current_file_name_no_ext, ''):
                temp = second_part_no_ext.replace(current_file_name_no_ext, '')[
                    :-1].replace('/', '&nbsp;&#10095;&nbsp;')
                menu_dict['menu'].append(
                    {'filePath': '#', 'title': temp, 'heading': True})
                menu_dict['menu'].append(
                    {'filePath': '#' + second_part_no_ext, 'title': current_file_name_no_ext})
            else:
                menu_dict['menu'].append(
                    {'filePath': '#' + second_part_no_ext, 'title': current_file_name_no_ext})
            previous_menu = second_part_no_ext.replace(
                current_file_name_no_ext, '')
            CONTROLLER_SCRIPT = CONTROLLER_SCRIPT + '''
              $routeProvider.
              when('/{path}', {{
                templateUrl: '{templateUrl}',
              }})
          '''.format(path=second_part_no_ext, templateUrl=second_part)
    if menu_from_meta is None:
        side_menu = json.dumps(menu_dict)


def generate_merged_files():
    merged_file_content = ""
    menu_from_meta1 = get_menu_from_metadata()
    if menu_from_meta1 is not None:
        for meta_menu in menu_from_meta1:
            if len(meta_menu["files"]) > 1:
                all_files_path = ""
                merged_file_content = ""
                for all_files in meta_menu["files"]:
                    all_files_path = all_files_path + all_files
                    merged_file_content  = merged_file_content + open(OUTPUT_PATH+''+all_files+".html", 'r').read()
                merged_file_name = all_files_path.replace('/','-')
                helper.Helper.write_to_file(
                    OUTPUT_PATH  +'/'+ merged_file_name+".html", merged_file_content)


def convert_to_html(file_path):
    """Convet to html"""
    readme_file = None
    try:
        readme_file = urllib2.urlopen(file_path)
    except:
        readme_file = open(file_path)
    readme_content = ""
    processed_content = ""
    for line in readme_file.readlines():
        readme_content = readme_content + line
        line = replace_every_where(line)
        line = replace_first_occurence(line)
        processed_content = processed_content + line

    processed_content = helper.Helper.generate_multiple_code_block(processed_content)
    processed_content = helper.Helper.generate_single_code_block(processed_content)
    processed_content = helper.Helper.generate_cdx_component(processed_content)
    processed_content = helper.Helper.replace_bold(processed_content)

    if 'ge-datatable' not in processed_content and 'Data Table' not in processed_content:
        processed_content = helper.Helper.handle_tables(processed_content)

    file_name_only = os.path.basename(file_path)
    full_new_path = os.path.dirname(file_path).replace(INPUT_PATH, OUTPUT_PATH)
    helper.Helper.pathtodir(full_new_path)
    file_name_only = file_name_only.replace('.md', '.html')
    helper.Helper.write_to_file(
        full_new_path + '/' + file_name_only, processed_content)

#***************************************************************************
# Main method to generate documentation
#***************************************************************************
init()
# Generate docs directory if not exists.
helper.Helper.gen_directory(OUTPUT_PATH)


# Copy all png files to destination folder.
IMG_FILES = helper.Helper.get_all_files_from(INPUT_PATH, '.png')
JPG_FILES = helper.Helper.get_all_files_from(INPUT_PATH, '.jpg')
IMG_FILES.extend(IMG_FILES)
for img in IMG_FILES:
    file_name_only = os.path.basename(img)
    full_new_path = os.path.dirname(img).replace(INPUT_PATH, OUTPUT_PATH)
    helper.Helper.pathtodir(full_new_path)
    helper.Helper.copy_file(img, full_new_path + '/' + file_name_only)

# Generate menu list from the file
MENU_LIST = helper.Helper.get_all_files_from(INPUT_PATH, '.md')
generate_side_menu(MENU_LIST)
generate_merged_files()

# Generate the actual theme.html from the file
#global side_menu
#global CONTROLLER_SCRIPT

THEME_FILE = open(INPUT_PATH + '/site/documentation.html', 'r')
HTML_TEMPLATE = THEME_FILE.read()
HTML_TEMPLATE = HTML_TEMPLATE.format(
    menu=side_menu, controller_script=CONTROLLER_SCRIPT)
helper.Helper.write_to_file(OUTPUT_PATH + '/documentation.html', HTML_TEMPLATE)

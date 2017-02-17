import os
import re
from datetime import datetime
# Make sure that css file matches with the file name which you have created.
metadata = [
    {'name':'Button', 'supported_elements':[{'name':'button','attributes':['disabled']},{'name':'a'},{'name':'input','attributes':['type=button value=Button']}], 'css_file':'button.css'},
    {'name':'Color', 'supported_elements':[{'name':'div'},{'name':'span'}], 'css_file':'color.css'},
    {'name':'Text Input', 'supported_elements':[{'name':'input','attributes':['type=text', 'placeholder="This is a placeholder"']}], 'css_file':'text-input.css'},
    {'name':'Badge0', 'supported_templates':[{'name':'<i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i>'}], 'css_file':'badge.css'},
    {'name':'Badge1', 'supported_templates':[{'name':'<h1><i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i></h1>'}], 'css_file':'badge.css'},
    {'name':'Badge2', 'supported_templates':[{'name':'<h2><i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i></h2>'}], 'css_file':'badge.css'},
    {'name':'Badge3', 'supported_templates':[{'name':'<h3><i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i></h3>'}], 'css_file':'badge.css'},
    {'name':'Badge4', 'supported_templates':[{'name':'<h4><i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i></h4>'}], 'css_file':'badge.css'},
    {'name':'Badge5', 'supported_templates':[{'name':'<h5><i class="fa fa-envelope " style="position: relative;"><span class="$$DYNAMIC_CLASS$$">16</span></i></h5>'}], 'css_file':'badge.css'}
]
## Get all files based on file
def get_all_css_files_from(sub_directory):
  css_files = [];
  current_directory = os.getcwd();
  for path, subdirs, files in os.walk(current_directory +'/..'+ sub_directory):
      for name in files:
          file_path = os.path.join(path, name)
          if file_path.endswith(".css"):
            css_files.append(file_path);
  return css_files;

##Get component name from file
def get_file_component_name(path):
  with open(path, "r") as file_content:
    if file_content is not None:
      for line in file_content:
        if str(line).startswith('.'):
          return line;
          # break;

## Get all combinations of a list of items
def combinations(items, i=0):
    if i==len(items):
        yield ()
        return
    for c in combinations(items,i+1):
        yield c
        yield c+(items[i],)

##Get template to generate the component
def get_button_template(ind, component_name, current_obj_metadata):
  temp ='';
  element_index = 0;
  all_main_keys = current_obj_metadata.keys()
  if 'supported_templates' in all_main_keys:
    for template in current_obj_metadata['supported_templates']:
      attribute_index = 0;
      element_index = element_index + 1
      class_nam = str(template['name']).replace('$$DYNAMIC_CLASS$$',component_name)
      code = class_nam.replace('<','&lt;')
      code = code.replace('>','&gt;')

      temp = temp + '  <cdx-test name="'+str(ind)+'">'+class_nam+'<br><code>'+code+'</code></cdx-test>\n'
  
  if 'supported_elements' in all_main_keys:
    for elem in current_obj_metadata['supported_elements']:
      attribute_index = 0;
      element_index = element_index + 1
      temp = temp + '  <cdx-test name="'+str(ind)+'.'+str(element_index)+'  '+current_obj_metadata['name']+' '+component_name+'">\n    <'+elem['name']+' class="'+component_name+'">'+current_obj_metadata['name']+'</'+elem['name']+'><br><code>&lt;'+elem['name']+' class="'+component_name+'" &gt;'+elem['name']+' &lt;/'+elem['name']+'&gt;</code>\n  </cdx-test>\n'
      if 'attributes' in elem.keys():
        for attr in elem['attributes']:
          attribute_index = attribute_index + 1
          temp = temp + '  <cdx-test name="'+str(ind)+'.'+str(element_index)+'.'+str(attribute_index)+'  '+current_obj_metadata['name']+component_name+'">\n    <'+elem['name']+' class="'+component_name+'" '+attr+'>'+elem['name']+'</'+elem['name']+'><br><code>&lt;'+elem['name']+' class="'+component_name+'" '+attr+'&gt;'+current_obj_metadata['name']+' &lt;/'+elem['name']+'&gt;</code>\n  </cdx-test>\n'

  return temp

# Method to generate test file based on the component, css_file and metadata
def generate_test_file(component_name,css_file,current_obj_metadata,layout):
  component_name = str(component_name).replace(',','').replace('{','').strip();
  component_name = component_name + ' '
  component_name = component_name.replace('.','')
  first_occurence = re.split('\s+', component_name)
  component_name = first_occurence[0]
  fileContent = ''
  all_classes = [];
  with open(css_file, "r") as ins:
      fileContent = 'extends ../../layouts/'+layout+'.pug\n'
      fileContent = fileContent + 'block content\n'
      fileContent = fileContent+ get_button_template(0, component_name,current_obj_metadata);
      for line in ins:
        if str(line).startswith('.') :
          classVal = line.replace('{','').replace(',','').replace('.--','--').replace('.-',' -').replace('.','')
          classVal = classVal.strip();
          only_attribute = classVal.replace(component_name,'')
          if only_attribute:
            all_classes.append(only_attribute);
      all_attributes = set(combinations(all_classes))
      index = 0
      sorted_list = [];
      for attribute in all_attributes:
        index = index + 1
        combination = ''
        for attr in attribute:
          combination = combination +' '+attr
        if combination:
          combination = component_name+combination
          if ':' not in str(combination):
            sorted_list.append(combination)
      sorted_list.sort(reverse=True)
      index = 0;
      for item in sorted_list:
        index = index + 1
        fileContent = fileContent+get_button_template(index,item,current_obj_metadata)
      return fileContent

# Method to check whther the dictionary has a value
def contains_in_dict(key,value,generate_tests):
  for obj in generate_tests:
      if obj[key] == value:
        return True;
  return False;

# Method to get the object based on key and value from list of dictionaries
def get_obj(key,value,generate_tests):
  for obj in generate_tests:
      if obj[key] == value:
        return obj;
  return None;

def get_objs(key,value,generate_tests):
  objs = [];
  for obj in generate_tests:
      if obj[key] == value:
        objs.append(obj);
  return objs;

def gen_tests(layout):
  # Code to parse the list of files fo find out all the css files and generate test files.
  list_css_files = get_all_css_files_from('/src');
  for css_file in list_css_files:
    path = css_file.rstrip(os.sep)
    file_name_from_path = os.path.basename(path)
    dir_name_from_path = os.path.dirname(path);
    only_dir_name = dir_name_from_path[dir_name_from_path.rfind('/')+1:]
    for all_objs  in get_objs('css_file',file_name_from_path,metadata):   
      #current_obj_metadata = get_obj('css_file',file_name_from_path,metadata)
      current_obj_metadata = all_objs
      if contains_in_dict('css_file',file_name_from_path,metadata) == True:
        current_directory = os.getcwd();
        test_dir = current_directory+"/../test/auto-generated"
        if only_dir_name not in os.listdir(test_dir):
          os.mkdir(test_dir+'/'+only_dir_name)
        #Get component name from css file[.ge-button, ]
        component_name = get_file_component_name(css_file);
        test_file_name = test_dir+'/'+only_dir_name+'/'+file_name_from_path
        fileContent = ''
        all_classes = [];
        if component_name is not None:
          test_file_content = generate_test_file(component_name,css_file,current_obj_metadata, layout);
          #test_file_name = test_file_name.replace('.css','-'+str(datetime.now())+'.pug')
          test_file_name = test_file_name.replace('.css','-'+layout+'-'+current_obj_metadata['name']+'.pug')
          print 'generating template' + test_file_name
          with open(test_file_name, "w") as text_file:
            text_file.write(test_file_content)

gen_tests('main.layout')
#gen_tests('main.layout.no-ge')

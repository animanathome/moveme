#!/usr/bin/env python
import os
import shutil

'''
run python build.py from /Users/manu/GitHub/moveme/build
'''

# MINIFY
def minify_ui():
	print '# minify_ui'

	if not os.path.exists('minified'):
		os.mkdir('minified')

	os.mkdir('minified/animanatwork:ui')

	# copy over package file
	src = 'packages/ui.js'
	dst = 'minified/animanatwork:ui/package.js'
	shutil.copyfile(src, dst)

	# minify package
	root = '../main/packages/animanatwork:ui/'
	jfiles = [
	  'main.js'
	, 'basic.js'
	, 'panel.js'
	, 'timeline.js'
	, 'range_slider.js'
	, 'panel_layout.js'
	, 'tab.js'
	, 'group_scroll_list.js'
	, 'menu_bar.js'
	, 'select.js' 
	, 'drop_down.js'   
	, 'input.js'
	, 'dialog.js'
	]
	source = ''
	for jfile in jfiles:
		source += os.path.join(root, jfile)+' '

	externs = 'externs/ui.js'

	output = 'minified/animanatwork:ui/ui.min.js'

	cmd = 'java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --externs '+externs+' --jscomp_off=checkTypes --language_in=ECMASCRIPT5_STRICT --js '+source+' --js_output_file '+output
	os.system(cmd)

	return 'minified/animanatwork:ui'

def backup_ui():
	print '# backup_ui'

	if not os.path.exists('backup'):
		os.mkdir('backup')	

	src = "../main/packages/animanatwork:ui"
	dst = "backup/animanatwork:ui"
	shutil.copytree(src, dst)

	shutil.rmtree(src)	

def move_ui(src):
	shutil.copytree(src, '../main/packages/animanatwork:ui')
	shutil.rmtree(src)

def minify_moveme():
	'''
	Strange variables that are missing. They are defined in TransformControls but don't have the proper namespace!!!
	THREErad and THREEPi -> two_bone_ik_solver
	'''

	if not os.path.exists('minified'):
		os.mkdir('minified')

	os.mkdir('minified/animanatwork:moveme')

	# copy over package file
	src = 'packages/moveme.js'
	dst = 'minified/animanatwork:moveme/package.js'
	shutil.copyfile(src, dst)

	# minify package
	root = '../main/packages/animanatwork:moveme/'
	jfiles = [
           "moveme.js"
          ,"extensions.js"
          ,"loader.js"

          ,"view_base/layout.js"
          ,"view_base/panel_view.js"
          ,"view_base/panel_view_layout.js"
          ,"view_base/project_bar.js"
          ,"view_base/scene_view.js"
          ,"view_base/side_bar.js"
          ,"view_base/settings.js"

          ,"editor_scene/editor.js"
          ,"editor_scene/editor_scene_object.js"
          ,"editor_scene/editor_scene_key.js"
          ,"editor_scene/editor_scene_setup.js"
          ,"editor_scene/editor_asset.js"
          ,"editor_scene/editor_anim.js"
          ,"editor_scene/editor_undo.js"
          ,"editor_scene/editor_group.js"
          ,"editor_scene/editor_visibility.js"
          ,"editor_scene/editor_io.js"

          ,"view_menu_bar/menu_bar.js"
          ,"view_menu_bar/menu_bar_animate.js"
          ,"view_menu_bar/menu_bar_demo.js"
          ,"view_menu_bar/menu_bar_edit.js"
          ,"view_menu_bar/menu_bar_file.js"
          ,"view_menu_bar/menu_bar_help.js"
          ,"view_menu_bar/menu_bar_insert.js"
          ,"view_menu_bar/menu_bar_view.js"

          ,"view_tool_bar/tool_bar.js"
          ,"view_tool_bar/tool_bar_key_view.js"
          ,"view_tool_bar/tool_bar_scene_view.js"

          ,"view_key/anim_curve.js"
          ,"view_key/anim_curve_display.js"
          ,"view_key/key_tangent_display.js"
          ,"view_key/key_view.js"
          ,"view_key/key_view_controls.js"
          ,"view_key/key_view_grid.js"
          ,"view_key/key_view_options.js"
          ,"view_key/key_view_outliner.js"

          ,"objects_group/group.js"
          ,"objects_group/group_manager.js"

          ,"objects_view/group_view.js"
          ,"objects_view/group_view_list.js"

          ,"objects_rig/control.js"
          ,"objects_rig/constraint.js"
          ,"objects_rig/control_display.js"
          ,"objects_rig/control_display_full.js"
          ,"objects_rig/joint.js"
          ,"objects_rig/joint_display.js"
          ,"objects_rig/space_switch.js"
          ,"objects_rig/space_switch_split.js"
          ,"objects_rig/parent_master.js"
          ,"objects_rig/multi_channel.js"
          
          ,"objects_rig/number.js"
          ,"objects_rig/lip_zip.js"
          ,"objects_rig/deform.js"

          ,"objects_ik/curve_solver.js"
          ,"objects_ik/one_simple_bone_ik_solver.js"
          ,"objects_ik/two_bone_ik_solver.js"
          ,"objects_ik/two_bone_soft_ik_solver.js"
          ,"objects_ik/two_bone_ik_blend_solver.js"
          ,"objects_ik/four_bone_ik_blend_solver.js"
          ,"objects_ik/two_step_four_bone_ik_blend_solver.js"

          ,"objects_asset/asset.js"
          ,"objects_asset/build.js"
          ,"objects_asset/build_asset.js"
          ,"objects_asset/build_process.js"
          ,"objects_asset/convert.js"
          ,"objects_asset/key_asset.js"
          ,"objects_asset/select_asset.js"
          
          ,"build_demo/demo_constraint.js"
          ,"build_demo/demo_control.js"
          ,"build_demo/demo_data_io.js"
          ,"build_demo/demo_deform.js"
          ,"build_demo/demo_multi_channel.js"
          ,"build_demo/demo_rig_component.js"

          ,"components_rig/rig_component.js"
          ,"components_rig/rig_component_global.js"
          ,"components_rig/rig_component_fk_chain.js"
          ,"components_rig/rig_component_shoulder.js"
          ,"components_rig/rig_component_tentacle.js"
          ,"components_rig/rig_component_spine.js"
          ,"components_rig/rig_component_limb.js"
          ,"components_rig/rig_component_arm.js"
          ,"components_rig/rig_component_leg.js"
          ,"components_rig/rig_component_leg_blend.js"
          ,"components_rig/rig_component_two_step_leg_blend.js"

          ,"build_asset/insert_camera.js"
          ,"build_asset/insert_cube.js"
          ,"build_asset/insert_dino.js"
          ,"build_asset/insert_ground.js"
          ,"build_asset/insert_legs.js"
          ,"build_asset/insert_plane.js"
          ,"build_asset/insert_ramp.js"
          ,"build_asset/insert_sphere.js"
          ,"build_asset/insert_tail.js"
          ,"build_asset/insert_simple_biped.js"
          ,"build_asset/insert_tiny.js"
          ,"build_asset/insert_baby.js"
          ,"build_asset/insert_maxi.js"
	  ]
	source = ''
	for jfile in jfiles:
		source += os.path.join(root, jfile)+' '

	externs = 'externs/moveme.js'

	output = 'minified/animanatwork:moveme/moveme.min.js'

	cmd = 'java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --externs '+externs+' --jscomp_off=checkTypes --language_in=ECMASCRIPT5_STRICT --js '+source+' --js_output_file '+output
	os.system(cmd)

	return 'minified/animanatwork:moveme'

def backup_moveme():
	print '# backup_moveme'

	if not os.path.exists('backup'):
		os.mkdir('backup')	

	src = "../main/packages/animanatwork:moveme"
	dst = "backup/animanatwork:moveme"
	shutil.copytree(src, dst)	

	shutil.rmtree(src)

def move_moveme(src):
	shutil.copytree(src, '../main/packages/animanatwork:moveme')	
	shutil.rmtree(src)

def minify_three():
	
	if not os.path.exists('minified'):
		os.mkdir('minified')

	os.mkdir('minified/animanatwork:three')

	# copy over package file
	src = 'packages/three.js'
	dst = 'minified/animanatwork:three/package.js'
	shutil.copyfile(src, dst)

	# minify package
	root = '../main/packages/animanatwork:three/'
	jfiles = [
			 "src/three_r60.js"

			, 'lib/BufferGeometryExporter.js'
			, 'lib/EditorControls.js'
			, 'lib/GeometryExporter.js'
			, 'lib/MaterialExporter.js'
			, 'lib/NURBSCurve.js'
			, 'lib/NURBSUtils.js'
			, 'lib/ObjectExporter.js'
			, 'lib/ObjectLoader.js'
			, 'lib/OBJExporter.js'
			, 'lib/OBJLoader.js'
			, 'lib/Raycaster.js'
			, 'lib/SkinnedMesh.js'
			, 'lib/TransformControls.js'
			, 'lib/WebGLShaders.js'
			, 'lib/planeHelper.js'
			, 'lib/SceneExporter.js'

			,'extensions/extensions_three_object.js'
			,'extensions/extensions_three_scene.js'
			,'extensions/extensions_three_ortho.js'
			,'extensions/extensions_three_matrix4.js'
			,'extensions/extensions_three_euler.js'
			,'extensions/extensions_three_quaternion.js'
			,'extensions/extensions_three_vector3.js'
			,'extensions/extensions_three_skinnedMesh.js'
			]
	
	source = '';
	for jfile in jfiles:
		source += os.path.join(root, jfile)+' '

	externs = 'externs/three.js'

	output = 'minified/animanatwork:three/three.min.js'

	cmd = 'java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --externs '+externs+' --jscomp_off=checkTypes --language_in=ECMASCRIPT5_STRICT --js '+source+' --js_output_file '+output
	os.system(cmd)

	return 'minified/animanatwork:three'

def backup_three():
	print '# backup_three'

	if not os.path.exists('backup'):
		os.mkdir('backup')	

	src = "../main/packages/animanatwork:three"
	dst = "backup/animanatwork:three"
	shutil.copytree(src, dst)
	
	shutil.rmtree(src)

def move_three(src):
	shutil.copytree(src, '../main/packages/animanatwork:three')
	shutil.rmtree(src)

def minify_all():
	print 'minify_all'

	mini_ui = minify_ui()
	mini_moveme = minify_moveme()
	mini_three = minify_three()

	backup_ui();
	backup_moveme();
	backup_three();	

	move_ui(mini_ui);
	move_moveme(mini_moveme);
	move_three(mini_three);

	shutil.rmtree('minified')

	print '\tdone'

# RESTORE
def restore_all():
	print 'restore_all'

	#	remove minified packages 
	shutil.rmtree("../main/packages/animanatwork:three")
	shutil.rmtree("../main/packages/animanatwork:ui")
	shutil.rmtree("../main/packages/animanatwork:moveme")

	# 	restore all packages
	#	three
	dst = "../main/packages/animanatwork:three"
	src = "backup/animanatwork:three"
	shutil.copytree(src, dst)

	#	moveme
	dst = "../main/packages/animanatwork:moveme"
	src = "backup/animanatwork:moveme"
	shutil.copytree(src, dst)

	#	ui
	dst = "../main/packages/animanatwork:ui"
	src = "backup/animanatwork:ui"
	shutil.copytree(src, dst)

	shutil.rmtree('backup')

	print '\tdone'

if __name__ == "__main__":
	# minify all packages
	if not os.path.exists('backup'):
		minify_all()
	# restore packages
	else:
		restore_all()

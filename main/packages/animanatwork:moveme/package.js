Package.describe({
  name: 'animanatwork:moveme',
  summary: 'Move Me animation package',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use([
           "animanatwork:three", 
           "animanatwork:ui", 
           "codeadventure:js-signals"
           ], "client");
  api.addFiles([      
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
          ,"objects_rig/parent_master.js"
          ,"objects_rig/multi_channel.js"
          // ,"objects_rig/cluster.js"
          
          ,"objects_rig/number.js"
          ,"objects_rig/lip_zip.js"
          ,"objects_rig/deform.js"

          ,"objects_ik/spline_solver.js"
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
          ,"components_rig/rig_component_spine_chain.js"
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
          ,"build_asset/insert_tiny.js"
          ,"build_asset/insert_baby.js"
          ,"build_asset/insert_maxi.js"
          ], 'client');

  if (api.export) 
    api.export('MM');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('animanatwork:moveme');
//   api.addFiles('animanatwork:moveme-tests.js');
// });

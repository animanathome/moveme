//Maya ASCII 2014 scene
//Name: legs_005.ma
//Last modified: Fri, Mar 13, 2015 10:05:51 AM
//Codeset: UTF-8
requires maya "2014";
requires -nodeType "mentalrayFramebuffer" -nodeType "mentalrayOutputPass" -nodeType "mentalrayRenderPass"
		 -nodeType "mentalrayUserBuffer" -nodeType "mentalraySubdivApprox" -nodeType "mentalrayCurveApprox"
		 -nodeType "mentalraySurfaceApprox" -nodeType "mentalrayDisplaceApprox" -nodeType "mentalrayOptions"
		 -nodeType "mentalrayGlobals" -nodeType "mentalrayItemsList" -nodeType "mentalrayShader"
		 -nodeType "mentalrayUserData" -nodeType "mentalrayText" -nodeType "mentalrayTessellation"
		 -nodeType "mentalrayPhenomenon" -nodeType "mentalrayLightProfile" -nodeType "mentalrayVertexColors"
		 -nodeType "mentalrayIblShape" -nodeType "mapVizShape" -nodeType "mentalrayCCMeshProxy"
		 -nodeType "cylindricalLightLocator" -nodeType "discLightLocator" -nodeType "rectangularLightLocator"
		 -nodeType "sphericalLightLocator" -nodeType "abcimport" -nodeType "mia_physicalsun"
		 -nodeType "mia_physicalsky" -nodeType "mia_material" -nodeType "mia_material_x" -nodeType "mia_roundcorners"
		 -nodeType "mia_exposure_simple" -nodeType "mia_portal_light" -nodeType "mia_light_surface"
		 -nodeType "mia_exposure_photographic" -nodeType "mia_exposure_photographic_rev" -nodeType "mia_lens_bokeh"
		 -nodeType "mia_envblur" -nodeType "mia_ciesky" -nodeType "mia_photometric_light"
		 -nodeType "mib_texture_vector" -nodeType "mib_texture_remap" -nodeType "mib_texture_rotate"
		 -nodeType "mib_bump_basis" -nodeType "mib_bump_map" -nodeType "mib_passthrough_bump_map"
		 -nodeType "mib_bump_map2" -nodeType "mib_lookup_spherical" -nodeType "mib_lookup_cube1"
		 -nodeType "mib_lookup_cube6" -nodeType "mib_lookup_background" -nodeType "mib_lookup_cylindrical"
		 -nodeType "mib_texture_lookup" -nodeType "mib_texture_lookup2" -nodeType "mib_texture_filter_lookup"
		 -nodeType "mib_texture_checkerboard" -nodeType "mib_texture_polkadot" -nodeType "mib_texture_polkasphere"
		 -nodeType "mib_texture_turbulence" -nodeType "mib_texture_wave" -nodeType "mib_reflect"
		 -nodeType "mib_refract" -nodeType "mib_transparency" -nodeType "mib_continue" -nodeType "mib_opacity"
		 -nodeType "mib_twosided" -nodeType "mib_refraction_index" -nodeType "mib_dielectric"
		 -nodeType "mib_ray_marcher" -nodeType "mib_illum_lambert" -nodeType "mib_illum_phong"
		 -nodeType "mib_illum_ward" -nodeType "mib_illum_ward_deriv" -nodeType "mib_illum_blinn"
		 -nodeType "mib_illum_cooktorr" -nodeType "mib_illum_hair" -nodeType "mib_volume"
		 -nodeType "mib_color_alpha" -nodeType "mib_color_average" -nodeType "mib_color_intensity"
		 -nodeType "mib_color_interpolate" -nodeType "mib_color_mix" -nodeType "mib_color_spread"
		 -nodeType "mib_geo_cube" -nodeType "mib_geo_torus" -nodeType "mib_geo_sphere" -nodeType "mib_geo_cone"
		 -nodeType "mib_geo_cylinder" -nodeType "mib_geo_square" -nodeType "mib_geo_instance"
		 -nodeType "mib_geo_instance_mlist" -nodeType "mib_geo_add_uv_texsurf" -nodeType "mib_photon_basic"
		 -nodeType "mib_light_infinite" -nodeType "mib_light_point" -nodeType "mib_light_spot"
		 -nodeType "mib_light_photometric" -nodeType "mib_cie_d" -nodeType "mib_blackbody"
		 -nodeType "mib_shadow_transparency" -nodeType "mib_lens_stencil" -nodeType "mib_lens_clamp"
		 -nodeType "mib_lightmap_write" -nodeType "mib_lightmap_sample" -nodeType "mib_amb_occlusion"
		 -nodeType "mib_fast_occlusion" -nodeType "mib_map_get_scalar" -nodeType "mib_map_get_integer"
		 -nodeType "mib_map_get_vector" -nodeType "mib_map_get_color" -nodeType "mib_map_get_transform"
		 -nodeType "mib_map_get_scalar_array" -nodeType "mib_map_get_integer_array" -nodeType "mib_fg_occlusion"
		 -nodeType "mib_bent_normal_env" -nodeType "mib_glossy_reflection" -nodeType "mib_glossy_refraction"
		 -nodeType "builtin_bsdf_architectural" -nodeType "builtin_bsdf_architectural_comp"
		 -nodeType "builtin_bsdf_carpaint" -nodeType "builtin_bsdf_ashikhmin" -nodeType "builtin_bsdf_lambert"
		 -nodeType "builtin_bsdf_mirror" -nodeType "builtin_bsdf_phong" -nodeType "contour_store_function"
		 -nodeType "contour_store_function_simple" -nodeType "contour_contrast_function_levels"
		 -nodeType "contour_contrast_function_simple" -nodeType "contour_shader_simple" -nodeType "contour_shader_silhouette"
		 -nodeType "contour_shader_maxcolor" -nodeType "contour_shader_curvature" -nodeType "contour_shader_factorcolor"
		 -nodeType "contour_shader_depthfade" -nodeType "contour_shader_framefade" -nodeType "contour_shader_layerthinner"
		 -nodeType "contour_shader_widthfromcolor" -nodeType "contour_shader_widthfromlightdir"
		 -nodeType "contour_shader_widthfromlight" -nodeType "contour_shader_combi" -nodeType "contour_only"
		 -nodeType "contour_composite" -nodeType "contour_ps" -nodeType "mi_metallic_paint"
		 -nodeType "mi_metallic_paint_x" -nodeType "mi_bump_flakes" -nodeType "mi_car_paint_phen"
		 -nodeType "mi_metallic_paint_output_mixer" -nodeType "mi_car_paint_phen_x" -nodeType "physical_lens_dof"
		 -nodeType "physical_light" -nodeType "dgs_material" -nodeType "dgs_material_photon"
		 -nodeType "dielectric_material" -nodeType "dielectric_material_photon" -nodeType "oversampling_lens"
		 -nodeType "path_material" -nodeType "parti_volume" -nodeType "parti_volume_photon"
		 -nodeType "transmat" -nodeType "transmat_photon" -nodeType "mip_rayswitch" -nodeType "mip_rayswitch_advanced"
		 -nodeType "mip_rayswitch_environment" -nodeType "mip_card_opacity" -nodeType "mip_motionblur"
		 -nodeType "mip_motion_vector" -nodeType "mip_matteshadow" -nodeType "mip_cameramap"
		 -nodeType "mip_mirrorball" -nodeType "mip_grayball" -nodeType "mip_gamma_gain" -nodeType "mip_render_subset"
		 -nodeType "mip_matteshadow_mtl" -nodeType "mip_binaryproxy" -nodeType "mip_rayswitch_stage"
		 -nodeType "mip_fgshooter" -nodeType "mib_ptex_lookup" -nodeType "misss_physical"
		 -nodeType "misss_physical_phen" -nodeType "misss_fast_shader" -nodeType "misss_fast_shader_x"
		 -nodeType "misss_fast_shader2" -nodeType "misss_fast_shader2_x" -nodeType "misss_skin_specular"
		 -nodeType "misss_lightmap_write" -nodeType "misss_lambert_gamma" -nodeType "misss_call_shader"
		 -nodeType "misss_set_normal" -nodeType "misss_fast_lmap_maya" -nodeType "misss_fast_simple_maya"
		 -nodeType "misss_fast_skin_maya" -nodeType "misss_fast_skin_phen" -nodeType "misss_fast_skin_phen_d"
		 -nodeType "misss_mia_skin2_phen" -nodeType "misss_mia_skin2_phen_d" -nodeType "misss_lightmap_phen"
		 -nodeType "misss_mia_skin2_surface_phen" -nodeType "surfaceSampler" -nodeType "mib_data_bool"
		 -nodeType "mib_data_int" -nodeType "mib_data_scalar" -nodeType "mib_data_vector"
		 -nodeType "mib_data_color" -nodeType "mib_data_string" -nodeType "mib_data_texture"
		 -nodeType "mib_data_shader" -nodeType "mib_data_bool_array" -nodeType "mib_data_int_array"
		 -nodeType "mib_data_scalar_array" -nodeType "mib_data_vector_array" -nodeType "mib_data_color_array"
		 -nodeType "mib_data_string_array" -nodeType "mib_data_texture_array" -nodeType "mib_data_shader_array"
		 -nodeType "mib_data_get_bool" -nodeType "mib_data_get_int" -nodeType "mib_data_get_scalar"
		 -nodeType "mib_data_get_vector" -nodeType "mib_data_get_color" -nodeType "mib_data_get_string"
		 -nodeType "mib_data_get_texture" -nodeType "mib_data_get_shader" -nodeType "mib_data_get_shader_bool"
		 -nodeType "mib_data_get_shader_int" -nodeType "mib_data_get_shader_scalar" -nodeType "mib_data_get_shader_vector"
		 -nodeType "mib_data_get_shader_color" -nodeType "user_ibl_env" -nodeType "user_ibl_rect"
		 -nodeType "mia_material_x_passes" -nodeType "mi_metallic_paint_x_passes" -nodeType "mi_car_paint_phen_x_passes"
		 -nodeType "misss_fast_shader_x_passes" -dataType "byteArray" "Mayatomr" "2014.0 - 3.11.1.4 ";
requires "fkSolver" "3.0";
currentUnit -l centimeter -a degree -t film;
fileInfo "application" "maya";
fileInfo "product" "Maya 2014";
fileInfo "version" "2014 x64";
fileInfo "cutIdentifier" "201303010035-864206";
fileInfo "osv" "Mac OS X 10.9.5";
createNode transform -s -n "persp";
	setAttr ".t" -type "double3" 2.4481059355115331 1.850909470237796 2.0257497386949423 ;
	setAttr ".r" -type "double3" -14.738352728718867 52.99999999999401 0 ;
	setAttr ".rpt" -type "double3" -3.944304526105059e-31 -1.3657154421638767e-29 1.9721522630525295e-31 ;
createNode camera -s -n "perspShape" -p "persp";
	setAttr -k off ".v";
	setAttr ".fl" 34.999999999999979;
	setAttr ".coi" 3.1696495765423878;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".tp" -type "double3" 0 1.0445336326956749 0.18096959590911865 ;
	setAttr ".hc" -type "string" "viewSet -p %camera";
createNode transform -s -n "top";
	setAttr ".t" -type "double3" 0 100.1 0 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	setAttr ".t" -type "double3" 0.34571464092059856 1.564069509506226 0.08775399193384438 ;
	setAttr ".r" -type "double3" 0 0.10249496563574557 0 ;
	setAttr ".rp" -type "double3" 0 2.2204460492503131e-16 0 ;
	setAttr ".rpt" -type "double3" -1.5081050610581722e-15 -3.5591595797439887e-16 -1.1842024835219651e-15 ;
createNode camera -s -n "frontShape" -p "front";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 0.087754132343594027;
	setAttr ".ow" 13.451320812859121;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".tp" -type "double3" 0.34555765986443043 1.5640695095062256 -1.3877787807814457e-17 ;
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	setAttr ".t" -type "double3" 100.10999095795653 0.58478927498534383 0.1448204970344211 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 1.1444650299541645;
	setAttr ".imn" -type "string" "side";
	setAttr ".den" -type "string" "side_depth";
	setAttr ".man" -type "string" "side_mask";
	setAttr ".hc" -type "string" "viewSet -s %camera";
	setAttr ".o" yes;
createNode joint -n "cRoot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".bps" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode joint -n "cSpine0" -p "cRoot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" -1.2481371638932422e-16 1.5234977869939721 -0.00020427181308234474 ;
	setAttr ".jo" -type "double3" 90.000000000000014 0.29118063624749313 90.415461893171141 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861388e-05 0.0050819053394226543 0.99998708635670186 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 -1.2481371638932422e-16 1.5234977869939721 -0.00020427181308234474 1;
createNode joint -n "lHipRot" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0 -1.2210050380172922e-05 0.33 ;
	setAttr ".jo" -type "double3" 90.000000000001393 -89.584538106828873 -179.70881936375426 ;
	setAttr ".bps" -type "matrix" 1.0000000000000002 1.3877787807814457e-17 1.116634359366745e-17 0
		 -4.2500725161431774e-17 1.0000000000000002 -6.3524327163852122e-15 0 -8.9827088773357288e-17 6.1384436723857873e-15 1.0000000000000002 0
		 0.32999132485697902 1.525890592698486 -0.00021648170578635566 1;
createNode joint -n "lHip" -p "lHipRot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.11257119728088072 -0.002392805704513723 0.0038659362197039368 ;
	setAttr ".jo" -type "double3" 89.999999999999972 -3.7985831032088613 -89.870486625455783 ;
	setAttr ".bps" -type "matrix" 0.0022554669568004928 -0.99780055773920839 0.066249225234198836 0
		 -0.00014975192740377766 0.066249055981891708 0.9978031069083062 0 -0.99999744521832024 -0.0022604328861923909 4.472821426034068e-16 0
		 0.44256252213785974 1.5234977869939723 0.0036494545139175985 1;
createNode joint -n "lKnee" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 0.61650609214605023 -0.032099740750755744 0.0013953196822854771 ;
	setAttr ".jo" -type "double3" 0.05887363121928111 -0.89419839126438783 -7.565629293359323 ;
	setAttr ".bps" -type "matrix" -0.013350758322473767 -0.99775062933432612 -0.065692000389475744 0
		 -0.00087893656994139494 -0.06568612019047039 0.99783994762929273 0 -0.99991048835519336 0.013379659086803468 2.6340152157079918e-17 0
		 0.44256252213785963 0.90621793285252583 0.01246328441870178 1;
createNode joint -n "lAnkle" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.67177144734718264 0.034342525608332723 -0.0089996487164910582 ;
	setAttr ".jo" -type "double3" -0.06029118997617524 0.75842018647814891 -0.77876015785936881 ;
	setAttr ".bps" -type "matrix" -0.00010105259733124081 -0.99685547158864629 -0.079241141789792843 0
		 -8.0327824647126456e-06 -0.079241141382645958 0.9968554767105664 0 -0.9999999948619237 0.00010137136193971892 2.5304450426365331e-16 0
		 0.4425625221378594 0.23358130899656226 0.0026016181924083392 1;
createNode joint -n "lBall" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.20736109674421185 0.3099251587512139 -2.344393891226816e-05 ;
	setAttr ".jo" -type "double3" 0.0058081455812987416 8.091194102631672e-06 94.465130504444687 ;
	setAttr ".bps" -type "matrix" 3.4445780646222279e-16 -0.0013930756639798025 0.99999902966962684 0
		 -7.9188066694213521e-14 0.99999902966962639 0.0013930756639796843 0 -1.0000000000000002 -7.9197336622788272e-14 3.0887413858291672e-16 0
		 0.44256252213785918 0.0023134394132841019 0.29512067999515257 1;
createNode joint -n "lToe" -p "lBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" 0.46270536384544142 -0.00010347820086067927 -2.2409028855893065e-16 ;
	setAttr ".bps" -type "matrix" 3.4445780646222279e-16 -0.0013930756639798025 0.99999902966962684 0
		 -7.9188066694213521e-14 0.99999902966962639 0.0013930756639796843 0 -1.0000000000000002 -7.9197336622788272e-14 3.0887413858291672e-16 0
		 0.44256252213785957 0.0015653777308654595 0.75782545071056229 1;
createNode joint -n "lHeel" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.25571127807235211 -0.26975659058582269 4.1288495406972717e-05 ;
	setAttr ".bps" -type "matrix" -0.00010105259733124081 -0.99685547158864629 -0.079241141789792843 0
		 -8.0327824647126456e-06 -0.079241141382645958 0.9968554767105664 0 -0.9999999948619237 0.00010137136193971892 2.5304450426365331e-16 0
		 0.44249756024985909 4.994662219495738e-05 -0.28656957015481943 1;
createNode joint -n "lAnkleStretch" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.67177144734718264 0.034342525608332716 -0.0089996487164911154 ;
	setAttr ".jo" -type "double3" -0.060291189976175219 0.75842018647814879 -0.77876015785936814 ;
	setAttr ".bps" -type "matrix" -0.00010105259733124254 -0.99685547158864629 -0.079241141789792829 0
		 -8.0327824647130792e-06 -0.079241141382645944 0.9968554767105664 0 -0.9999999948619237 0.00010137136193972066 2.5282766382915621e-16 0
		 0.44256252213785952 0.23358130899656226 0.0026016181924083323 1;
createNode joint -n "lKneeStretch" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 0.61650609214605034 -0.032099740750755765 0.0013953196822854563 ;
	setAttr ".jo" -type "double3" 0.05887363121928111 -0.89419839126438805 -7.5656292933593212 ;
	setAttr ".bps" -type "matrix" -0.013350758322473771 -0.99775062933432612 -0.065692000389475716 0
		 -0.00087893656994139494 -0.065686120190470362 0.99783994762929273 0 -0.99991048835519336 0.013379659086803471 2.6123311722582818e-17 0
		 0.44256252213785963 0.90621793285252572 0.012463284418701766 1;
createNode joint -n "rHipRot" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0 -1.2210050380172922e-05 -0.33 ;
	setAttr ".jo" -type "double3" 90.000000000001762 -89.584538106828887 -179.70881936375477 ;
	setAttr ".bps" -type "matrix" 1 2.3505503099485736e-16 6.5552635070971591e-17 0 1.214306433183765e-17 1 2.1182833017794647e-14 0
		 1.0901558966048423e-16 -2.1284065035855579e-14 1 0 -0.32999132395708763 1.5211048571888177 -0.00021648170578620913 1;
createNode joint -n "rHip" -p "rHipRot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.11257167604291224 0.0023951428111825823 0.0038659317057861669 ;
	setAttr ".jo" -type "double3" -89.999999999964274 3.7985831032104231 89.870486625455797 ;
	setAttr ".bps" -type "matrix" 0.0022554669568002387 0.9978005577392085 -0.0662492252341986 0
		 -0.00014975192802785112 -0.066249055981890098 -0.99780310690830609 0 -0.99999744521832001 0.0022604328862333863 6.2215131290471647e-13 0
		 -0.44256299999999987 1.5235000000000003 0.0036494500000000011 1;
createNode joint -n "rKnee" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" -0.61650823461620485 0.032099862860789433 -0.0013953245328744979 ;
	setAttr ".jo" -type "double3" 0.05937516286436173 -0.89419839126909384 -7.5656292933587901 ;
	setAttr ".bps" -type "matrix" -0.013350758322473984 0.99775062933432623 0.065692000389476327 0
		 -0.00088768916550659757 0.065686003070725904 -0.99783994759106442 0 -0.99991048062322085 -0.013380234061804689 8.7344713707297207e-06 0
		 -0.44256299999999987 0.90621799999999975 0.0124633 1;
createNode joint -n "rAnkle" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.67177182354995368 -0.034342457793123879 0.0089999543620681854 ;
	setAttr ".jo" -type "double3" -0.060792719217139669 0.75841336987616736 -0.7787667963435343 ;
	setAttr ".bps" -type "matrix" -0.00010105259732979752 0.99685547158864629 0.079241141789794467 0
		 -8.0327833424352364e-06 0.079241141382647498 -0.99685547671056596 0 -0.99999999486192359 -0.00010137136200793172 8.7470083801922949e-13 0
		 -0.44256299999999965 0.23358100000000004 0.0026016200000000111 1;
createNode joint -n "rBall" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" -0.20736076292011277 -0.30992545141615929 2.3443907801290464e-05 ;
	setAttr ".jo" -type "double3" 0.0058081454053920244 8.0912442218515611e-06 94.465130504444787 ;
	setAttr ".bps" -type "matrix" -8.0975767422359875e-17 0.0013930756639800855 -0.9999990296696265 0
		 3.0578571901147822e-12 -0.99999902966962639 -0.0013930756639799148 0 -1.0000000000000002 -3.0579452950938238e-12 -4.3765085362617113e-15 0
		 -0.4425629999999996 0.0023134399999999722 0.29512100000000024 1;
createNode joint -n "rToe" -p "rBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" -0.46270459312843598 0.00010347759210838471 1.6653345369377348e-16 ;
	setAttr ".bps" -type "matrix" -8.0975767422359875e-17 0.0013930756639800855 -0.9999990296696265 0
		 3.0578571901147822e-12 -0.99999902966962639 -0.0013930756639799148 0 -1.0000000000000002 -3.0579452950938238e-12 -4.3765085362617113e-15 0
		 -0.44256299999999943 0.0015653800000000068 0.75782500000000019 1;
createNode joint -n "rHeel" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" -0.25571100427807386 0.26975704536442785 -4.1326638964611639e-05 ;
	setAttr ".bps" -type "matrix" -0.00010105259732979752 0.99685547158864629 0.079241141789794467 0
		 -8.0327833424352364e-06 0.079241141382647498 -0.99685547671056596 0 -0.99999999486192359 -0.00010137136200793172 8.7470083801922949e-13 0
		 -0.44249799999999978 4.9946599999933783e-05 -0.2865700000000001 1;
createNode joint -n "rAnkleStretch" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.67177182354995368 -0.034342457793123879 0.008999954362068241 ;
	setAttr ".jo" -type "double3" -0.06079271921713969 0.75841336987616759 -0.77876679634353418 ;
	setAttr ".bps" -type "matrix" -0.00010105259732979405 0.99685547158864629 0.079241141789794467 0
		 -8.0327833424348027e-06 0.079241141382647498 -0.99685547671056596 0 -0.99999999486192359 -0.00010137136200792825 8.7470062117879499e-13 0
		 -0.44256299999999971 0.23358100000000004 0.0026016200000000111 1;
createNode joint -n "rKneeStretch" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" -0.61650823461620463 0.032099862860789419 -0.0013953245328744424 ;
	setAttr ".jo" -type "double3" 0.059375162864361744 -0.89419839126909395 -7.5656292933587901 ;
	setAttr ".bps" -type "matrix" -0.013350758322473984 0.99775062933432623 0.065692000389476327 0
		 -0.00088768916550659757 0.065686003070725904 -0.99783994759106442 0 -0.99991048062322085 -0.013380234061804689 8.7344713707297207e-06 0
		 -0.44256299999999993 0.90621799999999997 0.0124633 1;
createNode transform -n "model";
createNode transform -n "cBody" -p "model";
	setAttr -l on ".tx";
	setAttr -l on ".ty";
	setAttr -l on ".tz";
	setAttr -l on ".rx";
	setAttr -l on ".ry";
	setAttr -l on ".rz";
	setAttr -l on ".sx";
	setAttr -l on ".sy";
	setAttr -l on ".sz";
createNode mesh -n "cBodyShape" -p "cBody";
	setAttr -k off ".v";
	setAttr -s 6 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr ".dr" 1;
	setAttr ".vcs" 2;
createNode mesh -n "cBodyShapeOrig" -p "cBody";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 263 ".uvst[0].uvsp";
	setAttr ".uvst[0].uvsp[0:249]" -type "float2" 0.375 0.3125 0.40625 0.3125
		 0.40625 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125
		 0.46875 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625
		 0.3125 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985
		 0.61048543 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375
		 0.38951457 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0 0.625
		 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1
		 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625
		 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125
		 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75
		 0.625 1 0.375 1 0.14276735 0.41137075 0.88867164 0.41137075 1 0 0 0.023260495 0.11457131
		 0.45632055 0.85307395 0.45632055 1 0 0 0 0.5 0 0.625 0 0.625 0.25 0.5 0.25 0.375
		 0.25 0.5 0.5 0.375 0.5 0.5 0.75 0.375 0.75 0.5 1 0.375 1 0.875 0 0.875 0.25 0.125
		 0 0.375 0 0.125 0.25 0.625 0.5 0.625 0.75 0.625 1 0.375 0.3125 0.375 0.68843985 0.40625
		 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875
		 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985
		 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.61048543
		 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0 0.375 0.25 0.625
		 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25
		 0.875 0 0.125 0 0.125 0.25 0.375 0 0.375 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625
		 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25 0.875 0 0.125 0 0.125 0.25 0.375
		 0 0.375 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1
		 0.625 1 0.14276735 0.41137075 0 0.023260495 1 0 0.88867164 0.41137075 0.11457131
		 0.45632055 0 0 1 0 0.85307395 0.45632055 0.5 0 0.5 0.25 0.625 0.25 0.625 0 0.375
		 0.25 0.375 0.5 0.5 0.5 0.375 0.75 0.5 0.75 0.375 1 0.5 1 0.875 0.25 0.875 0 0.125
		 0 0.125 0.25 0.375 0 0.625 0.5 0.625 0.75 0.625 1 0 0.125 0.125 0.125 0.125 0.25
		 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125
		 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125 0.375
		 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375
		 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125
		 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625
		 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875
		 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75
		 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0;
	setAttr ".uvst[0].uvsp[250:262]" 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375
		 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 164 ".vt[0:163]"  0.30423975 1.51573062 -0.060290039 0.32680529 1.57163835 -0.085262954
		 0.3493709 1.62754607 -0.060290039 0.35871786 1.65070391 1.473203e-17 0.3493709 1.62754607 0.060290039
		 0.32680529 1.57163835 0.085262954 0.30423975 1.51573062 0.060290039 0.29489279 1.49257278 8.061641e-18
		 0.34174442 1.50059271 -0.060290039 0.36431003 1.55650067 -0.085262954 0.38687557 1.6124084 -0.060290039
		 0.39622253 1.63556623 1.6586243e-17 0.38687557 1.6124084 0.060290039 0.36431003 1.55650067 0.085262954
		 0.34174442 1.50059271 0.060290039 0.33239746 1.47743511 8.550705e-18 0.36431003 1.55650067 8.6155584e-18
		 0.42345673 0.95131725 0.016438216 0.45633313 0.95131725 0.016438216 0.39960748 1.4225142 0.040287554
		 0.4801825 1.4225142 0.040287554 0.39960748 1.4225142 -0.040287554 0.4801825 1.4225142 -0.057189941
		 0.42345673 0.95131725 -0.016438216 0.45633313 0.95131725 -0.016438216 0.42345673 0.34538746 0.016438216
		 0.45633313 0.34538746 0.016438216 0.39960748 0.81658435 0.040287554 0.4801825 0.81658435 0.040287554
		 0.39960748 0.81658435 -0.040287554 0.4801825 0.81658435 -0.057189941 0.42345673 0.34538746 -0.016438216
		 0.45633313 0.34538746 -0.016438216 0.22205347 4.3161213e-05 0.23086871 0.70476419 4.3161213e-05 0.23086871
		 0.22205347 0.24436769 0.14420088 0.70476419 0.24436769 0.14420088 0.22205347 0.24436769 -0.20769656
		 0.62623358 0.24436769 -0.20769656 0.22205347 4.3161213e-05 -0.28636417 0.62623358 4.3161213e-05 -0.28636417
		 0.22205347 -3.285706e-05 0.75754428 0.70476419 -3.285706e-05 0.59373844 0.22205347 0.091717675 0.75754428
		 0.70476419 0.091717675 0.59373844 0.22205347 0.24436763 0.43142346 0.70476419 0.24436763 0.43142346
		 0.22205347 -3.285706e-05 0.33655456 0.70476419 -3.285706e-05 0.33655456 0.48687255 0.091717675 0.75275493
		 0.48687255 -3.285706e-05 0.75275493 0.46340886 0.24436763 0.43142346 0.46340886 -3.285706e-05 0.33655456
		 -0.30423975 1.51573062 -0.060290039 -0.32680529 1.57163835 -0.085262954 -0.3493709 1.62754607 -0.060290039
		 -0.35871786 1.65070391 1.009334e-17 -0.3493709 1.62754607 0.060290039 -0.32680529 1.57163835 0.085262954
		 -0.30423975 1.51573062 0.060290039 -0.29489279 1.49257278 8.0456086e-18 -0.34174442 1.50059271 -0.060290039
		 -0.36431003 1.55650067 -0.085262954 -0.38687557 1.6124084 -0.060290039 -0.39622253 1.63556623 1.0626013e-17
		 -0.38687557 1.6124084 0.060290039 -0.36431003 1.55650067 0.085262954 -0.34174442 1.50059271 0.060290039
		 -0.33239746 1.47743511 8.1791222e-18 -0.36431003 1.55650067 8.3216628e-18 -0.42345673 0.95131725 0.016438216
		 -0.45633313 0.95131725 0.016438216 -0.39960748 1.4225142 0.040287554 -0.4801825 1.4225142 0.040287554
		 -0.39960748 1.4225142 -0.040287554 -0.4801825 1.4225142 -0.057189941 -0.42345673 0.95131725 -0.016438216
		 -0.45633313 0.95131725 -0.016438216 -0.42345673 0.34538746 0.016438216 -0.45633313 0.34538746 0.016438216
		 -0.39960748 0.81658435 0.040287554 -0.4801825 0.81658435 0.040287554 -0.39960748 0.81658435 -0.040287554
		 -0.4801825 0.81658435 -0.057189941 -0.42345673 0.34538746 -0.016438216 -0.45633313 0.34538746 -0.016438216
		 -0.22205347 4.3161213e-05 0.23086871 -0.70476419 4.3161213e-05 0.23086871 -0.22205347 0.24436769 0.14420088
		 -0.70476419 0.24436769 0.14420088 -0.22205347 0.24436769 -0.20769656 -0.62623358 0.24436769 -0.20769656
		 -0.22205347 4.3161213e-05 -0.28636417 -0.62623358 4.3161213e-05 -0.28636417 -0.22205347 -3.285706e-05 0.75754428
		 -0.70476419 -3.285706e-05 0.59373844 -0.22205347 0.091717675 0.75754428 -0.70476419 0.091717675 0.59373844
		 -0.22205347 0.24436763 0.43142346 -0.70476419 0.24436763 0.43142346 -0.22205347 -3.285706e-05 0.33655456
		 -0.70476419 -3.285706e-05 0.33655456 -0.48687255 0.091717675 0.75275493 -0.48687255 -3.285706e-05 0.75275493
		 -0.46340886 0.24436763 0.43142346 -0.46340886 -3.285706e-05 0.33655456 0.10704998 1.32800353 -0.10704998
		 8.669638e-20 1.32800353 -0.15139152 -0.10704998 1.32800353 -0.10704998 -0.15139152 1.32800353 4.3775763e-19
		 -0.10704998 1.32800353 0.10704998 8.6051386e-20 1.32800353 0.15139154 0.10704998 1.32800353 0.10704998
		 0.15139155 1.32800353 4.3542172e-19 0.19780254 1.41375995 -0.19780254 8.6969776e-20 1.41375995 -0.27973506
		 -0.19780254 1.41375995 -0.19780254 -0.27973506 1.41375995 4.4943763e-19 -0.19780254 1.41375995 0.19780254
		 8.5777983e-20 1.41375995 0.27973506 0.19780256 1.41375995 0.19780256 0.27973509 1.41375995 4.4512129e-19
		 0.25844148 1.54210353 -0.25844148 8.715246e-20 1.54210353 -0.36549145 -0.25844148 1.54210353 -0.25844148
		 -0.36549145 1.54210353 4.6609761e-19 -0.25844148 1.54210353 0.25844148 8.5595306e-20 1.54210353 0.36549145
		 0.25844151 1.54210353 0.25844151 0.36549148 1.54210353 4.6045805e-19 0.27973506 1.69349504 -0.27973506
		 8.7216605e-20 1.69349504 -0.39560509 -0.27973506 1.69349504 -0.27973506 -0.39560509 1.69349504 4.852013e-19
		 -0.27973506 1.69349504 0.27973506 8.5531154e-20 1.69349504 0.39560512 0.27973509 1.69349504 0.27973509
		 0.39560515 1.69349504 4.7909707e-19 0.25844148 1.84488654 -0.25844148 8.715246e-20 1.84488654 -0.36549145
		 -0.25844148 1.84488654 -0.25844148 -0.36549145 1.84488654 5.0384031e-19 -0.25844148 1.84488654 0.25844148
		 8.5595306e-20 1.84488654 0.36549145 0.25844151 1.84488654 0.25844151 0.36549148 1.84488654 4.9820075e-19
		 0.19780254 1.97323012 -0.19780254 8.6969776e-20 1.97323012 -0.27973506 -0.19780254 1.97323012 -0.19780254
		 -0.27973506 1.97323012 5.1917707e-19 -0.19780254 1.97323012 0.19780254 8.5777983e-20 1.97323012 0.27973506
		 0.19780256 1.97323012 0.19780256 0.27973509 1.97323012 5.1486074e-19 0.10704998 2.058986425 -0.10704998
		 8.669638e-20 2.058986425 -0.15139152 -0.10704998 2.058986425 -0.10704998 -0.15139152 2.058986425 5.2887664e-19
		 -0.10704998 2.058986425 0.10704998 8.6051386e-20 2.058986425 0.15139154 0.10704998 2.058986425 0.10704998
		 0.15139155 2.058986425 5.2654063e-19 8.6373534e-20 1.29788995 4.3283422e-19 8.6373883e-20 2.089100122 5.3146241e-19;
	setAttr -s 296 ".ed";
	setAttr ".ed[0:165]"  0 1 0 1 2 0 2 3 0 3 4 0 4 5 0 5 6 0 6 7 0 7 0 0 8 9 1
		 9 10 1 10 11 1 11 12 1 12 13 1 13 14 1 14 15 1 15 8 1 0 8 1 1 9 1 2 10 1 3 11 1 4 12 1
		 5 13 1 6 14 1 7 15 1 8 16 1 9 16 1 10 16 1 11 16 1 12 16 1 13 16 1 14 16 1 15 16 1
		 17 18 1 19 20 1 21 22 1 23 24 1 17 19 1 18 20 1 19 21 1 20 22 1 21 23 1 22 24 1 23 17 1
		 24 18 1 25 26 1 27 28 1 29 30 1 31 32 1 25 27 1 26 28 1 27 29 1 28 30 1 29 31 1 30 32 1
		 31 25 1 32 26 1 33 34 1 35 36 1 37 38 1 39 40 1 33 35 0 34 36 0 35 37 0 36 38 0 37 39 0
		 38 40 0 39 33 0 40 34 0 41 50 1 43 49 1 45 51 1 47 52 1 41 43 1 42 44 1 43 45 1 44 46 1
		 45 47 1 46 48 1 47 41 1 48 42 1 49 44 1 50 42 1 49 50 1 51 46 1 49 51 1 52 48 1 51 52 1
		 52 50 1 53 54 0 54 55 0 55 56 0 56 57 0 57 58 0 58 59 0 59 60 0 60 53 0 61 62 1 62 63 1
		 63 64 1 64 65 1 65 66 1 66 67 1 67 68 1 68 61 1 53 61 1 54 62 1 55 63 1 56 64 1 57 65 1
		 58 66 1 59 67 1 60 68 1 61 69 1 62 69 1 63 69 1 64 69 1 65 69 1 66 69 1 67 69 1 68 69 1
		 70 71 1 72 73 1 74 75 1 76 77 1 70 72 1 71 73 1 72 74 1 73 75 1 74 76 1 75 77 1 76 70 1
		 77 71 1 78 79 1 80 81 1 82 83 1 84 85 1 78 80 1 79 81 1 80 82 1 81 83 1 82 84 1 83 85 1
		 84 78 1 85 79 1 86 87 1 88 89 1 90 91 1 92 93 1 86 88 0 87 89 0 88 90 0 89 91 0 90 92 0
		 91 93 0 92 86 0 93 87 0 94 103 1 96 102 1 98 104 1 100 105 1 94 96 1 95 97 1 96 98 1
		 97 99 1 98 100 1 99 101 1;
	setAttr ".ed[166:295]" 100 94 1 101 95 1 102 97 1 103 95 1 102 103 1 104 99 1
		 102 104 1 105 101 1 104 105 1 105 103 1 106 107 0 107 108 0 108 109 0 109 110 0 110 111 0
		 111 112 0 112 113 0 113 106 0 114 115 0 115 116 0 116 117 0 117 118 0 118 119 0 119 120 0
		 120 121 0 121 114 0 122 123 0 123 124 0 124 125 0 125 126 0 126 127 0 127 128 0 128 129 0
		 129 122 0 130 131 0 131 132 0 132 133 0 133 134 0 134 135 0 135 136 0 136 137 0 137 130 0
		 138 139 0 139 140 0 140 141 0 141 142 0 142 143 0 143 144 0 144 145 0 145 138 0 146 147 0
		 147 148 0 148 149 0 149 150 0 150 151 0 151 152 0 152 153 0 153 146 0 154 155 0 155 156 0
		 156 157 0 157 158 0 158 159 0 159 160 0 160 161 0 161 154 0 106 114 0 107 115 0 108 116 0
		 109 117 0 110 118 0 111 119 0 112 120 0 113 121 0 114 122 0 115 123 0 116 124 0 117 125 0
		 118 126 0 119 127 0 120 128 0 121 129 0 122 130 0 123 131 0 124 132 0 125 133 0 126 134 0
		 127 135 0 128 136 0 129 137 0 130 138 0 131 139 0 132 140 0 133 141 0 134 142 0 135 143 0
		 136 144 0 137 145 0 138 146 0 139 147 0 140 148 0 141 149 0 142 150 0 143 151 0 144 152 0
		 145 153 0 146 154 0 147 155 0 148 156 0 149 157 0 150 158 0 151 159 0 152 160 0 153 161 0
		 162 106 0 162 107 0 162 108 0 162 109 0 162 110 0 162 111 0 162 112 0 162 113 0 154 163 0
		 155 163 0 156 163 0 157 163 0 158 163 0 159 163 0 160 163 0 161 163 0;
	setAttr -s 152 -ch 576 ".fc[0:151]" -type "polyFaces" 
		f 4 0 17 -9 -17
		mu 0 4 0 1 2 3
		f 4 1 18 -10 -18
		mu 0 4 1 4 5 2
		f 4 2 19 -11 -19
		mu 0 4 4 6 7 5
		f 4 3 20 -12 -20
		mu 0 4 6 8 9 7
		f 4 4 21 -13 -21
		mu 0 4 8 10 11 9
		f 4 5 22 -14 -22
		mu 0 4 10 12 13 11
		f 4 6 23 -15 -23
		mu 0 4 12 14 15 13
		f 4 7 16 -16 -24
		mu 0 4 14 16 17 15
		f 3 8 25 -25
		mu 0 3 18 19 20
		f 3 9 26 -26
		mu 0 3 19 21 20
		f 3 10 27 -27
		mu 0 3 21 22 20
		f 3 11 28 -28
		mu 0 3 22 23 20
		f 3 12 29 -29
		mu 0 3 23 24 20
		f 3 13 30 -30
		mu 0 3 24 25 20
		f 3 14 31 -31
		mu 0 3 25 26 20
		f 3 15 24 -32
		mu 0 3 26 18 20
		f 4 32 37 -34 -37
		mu 0 4 27 28 29 30
		f 4 33 39 -35 -39
		mu 0 4 30 29 31 32
		f 4 34 41 -36 -41
		mu 0 4 32 31 33 34
		f 4 35 43 -33 -43
		mu 0 4 34 33 35 36
		f 4 -44 -42 -40 -38
		mu 0 4 28 37 38 29
		f 4 42 36 38 40
		mu 0 4 39 27 30 40
		f 4 44 49 -46 -49
		mu 0 4 41 42 43 44
		f 4 45 51 -47 -51
		mu 0 4 44 43 45 46
		f 4 46 53 -48 -53
		mu 0 4 46 45 47 48
		f 4 47 55 -45 -55
		mu 0 4 48 47 49 50
		f 4 -56 -54 -52 -50
		mu 0 4 42 51 52 43
		f 4 54 48 50 52
		mu 0 4 53 41 44 54
		f 4 56 61 -58 -61
		mu 0 4 55 56 57 58
		f 4 57 63 -59 -63
		mu 0 4 58 57 59 60
		f 4 58 65 -60 -65
		mu 0 4 60 59 61 62
		f 4 59 67 -57 -67
		mu 0 4 62 61 63 64
		f 4 -64 -62 -68 -66
		mu 0 4 65 66 67 68
		f 4 62 64 66 60
		mu 0 4 69 70 71 72
		f 4 81 73 -81 82
		mu 0 4 73 74 75 76
		f 4 69 84 -71 -75
		mu 0 4 77 76 78 79
		f 4 70 86 -72 -77
		mu 0 4 79 78 80 81
		f 4 71 87 -69 -79
		mu 0 4 81 80 82 83
		f 4 -80 -78 -76 -74
		mu 0 4 74 84 85 75
		f 4 78 72 74 76
		mu 0 4 86 87 77 88
		f 4 68 -83 -70 -73
		mu 0 4 87 73 76 77
		f 4 -85 80 75 -84
		mu 0 4 78 76 75 89
		f 4 -87 83 77 -86
		mu 0 4 80 78 89 90
		f 4 -88 85 79 -82
		mu 0 4 82 80 90 91
		f 4 104 96 -106 -89
		mu 0 4 92 93 94 95
		f 4 105 97 -107 -90
		mu 0 4 95 94 96 97
		f 4 106 98 -108 -91
		mu 0 4 97 96 98 99
		f 4 107 99 -109 -92
		mu 0 4 99 98 100 101
		f 4 108 100 -110 -93
		mu 0 4 101 100 102 103
		f 4 109 101 -111 -94
		mu 0 4 103 102 104 105
		f 4 110 102 -112 -95
		mu 0 4 105 104 106 107
		f 4 111 103 -105 -96
		mu 0 4 107 106 108 109
		f 3 112 -114 -97
		mu 0 3 110 111 112
		f 3 113 -115 -98
		mu 0 3 112 111 113
		f 3 114 -116 -99
		mu 0 3 113 111 114
		f 3 115 -117 -100
		mu 0 3 114 111 115
		f 3 116 -118 -101
		mu 0 3 115 111 116
		f 3 117 -119 -102
		mu 0 3 116 111 117
		f 3 118 -120 -103
		mu 0 3 117 111 118
		f 3 119 -113 -104
		mu 0 3 118 111 110
		f 4 124 121 -126 -121
		mu 0 4 119 120 121 122
		f 4 126 122 -128 -122
		mu 0 4 120 123 124 121
		f 4 128 123 -130 -123
		mu 0 4 123 125 126 124
		f 4 130 120 -132 -124
		mu 0 4 125 127 128 126
		f 4 125 127 129 131
		mu 0 4 122 121 129 130
		f 4 -129 -127 -125 -131
		mu 0 4 131 132 120 119
		f 4 136 133 -138 -133
		mu 0 4 133 134 135 136
		f 4 138 134 -140 -134
		mu 0 4 134 137 138 135
		f 4 140 135 -142 -135
		mu 0 4 137 139 140 138
		f 4 142 132 -144 -136
		mu 0 4 139 141 142 140
		f 4 137 139 141 143
		mu 0 4 136 135 143 144
		f 4 -141 -139 -137 -143
		mu 0 4 145 146 134 133
		f 4 148 145 -150 -145
		mu 0 4 147 148 149 150
		f 4 150 146 -152 -146
		mu 0 4 148 151 152 149
		f 4 152 147 -154 -147
		mu 0 4 151 153 154 152
		f 4 154 144 -156 -148
		mu 0 4 153 155 156 154
		f 4 153 155 149 151
		mu 0 4 157 158 159 160
		f 4 -149 -155 -153 -151
		mu 0 4 161 162 163 164
		f 4 -171 168 -162 -170
		mu 0 4 165 166 167 168
		f 4 162 158 -173 -158
		mu 0 4 169 170 171 166
		f 4 164 159 -175 -159
		mu 0 4 170 172 173 171
		f 4 166 156 -176 -160
		mu 0 4 172 174 175 173
		f 4 161 163 165 167
		mu 0 4 168 167 176 177
		f 4 -165 -163 -161 -167
		mu 0 4 178 179 169 180
		f 4 160 157 170 -157
		mu 0 4 180 169 166 165
		f 4 171 -164 -169 172
		mu 0 4 171 181 167 166
		f 4 173 -166 -172 174
		mu 0 4 173 182 181 171
		f 4 169 -168 -174 175
		mu 0 4 175 183 182 173
		f 4 176 233 -185 -233
		mu 0 4 184 185 186 187
		f 4 177 234 -186 -234
		mu 0 4 185 188 189 186
		f 4 178 235 -187 -235
		mu 0 4 188 190 191 189
		f 4 179 236 -188 -236
		mu 0 4 190 192 193 191
		f 4 180 237 -189 -237
		mu 0 4 192 194 195 193
		f 4 181 238 -190 -238
		mu 0 4 194 196 197 195
		f 4 182 239 -191 -239
		mu 0 4 196 198 199 197
		f 4 183 232 -192 -240
		mu 0 4 198 200 201 199
		f 4 184 241 -193 -241
		mu 0 4 187 186 202 203
		f 4 185 242 -194 -242
		mu 0 4 186 189 204 202
		f 4 186 243 -195 -243
		mu 0 4 189 191 205 204
		f 4 187 244 -196 -244
		mu 0 4 191 193 206 205
		f 4 188 245 -197 -245
		mu 0 4 193 195 207 206
		f 4 189 246 -198 -246
		mu 0 4 195 197 208 207
		f 4 190 247 -199 -247
		mu 0 4 197 199 209 208
		f 4 191 240 -200 -248
		mu 0 4 199 201 210 209
		f 4 192 249 -201 -249
		mu 0 4 203 202 211 212
		f 4 193 250 -202 -250
		mu 0 4 202 204 213 211
		f 4 194 251 -203 -251
		mu 0 4 204 205 214 213
		f 4 195 252 -204 -252
		mu 0 4 205 206 215 214
		f 4 196 253 -205 -253
		mu 0 4 206 207 216 215
		f 4 197 254 -206 -254
		mu 0 4 207 208 217 216
		f 4 198 255 -207 -255
		mu 0 4 208 209 218 217
		f 4 199 248 -208 -256
		mu 0 4 209 210 219 218
		f 4 200 257 -209 -257
		mu 0 4 212 211 220 221
		f 4 201 258 -210 -258
		mu 0 4 211 213 222 220
		f 4 202 259 -211 -259
		mu 0 4 213 214 223 222
		f 4 203 260 -212 -260
		mu 0 4 214 215 224 223
		f 4 204 261 -213 -261
		mu 0 4 215 216 225 224
		f 4 205 262 -214 -262
		mu 0 4 216 217 226 225
		f 4 206 263 -215 -263
		mu 0 4 217 218 227 226
		f 4 207 256 -216 -264
		mu 0 4 218 219 228 227
		f 4 208 265 -217 -265
		mu 0 4 221 220 229 230
		f 4 209 266 -218 -266
		mu 0 4 220 222 231 229
		f 4 210 267 -219 -267
		mu 0 4 222 223 232 231
		f 4 211 268 -220 -268
		mu 0 4 223 224 233 232
		f 4 212 269 -221 -269
		mu 0 4 224 225 234 233
		f 4 213 270 -222 -270
		mu 0 4 225 226 235 234
		f 4 214 271 -223 -271
		mu 0 4 226 227 236 235
		f 4 215 264 -224 -272
		mu 0 4 227 228 237 236
		f 4 216 273 -225 -273
		mu 0 4 230 229 238 239
		f 4 217 274 -226 -274
		mu 0 4 229 231 240 238
		f 4 218 275 -227 -275
		mu 0 4 231 232 241 240
		f 4 219 276 -228 -276
		mu 0 4 232 233 242 241
		f 4 220 277 -229 -277
		mu 0 4 233 234 243 242
		f 4 221 278 -230 -278
		mu 0 4 234 235 244 243
		f 4 222 279 -231 -279
		mu 0 4 235 236 245 244
		f 4 223 272 -232 -280
		mu 0 4 236 237 246 245
		f 3 -177 -281 281
		mu 0 3 185 184 247
		f 3 -178 -282 282
		mu 0 3 188 185 248
		f 3 -179 -283 283
		mu 0 3 190 188 249
		f 3 -180 -284 284
		mu 0 3 192 190 250
		f 3 -181 -285 285
		mu 0 3 194 192 251
		f 3 -182 -286 286
		mu 0 3 196 194 252
		f 3 -183 -287 287
		mu 0 3 198 196 253
		f 3 -184 -288 280
		mu 0 3 200 198 254
		f 3 224 289 -289
		mu 0 3 239 238 255
		f 3 225 290 -290
		mu 0 3 238 240 256
		f 3 226 291 -291
		mu 0 3 240 241 257
		f 3 227 292 -292
		mu 0 3 241 242 258
		f 3 228 293 -293
		mu 0 3 242 243 259
		f 3 229 294 -294
		mu 0 3 243 244 260
		f 3 230 295 -295
		mu 0 3 244 245 261
		f 3 231 288 -296
		mu 0 3 245 246 262;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".vcs" 2;
createNode transform -n "cJoints" -p "model";
	setAttr -l on ".tx";
	setAttr -l on ".ty";
	setAttr -l on ".tz";
	setAttr -l on ".rx";
	setAttr -l on ".ry";
	setAttr -l on ".rz";
	setAttr -l on ".sx";
	setAttr -l on ".sy";
	setAttr -l on ".sz";
createNode mesh -n "cJointsShape" -p "cJoints";
	setAttr -k off ".v";
	setAttr -s 6 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 24 ".pt[306:329]" -type "float3"  -1.4901161e-08 2.2351742e-07 
		-1.7695129e-08 1.4901161e-08 1.6391277e-07 2.3283064e-08 -2.9802322e-08 7.4505806e-08 
		6.519258e-09 1.4901161e-08 1.6391277e-07 1.9557774e-08 -1.4901161e-08 2.2351742e-07 
		2.7008355e-08 8.9406967e-08 2.2351742e-07 -1.7695129e-08 1.4901161e-07 1.6391277e-07 
		2.3283064e-08 1.4901161e-07 1.0430813e-07 6.519258e-09 1.4901161e-07 1.6391277e-07 
		1.9557774e-08 8.9406967e-08 2.2351742e-07 2.7008355e-08 -1.4901161e-08 2.2351742e-07 
		6.519258e-09 8.9406967e-08 2.2351742e-07 6.519258e-09 1.4901161e-08 2.2351742e-07 
		-1.7695129e-08 -1.4901161e-08 1.6391277e-07 2.3283064e-08 2.9802322e-08 7.4505806e-08 
		6.519258e-09 -1.4901161e-08 1.6391277e-07 1.9557774e-08 1.4901161e-08 2.2351742e-07 
		2.7008355e-08 -8.9406967e-08 2.2351742e-07 -1.7695129e-08 -1.4901161e-07 1.6391277e-07 
		2.3283064e-08 -1.4901161e-07 1.0430813e-07 6.519258e-09 -1.4901161e-07 1.6391277e-07 
		1.9557774e-08 -8.9406967e-08 2.2351742e-07 2.7008355e-08 1.4901161e-08 2.2351742e-07 
		6.519258e-09 -8.9406967e-08 2.2351742e-07 6.519258e-09;
	setAttr ".vcs" 2;
createNode mesh -n "cJointsShapeOrig" -p "cJoints";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 504 ".uvst[0].uvsp";
	setAttr ".uvst[0].uvsp[0:249]" -type "float2" 0 0.125 0 0.25 0.125 0.25 0.125
		 0.125 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625
		 0.125 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375
		 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5
		 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125
		 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625
		 0 0.75 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1
		 0.75 0 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875
		 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125
		 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375
		 1 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25
		 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875
		 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375
		 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5
		 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625
		 0.625 0.75 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75
		 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875
		 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375
		 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625
		 1 0.6875 1 0.8125 1 0.9375 1 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25
		 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.75 0.125
		 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375
		 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5
		 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625
		 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75
		 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0.125 0.875
		 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875
		 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1
		 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.125 0.125 0.25 0.125
		 0.25 0.25 0.125 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625
		 0.25 0.25 0.375 0.125 0.375 0.375 0.375;
	setAttr ".uvst[0].uvsp[250:499]" 0.5 0.375 0.625 0.375 0.25 0.5 0.125 0.5 0.375
		 0.5 0.5 0.5 0.625 0.5 0.25 0.625 0.125 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.25
		 0.75 0.125 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.25 0.875 0.125 0.875 0.375 0.875
		 0.5 0.875 0.625 0.875 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.1875 1 0.3125 1 0.4375
		 1 0.5625 1 0.125 0.125 0.125 0.25 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5
		 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375
		 0.625 0.375 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.125 0.625 0.25 0.625
		 0.375 0.625 0.5 0.625 0.625 0.625 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625
		 0.75 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.1875 0 0.3125 0 0.4375
		 0 0.5625 0 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0 0.125 0 0.25 0.125 0.25 0.125 0.125
		 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125
		 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25
		 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125
		 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625
		 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75
		 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0
		 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875
		 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625
		 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.375 0.3125 0.375
		 0.68843985 0.40625 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875
		 0.68843985 0.46875 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125
		 0.5625 0.68843985 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985
		 0.625 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458
		 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625
		 0.61048543 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375
		 0.38951457 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0.3125
		 0.40625 0.3125 0.40625 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985
		 0.46875 0.3125 0.46875 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125
		 0.68843985 0.5625 0.3125 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625
		 0.3125 0.625 0.68843985 0.5 1.4901161e-08 0.61048543 0.04576458 0.5 0.15000001 0.38951457
		 0.04576458 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543
		 0.65625 0.15625 0.61048543 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543
		 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375
		 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.33333334 0.375 0.33333334 0.625 0.41666669
		 0.375 0.41666669 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 0.83333331 0.375
		 0.83333331 0.625 0.91666663 0.375 0.91666663 0.625 0.99999994 0.375 0.99999994 0.79166669
		 0 0.875 0 0.875 0.25 0.79166669 0.25 0.70833337 0 0.70833337 0.25 0.125 0 0.20833334
		 0;
	setAttr ".uvst[0].uvsp[500:503]" 0.20833334 0.25 0.125 0.25 0.29166669 0 0.29166669
		 0.25;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 358 ".vt";
	setAttr ".vt[0:165]"  -0.33333698 1.49092913 -0.031699449 -0.33333701 1.52262878 -0.044829786
		 -0.33333698 1.55432796 -0.031699449 -0.33333701 1.56745815 1.397224e-09 -0.33333698 1.55432796 0.031699449
		 -0.33333701 1.52262878 0.044829786 -0.33333698 1.49092913 0.031699449 -0.33333701 1.47779894 1.397224e-09
		 -0.358731 1.46405554 -0.058572918 -0.358731 1.52262878 -0.082834601 -0.35873097 1.58120155 -0.058572918
		 -0.35873097 1.60546303 1.397224e-09 -0.35873097 1.58120155 0.058572918 -0.358731 1.52262878 0.082834601
		 -0.358731 1.46405554 0.058572918 -0.358731 1.43979406 1.397224e-09 -0.39673585 1.44609928 -0.076529205
		 -0.39673585 1.52262878 -0.10822862 -0.39673585 1.59915781 -0.076529205 -0.39673585 1.63085699 1.397224e-09
		 -0.39673585 1.59915781 0.076529205 -0.39673585 1.52262878 0.10822868 -0.39673585 1.44609928 0.076529205
		 -0.39673585 1.4144001 1.397224e-09 -0.44156563 1.43979383 -0.082834601 -0.44156563 1.52262855 -0.11714584
		 -0.44156569 1.60546327 -0.082834601 -0.44156569 1.63977456 1.397224e-09 -0.44156569 1.60546327 0.082834601
		 -0.44156563 1.52262855 0.11714584 -0.44156563 1.43979383 0.082834661 -0.44156563 1.40548253 1.397224e-09
		 -0.48639542 1.44609928 -0.076529205 -0.48639542 1.52262855 -0.10822862 -0.48639536 1.59915757 -0.076529205
		 -0.48639542 1.63085723 1.397224e-09 -0.48639536 1.59915757 0.076529205 -0.48639542 1.52262855 0.10822868
		 -0.48639542 1.44609928 0.076529205 -0.48639542 1.41439986 1.397224e-09 -0.52440029 1.4640553 -0.058572918
		 -0.52440023 1.52262831 -0.082834601 -0.52440029 1.58120131 -0.058572918 -0.52440029 1.60546303 1.397224e-09
		 -0.52440029 1.58120131 0.058572918 -0.52440023 1.52262831 0.082834601 -0.52440029 1.4640553 0.058572918
		 -0.52440023 1.43979359 1.397224e-09 -0.54979432 1.49092889 -0.031699449 -0.54979432 1.52262855 -0.044829786
		 -0.54979432 1.55432796 -0.031699449 -0.54979432 1.56745815 1.397224e-09 -0.54979432 1.55432796 0.031699449
		 -0.54979432 1.52262855 0.044829786 -0.54979432 1.49092889 0.031699449 -0.54979432 1.4777987 1.397224e-09
		 -0.32441977 1.52262855 1.397224e-09 -0.55871153 1.52262831 1.397224e-09 0.33333698 1.49092913 -0.031699449
		 0.33333701 1.52262878 -0.044829786 0.33333698 1.55432796 -0.031699449 0.33333701 1.56745815 1.397224e-09
		 0.33333698 1.55432796 0.031699449 0.33333701 1.52262878 0.044829786 0.33333698 1.49092913 0.031699449
		 0.33333701 1.47779894 1.397224e-09 0.358731 1.46405554 -0.058572918 0.358731 1.52262878 -0.082834601
		 0.35873097 1.58120155 -0.058572918 0.35873097 1.60546303 1.397224e-09 0.35873097 1.58120155 0.058572918
		 0.358731 1.52262878 0.082834601 0.358731 1.46405554 0.058572918 0.358731 1.43979406 1.397224e-09
		 0.39673585 1.44609928 -0.076529205 0.39673585 1.52262878 -0.10822862 0.39673585 1.59915781 -0.076529205
		 0.39673585 1.63085699 1.397224e-09 0.39673585 1.59915781 0.076529205 0.39673585 1.52262878 0.10822868
		 0.39673585 1.44609928 0.076529205 0.39673585 1.4144001 1.397224e-09 0.44156563 1.43979383 -0.082834601
		 0.44156563 1.52262855 -0.11714584 0.44156569 1.60546327 -0.082834601 0.44156569 1.63977456 1.397224e-09
		 0.44156569 1.60546327 0.082834601 0.44156563 1.52262855 0.11714584 0.44156563 1.43979383 0.082834661
		 0.44156563 1.40548253 1.397224e-09 0.48639542 1.44609928 -0.076529205 0.48639542 1.52262855 -0.10822862
		 0.48639536 1.59915757 -0.076529205 0.48639542 1.63085723 1.397224e-09 0.48639536 1.59915757 0.076529205
		 0.48639542 1.52262855 0.10822868 0.48639542 1.44609928 0.076529205 0.48639542 1.41439986 1.397224e-09
		 0.52440029 1.4640553 -0.058572918 0.52440023 1.52262831 -0.082834601 0.52440029 1.58120131 -0.058572918
		 0.52440029 1.60546303 1.397224e-09 0.52440029 1.58120131 0.058572918 0.52440023 1.52262831 0.082834601
		 0.52440029 1.4640553 0.058572918 0.52440023 1.43979359 1.397224e-09 0.54979432 1.49092889 -0.031699449
		 0.54979432 1.52262855 -0.044829786 0.54979432 1.55432796 -0.031699449 0.54979432 1.56745815 1.397224e-09
		 0.54979432 1.55432796 0.031699449 0.54979432 1.52262855 0.044829786 0.54979432 1.49092889 0.031699449
		 0.54979432 1.4777987 1.397224e-09 0.32441977 1.52262855 1.397224e-09 0.55871153 1.52262831 1.397224e-09
		 0.35145032 0.87325823 -0.026394174 0.35145032 0.89965212 -0.037326992 0.35145029 0.92604649 -0.026394174
		 0.35145032 0.93697894 1.9815198e-09 0.35145029 0.92604649 0.026394174 0.35145032 0.89965212 0.037326992
		 0.35145032 0.87325823 0.026394174 0.35145032 0.86232531 1.9815198e-09 0.37259433 0.85088229 -0.04877007
		 0.37259433 0.89965224 -0.068971276 0.37259436 0.94842219 -0.04877007 0.37259436 0.9686234 1.9815198e-09
		 0.37259436 0.94842219 0.04877007 0.37259433 0.89965224 0.068971276 0.37259433 0.85088229 0.04877007
		 0.37259433 0.83068109 1.9815198e-09 0.40423864 0.83593106 -0.06372118 0.40423864 0.89965224 -0.090115309
		 0.40423864 0.96337342 -0.06372118 0.40423864 0.98976755 1.9815198e-09 0.40423864 0.96337342 0.06372118
		 0.40423864 0.89965224 0.090115309 0.40423864 0.83593106 0.06372118 0.40423864 0.80953693 1.9815198e-09
		 0.44156563 0.83068097 -0.068971276 0.44156563 0.89965212 -0.09754014 0.44156569 0.96862352 -0.068971276
		 0.44156569 0.99719226 1.9815198e-09 0.44156569 0.96862352 0.068971276 0.44156563 0.89965212 0.09754014
		 0.44156563 0.83068097 0.068971276 0.44156563 0.80211198 1.9815198e-09 0.47889262 0.83593118 -0.06372118
		 0.47889262 0.89965236 -0.090115309 0.47889262 0.96337354 -0.06372118 0.47889262 0.98976767 1.9815198e-09
		 0.47889262 0.96337354 0.06372118 0.47889262 0.89965236 0.090115309 0.47889262 0.83593118 0.06372118
		 0.47889262 0.80953705 1.9815198e-09 0.51053691 0.85088217 -0.04877007 0.51053691 0.89965212 -0.068971276
		 0.51053697 0.94842231 -0.04877007 0.51053697 0.96862352 1.9815198e-09 0.51053697 0.94842231 0.04877007
		 0.51053691 0.89965212 0.068971276 0.51053691 0.85088217 0.04877007 0.51053691 0.83068097 1.9815198e-09
		 0.53168094 0.87325811 -0.026394174 0.53168094 0.89965224 -0.037326992;
	setAttr ".vt[166:331]" 0.531681 0.92604637 -0.026394174 0.531681 0.93697906 1.9815198e-09
		 0.531681 0.92604637 0.026394174 0.53168094 0.89965224 0.037326992 0.53168094 0.87325811 0.026394174
		 0.53168094 0.86232519 1.9815198e-09 0.34402549 0.89965248 1.9815198e-09 0.53910577 0.89965224 1.9815198e-09
		 0.30705765 0.23315582 -0.055715024 0.30705765 0.27255234 -0.03939648 0.30705768 0.2888709 5.4951027e-10
		 0.30705765 0.27255234 0.03939648 0.30705765 0.23315582 0.055715054 0.33861768 0.233156 -0.10294795
		 0.33861768 0.30595139 -0.072795212 0.33861768 0.33610418 5.4951027e-10 0.33861768 0.30595139 0.072795212
		 0.33861768 0.233156 0.10294795 0.38585058 0.23315609 -0.13450795 0.38585061 0.32826769 -0.095111489
		 0.38585061 0.36766422 5.4951027e-10 0.38585061 0.32826769 0.095111489 0.38585058 0.23315609 0.13450801
		 0.44156563 0.233156 -0.14559042 0.44156569 0.33610418 -0.10294795 0.44156569 0.37874654 5.4951027e-10
		 0.44156569 0.33610418 0.10294795 0.44156563 0.233156 0.14559042 0.49728066 0.23315614 -0.13450795
		 0.49728072 0.32826775 -0.095111489 0.49728066 0.36766404 5.4951027e-10 0.49728072 0.32826775 0.095111489
		 0.49728066 0.23315614 0.13450801 0.54451358 0.23315606 -0.10294795 0.54451364 0.30595121 -0.072795212
		 0.54451364 0.33610401 5.4951027e-10 0.54451364 0.30595121 0.072795212 0.54451358 0.23315606 0.10294795
		 0.57607365 0.23315611 -0.055715024 0.57607365 0.27255264 -0.03939648 0.57607365 0.2888712 5.4951027e-10
		 0.57607365 0.27255264 0.03939648 0.57607365 0.23315611 0.055715054 0.29597521 0.23315594 5.4951027e-10
		 0.58715606 0.23315611 5.4951027e-10 -0.30705765 0.23315582 -0.055715024 -0.30705765 0.27255234 -0.03939648
		 -0.30705768 0.2888709 5.4951027e-10 -0.30705765 0.27255234 0.03939648 -0.30705765 0.23315582 0.055715054
		 -0.33861768 0.233156 -0.10294795 -0.33861768 0.30595139 -0.072795212 -0.33861768 0.33610418 5.4951027e-10
		 -0.33861768 0.30595139 0.072795212 -0.33861768 0.233156 0.10294795 -0.38585058 0.23315609 -0.13450795
		 -0.38585061 0.32826769 -0.095111489 -0.38585061 0.36766422 5.4951027e-10 -0.38585061 0.32826769 0.095111489
		 -0.38585058 0.23315609 0.13450801 -0.44156563 0.233156 -0.14559042 -0.44156569 0.33610418 -0.10294795
		 -0.44156569 0.37874654 5.4951027e-10 -0.44156569 0.33610418 0.10294795 -0.44156563 0.233156 0.14559042
		 -0.49728066 0.23315614 -0.13450795 -0.49728072 0.32826775 -0.095111489 -0.49728066 0.36766404 5.4951027e-10
		 -0.49728072 0.32826775 0.095111489 -0.49728066 0.23315614 0.13450801 -0.54451358 0.23315606 -0.10294795
		 -0.54451364 0.30595121 -0.072795212 -0.54451364 0.33610401 5.4951027e-10 -0.54451364 0.30595121 0.072795212
		 -0.54451358 0.23315606 0.10294795 -0.57607365 0.23315611 -0.055715024 -0.57607365 0.27255264 -0.03939648
		 -0.57607365 0.2888712 5.4951027e-10 -0.57607365 0.27255264 0.03939648 -0.57607365 0.23315611 0.055715054
		 -0.29597521 0.23315594 5.4951027e-10 -0.58715606 0.23315611 5.4951027e-10 -0.35145032 0.87325823 -0.026394174
		 -0.35145032 0.89965212 -0.037326992 -0.35145029 0.92604649 -0.026394174 -0.35145032 0.93697894 1.9815198e-09
		 -0.35145029 0.92604649 0.026394174 -0.35145032 0.89965212 0.037326992 -0.35145032 0.87325823 0.026394174
		 -0.35145032 0.86232531 1.9815198e-09 -0.37259433 0.85088229 -0.04877007 -0.37259433 0.89965224 -0.068971276
		 -0.37259436 0.94842219 -0.04877007 -0.37259436 0.9686234 1.9815198e-09 -0.37259436 0.94842219 0.04877007
		 -0.37259433 0.89965224 0.068971276 -0.37259433 0.85088229 0.04877007 -0.37259433 0.83068109 1.9815198e-09
		 -0.40423864 0.83593106 -0.06372118 -0.40423864 0.89965224 -0.090115309 -0.40423864 0.96337342 -0.06372118
		 -0.40423864 0.98976755 1.9815198e-09 -0.40423864 0.96337342 0.06372118 -0.40423864 0.89965224 0.090115309
		 -0.40423864 0.83593106 0.06372118 -0.40423864 0.80953693 1.9815198e-09 -0.44156563 0.83068097 -0.068971276
		 -0.44156563 0.89965212 -0.09754014 -0.44156569 0.96862352 -0.068971276 -0.44156569 0.99719226 1.9815198e-09
		 -0.44156569 0.96862352 0.068971276 -0.44156563 0.89965212 0.09754014 -0.44156563 0.83068097 0.068971276
		 -0.44156563 0.80211198 1.9815198e-09 -0.47889262 0.83593118 -0.06372118 -0.47889262 0.89965236 -0.090115309
		 -0.47889262 0.96337354 -0.06372118 -0.47889262 0.98976767 1.9815198e-09 -0.47889262 0.96337354 0.06372118
		 -0.47889262 0.89965236 0.090115309 -0.47889262 0.83593118 0.06372118 -0.47889262 0.80953705 1.9815198e-09
		 -0.51053691 0.85088217 -0.04877007 -0.51053691 0.89965212 -0.068971276 -0.51053697 0.94842231 -0.04877007
		 -0.51053697 0.96862352 1.9815198e-09 -0.51053697 0.94842231 0.04877007 -0.51053691 0.89965212 0.068971276
		 -0.51053691 0.85088217 0.04877007 -0.51053691 0.83068097 1.9815198e-09 -0.53168094 0.87325811 -0.026394174
		 -0.53168094 0.89965224 -0.037326992 -0.531681 0.92604637 -0.026394174 -0.531681 0.93697906 1.9815198e-09
		 -0.531681 0.92604637 0.026394174 -0.53168094 0.89965224 0.037326992 -0.53168094 0.87325811 0.026394174
		 -0.53168094 0.86232519 1.9815198e-09 -0.34402549 0.89965248 1.9815198e-09 -0.53910577 0.89965224 1.9815198e-09
		 -0.23970509 0.058099173 0.21169311 -0.23970506 0.13053313 0.18168998 -0.23970509 0.20296708 0.21169311
		 -0.23970503 0.23297027 0.28412709 -0.23970509 0.20296708 0.35656106 -0.23970506 0.13053313 0.3865642
		 -0.23970509 0.058099173 0.35656106 -0.23970509 0.028095985 0.28412709 -0.6892187 0.058099173 0.21169311
		 -0.68921864 0.13053313 0.18168998 -0.6892187 0.20296708 0.21169311 -0.6892187 0.23297021 0.28412709
		 -0.6892187 0.20296708 0.35656106 -0.68921864 0.13053313 0.3865642 -0.6892187 0.058099173 0.35656106
		 -0.6892187 0.028095985 0.28412709 -0.23970506 0.13053313 0.28412709 -0.68921864 0.13053313 0.28412709
		 0.23970509 0.058099173 0.21169311 0.23970506 0.13053313 0.18168998 0.23970509 0.20296708 0.21169311
		 0.23970503 0.23297027 0.28412709 0.23970509 0.20296708 0.35656106 0.23970506 0.13053313 0.3865642
		 0.23970509 0.058099173 0.35656106 0.23970509 0.028095985 0.28412709;
	setAttr ".vt[332:357]" 0.6892187 0.058099173 0.21169311 0.68921864 0.13053313 0.18168998
		 0.6892187 0.20296708 0.21169311 0.6892187 0.23297021 0.28412709 0.6892187 0.20296708 0.35656106
		 0.68921864 0.13053313 0.3865642 0.6892187 0.058099173 0.35656106 0.6892187 0.028095985 0.28412709
		 0.23970506 0.13053313 0.28412709 0.68921864 0.13053313 0.28412709 -0.11387686 1.34356058 0.28655443
		 0.11387686 1.34356058 0.28655443 -0.17410538 1.64149439 0.42872342 0.17410539 1.64149439 0.42872345
		 -0.11387686 1.63743246 0.18684137 0.11387686 1.63743246 0.18684137 -0.11387686 1.61106431 -0.16021453
		 0.11387686 1.61106431 -0.16021453 -0.22965515 1.6281656 -0.38851273 0.22965515 1.6281656 -0.38851273
		 -0.15485013 1.3661598 -0.36703673 0.15485013 1.3661598 -0.36703673 -0.11387686 1.20416272 -0.13873854
		 0.11387686 1.20416272 -0.13873854 -0.11387686 1.20416272 0.12238826 0.11387686 1.20416272 0.12238826;
	setAttr -s 724 ".ed";
	setAttr ".ed[0:165]"  0 1 1 1 2 1 2 3 1 3 4 1 4 5 1 5 6 1 6 7 1 7 0 1 8 9 1
		 9 10 1 10 11 1 11 12 1 12 13 1 13 14 1 14 15 1 15 8 1 16 17 1 17 18 1 18 19 1 19 20 1
		 20 21 1 21 22 1 22 23 1 23 16 1 24 25 1 25 26 1 26 27 1 27 28 1 28 29 1 29 30 1 30 31 1
		 31 24 1 32 33 1 33 34 1 34 35 1 35 36 1 36 37 1 37 38 1 38 39 1 39 32 1 40 41 1 41 42 1
		 42 43 1 43 44 1 44 45 1 45 46 1 46 47 1 47 40 1 48 49 1 49 50 1 50 51 1 51 52 1 52 53 1
		 53 54 1 54 55 1 55 48 1 0 8 1 1 9 1 2 10 1 3 11 1 4 12 1 5 13 1 6 14 1 7 15 1 8 16 1
		 9 17 1 10 18 1 11 19 1 12 20 1 13 21 1 14 22 1 15 23 1 16 24 1 17 25 1 18 26 1 19 27 1
		 20 28 1 21 29 1 22 30 1 23 31 1 24 32 1 25 33 1 26 34 1 27 35 1 28 36 1 29 37 1 30 38 1
		 31 39 1 32 40 1 33 41 1 34 42 1 35 43 1 36 44 1 37 45 1 38 46 1 39 47 1 40 48 1 41 49 1
		 42 50 1 43 51 1 44 52 1 45 53 1 46 54 1 47 55 1 56 0 1 56 1 1 56 2 1 56 3 1 56 4 1
		 56 5 1 56 6 1 56 7 1 48 57 1 49 57 1 50 57 1 51 57 1 52 57 1 53 57 1 54 57 1 55 57 1
		 58 59 1 59 60 1 60 61 1 61 62 1 62 63 1 63 64 1 64 65 1 65 58 1 66 67 1 67 68 1 68 69 1
		 69 70 1 70 71 1 71 72 1 72 73 1 73 66 1 74 75 1 75 76 1 76 77 1 77 78 1 78 79 1 79 80 1
		 80 81 1 81 74 1 82 83 1 83 84 1 84 85 1 85 86 1 86 87 1 87 88 1 88 89 1 89 82 1 90 91 1
		 91 92 1 92 93 1 93 94 1 94 95 1 95 96 1 96 97 1 97 90 1 98 99 1 99 100 1 100 101 1
		 101 102 1 102 103 1 103 104 1;
	setAttr ".ed[166:331]" 104 105 1 105 98 1 106 107 1 107 108 1 108 109 1 109 110 1
		 110 111 1 111 112 1 112 113 1 113 106 1 58 66 1 59 67 1 60 68 1 61 69 1 62 70 1 63 71 1
		 64 72 1 65 73 1 66 74 1 67 75 1 68 76 1 69 77 1 70 78 1 71 79 1 72 80 1 73 81 1 74 82 1
		 75 83 1 76 84 1 77 85 1 78 86 1 79 87 1 80 88 1 81 89 1 82 90 1 83 91 1 84 92 1 85 93 1
		 86 94 1 87 95 1 88 96 1 89 97 1 90 98 1 91 99 1 92 100 1 93 101 1 94 102 1 95 103 1
		 96 104 1 97 105 1 98 106 1 99 107 1 100 108 1 101 109 1 102 110 1 103 111 1 104 112 1
		 105 113 1 114 58 1 114 59 1 114 60 1 114 61 1 114 62 1 114 63 1 114 64 1 114 65 1
		 106 115 1 107 115 1 108 115 1 109 115 1 110 115 1 111 115 1 112 115 1 113 115 1 116 117 1
		 117 118 1 118 119 1 119 120 1 120 121 1 121 122 1 122 123 1 123 116 1 124 125 1 125 126 1
		 126 127 1 127 128 1 128 129 1 129 130 1 130 131 1 131 124 1 132 133 1 133 134 1 134 135 1
		 135 136 1 136 137 1 137 138 1 138 139 1 139 132 1 140 141 1 141 142 1 142 143 1 143 144 1
		 144 145 1 145 146 1 146 147 1 147 140 1 148 149 1 149 150 1 150 151 1 151 152 1 152 153 1
		 153 154 1 154 155 1 155 148 1 156 157 1 157 158 1 158 159 1 159 160 1 160 161 1 161 162 1
		 162 163 1 163 156 1 164 165 1 165 166 1 166 167 1 167 168 1 168 169 1 169 170 1 170 171 1
		 171 164 1 116 124 1 117 125 1 118 126 1 119 127 1 120 128 1 121 129 1 122 130 1 123 131 1
		 124 132 1 125 133 1 126 134 1 127 135 1 128 136 1 129 137 1 130 138 1 131 139 1 132 140 1
		 133 141 1 134 142 1 135 143 1 136 144 1 137 145 1 138 146 1 139 147 1 140 148 1 141 149 1
		 142 150 1 143 151 1 144 152 1 145 153 1 146 154 1 147 155 1 148 156 1 149 157 1 150 158 1
		 151 159 1;
	setAttr ".ed[332:497]" 152 160 1 153 161 1 154 162 1 155 163 1 156 164 1 157 165 1
		 158 166 1 159 167 1 160 168 1 161 169 1 162 170 1 163 171 1 172 116 1 172 117 1 172 118 1
		 172 119 1 172 120 1 172 121 1 172 122 1 172 123 1 164 173 1 165 173 1 166 173 1 167 173 1
		 168 173 1 169 173 1 170 173 1 171 173 1 174 175 1 175 176 1 176 177 1 177 178 1 179 180 1
		 180 181 1 181 182 1 182 183 1 184 185 1 185 186 1 186 187 1 187 188 1 189 190 1 190 191 1
		 191 192 1 192 193 1 194 195 1 195 196 1 196 197 1 197 198 1 199 200 1 200 201 1 201 202 1
		 202 203 1 204 205 1 205 206 1 206 207 1 207 208 1 174 179 0 175 180 1 176 181 1 177 182 1
		 178 183 0 179 184 0 180 185 1 181 186 1 182 187 1 183 188 0 184 189 0 185 190 1 186 191 1
		 187 192 1 188 193 0 189 194 0 190 195 1 191 196 1 192 197 1 193 198 0 194 199 0 195 200 1
		 196 201 1 197 202 1 198 203 0 199 204 0 200 205 1 201 206 1 202 207 1 203 208 0 209 174 0
		 209 175 1 209 176 1 209 177 1 209 178 0 204 210 0 205 210 1 206 210 1 207 210 1 208 210 0
		 211 212 1 212 213 1 213 214 1 214 215 1 216 217 1 217 218 1 218 219 1 219 220 1 221 222 1
		 222 223 1 223 224 1 224 225 1 226 227 1 227 228 1 228 229 1 229 230 1 231 232 1 232 233 1
		 233 234 1 234 235 1 236 237 1 237 238 1 238 239 1 239 240 1 241 242 1 242 243 1 243 244 1
		 244 245 1 211 216 0 212 217 1 213 218 1 214 219 1 215 220 0 216 221 0 217 222 1 218 223 1
		 219 224 1 220 225 0 221 226 0 222 227 1 223 228 1 224 229 1 225 230 0 226 231 0 227 232 1
		 228 233 1 229 234 1 230 235 0 231 236 0 232 237 1 233 238 1 234 239 1 235 240 0 236 241 0
		 237 242 1 238 243 1 239 244 1 240 245 0 246 211 0 246 212 1 246 213 1 246 214 1 246 215 0
		 241 247 0 242 247 1 243 247 1 244 247 1 245 247 0 248 249 1 249 250 1;
	setAttr ".ed[498:663]" 250 251 1 251 252 1 252 253 1 253 254 1 254 255 1 255 248 1
		 256 257 1 257 258 1 258 259 1 259 260 1 260 261 1 261 262 1 262 263 1 263 256 1 264 265 1
		 265 266 1 266 267 1 267 268 1 268 269 1 269 270 1 270 271 1 271 264 1 272 273 1 273 274 1
		 274 275 1 275 276 1 276 277 1 277 278 1 278 279 1 279 272 1 280 281 1 281 282 1 282 283 1
		 283 284 1 284 285 1 285 286 1 286 287 1 287 280 1 288 289 1 289 290 1 290 291 1 291 292 1
		 292 293 1 293 294 1 294 295 1 295 288 1 296 297 1 297 298 1 298 299 1 299 300 1 300 301 1
		 301 302 1 302 303 1 303 296 1 248 256 1 249 257 1 250 258 1 251 259 1 252 260 1 253 261 1
		 254 262 1 255 263 1 256 264 1 257 265 1 258 266 1 259 267 1 260 268 1 261 269 1 262 270 1
		 263 271 1 264 272 1 265 273 1 266 274 1 267 275 1 268 276 1 269 277 1 270 278 1 271 279 1
		 272 280 1 273 281 1 274 282 1 275 283 1 276 284 1 277 285 1 278 286 1 279 287 1 280 288 1
		 281 289 1 282 290 1 283 291 1 284 292 1 285 293 1 286 294 1 287 295 1 288 296 1 289 297 1
		 290 298 1 291 299 1 292 300 1 293 301 1 294 302 1 295 303 1 304 248 1 304 249 1 304 250 1
		 304 251 1 304 252 1 304 253 1 304 254 1 304 255 1 296 305 1 297 305 1 298 305 1 299 305 1
		 300 305 1 301 305 1 302 305 1 303 305 1 306 307 1 307 308 1 308 309 1 309 310 1 310 311 1
		 311 312 1 312 313 1 313 306 1 314 315 1 315 316 1 316 317 1 317 318 1 318 319 1 319 320 1
		 320 321 1 321 314 1 306 314 1 307 315 1 308 316 1 309 317 1 310 318 1 311 319 1 312 320 1
		 313 321 1 322 306 1 322 307 1 322 308 1 322 309 1 322 310 1 322 311 1 322 312 1 322 313 1
		 314 323 1 315 323 1 316 323 1 317 323 1 318 323 1 319 323 1 320 323 1 321 323 1 324 325 1
		 325 326 1 326 327 1 327 328 1 328 329 1 329 330 1 330 331 1 331 324 1;
	setAttr ".ed[664:723]" 332 333 1 333 334 1 334 335 1 335 336 1 336 337 1 337 338 1
		 338 339 1 339 332 1 324 332 1 325 333 1 326 334 1 327 335 1 328 336 1 329 337 1 330 338 1
		 331 339 1 340 324 1 340 325 1 340 326 1 340 327 1 340 328 1 340 329 1 340 330 1 340 331 1
		 332 341 1 333 341 1 334 341 1 335 341 1 336 341 1 337 341 1 338 341 1 339 341 1 342 343 1
		 344 345 1 346 347 1 348 349 1 350 351 1 352 353 1 354 355 1 356 357 1 342 344 1 343 345 1
		 344 346 1 345 347 1 346 348 1 347 349 1 348 350 1 349 351 1 350 352 1 351 353 1 352 354 1
		 353 355 1 354 356 1 355 357 1 356 342 1 357 343 1 355 349 1 357 347 1 354 348 1 356 346 1;
	setAttr -s 382 -ch 1416 ".fc[0:381]" -type "polyFaces" 
		f 4 56 8 -58 -1
		mu 0 4 0 1 2 3
		f 4 57 9 -59 -2
		mu 0 4 3 2 4 5
		f 4 58 10 -60 -3
		mu 0 4 5 4 6 7
		f 4 59 11 -61 -4
		mu 0 4 7 6 8 9
		f 4 60 12 -62 -5
		mu 0 4 9 8 10 11
		f 4 61 13 -63 -6
		mu 0 4 11 10 12 13
		f 4 62 14 -64 -7
		mu 0 4 13 12 14 15
		f 4 63 15 -57 -8
		mu 0 4 15 14 16 17
		f 4 64 16 -66 -9
		mu 0 4 1 18 19 2
		f 4 65 17 -67 -10
		mu 0 4 2 19 20 4
		f 4 66 18 -68 -11
		mu 0 4 4 20 21 6
		f 4 67 19 -69 -12
		mu 0 4 6 21 22 8
		f 4 68 20 -70 -13
		mu 0 4 8 22 23 10
		f 4 69 21 -71 -14
		mu 0 4 10 23 24 12
		f 4 70 22 -72 -15
		mu 0 4 12 24 25 14
		f 4 71 23 -65 -16
		mu 0 4 14 25 26 16
		f 4 72 24 -74 -17
		mu 0 4 18 27 28 19
		f 4 73 25 -75 -18
		mu 0 4 19 28 29 20
		f 4 74 26 -76 -19
		mu 0 4 20 29 30 21
		f 4 75 27 -77 -20
		mu 0 4 21 30 31 22
		f 4 76 28 -78 -21
		mu 0 4 22 31 32 23
		f 4 77 29 -79 -22
		mu 0 4 23 32 33 24
		f 4 78 30 -80 -23
		mu 0 4 24 33 34 25
		f 4 79 31 -73 -24
		mu 0 4 25 34 35 26
		f 4 80 32 -82 -25
		mu 0 4 27 36 37 28
		f 4 81 33 -83 -26
		mu 0 4 28 37 38 29
		f 4 82 34 -84 -27
		mu 0 4 29 38 39 30
		f 4 83 35 -85 -28
		mu 0 4 30 39 40 31
		f 4 84 36 -86 -29
		mu 0 4 31 40 41 32
		f 4 85 37 -87 -30
		mu 0 4 32 41 42 33
		f 4 86 38 -88 -31
		mu 0 4 33 42 43 34
		f 4 87 39 -81 -32
		mu 0 4 34 43 44 35
		f 4 88 40 -90 -33
		mu 0 4 36 45 46 37
		f 4 89 41 -91 -34
		mu 0 4 37 46 47 38
		f 4 90 42 -92 -35
		mu 0 4 38 47 48 39
		f 4 91 43 -93 -36
		mu 0 4 39 48 49 40
		f 4 92 44 -94 -37
		mu 0 4 40 49 50 41
		f 4 93 45 -95 -38
		mu 0 4 41 50 51 42
		f 4 94 46 -96 -39
		mu 0 4 42 51 52 43
		f 4 95 47 -89 -40
		mu 0 4 43 52 53 44
		f 4 96 48 -98 -41
		mu 0 4 45 54 55 46
		f 4 97 49 -99 -42
		mu 0 4 46 55 56 47
		f 4 98 50 -100 -43
		mu 0 4 47 56 57 48
		f 4 99 51 -101 -44
		mu 0 4 48 57 58 49
		f 4 100 52 -102 -45
		mu 0 4 49 58 59 50
		f 4 101 53 -103 -46
		mu 0 4 50 59 60 51
		f 4 102 54 -104 -47
		mu 0 4 51 60 61 52
		f 4 103 55 -97 -48
		mu 0 4 52 61 62 53
		f 3 -106 104 0
		mu 0 3 3 63 0
		f 3 -107 105 1
		mu 0 3 5 64 3
		f 3 -108 106 2
		mu 0 3 7 65 5
		f 3 -109 107 3
		mu 0 3 9 66 7
		f 3 -110 108 4
		mu 0 3 11 67 9
		f 3 -111 109 5
		mu 0 3 13 68 11
		f 3 -112 110 6
		mu 0 3 15 69 13
		f 3 -105 111 7
		mu 0 3 17 70 15
		f 3 112 -114 -49
		mu 0 3 54 71 55
		f 3 113 -115 -50
		mu 0 3 55 72 56
		f 3 114 -116 -51
		mu 0 3 56 73 57
		f 3 115 -117 -52
		mu 0 3 57 74 58
		f 3 116 -118 -53
		mu 0 3 58 75 59
		f 3 117 -119 -54
		mu 0 3 59 76 60
		f 3 118 -120 -55
		mu 0 3 60 77 61
		f 3 119 -113 -56
		mu 0 3 61 78 62
		f 4 120 177 -129 -177
		mu 0 4 79 80 81 82
		f 4 121 178 -130 -178
		mu 0 4 80 83 84 81
		f 4 122 179 -131 -179
		mu 0 4 83 85 86 84
		f 4 123 180 -132 -180
		mu 0 4 85 87 88 86
		f 4 124 181 -133 -181
		mu 0 4 87 89 90 88
		f 4 125 182 -134 -182
		mu 0 4 89 91 92 90
		f 4 126 183 -135 -183
		mu 0 4 91 93 94 92
		f 4 127 176 -136 -184
		mu 0 4 93 95 96 94
		f 4 128 185 -137 -185
		mu 0 4 82 81 97 98
		f 4 129 186 -138 -186
		mu 0 4 81 84 99 97
		f 4 130 187 -139 -187
		mu 0 4 84 86 100 99
		f 4 131 188 -140 -188
		mu 0 4 86 88 101 100
		f 4 132 189 -141 -189
		mu 0 4 88 90 102 101
		f 4 133 190 -142 -190
		mu 0 4 90 92 103 102
		f 4 134 191 -143 -191
		mu 0 4 92 94 104 103
		f 4 135 184 -144 -192
		mu 0 4 94 96 105 104
		f 4 136 193 -145 -193
		mu 0 4 98 97 106 107
		f 4 137 194 -146 -194
		mu 0 4 97 99 108 106
		f 4 138 195 -147 -195
		mu 0 4 99 100 109 108
		f 4 139 196 -148 -196
		mu 0 4 100 101 110 109
		f 4 140 197 -149 -197
		mu 0 4 101 102 111 110
		f 4 141 198 -150 -198
		mu 0 4 102 103 112 111
		f 4 142 199 -151 -199
		mu 0 4 103 104 113 112
		f 4 143 192 -152 -200
		mu 0 4 104 105 114 113
		f 4 144 201 -153 -201
		mu 0 4 107 106 115 116
		f 4 145 202 -154 -202
		mu 0 4 106 108 117 115
		f 4 146 203 -155 -203
		mu 0 4 108 109 118 117
		f 4 147 204 -156 -204
		mu 0 4 109 110 119 118
		f 4 148 205 -157 -205
		mu 0 4 110 111 120 119
		f 4 149 206 -158 -206
		mu 0 4 111 112 121 120
		f 4 150 207 -159 -207
		mu 0 4 112 113 122 121
		f 4 151 200 -160 -208
		mu 0 4 113 114 123 122
		f 4 152 209 -161 -209
		mu 0 4 116 115 124 125
		f 4 153 210 -162 -210
		mu 0 4 115 117 126 124
		f 4 154 211 -163 -211
		mu 0 4 117 118 127 126
		f 4 155 212 -164 -212
		mu 0 4 118 119 128 127
		f 4 156 213 -165 -213
		mu 0 4 119 120 129 128
		f 4 157 214 -166 -214
		mu 0 4 120 121 130 129
		f 4 158 215 -167 -215
		mu 0 4 121 122 131 130
		f 4 159 208 -168 -216
		mu 0 4 122 123 132 131
		f 4 160 217 -169 -217
		mu 0 4 125 124 133 134
		f 4 161 218 -170 -218
		mu 0 4 124 126 135 133
		f 4 162 219 -171 -219
		mu 0 4 126 127 136 135
		f 4 163 220 -172 -220
		mu 0 4 127 128 137 136
		f 4 164 221 -173 -221
		mu 0 4 128 129 138 137
		f 4 165 222 -174 -222
		mu 0 4 129 130 139 138
		f 4 166 223 -175 -223
		mu 0 4 130 131 140 139
		f 4 167 216 -176 -224
		mu 0 4 131 132 141 140
		f 3 -121 -225 225
		mu 0 3 80 79 142
		f 3 -122 -226 226
		mu 0 3 83 80 143
		f 3 -123 -227 227
		mu 0 3 85 83 144
		f 3 -124 -228 228
		mu 0 3 87 85 145
		f 3 -125 -229 229
		mu 0 3 89 87 146
		f 3 -126 -230 230
		mu 0 3 91 89 147
		f 3 -127 -231 231
		mu 0 3 93 91 148
		f 3 -128 -232 224
		mu 0 3 95 93 149
		f 3 168 233 -233
		mu 0 3 134 133 150
		f 3 169 234 -234
		mu 0 3 133 135 151
		f 3 170 235 -235
		mu 0 3 135 136 152
		f 3 171 236 -236
		mu 0 3 136 137 153
		f 3 172 237 -237
		mu 0 3 137 138 154
		f 3 173 238 -238
		mu 0 3 138 139 155
		f 3 174 239 -239
		mu 0 3 139 140 156
		f 3 175 232 -240
		mu 0 3 140 141 157
		f 4 240 297 -249 -297
		mu 0 4 158 159 160 161
		f 4 241 298 -250 -298
		mu 0 4 159 162 163 160
		f 4 242 299 -251 -299
		mu 0 4 162 164 165 163
		f 4 243 300 -252 -300
		mu 0 4 164 166 167 165
		f 4 244 301 -253 -301
		mu 0 4 166 168 169 167
		f 4 245 302 -254 -302
		mu 0 4 168 170 171 169
		f 4 246 303 -255 -303
		mu 0 4 170 172 173 171
		f 4 247 296 -256 -304
		mu 0 4 172 174 175 173
		f 4 248 305 -257 -305
		mu 0 4 161 160 176 177
		f 4 249 306 -258 -306
		mu 0 4 160 163 178 176
		f 4 250 307 -259 -307
		mu 0 4 163 165 179 178
		f 4 251 308 -260 -308
		mu 0 4 165 167 180 179
		f 4 252 309 -261 -309
		mu 0 4 167 169 181 180
		f 4 253 310 -262 -310
		mu 0 4 169 171 182 181
		f 4 254 311 -263 -311
		mu 0 4 171 173 183 182
		f 4 255 304 -264 -312
		mu 0 4 173 175 184 183
		f 4 256 313 -265 -313
		mu 0 4 177 176 185 186
		f 4 257 314 -266 -314
		mu 0 4 176 178 187 185
		f 4 258 315 -267 -315
		mu 0 4 178 179 188 187
		f 4 259 316 -268 -316
		mu 0 4 179 180 189 188
		f 4 260 317 -269 -317
		mu 0 4 180 181 190 189
		f 4 261 318 -270 -318
		mu 0 4 181 182 191 190
		f 4 262 319 -271 -319
		mu 0 4 182 183 192 191
		f 4 263 312 -272 -320
		mu 0 4 183 184 193 192
		f 4 264 321 -273 -321
		mu 0 4 186 185 194 195
		f 4 265 322 -274 -322
		mu 0 4 185 187 196 194
		f 4 266 323 -275 -323
		mu 0 4 187 188 197 196
		f 4 267 324 -276 -324
		mu 0 4 188 189 198 197
		f 4 268 325 -277 -325
		mu 0 4 189 190 199 198
		f 4 269 326 -278 -326
		mu 0 4 190 191 200 199
		f 4 270 327 -279 -327
		mu 0 4 191 192 201 200
		f 4 271 320 -280 -328
		mu 0 4 192 193 202 201
		f 4 272 329 -281 -329
		mu 0 4 195 194 203 204
		f 4 273 330 -282 -330
		mu 0 4 194 196 205 203
		f 4 274 331 -283 -331
		mu 0 4 196 197 206 205
		f 4 275 332 -284 -332
		mu 0 4 197 198 207 206
		f 4 276 333 -285 -333
		mu 0 4 198 199 208 207
		f 4 277 334 -286 -334
		mu 0 4 199 200 209 208
		f 4 278 335 -287 -335
		mu 0 4 200 201 210 209
		f 4 279 328 -288 -336
		mu 0 4 201 202 211 210
		f 4 280 337 -289 -337
		mu 0 4 204 203 212 213
		f 4 281 338 -290 -338
		mu 0 4 203 205 214 212
		f 4 282 339 -291 -339
		mu 0 4 205 206 215 214
		f 4 283 340 -292 -340
		mu 0 4 206 207 216 215
		f 4 284 341 -293 -341
		mu 0 4 207 208 217 216
		f 4 285 342 -294 -342
		mu 0 4 208 209 218 217
		f 4 286 343 -295 -343
		mu 0 4 209 210 219 218
		f 4 287 336 -296 -344
		mu 0 4 210 211 220 219
		f 3 -241 -345 345
		mu 0 3 159 158 221
		f 3 -242 -346 346
		mu 0 3 162 159 222
		f 3 -243 -347 347
		mu 0 3 164 162 223
		f 3 -244 -348 348
		mu 0 3 166 164 224
		f 3 -245 -349 349
		mu 0 3 168 166 225
		f 3 -246 -350 350
		mu 0 3 170 168 226
		f 3 -247 -351 351
		mu 0 3 172 170 227
		f 3 -248 -352 344
		mu 0 3 174 172 228
		f 3 288 353 -353
		mu 0 3 213 212 229
		f 3 289 354 -354
		mu 0 3 212 214 230
		f 3 290 355 -355
		mu 0 3 214 215 231
		f 3 291 356 -356
		mu 0 3 215 216 232
		f 3 292 357 -357
		mu 0 3 216 217 233
		f 3 293 358 -358
		mu 0 3 217 218 234
		f 3 294 359 -359
		mu 0 3 218 219 235
		f 3 295 352 -360
		mu 0 3 219 220 236
		f 4 360 389 -365 -389
		mu 0 4 237 238 239 240
		f 4 361 390 -366 -390
		mu 0 4 238 241 242 239
		f 4 362 391 -367 -391
		mu 0 4 241 243 244 242
		f 4 363 392 -368 -392
		mu 0 4 243 245 246 244
		f 4 364 394 -369 -394
		mu 0 4 240 239 247 248
		f 4 365 395 -370 -395
		mu 0 4 239 242 249 247
		f 4 366 396 -371 -396
		mu 0 4 242 244 250 249
		f 4 367 397 -372 -397
		mu 0 4 244 246 251 250
		f 4 368 399 -373 -399
		mu 0 4 248 247 252 253
		f 4 369 400 -374 -400
		mu 0 4 247 249 254 252
		f 4 370 401 -375 -401
		mu 0 4 249 250 255 254
		f 4 371 402 -376 -402
		mu 0 4 250 251 256 255
		f 4 372 404 -377 -404
		mu 0 4 253 252 257 258
		f 4 373 405 -378 -405
		mu 0 4 252 254 259 257
		f 4 374 406 -379 -406
		mu 0 4 254 255 260 259
		f 4 375 407 -380 -407
		mu 0 4 255 256 261 260
		f 4 376 409 -381 -409
		mu 0 4 258 257 262 263
		f 4 377 410 -382 -410
		mu 0 4 257 259 264 262
		f 4 378 411 -383 -411
		mu 0 4 259 260 265 264
		f 4 379 412 -384 -412
		mu 0 4 260 261 266 265
		f 4 380 414 -385 -414
		mu 0 4 263 262 267 268
		f 4 381 415 -386 -415
		mu 0 4 262 264 269 267
		f 4 382 416 -387 -416
		mu 0 4 264 265 270 269
		f 4 383 417 -388 -417
		mu 0 4 265 266 271 270
		f 3 -361 -419 419
		mu 0 3 238 237 272
		f 3 -362 -420 420
		mu 0 3 241 238 273
		f 3 -363 -421 421
		mu 0 3 243 241 274
		f 3 -364 -422 422
		mu 0 3 245 243 275
		f 3 384 424 -424
		mu 0 3 268 267 276
		f 3 385 425 -425
		mu 0 3 267 269 277
		f 3 386 426 -426
		mu 0 3 269 270 278
		f 3 387 427 -427
		mu 0 3 270 271 279
		f 4 456 432 -458 -429
		mu 0 4 280 281 282 283
		f 4 457 433 -459 -430
		mu 0 4 283 282 284 285
		f 4 458 434 -460 -431
		mu 0 4 285 284 286 287
		f 4 459 435 -461 -432
		mu 0 4 287 286 288 289
		f 4 461 436 -463 -433
		mu 0 4 281 290 291 282
		f 4 462 437 -464 -434
		mu 0 4 282 291 292 284
		f 4 463 438 -465 -435
		mu 0 4 284 292 293 286
		f 4 464 439 -466 -436
		mu 0 4 286 293 294 288
		f 4 466 440 -468 -437
		mu 0 4 290 295 296 291
		f 4 467 441 -469 -438
		mu 0 4 291 296 297 292
		f 4 468 442 -470 -439
		mu 0 4 292 297 298 293
		f 4 469 443 -471 -440
		mu 0 4 293 298 299 294
		f 4 471 444 -473 -441
		mu 0 4 295 300 301 296
		f 4 472 445 -474 -442
		mu 0 4 296 301 302 297
		f 4 473 446 -475 -443
		mu 0 4 297 302 303 298
		f 4 474 447 -476 -444
		mu 0 4 298 303 304 299
		f 4 476 448 -478 -445
		mu 0 4 300 305 306 301
		f 4 477 449 -479 -446
		mu 0 4 301 306 307 302
		f 4 478 450 -480 -447
		mu 0 4 302 307 308 303
		f 4 479 451 -481 -448
		mu 0 4 303 308 309 304
		f 4 481 452 -483 -449
		mu 0 4 305 310 311 306
		f 4 482 453 -484 -450
		mu 0 4 306 311 312 307
		f 4 483 454 -485 -451
		mu 0 4 307 312 313 308
		f 4 484 455 -486 -452
		mu 0 4 308 313 314 309
		f 3 -488 486 428
		mu 0 3 283 315 280
		f 3 -489 487 429
		mu 0 3 285 316 283
		f 3 -490 488 430
		mu 0 3 287 317 285
		f 3 -491 489 431
		mu 0 3 289 318 287
		f 3 491 -493 -453
		mu 0 3 310 319 311
		f 3 492 -494 -454
		mu 0 3 311 320 312
		f 3 493 -495 -455
		mu 0 3 312 321 313
		f 3 494 -496 -456
		mu 0 3 313 322 314
		f 4 552 504 -554 -497
		mu 0 4 323 324 325 326
		f 4 553 505 -555 -498
		mu 0 4 326 325 327 328
		f 4 554 506 -556 -499
		mu 0 4 328 327 329 330
		f 4 555 507 -557 -500
		mu 0 4 330 329 331 332
		f 4 556 508 -558 -501
		mu 0 4 332 331 333 334
		f 4 557 509 -559 -502
		mu 0 4 334 333 335 336
		f 4 558 510 -560 -503
		mu 0 4 336 335 337 338
		f 4 559 511 -553 -504
		mu 0 4 338 337 339 340
		f 4 560 512 -562 -505
		mu 0 4 324 341 342 325
		f 4 561 513 -563 -506
		mu 0 4 325 342 343 327
		f 4 562 514 -564 -507
		mu 0 4 327 343 344 329
		f 4 563 515 -565 -508
		mu 0 4 329 344 345 331
		f 4 564 516 -566 -509
		mu 0 4 331 345 346 333
		f 4 565 517 -567 -510
		mu 0 4 333 346 347 335
		f 4 566 518 -568 -511
		mu 0 4 335 347 348 337
		f 4 567 519 -561 -512
		mu 0 4 337 348 349 339
		f 4 568 520 -570 -513
		mu 0 4 341 350 351 342
		f 4 569 521 -571 -514
		mu 0 4 342 351 352 343
		f 4 570 522 -572 -515
		mu 0 4 343 352 353 344
		f 4 571 523 -573 -516
		mu 0 4 344 353 354 345
		f 4 572 524 -574 -517
		mu 0 4 345 354 355 346
		f 4 573 525 -575 -518
		mu 0 4 346 355 356 347
		f 4 574 526 -576 -519
		mu 0 4 347 356 357 348
		f 4 575 527 -569 -520
		mu 0 4 348 357 358 349
		f 4 576 528 -578 -521
		mu 0 4 350 359 360 351
		f 4 577 529 -579 -522
		mu 0 4 351 360 361 352
		f 4 578 530 -580 -523
		mu 0 4 352 361 362 353
		f 4 579 531 -581 -524
		mu 0 4 353 362 363 354
		f 4 580 532 -582 -525
		mu 0 4 354 363 364 355
		f 4 581 533 -583 -526
		mu 0 4 355 364 365 356
		f 4 582 534 -584 -527
		mu 0 4 356 365 366 357
		f 4 583 535 -577 -528
		mu 0 4 357 366 367 358
		f 4 584 536 -586 -529
		mu 0 4 359 368 369 360
		f 4 585 537 -587 -530
		mu 0 4 360 369 370 361
		f 4 586 538 -588 -531
		mu 0 4 361 370 371 362
		f 4 587 539 -589 -532
		mu 0 4 362 371 372 363
		f 4 588 540 -590 -533
		mu 0 4 363 372 373 364
		f 4 589 541 -591 -534
		mu 0 4 364 373 374 365
		f 4 590 542 -592 -535
		mu 0 4 365 374 375 366
		f 4 591 543 -585 -536
		mu 0 4 366 375 376 367
		f 4 592 544 -594 -537
		mu 0 4 368 377 378 369
		f 4 593 545 -595 -538
		mu 0 4 369 378 379 370
		f 4 594 546 -596 -539
		mu 0 4 370 379 380 371
		f 4 595 547 -597 -540
		mu 0 4 371 380 381 372
		f 4 596 548 -598 -541
		mu 0 4 372 381 382 373
		f 4 597 549 -599 -542
		mu 0 4 373 382 383 374
		f 4 598 550 -600 -543
		mu 0 4 374 383 384 375
		f 4 599 551 -593 -544
		mu 0 4 375 384 385 376
		f 3 -602 600 496
		mu 0 3 326 386 323
		f 3 -603 601 497
		mu 0 3 328 387 326
		f 3 -604 602 498
		mu 0 3 330 388 328
		f 3 -605 603 499
		mu 0 3 332 389 330
		f 3 -606 604 500
		mu 0 3 334 390 332
		f 3 -607 605 501
		mu 0 3 336 391 334
		f 3 -608 606 502
		mu 0 3 338 392 336
		f 3 -601 607 503
		mu 0 3 340 393 338
		f 3 608 -610 -545
		mu 0 3 377 394 378
		f 3 609 -611 -546
		mu 0 3 378 395 379
		f 3 610 -612 -547
		mu 0 3 379 396 380
		f 3 611 -613 -548
		mu 0 3 380 397 381
		f 3 612 -614 -549
		mu 0 3 381 398 382
		f 3 613 -615 -550
		mu 0 3 382 399 383
		f 3 614 -616 -551
		mu 0 3 383 400 384
		f 3 615 -609 -552
		mu 0 3 384 401 385
		f 4 632 624 -634 -617
		mu 0 4 402 403 404 405
		f 4 633 625 -635 -618
		mu 0 4 405 404 406 407
		f 4 634 626 -636 -619
		mu 0 4 407 406 408 409
		f 4 635 627 -637 -620
		mu 0 4 409 408 410 411
		f 4 636 628 -638 -621
		mu 0 4 411 410 412 413
		f 4 637 629 -639 -622
		mu 0 4 413 412 414 415
		f 4 638 630 -640 -623
		mu 0 4 415 414 416 417
		f 4 639 631 -633 -624
		mu 0 4 417 416 418 419
		f 3 -642 640 616
		mu 0 3 420 421 422
		f 3 -643 641 617
		mu 0 3 423 421 420
		f 3 -644 642 618
		mu 0 3 424 421 423
		f 3 -645 643 619
		mu 0 3 425 421 424
		f 3 -646 644 620
		mu 0 3 426 421 425
		f 3 -647 645 621
		mu 0 3 427 421 426
		f 3 -648 646 622
		mu 0 3 428 421 427
		f 3 -641 647 623
		mu 0 3 422 421 428
		f 3 648 -650 -625
		mu 0 3 429 430 431
		f 3 649 -651 -626
		mu 0 3 431 430 432
		f 3 650 -652 -627
		mu 0 3 432 430 433
		f 3 651 -653 -628
		mu 0 3 433 430 434
		f 3 652 -654 -629
		mu 0 3 434 430 435
		f 3 653 -655 -630
		mu 0 3 435 430 436
		f 3 654 -656 -631
		mu 0 3 436 430 437
		f 3 655 -649 -632
		mu 0 3 437 430 429
		f 4 656 673 -665 -673
		mu 0 4 438 439 440 441
		f 4 657 674 -666 -674
		mu 0 4 439 442 443 440
		f 4 658 675 -667 -675
		mu 0 4 442 444 445 443
		f 4 659 676 -668 -676
		mu 0 4 444 446 447 445
		f 4 660 677 -669 -677
		mu 0 4 446 448 449 447
		f 4 661 678 -670 -678
		mu 0 4 448 450 451 449
		f 4 662 679 -671 -679
		mu 0 4 450 452 453 451
		f 4 663 672 -672 -680
		mu 0 4 452 454 455 453
		f 3 -657 -681 681
		mu 0 3 456 457 458
		f 3 -658 -682 682
		mu 0 3 459 456 458
		f 3 -659 -683 683
		mu 0 3 460 459 458
		f 3 -660 -684 684
		mu 0 3 461 460 458
		f 3 -661 -685 685
		mu 0 3 462 461 458
		f 3 -662 -686 686
		mu 0 3 463 462 458
		f 3 -663 -687 687
		mu 0 3 464 463 458
		f 3 -664 -688 680
		mu 0 3 457 464 458
		f 3 664 689 -689
		mu 0 3 465 466 467
		f 3 665 690 -690
		mu 0 3 466 468 467
		f 3 666 691 -691
		mu 0 3 468 469 467
		f 3 667 692 -692
		mu 0 3 469 470 467
		f 3 668 693 -693
		mu 0 3 470 471 467
		f 3 669 694 -694
		mu 0 3 471 472 467
		f 3 670 695 -695
		mu 0 3 472 473 467
		f 3 671 688 -696
		mu 0 3 473 465 467
		f 4 696 705 -698 -705
		mu 0 4 474 475 476 477
		f 4 697 707 -699 -707
		mu 0 4 477 476 478 479
		f 4 698 709 -700 -709
		mu 0 4 479 478 480 481
		f 4 699 711 -701 -711
		mu 0 4 481 480 482 483
		f 4 700 713 -702 -713
		mu 0 4 483 482 484 485
		f 4 701 715 -703 -715
		mu 0 4 485 484 486 487
		f 4 702 717 -704 -717
		mu 0 4 487 486 488 489
		f 4 703 719 -697 -719
		mu 0 4 489 488 490 491
		f 4 -716 -714 -712 -721
		mu 0 4 492 493 494 495
		f 4 -718 720 -710 -722
		mu 0 4 496 492 495 497
		f 4 -720 721 -708 -706
		mu 0 4 475 496 497 476
		f 4 714 722 710 712
		mu 0 4 498 499 500 501
		f 4 716 723 708 -723
		mu 0 4 499 502 503 500
		f 4 718 704 706 -724
		mu 0 4 502 474 477 503;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".vcs" 2;
createNode mentalrayItemsList -s -n "mentalrayItemsList";
createNode mentalrayGlobals -s -n "mentalrayGlobals";
createNode mentalrayOptions -s -n "miDefaultOptions";
	addAttr -ci true -m -sn "stringOptions" -ln "stringOptions" -at "compound" -nc 
		3;
	addAttr -ci true -sn "name" -ln "name" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "value" -ln "value" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "type" -ln "type" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "miSamplesQualityR" -ln "miSamplesQualityR" -dv 0.25 -min 0.01 
		-max 9999999.9000000004 -smn 0.1 -smx 2 -at "double";
	addAttr -ci true -sn "miSamplesQualityG" -ln "miSamplesQualityG" -dv 0.25 -min 0.01 
		-max 9999999.9000000004 -smn 0.1 -smx 2 -at "double";
	addAttr -ci true -sn "miSamplesQualityB" -ln "miSamplesQualityB" -dv 0.25 -min 0.01 
		-max 9999999.9000000004 -smn 0.1 -smx 2 -at "double";
	addAttr -ci true -sn "miSamplesQualityA" -ln "miSamplesQualityA" -dv 0.25 -min 0.01 
		-max 9999999.9000000004 -smn 0.1 -smx 2 -at "double";
	addAttr -ci true -sn "miSamplesMin" -ln "miSamplesMin" -dv 1 -min 0.1 -at "double";
	addAttr -ci true -sn "miSamplesMax" -ln "miSamplesMax" -dv 100 -min 0.1 -at "double";
	addAttr -ci true -sn "miSamplesErrorCutoffR" -ln "miSamplesErrorCutoffR" -min 0 
		-max 1 -at "double";
	addAttr -ci true -sn "miSamplesErrorCutoffG" -ln "miSamplesErrorCutoffG" -min 0 
		-max 1 -at "double";
	addAttr -ci true -sn "miSamplesErrorCutoffB" -ln "miSamplesErrorCutoffB" -min 0 
		-max 1 -at "double";
	addAttr -ci true -sn "miSamplesErrorCutoffA" -ln "miSamplesErrorCutoffA" -min 0 
		-max 1 -at "double";
	addAttr -ci true -sn "miSamplesPerObject" -ln "miSamplesPerObject" -min 0 -max 1 
		-at "bool";
	addAttr -ci true -sn "miRastShadingSamples" -ln "miRastShadingSamples" -dv 1 -min 
		0.25 -at "double";
	addAttr -ci true -sn "miRastSamples" -ln "miRastSamples" -dv 3 -min 1 -at "long";
	addAttr -ci true -sn "miContrastAsColor" -ln "miContrastAsColor" -min 0 -max 1 -at "bool";
	addAttr -ci true -sn "miProgMaxTime" -ln "miProgMaxTime" -min 0 -at "long";
	addAttr -ci true -sn "miProgSubsampleSize" -ln "miProgSubsampleSize" -dv 4 -min 
		1 -at "long";
	addAttr -ci true -sn "miTraceCameraMotionVectors" -ln "miTraceCameraMotionVectors" 
		-min 0 -max 1 -at "bool";
	addAttr -ci true -sn "miTraceCameraClip" -ln "miTraceCameraClip" -min 0 -max 1 -at "bool";
	setAttr -s 45 ".stringOptions";
	setAttr ".stringOptions[0].name" -type "string" "rast motion factor";
	setAttr ".stringOptions[0].value" -type "string" "1.0";
	setAttr ".stringOptions[0].type" -type "string" "scalar";
	setAttr ".stringOptions[1].name" -type "string" "rast transparency depth";
	setAttr ".stringOptions[1].value" -type "string" "8";
	setAttr ".stringOptions[1].type" -type "string" "integer";
	setAttr ".stringOptions[2].name" -type "string" "rast useopacity";
	setAttr ".stringOptions[2].value" -type "string" "true";
	setAttr ".stringOptions[2].type" -type "string" "boolean";
	setAttr ".stringOptions[3].name" -type "string" "importon";
	setAttr ".stringOptions[3].value" -type "string" "false";
	setAttr ".stringOptions[3].type" -type "string" "boolean";
	setAttr ".stringOptions[4].name" -type "string" "importon density";
	setAttr ".stringOptions[4].value" -type "string" "1.0";
	setAttr ".stringOptions[4].type" -type "string" "scalar";
	setAttr ".stringOptions[5].name" -type "string" "importon merge";
	setAttr ".stringOptions[5].value" -type "string" "0.0";
	setAttr ".stringOptions[5].type" -type "string" "scalar";
	setAttr ".stringOptions[6].name" -type "string" "importon trace depth";
	setAttr ".stringOptions[6].value" -type "string" "0";
	setAttr ".stringOptions[6].type" -type "string" "integer";
	setAttr ".stringOptions[7].name" -type "string" "importon traverse";
	setAttr ".stringOptions[7].value" -type "string" "true";
	setAttr ".stringOptions[7].type" -type "string" "boolean";
	setAttr ".stringOptions[8].name" -type "string" "shadowmap pixel samples";
	setAttr ".stringOptions[8].value" -type "string" "3";
	setAttr ".stringOptions[8].type" -type "string" "integer";
	setAttr ".stringOptions[9].name" -type "string" "ambient occlusion";
	setAttr ".stringOptions[9].value" -type "string" "false";
	setAttr ".stringOptions[9].type" -type "string" "boolean";
	setAttr ".stringOptions[10].name" -type "string" "ambient occlusion rays";
	setAttr ".stringOptions[10].value" -type "string" "256";
	setAttr ".stringOptions[10].type" -type "string" "integer";
	setAttr ".stringOptions[11].name" -type "string" "ambient occlusion cache";
	setAttr ".stringOptions[11].value" -type "string" "false";
	setAttr ".stringOptions[11].type" -type "string" "boolean";
	setAttr ".stringOptions[12].name" -type "string" "ambient occlusion cache density";
	setAttr ".stringOptions[12].value" -type "string" "1.0";
	setAttr ".stringOptions[12].type" -type "string" "scalar";
	setAttr ".stringOptions[13].name" -type "string" "ambient occlusion cache points";
	setAttr ".stringOptions[13].value" -type "string" "64";
	setAttr ".stringOptions[13].type" -type "string" "integer";
	setAttr ".stringOptions[14].name" -type "string" "irradiance particles";
	setAttr ".stringOptions[14].value" -type "string" "false";
	setAttr ".stringOptions[14].type" -type "string" "boolean";
	setAttr ".stringOptions[15].name" -type "string" "irradiance particles rays";
	setAttr ".stringOptions[15].value" -type "string" "256";
	setAttr ".stringOptions[15].type" -type "string" "integer";
	setAttr ".stringOptions[16].name" -type "string" "irradiance particles interpolate";
	setAttr ".stringOptions[16].value" -type "string" "1";
	setAttr ".stringOptions[16].type" -type "string" "integer";
	setAttr ".stringOptions[17].name" -type "string" "irradiance particles interppoints";
	setAttr ".stringOptions[17].value" -type "string" "64";
	setAttr ".stringOptions[17].type" -type "string" "integer";
	setAttr ".stringOptions[18].name" -type "string" "irradiance particles indirect passes";
	setAttr ".stringOptions[18].value" -type "string" "0";
	setAttr ".stringOptions[18].type" -type "string" "integer";
	setAttr ".stringOptions[19].name" -type "string" "irradiance particles scale";
	setAttr ".stringOptions[19].value" -type "string" "1.0";
	setAttr ".stringOptions[19].type" -type "string" "scalar";
	setAttr ".stringOptions[20].name" -type "string" "irradiance particles env";
	setAttr ".stringOptions[20].value" -type "string" "true";
	setAttr ".stringOptions[20].type" -type "string" "boolean";
	setAttr ".stringOptions[21].name" -type "string" "irradiance particles env rays";
	setAttr ".stringOptions[21].value" -type "string" "256";
	setAttr ".stringOptions[21].type" -type "string" "integer";
	setAttr ".stringOptions[22].name" -type "string" "irradiance particles env scale";
	setAttr ".stringOptions[22].value" -type "string" "1";
	setAttr ".stringOptions[22].type" -type "string" "integer";
	setAttr ".stringOptions[23].name" -type "string" "irradiance particles rebuild";
	setAttr ".stringOptions[23].value" -type "string" "true";
	setAttr ".stringOptions[23].type" -type "string" "boolean";
	setAttr ".stringOptions[24].name" -type "string" "irradiance particles file";
	setAttr ".stringOptions[24].value" -type "string" "";
	setAttr ".stringOptions[24].type" -type "string" "string";
	setAttr ".stringOptions[25].name" -type "string" "geom displace motion factor";
	setAttr ".stringOptions[25].value" -type "string" "1.0";
	setAttr ".stringOptions[25].type" -type "string" "scalar";
	setAttr ".stringOptions[26].name" -type "string" "contrast all buffers";
	setAttr ".stringOptions[26].value" -type "string" "true";
	setAttr ".stringOptions[26].type" -type "string" "boolean";
	setAttr ".stringOptions[27].name" -type "string" "finalgather normal tolerance";
	setAttr ".stringOptions[27].value" -type "string" "25.842";
	setAttr ".stringOptions[27].type" -type "string" "scalar";
	setAttr ".stringOptions[28].name" -type "string" "trace camera clip";
	setAttr ".stringOptions[28].value" -type "string" "false";
	setAttr ".stringOptions[28].type" -type "string" "boolean";
	setAttr ".stringOptions[29].name" -type "string" "unified sampling";
	setAttr ".stringOptions[29].value" -type "string" "true";
	setAttr ".stringOptions[29].type" -type "string" "boolean";
	setAttr ".stringOptions[30].name" -type "string" "samples quality";
	setAttr ".stringOptions[30].value" -type "string" "0.5 0.5 0.5 0.5";
	setAttr ".stringOptions[30].type" -type "string" "color";
	setAttr ".stringOptions[31].name" -type "string" "samples min";
	setAttr ".stringOptions[31].value" -type "string" "1.0";
	setAttr ".stringOptions[31].type" -type "string" "scalar";
	setAttr ".stringOptions[32].name" -type "string" "samples max";
	setAttr ".stringOptions[32].value" -type "string" "100.0";
	setAttr ".stringOptions[32].type" -type "string" "scalar";
	setAttr ".stringOptions[33].name" -type "string" "samples error cutoff";
	setAttr ".stringOptions[33].value" -type "string" "0.0 0.0 0.0 0.0";
	setAttr ".stringOptions[33].type" -type "string" "color";
	setAttr ".stringOptions[34].name" -type "string" "samples per object";
	setAttr ".stringOptions[34].value" -type "string" "false";
	setAttr ".stringOptions[34].type" -type "string" "boolean";
	setAttr ".stringOptions[35].name" -type "string" "progressive";
	setAttr ".stringOptions[35].value" -type "string" "false";
	setAttr ".stringOptions[35].type" -type "string" "boolean";
	setAttr ".stringOptions[36].name" -type "string" "progressive max time";
	setAttr ".stringOptions[36].value" -type "string" "0";
	setAttr ".stringOptions[36].type" -type "string" "integer";
	setAttr ".stringOptions[37].name" -type "string" "progressive subsampling size";
	setAttr ".stringOptions[37].value" -type "string" "1";
	setAttr ".stringOptions[37].type" -type "string" "integer";
	setAttr ".stringOptions[38].name" -type "string" "iray";
	setAttr ".stringOptions[38].value" -type "string" "false";
	setAttr ".stringOptions[38].type" -type "string" "boolean";
	setAttr ".stringOptions[39].name" -type "string" "light relative scale";
	setAttr ".stringOptions[39].value" -type "string" "0.31831";
	setAttr ".stringOptions[39].type" -type "string" "scalar";
	setAttr ".stringOptions[40].name" -type "string" "trace camera motion vectors";
	setAttr ".stringOptions[40].value" -type "string" "false";
	setAttr ".stringOptions[40].type" -type "string" "boolean";
	setAttr ".stringOptions[41].name" -type "string" "ray differentials";
	setAttr ".stringOptions[41].value" -type "string" "true";
	setAttr ".stringOptions[41].type" -type "string" "boolean";
	setAttr ".stringOptions[42].name" -type "string" "environment lighting mode";
	setAttr ".stringOptions[42].value" -type "string" "off";
	setAttr ".stringOptions[42].type" -type "string" "string";
	setAttr ".stringOptions[43].name" -type "string" "environment lighting quality";
	setAttr ".stringOptions[43].value" -type "string" "0.167";
	setAttr ".stringOptions[43].type" -type "string" "scalar";
	setAttr ".stringOptions[44].name" -type "string" "environment lighting shadow";
	setAttr ".stringOptions[44].value" -type "string" "transparent";
	setAttr ".stringOptions[44].type" -type "string" "string";
createNode mentalrayFramebuffer -s -n "miDefaultFramebuffer";
createNode lightLinker -s -n "lightLinker1";
	setAttr -s 2 ".lnk";
	setAttr -s 2 ".slnk";
createNode displayLayerManager -n "layerManager";
createNode displayLayer -n "defaultLayer";
createNode renderLayerManager -n "renderLayerManager";
createNode renderLayer -n "defaultRenderLayer";
	setAttr ".g" yes;
createNode script -n "sceneConfigurationScriptNode";
	setAttr ".b" -type "string" "playbackOptions -min 1 -max 24 -ast 1 -aet 48 ";
	setAttr ".st" 6;
createNode script -n "uiConfigurationScriptNode";
	setAttr ".b" -type "string" (
		"// Maya Mel UI Configuration File.\n//\n//  This script is machine generated.  Edit at your own risk.\n//\n//\n\nglobal string $gMainPane;\nif (`paneLayout -exists $gMainPane`) {\n\n\tglobal int $gUseScenePanelConfig;\n\tint    $useSceneConfig = $gUseScenePanelConfig;\n\tint    $menusOkayInPanels = `optionVar -q allowMenusInPanels`;\tint    $nVisPanes = `paneLayout -q -nvp $gMainPane`;\n\tint    $nPanes = 0;\n\tstring $editorName;\n\tstring $panelName;\n\tstring $itemFilterName;\n\tstring $panelConfig;\n\n\t//\n\t//  get current state of the UI\n\t//\n\tsceneUIReplacement -update $gMainPane;\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Top View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"top\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n"
		+ "                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 1\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 8192\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -rendererName \"base_OpenGL_Renderer\" \n"
		+ "                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n"
		+ "                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -pluginShapes 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -greasePencils 1\n                -shadows 0\n                $editorName;\n            modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"top\" \n            -useInteractiveMode 0\n"
		+ "            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 1\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 8192\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n            -objectFilterShowInHUD 1\n"
		+ "            -isFiltered 0\n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n"
		+ "            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -pluginShapes 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -greasePencils 1\n            -shadows 0\n            $editorName;\n        modelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Side View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"side\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n"
		+ "                -displayAppearance \"wireframe\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 1\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 8192\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -rendererName \"base_OpenGL_Renderer\" \n"
		+ "                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n"
		+ "                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -pluginShapes 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -greasePencils 1\n                -shadows 0\n                $editorName;\n            modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"side\" \n            -useInteractiveMode 0\n"
		+ "            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 1\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 8192\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n            -objectFilterShowInHUD 1\n"
		+ "            -isFiltered 0\n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n"
		+ "            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -pluginShapes 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -greasePencils 1\n            -shadows 0\n            $editorName;\n        modelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Front View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n"
		+ "                -displayAppearance \"smoothShaded\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 1\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 8192\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n"
		+ "                -rendererName \"base_OpenGL_Renderer\" \n                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 0\n                -controlVertices 1\n"
		+ "                -hulls 1\n                -grid 1\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -pluginShapes 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -greasePencils 1\n                -shadows 0\n                $editorName;\n            modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n"
		+ "            -camera \"persp\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"smoothShaded\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 1\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 8192\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n"
		+ "            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 0\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n"
		+ "            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -pluginShapes 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -greasePencils 1\n            -shadows 0\n            $editorName;\n        modelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Persp View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n"
		+ "                -displayLights \"default\" \n                -displayAppearance \"smoothShaded\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 1\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 1\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 8192\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n"
		+ "                -maxConstantTransparency 1\n                -rendererName \"base_OpenGL_Renderer\" \n                -objectFilterShowInHUD 1\n                -isFiltered 0\n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n"
		+ "                -cameras 0\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -imagePlane 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -pluginShapes 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -motionTrails 1\n                -clipGhosts 1\n                -greasePencils 1\n                -shadows 0\n                $editorName;\n            modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"persp\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"smoothShaded\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 1\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 1\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 8192\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n"
		+ "            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n            -objectFilterShowInHUD 1\n            -isFiltered 0\n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 0\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -imagePlane 1\n"
		+ "            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -pluginShapes 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -motionTrails 1\n            -clipGhosts 1\n            -greasePencils 1\n            -shadows 0\n            $editorName;\n        modelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"outlinerPanel\" (localizedPanelLabel(\"Outliner\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `outlinerPanel -unParent -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            outlinerEditor -e \n"
		+ "                -docTag \"isolOutln_fromSeln\" \n                -showShapes 1\n                -showReferenceNodes 1\n                -showReferenceMembers 1\n                -showAttributes 0\n                -showConnected 0\n                -showAnimCurvesOnly 0\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 1\n                -showPublishedAsConnected 0\n                -showContainerContents 1\n                -ignoreDagHierarchy 0\n                -expandConnections 0\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 0\n                -highlightActive 1\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 0\n"
		+ "                -setFilter \"defaultSetFilter\" \n                -showSetMembers 1\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\toutlinerPanel -edit -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        outlinerEditor -e \n"
		+ "            -docTag \"isolOutln_fromSeln\" \n            -showShapes 1\n            -showReferenceNodes 1\n            -showReferenceMembers 1\n            -showAttributes 0\n            -showConnected 0\n            -showAnimCurvesOnly 0\n            -showMuteInfo 0\n            -organizeByLayer 1\n            -showAnimLayerWeight 1\n            -autoExpandLayers 1\n            -autoExpand 0\n            -showDagOnly 0\n            -showAssets 1\n            -showContainedOnly 1\n            -showPublishedAsConnected 0\n            -showContainerContents 1\n            -ignoreDagHierarchy 0\n            -expandConnections 0\n            -showUpstreamCurves 1\n            -showUnitlessCurves 1\n            -showCompounds 1\n            -showLeafs 1\n            -showNumericAttrsOnly 0\n            -highlightActive 1\n            -autoSelectNewObjects 0\n            -doNotSelectNewObjects 0\n            -dropIsParent 1\n            -transmitFilters 0\n            -setFilter \"defaultSetFilter\" \n            -showSetMembers 1\n            -allowMultiSelection 1\n"
		+ "            -alwaysToggleSelect 0\n            -directSelect 0\n            -displayMode \"DAG\" \n            -expandObjects 0\n            -setsIgnoreFilters 1\n            -containersIgnoreFilters 0\n            -editAttrName 0\n            -showAttrValues 0\n            -highlightSecondary 0\n            -showUVAttrsOnly 0\n            -showTextureNodesOnly 0\n            -attrAlphaOrder \"default\" \n            -animLayerFilterOptions \"allAffecting\" \n            -sortOrder \"none\" \n            -longNames 0\n            -niceNames 1\n            -showNamespace 1\n            -showPinIcons 0\n            -mapMotionTrails 0\n            $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"graphEditor\" (localizedPanelLabel(\"Graph Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"graphEditor\" -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n"
		+ "            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n"
		+ "                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n"
		+ "                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                -classicMode 1\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n"
		+ "                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n"
		+ "                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n"
		+ "                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                -classicMode 1\n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dopeSheetPanel\" (localizedPanelLabel(\"Dope Sheet\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dopeSheetPanel\" -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n"
		+ "                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n"
		+ "                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n"
		+ "                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showReferenceNodes 0\n                -showReferenceMembers 0\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n"
		+ "                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n"
		+ "                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                -mapMotionTrails 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"clipEditorPanel\" (localizedPanelLabel(\"Trax Editor\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"clipEditorPanel\" -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n"
		+ "                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"sequenceEditorPanel\" (localizedPanelLabel(\"Camera Sequencer\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"sequenceEditorPanel\" -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n"
		+ "\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperGraphPanel\" (localizedPanelLabel(\"Hypergraph Hierarchy\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperGraphPanel\" -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n"
		+ "                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showConnectionFromSelected 0\n                -showConnectionToSelected 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n                -heatMapDisplay 0\n                -updateSelection 1\n                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n                -range 0 0 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n                $editorName;\n\t\t}\n\t} else {\n"
		+ "\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showConnectionFromSelected 0\n                -showConnectionToSelected 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n                -heatMapDisplay 0\n                -updateSelection 1\n"
		+ "                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n                -range 0 0 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperShadePanel\" (localizedPanelLabel(\"Hypershade\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperShadePanel\" -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"visorPanel\" (localizedPanelLabel(\"Visor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"visorPanel\" -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels `;\n"
		+ "\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"nodeEditorPanel\" (localizedPanelLabel(\"Node Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"nodeEditorPanel\" -l (localizedPanelLabel(\"Node Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"NodeEditorEd\");\n            nodeEditor -e \n                -allAttributes 0\n                -allNodes 0\n                -autoSizeNodes 1\n                -createNodeCommand \"nodeEdCreateNodeCommand\" \n                -defaultPinnedState 0\n                -ignoreAssets 1\n                -additiveGraphingMode 0\n                -settingsChangedCallback \"nodeEdSyncControls\" \n                -traversalDepthLimit -1\n                -keyPressCommand \"nodeEdKeyPressCommand\" \n                -keyReleaseCommand \"nodeEdKeyReleaseCommand\" \n"
		+ "                -nodeTitleMode \"name\" \n                -gridSnap 0\n                -gridVisibility 1\n                -popupMenuScript \"nodeEdBuildPanelMenus\" \n                -island 0\n                -showNamespace 1\n                -showShapes 1\n                -showSGShapes 0\n                -showTransforms 1\n                -syncedSelection 1\n                -extendToShapes 1\n                $editorName;;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Node Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"NodeEditorEd\");\n            nodeEditor -e \n                -allAttributes 0\n                -allNodes 0\n                -autoSizeNodes 1\n                -createNodeCommand \"nodeEdCreateNodeCommand\" \n                -defaultPinnedState 0\n                -ignoreAssets 1\n                -additiveGraphingMode 0\n                -settingsChangedCallback \"nodeEdSyncControls\" \n                -traversalDepthLimit -1\n                -keyPressCommand \"nodeEdKeyPressCommand\" \n"
		+ "                -keyReleaseCommand \"nodeEdKeyReleaseCommand\" \n                -nodeTitleMode \"name\" \n                -gridSnap 0\n                -gridVisibility 1\n                -popupMenuScript \"nodeEdBuildPanelMenus\" \n                -island 0\n                -showNamespace 1\n                -showShapes 1\n                -showSGShapes 0\n                -showTransforms 1\n                -syncedSelection 1\n                -extendToShapes 1\n                $editorName;;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"createNodePanel\" (localizedPanelLabel(\"Create Node\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"createNodePanel\" -l (localizedPanelLabel(\"Create Node\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Create Node\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n"
		+ "\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"polyTexturePlacementPanel\" (localizedPanelLabel(\"UV Texture Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"polyTexturePlacementPanel\" -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"renderWindowPanel\" (localizedPanelLabel(\"Render View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"renderWindowPanel\" -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n"
		+ "\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"blendShapePanel\" (localizedPanelLabel(\"Blend Shape\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\tblendShapePanel -unParent -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels ;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tblendShapePanel -edit -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynRelEdPanel\" (localizedPanelLabel(\"Dynamic Relationships\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynRelEdPanel\" -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n"
		+ "\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"relationshipPanel\" (localizedPanelLabel(\"Relationship Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"relationshipPanel\" -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"referenceEditorPanel\" (localizedPanelLabel(\"Reference Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"referenceEditorPanel\" -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"componentEditorPanel\" (localizedPanelLabel(\"Component Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"componentEditorPanel\" -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynPaintScriptedPanelType\" (localizedPanelLabel(\"Paint Effects\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynPaintScriptedPanelType\" -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"scriptEditorPanel\" (localizedPanelLabel(\"Script Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"scriptEditorPanel\" -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\tif ($useSceneConfig) {\n\t\tscriptedPanel -e -to $panelName;\n\t}\n\n\n\tif ($useSceneConfig) {\n        string $configName = `getPanel -cwl (localizedPanelLabel(\"Current Layout\"))`;\n        if (\"\" != $configName) {\n\t\t\tpanelConfiguration -edit -label (localizedPanelLabel(\"Current Layout\")) \n\t\t\t\t-defaultImage \"\"\n\t\t\t\t-image \"\"\n\t\t\t\t-sc false\n\t\t\t\t-configString \"global string $gMainPane; paneLayout -e -cn \\\"vertical2\\\" -ps 1 31 100 -ps 2 69 100 $gMainPane;\"\n"
		+ "\t\t\t\t-removeAllPanels\n\t\t\t\t-ap false\n\t\t\t\t\t(localizedPanelLabel(\"Outliner\")) \n\t\t\t\t\t\"outlinerPanel\"\n\t\t\t\t\t\"$panelName = `outlinerPanel -unParent -l (localizedPanelLabel(\\\"Outliner\\\")) -mbv $menusOkayInPanels `;\\n$editorName = $panelName;\\noutlinerEditor -e \\n    -docTag \\\"isolOutln_fromSeln\\\" \\n    -showShapes 1\\n    -showReferenceNodes 1\\n    -showReferenceMembers 1\\n    -showAttributes 0\\n    -showConnected 0\\n    -showAnimCurvesOnly 0\\n    -showMuteInfo 0\\n    -organizeByLayer 1\\n    -showAnimLayerWeight 1\\n    -autoExpandLayers 1\\n    -autoExpand 0\\n    -showDagOnly 0\\n    -showAssets 1\\n    -showContainedOnly 1\\n    -showPublishedAsConnected 0\\n    -showContainerContents 1\\n    -ignoreDagHierarchy 0\\n    -expandConnections 0\\n    -showUpstreamCurves 1\\n    -showUnitlessCurves 1\\n    -showCompounds 1\\n    -showLeafs 1\\n    -showNumericAttrsOnly 0\\n    -highlightActive 1\\n    -autoSelectNewObjects 0\\n    -doNotSelectNewObjects 0\\n    -dropIsParent 1\\n    -transmitFilters 0\\n    -setFilter \\\"defaultSetFilter\\\" \\n    -showSetMembers 1\\n    -allowMultiSelection 1\\n    -alwaysToggleSelect 0\\n    -directSelect 0\\n    -displayMode \\\"DAG\\\" \\n    -expandObjects 0\\n    -setsIgnoreFilters 1\\n    -containersIgnoreFilters 0\\n    -editAttrName 0\\n    -showAttrValues 0\\n    -highlightSecondary 0\\n    -showUVAttrsOnly 0\\n    -showTextureNodesOnly 0\\n    -attrAlphaOrder \\\"default\\\" \\n    -animLayerFilterOptions \\\"allAffecting\\\" \\n    -sortOrder \\\"none\\\" \\n    -longNames 0\\n    -niceNames 1\\n    -showNamespace 1\\n    -showPinIcons 0\\n    -mapMotionTrails 0\\n    $editorName\"\n"
		+ "\t\t\t\t\t\"outlinerPanel -edit -l (localizedPanelLabel(\\\"Outliner\\\")) -mbv $menusOkayInPanels  $panelName;\\n$editorName = $panelName;\\noutlinerEditor -e \\n    -docTag \\\"isolOutln_fromSeln\\\" \\n    -showShapes 1\\n    -showReferenceNodes 1\\n    -showReferenceMembers 1\\n    -showAttributes 0\\n    -showConnected 0\\n    -showAnimCurvesOnly 0\\n    -showMuteInfo 0\\n    -organizeByLayer 1\\n    -showAnimLayerWeight 1\\n    -autoExpandLayers 1\\n    -autoExpand 0\\n    -showDagOnly 0\\n    -showAssets 1\\n    -showContainedOnly 1\\n    -showPublishedAsConnected 0\\n    -showContainerContents 1\\n    -ignoreDagHierarchy 0\\n    -expandConnections 0\\n    -showUpstreamCurves 1\\n    -showUnitlessCurves 1\\n    -showCompounds 1\\n    -showLeafs 1\\n    -showNumericAttrsOnly 0\\n    -highlightActive 1\\n    -autoSelectNewObjects 0\\n    -doNotSelectNewObjects 0\\n    -dropIsParent 1\\n    -transmitFilters 0\\n    -setFilter \\\"defaultSetFilter\\\" \\n    -showSetMembers 1\\n    -allowMultiSelection 1\\n    -alwaysToggleSelect 0\\n    -directSelect 0\\n    -displayMode \\\"DAG\\\" \\n    -expandObjects 0\\n    -setsIgnoreFilters 1\\n    -containersIgnoreFilters 0\\n    -editAttrName 0\\n    -showAttrValues 0\\n    -highlightSecondary 0\\n    -showUVAttrsOnly 0\\n    -showTextureNodesOnly 0\\n    -attrAlphaOrder \\\"default\\\" \\n    -animLayerFilterOptions \\\"allAffecting\\\" \\n    -sortOrder \\\"none\\\" \\n    -longNames 0\\n    -niceNames 1\\n    -showNamespace 1\\n    -showPinIcons 0\\n    -mapMotionTrails 0\\n    $editorName\"\n"
		+ "\t\t\t\t-ap false\n\t\t\t\t\t(localizedPanelLabel(\"Persp View\")) \n\t\t\t\t\t\"modelPanel\"\n"
		+ "\t\t\t\t\t\"$panelName = `modelPanel -unParent -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels `;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"default\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 1\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 0\\n    -xray 0\\n    -jointXray 1\\n    -activeComponentsXray 0\\n    -displayTextures 0\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 8192\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -objectFilterShowInHUD 1\\n    -isFiltered 0\\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 0\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 1\\n    -imagePlane 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -pluginShapes 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -motionTrails 1\\n    -clipGhosts 1\\n    -greasePencils 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t\t\"modelPanel -edit -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels  $panelName;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"default\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 1\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 0\\n    -xray 0\\n    -jointXray 1\\n    -activeComponentsXray 0\\n    -displayTextures 0\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 8192\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -objectFilterShowInHUD 1\\n    -isFiltered 0\\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 0\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 1\\n    -imagePlane 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -pluginShapes 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -motionTrails 1\\n    -clipGhosts 1\\n    -greasePencils 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t$configName;\n\n            setNamedPanelLayout (localizedPanelLabel(\"Current Layout\"));\n        }\n\n        panelHistory -e -clear mainPanelHistory;\n        setFocus `paneLayout -q -p1 $gMainPane`;\n        sceneUIReplacement -deleteRemaining;\n        sceneUIReplacement -clear;\n\t}\n\n\ngrid -spacing 5 -size 12 -divisions 5 -displayAxes yes -displayGridLines yes -displayDivisionLines yes -displayPerspectiveLabels no -displayOrthographicLabels no -displayAxesBold yes -perspectiveLabelPosition axis -orthographicLabelPosition edge;\nviewManip -drawCompass 0 -compassAngle 0 -frontParameters \"\" -homeParameters \"\" -selectionLockParameters \"\";\n}\n");
	setAttr ".st" 3;
createNode reference -n "newWeRigRN";
	setAttr ".ed" -type "dataReferenceEdits" 
		"newWeRigRN"
		"newWeRigRN" 11
		5 4 "newWeRigRN" "newWeRig:m:lambert3SG.dagSetMembers" "newWeRigRN.placeHolderList[1]" 
		""
		5 4 "newWeRigRN" "newWeRig:m:lambert3SG.dagSetMembers" "newWeRigRN.placeHolderList[2]" 
		""
		5 4 "newWeRigRN" "newWeRig:m:lambert3SG.dagSetMembers" "newWeRigRN.placeHolderList[3]" 
		""
		5 4 "newWeRigRN" "newWeRig:m:lambert4SG.dagSetMembers" "newWeRigRN.placeHolderList[4]" 
		""
		5 4 "newWeRigRN" "newWeRig:m:lambert4SG.dagSetMembers" "newWeRigRN.placeHolderList[5]" 
		""
		5 3 "newWeRigRN" "newWeRig:m:layer1.drawInfo" "newWeRigRN.placeHolderList[6]" 
		""
		5 3 "newWeRigRN" "newWeRig:m:layer1.drawInfo" "newWeRigRN.placeHolderList[7]" 
		""
		5 3 "newWeRigRN" "newWeRig:m:layer1.drawInfo" "newWeRigRN.placeHolderList[8]" 
		""
		5 3 "newWeRigRN" "newWeRig:m:layer1.drawInfo" "newWeRigRN.placeHolderList[9]" 
		""
		5 3 "newWeRigRN" "newWeRig:m:layer1.drawInfo" "newWeRigRN.placeHolderList[10]" 
		""
		5 4 "newWeRigRN" "newWeRig:m:lambert8SG.dagSetMembers" "newWeRigRN.placeHolderList[11]" 
		"";
	setAttr ".ptag" -type "string" "";
lockNode -l 1 ;
createNode reference -n "sharedReferenceNode";
	setAttr ".ed" -type "dataReferenceEdits" 
		"sharedReferenceNode";
createNode skinCluster -n "skinCluster1";
	setAttr -s 164 ".wl";
	setAttr ".wl[0].w[1]"  1;
	setAttr ".wl[1].w[1]"  1;
	setAttr ".wl[2].w[1]"  1;
	setAttr ".wl[3].w[1]"  1;
	setAttr ".wl[4].w[1]"  1;
	setAttr ".wl[5].w[1]"  1;
	setAttr ".wl[6].w[1]"  1;
	setAttr ".wl[7].w[1]"  1;
	setAttr ".wl[8].w[2]"  1;
	setAttr ".wl[9].w[2]"  1;
	setAttr ".wl[10].w[2]"  1;
	setAttr ".wl[11].w[2]"  1;
	setAttr ".wl[12].w[2]"  1;
	setAttr ".wl[13].w[2]"  1;
	setAttr ".wl[14].w[2]"  1;
	setAttr ".wl[15].w[2]"  1;
	setAttr ".wl[16].w[2]"  1;
	setAttr ".wl[17].w[10]"  1;
	setAttr ".wl[18].w[10]"  1;
	setAttr ".wl[19].w[3]"  1;
	setAttr ".wl[20].w[3]"  1;
	setAttr ".wl[21].w[3]"  1;
	setAttr ".wl[22].w[3]"  1;
	setAttr ".wl[23].w[10]"  1;
	setAttr ".wl[24].w[10]"  1;
	setAttr ".wl[25].w[9]"  1;
	setAttr ".wl[26].w[9]"  1;
	setAttr ".wl[27].w[4]"  1;
	setAttr ".wl[28].w[4]"  1;
	setAttr ".wl[29].w[4]"  1;
	setAttr ".wl[30].w[4]"  1;
	setAttr ".wl[31].w[9]"  1;
	setAttr ".wl[32].w[9]"  1;
	setAttr ".wl[33].w[5]"  1;
	setAttr ".wl[34].w[5]"  1;
	setAttr ".wl[35].w[5]"  1;
	setAttr ".wl[36].w[5]"  1;
	setAttr ".wl[37].w[5]"  1;
	setAttr ".wl[38].w[5]"  1;
	setAttr ".wl[39].w[5]"  1;
	setAttr ".wl[40].w[5]"  1;
	setAttr ".wl[41].w[6]"  1;
	setAttr ".wl[42].w[6]"  1;
	setAttr ".wl[43].w[6]"  1;
	setAttr ".wl[44].w[6]"  1;
	setAttr ".wl[45].w[6]"  1;
	setAttr ".wl[46].w[6]"  1;
	setAttr ".wl[47].w[6]"  1;
	setAttr ".wl[48].w[6]"  1;
	setAttr ".wl[49].w[6]"  1;
	setAttr ".wl[50].w[6]"  1;
	setAttr ".wl[51].w[6]"  1;
	setAttr ".wl[52].w[6]"  1;
	setAttr ".wl[53].w[1]"  1;
	setAttr ".wl[54].w[1]"  1;
	setAttr ".wl[55].w[1]"  1;
	setAttr ".wl[56].w[1]"  1;
	setAttr ".wl[57].w[1]"  1;
	setAttr ".wl[58].w[1]"  1;
	setAttr ".wl[59].w[1]"  1;
	setAttr -s 2 ".wl[60].w";
	setAttr ".wl[60].w[1]" 1;
	setAttr ".wl[60].w[11]" -1.66702678200092e-19;
	setAttr ".wl[61].w[11]"  1;
	setAttr ".wl[62].w[11]"  1;
	setAttr ".wl[63].w[11]"  1;
	setAttr ".wl[64].w[11]"  1;
	setAttr ".wl[65].w[11]"  1;
	setAttr ".wl[66].w[11]"  1;
	setAttr ".wl[67].w[11]"  1;
	setAttr ".wl[68].w[11]"  1;
	setAttr ".wl[69].w[11]"  1;
	setAttr ".wl[70].w[19]"  1;
	setAttr ".wl[71].w[19]"  1;
	setAttr ".wl[72].w[12]"  1;
	setAttr ".wl[73].w[12]"  1;
	setAttr ".wl[74].w[12]"  1;
	setAttr ".wl[75].w[12]"  1;
	setAttr ".wl[76].w[19]"  1;
	setAttr ".wl[77].w[19]"  1;
	setAttr ".wl[78].w[18]"  1;
	setAttr ".wl[79].w[18]"  1;
	setAttr ".wl[80].w[13]"  1;
	setAttr ".wl[81].w[13]"  1;
	setAttr ".wl[82].w[13]"  1;
	setAttr ".wl[83].w[13]"  1;
	setAttr ".wl[84].w[18]"  1;
	setAttr ".wl[85].w[18]"  1;
	setAttr ".wl[86].w[14]"  1;
	setAttr ".wl[87].w[14]"  1;
	setAttr ".wl[88].w[14]"  1;
	setAttr ".wl[89].w[14]"  1;
	setAttr ".wl[90].w[14]"  1;
	setAttr ".wl[91].w[14]"  1;
	setAttr ".wl[92].w[14]"  1;
	setAttr ".wl[93].w[14]"  1;
	setAttr ".wl[94].w[15]"  1;
	setAttr ".wl[95].w[15]"  1;
	setAttr ".wl[96].w[15]"  1;
	setAttr ".wl[97].w[15]"  1;
	setAttr ".wl[98].w[15]"  1;
	setAttr ".wl[99].w[15]"  1;
	setAttr ".wl[100].w[15]"  1;
	setAttr ".wl[101].w[15]"  1;
	setAttr ".wl[102].w[15]"  1;
	setAttr ".wl[103].w[15]"  1;
	setAttr ".wl[104].w[15]"  1;
	setAttr ".wl[105].w[15]"  1;
	setAttr ".wl[106].w[1]"  1;
	setAttr ".wl[107].w[1]"  1;
	setAttr ".wl[108].w[1]"  1;
	setAttr ".wl[109].w[1]"  0.99999999999999989;
	setAttr ".wl[110].w[1]"  1;
	setAttr ".wl[111].w[1]"  1;
	setAttr ".wl[112].w[1]"  1;
	setAttr ".wl[113].w[1]"  1;
	setAttr ".wl[114].w[1]"  1;
	setAttr ".wl[115].w[1]"  1;
	setAttr ".wl[116].w[1]"  1;
	setAttr ".wl[117].w[1]"  1;
	setAttr ".wl[118].w[1]"  1;
	setAttr ".wl[119].w[1]"  1;
	setAttr ".wl[120].w[1]"  1;
	setAttr ".wl[121].w[1]"  1;
	setAttr ".wl[122].w[1]"  1;
	setAttr ".wl[123].w[1]"  1;
	setAttr ".wl[124].w[1]"  1;
	setAttr ".wl[125].w[1]"  1;
	setAttr ".wl[126].w[1]"  1;
	setAttr ".wl[127].w[1]"  1;
	setAttr ".wl[128].w[1]"  1;
	setAttr ".wl[129].w[1]"  1;
	setAttr ".wl[130].w[1]"  1;
	setAttr ".wl[131].w[1]"  1;
	setAttr ".wl[132].w[1]"  1;
	setAttr ".wl[133].w[1]"  1;
	setAttr ".wl[134].w[1]"  1.0000000000000036;
	setAttr ".wl[135].w[1]"  1;
	setAttr ".wl[136].w[1]"  1;
	setAttr ".wl[137].w[1]"  1;
	setAttr ".wl[138].w[1]"  1;
	setAttr ".wl[139].w[1]"  1;
	setAttr ".wl[140].w[1]"  1;
	setAttr ".wl[141].w[1]"  0.99999999999999822;
	setAttr ".wl[142].w[1]"  0.99999999999999645;
	setAttr ".wl[143].w[1]"  1;
	setAttr ".wl[144].w[1]"  1;
	setAttr ".wl[145].w[1]"  1;
	setAttr ".wl[146].w[1]"  1;
	setAttr ".wl[147].w[1]"  1;
	setAttr ".wl[148].w[1]"  1;
	setAttr ".wl[149].w[1]"  0.99999999999999289;
	setAttr ".wl[150].w[1]"  0.99999999999999822;
	setAttr ".wl[151].w[1]"  1;
	setAttr ".wl[152].w[1]"  1;
	setAttr ".wl[153].w[1]"  1;
	setAttr ".wl[154].w[1]"  1;
	setAttr ".wl[155].w[1]"  1;
	setAttr ".wl[156].w[1]"  1;
	setAttr ".wl[157].w[1]"  0.99999999999999867;
	setAttr ".wl[158].w[1]"  1;
	setAttr ".wl[159].w[1]"  1;
	setAttr ".wl[160].w[1]"  1;
	setAttr ".wl[161].w[1]"  1;
	setAttr ".wl[162].w[1]"  1;
	setAttr ".wl[163].w[1]"  1;
	setAttr -s 20 ".pm";
	setAttr ".pm[0]" -type "matrix" 1 -0 0 -0 -0 1 -0 0 0 -0 1 -0 -0 0 -0 1;
	setAttr ".pm[1]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434312 -0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 -0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513717e-16 -0
		 -1.5234390994588312 -0.0075380023631344533 -0.011047056754724368 1;
	setAttr ".pm[2]" -type "matrix" 0.99999999999999978 -1.3877787807814383e-17 -1.1166343593667534e-17 -0
		 4.2500725161432328e-17 0.99999999999999978 6.3524327163852098e-15 -0 8.9827088773356992e-17 -6.1384436723857849e-15 0.99999999999999978 -0
		 -0.32999132485697896 -1.5258905926984858 0.0002164817057766662 1;
	setAttr ".pm[3]" -type "matrix" 0.0022554669568005058 -0.00014975192740370347 -0.99999744521831979 -0
		 -0.99780055773920817 0.066249055981891875 -0.0022604328861923813 0 0.066249225234198628 0.99780310690830576 3.7198976537977642e-16 -0
		 1.5189069828979602 -0.10450545264067281 0.4460051559869983 1;
	setAttr ".pm[4]" -type "matrix" -0.013350758322473759 -0.00087893656994131937 -0.99991048835519303 0
		 -0.99775062933432623 -0.06568612019047021 0.013379659086803476 0 -0.065692000389475882 0.99783994762929218 -4.607859233063392e-17 -0
		 0.91090679617819426 0.047478561369656544 0.43039802063865851 1;
	setAttr ".pm[5]" -type "matrix" -0.00010105259733123789 -8.0327824646374257e-06 -0.99999999486192326 0
		 -0.99685547158864651 -0.079241141382645763 0.00010137136193972777 0 -0.079241141789792996 0.99685547671056585 1.7831229385829171e-16 -0
		 0.23309768322247243 0.015919367195595297 0.44253884140852251 1;
	setAttr ".pm[6]" -type "matrix" 4.1920172117417151e-16 -7.9196829490161326e-14 -0.99999999999999978 -0
		 -0.0013930756639796836 0.99999902966962639 -7.9188469711414624e-14 0 0.99999902966962595 0.0013930756639798018 2.3414250363503219e-16 -0
		 -0.29511717083444616 -0.0027245626056869401 0.44256252213785913 1;
	setAttr ".pm[7]" -type "matrix" 4.1920172117417151e-16 -7.9196829490161326e-14 -0.99999999999999978 -0
		 -0.0013930756639796836 0.99999902966962639 -7.9188469711414624e-14 0 0.99999902966962595 0.0013930756639798018 2.3414250363503219e-16 -0
		 -0.75782253467988758 -0.0026210844048262607 0.44256252213785935 1;
	setAttr ".pm[8]" -type "matrix" -0.00010105259733123789 -8.0327824646374257e-06 -0.99999999486192326 0
		 -0.99685547158864651 -0.079241141382645763 0.00010137136193972777 0 -0.079241141789792996 0.99685547671056585 1.7831229385829171e-16 -0
		 -0.022613594849879678 0.28567595778141802 0.44249755291311554 1;
	setAttr ".pm[9]" -type "matrix" -0.00010105259733123959 -8.0327824646377763e-06 -0.99999999486192326 0
		 -0.99685547158864651 -0.079241141382645749 0.00010137136193972955 0 -0.079241141789792982 0.99685547671056585 1.780158323267527e-16 -0
		 0.23309768322247243 0.015919367195595301 0.44253884140852262 1;
	setAttr ".pm[10]" -type "matrix" -0.013350758322473762 -0.00087893656994131948 -0.99991048835519292 0
		 -0.99775062933432623 -0.065686120190470182 0.01337965908680348 0 -0.065692000389475855 0.99783994762929218 -4.618701254788247e-17 -0
		 0.91090679617819414 0.047478561369656523 0.43039802063865851 1;
	setAttr ".pm[11]" -type "matrix" 1 -2.3505503099485874e-16 -6.5552635070966611e-17 -0
		 -1.214306433183534e-17 1 -2.1182833017794647e-14 0 -1.0901558966048448e-16 2.1284065035855579e-14 1 -0
		 0.32999132395708763 -1.5211048571888177 0.00021648170581840882 1;
	setAttr ".pm[12]" -type "matrix" 0.0022554669568001649 -0.00014975192802764813 -0.9999974452183199 -0
		 0.99780055773920817 -0.066249055981890237 0.0022604328862334726 0 -0.066249225234198433 -0.99780310690830598 6.2234934003133059e-13 0
		 -1.5189091902578504 0.1045055946743926 -0.44600563885033412 1;
	setAttr ".pm[13]" -type "matrix" -0.013350758322474083 -0.0008876891655064061 -0.99991048062322063 0
		 0.99775062933432612 0.065686003070725724 -0.013380234061804597 0 0.065692000389476493 -0.9978399475910642 8.7344713709250804e-06 -0
		 -0.91090687057801734 -0.047482318092089207 -0.43039808194537088 1;
	setAttr ".pm[14]" -type "matrix" -0.0001010525973299038 -8.0327833422454163e-06 -0.99999999486192326 0
		 0.99685547158864618 0.079241141382647332 -0.00010137136200784075 0 0.079241141789794634 -0.99685547671056596 8.7489846774648266e-13 -0
		 -0.23309737538908284 -0.01591934091267469 -0.44253931930197016 1;
	setAttr ".pm[15]" -type "matrix" 1.1655511722546312e-16 3.0579484246841578e-12 -0.99999999999999978 -0
		 0.0013930756639799148 -0.9999990296696265 -3.057854335788443e-12 0 -0.99999902966962639 -0.0013930756639800855 -4.1788507466263144e-15 0
		 0.29511749083816602 0.0027245636395816747 -0.44256299999999121 1;
	setAttr ".pm[16]" -type "matrix" 1.1655511722546312e-16 3.0579484246841578e-12 -0.99999999999999978 -0
		 0.0013930756639799148 -0.9999990296696265 -3.057854335788443e-12 0 -0.99999902966962639 -0.0013930756639800855 -4.1788507466263144e-15 0
		 0.75782208396660189 0.0026210860474732904 -0.44256299999999138 1;
	setAttr ".pm[17]" -type "matrix" -0.0001010525973299038 -8.0327833422454163e-06 -0.99999999486192326 0
		 0.99685547158864618 0.079241141382647332 -0.00010137136200784075 0 0.079241141789794634 -0.99685547671056596 8.7489846774648266e-13 -0
		 0.022613628888990985 -0.28567638627710257 -0.44249799266300555 1;
	setAttr ".pm[18]" -type "matrix" -0.00010105259732990037 -8.032783342244925e-06 -0.99999999486192326 0
		 0.99685547158864618 0.079241141382647332 -0.00010137136200783726 0 0.079241141789794634 -0.99685547671056596 8.7489831189242036e-13 -0
		 -0.23309737538908284 -0.01591934091267469 -0.44253931930197021 1;
	setAttr ".pm[19]" -type "matrix" -0.013350758322474083 -0.0008876891655064061 -0.99991048062322063 0
		 0.99775062933432612 0.065686003070725724 -0.013380234061804597 0 0.065692000389476493 -0.9978399475910642 8.7344713709250804e-06 -0
		 -0.91090687057801756 -0.047482318092089221 -0.43039808194537094 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 20 ".ma";
	setAttr -s 20 ".dpf[0:19]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4;
	setAttr -s 20 ".lw";
	setAttr -s 20 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 20 ".ifcl";
	setAttr -s 20 ".ifcl";
createNode groupId -n "groupId27";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts1";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:151]";
createNode tweak -n "tweak1";
	setAttr -s 34 ".vl[0].vt";
	setAttr ".vl[0].vt[0]" -type "float3" -0.027441699 -0.050008908 -5.3551048e-09 ;
	setAttr ".vl[0].vt[1]" -type "float3" -0.047827769 -0.04566608 -6.519258e-09 ;
	setAttr ".vl[0].vt[2]" -type "float3" -0.068213843 -0.041323245 -5.3551048e-09 ;
	setAttr ".vl[0].vt[3]" -type "float3" -0.076658122 -0.039524399 -1.1373733e-24 ;
	setAttr ".vl[0].vt[4]" -type "float3" -0.068213843 -0.041323245 5.3551048e-09 ;
	setAttr ".vl[0].vt[5]" -type "float3" -0.047827769 -0.04566608 6.519258e-09 ;
	setAttr ".vl[0].vt[6]" -type "float3" -0.027441699 -0.050008908 5.3551048e-09 ;
	setAttr ".vl[0].vt[7]" -type "float3" -0.018997457 -0.051807709 1.2924697e-25 ;
	setAttr ".vl[0].vt[8]" -type "float3" 0.021854676 -0.036333241 0 ;
	setAttr ".vl[0].vt[9]" -type "float3" 0.0014685004 -0.031990416 0 ;
	setAttr ".vl[0].vt[10]" -type "float3" -0.01891759 -0.027647607 0 ;
	setAttr ".vl[0].vt[11]" -type "float3" -0.027361818 -0.025848769 0 ;
	setAttr ".vl[0].vt[12]" -type "float3" -0.01891759 -0.027647607 0 ;
	setAttr ".vl[0].vt[13]" -type "float3" 0.0014685004 -0.031990416 0 ;
	setAttr ".vl[0].vt[14]" -type "float3" 0.021854676 -0.036333241 0 ;
	setAttr ".vl[0].vt[15]" -type "float3" 0.030298818 -0.038132094 0 ;
	setAttr ".vl[0].vt[16]" -type "float3" 0.0014685004 -0.031990416 0 ;
	setAttr ".vl[0].vt[53]" -type "float3" 0.027441699 -0.050008908 -5.3551048e-09 ;
	setAttr ".vl[0].vt[54]" -type "float3" 0.047827769 -0.04566608 -6.519258e-09 ;
	setAttr ".vl[0].vt[55]" -type "float3" 0.068213843 -0.041323245 -5.3551048e-09 ;
	setAttr ".vl[0].vt[56]" -type "float3" 0.076658122 -0.039524399 8.2718061e-25 ;
	setAttr ".vl[0].vt[57]" -type "float3" 0.068213843 -0.041323245 5.3551048e-09 ;
	setAttr ".vl[0].vt[58]" -type "float3" 0.047827769 -0.04566608 6.519258e-09 ;
	setAttr ".vl[0].vt[59]" -type "float3" 0.027441699 -0.050008908 5.3551048e-09 ;
	setAttr ".vl[0].vt[60]" -type "float3" 0.018997457 -0.051807709 6.7208425e-25 ;
	setAttr ".vl[0].vt[61]" -type "float3" -0.021854676 -0.036333241 0 ;
	setAttr ".vl[0].vt[62]" -type "float3" -0.0014685004 -0.031990416 0 ;
	setAttr ".vl[0].vt[63]" -type "float3" 0.01891759 -0.027647607 0 ;
	setAttr ".vl[0].vt[64]" -type "float3" 0.027361818 -0.025848769 0 ;
	setAttr ".vl[0].vt[65]" -type "float3" 0.01891759 -0.027647607 0 ;
	setAttr ".vl[0].vt[66]" -type "float3" -0.0014685004 -0.031990416 0 ;
	setAttr ".vl[0].vt[67]" -type "float3" -0.021854676 -0.036333241 0 ;
	setAttr ".vl[0].vt[68]" -type "float3" -0.030298818 -0.038132094 0 ;
	setAttr ".vl[0].vt[69]" -type "float3" -0.0014685004 -0.031990416 0 ;
createNode objectSet -n "skinCluster1Set";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "skinCluster1GroupId";
	setAttr ".ihi" 0;
createNode groupParts -n "skinCluster1GroupParts";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode objectSet -n "tweakSet1";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "groupId29";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts3";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode dagPose -n "bindPose1";
	setAttr -s 20 ".wm";
	setAttr -s 20 ".xm";
	setAttr ".xm[0]" -type "matrix" "xform" 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
		 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[1]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.2481371638932422e-16
		 1.5234977869939721 -0.00020427181308234474 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.49690720307978381 0.50307378338314013 0.50054198510985581 0.4994574267565603 1 1
		 1 yes;
	setAttr ".xm[2]" -type "matrix" "xform" 1 1 1 0 0 0 0 -2.2204460492503131e-16
		 -1.2210050380173469e-05 0.33000000000000002 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.49690720307978542 -0.50307378338313857 -0.50054198510985737 0.49945742675655874 1
		 1 1 yes;
	setAttr ".xm[3]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.11257119728088066 -0.002392805704513723
		 0.0038659362197039368 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.4837371215275178 -0.51575032453336478 -0.48257006669014246 0.5168424622016573 1
		 1 1 yes;
	setAttr ".xm[4]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.61650609214605046 -0.032099740750755765
		 0.0013953196822854563 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -2.183552354234836e-06 -0.0078201665479101339 -0.065968598135859799 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[5]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.67177144734718297 0.034342525608332723
		 -0.0089996487164910044 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0004811380204642594 0.0066218381349152098 -0.0067922801903750069 0.99995489133047188 1
		 1 1 yes;
	setAttr ".xm[6]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.20736109674421185 0.30992515875121385
		 -2.3443938912293127e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 3.4364933632698284e-05 3.7257074528373049e-05 0.73411591966989509 0.67902416298551993 1
		 1 1 yes;
	setAttr ".xm[7]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.46270536384544153 -0.00010347820086067938
		 -2.2204460492503131e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[8]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.25571127807235211 -0.26975659058582269
		 4.1288495406972717e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[9]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.67177144734718264 0.034342525608332716
		 -0.0089996487164911154 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.00048113802046425918 0.0066218381349152089 -0.0067922801903750017 0.99995489133047188 1
		 1 1 yes;
	setAttr ".xm[10]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.61650609214605034 -0.032099740750755765
		 0.0013953196822854563 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -2.183552354234836e-06 -0.0078201665479101356 -0.065968598135859785 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[11]" -type "matrix" "xform" 1 1 1 0 0 0 0 0 -1.2210050380172922e-05
		 -0.33000000000000002 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.49690720307977859 -0.50307378338314546 -0.50054198510985048 0.49945742675656557 1
		 1 1 yes;
	setAttr ".xm[12]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.11257167604291224
		 0.0023951428111825823 0.0038659317057861669 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.51684246220151298 -0.48257006668997454 0.51575032453352199 0.48373712152767206 1
		 1 1 yes;
	setAttr ".xm[13]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.61650823461620474
		 0.032099862860789433 -0.0013953245328743868 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		2.1834690312030934e-06 -0.0078204552719308255 -0.065968563908784389 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[14]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.67177182354995368
		 -0.034342457793123879 0.0089999543620681854 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00048551451215832713 0.0066218084071478093 -0.0067923091720432363 0.999954889215103 1
		 1 1 yes;
	setAttr ".xm[15]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.20736076292011277
		 -0.30992545141615924 2.3443907801345976e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		3.4364932269262498e-05 3.7257073698436208e-05 0.73411591966989564 0.67902416298551938 1
		 1 1 yes;
	setAttr ".xm[16]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.46270459312843604
		 0.00010347759210838471 1.6653345369377348e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[17]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.25571100427807386
		 0.26975704536442785 -4.1326638964611639e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[18]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.67177182354995368
		 -0.034342457793123879 0.008999954362068241 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00048551451215832735 0.006621808407147811 -0.0067923091720432354 0.999954889215103 1
		 1 1 yes;
	setAttr ".xm[19]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.61650823461620463
		 0.032099862860789419 -0.0013953245328744424 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		2.1834690312030934e-06 -0.0078204552719308255 -0.065968563908784389 0.99779105480575681 1
		 1 1 yes;
	setAttr -s 20 ".m";
	setAttr -s 20 ".p";
	setAttr ".bp" yes;
createNode skinCluster -n "skinCluster2";
	setAttr -s 358 ".wl";
	setAttr ".wl[0].w[5]"  1;
	setAttr ".wl[1].w[5]"  1;
	setAttr ".wl[2].w[5]"  1;
	setAttr ".wl[3].w[5]"  1;
	setAttr ".wl[4].w[5]"  1;
	setAttr ".wl[5].w[5]"  1;
	setAttr ".wl[6].w[5]"  1;
	setAttr ".wl[7].w[5]"  1;
	setAttr ".wl[8].w[5]"  1;
	setAttr ".wl[9].w[5]"  1;
	setAttr ".wl[10].w[5]"  1;
	setAttr ".wl[11].w[5]"  1;
	setAttr ".wl[12].w[5]"  1;
	setAttr ".wl[13].w[5]"  1;
	setAttr ".wl[14].w[5]"  1;
	setAttr ".wl[15].w[5]"  1;
	setAttr ".wl[16].w[5]"  1;
	setAttr ".wl[17].w[5]"  1;
	setAttr ".wl[18].w[5]"  1;
	setAttr ".wl[19].w[5]"  1;
	setAttr ".wl[20].w[5]"  1;
	setAttr ".wl[21].w[5]"  1;
	setAttr ".wl[22].w[5]"  1;
	setAttr ".wl[23].w[5]"  1;
	setAttr ".wl[24].w[5]"  1;
	setAttr ".wl[25].w[5]"  1;
	setAttr ".wl[26].w[5]"  1;
	setAttr ".wl[27].w[5]"  1;
	setAttr ".wl[28].w[5]"  1;
	setAttr ".wl[29].w[5]"  1;
	setAttr ".wl[30].w[5]"  1;
	setAttr ".wl[31].w[5]"  1;
	setAttr ".wl[32].w[5]"  1;
	setAttr ".wl[33].w[5]"  1;
	setAttr ".wl[34].w[5]"  1;
	setAttr ".wl[35].w[5]"  1;
	setAttr ".wl[36].w[5]"  1;
	setAttr ".wl[37].w[5]"  1;
	setAttr ".wl[38].w[5]"  1;
	setAttr ".wl[39].w[5]"  1;
	setAttr ".wl[40].w[5]"  1;
	setAttr ".wl[41].w[5]"  1;
	setAttr ".wl[42].w[5]"  1;
	setAttr ".wl[43].w[5]"  1;
	setAttr ".wl[44].w[5]"  1;
	setAttr ".wl[45].w[5]"  1;
	setAttr ".wl[46].w[5]"  1;
	setAttr ".wl[47].w[5]"  1;
	setAttr ".wl[48].w[5]"  1;
	setAttr ".wl[49].w[5]"  1;
	setAttr ".wl[50].w[5]"  1;
	setAttr ".wl[51].w[5]"  1;
	setAttr ".wl[52].w[5]"  1;
	setAttr ".wl[53].w[5]"  1;
	setAttr ".wl[54].w[5]"  1;
	setAttr ".wl[55].w[5]"  1;
	setAttr ".wl[56].w[5]"  1;
	setAttr ".wl[57].w[5]"  1;
	setAttr ".wl[58].w[1]"  1;
	setAttr ".wl[59].w[1]"  1;
	setAttr ".wl[60].w[1]"  1;
	setAttr ".wl[61].w[1]"  1;
	setAttr ".wl[62].w[1]"  1;
	setAttr ".wl[63].w[1]"  1;
	setAttr ".wl[64].w[1]"  1;
	setAttr ".wl[65].w[1]"  1;
	setAttr ".wl[66].w[1]"  1;
	setAttr ".wl[67].w[1]"  1;
	setAttr ".wl[68].w[1]"  1;
	setAttr ".wl[69].w[1]"  1;
	setAttr ".wl[70].w[1]"  1;
	setAttr ".wl[71].w[1]"  1;
	setAttr ".wl[72].w[1]"  1;
	setAttr ".wl[73].w[1]"  1;
	setAttr ".wl[74].w[1]"  1;
	setAttr ".wl[75].w[1]"  1;
	setAttr ".wl[76].w[1]"  1;
	setAttr ".wl[77].w[1]"  1;
	setAttr ".wl[78].w[1]"  1;
	setAttr ".wl[79].w[1]"  1;
	setAttr ".wl[80].w[1]"  1;
	setAttr ".wl[81].w[1]"  1;
	setAttr ".wl[82].w[1]"  1;
	setAttr ".wl[83].w[1]"  1;
	setAttr ".wl[84].w[1]"  1;
	setAttr ".wl[85].w[1]"  1;
	setAttr ".wl[86].w[1]"  1;
	setAttr ".wl[87].w[1]"  1;
	setAttr ".wl[88].w[1]"  1;
	setAttr ".wl[89].w[1]"  1;
	setAttr ".wl[90].w[1]"  1;
	setAttr ".wl[91].w[1]"  1;
	setAttr ".wl[92].w[1]"  1;
	setAttr ".wl[93].w[1]"  1;
	setAttr ".wl[94].w[1]"  1;
	setAttr ".wl[95].w[1]"  1;
	setAttr ".wl[96].w[1]"  1;
	setAttr ".wl[97].w[1]"  1;
	setAttr ".wl[98].w[1]"  1;
	setAttr ".wl[99].w[1]"  1;
	setAttr ".wl[100].w[1]"  1;
	setAttr ".wl[101].w[1]"  1;
	setAttr ".wl[102].w[1]"  1;
	setAttr ".wl[103].w[1]"  1;
	setAttr ".wl[104].w[1]"  1;
	setAttr ".wl[105].w[1]"  1;
	setAttr ".wl[106].w[1]"  1;
	setAttr ".wl[107].w[1]"  1;
	setAttr ".wl[108].w[1]"  1;
	setAttr ".wl[109].w[1]"  1;
	setAttr ".wl[110].w[1]"  1;
	setAttr ".wl[111].w[1]"  1;
	setAttr ".wl[112].w[1]"  1;
	setAttr ".wl[113].w[1]"  1;
	setAttr ".wl[114].w[1]"  1;
	setAttr ".wl[115].w[1]"  1;
	setAttr ".wl[116].w[2]"  1;
	setAttr ".wl[117].w[2]"  1;
	setAttr ".wl[118].w[2]"  1;
	setAttr ".wl[119].w[2]"  1;
	setAttr ".wl[120].w[2]"  1;
	setAttr ".wl[121].w[2]"  1;
	setAttr ".wl[122].w[2]"  1;
	setAttr ".wl[123].w[2]"  1;
	setAttr ".wl[124].w[2]"  1;
	setAttr ".wl[125].w[2]"  1;
	setAttr ".wl[126].w[2]"  1;
	setAttr ".wl[127].w[2]"  1;
	setAttr ".wl[128].w[2]"  1;
	setAttr ".wl[129].w[2]"  1;
	setAttr ".wl[130].w[2]"  1;
	setAttr ".wl[131].w[2]"  1;
	setAttr ".wl[132].w[2]"  1;
	setAttr ".wl[133].w[2]"  1;
	setAttr ".wl[134].w[2]"  1;
	setAttr ".wl[135].w[2]"  1;
	setAttr ".wl[136].w[2]"  1;
	setAttr ".wl[137].w[2]"  1;
	setAttr ".wl[138].w[2]"  1;
	setAttr ".wl[139].w[2]"  1;
	setAttr ".wl[140].w[2]"  1;
	setAttr ".wl[141].w[2]"  1;
	setAttr ".wl[142].w[2]"  1;
	setAttr ".wl[143].w[2]"  1;
	setAttr ".wl[144].w[2]"  1;
	setAttr ".wl[145].w[2]"  1;
	setAttr ".wl[146].w[2]"  1;
	setAttr ".wl[147].w[2]"  1;
	setAttr ".wl[148].w[2]"  1;
	setAttr ".wl[149].w[2]"  1;
	setAttr ".wl[150].w[2]"  1;
	setAttr ".wl[151].w[2]"  1;
	setAttr ".wl[152].w[2]"  1;
	setAttr ".wl[153].w[2]"  1;
	setAttr ".wl[154].w[2]"  1;
	setAttr ".wl[155].w[2]"  1;
	setAttr ".wl[156].w[2]"  1;
	setAttr ".wl[157].w[2]"  1;
	setAttr ".wl[158].w[2]"  1;
	setAttr ".wl[159].w[2]"  1;
	setAttr ".wl[160].w[2]"  1;
	setAttr ".wl[161].w[2]"  1;
	setAttr ".wl[162].w[2]"  1;
	setAttr ".wl[163].w[2]"  1;
	setAttr ".wl[164].w[2]"  1;
	setAttr ".wl[165].w[2]"  1;
	setAttr ".wl[166].w[2]"  1;
	setAttr ".wl[167].w[2]"  1;
	setAttr ".wl[168].w[2]"  1;
	setAttr ".wl[169].w[2]"  1;
	setAttr ".wl[170].w[2]"  1;
	setAttr ".wl[171].w[2]"  1;
	setAttr ".wl[172].w[2]"  1;
	setAttr ".wl[173].w[2]"  1;
	setAttr ".wl[174].w[3]"  1;
	setAttr ".wl[175].w[3]"  1;
	setAttr ".wl[176].w[3]"  1;
	setAttr ".wl[177].w[3]"  1;
	setAttr ".wl[178].w[3]"  1;
	setAttr ".wl[179].w[3]"  1;
	setAttr ".wl[180].w[3]"  1;
	setAttr ".wl[181].w[3]"  1;
	setAttr ".wl[182].w[3]"  1;
	setAttr ".wl[183].w[3]"  1;
	setAttr ".wl[184].w[3]"  1;
	setAttr ".wl[185].w[3]"  1;
	setAttr ".wl[186].w[3]"  1;
	setAttr ".wl[187].w[3]"  1;
	setAttr ".wl[188].w[3]"  1;
	setAttr ".wl[189].w[3]"  1;
	setAttr ".wl[190].w[3]"  1;
	setAttr ".wl[191].w[3]"  1;
	setAttr ".wl[192].w[3]"  1;
	setAttr ".wl[193].w[3]"  1;
	setAttr ".wl[194].w[3]"  1;
	setAttr ".wl[195].w[3]"  1;
	setAttr ".wl[196].w[3]"  1;
	setAttr ".wl[197].w[3]"  1;
	setAttr ".wl[198].w[3]"  1;
	setAttr ".wl[199].w[3]"  1;
	setAttr ".wl[200].w[3]"  1;
	setAttr ".wl[201].w[3]"  1;
	setAttr ".wl[202].w[3]"  1;
	setAttr ".wl[203].w[3]"  1;
	setAttr ".wl[204].w[3]"  1;
	setAttr ".wl[205].w[3]"  1;
	setAttr ".wl[206].w[3]"  1;
	setAttr ".wl[207].w[3]"  1;
	setAttr ".wl[208].w[3]"  1;
	setAttr ".wl[209].w[3]"  1;
	setAttr ".wl[210].w[3]"  1;
	setAttr ".wl[211].w[7]"  1;
	setAttr ".wl[212].w[7]"  1;
	setAttr ".wl[213].w[7]"  1;
	setAttr ".wl[214].w[7]"  1;
	setAttr ".wl[215].w[7]"  1;
	setAttr ".wl[216].w[7]"  1;
	setAttr ".wl[217].w[7]"  1;
	setAttr ".wl[218].w[7]"  1;
	setAttr ".wl[219].w[7]"  1;
	setAttr ".wl[220].w[7]"  1;
	setAttr ".wl[221].w[7]"  1;
	setAttr ".wl[222].w[7]"  1;
	setAttr ".wl[223].w[7]"  1;
	setAttr ".wl[224].w[7]"  1;
	setAttr ".wl[225].w[7]"  1;
	setAttr ".wl[226].w[7]"  1;
	setAttr ".wl[227].w[7]"  1;
	setAttr ".wl[228].w[7]"  1;
	setAttr ".wl[229].w[7]"  1;
	setAttr ".wl[230].w[7]"  1;
	setAttr ".wl[231].w[7]"  1;
	setAttr ".wl[232].w[7]"  1;
	setAttr ".wl[233].w[7]"  1;
	setAttr ".wl[234].w[7]"  1;
	setAttr ".wl[235].w[7]"  1;
	setAttr ".wl[236].w[7]"  1;
	setAttr ".wl[237].w[7]"  1;
	setAttr ".wl[238].w[7]"  1;
	setAttr ".wl[239].w[7]"  1;
	setAttr ".wl[240].w[7]"  1;
	setAttr ".wl[241].w[7]"  1;
	setAttr ".wl[242].w[7]"  1;
	setAttr ".wl[243].w[7]"  1;
	setAttr ".wl[244].w[7]"  1;
	setAttr ".wl[245].w[7]"  1;
	setAttr ".wl[246].w[7]"  1;
	setAttr ".wl[247].w[7]"  1;
	setAttr ".wl[248].w[6]"  1;
	setAttr ".wl[249].w[6]"  1;
	setAttr ".wl[250].w[6]"  1;
	setAttr ".wl[251].w[6]"  1;
	setAttr ".wl[252].w[6]"  1;
	setAttr ".wl[253].w[6]"  1;
	setAttr ".wl[254].w[6]"  1;
	setAttr ".wl[255].w[6]"  1;
	setAttr ".wl[256].w[6]"  1;
	setAttr ".wl[257].w[6]"  1;
	setAttr ".wl[258].w[6]"  1;
	setAttr ".wl[259].w[6]"  1;
	setAttr ".wl[260].w[6]"  1;
	setAttr ".wl[261].w[6]"  1;
	setAttr ".wl[262].w[6]"  1;
	setAttr ".wl[263].w[6]"  1;
	setAttr ".wl[264].w[6]"  1;
	setAttr ".wl[265].w[6]"  1;
	setAttr ".wl[266].w[6]"  1;
	setAttr ".wl[267].w[6]"  1;
	setAttr ".wl[268].w[6]"  1;
	setAttr ".wl[269].w[6]"  1;
	setAttr ".wl[270].w[6]"  1;
	setAttr ".wl[271].w[6]"  1;
	setAttr ".wl[272].w[6]"  1;
	setAttr ".wl[273].w[6]"  1;
	setAttr ".wl[274].w[6]"  1;
	setAttr ".wl[275].w[6]"  1;
	setAttr ".wl[276].w[6]"  1;
	setAttr ".wl[277].w[6]"  1;
	setAttr ".wl[278].w[6]"  1;
	setAttr ".wl[279].w[6]"  1;
	setAttr ".wl[280].w[6]"  1;
	setAttr ".wl[281].w[6]"  1;
	setAttr ".wl[282].w[6]"  1;
	setAttr ".wl[283].w[6]"  1;
	setAttr ".wl[284].w[6]"  1;
	setAttr ".wl[285].w[6]"  1;
	setAttr ".wl[286].w[6]"  1;
	setAttr ".wl[287].w[6]"  1;
	setAttr ".wl[288].w[6]"  1;
	setAttr ".wl[289].w[6]"  1;
	setAttr ".wl[290].w[6]"  1;
	setAttr ".wl[291].w[6]"  1;
	setAttr ".wl[292].w[6]"  1;
	setAttr ".wl[293].w[6]"  1;
	setAttr ".wl[294].w[6]"  1;
	setAttr ".wl[295].w[6]"  1;
	setAttr ".wl[296].w[6]"  1;
	setAttr ".wl[297].w[6]"  1;
	setAttr ".wl[298].w[6]"  1;
	setAttr ".wl[299].w[6]"  1;
	setAttr ".wl[300].w[6]"  1;
	setAttr ".wl[301].w[6]"  1;
	setAttr ".wl[302].w[6]"  1;
	setAttr ".wl[303].w[6]"  1;
	setAttr ".wl[304].w[6]"  1;
	setAttr ".wl[305].w[6]"  1;
	setAttr ".wl[306].w[8]"  1;
	setAttr ".wl[307].w[8]"  1;
	setAttr ".wl[308].w[8]"  1;
	setAttr ".wl[309].w[8]"  1;
	setAttr ".wl[310].w[8]"  1;
	setAttr ".wl[311].w[8]"  1;
	setAttr ".wl[312].w[8]"  1;
	setAttr ".wl[313].w[8]"  1;
	setAttr ".wl[314].w[8]"  1;
	setAttr ".wl[315].w[8]"  1;
	setAttr ".wl[316].w[8]"  1;
	setAttr ".wl[317].w[8]"  1;
	setAttr ".wl[318].w[8]"  1;
	setAttr ".wl[319].w[8]"  1;
	setAttr ".wl[320].w[8]"  1;
	setAttr ".wl[321].w[8]"  1;
	setAttr ".wl[322].w[8]"  1;
	setAttr ".wl[323].w[8]"  1;
	setAttr ".wl[324].w[4]"  1;
	setAttr ".wl[325].w[4]"  1;
	setAttr ".wl[326].w[4]"  1;
	setAttr ".wl[327].w[4]"  1;
	setAttr ".wl[328].w[4]"  1;
	setAttr ".wl[329].w[4]"  1;
	setAttr ".wl[330].w[4]"  1;
	setAttr ".wl[331].w[4]"  1;
	setAttr ".wl[332].w[4]"  1;
	setAttr ".wl[333].w[4]"  1;
	setAttr ".wl[334].w[4]"  1;
	setAttr ".wl[335].w[4]"  1;
	setAttr ".wl[336].w[4]"  1;
	setAttr ".wl[337].w[4]"  1;
	setAttr ".wl[338].w[4]"  1;
	setAttr ".wl[339].w[4]"  1;
	setAttr ".wl[340].w[4]"  1;
	setAttr ".wl[341].w[4]"  1;
	setAttr ".wl[342].w[0]"  1;
	setAttr ".wl[343].w[0]"  1;
	setAttr ".wl[344].w[0]"  1;
	setAttr ".wl[345].w[0]"  1;
	setAttr ".wl[346].w[0]"  1;
	setAttr ".wl[347].w[0]"  1;
	setAttr ".wl[348].w[0]"  1;
	setAttr ".wl[349].w[0]"  1;
	setAttr ".wl[350].w[0]"  1;
	setAttr ".wl[351].w[0]"  1;
	setAttr ".wl[352].w[0]"  1;
	setAttr ".wl[353].w[0]"  1;
	setAttr ".wl[354].w[0]"  1;
	setAttr ".wl[355].w[0]"  1;
	setAttr ".wl[356].w[0]"  1;
	setAttr ".wl[357].w[0]"  1;
	setAttr -s 9 ".pm";
	setAttr ".pm[0]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434312 -0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 -0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513717e-16 -0
		 -1.5234390994588312 -0.0075380023631344533 -0.011047056754724368 1;
	setAttr ".pm[1]" -type "matrix" 0.0022554669568005058 -0.00014975192740370347 -0.99999744521831979 -0
		 -0.99780055773920817 0.066249055981891875 -0.0022604328861923813 0 0.066249225234198628 0.99780310690830576 3.7198976537977642e-16 -0
		 1.5189069828979602 -0.10450545264067281 0.4460051559869983 1;
	setAttr ".pm[2]" -type "matrix" -0.013350758322473759 -0.00087893656994131937 -0.99991048835519303 0
		 -0.99775062933432623 -0.06568612019047021 0.013379659086803476 0 -0.065692000389475882 0.99783994762929218 -4.607859233063392e-17 -0
		 0.91090679617819426 0.047478561369656544 0.43039802063865851 1;
	setAttr ".pm[3]" -type "matrix" -0.00010105259733123789 -8.0327824646374257e-06 -0.99999999486192326 0
		 -0.99685547158864651 -0.079241141382645763 0.00010137136193972777 0 -0.079241141789792996 0.99685547671056585 1.7831229385829171e-16 -0
		 0.23309768322247243 0.015919367195595297 0.44253884140852251 1;
	setAttr ".pm[4]" -type "matrix" 4.1920172117417151e-16 -7.9196829490161326e-14 -0.99999999999999978 -0
		 -0.0013930756639796836 0.99999902966962639 -7.9188469711414624e-14 0 0.99999902966962595 0.0013930756639798018 2.3414250363503219e-16 -0
		 -0.29511717083444616 -0.0027245626056869401 0.44256252213785913 1;
	setAttr ".pm[5]" -type "matrix" 0.0022554669568001649 -0.00014975192802764813 -0.9999974452183199 -0
		 0.99780055773920817 -0.066249055981890237 0.0022604328862334726 0 -0.066249225234198433 -0.99780310690830598 6.2234934003133059e-13 0
		 -1.5189091902578504 0.1045055946743926 -0.44600563885033412 1;
	setAttr ".pm[6]" -type "matrix" -0.013350758322474083 -0.0008876891655064061 -0.99991048062322063 0
		 0.99775062933432612 0.065686003070725724 -0.013380234061804597 0 0.065692000389476493 -0.9978399475910642 8.7344713709250804e-06 -0
		 -0.91090687057801734 -0.047482318092089207 -0.43039808194537088 1;
	setAttr ".pm[7]" -type "matrix" -0.0001010525973299038 -8.0327833422454163e-06 -0.99999999486192326 0
		 0.99685547158864618 0.079241141382647332 -0.00010137136200784075 0 0.079241141789794634 -0.99685547671056596 8.7489846774648266e-13 -0
		 -0.23309737538908284 -0.01591934091267469 -0.44253931930197016 1;
	setAttr ".pm[8]" -type "matrix" 1.1655511722546312e-16 3.0579484246841578e-12 -0.99999999999999978 -0
		 0.0013930756639799148 -0.9999990296696265 -3.057854335788443e-12 0 -0.99999902966962639 -0.0013930756639800855 -4.1788507466263144e-15 0
		 0.29511749083816602 0.0027245636395816747 -0.44256299999999121 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 9 ".ma";
	setAttr -s 9 ".dpf[0:8]"  4 4 4 4 4 4 4 4 4;
	setAttr -s 9 ".lw";
	setAttr -s 9 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 9 ".ifcl";
	setAttr -s 9 ".ifcl";
createNode groupId -n "groupId30";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts4";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:381]";
createNode tweak -n "tweak2";
createNode objectSet -n "skinCluster2Set";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "skinCluster2GroupId";
	setAttr ".ihi" 0;
createNode groupParts -n "skinCluster2GroupParts";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode objectSet -n "tweakSet2";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "groupId32";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts6";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
select -ne :time1;
	setAttr -av -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -k on ".o" 1;
	setAttr ".unw" 1;
select -ne :renderPartition;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -s 2 ".st";
	setAttr -cb on ".an";
	setAttr -cb on ".pt";
select -ne :initialShadingGroup;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -av -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -s 2 ".dsm";
	setAttr -k on ".mwc";
	setAttr -cb on ".an";
	setAttr -cb on ".il";
	setAttr -cb on ".vo";
	setAttr -cb on ".eo";
	setAttr -cb on ".fo";
	setAttr -cb on ".epo";
	setAttr ".ro" yes;
	setAttr -s 2 ".gn";
	setAttr -cb on ".mimt";
	setAttr -cb on ".miop";
	setAttr -cb on ".mise";
	setAttr -cb on ".mism";
	setAttr -cb on ".mice";
	setAttr -av -cb on ".micc";
	setAttr -cb on ".mica";
	setAttr -cb on ".micw";
	setAttr -cb on ".mirw";
select -ne :initialParticleSE;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -av -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -k on ".mwc";
	setAttr -cb on ".an";
	setAttr -cb on ".il";
	setAttr -cb on ".vo";
	setAttr -cb on ".eo";
	setAttr -cb on ".fo";
	setAttr -cb on ".epo";
	setAttr ".ro" yes;
	setAttr -cb on ".mimt";
	setAttr -cb on ".miop";
	setAttr -cb on ".mise";
	setAttr -cb on ".mism";
	setAttr -cb on ".mice";
	setAttr -av -cb on ".micc";
	setAttr -cb on ".mica";
	setAttr -cb on ".micw";
	setAttr -cb on ".mirw";
select -ne :defaultShaderList1;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -s 2 ".s";
select -ne :postProcessList1;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -s 2 ".p";
select -ne :defaultRenderingList1;
select -ne :renderGlobalsList1;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
select -ne :defaultResolution;
	setAttr ".pa" 1;
select -ne :defaultLightSet;
	setAttr -k on ".cch";
	setAttr -k on ".ihi";
	setAttr -k on ".nds";
	setAttr -k on ".bnm";
	setAttr -k on ".mwc";
	setAttr -k on ".an";
	setAttr -k on ".il";
	setAttr -k on ".vo";
	setAttr -k on ".eo";
	setAttr -k on ".fo";
	setAttr -k on ".epo";
	setAttr ".ro" yes;
select -ne :defaultObjectSet;
	setAttr ".ro" yes;
select -ne :hardwareRenderGlobals;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr ".ctrs" 256;
	setAttr ".btrs" 512;
	setAttr -k off ".fbfm";
	setAttr -k off -cb on ".ehql";
	setAttr -k off -cb on ".eams";
	setAttr -k off -cb on ".eeaa";
	setAttr -k off -cb on ".engm";
	setAttr -k off -cb on ".mes";
	setAttr -k off -cb on ".emb";
	setAttr -av -k off -cb on ".mbbf";
	setAttr -k off -cb on ".mbs";
	setAttr -k off -cb on ".trm";
	setAttr -k off -cb on ".tshc";
	setAttr -k off ".enpt";
	setAttr -k off -cb on ".clmt";
	setAttr -k off -cb on ".tcov";
	setAttr -k off -cb on ".lith";
	setAttr -k off -cb on ".sobc";
	setAttr -k off -cb on ".cuth";
	setAttr -k off -cb on ".hgcd";
	setAttr -k off -cb on ".hgci";
	setAttr -k off -cb on ".mgcs";
	setAttr -k off -cb on ".twa";
	setAttr -k off -cb on ".twz";
	setAttr -k on ".hwcc";
	setAttr -k on ".hwdp";
	setAttr -k on ".hwql";
	setAttr -k on ".hwfr";
select -ne :hardwareRenderingGlobals;
	setAttr ".otfna" -type "stringArray" 18 "NURBS Curves" "NURBS Surfaces" "Polygons" "Subdiv Surfaces" "Particles" "Fluids" "Image Planes" "UI:" "Lights" "Cameras" "Locators" "Joints" "IK Handles" "Deformers" "Motion Trails" "Components" "Misc. UI" "Ornaments"  ;
	setAttr ".otfva" -type "Int32Array" 18 0 1 1 1 1 1
		 1 0 0 0 0 0 0 0 0 0 0 0 ;
select -ne :defaultHardwareRenderGlobals;
	setAttr -k on ".cch";
	setAttr -cb on ".ihi";
	setAttr -k on ".nds";
	setAttr -cb on ".bnm";
	setAttr -k on ".rp";
	setAttr -k on ".cai";
	setAttr -k on ".coi";
	setAttr -cb on ".bc";
	setAttr -av -k on ".bcb";
	setAttr -av -k on ".bcg";
	setAttr -av -k on ".bcr";
	setAttr -k on ".ei";
	setAttr -k on ".ex";
	setAttr -av -k on ".es";
	setAttr -av -k on ".ef";
	setAttr -av -k on ".bf";
	setAttr -k on ".fii";
	setAttr -av -k on ".sf";
	setAttr -k on ".gr";
	setAttr -k on ".li";
	setAttr -k on ".ls";
	setAttr -k on ".mb";
	setAttr -k on ".ti";
	setAttr -k on ".txt";
	setAttr -k on ".mpr";
	setAttr -k on ".wzd";
	setAttr ".fn" -type "string" "im";
	setAttr -k on ".if";
	setAttr ".res" -type "string" "ntsc_4d 646 485 1.333";
	setAttr -k on ".as";
	setAttr -k on ".ds";
	setAttr -k on ".lm";
	setAttr -k on ".fir";
	setAttr -k on ".aap";
	setAttr -k on ".gh";
	setAttr -cb on ".sd";
select -ne :ikSystem;
	setAttr -s 4 ".sol";
connectAttr "cRoot.s" "cSpine0.is";
connectAttr "cSpine0.s" "lHipRot.is";
connectAttr "lHipRot.s" "lHip.is";
connectAttr "lHip.s" "lKnee.is";
connectAttr "lKnee.s" "lAnkle.is";
connectAttr "lAnkle.s" "lBall.is";
connectAttr "lBall.s" "lToe.is";
connectAttr "lAnkle.s" "lHeel.is";
connectAttr "lKnee.s" "lAnkleStretch.is";
connectAttr "lHip.s" "lKneeStretch.is";
connectAttr "cSpine0.s" "rHipRot.is";
connectAttr "rHipRot.s" "rHip.is";
connectAttr "rHip.s" "rKnee.is";
connectAttr "rKnee.s" "rAnkle.is";
connectAttr "rAnkle.s" "rBall.is";
connectAttr "rBall.s" "rToe.is";
connectAttr "rAnkle.s" "rHeel.is";
connectAttr "rKnee.s" "rAnkleStretch.is";
connectAttr "rHip.s" "rKneeStretch.is";
connectAttr "skinCluster1.og[0]" "cBodyShape.i";
connectAttr "groupId27.id" "cBodyShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cBodyShape.iog.og[0].gco";
connectAttr "skinCluster1GroupId.id" "cBodyShape.iog.og[3].gid";
connectAttr "skinCluster1Set.mwc" "cBodyShape.iog.og[3].gco";
connectAttr "groupId29.id" "cBodyShape.iog.og[4].gid";
connectAttr "tweakSet1.mwc" "cBodyShape.iog.og[4].gco";
connectAttr "tweak1.vl[0].vt[0]" "cBodyShape.twl";
connectAttr "skinCluster2.og[0]" "cJointsShape.i";
connectAttr "groupId30.id" "cJointsShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cJointsShape.iog.og[0].gco";
connectAttr "skinCluster2GroupId.id" "cJointsShape.iog.og[3].gid";
connectAttr "skinCluster2Set.mwc" "cJointsShape.iog.og[3].gco";
connectAttr "groupId32.id" "cJointsShape.iog.og[4].gid";
connectAttr "tweakSet2.mwc" "cJointsShape.iog.og[4].gco";
connectAttr "tweak2.vl[0].vt[0]" "cJointsShape.twl";
connectAttr ":mentalrayGlobals.msg" ":mentalrayItemsList.glb";
connectAttr ":miDefaultOptions.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayItemsList.fb" -na;
connectAttr ":miDefaultOptions.msg" ":mentalrayGlobals.opt";
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayGlobals.fb";
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr "sharedReferenceNode.sr" "newWeRigRN.sr";
connectAttr "skinCluster1GroupParts.og" "skinCluster1.ip[0].ig";
connectAttr "skinCluster1GroupId.id" "skinCluster1.ip[0].gi";
connectAttr "bindPose1.msg" "skinCluster1.bp";
connectAttr "cRoot.wm" "skinCluster1.ma[0]";
connectAttr "cSpine0.wm" "skinCluster1.ma[1]";
connectAttr "lHipRot.wm" "skinCluster1.ma[2]";
connectAttr "lHip.wm" "skinCluster1.ma[3]";
connectAttr "lKnee.wm" "skinCluster1.ma[4]";
connectAttr "lAnkle.wm" "skinCluster1.ma[5]";
connectAttr "lBall.wm" "skinCluster1.ma[6]";
connectAttr "lToe.wm" "skinCluster1.ma[7]";
connectAttr "lHeel.wm" "skinCluster1.ma[8]";
connectAttr "lAnkleStretch.wm" "skinCluster1.ma[9]";
connectAttr "lKneeStretch.wm" "skinCluster1.ma[10]";
connectAttr "rHipRot.wm" "skinCluster1.ma[11]";
connectAttr "rHip.wm" "skinCluster1.ma[12]";
connectAttr "rKnee.wm" "skinCluster1.ma[13]";
connectAttr "rAnkle.wm" "skinCluster1.ma[14]";
connectAttr "rBall.wm" "skinCluster1.ma[15]";
connectAttr "rToe.wm" "skinCluster1.ma[16]";
connectAttr "rHeel.wm" "skinCluster1.ma[17]";
connectAttr "rAnkleStretch.wm" "skinCluster1.ma[18]";
connectAttr "rKneeStretch.wm" "skinCluster1.ma[19]";
connectAttr "cRoot.liw" "skinCluster1.lw[0]";
connectAttr "cSpine0.liw" "skinCluster1.lw[1]";
connectAttr "lHipRot.liw" "skinCluster1.lw[2]";
connectAttr "lHip.liw" "skinCluster1.lw[3]";
connectAttr "lKnee.liw" "skinCluster1.lw[4]";
connectAttr "lAnkle.liw" "skinCluster1.lw[5]";
connectAttr "lBall.liw" "skinCluster1.lw[6]";
connectAttr "lToe.liw" "skinCluster1.lw[7]";
connectAttr "lHeel.liw" "skinCluster1.lw[8]";
connectAttr "lAnkleStretch.liw" "skinCluster1.lw[9]";
connectAttr "lKneeStretch.liw" "skinCluster1.lw[10]";
connectAttr "rHipRot.liw" "skinCluster1.lw[11]";
connectAttr "rHip.liw" "skinCluster1.lw[12]";
connectAttr "rKnee.liw" "skinCluster1.lw[13]";
connectAttr "rAnkle.liw" "skinCluster1.lw[14]";
connectAttr "rBall.liw" "skinCluster1.lw[15]";
connectAttr "rToe.liw" "skinCluster1.lw[16]";
connectAttr "rHeel.liw" "skinCluster1.lw[17]";
connectAttr "rAnkleStretch.liw" "skinCluster1.lw[18]";
connectAttr "rKneeStretch.liw" "skinCluster1.lw[19]";
connectAttr "cRoot.obcc" "skinCluster1.ifcl[0]";
connectAttr "cSpine0.obcc" "skinCluster1.ifcl[1]";
connectAttr "lHipRot.obcc" "skinCluster1.ifcl[2]";
connectAttr "lHip.obcc" "skinCluster1.ifcl[3]";
connectAttr "lKnee.obcc" "skinCluster1.ifcl[4]";
connectAttr "lAnkle.obcc" "skinCluster1.ifcl[5]";
connectAttr "lBall.obcc" "skinCluster1.ifcl[6]";
connectAttr "lToe.obcc" "skinCluster1.ifcl[7]";
connectAttr "lHeel.obcc" "skinCluster1.ifcl[8]";
connectAttr "lAnkleStretch.obcc" "skinCluster1.ifcl[9]";
connectAttr "lKneeStretch.obcc" "skinCluster1.ifcl[10]";
connectAttr "rHipRot.obcc" "skinCluster1.ifcl[11]";
connectAttr "rHip.obcc" "skinCluster1.ifcl[12]";
connectAttr "rKnee.obcc" "skinCluster1.ifcl[13]";
connectAttr "rAnkle.obcc" "skinCluster1.ifcl[14]";
connectAttr "rBall.obcc" "skinCluster1.ifcl[15]";
connectAttr "rToe.obcc" "skinCluster1.ifcl[16]";
connectAttr "rHeel.obcc" "skinCluster1.ifcl[17]";
connectAttr "rAnkleStretch.obcc" "skinCluster1.ifcl[18]";
connectAttr "rKneeStretch.obcc" "skinCluster1.ifcl[19]";
connectAttr "lHipRot.msg" "skinCluster1.ptt";
connectAttr "cBodyShapeOrig.w" "groupParts1.ig";
connectAttr "groupId27.id" "groupParts1.gi";
connectAttr "groupParts3.og" "tweak1.ip[0].ig";
connectAttr "groupId29.id" "tweak1.ip[0].gi";
connectAttr "skinCluster1GroupId.msg" "skinCluster1Set.gn" -na;
connectAttr "cBodyShape.iog.og[3]" "skinCluster1Set.dsm" -na;
connectAttr "skinCluster1.msg" "skinCluster1Set.ub[0]";
connectAttr "tweak1.og[0]" "skinCluster1GroupParts.ig";
connectAttr "skinCluster1GroupId.id" "skinCluster1GroupParts.gi";
connectAttr "groupId29.msg" "tweakSet1.gn" -na;
connectAttr "cBodyShape.iog.og[4]" "tweakSet1.dsm" -na;
connectAttr "tweak1.msg" "tweakSet1.ub[0]";
connectAttr "groupParts1.og" "groupParts3.ig";
connectAttr "groupId29.id" "groupParts3.gi";
connectAttr "cRoot.msg" "bindPose1.m[0]";
connectAttr "cSpine0.msg" "bindPose1.m[1]";
connectAttr "lHipRot.msg" "bindPose1.m[2]";
connectAttr "lHip.msg" "bindPose1.m[3]";
connectAttr "lKnee.msg" "bindPose1.m[4]";
connectAttr "lAnkle.msg" "bindPose1.m[5]";
connectAttr "lBall.msg" "bindPose1.m[6]";
connectAttr "lToe.msg" "bindPose1.m[7]";
connectAttr "lHeel.msg" "bindPose1.m[8]";
connectAttr "lAnkleStretch.msg" "bindPose1.m[9]";
connectAttr "lKneeStretch.msg" "bindPose1.m[10]";
connectAttr "rHipRot.msg" "bindPose1.m[11]";
connectAttr "rHip.msg" "bindPose1.m[12]";
connectAttr "rKnee.msg" "bindPose1.m[13]";
connectAttr "rAnkle.msg" "bindPose1.m[14]";
connectAttr "rBall.msg" "bindPose1.m[15]";
connectAttr "rToe.msg" "bindPose1.m[16]";
connectAttr "rHeel.msg" "bindPose1.m[17]";
connectAttr "rAnkleStretch.msg" "bindPose1.m[18]";
connectAttr "rKneeStretch.msg" "bindPose1.m[19]";
connectAttr "bindPose1.w" "bindPose1.p[0]";
connectAttr "bindPose1.m[0]" "bindPose1.p[1]";
connectAttr "bindPose1.m[1]" "bindPose1.p[2]";
connectAttr "bindPose1.m[2]" "bindPose1.p[3]";
connectAttr "bindPose1.m[3]" "bindPose1.p[4]";
connectAttr "bindPose1.m[4]" "bindPose1.p[5]";
connectAttr "bindPose1.m[5]" "bindPose1.p[6]";
connectAttr "bindPose1.m[6]" "bindPose1.p[7]";
connectAttr "bindPose1.m[5]" "bindPose1.p[8]";
connectAttr "bindPose1.m[4]" "bindPose1.p[9]";
connectAttr "bindPose1.m[3]" "bindPose1.p[10]";
connectAttr "bindPose1.m[1]" "bindPose1.p[11]";
connectAttr "bindPose1.m[11]" "bindPose1.p[12]";
connectAttr "bindPose1.m[12]" "bindPose1.p[13]";
connectAttr "bindPose1.m[13]" "bindPose1.p[14]";
connectAttr "bindPose1.m[14]" "bindPose1.p[15]";
connectAttr "bindPose1.m[15]" "bindPose1.p[16]";
connectAttr "bindPose1.m[14]" "bindPose1.p[17]";
connectAttr "bindPose1.m[13]" "bindPose1.p[18]";
connectAttr "bindPose1.m[12]" "bindPose1.p[19]";
connectAttr "cRoot.bps" "bindPose1.wm[0]";
connectAttr "cSpine0.bps" "bindPose1.wm[1]";
connectAttr "lHipRot.bps" "bindPose1.wm[2]";
connectAttr "lHip.bps" "bindPose1.wm[3]";
connectAttr "lKnee.bps" "bindPose1.wm[4]";
connectAttr "lAnkle.bps" "bindPose1.wm[5]";
connectAttr "lBall.bps" "bindPose1.wm[6]";
connectAttr "lToe.bps" "bindPose1.wm[7]";
connectAttr "lHeel.bps" "bindPose1.wm[8]";
connectAttr "lAnkleStretch.bps" "bindPose1.wm[9]";
connectAttr "lKneeStretch.bps" "bindPose1.wm[10]";
connectAttr "rHipRot.bps" "bindPose1.wm[11]";
connectAttr "rHip.bps" "bindPose1.wm[12]";
connectAttr "rKnee.bps" "bindPose1.wm[13]";
connectAttr "rAnkle.bps" "bindPose1.wm[14]";
connectAttr "rBall.bps" "bindPose1.wm[15]";
connectAttr "rToe.bps" "bindPose1.wm[16]";
connectAttr "rHeel.bps" "bindPose1.wm[17]";
connectAttr "rAnkleStretch.bps" "bindPose1.wm[18]";
connectAttr "rKneeStretch.bps" "bindPose1.wm[19]";
connectAttr "skinCluster2GroupParts.og" "skinCluster2.ip[0].ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2.ip[0].gi";
connectAttr "cSpine0.wm" "skinCluster2.ma[0]";
connectAttr "lHip.wm" "skinCluster2.ma[1]";
connectAttr "lKnee.wm" "skinCluster2.ma[2]";
connectAttr "lAnkle.wm" "skinCluster2.ma[3]";
connectAttr "lBall.wm" "skinCluster2.ma[4]";
connectAttr "rHip.wm" "skinCluster2.ma[5]";
connectAttr "rKnee.wm" "skinCluster2.ma[6]";
connectAttr "rAnkle.wm" "skinCluster2.ma[7]";
connectAttr "rBall.wm" "skinCluster2.ma[8]";
connectAttr "cSpine0.liw" "skinCluster2.lw[0]";
connectAttr "lHip.liw" "skinCluster2.lw[1]";
connectAttr "lKnee.liw" "skinCluster2.lw[2]";
connectAttr "lAnkle.liw" "skinCluster2.lw[3]";
connectAttr "lBall.liw" "skinCluster2.lw[4]";
connectAttr "rHip.liw" "skinCluster2.lw[5]";
connectAttr "rKnee.liw" "skinCluster2.lw[6]";
connectAttr "rAnkle.liw" "skinCluster2.lw[7]";
connectAttr "rBall.liw" "skinCluster2.lw[8]";
connectAttr "cSpine0.obcc" "skinCluster2.ifcl[0]";
connectAttr "lHip.obcc" "skinCluster2.ifcl[1]";
connectAttr "lKnee.obcc" "skinCluster2.ifcl[2]";
connectAttr "lAnkle.obcc" "skinCluster2.ifcl[3]";
connectAttr "lBall.obcc" "skinCluster2.ifcl[4]";
connectAttr "rHip.obcc" "skinCluster2.ifcl[5]";
connectAttr "rKnee.obcc" "skinCluster2.ifcl[6]";
connectAttr "rAnkle.obcc" "skinCluster2.ifcl[7]";
connectAttr "rBall.obcc" "skinCluster2.ifcl[8]";
connectAttr "bindPose1.msg" "skinCluster2.bp";
connectAttr "lBall.msg" "skinCluster2.ptt";
connectAttr "cJointsShapeOrig.w" "groupParts4.ig";
connectAttr "groupId30.id" "groupParts4.gi";
connectAttr "groupParts6.og" "tweak2.ip[0].ig";
connectAttr "groupId32.id" "tweak2.ip[0].gi";
connectAttr "skinCluster2GroupId.msg" "skinCluster2Set.gn" -na;
connectAttr "cJointsShape.iog.og[3]" "skinCluster2Set.dsm" -na;
connectAttr "skinCluster2.msg" "skinCluster2Set.ub[0]";
connectAttr "tweak2.og[0]" "skinCluster2GroupParts.ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2GroupParts.gi";
connectAttr "groupId32.msg" "tweakSet2.gn" -na;
connectAttr "cJointsShape.iog.og[4]" "tweakSet2.dsm" -na;
connectAttr "tweak2.msg" "tweakSet2.ub[0]";
connectAttr "groupParts4.og" "groupParts6.ig";
connectAttr "groupId32.id" "groupParts6.gi";
connectAttr "cBodyShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "cJointsShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "groupId27.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId30.msg" ":initialShadingGroup.gn" -na;
connectAttr "defaultRenderLayer.msg" ":defaultRenderingList1.r" -na;
// End of legs_005.ma

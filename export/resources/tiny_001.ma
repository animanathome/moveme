//Maya ASCII 2014 scene
//Name: baby_001.ma
//Last modified: Sat, Apr 18, 2015 02:04:19 PM
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
currentUnit -l centimeter -a degree -t film;
fileInfo "application" "maya";
fileInfo "product" "Maya 2014";
fileInfo "version" "2014 x64";
fileInfo "cutIdentifier" "201303010035-864206";
fileInfo "osv" "Mac OS X 10.9.2";
createNode transform -s -n "persp";
	setAttr ".v" no;
	setAttr ".t" -type "double3" -0.94780361950136549 2.804715300999824 5.1534907596669743 ;
	setAttr ".r" -type "double3" -14.138352729708215 -1092.1999999998197 -2.0337777271007735e-16 ;
createNode camera -s -n "perspShape" -p "persp";
	setAttr -k off ".v" no;
	setAttr ".fl" 34.999999999999986;
	setAttr ".coi" 5.4484019102159928;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".tp" -type "double3" 0.10077767788690876 2.0668476340224418 0.39713830930384214 ;
	setAttr ".hc" -type "string" "viewSet -p %camera";
createNode transform -s -n "top";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0.14348102770665008 100.10956579656784 0.39587282927381862 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 0.25311728609940826;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0.15622269018496118 0.41690047109204115 100.10501080256752 ;
createNode camera -s -n "frontShape" -p "front";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 0.73219843225540004;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 100.13348563602059 0.98955376581783283 0.010585572841314801 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 1.0164196373278045;
	setAttr ".imn" -type "string" "side";
	setAttr ".den" -type "string" "side_depth";
	setAttr ".man" -type "string" "side_mask";
	setAttr ".hc" -type "string" "viewSet -s %camera";
	setAttr ".o" yes;
createNode joint -n "cRoot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".bps" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
createNode joint -n "cSpine0" -p "cRoot";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 5.6410046325731392e-19 0.94504479510672268 -0.0036341718130823448 ;
	setAttr ".jo" -type "double3" 90.000000000000014 0.29118063624749313 90.415461893171141 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861395e-05 0.0050819053394226543 0.99998708635670197 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 5.6410046325731392e-19 0.94504479510672268 -0.0036341718130823448 1;
createNode joint -n "cSpine1" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.1165147635344719 0 0 ;
	setAttr ".jo" -type "double3" 0.0034573632410439654 0.71368671121623395 0.56874765833788066 ;
	setAttr ".bps" -type "matrix" -0.01970600017729103 0.99979408310123485 0.0048440636632738907 0
		 9.5458239375119261e-05 -0.0048431230108667671 0.99998826745478675 0 0.99980581336814467 0.019706231381541709 2.3024755733993518e-16 0
		 -0.00084485097043311295 1.061554990915313 -0.0042263043789828644 1;
createNode joint -n "cSpine2" -p "cSpine1";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.10291232484710595 0 0 ;
	setAttr ".jo" -type "double3" -0.0084278546868556022 -2.2220503106433847 -0.060179007623162618 ;
	setAttr ".bps" -type "matrix" 0.019073572066682084 0.99981089608638363 0.0037908990437051184 0
		 -7.2306505664505801e-05 -0.003790209404347471 0.99999281451640465 0 0.99981808026279773 -0.019073709120506058 -3.7466644221953962e-16 0
		 -0.0028728412621156149 1.1644461243756417 -0.0037277905256879597 1;
createNode joint -n "cSpine3" -p "cSpine2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 0.10195366183573112 0 0 ;
	setAttr ".jo" -type "double3" -0.0049723992362982819 0.83199655114538429 -0.5596372815551971 ;
	setAttr ".bps" -type "matrix" 0.004553430293710135 0.99997177681231619 -0.005975939372186722 0
		 2.7211509261437902e-05 0.0059758774179038765 0.99998214391489004 0 0.99998963271230668 -0.0045535116016008261 2.3322423164662358e-16 0
		 -0.00092822074562966261 1.2663805063749121 -0.0033412944865326517 1;
createNode joint -n "cSpine4" -p "cSpine3";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.16881615042049539 0 0 ;
	setAttr ".jo" -type "double3" -0.010706970671685146 0.26067810595998864 -2.0096280039796857 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784593 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695876 0 1 -6.366435156834882e-16 1.2983973963471569e-16 0
		 -0.00015952817223745198 1.43519189226551 -0.0043501295664914851 1;
createNode joint -n "cNeck0" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.17168863729657752 -0.073285758117813973 -6.0761454609371247e-19 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223732887 1.6037283437944077 -0.084620018227845123 1;
createNode joint -n "cNeck1" -p "cNeck0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" 0.1094413077728555 -0.0013809600434635783 7.781433747416495e-17 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223717882 1.7130207810854172 -0.090491138109541569 1;
createNode joint -n "cNeck2" -p "cNeck1";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" 0.11850458016498652 0.0001945647220840199 7.6782533866115555e-17 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223702405 1.8314335129091028 -0.0951600049487972 1;
createNode joint -n "cHead" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.99123249492694077 0.074472153439193459 -1.5398925679418689e-16 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223653646 2.8248871902293629 -0.061429430453074627 1;
createNode joint -n "lEye" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.21531786830826069 0.49411095691703888 0.093022344079802172 ;
	setAttr ".mnrl" -type "double3" -360 -360 -360 ;
	setAttr ".mxrl" -type "double3" 360 360 360 ;
	setAttr ".jo" -type "double3" -98.822527523776884 -89.999999999999957 0 ;
	setAttr ".bps" -type "matrix" 1 2.5306476941939339e-16 1.4884432969888889e-16 0 -1.0402329335074276e-16 0.98104140478118462 -0.1937982510368968 0
		 -2.6664697697346883e-16 0.19379825103689668 0.98104140478118462 0 0.092862815907565219 2.0668476340224413 0.38969833904325962 1;
	setAttr ".radi" 0.5;
createNode joint -n "cJaw" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.23035623408174985 0.0034007930172860828 -2.9661214069869355e-17 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223690256 2.061735249599066 -0.10121558510757073 1;
createNode joint -n "cJawEnd" -p "cJaw";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.39586755352061181 0.47335246364639078 7.2080678094996973e-16 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.00015952817223651209 1.6856269355307076 0.38798397627730974 1;
createNode joint -n "rEye" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.21532024620650181 0.49411071525592121 -0.093022371827763045 ;
	setAttr ".mnrl" -type "double3" -360 -360 -360 ;
	setAttr ".mxrl" -type "double3" 360 360 360 ;
	setAttr ".jo" -type "double3" 81.177472476223159 -89.999999999999986 0 ;
	setAttr ".bps" -type "matrix" 1 -3.0157909467689936e-16 1.7162535518701921e-16 0
		 -2.8455476526806212e-16 -0.98104140478118484 0.19379825103689613 0 4.4602372048437965e-17 -0.19379825103689599 -0.98104140478118484 0
		 -0.093181899999999998 2.0668500000000005 0.38969799999999999 1;
	setAttr ".radi" 0.5;
createNode joint -n "lCollar" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.048975319911061063 -0.039734026455491442 0.073324475024895974 ;
	setAttr ".jo" -type "double3" 11.707064156044298 -80.78700229215832 -99.503754253447013 ;
	setAttr ".bps" -type "matrix" 0.98709997017857776 -0.032893359049031533 -0.15668974377387382 0
		 0.032486613313186516 0.99945886705280274 -0.0051568425386078155 0 0.15677457966421154 -4.8803905831092058e-14 0.98763441169853405 0
		 0.073164946852658563 1.4824953227096054 -0.046060563356817089 1;
createNode joint -n "lShoulder" -p "lCollar";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" 0.19968381272885133 0.029404003637012881 -0.0028985034267901321 ;
	setAttr ".jo" -type "double3" -0.038899389379432055 -6.5010260523104453 2.2285570297021402 ;
	setAttr -av ".is" -type "double3" 1 1 1 ;
	setAttr -av ".is";
	setAttr ".bps" -type "matrix" 0.99901628689829325 0.0059577708215473564 -0.043942729532707794 0
		 -0.0059520157187940639 0.99998225232592908 0.00026180535767975381 0 0.043943509427787145 5.8600975398770132e-13 0.9990340174284208 0
		 0.27077365728207731 1.5053151435231007 -0.080363262352575793 1;
createNode joint -n "lElbow" -p "lShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" 0.33963150475980658 0.007952716547475187 0.0088076300635101905 ;
	setAttr ".jo" -type "double3" -0.10548194300424157 -5.2243339017109802 0.81692167319377684 ;
	setAttr ".bps" -type "matrix" 0.99868185990108194 0.020130427732428631 0.047215554469104755 0
		 -0.020107967638530649 0.99979736240865813 -0.00095066194745420992 0 -0.047225124054504464 5.2064315713836421e-13 0.99888427140386837 0
		 0.6104107655617339 1.5152911655974961 -0.086486393596850369 1;
createNode joint -n "lWrist" -p "lElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.27941830693809711 -0.0069999698768281934 0.0003956391340616763 ;
	setAttr ".bps" -type "matrix" 0.99868185990108194 0.020130427732428631 0.047215554469104755 0
		 -0.020107967638530649 0.99979736240865813 -0.00095066194745420992 0 -0.047225124054504464 5.2064315713836421e-13 0.99888427140386837 0
		 0.88958283108565117 1.5139174242126383 -0.07289165099278834 1;
createNode joint -n "lFinger" -p "lWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.30165291031078684 -0.00057403285758778381 -0.01175145383504126 ;
	setAttr ".jo" -type "double3" -89.910845943635024 -11.970343427321264 0.67310328531145336 ;
	setAttr ".bps" -type "matrix" 0.96687236460492176 0.03118115345887745 0.25334870481662447 0
		 0.25321706230697177 0.008166124471759937 -0.96737502229886996 0 -0.032232746080877797 0.99948039004278932 -5.3133799443605412e-13 0
		 1.1914046270987066 1.5194159097869682 -0.070386738266002502 1;
createNode joint -n "lFingerEnd" -p "lFinger";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.26610698604005584 0.08126661397603642 -0.03862918493506301 ;
	setAttr ".jo" -type "double3" 89.903670782738502 -0.51951572713818261 11.688400557995552 ;
	setAttr ".bps" -type "matrix" 0.99778886398022915 0.041250044739540026 0.052113498501155549 0
		 -0.041193897272659777 0.99914885468031556 -0.0021515153970186954 0 -0.052157892447198671 5.1496133746109507e-14 0.99863885076411218 0
		 1.4705193358931139 1.4897679530143575 -0.081584170517300159 1;
createNode joint -n "lThumb" -p "lWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.1168465904586284 -0.03645460442714403 0.15180300812604808 ;
	setAttr ".jo" -type "double3" 66.532329537002056 -51.860721594731913 -18.568170690591256 ;
	setAttr ".bps" -type "matrix" 0.55146716803094253 -0.18483141226769623 0.81346254469585821 0
		 -0.59531909799528659 0.59589931064290169 0.53897976134303305 0 -0.58436216009082087 -0.78149943097512464 0.21858523563943216 0
		 0.99983951348347122 1.4798223787038158 0.084293618737681611 1;
createNode joint -n "lThumbEnd" -p "lThumb";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.18090088247848685 0.1179794903148664 0.053519272836031771 ;
	setAttr ".jo" -type "double3" 9.2593275210877248 2.4354919874977674 12.625024960501902 ;
	setAttr ".bps" -type "matrix" 0.4324785284411003 -0.016862308610989869 0.90148654176628062 0
		 -0.78347014219601152 0.48781180705669269 0.38498594413750431 0 -0.44624753077723767 -0.87278594365651418 0.19775701714686728 0
		 0.99809032920103724 1.474864828795913 0.30673679133375237 1;
createNode joint -n "lWristStretch" -p "lElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 0.27941830693809722 -0.0069999698768283825 0.00039563913406165385 ;
	setAttr ".jo" -type "double3" 1.8636062586700287e-17 3.975693351829395e-16 6.8332229484567737e-17 ;
	setAttr ".bps" -type "matrix" 0.99868185990108194 0.020130427732428631 0.047215554469104755 0
		 -0.020107967638530649 0.99979736240865813 -0.00095066194745420992 0 -0.047225124054504464 5.2064315713836421e-13 0.99888427140386837 0
		 0.88958283108565117 1.5139174242126381 -0.072891650992788354 1;
createNode joint -n "lElbowStretch" -p "lShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 0.33963150475980652 0.0079527165474753136 0.0088076300635102078 ;
	setAttr ".jo" -type "double3" -0.10548194300424157 -5.2243339017109784 0.81692167319377662 ;
	setAttr ".bps" -type "matrix" 0.99868185990108194 0.020130427732428621 0.04721555446910472 0
		 -0.020107967638530639 0.99979736240865813 -0.00095066194745421035 0 -0.047225124054504429 5.2064543216060468e-13 0.99888427140386837 0
		 0.6104107655617339 1.5152911655974963 -0.086486393596850356 1;
createNode joint -n "rCollar" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.048979994764904999 -0.039733871118134471 -0.073324471827762597 ;
	setAttr ".jo" -type "double3" 11.707064156044648 -80.787002292158348 80.49624574655256 ;
	setAttr ".bps" -type "matrix" 0.98709997017857809 0.032893359049031123 0.15668974377387335 0
		 0.032486613313185995 -0.99945886705280285 0.0051568425386091564 0 0.15677457966421099 4.7160996859944911e-14 -0.98763441169853439 0
		 -0.073483999999999994 1.4824999999999997 -0.046060599999999986 1;
createNode joint -n "rShoulder" -p "rCollar";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" -0.19968409282727168 -0.029404192138899665 0.0028984590213072953 ;
	setAttr ".jo" -type "double3" -0.038899389363254461 -6.5010260523103929 2.2285570297020931 ;
	setAttr ".bps" -type "matrix" 0.99901628689829347 -0.0059577708215471405 0.043942729532708259 0
		 -0.0059520157187813909 -0.99998225232592908 -0.00026180535796034121 0 0.043943509427789088 -3.0534748302076768e-13 -0.9990340174284208 0
		 -0.27109299999999997 1.5053200000000002 -0.080363299999999999 1;
createNode joint -n "rElbow" -p "rShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" -0.33963135933556821 -0.0079466952326225915 -0.0088076565194131554 ;
	setAttr ".jo" -type "double3" -0.10548194302536593 -5.2243339017107786 0.81692167319526277 ;
	setAttr ".bps" -type "matrix" 0.99868185990108227 -0.020130427732428707 -0.04721555446910481 0
		 -0.02010796763852649 -0.99979736240865835 0.00095066194754078541 0 -0.047225124054506441 -6.0748871336001978e-13 -0.99888427140386815 0
		 -0.61073 1.5152900000000002 -0.086486399999999963 1;
createNode joint -n "rWrist" -p "rElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" -0.27941831480465273 0.0069962278920614462 -0.00039559967190871959 ;
	setAttr ".jo" -type "double3" 1.2074182697257327e-06 2.6828068810320249e-23 2.2620997660686444e-22 ;
	setAttr ".bps" -type "matrix" 0.99868185990108227 -0.020130427732428704 -0.047215554469104769 0
		 -0.020107967638526483 -0.99979736240865835 0.00095066194754078325 0 -0.047225124054506414 -6.0748882178023703e-13 -0.99888427140386837 0
		 -0.88990200000000019 1.5139199999999997 -0.072891700000000004 1;
createNode joint -n "rFinger" -p "rWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.30164915390809788 0.0005724424916553339 0.011751187392012918 ;
	setAttr ".jo" -type "double3" -89.91084594362998 -11.97034342732133 0.67310328531040087 ;
	setAttr ".bps" -type "matrix" 0.96687236460492187 -0.031181153458877536 -0.25334870481662464 0
		 0.25321706230697222 -0.0081661244717592483 0.96737502229887007 0 -0.03223274608087761 -0.99948039004278943 5.3173177666510085e-13 0
		 -1.1917199999999999 1.5194200000000002 -0.07038670000000001 1;
createNode joint -n "rFingerEnd" -p "rFinger";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.26611202108628595 -0.081268002652725865 0.038631397650857435 ;
	setAttr ".jo" -type "double3" 89.903670782738473 -0.51951572713818417 11.688400557995555 ;
	setAttr ".bps" -type "matrix" 0.99778886398022948 -0.041250044739540019 -0.052113498501155577 0
		 -0.04119389727265961 -0.99914885468031589 0.0021515153970193268 0 -0.052157892447199039 -5.2524174246060262e-14 -0.99863885076411252 0
		 -1.4708399999999999 1.48977 -0.081584199999999954 1;
createNode joint -n "rThumb" -p "rWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.11684780801718976 0.036459584437446679 -0.15180297613787597 ;
	setAttr ".jo" -type "double3" 66.532329537009659 -51.860721594730308 -18.568170690597228 ;
	setAttr ".bps" -type "matrix" 0.55146716803094287 0.18483141226769609 -0.81346254469585788 0
		 -0.59531909799528671 -0.59589931064290191 -0.53897976134303349 0 -0.58436216009082109 0.78149943097512498 -0.21858523563943236 0
		 -1.0001599999999995 1.4798199999999997 0.084293599999999969 1;
createNode joint -n "rThumbEnd" -p "rThumb";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.18090051900842424 -0.11797923380413416 -0.053522298325391793 ;
	setAttr ".jo" -type "double3" 9.2593275210878474 2.4354919874977705 12.625024960501898 ;
	setAttr ".bps" -type "matrix" 0.43247852844110063 0.016862308610989654 -0.90148654176628051 0
		 -0.78347014219601252 -0.48781180705669097 -0.38498594413750525 0 -0.44624753077723617 0.87278594365651552 -0.19775701714686661 0
		 -0.99840899999999966 1.4748600000000001 0.30673700000000015 1;
createNode joint -n "rWristStretch" -p "rElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -0.27941831480465296 0.0069962278920616683 -0.00039559967190871959 ;
	setAttr ".jo" -type "double3" 0 -3.9756933518293969e-16 8.6191789463488894e-17 ;
	setAttr ".bps" -type "matrix" 0.99868185990108227 -0.020130427732428704 -0.047215554469104769 0
		 -0.020107967638526483 -0.99979736240865835 0.00095066194754078325 0 -0.047225124054506414 -6.0748882178023703e-13 -0.99888427140386837 0
		 -0.88990200000000053 1.5139199999999997 -0.07289169999999999 1;
createNode joint -n "rElbowStretch" -p "rShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -0.33963135933556821 -0.0079466952326228135 -0.0088076565194131484 ;
	setAttr ".jo" -type "double3" -0.10548194302536594 -5.2243339017107777 0.81692167319526299 ;
	setAttr ".bps" -type "matrix" 0.99868185990108227 -0.020130427732428711 -0.047215554469104755 0
		 -0.02010796763852649 -0.99979736240865835 0.00095066194754078346 0 -0.0472251240545064 -6.0748914704088877e-13 -0.99888427140386837 0
		 -0.61073 1.5152900000000005 -0.086486400000000005 1;
createNode joint -n "lHip" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.0017817144483043713 0.0038447212341440663 0.21529580778360333 ;
	setAttr ".jo" -type "double3" 179.98105597559129 0.28532031510326872 176.49255036441366 ;
	setAttr ".bps" -type "matrix" 0.0022554669568004906 -0.99780055773920828 0.06624922523419885 0
		 -0.00014975192740385385 0.066249055981891763 0.99780310690830609 0 -0.99999744521832012 -0.002260432886192397 3.4053158456638332e-16 0
		 0.2153029252954263 0.94484382355023 0.00021955451391747613 1;
createNode joint -n "lKnee" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.37801205922697723 -0.023215167355213017 0.0008560724119933132 ;
	setAttr ".jo" -type "double3" 0.058873631219281103 -0.89419839126438749 -7.565629293359323 ;
	setAttr ".bps" -type "matrix" -0.013350758322473752 -0.99775062933432646 -0.065692000389475716 0
		 -0.00087893656994147051 -0.065686120190470335 0.99783994762929262 0 -0.99991048835519325 0.013379659086803461 -8.1047870520630689e-17 0
		 0.21530292529542611 0.56612326200542795 0.0020983944524609732 1;
createNode joint -n "lAnkle" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 0.37505277766941336 0.022381933441364282 -0.005027361300023344 ;
	setAttr ".jo" -type "double3" -0.06029118997617524 0.75842018647814891 -0.77876015785936881 ;
	setAttr ".bps" -type "matrix" -0.00010105259733122693 -0.99685547158864651 -0.079241141789792816 0
		 -8.032782464788106e-06 -0.079241141382645902 0.99685547671056629 0 -0.99999999486192348 0.00010137136193970678 1.4588278939879385e-16 0
		 0.215302925295426 0.1903766703017587 -0.0002059854712988334 1;
createNode joint -n "lBall" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.067124334955903045 0.23363495222689204 -8.6598271830814826e-06 ;
	setAttr ".jo" -type "double3" 0.0058081455812987416 8.091194102631672e-06 94.465130504444687 ;
	setAttr ".bps" -type "matrix" 2.6814691417818837e-16 -0.0013930756639797331 0.99999902966962673 0
		 -7.9196022027654121e-14 0.99999902966962639 0.0013930756639796565 0 -1 -7.9209493239647266e-14 2.0171581240045137e-16 0
		 0.21530292529542577 0.10494990856502034 0.22737528726330375 1;
createNode joint -n "lToe" -p "lBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.37908394818140606 -0.10434867286965951 8.0648023727854418e-15 ;
	setAttr ".bps" -type "matrix" 2.6814691417818837e-16 -0.0013930756639797331 0.99999902966962673 0
		 -7.9196022027654121e-14 0.99999902966962639 0.0013930756639796565 0 -1 -7.9209493239647266e-14 2.0171581240045137e-16 0
		 0.21530292529542608 7.3244325230648042e-05 0.60631350201129752 1;
createNode joint -n "lHeel" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.20570499121547947 -0.20997173707906511 4.5861521877329675e-05 ;
	setAttr ".bps" -type "matrix" -0.00010105259733122693 -0.99685547158864651 -0.079241141789792816 0
		 -8.032782464788106e-06 -0.079241141382645902 0.99685547671056629 0 -0.99999999486192348 0.00010137136193970678 1.4588278939879385e-16 0
		 0.21523796340742571 0.0019569290288004026 -0.2258177599087699 1;
createNode joint -n "lAnkleStretch" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 0.37505277766941336 0.022381933441364282 -0.0050273613000233475 ;
	setAttr ".jo" -type "double3" -0.06029118997617524 0.75842018647814891 -0.77876015785936814 ;
	setAttr ".bps" -type "matrix" -0.00010105259733122519 -0.99685547158864651 -0.079241141789792802 0
		 -8.0327824647883229e-06 -0.079241141382645888 0.99685547671056629 0 -0.99999999486192348 0.00010137136193970851 1.4599120961604238e-16 0
		 0.215302925295426 0.19037667030175864 -0.00020598547129883687 1;
createNode joint -n "lKneeStretch" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 0.37801205922697712 -0.023215167355213021 0.00085607241199334161 ;
	setAttr ".jo" -type "double3" 0.058873631219281103 -0.89419839126438783 -7.5656292933593212 ;
	setAttr ".bps" -type "matrix" -0.013350758322473757 -0.99775062933432612 -0.065692000389475688 0
		 -0.0008789365699414704 -0.065686120190470279 0.99783994762929262 0 -0.99991048835519325 0.013379659086803461 -8.1047870520630689e-17 0
		 0.21530292529542608 0.56612326200542828 0.0020983944524609627 1;
createNode joint -n "rHip" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.0013407945002021915 0.0038605906372394102 -0.21529879574225355 ;
	setAttr ".jo" -type "double3" -179.9638947266547 -0.54377797932670757 -3.5075738007034976 ;
	setAttr ".bps" -type "matrix" 0.0022554669568004429 0.99780055773920828 -0.066249225234198572 0
		 -0.00014975192802751475 -0.066249055981890098 -0.99780310690830565 0 -0.99999744521831979 0.0022604328862336435 6.2204411352305055e-13 0
		 -0.21530299999999991 0.9448439999999998 0.00021955499999999975 1;
createNode joint -n "rKnee" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.37801249639064394 0.023215201330149399 -0.00085607340310608904 ;
	setAttr ".jo" -type "double3" 0.05937516286436173 -0.89419839126909395 -7.5656292933587901 ;
	setAttr ".bps" -type "matrix" -0.013350758322473824 0.99775062933432612 0.065692000389476299 0
		 -0.00088768916550623685 0.065686003070725876 -0.99783994759106398 0 -0.99991048062322063 -0.013380234061804427 8.7344713706223186e-06 0
		 -0.21530299999999991 0.56612299999999982 0.0020983900000000107 1;
createNode joint -n "rAnkle" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" -0.37505218697325293 -0.022381855480582719 0.0050275493002892857 ;
	setAttr ".jo" -type "double3" -0.060792719217139669 0.75841336987616736 -0.7787667963435343 ;
	setAttr ".bps" -type "matrix" -0.0001010525973296466 0.99685547158864629 0.079241141789794425 0
		 -8.0327833420724623e-06 0.079241141382647498 -0.9968554767105654 0 -0.99999999486192337 -0.00010137136200767498 8.7459322756547861e-13 0
		 -0.21530299999999997 0.19037699999999996 -0.00020598499999999794 1;
createNode joint -n "rBall" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.067124595270357107 -0.2336346842773307 8.6598515412483756e-06 ;
	setAttr ".jo" -type "double3" 0.0058081454053920244 8.0912442218515611e-06 94.465130504444787 ;
	setAttr ".bps" -type "matrix" 2.6894706914576816e-16 0.0013930756639800993 -0.99999902966962606 0
		 3.0576785000442298e-12 -0.99999902966962628 -0.0013930756639799287 0 -0.99999999999999989 -3.0576885560193792e-12 -4.4841172953938574e-15 0
		 -0.21530299999999997 0.10495 0.22737499999999999 1;
createNode joint -n "rToe" -p "rBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" -0.37908473356006162 0.10434876323586552 3.189948305504231e-13 ;
	setAttr ".bps" -type "matrix" 2.6894706914576816e-16 0.0013930756639800993 -0.99999902966962606 0
		 3.0576785000442298e-12 -0.99999902966962628 -0.0013930756639799287 0 -0.99999999999999989 -3.0576885560193792e-12 -4.4841172953938574e-15 0
		 -0.21530299999999999 7.3244299999997153e-05 0.60631400000000002 1;
createNode joint -n "rHeel" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.20570533797513085 0.20997195083612727 -4.5899600737836499e-05 ;
	setAttr ".bps" -type "matrix" -0.0001010525973296466 0.99685547158864629 0.079241141789794425 0
		 -8.0327833420724623e-06 0.079241141382647498 -0.9968554767105654 0 -0.99999999486192337 -0.00010137136200767498 8.7459322756547861e-13 0
		 -0.21523800000000001 0.0019569299999999679 -0.22581799999999999 1;
createNode joint -n "rAnkleStretch" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -0.37505218697325293 -0.022381855480582719 0.0050275493002892579 ;
	setAttr ".jo" -type "double3" -0.06079271921713969 0.75841336987616748 -0.77876679634353485 ;
	setAttr ".bps" -type "matrix" -0.00010105259732964486 0.99685547158864629 0.079241141789794453 0
		 -8.0327833420720303e-06 0.079241141382647498 -0.9968554767105654 0 -0.99999999486192337 -0.00010137136200766977 8.7459301072504391e-13 0
		 -0.21530299999999991 0.19037699999999996 -0.00020598499999999794 1;
createNode joint -n "rKneeStretch" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -0.37801249639064421 0.023215201330149409 -0.00085607340310611679 ;
	setAttr ".jo" -type "double3" 0.05937516286436173 -0.89419839126909373 -7.5656292933587883 ;
	setAttr ".bps" -type "matrix" -0.013350758322473819 0.99775062933432612 0.065692000389476271 0
		 -0.00088768916550623685 0.065686003070725876 -0.99783994759106398 0 -0.99991048062322063 -0.013380234061804426 8.7344713706229691e-06 0
		 -0.21530299999999991 0.56612299999999927 0.0020983900000000246 1;
createNode transform -n "bottom";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0 -100.1 0 ;
	setAttr ".r" -type "double3" 89.999999999999986 0 0 ;
createNode camera -n "bottomShape" -p "bottom";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "bottom1";
	setAttr ".den" -type "string" "bottom1_depth";
	setAttr ".man" -type "string" "bottom1_mask";
	setAttr ".hc" -type "string" "viewSet -bo %camera";
	setAttr ".o" yes;
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
	setAttr ".rp" -type "double3" 0 0.1283784281328906 0 ;
	setAttr ".sp" -type "double3" 0 0.1283784281328906 0 ;
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
	setAttr ".vcs" 2;
createNode mesh -n "cBodyShapeOrig" -p "cBody";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 769 ".uvst[0].uvsp";
	setAttr ".uvst[0].uvsp[0:249]" -type "float2" 0.375 0.125 0.625 0.125 0.625
		 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.625 0.375 0.625 0.375 0.75 0.625 0.75
		 0.625 1 0.375 1 0.875 0.125 0.875 0.25 0.125 0.125 0.125 0.25 0.375 0 0.625 0 0.875
		 0 0.125 0 0.375 0 0.375 0.125 0.625 0.125 0.625 0 0.375 0.25 0.375 0.5 0.625 0.5
		 0.625 0.25 0.375 0.625 0.375 0.75 0.625 0.75 0.625 0.625 0.375 1 0.625 1 0.875 0.25
		 0.875 0.125 0.875 0 0.125 0 0.125 0.125 0.125 0.25 0.375 0 0.375 0.25 0.625 0.25
		 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25 0.875
		 0 0.125 0 0.125 0.25 0.375 0 0.375 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375
		 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25 0.875 0 0.125 0 0.125 0.25 0.375 0 0.375
		 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1
		 0.875 0.25 0.875 0 0.125 0 0.125 0.25 0.5 0.041666668 0.625 0.041666668 0.625 0.083333336
		 0.5 0.083333336 0.5 0.125 0.625 0.125 0.625 0.16666667 0.5 0.16666667 0.625 0.25
		 0.5 0.25 0.5 0.5 0.625 0.5 0.625 0.58333331 0.5 0.58333331 0.625 0.625 0.5 0.625
		 0.5 0.66666663 0.625 0.66666663 0.625 0.70833325 0.5 0.70833325 0.5 0.74999994 0.625
		 0.74999994 0.625 0.99999994 0.5 0.99999994 0.875 0.041666668 0.875 0.083333336 0.875
		 0.125 0.875 0.16666667 0.875 0.25 0.125 0.041666668 0.375 0.041666668 0.375 0.083333336
		 0.125 0.083333336 0.125 0.125 0.375 0.125 0.375 0.16666667 0.125 0.16666667 0.375
		 0.25 0.125 0.25 0.5 0.25 0.375 0.25 0.625 0.5 0.625 0.25 0.5 0.5 0.375 0.5 0.375
		 0.5 0.5 0.25 0.375 0.25 0.625 0.5 0.625 0.25 0.375 0.5 0.5 0.5 0.375 0.74999994 0.375
		 0.99999994 0.375 0.66666663 0.375 0.70833325 0.375 0.58333331 0.375 0.625 0.625 0.10416667
		 0.5 0.10416667 0.875 0.10416667 0.5 0.64583331 0.625 0.64583331 0.375 0.64583331
		 0.375 0.10416667 0.125 0.10416667 0.625 0.25 0.5 0.25 0.5 0.25 0.625 0.25 0.375 0.25
		 0.375 0.25 0.375 0.5 0.375 0.5 0.5 0.5 0.5 0.5 0.625 0.5 0.625 0.5 0.5 0.25 0.375
		 0.25 0.375 0.5 0.5 0.5 0.625 0.5 0.625 0.25 0.5 0 0.625 0 0.875 0 0.125 0 0.375 0
		 0.5 0.25 0.375 0.25 0.375 0.5 0.5 0.5 0.625 0.25 0.625 0.5 0.375 0.3125 0.375 0.68843985
		 0.40625 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985
		 0.46875 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625
		 0.68843985 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625
		 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458
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
		 0.375 0;
	setAttr ".uvst[0].uvsp[250:499]" 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375
		 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375
		 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1
		 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.625 0 0.625 0.125 0.375 0.125
		 0.375 0.25 0.625 0.25 0.625 0.5 0.375 0.5 0.375 0.625 0.625 0.625 0.625 0.75 0.375
		 0.75 0.625 1 0.375 1 0.875 0 0.875 0.125 0.875 0.25 0.125 0 0.125 0.125 0.125 0.25
		 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625
		 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0.125 0.625 0.125 0.625 0.25
		 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.625 0.375 0.625 0.375 0.75 0.625 0.75 0.625
		 1 0.375 1 0.875 0.125 0.875 0.25 0.125 0.125 0.125 0.25 0.375 0 0.625 0 0.875 0 0.125
		 0 0.5 0 0.625 0 0.625 0.25 0.5 0.25 0.75 0 0.875 0 0.875 0.25 0.75 0.25 0.546875
		 0.46875 0.625 0.375 0.625 0.5 0.5625 0.5 0.5 0.375 0.53125 0.4375 0.53125 0.8125
		 0.625 1 0.5 1 0.5 0.875 0.59375 0.75 0.625 0.875 0.546875 0.78125 0.625 0.375 0.546875
		 0.46875 0.625 0.5 0.5625 0.5 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0.5
		 1 0 1 1 0.5 0 0.5 0.25 0.625 0.25 0.625 0 0.75 0 0.75 0.25 0.875 0.25 0.875 0 0.546875
		 0.46875 0.5625 0.5 0.625 0.5 0.625 0.375 0.5 0.375 0.53125 0.4375 0.53125 0.8125
		 0.5 0.875 0.5 1 0.625 1 0.59375 0.75 0.546875 0.78125 0.625 0.875 0.546875 0.46875
		 0.625 0.375 0.625 0.5 0.5625 0.5 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0
		 0 0.5 1 1 1 0 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.875 0.125 1 0.125 1 0.25 0.875
		 0.25 0.125 0.375 0 0.375 0.625 0.25 0.75 0.25 0.75 0.375 0.625 0.375 0.875 0.375
		 1 0.375 0.125 0.5 0 0.5 0.75 0.5 0.625 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.75
		 0.625 0.625 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.75 0.75 0.625 0.75 0.875
		 0.75 1 0.75 0.125 0.875 0 0.875 0.75 0.875 0.625 0.875 0.875 0.875 1 0.875 0.0625
		 0 0.9375 0 0.0625 1 0.6875 1 0.8125 1 0.9375 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0
		 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0
		 1 0 1 1 0 1 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.875 0.125 0.875 0.25 1 0.25 1
		 0.125 0 0.375 0.125 0.375 0.625 0.25;
	setAttr ".uvst[0].uvsp[500:749]" 0.625 0.375 0.75 0.375 0.75 0.25 0.875 0.375
		 1 0.375 0 0.5 0.125 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.625
		 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.625 0.75 0.75 0.75 0.875
		 0.75 1 0.75 0 0.875 0.125 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625
		 0 0.9375 0 0.0625 1 0.6875 1 0.8125 1 0.9375 1 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0
		 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0
		 0 1 1 1 1 0 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75
		 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.375 0.25
		 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875
		 0.25 0.875 0 0.125 0 0.125 0.25 0.375 0.3125 0.40625 0.3125 0.40625 0.68843985 0.375
		 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875 0.68843985 0.5
		 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125 0.5625 0.68843985
		 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985 0.5 1.4901161e-08
		 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375 0.15625 0.38951457
		 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543
		 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457
		 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0.3125 0.375 0.68843985 0.40625
		 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875
		 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985
		 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5
		 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0 0.375 0.25 0.625
		 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25
		 0.875 0 0.125 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375
		 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375
		 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1
		 0.375 1 0.14276735 0.41137075 0.88867164 0.41137075 1 0 0 0.023260495 0.11457131
		 0.45632055 0.85307395 0.45632055 1 0 0 0 0.5 0 0.625 0 0.625 0.25 0.5 0.25 0.375
		 0.25 0.5 0.5 0.375 0.5 0.5 0.75 0.375 0.75 0.5 1 0.375 1 0.875 0 0.875 0.25 0.125
		 0 0.375 0 0.125 0.25 0.625 0.5 0.625 0.75 0.625 1 0.5 0 0.5 0.25 0.625 0.25 0.625
		 0 0.375 0.25 0.375 0.5 0.5 0.5 0.375 0.75 0.5 0.75 0.375 1 0.5 1 0.875 0.25 0.875
		 0 0.125 0 0.125 0.25 0.375 0 0.625 0.5 0.625 0.75;
	setAttr ".uvst[0].uvsp[750:768]" 0.625 1 0.375 0 0.375 0.25 0.625 0.25 0.625
		 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.14276735 0.41137075
		 0 0.023260495 1 0 0.88867164 0.41137075 0.11457131 0.45632055 0 0 1 0 0.85307395
		 0.45632055;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 423 ".pt";
	setAttr ".pt[0:165]" -type "float3"  0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0;
	setAttr ".pt[166:331]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.04541491 0 0 0.04541491 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.04541491 0 0 0.04541491 0 0 0.04541491 0 0 0.04541491 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.04541491 0 0 0.04541491 0 0 0.12837842 
		0;
	setAttr ".pt[332:422]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.04541491 0 0 0.04541491 0 0 0.04541491 
		0 0 0.04541491 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.04541491 
		0 0 0.04541491 0 0 0.04541491 0 0 0.04541491 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0;
	setAttr -s 423 ".vt";
	setAttr ".vt[0:165]"  -1.26111317 1.32643569 -0.23200765 -1.35093832 1.32643569 -0.23200765
		 -1.26111317 1.32643569 0.083521783 -1.4709034 1.32643569 0.037597023 -1.21400452 1.45400023 0.083521664
		 -1.4709034 1.39357686 0.037597012 -1.21400452 1.45400023 -0.23200803 -1.35093832 1.42378843 -0.23200801
		 -1.26111317 1.32643569 -0.10782395 -1.4709034 1.32643569 -0.10782395 -1.4709034 1.39357662 -0.10782383
		 -1.21400452 1.45400023 -0.10782381 -0.90659535 1.32643569 -0.23200765 -1.12283373 1.32643569 -0.23200765
		 -0.93199289 1.32643569 0.083521783 -1.12283373 1.32643569 0.083521783 -0.93199289 1.45400023 0.083521664
		 -1.16994238 1.45400023 0.083521664 -0.90659535 1.45400023 -0.23200803 -1.16994238 1.45400023 -0.23200803
		 -1.12283373 1.32643569 -0.074243106 -0.89080036 1.32643569 -0.074243106 -0.89080036 1.45400023 -0.074243098
		 -1.16994238 1.45400023 -0.074243098 -0.94273341 1.29644716 0.11899807 -1.051900864 1.29644716 0.11899807
		 -0.94273341 1.2964474 0.30496225 -1.051900864 1.2964474 0.30496225 -0.94273341 1.40561485 0.30496231
		 -1.051900864 1.40561485 0.30496231 -0.94273341 1.40561485 0.11899797 -1.051900864 1.40561485 0.11899797
		 -0.90662611 1.37145734 -0.058879018 -0.90662616 1.39588106 -0.058879018 -0.62987924 1.3537395 -0.041161373
		 -0.62987924 1.4135989 -0.041161373 -0.62987924 1.3537395 -0.10102057 -0.62987924 1.4135989 -0.11357734
		 -0.90662611 1.37145734 -0.0833029 -0.90662616 1.39588106 -0.0833029 -0.58242327 1.37145686 -0.058879018
		 -0.58242327 1.39588106 -0.058879018 -0.29158252 1.3537395 -0.041161373 -0.29158252 1.41359842 -0.041161373
		 -0.29158252 1.3537395 -0.10102059 -0.29158252 1.41359842 -0.11357737 -0.58242327 1.37145686 -0.0833029
		 -0.58242327 1.39588106 -0.0833029 -0.11281212 0.77702677 0.065919384 0.11281212 0.77702677 0.065919384
		 -0.20152064 0.93414462 0.1215837 0.20152064 0.93414462 0.1215837 -0.27097392 1.30593646 0.1215837
		 0.27097392 1.30593646 0.1215837 -0.22159538 1.45421433 0.017488381 0.22159538 1.45421433 0.017488381
		 -0.22159538 1.45421433 -0.17203888 0.22159538 1.45421433 -0.17203888 -0.27097392 1.30593646 -0.17581035
		 0.27097392 1.30593646 -0.17581035 -0.20152064 0.93414462 -0.039321758 0.20152064 0.93414462 -0.039321758
		 -0.11281212 0.77702677 -0.062308807 0.11281212 0.77702677 -0.062308807 -0.058068983 1.47247469 -0.061749209
		 0.058068983 1.47247469 -0.061749209 0.05806898 1.49007392 -0.11583062 -0.05806898 1.49007392 -0.11583062
		 -0.060048006 1.68340433 -0.071808144 0.060048021 1.68340433 -0.071808144 0.060048021 1.68340433 -0.11703581
		 -0.060048006 1.68340433 -0.11703581 -5.1856103e-16 1.42423558 0.10451934 -5.1856103e-16 1.30593646 0.17648074
		 -4.5839274e-16 0.93414462 0.20490487 -4.5839274e-16 0.73096752 0.10590221 -4.5839274e-16 0.73096752 -0.089748167
		 -4.5839274e-16 0.93414462 -0.12524346 -4.5839274e-16 1.30593646 -0.24962881 -4.5839274e-16 1.45421433 -0.20490487
		 -4.5839274e-16 1.46419585 -0.041775592 5.9604641e-09 1.68340433 -0.041849039 5.9604641e-09 1.68340433 -0.14849171
		 -4.5839274e-16 1.49007392 -0.1318979 -4.5839274e-16 1.13811874 0.21184075 0.20742497 1.13811874 0.13861866
		 0.20742497 1.13811874 -0.048510753 -4.5839274e-16 1.13811874 -0.13443245 -0.20742497 1.13811874 -0.048510753
		 -0.20742497 1.13811874 0.13861866 0.059058499 1.56835008 -0.066778675 2.9802316e-09 1.56797576 -0.041812316
		 -0.059058499 1.56835008 -0.066778675 -0.059058495 1.56835008 -0.11489485 2.9802316e-09 1.56835008 -0.13865644
		 0.059058499 1.56835008 -0.11489485 1.4901156e-09 1.5100739 -0.041793954 -0.058563747 1.51101053 -0.06426394
		 -0.058563732 1.51101053 -0.11382438 1.4901156e-09 1.51101053 -0.1337388 0.058563739 1.51101053 -0.11382438
		 0.058563747 1.51101053 -0.06426394 4.4703481e-09 1.62523806 -0.041830678 -0.059553254 1.62632918 -0.069293417
		 -0.059553254 1.62632918 -0.11596533 4.4703481e-09 1.62632918 -0.14357407 0.059553258 1.62632918 -0.11596533
		 0.059553258 1.62632918 -0.069293417 -4.5839274e-16 0.83255601 0.160546 0.15716638 0.85558569 0.10262519
		 0.15716638 0.85558569 -0.080544569 -4.5839274e-16 0.83255601 -0.16507415 -0.15716638 0.85558569 -0.080544569
		 -0.15716638 0.85558569 0.10262519 0.20447281 1.03613162 0.13623732 -4.5839274e-16 1.03613162 0.21955848
		 -0.20447281 1.03613162 0.13623732 -0.20447281 1.03613162 -0.029598597 -4.5839274e-16 1.03613162 -0.10938416
		 0.20447281 1.03613162 -0.029598597 -0.060048006 1.80900359 -0.071808144 5.9604641e-09 1.80900359 -0.041849039
		 5.9604641e-09 1.80900359 -0.14849171 -0.060048006 1.80900359 -0.11703581 0.060048021 1.80900359 -0.071808144
		 0.060048021 1.80900359 -0.11703581 -0.24498391 1.29517603 -0.14236864 -0.23046646 1.35689104 -0.16862956
		 -0.27186683 1.36662972 -0.16862956 -0.28638428 1.30491483 -0.14236864 -0.21594901 1.41860592 -0.14236864
		 -0.2573494 1.42834485 -0.14236864 -0.20993567 1.4441694 -0.078969136 -0.2513361 1.45390797 -0.078969136
		 -0.21594901 1.41860592 -0.015569639 -0.2573494 1.42834485 -0.015569639 -0.23046646 1.35689104 0.010691309
		 -0.27186683 1.36662972 0.010691309 -0.24498391 1.29517603 -0.015569639 -0.28638428 1.30491483 -0.015569639
		 -0.25099722 1.26961267 -0.078969136 -0.29239759 1.27935159 -0.078969136 -0.23046646 1.35689104 -0.078969136
		 -0.27186683 1.36662972 -0.078969136 0.24498391 1.29517603 -0.14236864 0.23046646 1.35689104 -0.16862956
		 0.21594901 1.41860592 -0.14236864 0.20993567 1.4441694 -0.078969136 0.21594901 1.41860592 -0.015569639
		 0.23046646 1.35689104 0.010691309 0.24498391 1.29517603 -0.015569639 0.25099722 1.26961267 -0.078969136
		 0.28638428 1.30491483 -0.14236864 0.27186683 1.36662972 -0.16862956 0.2573494 1.42834485 -0.14236864
		 0.2513361 1.45390797 -0.078969136 0.2573494 1.42834485 -0.015569639 0.27186683 1.36662972 0.010691309
		 0.28638428 1.30491483 -0.015569639 0.29239759 1.27935159 -0.078969136 0.23046646 1.35689104 -0.078969136
		 0.27186683 1.36662972 -0.078969136 0.58242333 1.37145686 -0.058879018 0.58242333 1.39588106 -0.058879018
		 0.29158255 1.3537395 -0.041161373 0.29158255 1.41359842 -0.041161373;
	setAttr ".vt[166:331]" 0.29158255 1.3537395 -0.10102059 0.29158255 1.41359842 -0.11357737
		 0.58242333 1.37145686 -0.0833029 0.58242333 1.39588106 -0.0833029 0.90662611 1.37145734 -0.058879018
		 0.90662622 1.39588106 -0.058879018 0.62987918 1.3537395 -0.041161373 0.62987918 1.4135989 -0.041161373
		 0.62987918 1.3537395 -0.10102057 0.62987918 1.4135989 -0.11357734 0.90662611 1.37145734 -0.0833029
		 0.90662622 1.39588106 -0.0833029 0.90659535 1.32643569 -0.23200765 1.12283361 1.32643569 -0.23200765
		 0.93199283 1.32643569 0.083521783 1.12283361 1.32643569 0.083521783 0.93199283 1.45400023 0.083521664
		 1.16994226 1.45400023 0.083521664 0.90659535 1.45400023 -0.23200803 1.16994226 1.45400023 -0.23200803
		 1.12283361 1.32643569 -0.074243106 0.89080036 1.32643569 -0.074243106 0.89080036 1.45400023 -0.074243098
		 1.16994226 1.45400023 -0.074243098 0.94273347 1.29644716 0.11899807 1.051900864 1.29644716 0.11899807
		 0.94273347 1.2964474 0.30496225 1.051900864 1.2964474 0.30496225 0.94273347 1.40561485 0.30496231
		 1.051900864 1.40561485 0.30496231 0.94273347 1.40561485 0.11899797 1.051900864 1.40561485 0.11899797
		 1.26111317 1.32643569 -0.23200765 1.3509382 1.32643569 -0.23200765 1.26111317 1.32643569 0.083521783
		 1.4709034 1.32643569 0.037597023 1.21400452 1.45400023 0.083521664 1.4709034 1.39357686 0.037597012
		 1.21400452 1.45400023 -0.23200803 1.3509382 1.42378843 -0.23200801 1.26111317 1.32643569 -0.10782395
		 1.4709034 1.32643569 -0.10782395 1.4709034 1.39357662 -0.10782383 1.21400452 1.45400023 -0.10782381
		 0.21046607 1.51175475 0.23528227 0.2911655 1.70252645 0.27835521 0.38429379 1.70252645 -0.18475322
		 0.28328744 1.53951085 -0.18475322 -2.747403e-09 1.70252645 0.4146114 -1.4311402e-15 1.49913824 0.35406783
		 -1.4411349e-15 1.70252645 0.29617333 0.30086046 1.70252645 -0.18475322 0.22762474 1.70252645 0.20570476
		 -1.4370916e-15 1.49913824 0.24990912 0.148067 1.51175475 0.197932 0.30135626 1.70252645 -0.017421532
		 0.39182287 1.70252645 -0.0074876784 0.31110412 1.53951085 -0.0074876784 0.25596657 1.53951085 -0.017421532
		 0.41175309 1.93544209 -0.017421722 0.50041741 1.93544209 -0.0074878694 0.50041741 1.93544209 -0.18475342
		 0.41125727 1.93544209 -0.18475342 -0.21046607 1.51175475 0.23528227 -0.2911655 1.70252645 0.27835521
		 -0.31110412 1.53951085 -0.0074876784 -0.28328744 1.53951085 -0.18475322 -0.38429379 1.70252645 -0.18475322
		 -0.39182287 1.70252645 -0.0074876784 -0.41175309 1.93544209 -0.017421722 -0.50041741 1.93544209 -0.0074878694
		 -0.50041741 1.93544209 -0.18475342 -0.41125727 1.93544209 -0.18475342 -0.22762474 1.70252645 0.20570476
		 -0.148067 1.51175475 0.197932 -0.25596657 1.53951085 -0.017421532 -0.30135626 1.70252645 -0.017421532
		 -0.30086046 1.70252645 -0.18475322 0.14820521 1.65046036 -0.25205639 -1.4203739e-15 1.65046036 -0.31344503
		 0.2095938 1.65046036 -0.1038512 0.27384746 1.7691859 -0.37769869 -1.4094004e-15 1.7691859 -0.49112996
		 -1.4202656e-15 1.70218039 0.38309738 0.27384746 1.70258474 0.26041919 0.38727885 1.70224261 -0.1038512
		 0.35779896 1.94687068 -0.46165022 -1.4421894e-15 1.94687068 -0.60985529 -1.4331395e-15 1.94687068 0.41907921
		 0.35779896 1.94687068 0.27544877 0.50600415 1.94687068 -0.1038512 0.38727885 2.15646482 -0.49112996
		 -1.4382251e-15 2.15646482 -0.65154624 -1.4535774e-15 2.15646482 0.44384375 0.38727885 2.15646482 0.28342766
		 0.54769498 2.15646482 -0.1038512 0.35779896 2.36605883 -0.46165022 -1.4566848e-15 2.36605883 -0.60985529
		 -1.4250287e-15 2.36605883 0.40215293 0.35779896 2.36605883 0.25394776 0.50600415 2.36605883 -0.1038512
		 0.27384746 2.54374361 -0.37769866 -1.5210185e-15 2.54374361 -0.49112996 -1.4231061e-15 2.54374361 0.28342757
		 0.27384746 2.54374361 0.16999626 0.38727885 2.54374361 -0.1038512 0.14820521 2.66246915 -0.25205642
		 -1.4771832e-15 2.66246915 -0.31344503 -1.3905308e-15 2.66246915 0.1057426 0.14820521 2.66246915 0.044354022
		 0.2095938 2.66246915 -0.1038512 -1.4539441e-15 1.60876954 -0.1038512 -1.4523766e-15 2.70415998 -0.1038512
		 -1.4147762e-15 1.70239937 0.31662172 0.22616228 1.70259774 0.21682525 0.27596417 1.70212018 -0.10794298
		 0.2095938 1.68222034 -0.10754055 -1.4130934e-15 1.64052999 -0.10754055 -1.4153342e-15 1.78076243 0.31662172
		 0.22616228 1.78030849 0.21682525 0.27596417 1.78074527 -0.10794298 0.2095938 1.78082502 -0.10754055
		 -1.410612e-15 1.78086269 -0.10754055 -0.14820521 1.65046036 -0.25205639 -0.27384746 1.7691859 -0.37769869
		 -0.2095938 1.65046036 -0.1038512 -0.38727885 1.70224261 -0.1038512 -0.35779896 1.94687068 -0.46165022
		 -0.27384746 1.70258474 0.26041919 -0.35779896 1.94687068 0.27544877 -0.50600415 1.94687068 -0.1038512
		 -0.38727885 2.15646482 -0.49112996 -0.38727885 2.15646482 0.28342766 -0.54769498 2.15646482 -0.1038512
		 -0.35779896 2.36605883 -0.46165022 -0.35779896 2.36605883 0.25394776 -0.50600415 2.36605883 -0.1038512
		 -0.27384746 2.54374361 -0.37769866 -0.27384746 2.54374361 0.16999626 -0.38727885 2.54374361 -0.1038512
		 -0.14820521 2.66246915 -0.25205642 -0.14820521 2.66246915 0.044354022 -0.2095938 2.66246915 -0.1038512
		 -0.22616228 1.70259774 0.21682525 -0.27596417 1.70212018 -0.10794298 -0.2095938 1.68222034 -0.10754055
		 -0.22616228 1.78030849 0.21682525 -0.27596417 1.78074527 -0.10794298 -0.2095938 1.78082502 -0.10754055
		 0.20264491 0.53638709 0.013150573 0.22894603 0.53638709 0.013150573 0.18356551 0.82820952 0.032230042
		 0.24802554 0.82820952 0.032230042 0.18356551 0.82820952 -0.032230042 0.24802554 0.82820952 -0.045751952
		 0.20264491 0.53638709 -0.013150573 0.22894603 0.53638709 -0.013150573 -0.20264491 0.53638709 0.013150573
		 -0.22894606 0.53638709 0.013150573 -0.1835655 0.82820952 0.032230042 -0.24802551 0.82820952 0.032230042
		 -0.1835655 0.82820952 -0.032230042 -0.24802551 0.82820952 -0.045751952 -0.20264491 0.53638709 -0.013150573
		 -0.22894606 0.53638709 -0.013150573 0.12829357 0.81272817 -0.04823203;
	setAttr ".vt[332:422]" 0.14634602 0.8574543 -0.068210363 0.16439849 0.90218055 -0.04823203
		 0.17187606 0.92070675 6.4486194e-18 0.16439849 0.90218055 0.04823203 0.14634602 0.8574543 0.068210363
		 0.12829357 0.81272817 0.04823203 0.12081601 0.79420185 6.3871189e-18 0.15829732 0.80061781 -0.04823203
		 0.17634979 0.84534419 -0.068210363 0.19440223 0.89007044 -0.04823203 0.2018798 0.90859663 6.441655e-18
		 0.19440223 0.89007044 0.04823203 0.17634979 0.84534419 0.068210363 0.15829732 0.80061781 0.04823203
		 0.15081975 0.78209174 6.3801545e-18 0.14634602 0.8574543 6.5046166e-18 0.17634979 0.84534419 6.5020706e-18
		 -0.12829357 0.81272817 -0.04823203 -0.14634602 0.8574543 -0.068210363 -0.16439849 0.90218055 -0.04823203
		 -0.17187607 0.92070675 -1.514107e-17 -0.16439849 0.90218055 0.04823203 -0.14634602 0.8574543 0.068210363
		 -0.12829357 0.81272817 0.04823203 -0.12081599 0.79420185 -8.949516e-18 -0.1582973 0.80061781 -0.04823203
		 -0.17634979 0.84534419 -0.068210363 -0.19440222 0.89007044 -0.04823203 -0.2018798 0.90859663 -1.8822432e-17
		 -0.19440222 0.89007044 0.04823203 -0.17634979 0.84534419 0.068210363 -0.1582973 0.80061781 0.04823203
		 -0.15081975 0.78209174 -1.2630878e-17 -0.14634602 0.8574543 -1.1958543e-17 -0.17634979 0.84534419 -1.5635494e-17
		 -0.20264491 0.13553953 0.013150573 -0.22894606 0.13553953 0.013150573 -0.1835655 0.47715187 0.032230042
		 -0.24802551 0.47715187 0.032230042 -0.1835655 0.47715187 -0.050692249 -0.24802551 0.47715187 -0.050692249
		 -0.20264491 0.13553953 -0.013150573 -0.22894606 0.13553953 -0.013150573 0.20264491 0.13553953 0.013150573
		 0.22894603 0.13553953 0.013150573 0.18356551 0.47715187 0.032230042 0.24802554 0.47715187 0.032230042
		 0.18356551 0.47715187 -0.050692249 0.24802554 0.47715187 -0.050692249 0.20264491 0.13553953 -0.013150573
		 0.22894603 0.13553953 -0.013150573 0.076400779 -0.12724787 0.18469498 0.3918882 -0.12724787 0.18469498
		 0.076400779 0.068211675 0.1153607 0.3918882 0.068211675 0.1153607 0.076400779 0.068211675 -0.16615725
		 0.34056261 0.068211675 -0.16615725 0.076400779 -0.12724787 -0.22909133 0.34056261 -0.12724787 -0.22909133
		 0.076400779 -0.12730879 0.60603541 0.3918882 -0.12730879 0.47499076 0.076400779 -0.053908348 0.60603541
		 0.3918882 -0.053908348 0.47499076 0.076400779 0.068211555 0.34513876 0.3918882 0.068211555 0.34513876
		 0.076400779 -0.12730879 0.26924366 0.3918882 -0.12730879 0.26924366 0.2494798 -0.053908348 0.60220397
		 0.2494798 -0.12730879 0.60220397 0.23414451 0.068211555 0.34513876 0.23414451 -0.12730879 0.26924366
		 -0.076400787 -0.12730879 0.60603541 -0.3918882 -0.12730879 0.47499076 -0.076400787 -0.053908348 0.60603541
		 -0.3918882 -0.053908348 0.47499076 -0.076400787 0.068211555 0.34513876 -0.3918882 0.068211555 0.34513876
		 -0.076400787 -0.12730879 0.26924366 -0.3918882 -0.12730879 0.26924366 -0.24947977 -0.053908348 0.60220397
		 -0.24947977 -0.12730879 0.60220397 -0.23414454 0.068211555 0.34513876 -0.23414454 -0.12730879 0.26924366
		 -0.076400787 -0.12724787 0.18469498 -0.3918882 -0.12724787 0.18469498 -0.076400787 0.068211675 0.1153607
		 -0.3918882 0.068211675 0.1153607 -0.076400787 0.068211675 -0.16615725 -0.34056258 0.068211675 -0.16615725
		 -0.076400787 -0.12724787 -0.22909133 -0.34056258 -0.12724787 -0.22909133;
	setAttr -s 784 ".ed";
	setAttr ".ed[0:165]"  0 1 1 2 3 1 4 5 1 6 7 1 0 8 1 1 9 1 2 4 1 3 5 1 4 11 1
		 5 10 1 6 0 1 7 1 1 8 2 1 9 3 1 8 9 1 10 7 1 9 10 1 11 6 1 10 11 1 11 8 1 12 13 1
		 14 15 1 16 17 1 18 19 1 12 21 1 13 20 1 14 16 1 15 17 1 16 22 1 17 23 1 18 12 1 19 13 1
		 20 15 1 21 14 1 20 21 1 22 18 1 21 22 1 23 19 1 22 23 1 24 25 1 26 27 1 28 29 1 30 31 1
		 24 26 1 25 27 1 26 28 1 27 29 1 28 30 1 29 31 1 30 24 1 31 25 1 32 33 1 34 35 1 36 37 1
		 38 39 1 32 34 1 33 35 1 34 36 1 35 37 1 36 38 1 37 39 1 38 32 1 39 33 1 40 41 1 42 43 1
		 44 45 1 46 47 1 40 42 1 41 43 1 42 44 1 43 45 1 44 46 1 45 47 1 46 40 1 47 41 1 48 75 1
		 50 74 1 52 73 1 54 72 1 56 79 1 58 78 1 60 77 1 62 76 1 48 113 1 49 109 1 50 116 1
		 51 114 1 52 54 1 53 55 1 54 56 1 55 57 1 56 58 1 57 59 1 58 88 1 59 86 1 60 112 1
		 61 110 1 62 48 1 63 49 1 61 51 1 59 53 1 60 50 1 58 52 1 54 64 1 55 65 1 64 80 1
		 57 66 1 65 66 1 56 67 1 67 83 1 64 67 1 64 97 1 65 101 1 68 81 1 66 100 1 69 70 1
		 67 98 1 71 82 1 68 71 1 72 55 1 73 53 1 72 73 1 74 51 1 73 84 1 75 49 1 74 108 1
		 76 63 1 75 76 1 77 61 1 76 111 1 78 59 1 77 118 1 79 57 1 78 79 1 80 65 1 72 80 1
		 81 69 1 80 96 1 82 70 1 83 66 1 82 105 1 83 79 1 84 115 1 85 53 1 84 85 1 86 119 1
		 85 86 1 87 78 1 86 87 1 88 117 1 87 88 1 89 52 1 88 89 1 89 84 1 90 107 1 91 102 1
		 90 91 1 92 103 1 91 92 1 93 104 1 92 93 1 94 99 1 93 94 1 95 106 1 94 95 1 95 90 1;
	setAttr ".ed[166:331]" 96 91 1 97 92 1 96 97 1 98 93 1 97 98 1 99 83 1 98 99 1
		 100 95 1 99 100 1 101 90 1 100 101 1 101 96 1 102 81 1 103 68 1 102 103 1 104 71 1
		 103 104 1 105 94 1 104 105 1 106 70 1 105 106 1 107 69 1 106 107 1 107 102 1 108 75 1
		 109 51 1 108 109 1 110 63 1 109 110 1 111 77 1 110 111 1 112 62 1 111 112 1 113 50 1
		 112 113 1 113 108 1 114 85 1 115 74 1 114 115 1 116 89 1 115 116 1 117 60 1 116 117 1
		 118 87 1 117 118 1 119 61 1 118 119 1 119 114 1 68 120 0 81 121 0 120 121 0 82 122 0
		 71 123 0 123 122 0 120 123 0 69 124 0 121 124 0 70 125 0 124 125 0 122 125 0 126 127 1
		 127 128 1 129 128 1 126 129 1 127 130 1 130 131 1 128 131 1 130 132 1 132 133 1 131 133 1
		 132 134 1 134 135 1 133 135 1 134 136 1 136 137 1 135 137 1 136 138 1 138 139 1 137 139 1
		 138 140 1 140 141 1 139 141 1 140 126 1 141 129 1 142 126 1 142 127 1 142 130 1 142 132 1
		 142 134 1 142 136 1 142 138 1 142 140 1 128 143 1 129 143 1 131 143 1 133 143 1 135 143 1
		 137 143 1 139 143 1 141 143 1 144 145 1 145 146 1 146 147 1 147 148 1 148 149 1 149 150 1
		 150 151 1 151 144 1 152 153 1 153 154 1 154 155 1 155 156 1 156 157 1 157 158 1 158 159 1
		 159 152 1 144 152 1 145 153 1 146 154 1 147 155 1 148 156 1 149 157 1 150 158 1 151 159 1
		 160 144 1 160 145 1 160 146 1 160 147 1 160 148 1 160 149 1 160 150 1 160 151 1 152 161 1
		 153 161 1 154 161 1 155 161 1 156 161 1 157 161 1 158 161 1 159 161 1 162 163 1 164 165 1
		 166 167 1 168 169 1 162 164 1 163 165 1 164 166 1 165 167 1 166 168 1 167 169 1 168 162 1
		 169 163 1 170 171 1 172 173 1 174 175 1 176 177 1 170 172 1 171 173 1 172 174 1 173 175 1
		 174 176 1 175 177 1 176 170 1 177 171 1 178 179 1 180 181 1;
	setAttr ".ed[332:497]" 182 183 1 184 185 1 178 187 1 179 186 1 180 182 1 181 183 1
		 182 188 1 183 189 1 184 178 1 185 179 1 186 181 1 187 180 1 186 187 1 188 184 1 187 188 1
		 189 185 1 188 189 1 190 191 1 192 193 1 194 195 1 196 197 1 190 192 1 191 193 1 192 194 1
		 193 195 1 194 196 1 195 197 1 196 190 1 197 191 1 198 199 1 200 201 1 202 203 1 204 205 1
		 198 206 1 199 207 1 200 202 1 201 203 1 202 209 1 203 208 1 204 198 1 205 199 1 206 200 1
		 207 201 1 206 207 1 208 205 1 207 208 1 209 204 1 208 209 1 209 206 1 210 211 1 211 222 1
		 212 213 1 213 223 1 214 211 1 215 210 1 214 215 1 215 219 1 216 214 1 217 212 1 216 218 1
		 218 221 1 218 211 1 213 224 1 220 219 1 220 210 1 221 217 1 222 212 1 221 222 1 223 210 1
		 222 223 1 224 220 1 223 224 1 221 225 1 222 226 1 225 226 1 212 227 1 226 227 1 217 228 1
		 228 227 1 225 228 1 216 219 1 218 220 1 221 224 1 217 213 1 215 229 1 229 230 1 214 230 1
		 232 231 1 233 232 1 234 233 1 234 231 1 235 236 1 236 237 1 238 237 1 235 238 1 239 230 1
		 216 239 1 240 229 1 240 219 1 231 241 1 232 241 1 230 234 1 242 234 1 239 242 1 231 229 1
		 241 240 1 234 236 1 242 235 1 233 237 1 243 233 1 243 238 1 242 243 1 239 240 1 242 241 1
		 243 232 1 244 245 1 246 244 1 247 248 1 249 250 1 250 251 1 251 247 1 252 253 1 254 255 1
		 255 256 1 256 252 1 257 258 1 259 260 1 260 261 1 261 257 1 262 263 1 264 265 1 265 266 1
		 266 262 1 267 268 1 269 270 1 270 271 1 271 267 1 272 273 1 274 275 1 275 276 1 276 272 1
		 244 247 1 245 248 1 246 251 1 247 252 1 248 253 1 249 254 1 250 255 1 251 256 1 252 257 1
		 253 258 1 254 259 1 255 260 1 256 261 1 257 262 1 258 263 1 259 264 1 260 265 1 261 266 1
		 262 267 1 263 268 1 264 269 1 265 270 1 266 271 1 267 272 1 268 273 1;
	setAttr ".ed[498:663]" 269 274 1 270 275 1 271 276 1 277 244 1 277 245 1 277 246 1
		 272 278 1 273 278 1 274 278 1 275 278 1 276 278 1 249 279 1 250 280 1 279 280 1 251 281 1
		 280 281 1 246 282 1 282 281 1 277 283 1 283 282 1 279 284 1 280 285 1 284 285 0 281 286 1
		 285 286 0 282 287 1 287 286 0 283 288 1 288 287 0 289 245 1 290 248 1 289 290 1 291 289 1
		 292 290 1 291 292 1 293 253 1 290 293 1 249 294 1 294 295 1 254 295 1 294 292 1 292 296 1
		 295 296 1 296 293 1 297 258 1 293 297 1 295 298 1 259 298 1 296 299 1 298 299 1 299 297 1
		 300 263 1 297 300 1 298 301 1 264 301 1 299 302 1 301 302 1 302 300 1 303 268 1 300 303 1
		 301 304 1 269 304 1 302 305 1 304 305 1 305 303 1 306 273 1 303 306 1 304 307 1 274 307 1
		 305 308 1 307 308 1 308 306 1 277 289 1 277 291 1 306 278 1 307 278 1 308 278 1 279 309 1
		 294 309 1 309 310 1 292 310 1 311 310 1 291 311 1 283 311 1 284 312 0 309 312 1 312 313 0
		 310 313 1 314 313 0 311 314 1 288 314 0 287 285 0 314 312 0 288 284 0 315 316 1 317 318 1
		 319 320 1 321 322 1 315 317 1 316 318 1 317 319 1 318 320 1 319 321 1 320 322 1 321 315 1
		 322 316 1 323 324 1 325 326 1 327 328 1 329 330 1 323 325 1 324 326 1 325 327 1 326 328 1
		 327 329 1 328 330 1 329 323 1 330 324 1 331 332 1 332 333 1 333 334 1 334 335 1 335 336 1
		 336 337 1 337 338 1 338 331 1 339 340 1 340 341 1 341 342 1 342 343 1 343 344 1 344 345 1
		 345 346 1 346 339 1 331 339 1 332 340 1 333 341 1 334 342 1 335 343 1 336 344 1 337 345 1
		 338 346 1 347 331 1 347 332 1 347 333 1 347 334 1 347 335 1 347 336 1 347 337 1 347 338 1
		 339 348 1 340 348 1 341 348 1 342 348 1 343 348 1 344 348 1 345 348 1 346 348 1 349 350 1
		 350 351 1 351 352 1 352 353 1 353 354 1 354 355 1 355 356 1 356 349 1;
	setAttr ".ed[664:783]" 357 358 1 358 359 1 359 360 1 360 361 1 361 362 1 362 363 1
		 363 364 1 364 357 1 349 357 1 350 358 1 351 359 1 352 360 1 353 361 1 354 362 1 355 363 1
		 356 364 1 365 349 1 365 350 1 365 351 1 365 352 1 365 353 1 365 354 1 365 355 1 365 356 1
		 357 366 1 358 366 1 359 366 1 360 366 1 361 366 1 362 366 1 363 366 1 364 366 1 367 368 1
		 369 370 1 371 372 1 373 374 1 367 369 1 368 370 1 369 371 1 370 372 1 371 373 1 372 374 1
		 373 367 1 374 368 1 375 376 1 377 378 1 379 380 1 381 382 1 375 377 1 376 378 1 377 379 1
		 378 380 1 379 381 1 380 382 1 381 375 1 382 376 1 383 384 1 385 386 1 387 388 1 389 390 1
		 383 385 0 384 386 0 385 387 0 386 388 0 387 389 0 388 390 0 389 383 0 390 384 0 391 400 1
		 393 399 1 395 401 1 397 402 1 391 393 1 392 394 1 393 395 1 394 396 1 395 397 1 396 398 1
		 397 391 1 398 392 1 399 394 1 400 392 1 399 400 1 401 396 1 399 401 1 402 398 1 401 402 1
		 402 400 1 403 412 1 405 411 1 407 413 1 409 414 1 403 405 1 404 406 1 405 407 1 406 408 1
		 407 409 1 408 410 1 409 403 1 410 404 1 411 406 1 412 404 1 411 412 1 413 408 1 411 413 1
		 414 410 1 413 414 1 414 412 1 415 416 1 417 418 1 419 420 1 421 422 1 415 417 0 416 418 0
		 417 419 0 418 420 0 419 421 0 420 422 0 421 415 0 422 416 0;
	setAttr -s 410 -ch 1562 ".fc[0:409]" -type "polyFaces" 
		f 4 12 1 -14 -15
		mu 0 4 0 3 2 1
		f 4 6 2 -8 -2
		mu 0 4 3 5 4 2
		f 4 8 -19 -10 -3
		mu 0 4 5 7 6 4
		f 4 10 0 -12 -4
		mu 0 4 8 11 10 9
		f 4 13 7 9 -17
		mu 0 4 1 2 13 12
		f 4 -9 -7 -13 -20
		mu 0 4 14 15 3 0
		f 4 4 14 -6 -1
		mu 0 4 16 0 1 17
		f 4 5 16 15 11
		mu 0 4 17 1 12 18
		f 4 17 3 -16 18
		mu 0 4 7 8 9 6
		f 4 -18 19 -5 -11
		mu 0 4 19 14 0 16
		f 4 24 -35 -26 -21
		mu 0 4 20 21 22 23
		f 4 26 22 -28 -22
		mu 0 4 24 25 26 27
		f 4 35 23 -38 -39
		mu 0 4 28 29 30 31
		f 4 30 20 -32 -24
		mu 0 4 29 32 33 30
		f 6 25 32 27 29 37 31
		mu 0 6 23 22 27 34 35 36
		f 4 -36 -37 -25 -31
		mu 0 4 37 38 21 20
		f 4 33 21 -33 34
		mu 0 4 21 24 27 22
		f 4 -29 -27 -34 36
		mu 0 4 38 39 24 21
		f 4 28 38 -30 -23
		mu 0 4 25 28 31 26
		f 4 43 40 -45 -40
		mu 0 4 40 41 42 43
		f 4 45 41 -47 -41
		mu 0 4 41 44 45 42
		f 4 47 42 -49 -42
		mu 0 4 44 46 47 45
		f 4 49 39 -51 -43
		mu 0 4 46 48 49 47
		f 4 44 46 48 50
		mu 0 4 43 42 50 51
		f 4 -48 -46 -44 -50
		mu 0 4 52 53 41 40
		f 4 55 52 -57 -52
		mu 0 4 54 55 56 57
		f 4 57 53 -59 -53
		mu 0 4 55 58 59 56
		f 4 59 54 -61 -54
		mu 0 4 58 60 61 59
		f 4 61 51 -63 -55
		mu 0 4 60 62 63 61
		f 4 56 58 60 62
		mu 0 4 57 56 64 65
		f 4 -60 -58 -56 -62
		mu 0 4 66 67 55 54
		f 4 67 64 -69 -64
		mu 0 4 68 69 70 71
		f 4 69 65 -71 -65
		mu 0 4 69 72 73 70
		f 4 71 66 -73 -66
		mu 0 4 72 74 75 73
		f 4 73 63 -75 -67
		mu 0 4 74 76 77 75
		f 4 68 70 72 74
		mu 0 4 71 70 78 79
		f 4 -72 -70 -68 -74
		mu 0 4 80 81 69 68
		f 4 192 191 -123 125
		mu 0 4 82 83 84 85
		f 4 144 143 -121 123
		mu 0 4 86 87 88 89
		f 4 120 88 -120 121
		mu 0 4 89 88 90 91
		f 4 132 92 -131 133
		mu 0 4 92 93 94 95
		f 4 130 94 148 147
		mu 0 4 95 94 96 97
		f 4 128 96 196 195
		mu 0 4 98 99 100 101
		f 4 126 98 -125 127
		mu 0 4 102 103 104 105
		f 4 194 -97 99 -192
		mu 0 4 83 106 107 84
		f 4 146 -95 100 -144
		mu 0 4 87 108 109 88
		f 4 -101 -93 -91 -89
		mu 0 4 88 109 110 90
		f 4 200 199 -102 95
		mu 0 4 111 112 113 114
		f 4 152 151 -103 93
		mu 0 4 115 116 117 118
		f 4 102 87 89 91
		mu 0 4 118 117 119 120
		f 4 78 135 -106 -104
		mu 0 4 119 91 121 122
		f 4 90 106 -108 -105
		mu 0 4 90 93 123 124
		f 4 141 -80 108 109
		mu 0 4 125 92 126 127
		f 4 -90 103 110 -109
		mu 0 4 126 119 122 127
		f 4 105 137 168 -112
		mu 0 4 122 121 128 129
		f 4 107 114 176 -113
		mu 0 4 124 123 130 131
		f 4 -110 116 172 171
		mu 0 4 125 127 132 133
		f 4 -111 111 170 -117
		mu 0 4 127 122 129 132
		f 4 77 -122 -79 -88
		mu 0 4 117 89 91 119
		f 4 153 -124 -78 -152
		mu 0 4 116 86 89 117
		f 4 201 -126 -77 -200
		mu 0 4 112 82 85 113
		f 4 82 -128 -76 -98
		mu 0 4 134 102 105 135
		f 4 81 -196 198 -96
		mu 0 4 136 98 101 137
		f 4 80 -148 150 -94
		mu 0 4 138 95 97 139
		f 4 79 -134 -81 -92
		mu 0 4 126 92 95 138
		f 4 -136 119 104 -135
		mu 0 4 121 91 90 124
		f 4 177 -138 134 112
		mu 0 4 131 128 121 124
		f 4 -140 -172 174 -115
		mu 0 4 123 125 133 130
		f 4 -133 -142 139 -107
		mu 0 4 93 92 125 123
		f 4 122 86 204 203
		mu 0 4 85 84 140 141
		f 4 -100 -212 213 -87
		mu 0 4 84 107 142 140
		f 4 212 211 -129 131
		mu 0 4 143 144 99 98
		f 4 210 -132 -82 -208
		mu 0 4 145 143 98 136
		f 4 101 85 208 207
		mu 0 4 114 113 146 147
		f 4 76 -204 206 -86
		mu 0 4 113 85 141 146
		f 4 189 -156 -157 154
		mu 0 4 148 149 150 151
		f 4 -159 155 180 -158
		mu 0 4 152 150 149 153
		f 4 -161 157 182 -160
		mu 0 4 154 152 153 155
		f 4 -163 159 184 183
		mu 0 4 156 154 155 157
		f 4 -165 -184 186 -164
		mu 0 4 158 156 157 159
		f 4 -166 163 188 -155
		mu 0 4 151 158 159 148
		f 4 -169 166 158 -168
		mu 0 4 129 128 150 152
		f 4 -171 167 160 -170
		mu 0 4 132 129 152 154
		f 4 -173 169 162 161
		mu 0 4 133 132 154 156
		f 4 -175 -162 164 -174
		mu 0 4 130 133 156 158
		f 4 -177 173 165 -176
		mu 0 4 131 130 158 151
		f 4 -167 -178 175 156
		mu 0 4 150 128 131 151
		f 4 -181 178 -114 -180
		mu 0 4 153 149 160 161
		f 4 -183 179 118 -182
		mu 0 4 155 153 161 162
		f 4 -185 181 117 140
		mu 0 4 157 155 162 163
		f 4 -187 -141 138 -186
		mu 0 4 159 157 163 164
		f 4 -189 185 -116 -188
		mu 0 4 148 159 164 165
		f 4 -179 -190 187 -137
		mu 0 4 160 149 148 165
		f 4 124 84 -193 190
		mu 0 4 166 167 83 82
		f 4 -99 -194 -195 -85
		mu 0 4 167 168 106 83
		f 4 -197 193 -127 129
		mu 0 4 101 100 103 102
		f 4 -199 -130 -83 -198
		mu 0 4 137 101 102 134
		f 4 97 83 -201 197
		mu 0 4 169 170 112 111
		f 4 75 -191 -202 -84
		mu 0 4 170 166 82 112
		f 4 -205 202 -145 142
		mu 0 4 141 140 87 86
		f 4 -207 -143 -154 -206
		mu 0 4 146 141 86 116
		f 4 -209 205 -153 149
		mu 0 4 147 146 116 115
		f 4 -151 -210 -211 -150
		mu 0 4 139 97 143 145
		f 4 -149 145 -213 209
		mu 0 4 97 96 144 143
		f 4 -214 -146 -147 -203
		mu 0 4 140 142 108 87
		f 4 113 215 -217 -215
		mu 0 4 161 160 171 172
		f 4 -118 218 219 -218
		mu 0 4 163 162 173 174
		f 4 -119 214 220 -219
		mu 0 4 162 161 172 173
		f 4 136 221 -223 -216
		mu 0 4 160 165 175 171
		f 4 115 223 -225 -222
		mu 0 4 165 164 176 175
		f 4 -139 217 225 -224
		mu 0 4 164 163 174 176
		f 4 229 228 -228 -227
		mu 0 4 177 178 179 180
		f 4 227 232 -232 -231
		mu 0 4 180 179 181 182
		f 4 231 235 -235 -234
		mu 0 4 182 181 183 184
		f 4 234 238 -238 -237
		mu 0 4 184 183 185 186
		f 4 237 241 -241 -240
		mu 0 4 186 185 187 188
		f 4 240 244 -244 -243
		mu 0 4 188 187 189 190
		f 4 243 247 -247 -246
		mu 0 4 190 189 191 192
		f 4 246 249 -230 -249
		mu 0 4 192 191 193 194
		f 3 -252 250 226
		mu 0 3 195 196 197
		f 3 -253 251 230
		mu 0 3 198 196 195
		f 3 -254 252 233
		mu 0 3 199 196 198
		f 3 -255 253 236
		mu 0 3 200 196 199
		f 3 -256 254 239
		mu 0 3 201 196 200
		f 3 -257 255 242
		mu 0 3 202 196 201
		f 3 -258 256 245
		mu 0 3 203 196 202
		f 3 -251 257 248
		mu 0 3 197 196 203
		f 3 259 -259 -229
		mu 0 3 204 205 206
		f 3 258 -261 -233
		mu 0 3 206 205 207
		f 3 260 -262 -236
		mu 0 3 207 205 208
		f 3 261 -263 -239
		mu 0 3 208 205 209
		f 3 262 -264 -242
		mu 0 3 209 205 210
		f 3 263 -265 -245
		mu 0 3 210 205 211
		f 3 264 -266 -248
		mu 0 3 211 205 212
		f 3 265 -260 -250
		mu 0 3 212 205 204
		f 4 266 283 -275 -283
		mu 0 4 213 214 215 216
		f 4 267 284 -276 -284
		mu 0 4 214 217 218 215
		f 4 268 285 -277 -285
		mu 0 4 217 219 220 218
		f 4 269 286 -278 -286
		mu 0 4 219 221 222 220
		f 4 270 287 -279 -287
		mu 0 4 221 223 224 222
		f 4 271 288 -280 -288
		mu 0 4 223 225 226 224
		f 4 272 289 -281 -289
		mu 0 4 225 227 228 226
		f 4 273 282 -282 -290
		mu 0 4 227 229 230 228
		f 3 -267 -291 291
		mu 0 3 231 232 233
		f 3 -268 -292 292
		mu 0 3 234 231 233
		f 3 -269 -293 293
		mu 0 3 235 234 233
		f 3 -270 -294 294
		mu 0 3 236 235 233
		f 3 -271 -295 295
		mu 0 3 237 236 233
		f 3 -272 -296 296
		mu 0 3 238 237 233
		f 3 -273 -297 297
		mu 0 3 239 238 233
		f 3 -274 -298 290
		mu 0 3 232 239 233
		f 3 274 299 -299
		mu 0 3 240 241 242
		f 3 275 300 -300
		mu 0 3 241 243 242
		f 3 276 301 -301
		mu 0 3 243 244 242
		f 3 277 302 -302
		mu 0 3 244 245 242
		f 3 278 303 -303
		mu 0 3 245 246 242
		f 3 279 304 -304
		mu 0 3 246 247 242
		f 3 280 305 -305
		mu 0 3 247 248 242
		f 3 281 298 -306
		mu 0 3 248 240 242
		f 4 306 311 -308 -311
		mu 0 4 249 250 251 252
		f 4 307 313 -309 -313
		mu 0 4 252 251 253 254
		f 4 308 315 -310 -315
		mu 0 4 254 253 255 256
		f 4 309 317 -307 -317
		mu 0 4 256 255 257 258
		f 4 -318 -316 -314 -312
		mu 0 4 250 259 260 251
		f 4 316 310 312 314
		mu 0 4 261 249 252 262
		f 4 318 323 -320 -323
		mu 0 4 263 264 265 266
		f 4 319 325 -321 -325
		mu 0 4 266 265 267 268
		f 4 320 327 -322 -327
		mu 0 4 268 267 269 270
		f 4 321 329 -319 -329
		mu 0 4 270 269 271 272
		f 4 -330 -328 -326 -324
		mu 0 4 264 273 274 265
		f 4 328 322 324 326
		mu 0 4 275 263 266 276
		f 4 330 335 344 -335
		mu 0 4 277 278 279 280
		f 4 331 337 -333 -337
		mu 0 4 281 282 283 284
		f 4 348 347 -334 -346
		mu 0 4 285 286 287 288
		f 4 333 341 -331 -341
		mu 0 4 288 287 289 290
		f 6 -342 -348 -340 -338 -343 -336
		mu 0 6 278 291 292 293 282 279
		f 4 340 334 346 345
		mu 0 4 294 277 280 295
		f 4 -345 342 -332 -344
		mu 0 4 280 279 282 281
		f 4 -347 343 336 338
		mu 0 4 295 280 281 296
		f 4 332 339 -349 -339
		mu 0 4 284 283 286 285
		f 4 349 354 -351 -354
		mu 0 4 297 298 299 300
		f 4 350 356 -352 -356
		mu 0 4 300 299 301 302
		f 4 351 358 -353 -358
		mu 0 4 302 301 303 304
		f 4 352 360 -350 -360
		mu 0 4 304 303 305 306
		f 4 -361 -359 -357 -355
		mu 0 4 298 307 308 299
		f 4 359 353 355 357
		mu 0 4 309 297 300 310
		f 4 375 374 -363 -374
		mu 0 4 311 312 313 314
		f 4 362 368 -364 -368
		mu 0 4 314 313 315 316
		f 4 363 370 379 -370
		mu 0 4 316 315 317 318
		f 4 364 372 -362 -372
		mu 0 4 319 320 321 322
		f 4 377 -371 -369 -375
		mu 0 4 312 323 324 313
		f 4 380 373 367 369
		mu 0 4 325 311 314 326
		f 4 361 366 -376 -366
		mu 0 4 327 328 312 311
		f 4 -373 -377 -378 -367
		mu 0 4 328 329 323 312
		f 4 -380 376 -365 -379
		mu 0 4 318 317 320 319
		f 4 371 365 -381 378
		mu 0 4 330 327 311 325
		f 4 386 381 -386 387
		mu 0 4 331 332 333 334
		f 4 -385 -384 -399 401
		mu 0 4 335 336 337 338
		f 4 406 408 -411 -412
		mu 0 4 339 340 341 342
		f 4 389 385 -394 -392
		mu 0 4 343 334 333 344
		f 4 396 -387 388 -396
		mu 0 4 345 346 347 348
		f 3 384 403 -395
		mu 0 3 349 350 351
		f 4 393 382 -400 -393
		mu 0 4 344 333 352 353
		f 4 -401 -402 -383 -382
		mu 0 4 332 335 338 333
		f 4 -404 400 -397 -403
		mu 0 4 351 350 346 345
		f 4 399 405 -407 -405
		mu 0 4 353 352 340 339
		f 4 398 407 -409 -406
		mu 0 4 352 354 341 340
		f 4 -391 409 410 -408
		mu 0 4 354 355 342 341
		f 4 -398 404 411 -410
		mu 0 4 355 353 339 342
		f 4 391 413 395 -413
		mu 0 4 356 357 358 359
		f 4 392 414 402 -414
		mu 0 4 360 361 362 363
		f 4 397 415 394 -415
		mu 0 4 364 365 366 367
		f 3 -416 390 383
		mu 0 3 368 369 370
		f 4 -388 418 -418 -417
		mu 0 4 371 372 373 374
		f 4 -423 421 420 419
		mu 0 4 375 376 377 378
		f 4 426 425 -425 -424
		mu 0 4 379 380 381 382
		f 4 428 427 -419 -390
		mu 0 4 383 384 373 372
		f 4 430 -389 416 -430
		mu 0 4 385 386 387 388
		f 3 432 -432 -420
		mu 0 3 389 390 391
		f 4 435 434 -434 -428
		mu 0 4 384 392 393 373
		f 4 417 433 422 436
		mu 0 4 374 373 376 375
		f 4 437 429 -437 431
		mu 0 4 390 385 388 391
		f 4 439 423 -439 -435
		mu 0 4 392 379 382 393
		f 4 438 424 -441 -422
		mu 0 4 393 382 381 394
		f 4 440 -426 -443 441
		mu 0 4 394 381 380 395
		f 4 442 -427 -440 443
		mu 0 4 395 380 379 392
		f 4 412 -431 -445 -429
		mu 0 4 396 397 398 399
		f 4 444 -438 -446 -436
		mu 0 4 400 401 402 403
		f 4 445 -433 -447 -444
		mu 0 4 404 405 406 407
		f 3 -421 -442 446
		mu 0 3 408 409 410
		f 4 447 474 -450 -474
		mu 0 4 411 412 413 414
		f 4 448 473 -453 -476
		mu 0 4 415 416 417 418
		f 4 449 477 -454 -477
		mu 0 4 414 413 419 420
		f 4 450 479 -455 -479
		mu 0 4 421 422 423 424
		f 4 451 480 -456 -480
		mu 0 4 422 418 425 423
		f 4 452 476 -457 -481
		mu 0 4 418 417 426 425
		f 4 453 482 -458 -482
		mu 0 4 420 419 427 428
		f 4 454 484 -459 -484
		mu 0 4 424 423 429 430
		f 4 455 485 -460 -485
		mu 0 4 423 425 431 429
		f 4 456 481 -461 -486
		mu 0 4 425 426 432 431
		f 4 457 487 -462 -487
		mu 0 4 428 427 433 434
		f 4 458 489 -463 -489
		mu 0 4 430 429 435 436
		f 4 459 490 -464 -490
		mu 0 4 429 431 437 435
		f 4 460 486 -465 -491
		mu 0 4 431 432 438 437
		f 4 461 492 -466 -492
		mu 0 4 434 433 439 440
		f 4 462 494 -467 -494
		mu 0 4 436 435 441 442
		f 4 463 495 -468 -495
		mu 0 4 435 437 443 441
		f 4 464 491 -469 -496
		mu 0 4 437 438 444 443
		f 4 465 497 -470 -497
		mu 0 4 440 439 445 446
		f 4 466 499 -471 -499
		mu 0 4 442 441 447 448
		f 4 467 500 -472 -500
		mu 0 4 441 443 449 447
		f 4 468 496 -473 -501
		mu 0 4 443 444 450 449
		f 3 -448 -502 502
		mu 0 3 412 411 451
		f 3 -449 -504 501
		mu 0 3 416 415 452
		f 3 469 505 -505
		mu 0 3 446 445 453
		f 3 470 507 -507
		mu 0 3 448 447 454
		f 3 471 508 -508
		mu 0 3 447 449 455
		f 3 472 504 -509
		mu 0 3 449 450 456
		f 4 -451 509 511 -511
		mu 0 4 457 458 459 460
		f 4 -452 510 513 -513
		mu 0 4 461 462 463 464
		f 4 475 512 -516 -515
		mu 0 4 465 466 467 468
		f 4 503 514 -518 -517
		mu 0 4 469 470 471 472
		f 4 -512 518 520 -520
		mu 0 4 473 474 475 476
		f 4 -514 519 522 -522
		mu 0 4 477 478 479 480
		f 4 515 521 -525 -524
		mu 0 4 481 482 483 484
		f 4 517 523 -527 -526
		mu 0 4 485 486 487 488
		f 4 529 528 -475 -528
		mu 0 4 489 490 491 492
		f 4 532 531 -530 -531
		mu 0 4 493 494 495 496
		f 4 534 533 -478 -529
		mu 0 4 490 497 498 491
		f 4 478 537 -537 -536
		mu 0 4 499 500 501 502
		f 4 536 540 -540 -539
		mu 0 4 502 501 503 494
		f 4 539 541 -535 -532
		mu 0 4 494 503 504 495
		f 4 543 542 -483 -534
		mu 0 4 497 505 506 498
		f 4 483 545 -545 -538
		mu 0 4 500 507 508 501
		f 4 544 547 -547 -541
		mu 0 4 501 508 509 503
		f 4 546 548 -544 -542
		mu 0 4 503 509 510 504
		f 4 550 549 -488 -543
		mu 0 4 505 511 512 506
		f 4 488 552 -552 -546
		mu 0 4 507 513 514 508
		f 4 551 554 -554 -548
		mu 0 4 508 514 515 509
		f 4 553 555 -551 -549
		mu 0 4 509 515 516 510
		f 4 557 556 -493 -550
		mu 0 4 511 517 518 512
		f 4 493 559 -559 -553
		mu 0 4 513 519 520 514
		f 4 558 561 -561 -555
		mu 0 4 514 520 521 515
		f 4 560 562 -558 -556
		mu 0 4 515 521 522 516
		f 4 564 563 -498 -557
		mu 0 4 517 523 524 518
		f 4 498 566 -566 -560
		mu 0 4 519 525 526 520
		f 4 565 568 -568 -562
		mu 0 4 520 526 527 521
		f 4 567 569 -565 -563
		mu 0 4 521 527 528 522
		f 3 -503 570 527
		mu 0 3 492 529 489
		f 3 -571 571 530
		mu 0 3 496 530 493
		f 3 572 -506 -564
		mu 0 3 523 531 524
		f 3 506 -574 -567
		mu 0 3 525 532 526
		f 3 573 -575 -569
		mu 0 3 526 533 527
		f 3 574 -573 -570
		mu 0 3 527 534 528
		f 4 576 -576 -510 535
		mu 0 4 535 536 537 538
		f 4 578 -578 -577 538
		mu 0 4 539 540 541 542
		f 4 580 579 -579 -533
		mu 0 4 543 544 545 546
		f 4 516 581 -581 -572
		mu 0 4 547 548 549 550
		f 4 583 -583 -519 575
		mu 0 4 551 552 553 554
		f 4 585 -585 -584 577
		mu 0 4 555 556 557 558
		f 4 587 586 -586 -580
		mu 0 4 559 560 561 562
		f 4 525 588 -588 -582
		mu 0 4 563 564 565 566
		f 3 590 584 -587
		mu 0 3 565 557 561
		f 3 -590 524 -523
		mu 0 3 476 484 480
		f 4 591 582 -591 -589
		mu 0 4 488 553 557 565
		f 4 -521 -592 526 589
		mu 0 4 476 553 488 484
		f 4 592 597 -594 -597
		mu 0 4 567 568 569 570
		f 4 593 599 -595 -599
		mu 0 4 570 569 571 572
		f 4 594 601 -596 -601
		mu 0 4 572 571 573 574
		f 4 595 603 -593 -603
		mu 0 4 574 573 575 576
		f 4 -604 -602 -600 -598
		mu 0 4 568 577 578 569
		f 4 602 596 598 600
		mu 0 4 579 567 570 580
		f 4 608 605 -610 -605
		mu 0 4 581 582 583 584
		f 4 610 606 -612 -606
		mu 0 4 582 585 586 583
		f 4 612 607 -614 -607
		mu 0 4 585 587 588 586
		f 4 614 604 -616 -608
		mu 0 4 587 589 590 588
		f 4 609 611 613 615
		mu 0 4 584 583 591 592
		f 4 -613 -611 -609 -615
		mu 0 4 593 594 582 581
		f 4 616 633 -625 -633
		mu 0 4 595 596 597 598
		f 4 617 634 -626 -634
		mu 0 4 596 599 600 597
		f 4 618 635 -627 -635
		mu 0 4 599 601 602 600
		f 4 619 636 -628 -636
		mu 0 4 601 603 604 602
		f 4 620 637 -629 -637
		mu 0 4 603 605 606 604
		f 4 621 638 -630 -638
		mu 0 4 605 607 608 606
		f 4 622 639 -631 -639
		mu 0 4 607 609 610 608
		f 4 623 632 -632 -640
		mu 0 4 609 611 612 610
		f 3 -617 -641 641
		mu 0 3 613 614 615
		f 3 -618 -642 642
		mu 0 3 616 613 615
		f 3 -619 -643 643
		mu 0 3 617 616 615
		f 3 -620 -644 644
		mu 0 3 618 617 615
		f 3 -621 -645 645
		mu 0 3 619 618 615
		f 3 -622 -646 646
		mu 0 3 620 619 615
		f 3 -623 -647 647
		mu 0 3 621 620 615
		f 3 -624 -648 640
		mu 0 3 614 621 615
		f 3 624 649 -649
		mu 0 3 622 623 624
		f 3 625 650 -650
		mu 0 3 623 625 624
		f 3 626 651 -651
		mu 0 3 625 626 624
		f 3 627 652 -652
		mu 0 3 626 627 624
		f 3 628 653 -653
		mu 0 3 627 628 624
		f 3 629 654 -654
		mu 0 3 628 629 624
		f 3 630 655 -655
		mu 0 3 629 630 624
		f 3 631 648 -656
		mu 0 3 630 622 624
		f 4 672 664 -674 -657
		mu 0 4 631 632 633 634
		f 4 673 665 -675 -658
		mu 0 4 634 633 635 636
		f 4 674 666 -676 -659
		mu 0 4 636 635 637 638
		f 4 675 667 -677 -660
		mu 0 4 638 637 639 640
		f 4 676 668 -678 -661
		mu 0 4 640 639 641 642
		f 4 677 669 -679 -662
		mu 0 4 642 641 643 644
		f 4 678 670 -680 -663
		mu 0 4 644 643 645 646
		f 4 679 671 -673 -664
		mu 0 4 646 645 647 648
		f 3 -682 680 656
		mu 0 3 649 650 651
		f 3 -683 681 657
		mu 0 3 652 650 649
		f 3 -684 682 658
		mu 0 3 653 650 652
		f 3 -685 683 659
		mu 0 3 654 650 653
		f 3 -686 684 660
		mu 0 3 655 650 654
		f 3 -687 685 661
		mu 0 3 656 650 655
		f 3 -688 686 662
		mu 0 3 657 650 656
		f 3 -681 687 663
		mu 0 3 651 650 657
		f 3 688 -690 -665
		mu 0 3 658 659 660
		f 3 689 -691 -666
		mu 0 3 660 659 661
		f 3 690 -692 -667
		mu 0 3 661 659 662
		f 3 691 -693 -668
		mu 0 3 662 659 663
		f 3 692 -694 -669
		mu 0 3 663 659 664
		f 3 693 -695 -670
		mu 0 3 664 659 665
		f 3 694 -696 -671
		mu 0 3 665 659 666
		f 3 695 -689 -672
		mu 0 3 666 659 658
		f 4 700 697 -702 -697
		mu 0 4 667 668 669 670
		f 4 702 698 -704 -698
		mu 0 4 668 671 672 669
		f 4 704 699 -706 -699
		mu 0 4 671 673 674 672
		f 4 706 696 -708 -700
		mu 0 4 673 675 676 674
		f 4 701 703 705 707
		mu 0 4 670 669 677 678
		f 4 -705 -703 -701 -707
		mu 0 4 679 680 668 667
		f 4 708 713 -710 -713
		mu 0 4 681 682 683 684
		f 4 709 715 -711 -715
		mu 0 4 684 683 685 686
		f 4 710 717 -712 -717
		mu 0 4 686 685 687 688
		f 4 711 719 -709 -719
		mu 0 4 688 687 689 690
		f 4 -720 -718 -716 -714
		mu 0 4 682 691 692 683
		f 4 718 712 714 716
		mu 0 4 693 681 684 694
		f 4 720 725 -722 -725
		mu 0 4 695 696 697 698
		f 4 721 727 -723 -727
		mu 0 4 698 697 699 700
		f 4 722 729 -724 -729
		mu 0 4 700 699 701 702
		f 4 723 731 -721 -731
		mu 0 4 702 701 703 704
		f 4 -728 -726 -732 -730
		mu 0 4 705 706 707 708
		f 4 726 728 730 724
		mu 0 4 709 710 711 712
		f 4 745 737 -745 746
		mu 0 4 713 714 715 716
		f 4 733 748 -735 -739
		mu 0 4 717 716 718 719
		f 4 734 750 -736 -741
		mu 0 4 719 718 720 721
		f 4 735 751 -733 -743
		mu 0 4 721 720 722 723
		f 4 -744 -742 -740 -738
		mu 0 4 714 724 725 715
		f 4 742 736 738 740
		mu 0 4 726 727 717 728
		f 4 732 -747 -734 -737
		mu 0 4 727 713 716 717
		f 4 -749 744 739 -748
		mu 0 4 718 716 715 729
		f 4 -751 747 741 -750
		mu 0 4 720 718 729 730
		f 4 -752 749 743 -746
		mu 0 4 722 720 730 731
		f 4 -767 764 -758 -766
		mu 0 4 732 733 734 735
		f 4 758 754 -769 -754
		mu 0 4 736 737 738 733
		f 4 760 755 -771 -755
		mu 0 4 737 739 740 738
		f 4 762 752 -772 -756
		mu 0 4 739 741 742 740
		f 4 757 759 761 763
		mu 0 4 735 734 743 744
		f 4 -761 -759 -757 -763
		mu 0 4 745 746 736 747
		f 4 756 753 766 -753
		mu 0 4 747 736 733 732
		f 4 767 -760 -765 768
		mu 0 4 738 748 734 733
		f 4 769 -762 -768 770
		mu 0 4 740 749 748 738
		f 4 765 -764 -770 771
		mu 0 4 742 750 749 740
		f 4 776 773 -778 -773
		mu 0 4 751 752 753 754
		f 4 778 774 -780 -774
		mu 0 4 752 755 756 753
		f 4 780 775 -782 -775
		mu 0 4 755 757 758 756
		f 4 782 772 -784 -776
		mu 0 4 757 759 760 758
		f 4 781 783 777 779
		mu 0 4 761 762 763 764
		f 4 -777 -783 -781 -779
		mu 0 4 765 766 767 768;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
createNode transform -n "cEyes" -p "model";
	setAttr -l on ".tx";
	setAttr -l on ".ty";
	setAttr -l on ".tz";
	setAttr -l on ".rx";
	setAttr -l on ".ry";
	setAttr -l on ".rz";
	setAttr -l on ".sx";
	setAttr -l on ".sy";
	setAttr -l on ".sz";
	setAttr ".rp" -type "double3" 0 2.0707858800888066 0.38810797035694122 ;
	setAttr ".sp" -type "double3" 0 2.0707858800888066 0.38810797035694122 ;
createNode mesh -n "cEyesShape" -p "cEyes";
	setAttr -k off ".v";
	setAttr -s 6 ".iog[0].og";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr ".vcs" 2;
createNode mesh -n "cEyesShapeOrig" -p "cEyes";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 158 ".uvst[0].uvsp[0:157]" -type "float2" 0 0.125 0.125 0.125
		 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25
		 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25
		 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875
		 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875
		 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625
		 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75
		 0.75 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625
		 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0
		 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1
		 0.8125 1 0.9375 1 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.25 0.25 0.25 0.125 0.375
		 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875
		 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375
		 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5
		 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75
		 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25
		 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875
		 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125
		 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 116 ".pt[0:115]" -type "float3"  0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0;
	setAttr -s 116 ".vt[0:115]"  0.096608937 1.95974684 0.36638552 0.085297883 1.96368837 0.37209731
		 0.073986806 1.95771158 0.37562421 0.06930162 1.94531679 0.37490001 0.073986828 1.93376529 0.37034908
		 0.085297883 1.92982328 0.36463717 0.096608959 1.93580043 0.36111036 0.10129414 1.94819498 0.3618345
		 0.10818139 1.96973968 0.36933732 0.087281287 1.97702301 0.37989146 0.066381156 1.9659791 0.38640824
		 0.057724059 1.94307685 0.38507015 0.066381156 1.92173183 0.376661 0.087281287 1.91444814 0.36610678
		 0.10818139 1.92549241 0.35959005 0.11683851 1.94839513 0.36092821 0.11755699 1.97557104 0.37514672
		 0.090249643 1.98508775 0.3889364 0.062942348 1.97065771 0.39745092 0.051631261 1.94073462 0.39570266
		 0.062942348 1.91284597 0.38471553 0.090249643 1.90332937 0.37092581 0.11755697 1.91775942 0.36241132
		 0.12886804 1.9476831 0.36415973 0.12330829 1.97635376 0.38292935 0.093751065 1.98665464 0.39785525
		 0.06419383 1.97103572 0.40707126 0.05195085 1.93864667 0.40517887 0.06419386 1.90846097 0.39328665
		 0.093751088 1.8981601 0.37836075 0.12330834 1.91377902 0.36914474 0.13555132 1.94616771 0.37103704
		 0.12455984 1.97196853 0.39150041 0.097252518 1.98148513 0.40529022 0.069945201 1.96705508 0.41380468
		 0.058634114 1.93713164 0.4120563 0.069945201 1.90924346 0.40106931 0.097252503 1.89972723 0.38727966
		 0.12455984 1.91415703 0.37876511 0.1358709 1.94408011 0.38051337 0.12112099 1.96308267 0.399555
		 0.10022088 1.97036636 0.41010922 0.079320729 1.95932209 0.41662589 0.070663653 1.93641961 0.41528782
		 0.079320729 1.91507518 0.40687877 0.10022088 1.90779161 0.39632457 0.12112099 1.91883576 0.38980785
		 0.12977812 1.94173789 0.39114588 0.11351534 1.95104933 0.40586695 0.10220426 1.95499146 0.41157883
		 0.090893209 1.94901419 0.41510564 0.086208023 1.93661928 0.41438141 0.090893209 1.92506778 0.40983048
		 0.10220426 1.92112589 0.4041186 0.11351534 1.92710316 0.40059179 0.11820053 1.93949747 0.40131593
		 0.084601417 1.94711411 0.36674076 0.10290076 1.93770063 0.40947524 -0.096608937 1.95974684 0.36638552
		 -0.085297883 1.96368837 0.37209731 -0.087281287 1.97702301 0.37989146 -0.10818139 1.96973968 0.36933732
		 -0.073986806 1.95771158 0.37562421 -0.066381156 1.9659791 0.38640824 -0.06930162 1.94531679 0.37490001
		 -0.057724059 1.94307685 0.38507015 -0.073986828 1.93376529 0.37034908 -0.066381156 1.92173183 0.376661
		 -0.085297883 1.92982328 0.36463717 -0.087281287 1.91444814 0.36610678 -0.096608959 1.93580043 0.36111036
		 -0.10818139 1.92549241 0.35959005 -0.10129414 1.94819498 0.3618345 -0.11683851 1.94839513 0.36092821
		 -0.090249643 1.98508775 0.3889364 -0.11755699 1.97557104 0.37514672 -0.062942348 1.97065771 0.39745092
		 -0.051631261 1.94073462 0.39570266 -0.062942348 1.91284597 0.38471553 -0.090249643 1.90332937 0.37092581
		 -0.11755697 1.91775942 0.36241132 -0.12886804 1.9476831 0.36415973 -0.093751065 1.98665464 0.39785525
		 -0.12330829 1.97635376 0.38292935 -0.06419383 1.97103572 0.40707126 -0.05195085 1.93864667 0.40517887
		 -0.06419386 1.90846097 0.39328665 -0.093751088 1.8981601 0.37836075 -0.12330834 1.91377902 0.36914474
		 -0.13555132 1.94616771 0.37103704 -0.097252518 1.98148513 0.40529022 -0.12455984 1.97196853 0.39150041
		 -0.069945201 1.96705508 0.41380468 -0.058634114 1.93713164 0.4120563 -0.069945201 1.90924346 0.40106931
		 -0.097252503 1.89972723 0.38727966 -0.12455984 1.91415703 0.37876511 -0.1358709 1.94408011 0.38051337
		 -0.10022088 1.97036636 0.41010922 -0.12112099 1.96308267 0.399555 -0.079320729 1.95932209 0.41662589
		 -0.070663653 1.93641961 0.41528782 -0.079320729 1.91507518 0.40687877 -0.10022088 1.90779161 0.39632457
		 -0.12112099 1.91883576 0.38980785 -0.12977812 1.94173789 0.39114588 -0.10220426 1.95499146 0.41157883
		 -0.11351534 1.95104933 0.40586695 -0.090893209 1.94901419 0.41510564 -0.086208023 1.93661928 0.41438141
		 -0.090893209 1.92506778 0.40983048 -0.10220426 1.92112589 0.4041186 -0.11351534 1.92710316 0.40059179
		 -0.11820053 1.93949747 0.40131593 -0.084601417 1.94711411 0.36674076 -0.10290076 1.93770063 0.40947524;
	setAttr -s 240 ".ed";
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
		 58 59 1 59 60 1 61 60 1 58 61 1 59 62 1 62 63 1 60 63 1 62 64 1 64 65 1 63 65 1 64 66 1
		 66 67 1 65 67 1 66 68 1 68 69 1 67 69 1 68 70 1 70 71 1 69 71 1 70 72 1 72 73 1 71 73 1
		 72 58 1 73 61 1 60 74 1 75 74 1 61 75 1 63 76 1 74 76 1 65 77 1 76 77 1 67 78 1 77 78 1
		 69 79 1 78 79 1 71 80 1 79 80 1 73 81 1 80 81 1 81 75 1 74 82 1 83 82 1 75 83 1 76 84 1
		 82 84 1 77 85 1;
	setAttr ".ed[166:239]" 84 85 1 78 86 1 85 86 1 79 87 1 86 87 1 80 88 1 87 88 1
		 81 89 1 88 89 1 89 83 1 82 90 1 91 90 1 83 91 1 84 92 1 90 92 1 85 93 1 92 93 1 86 94 1
		 93 94 1 87 95 1 94 95 1 88 96 1 95 96 1 89 97 1 96 97 1 97 91 1 90 98 1 99 98 1 91 99 1
		 92 100 1 98 100 1 93 101 1 100 101 1 94 102 1 101 102 1 95 103 1 102 103 1 96 104 1
		 103 104 1 97 105 1 104 105 1 105 99 1 98 106 1 107 106 1 99 107 1 100 108 1 106 108 1
		 101 109 1 108 109 1 102 110 1 109 110 1 103 111 1 110 111 1 104 112 1 111 112 1 105 113 1
		 112 113 1 113 107 1 114 58 1 114 59 1 114 62 1 114 64 1 114 66 1 114 68 1 114 70 1
		 114 72 1 106 115 1 107 115 1 108 115 1 109 115 1 110 115 1 111 115 1 112 115 1 113 115 1;
	setAttr -s 128 -ch 480 ".fc[0:127]" -type "polyFaces" 
		f 4 0 57 -9 -57
		mu 0 4 0 1 2 3
		f 4 1 58 -10 -58
		mu 0 4 1 4 5 2
		f 4 2 59 -11 -59
		mu 0 4 4 6 7 5
		f 4 3 60 -12 -60
		mu 0 4 6 8 9 7
		f 4 4 61 -13 -61
		mu 0 4 8 10 11 9
		f 4 5 62 -14 -62
		mu 0 4 10 12 13 11
		f 4 6 63 -15 -63
		mu 0 4 12 14 15 13
		f 4 7 56 -16 -64
		mu 0 4 14 16 17 15
		f 4 8 65 -17 -65
		mu 0 4 3 2 18 19
		f 4 9 66 -18 -66
		mu 0 4 2 5 20 18
		f 4 10 67 -19 -67
		mu 0 4 5 7 21 20
		f 4 11 68 -20 -68
		mu 0 4 7 9 22 21
		f 4 12 69 -21 -69
		mu 0 4 9 11 23 22
		f 4 13 70 -22 -70
		mu 0 4 11 13 24 23
		f 4 14 71 -23 -71
		mu 0 4 13 15 25 24
		f 4 15 64 -24 -72
		mu 0 4 15 17 26 25
		f 4 16 73 -25 -73
		mu 0 4 19 18 27 28
		f 4 17 74 -26 -74
		mu 0 4 18 20 29 27
		f 4 18 75 -27 -75
		mu 0 4 20 21 30 29
		f 4 19 76 -28 -76
		mu 0 4 21 22 31 30
		f 4 20 77 -29 -77
		mu 0 4 22 23 32 31
		f 4 21 78 -30 -78
		mu 0 4 23 24 33 32
		f 4 22 79 -31 -79
		mu 0 4 24 25 34 33
		f 4 23 72 -32 -80
		mu 0 4 25 26 35 34
		f 4 24 81 -33 -81
		mu 0 4 28 27 36 37
		f 4 25 82 -34 -82
		mu 0 4 27 29 38 36
		f 4 26 83 -35 -83
		mu 0 4 29 30 39 38
		f 4 27 84 -36 -84
		mu 0 4 30 31 40 39
		f 4 28 85 -37 -85
		mu 0 4 31 32 41 40
		f 4 29 86 -38 -86
		mu 0 4 32 33 42 41
		f 4 30 87 -39 -87
		mu 0 4 33 34 43 42
		f 4 31 80 -40 -88
		mu 0 4 34 35 44 43
		f 4 32 89 -41 -89
		mu 0 4 37 36 45 46
		f 4 33 90 -42 -90
		mu 0 4 36 38 47 45
		f 4 34 91 -43 -91
		mu 0 4 38 39 48 47
		f 4 35 92 -44 -92
		mu 0 4 39 40 49 48
		f 4 36 93 -45 -93
		mu 0 4 40 41 50 49
		f 4 37 94 -46 -94
		mu 0 4 41 42 51 50
		f 4 38 95 -47 -95
		mu 0 4 42 43 52 51
		f 4 39 88 -48 -96
		mu 0 4 43 44 53 52
		f 4 40 97 -49 -97
		mu 0 4 46 45 54 55
		f 4 41 98 -50 -98
		mu 0 4 45 47 56 54
		f 4 42 99 -51 -99
		mu 0 4 47 48 57 56
		f 4 43 100 -52 -100
		mu 0 4 48 49 58 57
		f 4 44 101 -53 -101
		mu 0 4 49 50 59 58
		f 4 45 102 -54 -102
		mu 0 4 50 51 60 59
		f 4 46 103 -55 -103
		mu 0 4 51 52 61 60
		f 4 47 96 -56 -104
		mu 0 4 52 53 62 61
		f 3 -1 -105 105
		mu 0 3 1 0 63
		f 3 -2 -106 106
		mu 0 3 4 1 64
		f 3 -3 -107 107
		mu 0 3 6 4 65
		f 3 -4 -108 108
		mu 0 3 8 6 66
		f 3 -5 -109 109
		mu 0 3 10 8 67
		f 3 -6 -110 110
		mu 0 3 12 10 68
		f 3 -7 -111 111
		mu 0 3 14 12 69
		f 3 -8 -112 104
		mu 0 3 16 14 70
		f 3 48 113 -113
		mu 0 3 55 54 71
		f 3 49 114 -114
		mu 0 3 54 56 72
		f 3 50 115 -115
		mu 0 3 56 57 73
		f 3 51 116 -116
		mu 0 3 57 58 74
		f 3 52 117 -117
		mu 0 3 58 59 75
		f 3 53 118 -118
		mu 0 3 59 60 76
		f 3 54 119 -119
		mu 0 3 60 61 77
		f 3 55 112 -120
		mu 0 3 61 62 78
		f 4 123 122 -122 -121
		mu 0 4 79 80 81 82
		f 4 121 126 -126 -125
		mu 0 4 82 81 83 84
		f 4 125 129 -129 -128
		mu 0 4 84 83 85 86
		f 4 128 132 -132 -131
		mu 0 4 86 85 87 88
		f 4 131 135 -135 -134
		mu 0 4 88 87 89 90
		f 4 134 138 -138 -137
		mu 0 4 90 89 91 92
		f 4 137 141 -141 -140
		mu 0 4 92 91 93 94
		f 4 140 143 -124 -143
		mu 0 4 94 93 95 96
		f 4 146 145 -145 -123
		mu 0 4 80 97 98 81
		f 4 144 148 -148 -127
		mu 0 4 81 98 99 83
		f 4 147 150 -150 -130
		mu 0 4 83 99 100 85
		f 4 149 152 -152 -133
		mu 0 4 85 100 101 87
		f 4 151 154 -154 -136
		mu 0 4 87 101 102 89
		f 4 153 156 -156 -139
		mu 0 4 89 102 103 91
		f 4 155 158 -158 -142
		mu 0 4 91 103 104 93
		f 4 157 159 -147 -144
		mu 0 4 93 104 105 95
		f 4 162 161 -161 -146
		mu 0 4 97 106 107 98
		f 4 160 164 -164 -149
		mu 0 4 98 107 108 99
		f 4 163 166 -166 -151
		mu 0 4 99 108 109 100
		f 4 165 168 -168 -153
		mu 0 4 100 109 110 101
		f 4 167 170 -170 -155
		mu 0 4 101 110 111 102
		f 4 169 172 -172 -157
		mu 0 4 102 111 112 103
		f 4 171 174 -174 -159
		mu 0 4 103 112 113 104
		f 4 173 175 -163 -160
		mu 0 4 104 113 114 105
		f 4 178 177 -177 -162
		mu 0 4 106 115 116 107
		f 4 176 180 -180 -165
		mu 0 4 107 116 117 108
		f 4 179 182 -182 -167
		mu 0 4 108 117 118 109
		f 4 181 184 -184 -169
		mu 0 4 109 118 119 110
		f 4 183 186 -186 -171
		mu 0 4 110 119 120 111
		f 4 185 188 -188 -173
		mu 0 4 111 120 121 112
		f 4 187 190 -190 -175
		mu 0 4 112 121 122 113
		f 4 189 191 -179 -176
		mu 0 4 113 122 123 114
		f 4 194 193 -193 -178
		mu 0 4 115 124 125 116
		f 4 192 196 -196 -181
		mu 0 4 116 125 126 117
		f 4 195 198 -198 -183
		mu 0 4 117 126 127 118
		f 4 197 200 -200 -185
		mu 0 4 118 127 128 119
		f 4 199 202 -202 -187
		mu 0 4 119 128 129 120
		f 4 201 204 -204 -189
		mu 0 4 120 129 130 121
		f 4 203 206 -206 -191
		mu 0 4 121 130 131 122
		f 4 205 207 -195 -192
		mu 0 4 122 131 132 123
		f 4 210 209 -209 -194
		mu 0 4 124 133 134 125
		f 4 208 212 -212 -197
		mu 0 4 125 134 135 126
		f 4 211 214 -214 -199
		mu 0 4 126 135 136 127
		f 4 213 216 -216 -201
		mu 0 4 127 136 137 128
		f 4 215 218 -218 -203
		mu 0 4 128 137 138 129
		f 4 217 220 -220 -205
		mu 0 4 129 138 139 130
		f 4 219 222 -222 -207
		mu 0 4 130 139 140 131
		f 4 221 223 -211 -208
		mu 0 4 131 140 141 132
		f 3 -226 224 120
		mu 0 3 82 142 79
		f 3 -227 225 124
		mu 0 3 84 143 82
		f 3 -228 226 127
		mu 0 3 86 144 84
		f 3 -229 227 130
		mu 0 3 88 145 86
		f 3 -230 228 133
		mu 0 3 90 146 88
		f 3 -231 229 136
		mu 0 3 92 147 90
		f 3 -232 230 139
		mu 0 3 94 148 92
		f 3 -225 231 142
		mu 0 3 96 149 94
		f 3 233 -233 -210
		mu 0 3 133 150 134
		f 3 232 -235 -213
		mu 0 3 134 151 135
		f 3 234 -236 -215
		mu 0 3 135 152 136
		f 3 235 -237 -217
		mu 0 3 136 153 137
		f 3 236 -238 -219
		mu 0 3 137 154 138
		f 3 237 -239 -221
		mu 0 3 138 155 139
		f 3 238 -240 -223
		mu 0 3 139 156 140
		f 3 239 -234 -224
		mu 0 3 140 157 141;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
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
	setAttr ".rp" -type "double3" 0 0.1283784281328906 0 ;
	setAttr ".sp" -type "double3" 0 0.1283784281328906 0 ;
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
	setAttr ".vcs" 2;
createNode mesh -n "cJointsShapeOrig" -p "cJoints";
	setAttr -k off ".v";
	setAttr ".io" yes;
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 1091 ".uvst[0].uvsp";
	setAttr ".uvst[0].uvsp[0:249]" -type "float2" 0.375 0.3125 0.40625 0.3125
		 0.40625 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125
		 0.46875 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625
		 0.3125 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985
		 0.5 1.4901161e-08 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0.3125 0.375 0.68843985
		 0.40625 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985
		 0.46875 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625
		 0.68843985 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625
		 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458
		 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625
		 0.61048543 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375
		 0.38951457 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.5 0 0.625
		 0 0.625 0.25 0.5 0.25 0.375 0.375 0.625 0.375 0.625 0.4375 0.375 0.4375 0.375 0.5
		 0.625 0.5 0.625 0.75 0.375 0.75 0.625 1 0.5 1 0.375 1 0.875 0 0.875 0.25 0.8125 0.25
		 0.75 0.25 0.6875 0.25 0.125 0 0.375 0 0.375 0.25 0.3125 0.25 0.25 0.25 0.1875 0.25
		 0.125 0.25 0.375 0.3125 0.625 0.3125 0.5 0.125 0.625 0.125 0.625 0.25 0.5 0.25 0.625
		 0.5 0.5 0.5 0.5 0.75 0.625 0.75 0.625 1 0.5 1 0.875 0.125 0.875 0.25 0.125 0 0.375
		 0 0.375 0.125 0.125 0.125 0.375 0.25 0.375 0.5 0.375 0.75 0.375 1 0.5 0 0.625 0 0.875
		 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.33333334 0.375 0.33333334
		 0.625 0.41666669 0.375 0.41666669 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625
		 0.83333331 0.375 0.83333331 0.625 0.91666663 0.375 0.91666663 0.625 0.99999994 0.375
		 0.99999994 0.79166669 0 0.875 0 0.875 0.25 0.79166669 0.25 0.70833337 0 0.70833337
		 0.25 0.125 0 0.20833334 0 0.20833334 0.25 0.125 0.25 0.29166669 0 0.29166669 0.25
		 0.125 0.125 0.25 0.125 0.25 0.25 0.125 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5
		 0.25 0.625 0.125 0.625 0.25 0.25 0.375 0.125 0.375 0.375 0.375 0.5 0.375 0.625 0.375
		 0.25 0.5 0.125 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.25 0.625 0.125 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.25 0.75 0.125 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.25 0.875
		 0.125 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.1875 0 0.3125 0 0.4375 0 0.5625 0
		 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.375 0.3125 0.40625 0.3125 0.40625 0.68843985
		 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875 0.68843985
		 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125 0.5625
		 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985 0.5 1.4901161e-08
		 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375 0.15625 0.38951457
		 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543
		 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457
		 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0.3125 0.40625 0.3125 0.40625
		 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875
		 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125
		 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985;
	setAttr ".uvst[0].uvsp[250:499]" 0.625 0.3125 0.625 0.68843985 0.5 1.4901161e-08
		 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375 0.15625 0.38951457
		 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543
		 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457
		 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125 0.125 0.125 0.25 0
		 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625
		 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375
		 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0.125
		 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625
		 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625
		 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1
		 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875
		 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125
		 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375
		 1 0.125 0.125 0.125 0.25 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5
		 0.125 0.625 0.25 0.625 0.125 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375
		 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.125 0.625 0.25 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.125 0.875
		 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.1875 0 0.3125 0 0.4375 0 0.5625 0
		 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.375 0.3125 0.375 0.68843985 0.40625 0.68843985
		 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875 0.3125
		 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985 0.5625
		 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5 1.4901161e-08
		 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458 0.34375 0.15625 0.38951457
		 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543
		 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457
		 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.375 0.3125 0.375 0.68843985 0.40625
		 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875
		 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985
		 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5
		 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0 0.25 0.125
		 0.25 0.125 0.125 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625
		 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375
		 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1
		 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5;
	setAttr ".uvst[0].uvsp[500:749]" 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75
		 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25
		 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875
		 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125
		 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.375 0.3125 0.40625 0.3125 0.40625
		 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875
		 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125
		 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985
		 0.5 1.4901161e-08 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125 0.125 0.125
		 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625
		 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125
		 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375
		 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1
		 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875
		 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75
		 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875
		 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875
		 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125
		 1 0.9375 1 0.375 0.3125 0.375 0.68843985 0.40625 0.68843985 0.40625 0.3125 0.4375
		 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875 0.3125 0.5 0.68843985 0.5 0.3125
		 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985 0.5625 0.3125 0.59375 0.68843985
		 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543
		 0.04576458 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125
		 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 0.83749998 0.5 1
		 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875 0.61048543
		 0.73326457 0.65625 0.84375 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.25 0.25 0.25 0.125
		 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.75 0.25 0.75 0.125
		 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25 0.375 0.375 0.375
		 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375
		 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.25 0.625 0.375
		 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25
		 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875;
	setAttr ".uvst[0].uvsp[750:999]" 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875
		 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875
		 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125
		 1 0.9375 1 0.375 0.3125 0.375 0.68843985 0.40625 0.68843985 0.40625 0.3125 0.4375
		 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875 0.3125 0.5 0.68843985 0.5 0.3125
		 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985 0.5625 0.3125 0.59375 0.68843985
		 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543
		 0.04576458 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125
		 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 0.83749998 0.5 1
		 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875 0.61048543
		 0.73326457 0.65625 0.84375 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.25 0.25 0.25 0.125
		 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.75 0.25 0.75 0.125
		 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25 0.375 0.375 0.375
		 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375
		 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.25 0.625 0.375
		 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25
		 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875
		 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625
		 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875
		 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.375 0.3125 0.40625 0.3125
		 0.40625 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125
		 0.46875 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625
		 0.3125 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985
		 0.5 1.4901161e-08 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125 0.125 0.125
		 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625
		 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125
		 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375
		 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1
		 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875
		 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75
		 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875
		 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875
		 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1;
	setAttr ".uvst[0].uvsp[1000:1090]" 0.6875 1 0.8125 1 0.9375 1 0 0.125 0.125 0.125
		 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25
		 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25
		 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875
		 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875
		 0.5 1 0.5 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0
		 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25
		 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875
		 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375
		 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5
		 0.75 0.5 0.875 0.5 1 0.5 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125
		 0 0.9375 0;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 717 ".pt";
	setAttr ".pt[0:165]" -type "float3"  0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.045414791 
		0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 
		0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 
		0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414761 
		0 0 0.045414761 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0;
	setAttr ".pt[166:331]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.045414791 
		0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 
		0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 
		0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414791 0 0 0.045414761 
		0 0 0.045414761 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0;
	setAttr ".pt[332:497]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0;
	setAttr ".pt[498:663]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0;
	setAttr ".pt[664:716]" 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 0 0 0.12837842 
		0 0 0.12837842 0;
	setAttr -s 717 ".vt";
	setAttr ".vt[0:165]"  0.42826718 1.88384855 -0.15234271 0.42826724 1.93360126 -0.17295089
		 0.42826718 1.98335373 -0.15234271 0.42826718 2.0039622784 -0.10259007 0.42826718 1.98335373 -0.052837469
		 0.42826724 1.93360126 -0.032229282 0.42826718 1.88384855 -0.052837469 0.42826718 1.86324036 -0.10259007
		 0.53275549 1.88384867 -0.15234271 0.53275549 1.93360126 -0.17295089 0.53275549 1.98335373 -0.15234271
		 0.53275549 2.0039622784 -0.10259007 0.53275549 1.98335373 -0.052837469 0.53275549 1.93360126 -0.032229282
		 0.53275549 1.88384867 -0.052837469 0.53275549 1.86324036 -0.10259007 0.42826724 1.93360126 -0.10259007
		 0.53275549 1.93360126 -0.10259007 -0.42826718 1.88384855 -0.15234271 -0.42826724 1.93360126 -0.17295089
		 -0.53275549 1.93360126 -0.17295089 -0.53275549 1.88384867 -0.15234271 -0.42826718 1.98335373 -0.15234271
		 -0.53275549 1.98335373 -0.15234271 -0.42826718 2.0039622784 -0.10259007 -0.53275549 2.0039622784 -0.10259007
		 -0.42826718 1.98335373 -0.052837469 -0.53275549 1.98335373 -0.052837469 -0.42826724 1.93360126 -0.032229282
		 -0.53275549 1.93360126 -0.032229282 -0.42826718 1.88384855 -0.052837469 -0.53275549 1.88384867 -0.052837469
		 -0.42826718 1.86324036 -0.10259007 -0.53275549 1.86324036 -0.10259007 -0.42826724 1.93360126 -0.10259007
		 -0.53275549 1.93360126 -0.10259007 -0.066879705 2.14842844 0.39370093 0.066879705 2.14842844 0.39370093
		 -0.066879705 2.94842839 0.37983814 0.066879705 2.94842839 0.37983814 -0.066879705 2.54616523 -0.559358
		 0.066879705 2.54616523 -0.559358 -0.066879705 2.14842844 -0.61075109 0.066879705 2.14842844 -0.61075109
		 -0.066879705 2.91254783 -0.08674936 0.066879705 2.91254783 -0.08674936 0.066879705 2.76666546 -0.36287662
		 -0.066879705 2.76666546 -0.36287662 0.066879705 2.94842839 0.17751783 -0.066879705 2.94842839 0.17751783
		 -1.4210855e-15 2.94842839 0.41221666 -1.4210855e-15 2.14842844 0.42607945 -0.11649784 1.21573424 0.20681803
		 0.11649784 1.21573424 0.20681803 -0.11649784 1.39728761 0.15588994 0.11649784 1.39728761 0.15588994
		 -0.11649784 1.37548196 0.03431239 0.11649784 1.37548196 0.03431239 -0.11649784 1.19491839 0.085240453
		 0.11649784 1.19491839 0.085240453 -4.5839274e-16 1.37548196 0.03431239 -5.1856103e-16 1.39728761 0.15588994
		 -4.5839274e-16 1.21573424 0.20681803 -5.1856103e-16 1.19491839 0.085240453 -0.11649785 1.30626225 0.18135399
		 -5.1856103e-16 1.30626225 0.18135399 0.11649785 1.30626225 0.18135399 0.11649785 1.28445661 0.059776425
		 -0.11649785 1.28445661 0.059776425 -0.064066365 0.72978175 0.12167175 0.064066365 0.72978175 0.12167175
		 -0.097950533 0.85790086 0.18304932 0.097950533 0.85790086 0.18304934 -0.064066365 0.85615408 0.081275091
		 0.064066365 0.85615408 0.081275091 -0.064066365 0.84481502 -0.068556808 0.064066365 0.84481502 -0.068556808
		 -0.12920246 0.85216904 -0.16711831 0.12920246 0.85216904 -0.16711831 -0.08711765 0.73949981 -0.15784664
		 0.08711765 0.73949981 -0.15784664 -0.064066365 0.66983724 -0.059285142 0.064066365 0.66983724 -0.059285142
		 -0.064066365 0.66983724 0.053449221 0.064066365 0.66983724 0.053449221 0.12966724 0.061787248 -0.035657614
		 0.12966724 0.087000966 -0.025213748 0.12966725 0.097444892 3.5168654e-10 0.12966724 0.087000966 0.025213748
		 0.12966724 0.061787248 0.035657637 0.14986566 0.061787367 -0.065886691 0.14986566 0.10837638 -0.046588935
		 0.14986566 0.12767422 3.5168654e-10 0.14986566 0.10837638 0.046588935 0.14986566 0.061787367 0.065886691
		 0.18009472 0.061787367 -0.086085096 0.18009473 0.12265885 -0.060871352 0.18009473 0.14787257 3.5168654e-10
		 0.18009473 0.12265885 0.060871352 0.18009472 0.061787367 0.086085126 0.21575235 0.061787367 -0.09317787
		 0.21575239 0.12767422 -0.065886691 0.21575239 0.15496528 3.5168654e-10 0.21575239 0.12767422 0.065886691
		 0.21575235 0.061787367 0.09317787 0.25140995 0.061787367 -0.086085096 0.25141001 0.12265885 -0.060871352
		 0.25140995 0.14787245 3.5168654e-10 0.25141001 0.12265885 0.060871352 0.25140995 0.061787367 0.086085126
		 0.28163904 0.061787367 -0.065886691 0.28163907 0.10837626 -0.046588935 0.28163907 0.1276741 3.5168654e-10
		 0.28163907 0.10837626 0.046588935 0.28163904 0.061787367 0.065886691 0.30183747 0.061787367 -0.035657614
		 0.30183747 0.087001204 -0.025213748 0.30183747 0.097445011 3.5168654e-10 0.30183747 0.087001204 0.025213748
		 0.30183747 0.061787367 0.035657637 0.12257449 0.061787367 3.5168654e-10 0.30893022 0.061787367 3.5168654e-10
		 0.087937422 -0.080803156 0.16935448 0.087937415 -0.022855997 0.14535198 0.087937422 0.035091162 0.16935448
		 0.087937392 0.059093714 0.22730167 0.087937422 0.035091162 0.28524885 0.087937415 -0.022855997 0.30925137
		 0.087937422 -0.080803156 0.28524885 0.087937422 -0.10480565 0.22730167 0.38172808 -0.080803156 0.16935448
		 0.38172805 -0.022855997 0.14535198 0.38172808 0.035091162 0.16935448 0.38172808 0.059093714 0.22730167
		 0.38172808 0.035091162 0.28524885 0.38172805 -0.022855997 0.30925137 0.38172808 -0.080803156 0.28524885
		 0.38172808 -0.10480565 0.22730167 0.087937415 -0.022855997 0.22730167 0.38172805 -0.022855997 0.22730167
		 0.16810155 0.4743197 -0.044575922 0.16810155 0.52040625 -0.063713238 0.16810155 0.56649303 -0.044575922
		 0.16810155 0.58595896 0.0016255453 0.16810155 0.56649303 0.047827028 0.16810155 0.52040625 0.066964298
		 0.16810155 0.4743197 0.047827028 0.16810155 0.45522976 0.0016255453 0.26513177 0.4743197 -0.044575922
		 0.26513177 0.52040625 -0.063713238 0.26513177 0.56649303 -0.044575922 0.26513177 0.58595896 0.0016255453
		 0.26513177 0.56649303 0.047827028 0.26513177 0.52040625 0.066964298 0.26513177 0.4743197 0.047827028
		 0.26513177 0.45522976 0.0016255453 0.16810155 0.52040625 0.0016255453 0.26513177 0.52040625 0.0016255453
		 0.14941688 0.83488441 -0.016443931 0.15617771 0.84987473 -0.023255222 0.16293836 0.86486435 -0.016443931
		 0.16573867 0.87107325 -7.4505806e-09 0.16293836 0.86486435 0.016443916 0.15617771 0.84987473 0.023255214
		 0.14941688 0.83488441 0.016443916 0.14661658 0.82867551 -7.4505806e-09;
	setAttr ".vt[166:331]" 0.15569377 0.81676102 -0.030384414 0.1681859 0.84445882 -0.042970061
		 0.18067794 0.87215638 -0.030384414 0.18585232 0.88362908 -7.4505806e-09 0.18067794 0.87215638 0.030384399
		 0.1681859 0.84445882 0.042970031 0.15569377 0.81676102 0.030384414 0.15051948 0.80528855 -7.4505806e-09
		 0.16983576 0.8001647 -0.039699145 0.18615744 0.8363533 -0.056143075 0.20247911 0.8725419 -0.039699145
		 0.20923969 0.88753176 -7.4505806e-09 0.20247911 0.8725419 0.03969913 0.18615744 0.8363533 0.056143042
		 0.16983576 0.8001647 0.03969913 0.16307503 0.78517461 -7.4505806e-09 0.1896898 0.78762197 -0.042970061
		 0.20735624 0.82679224 -0.060768813 0.22502281 0.86596274 -0.042970061 0.23234043 0.8821876 -7.4505806e-09
		 0.22502281 0.86596274 0.042970031 0.20735624 0.82679224 0.060768809 0.1896898 0.78762197 0.042970031
		 0.18237209 0.77139688 -7.4505806e-09 0.2122335 0.78104258 -0.039699145 0.22855517 0.81723118 -0.056143075
		 0.24487686 0.85342002 -0.039699145 0.25163758 0.86840987 -7.4505806e-09 0.24487686 0.85342002 0.03969913
		 0.22855517 0.81723118 0.056143042 0.2122335 0.78104258 0.03969913 0.20547278 0.76605248 -7.4505806e-09
		 0.23403457 0.7814281 -0.030384414 0.2465267 0.8091259 -0.042970061 0.25901875 0.83682346 -0.030384414
		 0.26419312 0.84829617 -7.4505806e-09 0.25901875 0.83682346 0.030384399 0.2465267 0.8091259 0.042970031
		 0.23403457 0.7814281 0.030384414 0.22886029 0.7699554 -7.4505806e-09 0.25177416 0.78871989 -0.016443931
		 0.25853491 0.80370998 -0.023255222 0.26529551 0.8186996 -0.016443931 0.26809585 0.82490849 -7.4505806e-09
		 0.26529551 0.8186996 0.016443916 0.25853491 0.80370998 0.023255214 0.25177416 0.78871989 0.016443916
		 0.24897385 0.782511 -7.4505806e-09 0.151961 0.85177636 -7.4505806e-09 0.26275158 0.80180812 -7.4505806e-09
		 -0.12966725 0.061787248 -0.035657614 -0.12966725 0.087000966 -0.025213748 -0.12966725 0.097444892 3.5168651e-10
		 -0.12966725 0.087000966 0.025213748 -0.12966725 0.061787248 0.035657637 -0.14986564 0.061787367 -0.065886691
		 -0.14986566 0.10837638 -0.046588935 -0.14986566 0.12767422 3.5168651e-10 -0.14986566 0.10837638 0.046588935
		 -0.14986564 0.061787367 0.065886691 -0.18009472 0.061787367 -0.086085096 -0.18009472 0.12265885 -0.060871352
		 -0.18009472 0.14787257 3.5168651e-10 -0.18009472 0.12265885 0.060871352 -0.18009472 0.061787367 0.086085126
		 -0.21575236 0.061787367 -0.09317787 -0.21575236 0.12767422 -0.065886691 -0.21575236 0.15496528 3.5168651e-10
		 -0.21575236 0.12767422 0.065886691 -0.21575236 0.061787367 0.09317787 -0.25140995 0.061787367 -0.086085096
		 -0.25141001 0.12265885 -0.060871352 -0.25140995 0.14787245 3.5168651e-10 -0.25141001 0.12265885 0.060871352
		 -0.25140995 0.061787367 0.086085126 -0.28163907 0.061787367 -0.065886691 -0.2816391 0.10837626 -0.046588935
		 -0.2816391 0.1276741 3.5168651e-10 -0.2816391 0.10837626 0.046588935 -0.28163907 0.061787367 0.065886691
		 -0.3018375 0.061787367 -0.035657614 -0.3018375 0.087001204 -0.025213748 -0.3018375 0.097445011 3.5168651e-10
		 -0.3018375 0.087001204 0.025213748 -0.3018375 0.061787367 0.035657637 -0.12257449 0.061787367 3.5168651e-10
		 -0.30893022 0.061787367 3.5168651e-10 -0.087937422 -0.080803156 0.16935448 -0.087937407 -0.022855997 0.14535198
		 -0.087937422 0.035091162 0.16935448 -0.087937392 0.059093714 0.22730167 -0.087937422 0.035091162 0.28524885
		 -0.087937407 -0.022855997 0.30925137 -0.087937422 -0.080803156 0.28524885 -0.087937422 -0.10480565 0.22730167
		 -0.38172811 -0.080803156 0.16935448 -0.38172805 -0.022855997 0.14535198 -0.38172811 0.035091162 0.16935448
		 -0.38172811 0.059093714 0.22730167 -0.38172811 0.035091162 0.28524885 -0.38172805 -0.022855997 0.30925137
		 -0.38172811 -0.080803156 0.28524885 -0.38172811 -0.10480565 0.22730167 -0.087937407 -0.022855997 0.22730167
		 -0.38172805 -0.022855997 0.22730167 -0.16810155 0.4743197 -0.044575922 -0.16810155 0.52040625 -0.063713238
		 -0.16810155 0.56649303 -0.044575922 -0.16810155 0.58595896 0.0016255453 -0.16810155 0.56649303 0.047827028
		 -0.16810155 0.52040625 0.066964298 -0.16810155 0.4743197 0.047827028 -0.16810155 0.45522976 0.0016255453
		 -0.26513177 0.4743197 -0.044575922 -0.26513177 0.52040625 -0.063713238 -0.26513177 0.56649303 -0.044575922
		 -0.26513177 0.58595896 0.0016255453 -0.26513177 0.56649303 0.047827028 -0.26513177 0.52040625 0.066964298
		 -0.26513177 0.4743197 0.047827028 -0.26513177 0.45522976 0.0016255453 -0.16810155 0.52040625 0.0016255453
		 -0.26513177 0.52040625 0.0016255453 -0.14941686 0.83488441 -0.016443931 -0.1561777 0.84987473 -0.023255222
		 -0.16293836 0.86486435 -0.016443931 -0.16573867 0.87107325 -7.4505806e-09 -0.16293836 0.86486435 0.016443916
		 -0.1561777 0.84987473 0.023255214 -0.14941686 0.83488441 0.016443916 -0.14661658 0.82867551 -7.4505806e-09
		 -0.15569377 0.81676102 -0.030384414 -0.16818592 0.84445882 -0.042970061 -0.18067795 0.87215638 -0.030384414
		 -0.18585229 0.88362908 -7.4505806e-09 -0.18067795 0.87215638 0.030384399 -0.16818592 0.84445882 0.042970031
		 -0.15569377 0.81676102 0.030384414 -0.15051946 0.80528855 -7.4505806e-09 -0.16983575 0.8001647 -0.039699145
		 -0.18615741 0.8363533 -0.056143075 -0.20247912 0.8725419 -0.039699145 -0.20923972 0.88753176 -7.4505806e-09
		 -0.20247912 0.8725419 0.03969913 -0.18615741 0.8363533 0.056143042 -0.16983575 0.8001647 0.03969913
		 -0.16307503 0.78517461 -7.4505806e-09 -0.18968979 0.78762197 -0.042970061 -0.20735624 0.82679224 -0.060768813
		 -0.22502279 0.86596274 -0.042970061 -0.23234046 0.8821876 -7.4505806e-09 -0.22502279 0.86596274 0.042970031
		 -0.20735624 0.82679224 0.060768809 -0.18968979 0.78762197 0.042970031 -0.18237209 0.77139688 -7.4505806e-09
		 -0.21223348 0.78104258 -0.039699145 -0.22855517 0.81723118 -0.056143075 -0.24487686 0.85342002 -0.039699145
		 -0.25163758 0.86840987 -7.4505806e-09 -0.24487686 0.85342002 0.03969913 -0.22855517 0.81723118 0.056143042
		 -0.21223348 0.78104258 0.03969913 -0.2054728 0.76605248 -7.4505806e-09 -0.23403457 0.7814281 -0.030384414
		 -0.24652669 0.8091259 -0.042970061 -0.25901872 0.83682346 -0.030384414;
	setAttr ".vt[332:497]" -0.26419312 0.84829617 -7.4505806e-09 -0.25901872 0.83682346 0.030384399
		 -0.24652669 0.8091259 0.042970031 -0.23403457 0.7814281 0.030384414 -0.22886026 0.7699554 -7.4505806e-09
		 -0.25177419 0.78871989 -0.016443931 -0.25853491 0.80370998 -0.023255222 -0.26529551 0.8186996 -0.016443931
		 -0.26809585 0.82490849 -7.4505806e-09 -0.26529551 0.8186996 0.016443916 -0.25853491 0.80370998 0.023255214
		 -0.25177419 0.78871989 0.016443916 -0.24897385 0.782511 -7.4505806e-09 -0.151961 0.85177636 -7.4505806e-09
		 -0.26275158 0.80180812 -7.4505806e-09 0.65774709 1.33660221 -0.13529861 0.6116603 1.33660221 -0.15443592
		 0.56557351 1.33660221 -0.13529861 0.54610765 1.33660221 -0.089097142 0.56557351 1.33660221 -0.042895652
		 0.6116603 1.33660221 -0.023758387 0.65774709 1.33660221 -0.042895652 0.67683685 1.33660221 -0.089097142
		 0.65774709 1.43363249 -0.13529861 0.6116603 1.43363249 -0.15443592 0.56557351 1.43363249 -0.13529861
		 0.54610765 1.43363249 -0.089097142 0.56557351 1.43363249 -0.042895652 0.6116603 1.43363249 -0.023758387
		 0.65774709 1.43363249 -0.042895652 0.67683685 1.43363249 -0.089097142 0.6116603 1.33660221 -0.089097142
		 0.6116603 1.43363249 -0.089097142 0.21994211 1.35522223 -0.099932604 0.21994211 1.37618625 -0.10861594
		 0.21994212 1.39714956 -0.099932604 0.21994212 1.40583277 -0.078969151 0.21994212 1.39714956 -0.058005702
		 0.21994211 1.37618625 -0.049322344 0.21994211 1.35522223 -0.058005702 0.21994212 1.34653902 -0.078969151
		 0.23673567 1.33745062 -0.11770455 0.23673567 1.37618625 -0.13374931 0.23673567 1.4149214 -0.11770455
		 0.23673563 1.43096626 -0.078969151 0.23673567 1.4149214 -0.040233746 0.23673567 1.37618625 -0.024189016
		 0.23673567 1.33745062 -0.040233728 0.23673567 1.32140613 -0.078969151 0.26186901 1.32557607 -0.1295794
		 0.26186901 1.37618625 -0.15054286 0.26186901 1.42679632 -0.1295794 0.26186895 1.44775963 -0.078969151
		 0.26186901 1.42679632 -0.028358908 0.26186901 1.37618625 -0.0073954696 0.26186901 1.32557607 -0.028358908
		 0.26186901 1.3046124 -0.078969151 0.2915158 1.32140601 -0.13374931 0.2915158 1.37618601 -0.15643995
		 0.29151583 1.43096638 -0.13374931 0.29151583 1.45365679 -0.078969151 0.29151583 1.43096638 -0.024189016
		 0.2915158 1.37618601 -0.001498336 0.2915158 1.32140601 -0.024189016 0.29151583 1.29871523 -0.078969151
		 0.32116258 1.32557607 -0.1295794 0.32116261 1.37618625 -0.15054286 0.32116264 1.42679632 -0.1295794
		 0.32116258 1.44775999 -0.078969151 0.32116264 1.42679632 -0.028358908 0.32116261 1.37618625 -0.0073954696
		 0.32116258 1.32557607 -0.028358908 0.32116261 1.3046124 -0.078969151 0.34629595 1.33745062 -0.11770455
		 0.34629595 1.37618625 -0.13374931 0.34629595 1.4149214 -0.11770455 0.34629592 1.43096626 -0.078969151
		 0.34629595 1.4149214 -0.040233746 0.34629595 1.37618625 -0.024189016 0.34629595 1.33745062 -0.040233728
		 0.34629595 1.32140613 -0.078969151 0.3630895 1.35522258 -0.099932604 0.3630895 1.37618625 -0.10861594
		 0.3630895 1.39714956 -0.099932604 0.3630895 1.40583277 -0.078969151 0.3630895 1.39714956 -0.058005702
		 0.3630895 1.37618625 -0.049322344 0.3630895 1.35522258 -0.058005702 0.3630895 1.34653938 -0.078969151
		 0.21404499 1.37618625 -0.078969151 0.36898664 1.37618601 -0.078969151 -1.22453165 1.42273104 -0.23264734
		 -1.19201851 1.43619823 -0.23264739 -1.15950537 1.42273104 -0.23264734 -1.14603853 1.39021802 -0.23264715
		 -1.15950537 1.35770512 -0.23264711 -1.19201851 1.34423792 -0.23264699 -1.22453141 1.35770512 -0.23264711
		 -1.23799849 1.39021802 -0.23264715 -1.22453165 1.42273104 0.071965203 -1.19201851 1.43619823 0.07196518
		 -1.15950537 1.42273104 0.071965203 -1.14603853 1.39021802 0.07196524 -1.15950537 1.35770512 0.071965314
		 -1.19201851 1.34423792 0.071965374 -1.22453141 1.35770512 0.071965314 -1.23799849 1.39021802 0.07196524
		 -1.19201851 1.39021802 -0.23264715 -1.19201851 1.39021802 0.07196524 -0.94227874 1.36778426 0.068226516
		 -0.94227874 1.37472379 0.084979907 -0.94227874 1.36778426 0.10173324 -0.94227874 1.35103095 0.10867222
		 -0.94227874 1.33427775 0.1017333 -0.94227874 1.32733822 0.084979951 -0.94227874 1.33427775 0.068226591
		 -0.94227874 1.35103095 0.061286867 -0.95569956 1.38198721 0.054023482 -0.95569956 1.39480948 0.084979668
		 -0.95569956 1.38198698 0.11593591 -0.95569956 1.35103095 0.12875864 -0.95569956 1.3200748 0.11593603
		 -0.95569956 1.30725253 0.084979735 -0.95569956 1.3200748 0.054023523 -0.95569956 1.35103095 0.041201562
		 -0.97578537 1.39147699 0.04453386 -0.97578537 1.40823042 0.084979825 -0.97578537 1.39147699 0.1254259
		 -0.97578537 1.35103095 0.14217931 -0.97578537 1.31058502 0.12542595 -0.97578537 1.29383159 0.084979907
		 -0.97578561 1.31058478 0.044533871 -0.97578561 1.35103095 0.027780509 -0.99947822 1.39480948 0.041201521
		 -0.99947822 1.41294324 0.084979616 -0.99947822 1.39480948 0.12875821 -0.99947822 1.35103095 0.14689216
		 -0.99947822 1.30725253 0.12875834 -0.99947822 1.28911877 0.084979743 -0.99947822 1.30725229 0.041201543
		 -0.99947822 1.35103095 0.023067605 -1.023170829 1.39147699 0.04453386 -1.023170829 1.40823042 0.084979825
		 -1.023170829 1.39147699 0.1254259 -1.023170829 1.35103095 0.14217931 -1.023170829 1.31058502 0.12542595
		 -1.023170829 1.29383159 0.084979907 -1.023170829 1.31058478 0.044533871 -1.023170829 1.35103095 0.027780509
		 -1.043256879 1.38198721 0.054023661 -1.043256879 1.39480948 0.084979847 -1.04325664 1.38198698 0.11593609
		 -1.043256879 1.35103095 0.12875846 -1.04325664 1.3200748 0.11593615 -1.043256879 1.30725253 0.084979907
		 -1.04325664 1.3200748 0.054023702 -1.043256879 1.35103095 0.041201334 -1.05667758 1.36778426 0.068226516
		 -1.05667758 1.37472379 0.084979907 -1.05667758 1.36778426 0.10173324 -1.05667758 1.35103095 0.10867258
		 -1.05667758 1.33427775 0.1017333 -1.05667758 1.32733822 0.084979951 -1.05667758 1.33427775 0.068226591
		 -1.05667758 1.35103095 0.061286867 -0.93756592 1.35103095 0.084979907;
	setAttr ".vt[498:663]" -1.0613904 1.35103095 0.084979728 -0.65774709 1.33660221 -0.13529861
		 -0.61166024 1.33660221 -0.15443592 -0.56557351 1.33660221 -0.13529861 -0.54610759 1.33660221 -0.089097142
		 -0.56557351 1.33660221 -0.042895652 -0.61166024 1.33660221 -0.023758387 -0.65774709 1.33660221 -0.042895652
		 -0.67683679 1.33660221 -0.089097142 -0.65774709 1.43363249 -0.13529861 -0.61166024 1.43363249 -0.15443592
		 -0.56557351 1.43363249 -0.13529861 -0.54610759 1.43363249 -0.089097142 -0.56557351 1.43363249 -0.042895652
		 -0.61166024 1.43363249 -0.023758387 -0.65774709 1.43363249 -0.042895652 -0.67683679 1.43363249 -0.089097142
		 -0.61166024 1.33660221 -0.089097142 -0.61166024 1.43363249 -0.089097142 -0.21994212 1.35522223 -0.099932604
		 -0.21994212 1.37618625 -0.10861594 -0.21994215 1.39714956 -0.099932604 -0.21994215 1.40583277 -0.078969151
		 -0.21994215 1.39714956 -0.058005702 -0.21994212 1.37618625 -0.049322344 -0.21994212 1.35522223 -0.058005702
		 -0.21994215 1.34653902 -0.078969151 -0.23673564 1.33745062 -0.11770455 -0.23673564 1.37618625 -0.13374931
		 -0.23673564 1.4149214 -0.11770455 -0.23673564 1.43096626 -0.078969151 -0.23673564 1.4149214 -0.040233746
		 -0.23673564 1.37618625 -0.024189016 -0.23673564 1.33745062 -0.040233728 -0.23673564 1.32140613 -0.078969151
		 -0.26186901 1.32557607 -0.1295794 -0.26186901 1.37618625 -0.15054286 -0.26186901 1.42679632 -0.1295794
		 -0.26186895 1.44775963 -0.078969151 -0.26186901 1.42679632 -0.028358908 -0.26186901 1.37618625 -0.0073954696
		 -0.26186901 1.32557607 -0.028358908 -0.26186901 1.3046124 -0.078969151 -0.2915158 1.32140601 -0.13374931
		 -0.2915158 1.37618601 -0.15643995 -0.29151583 1.43096638 -0.13374931 -0.29151583 1.45365679 -0.078969151
		 -0.29151583 1.43096638 -0.024189016 -0.2915158 1.37618601 -0.001498336 -0.2915158 1.32140601 -0.024189016
		 -0.29151583 1.29871523 -0.078969151 -0.32116258 1.32557607 -0.1295794 -0.32116261 1.37618625 -0.15054286
		 -0.32116264 1.42679632 -0.1295794 -0.32116258 1.44775999 -0.078969151 -0.32116264 1.42679632 -0.028358908
		 -0.32116261 1.37618625 -0.0073954696 -0.32116258 1.32557607 -0.028358908 -0.32116261 1.3046124 -0.078969151
		 -0.34629592 1.33745062 -0.11770455 -0.34629592 1.37618625 -0.13374931 -0.34629595 1.4149214 -0.11770455
		 -0.34629589 1.43096626 -0.078969151 -0.34629595 1.4149214 -0.040233746 -0.34629592 1.37618625 -0.024189016
		 -0.34629592 1.33745062 -0.040233728 -0.34629595 1.32140613 -0.078969151 -0.3630895 1.35522258 -0.099932604
		 -0.3630895 1.37618625 -0.10861594 -0.3630895 1.39714956 -0.099932604 -0.3630895 1.40583277 -0.078969151
		 -0.3630895 1.39714956 -0.058005702 -0.3630895 1.37618625 -0.049322344 -0.3630895 1.35522258 -0.058005702
		 -0.3630895 1.34653938 -0.078969151 -0.21404499 1.37618625 -0.078969151 -0.36898667 1.37618601 -0.078969151
		 1.22453153 1.42273104 -0.23264734 1.19201851 1.43619823 -0.23264739 1.15950549 1.42273104 -0.23264734
		 1.14603841 1.39021802 -0.23264715 1.15950549 1.35770512 -0.23264711 1.19201851 1.34423792 -0.23264699
		 1.22453141 1.35770512 -0.23264711 1.2379986 1.39021802 -0.23264715 1.22453153 1.42273104 0.071965203
		 1.19201851 1.43619823 0.07196518 1.15950549 1.42273104 0.071965203 1.14603841 1.39021802 0.07196524
		 1.15950549 1.35770512 0.071965314 1.19201851 1.34423792 0.071965374 1.22453141 1.35770512 0.071965314
		 1.2379986 1.39021802 0.07196524 1.19201851 1.39021802 -0.23264715 1.19201851 1.39021802 0.07196524
		 0.94227874 1.36778426 0.068226516 0.94227874 1.37472379 0.084979907 0.94227874 1.36778426 0.10173324
		 0.94227874 1.35103095 0.10867222 0.94227874 1.33427775 0.1017333 0.94227874 1.32733822 0.084979951
		 0.94227874 1.33427775 0.068226591 0.94227874 1.35103095 0.061286867 0.95569962 1.38198721 0.054023482
		 0.95569962 1.39480948 0.084979668 0.95569962 1.38198698 0.11593591 0.95569962 1.35103095 0.12875864
		 0.95569962 1.3200748 0.11593603 0.95569962 1.30725253 0.084979735 0.95569962 1.3200748 0.054023523
		 0.95569962 1.35103095 0.041201562 0.97578537 1.39147699 0.04453386 0.97578537 1.40823042 0.084979825
		 0.97578537 1.39147699 0.1254259 0.97578537 1.35103095 0.14217931 0.97578537 1.31058502 0.12542595
		 0.97578537 1.29383159 0.084979907 0.97578555 1.31058478 0.044533871 0.97578555 1.35103095 0.027780509
		 0.99947822 1.39480948 0.041201521 0.99947822 1.41294324 0.084979616 0.99947822 1.39480948 0.12875821
		 0.99947822 1.35103095 0.14689216 0.99947822 1.30725253 0.12875834 0.99947822 1.28911877 0.084979743
		 0.99947822 1.30725229 0.041201543 0.99947822 1.35103095 0.023067605 1.023170948 1.39147699 0.04453386
		 1.023170948 1.40823042 0.084979825 1.023170948 1.39147699 0.1254259 1.023170948 1.35103095 0.14217931
		 1.023170948 1.31058502 0.12542595 1.023170948 1.29383159 0.084979907 1.023170948 1.31058478 0.044533871
		 1.023170948 1.35103095 0.027780509 1.043256879 1.38198721 0.054023661 1.043256879 1.39480948 0.084979847
		 1.04325664 1.38198698 0.11593609 1.043256879 1.35103095 0.12875846 1.04325664 1.3200748 0.11593615
		 1.043256879 1.30725253 0.084979907 1.04325664 1.3200748 0.054023702 1.043256879 1.35103095 0.041201334
		 1.05667758 1.36778426 0.068226516 1.05667758 1.37472379 0.084979907 1.05667758 1.36778426 0.10173324
		 1.05667758 1.35103095 0.10867258 1.05667758 1.33427775 0.1017333 1.05667758 1.32733822 0.084979951
		 1.05667758 1.33427775 0.068226591 1.05667758 1.35103095 0.061286867 0.93756592 1.35103095 0.084979907
		 1.061390281 1.35103095 0.084979728 0.85481304 1.36862111 -0.084260181 0.85443711 1.38156962 -0.089610279
		 0.85481304 1.39451766 -0.084260181 0.85572064 1.39988089 -0.071343891 0.85662818 1.39451766 -0.05842761
		 0.85700417 1.38156962 -0.053077504 0.85662818 1.36862111 -0.05842761 0.85572064 1.36325788 -0.071343891
		 0.86439067 1.35764444 -0.095937133 0.86369604 1.38156962 -0.10582285 0.86439067 1.40549445 -0.095937133
		 0.86606765 1.41540456 -0.072070949 0.86774468 1.40549445 -0.048204765;
	setAttr ".vt[664:716]" 0.86843932 1.38156962 -0.038319074 0.86774468 1.35764444 -0.048204757
		 0.86606771 1.34773445 -0.072070949 0.87936211 1.35031009 -0.10434175 0.87845451 1.38156962 -0.11725803
		 0.87936211 1.41282904 -0.10434175 0.88155317 1.42577708 -0.073159069 0.8837443 1.41282904 -0.0419764
		 0.8846519 1.38156962 -0.029060122 0.8837443 1.35031009 -0.0419764 0.88155317 1.33736181 -0.073159069
		 0.89744794 1.34773445 -0.10819449 0.89646554 1.38156939 -0.12217495 0.89744794 1.41540468 -0.10819449
		 0.89981961 1.42941952 -0.074442595 0.90219122 1.41540468 -0.040690713 0.90317357 1.38156939 -0.026710223
		 0.90219122 1.34773445 -0.040690713 0.89981961 1.33371949 -0.074442595 0.8520872 1.38156962 -0.071088582
		 -0.85481304 1.36862111 -0.084260181 -0.85443711 1.38156962 -0.089610279 -0.85481304 1.39451766 -0.084260181
		 -0.85572064 1.39988089 -0.071343891 -0.85662818 1.39451766 -0.05842761 -0.85700417 1.38156962 -0.053077504
		 -0.85662818 1.36862111 -0.05842761 -0.85572064 1.36325788 -0.071343891 -0.86439067 1.35764444 -0.095937133
		 -0.86369604 1.38156962 -0.10582285 -0.86439067 1.40549445 -0.095937133 -0.86606765 1.41540456 -0.072070949
		 -0.86774468 1.40549445 -0.048204765 -0.86843932 1.38156962 -0.038319074 -0.86774468 1.35764444 -0.048204757
		 -0.86606771 1.34773445 -0.072070949 -0.87936211 1.35031009 -0.10434175 -0.87845451 1.38156962 -0.11725803
		 -0.87936211 1.41282904 -0.10434175 -0.88155317 1.42577708 -0.073159069 -0.8837443 1.41282904 -0.0419764
		 -0.8846519 1.38156962 -0.029060122 -0.8837443 1.35031009 -0.0419764 -0.88155317 1.33736181 -0.073159069
		 -0.89744794 1.34773445 -0.10819449 -0.89646554 1.38156939 -0.12217495 -0.89744794 1.41540468 -0.10819449
		 -0.89981961 1.42941952 -0.074442595 -0.90219122 1.41540468 -0.040690713 -0.90317357 1.38156939 -0.026710223
		 -0.90219122 1.34773445 -0.040690713 -0.89981961 1.33371949 -0.074442595 -0.8520872 1.38156962 -0.071088582;
	setAttr -s 1466 ".ed";
	setAttr ".ed[0:165]"  0 1 1 1 2 1 2 3 1 3 4 1 4 5 1 5 6 1 6 7 1 7 0 1 8 9 1
		 9 10 1 10 11 1 11 12 1 12 13 1 13 14 1 14 15 1 15 8 1 0 8 1 1 9 1 2 10 1 3 11 1 4 12 1
		 5 13 1 6 14 1 7 15 1 16 0 1 16 1 1 16 2 1 16 3 1 16 4 1 16 5 1 16 6 1 16 7 1 8 17 1
		 9 17 1 10 17 1 11 17 1 12 17 1 13 17 1 14 17 1 15 17 1 18 19 1 19 20 1 21 20 1 18 21 1
		 19 22 1 22 23 1 20 23 1 22 24 1 24 25 1 23 25 1 24 26 1 26 27 1 25 27 1 26 28 1 28 29 1
		 27 29 1 28 30 1 30 31 1 29 31 1 30 32 1 32 33 1 31 33 1 32 18 1 33 21 1 34 18 1 34 19 1
		 34 22 1 34 24 1 34 26 1 34 28 1 34 30 1 34 32 1 20 35 1 21 35 1 23 35 1 25 35 1 27 35 1
		 29 35 1 31 35 1 33 35 1 36 51 1 38 50 1 40 41 1 42 43 1 36 38 1 37 39 1 38 49 1 39 48 1
		 40 42 1 41 43 1 42 36 1 43 37 1 44 47 1 45 46 1 44 45 1 46 41 1 47 40 1 46 47 1 48 45 1
		 49 44 1 48 49 1 50 39 1 51 37 1 50 51 0 50 49 0 50 48 0 52 62 1 54 61 1 56 60 0 58 63 0
		 52 64 1 53 66 1 54 56 1 55 57 1 56 68 0 57 67 0 58 52 1 59 53 1 60 57 0 61 55 1 60 61 0
		 62 53 1 61 65 0 63 59 0 62 63 0 64 54 1 65 62 0 64 65 0 66 55 1 65 66 0 67 59 0 66 67 0
		 68 58 0 64 68 0 69 70 1 71 72 1 73 74 1 75 76 1 77 78 1 79 80 1 81 82 1 83 84 1 69 71 1
		 70 72 1 71 73 1 72 74 1 73 75 1 74 76 1 75 77 1 76 78 1 77 79 1 78 80 1 79 81 1 80 82 1
		 81 83 1 82 84 1 83 69 1 84 70 1 82 76 1 84 74 1 81 75 1 83 73 1 85 86 1 86 87 1 87 88 1
		 88 89 1;
	setAttr ".ed[166:331]" 90 91 1 91 92 1 92 93 1 93 94 1 95 96 1 96 97 1 97 98 1
		 98 99 1 100 101 1 101 102 1 102 103 1 103 104 1 105 106 1 106 107 1 107 108 1 108 109 1
		 110 111 1 111 112 1 112 113 1 113 114 1 115 116 1 116 117 1 117 118 1 118 119 1 85 90 0
		 86 91 1 87 92 1 88 93 1 89 94 0 90 95 0 91 96 1 92 97 1 93 98 1 94 99 0 95 100 0
		 96 101 1 97 102 1 98 103 1 99 104 0 100 105 0 101 106 1 102 107 1 103 108 1 104 109 0
		 105 110 0 106 111 1 107 112 1 108 113 1 109 114 0 110 115 0 111 116 1 112 117 1 113 118 1
		 114 119 0 120 85 0 120 86 1 120 87 1 120 88 1 120 89 0 115 121 0 116 121 1 117 121 1
		 118 121 1 119 121 0 122 123 1 123 124 1 124 125 1 125 126 1 126 127 1 127 128 1 128 129 1
		 129 122 1 130 131 1 131 132 1 132 133 1 133 134 1 134 135 1 135 136 1 136 137 1 137 130 1
		 122 130 1 123 131 1 124 132 1 125 133 1 126 134 1 127 135 1 128 136 1 129 137 1 138 122 1
		 138 123 1 138 124 1 138 125 1 138 126 1 138 127 1 138 128 1 138 129 1 130 139 1 131 139 1
		 132 139 1 133 139 1 134 139 1 135 139 1 136 139 1 137 139 1 140 141 1 141 142 1 142 143 1
		 143 144 1 144 145 1 145 146 1 146 147 1 147 140 1 148 149 1 149 150 1 150 151 1 151 152 1
		 152 153 1 153 154 1 154 155 1 155 148 1 140 148 1 141 149 1 142 150 1 143 151 1 144 152 1
		 145 153 1 146 154 1 147 155 1 156 140 1 156 141 1 156 142 1 156 143 1 156 144 1 156 145 1
		 156 146 1 156 147 1 148 157 1 149 157 1 150 157 1 151 157 1 152 157 1 153 157 1 154 157 1
		 155 157 1 158 159 1 159 160 1 160 161 1 161 162 1 162 163 1 163 164 1 164 165 1 165 158 1
		 166 167 1 167 168 1 168 169 1 169 170 1 170 171 1 171 172 1 172 173 1 173 166 1 174 175 1
		 175 176 1 176 177 1 177 178 1 178 179 1 179 180 1;
	setAttr ".ed[332:497]" 180 181 1 181 174 1 182 183 1 183 184 1 184 185 1 185 186 1
		 186 187 1 187 188 1 188 189 1 189 182 1 190 191 1 191 192 1 192 193 1 193 194 1 194 195 1
		 195 196 1 196 197 1 197 190 1 198 199 1 199 200 1 200 201 1 201 202 1 202 203 1 203 204 1
		 204 205 1 205 198 1 206 207 1 207 208 1 208 209 1 209 210 1 210 211 1 211 212 1 212 213 1
		 213 206 1 158 166 1 159 167 1 160 168 1 161 169 1 162 170 1 163 171 1 164 172 1 165 173 1
		 166 174 1 167 175 1 168 176 1 169 177 1 170 178 1 171 179 1 172 180 1 173 181 1 174 182 1
		 175 183 1 176 184 1 177 185 1 178 186 1 179 187 1 180 188 1 181 189 1 182 190 1 183 191 1
		 184 192 1 185 193 1 186 194 1 187 195 1 188 196 1 189 197 1 190 198 1 191 199 1 192 200 1
		 193 201 1 194 202 1 195 203 1 196 204 1 197 205 1 198 206 1 199 207 1 200 208 1 201 209 1
		 202 210 1 203 211 1 204 212 1 205 213 1 214 158 1 214 159 1 214 160 1 214 161 1 214 162 1
		 214 163 1 214 164 1 214 165 1 206 215 1 207 215 1 208 215 1 209 215 1 210 215 1 211 215 1
		 212 215 1 213 215 1 216 217 1 217 218 1 218 219 1 219 220 1 221 222 1 222 223 1 223 224 1
		 224 225 1 226 227 1 227 228 1 228 229 1 229 230 1 231 232 1 232 233 1 233 234 1 234 235 1
		 236 237 1 237 238 1 238 239 1 239 240 1 241 242 1 242 243 1 243 244 1 244 245 1 246 247 1
		 247 248 1 248 249 1 249 250 1 216 221 0 217 222 1 218 223 1 219 224 1 220 225 0 221 226 0
		 222 227 1 223 228 1 224 229 1 225 230 0 226 231 0 227 232 1 228 233 1 229 234 1 230 235 0
		 231 236 0 232 237 1 233 238 1 234 239 1 235 240 0 236 241 0 237 242 1 238 243 1 239 244 1
		 240 245 0 241 246 0 242 247 1 243 248 1 244 249 1 245 250 0 251 216 0 251 217 1 251 218 1
		 251 219 1 251 220 0 246 252 0 247 252 1 248 252 1 249 252 1 250 252 0;
	setAttr ".ed[498:663]" 253 254 1 254 255 1 255 256 1 256 257 1 257 258 1 258 259 1
		 259 260 1 260 253 1 261 262 1 262 263 1 263 264 1 264 265 1 265 266 1 266 267 1 267 268 1
		 268 261 1 253 261 1 254 262 1 255 263 1 256 264 1 257 265 1 258 266 1 259 267 1 260 268 1
		 269 253 1 269 254 1 269 255 1 269 256 1 269 257 1 269 258 1 269 259 1 269 260 1 261 270 1
		 262 270 1 263 270 1 264 270 1 265 270 1 266 270 1 267 270 1 268 270 1 271 272 1 272 273 1
		 273 274 1 274 275 1 275 276 1 276 277 1 277 278 1 278 271 1 279 280 1 280 281 1 281 282 1
		 282 283 1 283 284 1 284 285 1 285 286 1 286 279 1 271 279 1 272 280 1 273 281 1 274 282 1
		 275 283 1 276 284 1 277 285 1 278 286 1 287 271 1 287 272 1 287 273 1 287 274 1 287 275 1
		 287 276 1 287 277 1 287 278 1 279 288 1 280 288 1 281 288 1 282 288 1 283 288 1 284 288 1
		 285 288 1 286 288 1 289 290 1 290 291 1 291 292 1 292 293 1 293 294 1 294 295 1 295 296 1
		 296 289 1 297 298 1 298 299 1 299 300 1 300 301 1 301 302 1 302 303 1 303 304 1 304 297 1
		 305 306 1 306 307 1 307 308 1 308 309 1 309 310 1 310 311 1 311 312 1 312 305 1 313 314 1
		 314 315 1 315 316 1 316 317 1 317 318 1 318 319 1 319 320 1 320 313 1 321 322 1 322 323 1
		 323 324 1 324 325 1 325 326 1 326 327 1 327 328 1 328 321 1 329 330 1 330 331 1 331 332 1
		 332 333 1 333 334 1 334 335 1 335 336 1 336 329 1 337 338 1 338 339 1 339 340 1 340 341 1
		 341 342 1 342 343 1 343 344 1 344 337 1 289 297 1 290 298 1 291 299 1 292 300 1 293 301 1
		 294 302 1 295 303 1 296 304 1 297 305 1 298 306 1 299 307 1 300 308 1 301 309 1 302 310 1
		 303 311 1 304 312 1 305 313 1 306 314 1 307 315 1 308 316 1 309 317 1 310 318 1 311 319 1
		 312 320 1 313 321 1 314 322 1 315 323 1 316 324 1 317 325 1 318 326 1;
	setAttr ".ed[664:829]" 319 327 1 320 328 1 321 329 1 322 330 1 323 331 1 324 332 1
		 325 333 1 326 334 1 327 335 1 328 336 1 329 337 1 330 338 1 331 339 1 332 340 1 333 341 1
		 334 342 1 335 343 1 336 344 1 345 289 1 345 290 1 345 291 1 345 292 1 345 293 1 345 294 1
		 345 295 1 345 296 1 337 346 1 338 346 1 339 346 1 340 346 1 341 346 1 342 346 1 343 346 1
		 344 346 1 347 348 1 348 349 1 349 350 1 350 351 1 351 352 1 352 353 1 353 354 1 354 347 1
		 355 356 1 356 357 1 357 358 1 358 359 1 359 360 1 360 361 1 361 362 1 362 355 1 347 355 1
		 348 356 1 349 357 1 350 358 1 351 359 1 352 360 1 353 361 1 354 362 1 363 347 1 363 348 1
		 363 349 1 363 350 1 363 351 1 363 352 1 363 353 1 363 354 1 355 364 1 356 364 1 357 364 1
		 358 364 1 359 364 1 360 364 1 361 364 1 362 364 1 365 366 1 366 367 1 367 368 1 368 369 1
		 369 370 1 370 371 1 371 372 1 372 365 1 373 374 1 374 375 1 375 376 1 376 377 1 377 378 1
		 378 379 1 379 380 1 380 373 1 381 382 1 382 383 1 383 384 1 384 385 1 385 386 1 386 387 1
		 387 388 1 388 381 1 389 390 1 390 391 1 391 392 1 392 393 1 393 394 1 394 395 1 395 396 1
		 396 389 1 397 398 1 398 399 1 399 400 1 400 401 1 401 402 1 402 403 1 403 404 1 404 397 1
		 405 406 1 406 407 1 407 408 1 408 409 1 409 410 1 410 411 1 411 412 1 412 405 1 413 414 1
		 414 415 1 415 416 1 416 417 1 417 418 1 418 419 1 419 420 1 420 413 1 365 373 1 366 374 1
		 367 375 1 368 376 1 369 377 1 370 378 1 371 379 1 372 380 1 373 381 1 374 382 1 375 383 1
		 376 384 1 377 385 1 378 386 1 379 387 1 380 388 1 381 389 1 382 390 1 383 391 1 384 392 1
		 385 393 1 386 394 1 387 395 1 388 396 1 389 397 1 390 398 1 391 399 1 392 400 1 393 401 1
		 394 402 1 395 403 1 396 404 1 397 405 1 398 406 1 399 407 1 400 408 1;
	setAttr ".ed[830:995]" 401 409 1 402 410 1 403 411 1 404 412 1 405 413 1 406 414 1
		 407 415 1 408 416 1 409 417 1 410 418 1 411 419 1 412 420 1 421 365 1 421 366 1 421 367 1
		 421 368 1 421 369 1 421 370 1 421 371 1 421 372 1 413 422 1 414 422 1 415 422 1 416 422 1
		 417 422 1 418 422 1 419 422 1 420 422 1 423 424 1 424 425 1 425 426 1 426 427 1 427 428 1
		 428 429 1 429 430 1 430 423 1 431 432 1 432 433 1 433 434 1 434 435 1 435 436 1 436 437 1
		 437 438 1 438 431 1 423 431 1 424 432 1 425 433 1 426 434 1 427 435 1 428 436 1 429 437 1
		 430 438 1 439 423 1 439 424 1 439 425 1 439 426 1 439 427 1 439 428 1 439 429 1 439 430 1
		 431 440 1 432 440 1 433 440 1 434 440 1 435 440 1 436 440 1 437 440 1 438 440 1 441 442 1
		 442 443 1 443 444 1 444 445 1 445 446 1 446 447 1 447 448 1 448 441 1 449 450 1 450 451 1
		 451 452 1 452 453 1 453 454 1 454 455 1 455 456 1 456 449 1 457 458 1 458 459 1 459 460 1
		 460 461 1 461 462 1 462 463 1 463 464 1 464 457 1 465 466 1 466 467 1 467 468 1 468 469 1
		 469 470 1 470 471 1 471 472 1 472 465 1 473 474 1 474 475 1 475 476 1 476 477 1 477 478 1
		 478 479 1 479 480 1 480 473 1 481 482 1 482 483 1 483 484 1 484 485 1 485 486 1 486 487 1
		 487 488 1 488 481 1 489 490 1 490 491 1 491 492 1 492 493 1 493 494 1 494 495 1 495 496 1
		 496 489 1 441 449 1 442 450 1 443 451 1 444 452 1 445 453 1 446 454 1 447 455 1 448 456 1
		 449 457 1 450 458 1 451 459 1 452 460 1 453 461 1 454 462 1 455 463 1 456 464 1 457 465 1
		 458 466 1 459 467 1 460 468 1 461 469 1 462 470 1 463 471 1 464 472 1 465 473 1 466 474 1
		 467 475 1 468 476 1 469 477 1 470 478 1 471 479 1 472 480 1 473 481 1 474 482 1 475 483 1
		 476 484 1 477 485 1 478 486 1 479 487 1 480 488 1 481 489 1 482 490 1;
	setAttr ".ed[996:1161]" 483 491 1 484 492 1 485 493 1 486 494 1 487 495 1 488 496 1
		 497 441 1 497 442 1 497 443 1 497 444 1 497 445 1 497 446 1 497 447 1 497 448 1 489 498 1
		 490 498 1 491 498 1 492 498 1 493 498 1 494 498 1 495 498 1 496 498 1 499 500 1 500 501 1
		 501 502 1 502 503 1 503 504 1 504 505 1 505 506 1 506 499 1 507 508 1 508 509 1 509 510 1
		 510 511 1 511 512 1 512 513 1 513 514 1 514 507 1 499 507 1 500 508 1 501 509 1 502 510 1
		 503 511 1 504 512 1 505 513 1 506 514 1 515 499 1 515 500 1 515 501 1 515 502 1 515 503 1
		 515 504 1 515 505 1 515 506 1 507 516 1 508 516 1 509 516 1 510 516 1 511 516 1 512 516 1
		 513 516 1 514 516 1 517 518 1 518 519 1 519 520 1 520 521 1 521 522 1 522 523 1 523 524 1
		 524 517 1 525 526 1 526 527 1 527 528 1 528 529 1 529 530 1 530 531 1 531 532 1 532 525 1
		 533 534 1 534 535 1 535 536 1 536 537 1 537 538 1 538 539 1 539 540 1 540 533 1 541 542 1
		 542 543 1 543 544 1 544 545 1 545 546 1 546 547 1 547 548 1 548 541 1 549 550 1 550 551 1
		 551 552 1 552 553 1 553 554 1 554 555 1 555 556 1 556 549 1 557 558 1 558 559 1 559 560 1
		 560 561 1 561 562 1 562 563 1 563 564 1 564 557 1 565 566 1 566 567 1 567 568 1 568 569 1
		 569 570 1 570 571 1 571 572 1 572 565 1 517 525 1 518 526 1 519 527 1 520 528 1 521 529 1
		 522 530 1 523 531 1 524 532 1 525 533 1 526 534 1 527 535 1 528 536 1 529 537 1 530 538 1
		 531 539 1 532 540 1 533 541 1 534 542 1 535 543 1 536 544 1 537 545 1 538 546 1 539 547 1
		 540 548 1 541 549 1 542 550 1 543 551 1 544 552 1 545 553 1 546 554 1 547 555 1 548 556 1
		 549 557 1 550 558 1 551 559 1 552 560 1 553 561 1 554 562 1 555 563 1 556 564 1 557 565 1
		 558 566 1 559 567 1 560 568 1 561 569 1 562 570 1 563 571 1 564 572 1;
	setAttr ".ed[1162:1327]" 573 517 1 573 518 1 573 519 1 573 520 1 573 521 1 573 522 1
		 573 523 1 573 524 1 565 574 1 566 574 1 567 574 1 568 574 1 569 574 1 570 574 1 571 574 1
		 572 574 1 575 576 1 576 577 1 577 578 1 578 579 1 579 580 1 580 581 1 581 582 1 582 575 1
		 583 584 1 584 585 1 585 586 1 586 587 1 587 588 1 588 589 1 589 590 1 590 583 1 575 583 1
		 576 584 1 577 585 1 578 586 1 579 587 1 580 588 1 581 589 1 582 590 1 591 575 1 591 576 1
		 591 577 1 591 578 1 591 579 1 591 580 1 591 581 1 591 582 1 583 592 1 584 592 1 585 592 1
		 586 592 1 587 592 1 588 592 1 589 592 1 590 592 1 593 594 1 594 595 1 595 596 1 596 597 1
		 597 598 1 598 599 1 599 600 1 600 593 1 601 602 1 602 603 1 603 604 1 604 605 1 605 606 1
		 606 607 1 607 608 1 608 601 1 609 610 1 610 611 1 611 612 1 612 613 1 613 614 1 614 615 1
		 615 616 1 616 609 1 617 618 1 618 619 1 619 620 1 620 621 1 621 622 1 622 623 1 623 624 1
		 624 617 1 625 626 1 626 627 1 627 628 1 628 629 1 629 630 1 630 631 1 631 632 1 632 625 1
		 633 634 1 634 635 1 635 636 1 636 637 1 637 638 1 638 639 1 639 640 1 640 633 1 641 642 1
		 642 643 1 643 644 1 644 645 1 645 646 1 646 647 1 647 648 1 648 641 1 593 601 1 594 602 1
		 595 603 1 596 604 1 597 605 1 598 606 1 599 607 1 600 608 1 601 609 1 602 610 1 603 611 1
		 604 612 1 605 613 1 606 614 1 607 615 1 608 616 1 609 617 1 610 618 1 611 619 1 612 620 1
		 613 621 1 614 622 1 615 623 1 616 624 1 617 625 1 618 626 1 619 627 1 620 628 1 621 629 1
		 622 630 1 623 631 1 624 632 1 625 633 1 626 634 1 627 635 1 628 636 1 629 637 1 630 638 1
		 631 639 1 632 640 1 633 641 1 634 642 1 635 643 1 636 644 1 637 645 1 638 646 1 639 647 1
		 640 648 1 649 593 1 649 594 1 649 595 1 649 596 1 649 597 1 649 598 1;
	setAttr ".ed[1328:1465]" 649 599 1 649 600 1 641 650 1 642 650 1 643 650 1 644 650 1
		 645 650 1 646 650 1 647 650 1 648 650 1 651 652 1 652 653 1 653 654 1 654 655 1 655 656 1
		 656 657 1 657 658 1 658 651 1 659 660 1 660 661 1 661 662 1 662 663 1 663 664 1 664 665 1
		 665 666 1 666 659 1 667 668 1 668 669 1 669 670 1 670 671 1 671 672 1 672 673 1 673 674 1
		 674 667 1 675 676 0 676 677 0 677 678 0 678 679 0 679 680 0 680 681 0 681 682 0 682 675 0
		 651 659 1 652 660 1 653 661 1 654 662 1 655 663 1 656 664 1 657 665 1 658 666 1 659 667 1
		 660 668 1 661 669 1 662 670 1 663 671 1 664 672 1 665 673 1 666 674 1 667 675 1 668 676 1
		 669 677 1 670 678 1 671 679 1 672 680 1 673 681 1 674 682 1 683 651 1 683 652 1 683 653 1
		 683 654 1 683 655 1 683 656 1 683 657 1 683 658 1 684 685 1 685 686 1 686 687 1 687 688 1
		 688 689 1 689 690 1 690 691 1 691 684 1 692 693 1 693 694 1 694 695 1 695 696 1 696 697 1
		 697 698 1 698 699 1 699 692 1 700 701 1 701 702 1 702 703 1 703 704 1 704 705 1 705 706 1
		 706 707 1 707 700 1 708 709 0 709 710 0 710 711 0 711 712 0 712 713 0 713 714 0 714 715 0
		 715 708 0 684 692 1 685 693 1 686 694 1 687 695 1 688 696 1 689 697 1 690 698 1 691 699 1
		 692 700 1 693 701 1 694 702 1 695 703 1 696 704 1 697 705 1 698 706 1 699 707 1 700 708 1
		 701 709 1 702 710 1 703 711 1 704 712 1 705 713 1 706 714 1 707 715 1 716 684 1 716 685 1
		 716 686 1 716 687 1 716 688 1 716 689 1 716 690 1 716 691 1;
	setAttr -s 790 -ch 2876 ".fc";
	setAttr ".fc[0:499]" -type "polyFaces" 
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
		f 3 -1 -25 25
		mu 0 3 18 19 20
		f 3 -2 -26 26
		mu 0 3 21 18 20
		f 3 -3 -27 27
		mu 0 3 22 21 20
		f 3 -4 -28 28
		mu 0 3 23 22 20
		f 3 -5 -29 29
		mu 0 3 24 23 20
		f 3 -6 -30 30
		mu 0 3 25 24 20
		f 3 -7 -31 31
		mu 0 3 26 25 20
		f 3 -8 -32 24
		mu 0 3 19 26 20
		f 3 8 33 -33
		mu 0 3 27 28 29
		f 3 9 34 -34
		mu 0 3 28 30 29
		f 3 10 35 -35
		mu 0 3 30 31 29
		f 3 11 36 -36
		mu 0 3 31 32 29
		f 3 12 37 -37
		mu 0 3 32 33 29
		f 3 13 38 -38
		mu 0 3 33 34 29
		f 3 14 39 -39
		mu 0 3 34 35 29
		f 3 15 32 -40
		mu 0 3 35 27 29
		f 4 43 42 -42 -41
		mu 0 4 36 37 38 39
		f 4 41 46 -46 -45
		mu 0 4 39 38 40 41
		f 4 45 49 -49 -48
		mu 0 4 41 40 42 43
		f 4 48 52 -52 -51
		mu 0 4 43 42 44 45
		f 4 51 55 -55 -54
		mu 0 4 45 44 46 47
		f 4 54 58 -58 -57
		mu 0 4 47 46 48 49
		f 4 57 61 -61 -60
		mu 0 4 49 48 50 51
		f 4 60 63 -44 -63
		mu 0 4 51 50 52 53
		f 3 -66 64 40
		mu 0 3 54 55 56
		f 3 -67 65 44
		mu 0 3 57 55 54
		f 3 -68 66 47
		mu 0 3 58 55 57
		f 3 -69 67 50
		mu 0 3 59 55 58
		f 3 -70 68 53
		mu 0 3 60 55 59
		f 3 -71 69 56
		mu 0 3 61 55 60
		f 3 -72 70 59
		mu 0 3 62 55 61
		f 3 -65 71 62
		mu 0 3 56 55 62
		f 3 73 -73 -43
		mu 0 3 63 64 65
		f 3 72 -75 -47
		mu 0 3 65 64 66
		f 3 74 -76 -50
		mu 0 3 66 64 67
		f 3 75 -77 -53
		mu 0 3 67 64 68
		f 3 76 -78 -56
		mu 0 3 68 64 69
		f 3 77 -79 -59
		mu 0 3 69 64 70
		f 3 78 -80 -62
		mu 0 3 70 64 71
		f 3 79 -74 -64
		mu 0 3 71 64 63
		f 4 102 85 -102 103
		mu 0 4 72 73 74 75
		f 4 94 93 97 -93
		mu 0 4 76 77 78 79
		f 4 82 89 -84 -89
		mu 0 4 80 81 82 83
		f 5 83 91 -103 -81 -91
		mu 0 5 83 82 84 85 86
		f 7 -92 -90 -96 -94 -99 -88 -86
		mu 0 7 73 87 88 89 90 91 74
		f 7 90 84 86 99 92 96 88
		mu 0 7 92 93 94 95 96 97 98
		f 3 81 104 -87
		mu 0 3 94 75 99
		f 4 -98 95 -83 -97
		mu 0 4 79 78 81 80
		f 4 -101 98 -95 -100
		mu 0 4 99 100 77 76
		f 4 80 -104 -82 -85
		mu 0 4 93 72 75 94
		f 3 -105 105 100
		mu 0 3 99 75 100
		f 3 -106 101 87
		mu 0 3 100 75 74
		f 4 129 128 -120 122
		mu 0 4 101 102 103 104
		f 4 119 113 -119 120
		mu 0 4 104 103 105 106
		f 4 123 117 -122 124
		mu 0 4 107 108 109 110
		f 4 131 -116 -114 -129
		mu 0 4 102 111 112 103
		f 4 116 110 133 132
		mu 0 4 113 114 115 116
		f 4 107 -121 -109 -113
		mu 0 4 117 104 106 118
		f 4 127 -123 -108 -126
		mu 0 4 115 101 104 117
		f 4 109 -125 -107 -117
		mu 0 4 119 107 110 120
		f 4 106 -127 -128 -111
		mu 0 4 114 121 101 115
		f 4 121 111 -130 126
		mu 0 4 121 122 102 101
		f 4 -118 -131 -132 -112
		mu 0 4 122 123 111 102
		f 4 -134 125 112 114
		mu 0 4 116 115 117 124
		f 4 134 143 -136 -143
		mu 0 4 125 126 127 128
		f 4 135 145 -137 -145
		mu 0 4 128 127 129 130
		f 4 136 147 -138 -147
		mu 0 4 130 129 131 132
		f 4 137 149 -139 -149
		mu 0 4 132 131 133 134
		f 4 138 151 -140 -151
		mu 0 4 134 133 135 136
		f 4 139 153 -141 -153
		mu 0 4 136 135 137 138
		f 4 140 155 -142 -155
		mu 0 4 138 137 139 140
		f 4 141 157 -135 -157
		mu 0 4 140 139 141 142
		f 4 -154 -152 -150 -159
		mu 0 4 143 144 145 146
		f 4 -156 158 -148 -160
		mu 0 4 147 143 146 148
		f 4 -158 159 -146 -144
		mu 0 4 126 147 148 127
		f 4 152 160 148 150
		mu 0 4 149 150 151 152
		f 4 154 161 146 -161
		mu 0 4 150 153 154 151
		f 4 156 142 144 -162
		mu 0 4 153 125 128 154
		f 4 162 191 -167 -191
		mu 0 4 155 156 157 158
		f 4 163 192 -168 -192
		mu 0 4 156 159 160 157
		f 4 164 193 -169 -193
		mu 0 4 159 161 162 160
		f 4 165 194 -170 -194
		mu 0 4 161 163 164 162
		f 4 166 196 -171 -196
		mu 0 4 158 157 165 166
		f 4 167 197 -172 -197
		mu 0 4 157 160 167 165
		f 4 168 198 -173 -198
		mu 0 4 160 162 168 167
		f 4 169 199 -174 -199
		mu 0 4 162 164 169 168
		f 4 170 201 -175 -201
		mu 0 4 166 165 170 171
		f 4 171 202 -176 -202
		mu 0 4 165 167 172 170
		f 4 172 203 -177 -203
		mu 0 4 167 168 173 172
		f 4 173 204 -178 -204
		mu 0 4 168 169 174 173
		f 4 174 206 -179 -206
		mu 0 4 171 170 175 176
		f 4 175 207 -180 -207
		mu 0 4 170 172 177 175
		f 4 176 208 -181 -208
		mu 0 4 172 173 178 177
		f 4 177 209 -182 -209
		mu 0 4 173 174 179 178
		f 4 178 211 -183 -211
		mu 0 4 176 175 180 181
		f 4 179 212 -184 -212
		mu 0 4 175 177 182 180
		f 4 180 213 -185 -213
		mu 0 4 177 178 183 182
		f 4 181 214 -186 -214
		mu 0 4 178 179 184 183
		f 4 182 216 -187 -216
		mu 0 4 181 180 185 186
		f 4 183 217 -188 -217
		mu 0 4 180 182 187 185
		f 4 184 218 -189 -218
		mu 0 4 182 183 188 187
		f 4 185 219 -190 -219
		mu 0 4 183 184 189 188
		f 3 -163 -221 221
		mu 0 3 156 155 190
		f 3 -164 -222 222
		mu 0 3 159 156 191
		f 3 -165 -223 223
		mu 0 3 161 159 192
		f 3 -166 -224 224
		mu 0 3 163 161 193
		f 3 186 226 -226
		mu 0 3 186 185 194
		f 3 187 227 -227
		mu 0 3 185 187 195
		f 3 188 228 -228
		mu 0 3 187 188 196
		f 3 189 229 -229
		mu 0 3 188 189 197
		f 4 230 247 -239 -247
		mu 0 4 198 199 200 201
		f 4 231 248 -240 -248
		mu 0 4 199 202 203 200
		f 4 232 249 -241 -249
		mu 0 4 202 204 205 203
		f 4 233 250 -242 -250
		mu 0 4 204 206 207 205
		f 4 234 251 -243 -251
		mu 0 4 206 208 209 207
		f 4 235 252 -244 -252
		mu 0 4 208 210 211 209
		f 4 236 253 -245 -253
		mu 0 4 210 212 213 211
		f 4 237 246 -246 -254
		mu 0 4 212 214 215 213
		f 3 -231 -255 255
		mu 0 3 216 217 218
		f 3 -232 -256 256
		mu 0 3 219 216 218
		f 3 -233 -257 257
		mu 0 3 220 219 218
		f 3 -234 -258 258
		mu 0 3 221 220 218
		f 3 -235 -259 259
		mu 0 3 222 221 218
		f 3 -236 -260 260
		mu 0 3 223 222 218
		f 3 -237 -261 261
		mu 0 3 224 223 218
		f 3 -238 -262 254
		mu 0 3 217 224 218
		f 3 238 263 -263
		mu 0 3 225 226 227
		f 3 239 264 -264
		mu 0 3 226 228 227
		f 3 240 265 -265
		mu 0 3 228 229 227
		f 3 241 266 -266
		mu 0 3 229 230 227
		f 3 242 267 -267
		mu 0 3 230 231 227
		f 3 243 268 -268
		mu 0 3 231 232 227
		f 3 244 269 -269
		mu 0 3 232 233 227
		f 3 245 262 -270
		mu 0 3 233 225 227
		f 4 270 287 -279 -287
		mu 0 4 234 235 236 237
		f 4 271 288 -280 -288
		mu 0 4 235 238 239 236
		f 4 272 289 -281 -289
		mu 0 4 238 240 241 239
		f 4 273 290 -282 -290
		mu 0 4 240 242 243 241
		f 4 274 291 -283 -291
		mu 0 4 242 244 245 243
		f 4 275 292 -284 -292
		mu 0 4 244 246 247 245
		f 4 276 293 -285 -293
		mu 0 4 246 248 249 247
		f 4 277 286 -286 -294
		mu 0 4 248 250 251 249
		f 3 -271 -295 295
		mu 0 3 252 253 254
		f 3 -272 -296 296
		mu 0 3 255 252 254
		f 3 -273 -297 297
		mu 0 3 256 255 254
		f 3 -274 -298 298
		mu 0 3 257 256 254
		f 3 -275 -299 299
		mu 0 3 258 257 254
		f 3 -276 -300 300
		mu 0 3 259 258 254
		f 3 -277 -301 301
		mu 0 3 260 259 254
		f 3 -278 -302 294
		mu 0 3 253 260 254
		f 3 278 303 -303
		mu 0 3 261 262 263
		f 3 279 304 -304
		mu 0 3 262 264 263
		f 3 280 305 -305
		mu 0 3 264 265 263
		f 3 281 306 -306
		mu 0 3 265 266 263
		f 3 282 307 -307
		mu 0 3 266 267 263
		f 3 283 308 -308
		mu 0 3 267 268 263
		f 3 284 309 -309
		mu 0 3 268 269 263
		f 3 285 302 -310
		mu 0 3 269 261 263
		f 4 310 367 -319 -367
		mu 0 4 270 271 272 273
		f 4 311 368 -320 -368
		mu 0 4 271 274 275 272
		f 4 312 369 -321 -369
		mu 0 4 274 276 277 275
		f 4 313 370 -322 -370
		mu 0 4 276 278 279 277
		f 4 314 371 -323 -371
		mu 0 4 278 280 281 279
		f 4 315 372 -324 -372
		mu 0 4 280 282 283 281
		f 4 316 373 -325 -373
		mu 0 4 282 284 285 283
		f 4 317 366 -326 -374
		mu 0 4 284 286 287 285
		f 4 318 375 -327 -375
		mu 0 4 273 272 288 289
		f 4 319 376 -328 -376
		mu 0 4 272 275 290 288
		f 4 320 377 -329 -377
		mu 0 4 275 277 291 290
		f 4 321 378 -330 -378
		mu 0 4 277 279 292 291
		f 4 322 379 -331 -379
		mu 0 4 279 281 293 292
		f 4 323 380 -332 -380
		mu 0 4 281 283 294 293
		f 4 324 381 -333 -381
		mu 0 4 283 285 295 294
		f 4 325 374 -334 -382
		mu 0 4 285 287 296 295
		f 4 326 383 -335 -383
		mu 0 4 289 288 297 298
		f 4 327 384 -336 -384
		mu 0 4 288 290 299 297
		f 4 328 385 -337 -385
		mu 0 4 290 291 300 299
		f 4 329 386 -338 -386
		mu 0 4 291 292 301 300
		f 4 330 387 -339 -387
		mu 0 4 292 293 302 301
		f 4 331 388 -340 -388
		mu 0 4 293 294 303 302
		f 4 332 389 -341 -389
		mu 0 4 294 295 304 303
		f 4 333 382 -342 -390
		mu 0 4 295 296 305 304
		f 4 334 391 -343 -391
		mu 0 4 298 297 306 307
		f 4 335 392 -344 -392
		mu 0 4 297 299 308 306
		f 4 336 393 -345 -393
		mu 0 4 299 300 309 308
		f 4 337 394 -346 -394
		mu 0 4 300 301 310 309
		f 4 338 395 -347 -395
		mu 0 4 301 302 311 310
		f 4 339 396 -348 -396
		mu 0 4 302 303 312 311
		f 4 340 397 -349 -397
		mu 0 4 303 304 313 312
		f 4 341 390 -350 -398
		mu 0 4 304 305 314 313
		f 4 342 399 -351 -399
		mu 0 4 307 306 315 316
		f 4 343 400 -352 -400
		mu 0 4 306 308 317 315
		f 4 344 401 -353 -401
		mu 0 4 308 309 318 317
		f 4 345 402 -354 -402
		mu 0 4 309 310 319 318
		f 4 346 403 -355 -403
		mu 0 4 310 311 320 319
		f 4 347 404 -356 -404
		mu 0 4 311 312 321 320
		f 4 348 405 -357 -405
		mu 0 4 312 313 322 321
		f 4 349 398 -358 -406
		mu 0 4 313 314 323 322
		f 4 350 407 -359 -407
		mu 0 4 316 315 324 325
		f 4 351 408 -360 -408
		mu 0 4 315 317 326 324
		f 4 352 409 -361 -409
		mu 0 4 317 318 327 326
		f 4 353 410 -362 -410
		mu 0 4 318 319 328 327
		f 4 354 411 -363 -411
		mu 0 4 319 320 329 328
		f 4 355 412 -364 -412
		mu 0 4 320 321 330 329
		f 4 356 413 -365 -413
		mu 0 4 321 322 331 330
		f 4 357 406 -366 -414
		mu 0 4 322 323 332 331
		f 3 -311 -415 415
		mu 0 3 271 270 333
		f 3 -312 -416 416
		mu 0 3 274 271 334
		f 3 -313 -417 417
		mu 0 3 276 274 335
		f 3 -314 -418 418
		mu 0 3 278 276 336
		f 3 -315 -419 419
		mu 0 3 280 278 337
		f 3 -316 -420 420
		mu 0 3 282 280 338
		f 3 -317 -421 421
		mu 0 3 284 282 339
		f 3 -318 -422 414
		mu 0 3 286 284 340
		f 3 358 423 -423
		mu 0 3 325 324 341
		f 3 359 424 -424
		mu 0 3 324 326 342
		f 3 360 425 -425
		mu 0 3 326 327 343
		f 3 361 426 -426
		mu 0 3 327 328 344
		f 3 362 427 -427
		mu 0 3 328 329 345
		f 3 363 428 -428
		mu 0 3 329 330 346
		f 3 364 429 -429
		mu 0 3 330 331 347
		f 3 365 422 -430
		mu 0 3 331 332 348
		f 4 458 434 -460 -431
		mu 0 4 349 350 351 352
		f 4 459 435 -461 -432
		mu 0 4 352 351 353 354
		f 4 460 436 -462 -433
		mu 0 4 354 353 355 356
		f 4 461 437 -463 -434
		mu 0 4 356 355 357 358
		f 4 463 438 -465 -435
		mu 0 4 350 359 360 351
		f 4 464 439 -466 -436
		mu 0 4 351 360 361 353
		f 4 465 440 -467 -437
		mu 0 4 353 361 362 355
		f 4 466 441 -468 -438
		mu 0 4 355 362 363 357
		f 4 468 442 -470 -439
		mu 0 4 359 364 365 360
		f 4 469 443 -471 -440
		mu 0 4 360 365 366 361
		f 4 470 444 -472 -441
		mu 0 4 361 366 367 362
		f 4 471 445 -473 -442
		mu 0 4 362 367 368 363
		f 4 473 446 -475 -443
		mu 0 4 364 369 370 365
		f 4 474 447 -476 -444
		mu 0 4 365 370 371 366
		f 4 475 448 -477 -445
		mu 0 4 366 371 372 367
		f 4 476 449 -478 -446
		mu 0 4 367 372 373 368
		f 4 478 450 -480 -447
		mu 0 4 369 374 375 370
		f 4 479 451 -481 -448
		mu 0 4 370 375 376 371
		f 4 480 452 -482 -449
		mu 0 4 371 376 377 372
		f 4 481 453 -483 -450
		mu 0 4 372 377 378 373
		f 4 483 454 -485 -451
		mu 0 4 374 379 380 375
		f 4 484 455 -486 -452
		mu 0 4 375 380 381 376
		f 4 485 456 -487 -453
		mu 0 4 376 381 382 377
		f 4 486 457 -488 -454
		mu 0 4 377 382 383 378
		f 3 -490 488 430
		mu 0 3 352 384 349
		f 3 -491 489 431
		mu 0 3 354 385 352
		f 3 -492 490 432
		mu 0 3 356 386 354
		f 3 -493 491 433
		mu 0 3 358 387 356
		f 3 493 -495 -455
		mu 0 3 379 388 380
		f 3 494 -496 -456
		mu 0 3 380 389 381
		f 3 495 -497 -457
		mu 0 3 381 390 382
		f 3 496 -498 -458
		mu 0 3 382 391 383
		f 4 514 506 -516 -499
		mu 0 4 392 393 394 395
		f 4 515 507 -517 -500
		mu 0 4 395 394 396 397
		f 4 516 508 -518 -501
		mu 0 4 397 396 398 399
		f 4 517 509 -519 -502
		mu 0 4 399 398 400 401
		f 4 518 510 -520 -503
		mu 0 4 401 400 402 403
		f 4 519 511 -521 -504
		mu 0 4 403 402 404 405
		f 4 520 512 -522 -505
		mu 0 4 405 404 406 407
		f 4 521 513 -515 -506
		mu 0 4 407 406 408 409
		f 3 -524 522 498
		mu 0 3 410 411 412
		f 3 -525 523 499
		mu 0 3 413 411 410
		f 3 -526 524 500
		mu 0 3 414 411 413
		f 3 -527 525 501
		mu 0 3 415 411 414
		f 3 -528 526 502
		mu 0 3 416 411 415
		f 3 -529 527 503
		mu 0 3 417 411 416
		f 3 -530 528 504
		mu 0 3 418 411 417
		f 3 -523 529 505
		mu 0 3 412 411 418
		f 3 530 -532 -507
		mu 0 3 419 420 421
		f 3 531 -533 -508
		mu 0 3 421 420 422
		f 3 532 -534 -509
		mu 0 3 422 420 423
		f 3 533 -535 -510
		mu 0 3 423 420 424
		f 3 534 -536 -511
		mu 0 3 424 420 425
		f 3 535 -537 -512
		mu 0 3 425 420 426
		f 3 536 -538 -513
		mu 0 3 426 420 427
		f 3 537 -531 -514
		mu 0 3 427 420 419
		f 4 554 546 -556 -539
		mu 0 4 428 429 430 431
		f 4 555 547 -557 -540
		mu 0 4 431 430 432 433
		f 4 556 548 -558 -541
		mu 0 4 433 432 434 435
		f 4 557 549 -559 -542
		mu 0 4 435 434 436 437
		f 4 558 550 -560 -543
		mu 0 4 437 436 438 439
		f 4 559 551 -561 -544
		mu 0 4 439 438 440 441
		f 4 560 552 -562 -545
		mu 0 4 441 440 442 443
		f 4 561 553 -555 -546
		mu 0 4 443 442 444 445
		f 3 -564 562 538
		mu 0 3 446 447 448
		f 3 -565 563 539
		mu 0 3 449 447 446
		f 3 -566 564 540
		mu 0 3 450 447 449
		f 3 -567 565 541
		mu 0 3 451 447 450
		f 3 -568 566 542
		mu 0 3 452 447 451
		f 3 -569 567 543
		mu 0 3 453 447 452
		f 3 -570 568 544
		mu 0 3 454 447 453
		f 3 -563 569 545
		mu 0 3 448 447 454
		f 3 570 -572 -547
		mu 0 3 455 456 457
		f 3 571 -573 -548
		mu 0 3 457 456 458
		f 3 572 -574 -549
		mu 0 3 458 456 459
		f 3 573 -575 -550
		mu 0 3 459 456 460
		f 3 574 -576 -551
		mu 0 3 460 456 461
		f 3 575 -577 -552
		mu 0 3 461 456 462
		f 3 576 -578 -553
		mu 0 3 462 456 463
		f 3 577 -571 -554
		mu 0 3 463 456 455
		f 4 634 586 -636 -579
		mu 0 4 464 465 466 467
		f 4 635 587 -637 -580
		mu 0 4 467 466 468 469
		f 4 636 588 -638 -581
		mu 0 4 469 468 470 471
		f 4 637 589 -639 -582
		mu 0 4 471 470 472 473
		f 4 638 590 -640 -583
		mu 0 4 473 472 474 475
		f 4 639 591 -641 -584
		mu 0 4 475 474 476 477
		f 4 640 592 -642 -585
		mu 0 4 477 476 478 479
		f 4 641 593 -635 -586
		mu 0 4 479 478 480 481
		f 4 642 594 -644 -587
		mu 0 4 465 482 483 466
		f 4 643 595 -645 -588
		mu 0 4 466 483 484 468
		f 4 644 596 -646 -589
		mu 0 4 468 484 485 470
		f 4 645 597 -647 -590
		mu 0 4 470 485 486 472
		f 4 646 598 -648 -591
		mu 0 4 472 486 487 474
		f 4 647 599 -649 -592
		mu 0 4 474 487 488 476
		f 4 648 600 -650 -593
		mu 0 4 476 488 489 478
		f 4 649 601 -643 -594
		mu 0 4 478 489 490 480
		f 4 650 602 -652 -595
		mu 0 4 482 491 492 483
		f 4 651 603 -653 -596
		mu 0 4 483 492 493 484
		f 4 652 604 -654 -597
		mu 0 4 484 493 494 485
		f 4 653 605 -655 -598
		mu 0 4 485 494 495 486
		f 4 654 606 -656 -599
		mu 0 4 486 495 496 487
		f 4 655 607 -657 -600
		mu 0 4 487 496 497 488
		f 4 656 608 -658 -601
		mu 0 4 488 497 498 489
		f 4 657 609 -651 -602
		mu 0 4 489 498 499 490
		f 4 658 610 -660 -603
		mu 0 4 491 500 501 492
		f 4 659 611 -661 -604
		mu 0 4 492 501 502 493
		f 4 660 612 -662 -605
		mu 0 4 493 502 503 494
		f 4 661 613 -663 -606
		mu 0 4 494 503 504 495
		f 4 662 614 -664 -607
		mu 0 4 495 504 505 496
		f 4 663 615 -665 -608
		mu 0 4 496 505 506 497
		f 4 664 616 -666 -609
		mu 0 4 497 506 507 498
		f 4 665 617 -659 -610
		mu 0 4 498 507 508 499
		f 4 666 618 -668 -611
		mu 0 4 500 509 510 501
		f 4 667 619 -669 -612
		mu 0 4 501 510 511 502
		f 4 668 620 -670 -613
		mu 0 4 502 511 512 503
		f 4 669 621 -671 -614
		mu 0 4 503 512 513 504
		f 4 670 622 -672 -615
		mu 0 4 504 513 514 505
		f 4 671 623 -673 -616
		mu 0 4 505 514 515 506
		f 4 672 624 -674 -617
		mu 0 4 506 515 516 507
		f 4 673 625 -667 -618
		mu 0 4 507 516 517 508
		f 4 674 626 -676 -619
		mu 0 4 509 518 519 510
		f 4 675 627 -677 -620
		mu 0 4 510 519 520 511
		f 4 676 628 -678 -621
		mu 0 4 511 520 521 512
		f 4 677 629 -679 -622
		mu 0 4 512 521 522 513
		f 4 678 630 -680 -623
		mu 0 4 513 522 523 514
		f 4 679 631 -681 -624
		mu 0 4 514 523 524 515
		f 4 680 632 -682 -625
		mu 0 4 515 524 525 516
		f 4 681 633 -675 -626
		mu 0 4 516 525 526 517
		f 3 -684 682 578
		mu 0 3 467 527 464
		f 3 -685 683 579
		mu 0 3 469 528 467
		f 3 -686 684 580
		mu 0 3 471 529 469
		f 3 -687 685 581
		mu 0 3 473 530 471
		f 3 -688 686 582
		mu 0 3 475 531 473
		f 3 -689 687 583
		mu 0 3 477 532 475
		f 3 -690 688 584
		mu 0 3 479 533 477
		f 3 -683 689 585
		mu 0 3 481 534 479
		f 3 690 -692 -627
		mu 0 3 518 535 519
		f 3 691 -693 -628
		mu 0 3 519 536 520
		f 3 692 -694 -629
		mu 0 3 520 537 521
		f 3 693 -695 -630
		mu 0 3 521 538 522
		f 3 694 -696 -631
		mu 0 3 522 539 523
		f 3 695 -697 -632
		mu 0 3 523 540 524
		f 3 696 -698 -633
		mu 0 3 524 541 525
		f 3 697 -691 -634
		mu 0 3 525 542 526
		f 4 698 715 -707 -715
		mu 0 4 543 544 545 546
		f 4 699 716 -708 -716
		mu 0 4 544 547 548 545
		f 4 700 717 -709 -717
		mu 0 4 547 549 550 548
		f 4 701 718 -710 -718
		mu 0 4 549 551 552 550
		f 4 702 719 -711 -719
		mu 0 4 551 553 554 552
		f 4 703 720 -712 -720
		mu 0 4 553 555 556 554
		f 4 704 721 -713 -721
		mu 0 4 555 557 558 556
		f 4 705 714 -714 -722
		mu 0 4 557 559 560 558
		f 3 -699 -723 723
		mu 0 3 561 562 563
		f 3 -700 -724 724
		mu 0 3 564 561 563
		f 3 -701 -725 725
		mu 0 3 565 564 563
		f 3 -702 -726 726
		mu 0 3 566 565 563
		f 3 -703 -727 727
		mu 0 3 567 566 563
		f 3 -704 -728 728
		mu 0 3 568 567 563
		f 3 -705 -729 729
		mu 0 3 569 568 563
		f 3 -706 -730 722
		mu 0 3 562 569 563
		f 3 706 731 -731
		mu 0 3 570 571 572
		f 3 707 732 -732
		mu 0 3 571 573 572
		f 3 708 733 -733
		mu 0 3 573 574 572
		f 3 709 734 -734
		mu 0 3 574 575 572
		f 3 710 735 -735
		mu 0 3 575 576 572
		f 3 711 736 -736
		mu 0 3 576 577 572
		f 3 712 737 -737
		mu 0 3 577 578 572
		f 3 713 730 -738
		mu 0 3 578 570 572
		f 4 738 795 -747 -795
		mu 0 4 579 580 581 582
		f 4 739 796 -748 -796
		mu 0 4 580 583 584 581
		f 4 740 797 -749 -797
		mu 0 4 583 585 586 584
		f 4 741 798 -750 -798
		mu 0 4 585 587 588 586
		f 4 742 799 -751 -799
		mu 0 4 587 589 590 588
		f 4 743 800 -752 -800
		mu 0 4 589 591 592 590
		f 4 744 801 -753 -801
		mu 0 4 591 593 594 592
		f 4 745 794 -754 -802
		mu 0 4 593 595 596 594
		f 4 746 803 -755 -803
		mu 0 4 582 581 597 598
		f 4 747 804 -756 -804
		mu 0 4 581 584 599 597
		f 4 748 805 -757 -805
		mu 0 4 584 586 600 599
		f 4 749 806 -758 -806
		mu 0 4 586 588 601 600
		f 4 750 807 -759 -807
		mu 0 4 588 590 602 601
		f 4 751 808 -760 -808
		mu 0 4 590 592 603 602
		f 4 752 809 -761 -809
		mu 0 4 592 594 604 603
		f 4 753 802 -762 -810
		mu 0 4 594 596 605 604
		f 4 754 811 -763 -811
		mu 0 4 598 597 606 607
		f 4 755 812 -764 -812
		mu 0 4 597 599 608 606
		f 4 756 813 -765 -813
		mu 0 4 599 600 609 608
		f 4 757 814 -766 -814
		mu 0 4 600 601 610 609
		f 4 758 815 -767 -815
		mu 0 4 601 602 611 610
		f 4 759 816 -768 -816
		mu 0 4 602 603 612 611
		f 4 760 817 -769 -817
		mu 0 4 603 604 613 612
		f 4 761 810 -770 -818
		mu 0 4 604 605 614 613
		f 4 762 819 -771 -819
		mu 0 4 607 606 615 616
		f 4 763 820 -772 -820
		mu 0 4 606 608 617 615
		f 4 764 821 -773 -821
		mu 0 4 608 609 618 617
		f 4 765 822 -774 -822
		mu 0 4 609 610 619 618
		f 4 766 823 -775 -823
		mu 0 4 610 611 620 619
		f 4 767 824 -776 -824
		mu 0 4 611 612 621 620
		f 4 768 825 -777 -825
		mu 0 4 612 613 622 621
		f 4 769 818 -778 -826
		mu 0 4 613 614 623 622
		f 4 770 827 -779 -827
		mu 0 4 616 615 624 625
		f 4 771 828 -780 -828
		mu 0 4 615 617 626 624
		f 4 772 829 -781 -829
		mu 0 4 617 618 627 626
		f 4 773 830 -782 -830
		mu 0 4 618 619 628 627
		f 4 774 831 -783 -831
		mu 0 4 619 620 629 628
		f 4 775 832 -784 -832
		mu 0 4 620 621 630 629
		f 4 776 833 -785 -833
		mu 0 4 621 622 631 630
		f 4 777 826 -786 -834
		mu 0 4 622 623 632 631
		f 4 778 835 -787 -835
		mu 0 4 625 624 633 634
		f 4 779 836 -788 -836
		mu 0 4 624 626 635 633
		f 4 780 837 -789 -837
		mu 0 4 626 627 636 635
		f 4 781 838 -790 -838
		mu 0 4 627 628 637 636
		f 4 782 839 -791 -839
		mu 0 4 628 629 638 637
		f 4 783 840 -792 -840
		mu 0 4 629 630 639 638
		f 4 784 841 -793 -841
		mu 0 4 630 631 640 639
		f 4 785 834 -794 -842
		mu 0 4 631 632 641 640
		f 3 -739 -843 843
		mu 0 3 580 579 642
		f 3 -740 -844 844
		mu 0 3 583 580 643
		f 3 -741 -845 845
		mu 0 3 585 583 644
		f 3 -742 -846 846
		mu 0 3 587 585 645
		f 3 -743 -847 847
		mu 0 3 589 587 646
		f 3 -744 -848 848
		mu 0 3 591 589 647
		f 3 -745 -849 849
		mu 0 3 593 591 648
		f 3 -746 -850 842
		mu 0 3 595 593 649
		f 3 786 851 -851
		mu 0 3 634 633 650
		f 3 787 852 -852
		mu 0 3 633 635 651
		f 3 788 853 -853
		mu 0 3 635 636 652
		f 3 789 854 -854
		mu 0 3 636 637 653
		f 3 790 855 -855
		mu 0 3 637 638 654
		f 3 791 856 -856
		mu 0 3 638 639 655
		f 3 792 857 -857
		mu 0 3 639 640 656
		f 3 793 850 -858
		mu 0 3 640 641 657
		f 4 874 866 -876 -859
		mu 0 4 658 659 660 661
		f 4 875 867 -877 -860
		mu 0 4 661 660 662 663
		f 4 876 868 -878 -861
		mu 0 4 663 662 664 665
		f 4 877 869 -879 -862
		mu 0 4 665 664 666 667
		f 4 878 870 -880 -863
		mu 0 4 667 666 668 669
		f 4 879 871 -881 -864
		mu 0 4 669 668 670 671
		f 4 880 872 -882 -865
		mu 0 4 671 670 672 673
		f 4 881 873 -875 -866
		mu 0 4 673 672 674 675
		f 3 -884 882 858
		mu 0 3 676 677 678
		f 3 -885 883 859
		mu 0 3 679 677 676
		f 3 -886 884 860
		mu 0 3 680 677 679
		f 3 -887 885 861
		mu 0 3 681 677 680
		f 3 -888 886 862
		mu 0 3 682 677 681
		f 3 -889 887 863
		mu 0 3 683 677 682
		f 3 -890 888 864
		mu 0 3 684 677 683
		f 3 -883 889 865
		mu 0 3 678 677 684
		f 3 890 -892 -867
		mu 0 3 685 686 687
		f 3 891 -893 -868
		mu 0 3 687 686 688
		f 3 892 -894 -869
		mu 0 3 688 686 689
		f 3 893 -895 -870
		mu 0 3 689 686 690
		f 3 894 -896 -871
		mu 0 3 690 686 691
		f 3 895 -897 -872
		mu 0 3 691 686 692
		f 3 896 -898 -873
		mu 0 3 692 686 693
		f 3 897 -891 -874
		mu 0 3 693 686 685
		f 4 954 906 -956 -899
		mu 0 4 694 695 696 697
		f 4 955 907 -957 -900
		mu 0 4 697 696 698 699
		f 4 956 908 -958 -901
		mu 0 4 699 698 700 701
		f 4 957 909 -959 -902
		mu 0 4 701 700 702 703
		f 4 958 910 -960 -903
		mu 0 4 703 702 704 705
		f 4 959 911 -961 -904
		mu 0 4 705 704 706 707
		f 4 960 912 -962 -905
		mu 0 4 707 706 708 709
		f 4 961 913 -955 -906
		mu 0 4 709 708 710 711
		f 4 962 914 -964 -907
		mu 0 4 695 712 713 696
		f 4 963 915 -965 -908
		mu 0 4 696 713 714 698
		f 4 964 916 -966 -909
		mu 0 4 698 714 715 700
		f 4 965 917 -967 -910
		mu 0 4 700 715 716 702
		f 4 966 918 -968 -911
		mu 0 4 702 716 717 704
		f 4 967 919 -969 -912
		mu 0 4 704 717 718 706;
	setAttr ".fc[500:789]"
		f 4 968 920 -970 -913
		mu 0 4 706 718 719 708
		f 4 969 921 -963 -914
		mu 0 4 708 719 720 710
		f 4 970 922 -972 -915
		mu 0 4 712 721 722 713
		f 4 971 923 -973 -916
		mu 0 4 713 722 723 714
		f 4 972 924 -974 -917
		mu 0 4 714 723 724 715
		f 4 973 925 -975 -918
		mu 0 4 715 724 725 716
		f 4 974 926 -976 -919
		mu 0 4 716 725 726 717
		f 4 975 927 -977 -920
		mu 0 4 717 726 727 718
		f 4 976 928 -978 -921
		mu 0 4 718 727 728 719
		f 4 977 929 -971 -922
		mu 0 4 719 728 729 720
		f 4 978 930 -980 -923
		mu 0 4 721 730 731 722
		f 4 979 931 -981 -924
		mu 0 4 722 731 732 723
		f 4 980 932 -982 -925
		mu 0 4 723 732 733 724
		f 4 981 933 -983 -926
		mu 0 4 724 733 734 725
		f 4 982 934 -984 -927
		mu 0 4 725 734 735 726
		f 4 983 935 -985 -928
		mu 0 4 726 735 736 727
		f 4 984 936 -986 -929
		mu 0 4 727 736 737 728
		f 4 985 937 -979 -930
		mu 0 4 728 737 738 729
		f 4 986 938 -988 -931
		mu 0 4 730 739 740 731
		f 4 987 939 -989 -932
		mu 0 4 731 740 741 732
		f 4 988 940 -990 -933
		mu 0 4 732 741 742 733
		f 4 989 941 -991 -934
		mu 0 4 733 742 743 734
		f 4 990 942 -992 -935
		mu 0 4 734 743 744 735
		f 4 991 943 -993 -936
		mu 0 4 735 744 745 736
		f 4 992 944 -994 -937
		mu 0 4 736 745 746 737
		f 4 993 945 -987 -938
		mu 0 4 737 746 747 738
		f 4 994 946 -996 -939
		mu 0 4 739 748 749 740
		f 4 995 947 -997 -940
		mu 0 4 740 749 750 741
		f 4 996 948 -998 -941
		mu 0 4 741 750 751 742
		f 4 997 949 -999 -942
		mu 0 4 742 751 752 743
		f 4 998 950 -1000 -943
		mu 0 4 743 752 753 744
		f 4 999 951 -1001 -944
		mu 0 4 744 753 754 745
		f 4 1000 952 -1002 -945
		mu 0 4 745 754 755 746
		f 4 1001 953 -995 -946
		mu 0 4 746 755 756 747
		f 3 -1004 1002 898
		mu 0 3 697 757 694
		f 3 -1005 1003 899
		mu 0 3 699 758 697
		f 3 -1006 1004 900
		mu 0 3 701 759 699
		f 3 -1007 1005 901
		mu 0 3 703 760 701
		f 3 -1008 1006 902
		mu 0 3 705 761 703
		f 3 -1009 1007 903
		mu 0 3 707 762 705
		f 3 -1010 1008 904
		mu 0 3 709 763 707
		f 3 -1003 1009 905
		mu 0 3 711 764 709
		f 3 1010 -1012 -947
		mu 0 3 748 765 749
		f 3 1011 -1013 -948
		mu 0 3 749 766 750
		f 3 1012 -1014 -949
		mu 0 3 750 767 751
		f 3 1013 -1015 -950
		mu 0 3 751 768 752
		f 3 1014 -1016 -951
		mu 0 3 752 769 753
		f 3 1015 -1017 -952
		mu 0 3 753 770 754
		f 3 1016 -1018 -953
		mu 0 3 754 771 755
		f 3 1017 -1011 -954
		mu 0 3 755 772 756
		f 4 1034 1026 -1036 -1019
		mu 0 4 773 774 775 776
		f 4 1035 1027 -1037 -1020
		mu 0 4 776 775 777 778
		f 4 1036 1028 -1038 -1021
		mu 0 4 778 777 779 780
		f 4 1037 1029 -1039 -1022
		mu 0 4 780 779 781 782
		f 4 1038 1030 -1040 -1023
		mu 0 4 782 781 783 784
		f 4 1039 1031 -1041 -1024
		mu 0 4 784 783 785 786
		f 4 1040 1032 -1042 -1025
		mu 0 4 786 785 787 788
		f 4 1041 1033 -1035 -1026
		mu 0 4 788 787 789 790
		f 3 -1044 1042 1018
		mu 0 3 791 792 793
		f 3 -1045 1043 1019
		mu 0 3 794 792 791
		f 3 -1046 1044 1020
		mu 0 3 795 792 794
		f 3 -1047 1045 1021
		mu 0 3 796 792 795
		f 3 -1048 1046 1022
		mu 0 3 797 792 796
		f 3 -1049 1047 1023
		mu 0 3 798 792 797
		f 3 -1050 1048 1024
		mu 0 3 799 792 798
		f 3 -1043 1049 1025
		mu 0 3 793 792 799
		f 3 1050 -1052 -1027
		mu 0 3 800 801 802
		f 3 1051 -1053 -1028
		mu 0 3 802 801 803
		f 3 1052 -1054 -1029
		mu 0 3 803 801 804
		f 3 1053 -1055 -1030
		mu 0 3 804 801 805
		f 3 1054 -1056 -1031
		mu 0 3 805 801 806
		f 3 1055 -1057 -1032
		mu 0 3 806 801 807
		f 3 1056 -1058 -1033
		mu 0 3 807 801 808
		f 3 1057 -1051 -1034
		mu 0 3 808 801 800
		f 4 1114 1066 -1116 -1059
		mu 0 4 809 810 811 812
		f 4 1115 1067 -1117 -1060
		mu 0 4 812 811 813 814
		f 4 1116 1068 -1118 -1061
		mu 0 4 814 813 815 816
		f 4 1117 1069 -1119 -1062
		mu 0 4 816 815 817 818
		f 4 1118 1070 -1120 -1063
		mu 0 4 818 817 819 820
		f 4 1119 1071 -1121 -1064
		mu 0 4 820 819 821 822
		f 4 1120 1072 -1122 -1065
		mu 0 4 822 821 823 824
		f 4 1121 1073 -1115 -1066
		mu 0 4 824 823 825 826
		f 4 1122 1074 -1124 -1067
		mu 0 4 810 827 828 811
		f 4 1123 1075 -1125 -1068
		mu 0 4 811 828 829 813
		f 4 1124 1076 -1126 -1069
		mu 0 4 813 829 830 815
		f 4 1125 1077 -1127 -1070
		mu 0 4 815 830 831 817
		f 4 1126 1078 -1128 -1071
		mu 0 4 817 831 832 819
		f 4 1127 1079 -1129 -1072
		mu 0 4 819 832 833 821
		f 4 1128 1080 -1130 -1073
		mu 0 4 821 833 834 823
		f 4 1129 1081 -1123 -1074
		mu 0 4 823 834 835 825
		f 4 1130 1082 -1132 -1075
		mu 0 4 827 836 837 828
		f 4 1131 1083 -1133 -1076
		mu 0 4 828 837 838 829
		f 4 1132 1084 -1134 -1077
		mu 0 4 829 838 839 830
		f 4 1133 1085 -1135 -1078
		mu 0 4 830 839 840 831
		f 4 1134 1086 -1136 -1079
		mu 0 4 831 840 841 832
		f 4 1135 1087 -1137 -1080
		mu 0 4 832 841 842 833
		f 4 1136 1088 -1138 -1081
		mu 0 4 833 842 843 834
		f 4 1137 1089 -1131 -1082
		mu 0 4 834 843 844 835
		f 4 1138 1090 -1140 -1083
		mu 0 4 836 845 846 837
		f 4 1139 1091 -1141 -1084
		mu 0 4 837 846 847 838
		f 4 1140 1092 -1142 -1085
		mu 0 4 838 847 848 839
		f 4 1141 1093 -1143 -1086
		mu 0 4 839 848 849 840
		f 4 1142 1094 -1144 -1087
		mu 0 4 840 849 850 841
		f 4 1143 1095 -1145 -1088
		mu 0 4 841 850 851 842
		f 4 1144 1096 -1146 -1089
		mu 0 4 842 851 852 843
		f 4 1145 1097 -1139 -1090
		mu 0 4 843 852 853 844
		f 4 1146 1098 -1148 -1091
		mu 0 4 845 854 855 846
		f 4 1147 1099 -1149 -1092
		mu 0 4 846 855 856 847
		f 4 1148 1100 -1150 -1093
		mu 0 4 847 856 857 848
		f 4 1149 1101 -1151 -1094
		mu 0 4 848 857 858 849
		f 4 1150 1102 -1152 -1095
		mu 0 4 849 858 859 850
		f 4 1151 1103 -1153 -1096
		mu 0 4 850 859 860 851
		f 4 1152 1104 -1154 -1097
		mu 0 4 851 860 861 852
		f 4 1153 1105 -1147 -1098
		mu 0 4 852 861 862 853
		f 4 1154 1106 -1156 -1099
		mu 0 4 854 863 864 855
		f 4 1155 1107 -1157 -1100
		mu 0 4 855 864 865 856
		f 4 1156 1108 -1158 -1101
		mu 0 4 856 865 866 857
		f 4 1157 1109 -1159 -1102
		mu 0 4 857 866 867 858
		f 4 1158 1110 -1160 -1103
		mu 0 4 858 867 868 859
		f 4 1159 1111 -1161 -1104
		mu 0 4 859 868 869 860
		f 4 1160 1112 -1162 -1105
		mu 0 4 860 869 870 861
		f 4 1161 1113 -1155 -1106
		mu 0 4 861 870 871 862
		f 3 -1164 1162 1058
		mu 0 3 812 872 809
		f 3 -1165 1163 1059
		mu 0 3 814 873 812
		f 3 -1166 1164 1060
		mu 0 3 816 874 814
		f 3 -1167 1165 1061
		mu 0 3 818 875 816
		f 3 -1168 1166 1062
		mu 0 3 820 876 818
		f 3 -1169 1167 1063
		mu 0 3 822 877 820
		f 3 -1170 1168 1064
		mu 0 3 824 878 822
		f 3 -1163 1169 1065
		mu 0 3 826 879 824
		f 3 1170 -1172 -1107
		mu 0 3 863 880 864
		f 3 1171 -1173 -1108
		mu 0 3 864 881 865
		f 3 1172 -1174 -1109
		mu 0 3 865 882 866
		f 3 1173 -1175 -1110
		mu 0 3 866 883 867
		f 3 1174 -1176 -1111
		mu 0 3 867 884 868
		f 3 1175 -1177 -1112
		mu 0 3 868 885 869
		f 3 1176 -1178 -1113
		mu 0 3 869 886 870
		f 3 1177 -1171 -1114
		mu 0 3 870 887 871
		f 4 1178 1195 -1187 -1195
		mu 0 4 888 889 890 891
		f 4 1179 1196 -1188 -1196
		mu 0 4 889 892 893 890
		f 4 1180 1197 -1189 -1197
		mu 0 4 892 894 895 893
		f 4 1181 1198 -1190 -1198
		mu 0 4 894 896 897 895
		f 4 1182 1199 -1191 -1199
		mu 0 4 896 898 899 897
		f 4 1183 1200 -1192 -1200
		mu 0 4 898 900 901 899
		f 4 1184 1201 -1193 -1201
		mu 0 4 900 902 903 901
		f 4 1185 1194 -1194 -1202
		mu 0 4 902 904 905 903
		f 3 -1179 -1203 1203
		mu 0 3 906 907 908
		f 3 -1180 -1204 1204
		mu 0 3 909 906 908
		f 3 -1181 -1205 1205
		mu 0 3 910 909 908
		f 3 -1182 -1206 1206
		mu 0 3 911 910 908
		f 3 -1183 -1207 1207
		mu 0 3 912 911 908
		f 3 -1184 -1208 1208
		mu 0 3 913 912 908
		f 3 -1185 -1209 1209
		mu 0 3 914 913 908
		f 3 -1186 -1210 1202
		mu 0 3 907 914 908
		f 3 1186 1211 -1211
		mu 0 3 915 916 917
		f 3 1187 1212 -1212
		mu 0 3 916 918 917
		f 3 1188 1213 -1213
		mu 0 3 918 919 917
		f 3 1189 1214 -1214
		mu 0 3 919 920 917
		f 3 1190 1215 -1215
		mu 0 3 920 921 917
		f 3 1191 1216 -1216
		mu 0 3 921 922 917
		f 3 1192 1217 -1217
		mu 0 3 922 923 917
		f 3 1193 1210 -1218
		mu 0 3 923 915 917
		f 4 1218 1275 -1227 -1275
		mu 0 4 924 925 926 927
		f 4 1219 1276 -1228 -1276
		mu 0 4 925 928 929 926
		f 4 1220 1277 -1229 -1277
		mu 0 4 928 930 931 929
		f 4 1221 1278 -1230 -1278
		mu 0 4 930 932 933 931
		f 4 1222 1279 -1231 -1279
		mu 0 4 932 934 935 933
		f 4 1223 1280 -1232 -1280
		mu 0 4 934 936 937 935
		f 4 1224 1281 -1233 -1281
		mu 0 4 936 938 939 937
		f 4 1225 1274 -1234 -1282
		mu 0 4 938 940 941 939
		f 4 1226 1283 -1235 -1283
		mu 0 4 927 926 942 943
		f 4 1227 1284 -1236 -1284
		mu 0 4 926 929 944 942
		f 4 1228 1285 -1237 -1285
		mu 0 4 929 931 945 944
		f 4 1229 1286 -1238 -1286
		mu 0 4 931 933 946 945
		f 4 1230 1287 -1239 -1287
		mu 0 4 933 935 947 946
		f 4 1231 1288 -1240 -1288
		mu 0 4 935 937 948 947
		f 4 1232 1289 -1241 -1289
		mu 0 4 937 939 949 948
		f 4 1233 1282 -1242 -1290
		mu 0 4 939 941 950 949
		f 4 1234 1291 -1243 -1291
		mu 0 4 943 942 951 952
		f 4 1235 1292 -1244 -1292
		mu 0 4 942 944 953 951
		f 4 1236 1293 -1245 -1293
		mu 0 4 944 945 954 953
		f 4 1237 1294 -1246 -1294
		mu 0 4 945 946 955 954
		f 4 1238 1295 -1247 -1295
		mu 0 4 946 947 956 955
		f 4 1239 1296 -1248 -1296
		mu 0 4 947 948 957 956
		f 4 1240 1297 -1249 -1297
		mu 0 4 948 949 958 957
		f 4 1241 1290 -1250 -1298
		mu 0 4 949 950 959 958
		f 4 1242 1299 -1251 -1299
		mu 0 4 952 951 960 961
		f 4 1243 1300 -1252 -1300
		mu 0 4 951 953 962 960
		f 4 1244 1301 -1253 -1301
		mu 0 4 953 954 963 962
		f 4 1245 1302 -1254 -1302
		mu 0 4 954 955 964 963
		f 4 1246 1303 -1255 -1303
		mu 0 4 955 956 965 964
		f 4 1247 1304 -1256 -1304
		mu 0 4 956 957 966 965
		f 4 1248 1305 -1257 -1305
		mu 0 4 957 958 967 966
		f 4 1249 1298 -1258 -1306
		mu 0 4 958 959 968 967
		f 4 1250 1307 -1259 -1307
		mu 0 4 961 960 969 970
		f 4 1251 1308 -1260 -1308
		mu 0 4 960 962 971 969
		f 4 1252 1309 -1261 -1309
		mu 0 4 962 963 972 971
		f 4 1253 1310 -1262 -1310
		mu 0 4 963 964 973 972
		f 4 1254 1311 -1263 -1311
		mu 0 4 964 965 974 973
		f 4 1255 1312 -1264 -1312
		mu 0 4 965 966 975 974
		f 4 1256 1313 -1265 -1313
		mu 0 4 966 967 976 975
		f 4 1257 1306 -1266 -1314
		mu 0 4 967 968 977 976
		f 4 1258 1315 -1267 -1315
		mu 0 4 970 969 978 979
		f 4 1259 1316 -1268 -1316
		mu 0 4 969 971 980 978
		f 4 1260 1317 -1269 -1317
		mu 0 4 971 972 981 980
		f 4 1261 1318 -1270 -1318
		mu 0 4 972 973 982 981
		f 4 1262 1319 -1271 -1319
		mu 0 4 973 974 983 982
		f 4 1263 1320 -1272 -1320
		mu 0 4 974 975 984 983
		f 4 1264 1321 -1273 -1321
		mu 0 4 975 976 985 984
		f 4 1265 1314 -1274 -1322
		mu 0 4 976 977 986 985
		f 3 -1219 -1323 1323
		mu 0 3 925 924 987
		f 3 -1220 -1324 1324
		mu 0 3 928 925 988
		f 3 -1221 -1325 1325
		mu 0 3 930 928 989
		f 3 -1222 -1326 1326
		mu 0 3 932 930 990
		f 3 -1223 -1327 1327
		mu 0 3 934 932 991
		f 3 -1224 -1328 1328
		mu 0 3 936 934 992
		f 3 -1225 -1329 1329
		mu 0 3 938 936 993
		f 3 -1226 -1330 1322
		mu 0 3 940 938 994
		f 3 1266 1331 -1331
		mu 0 3 979 978 995
		f 3 1267 1332 -1332
		mu 0 3 978 980 996
		f 3 1268 1333 -1333
		mu 0 3 980 981 997
		f 3 1269 1334 -1334
		mu 0 3 981 982 998
		f 3 1270 1335 -1335
		mu 0 3 982 983 999
		f 3 1271 1336 -1336
		mu 0 3 983 984 1000
		f 3 1272 1337 -1337
		mu 0 3 984 985 1001
		f 3 1273 1330 -1338
		mu 0 3 985 986 1002
		f 4 1338 1371 -1347 -1371
		mu 0 4 1003 1004 1005 1006
		f 4 1339 1372 -1348 -1372
		mu 0 4 1004 1007 1008 1005
		f 4 1340 1373 -1349 -1373
		mu 0 4 1007 1009 1010 1008
		f 4 1341 1374 -1350 -1374
		mu 0 4 1009 1011 1012 1010
		f 4 1342 1375 -1351 -1375
		mu 0 4 1011 1013 1014 1012
		f 4 1343 1376 -1352 -1376
		mu 0 4 1013 1015 1016 1014
		f 4 1344 1377 -1353 -1377
		mu 0 4 1015 1017 1018 1016
		f 4 1345 1370 -1354 -1378
		mu 0 4 1017 1019 1020 1018
		f 4 1346 1379 -1355 -1379
		mu 0 4 1006 1005 1021 1022
		f 4 1347 1380 -1356 -1380
		mu 0 4 1005 1008 1023 1021
		f 4 1348 1381 -1357 -1381
		mu 0 4 1008 1010 1024 1023
		f 4 1349 1382 -1358 -1382
		mu 0 4 1010 1012 1025 1024
		f 4 1350 1383 -1359 -1383
		mu 0 4 1012 1014 1026 1025
		f 4 1351 1384 -1360 -1384
		mu 0 4 1014 1016 1027 1026
		f 4 1352 1385 -1361 -1385
		mu 0 4 1016 1018 1028 1027
		f 4 1353 1378 -1362 -1386
		mu 0 4 1018 1020 1029 1028
		f 4 1354 1387 -1363 -1387
		mu 0 4 1022 1021 1030 1031
		f 4 1355 1388 -1364 -1388
		mu 0 4 1021 1023 1032 1030
		f 4 1356 1389 -1365 -1389
		mu 0 4 1023 1024 1033 1032
		f 4 1357 1390 -1366 -1390
		mu 0 4 1024 1025 1034 1033
		f 4 1358 1391 -1367 -1391
		mu 0 4 1025 1026 1035 1034
		f 4 1359 1392 -1368 -1392
		mu 0 4 1026 1027 1036 1035
		f 4 1360 1393 -1369 -1393
		mu 0 4 1027 1028 1037 1036
		f 4 1361 1386 -1370 -1394
		mu 0 4 1028 1029 1038 1037
		f 3 -1339 -1395 1395
		mu 0 3 1004 1003 1039
		f 3 -1340 -1396 1396
		mu 0 3 1007 1004 1040
		f 3 -1341 -1397 1397
		mu 0 3 1009 1007 1041
		f 3 -1342 -1398 1398
		mu 0 3 1011 1009 1042
		f 3 -1343 -1399 1399
		mu 0 3 1013 1011 1043
		f 3 -1344 -1400 1400
		mu 0 3 1015 1013 1044
		f 3 -1345 -1401 1401
		mu 0 3 1017 1015 1045
		f 3 -1346 -1402 1394
		mu 0 3 1019 1017 1046
		f 4 1434 1410 -1436 -1403
		mu 0 4 1047 1050 1049 1048
		f 4 1435 1411 -1437 -1404
		mu 0 4 1048 1049 1052 1051
		f 4 1436 1412 -1438 -1405
		mu 0 4 1051 1052 1054 1053
		f 4 1437 1413 -1439 -1406
		mu 0 4 1053 1054 1056 1055
		f 4 1438 1414 -1440 -1407
		mu 0 4 1055 1056 1058 1057
		f 4 1439 1415 -1441 -1408
		mu 0 4 1057 1058 1060 1059
		f 4 1440 1416 -1442 -1409
		mu 0 4 1059 1060 1062 1061
		f 4 1441 1417 -1435 -1410
		mu 0 4 1061 1062 1064 1063
		f 4 1442 1418 -1444 -1411
		mu 0 4 1050 1066 1065 1049
		f 4 1443 1419 -1445 -1412
		mu 0 4 1049 1065 1067 1052
		f 4 1444 1420 -1446 -1413
		mu 0 4 1052 1067 1068 1054
		f 4 1445 1421 -1447 -1414
		mu 0 4 1054 1068 1069 1056
		f 4 1446 1422 -1448 -1415
		mu 0 4 1056 1069 1070 1058
		f 4 1447 1423 -1449 -1416
		mu 0 4 1058 1070 1071 1060
		f 4 1448 1424 -1450 -1417
		mu 0 4 1060 1071 1072 1062
		f 4 1449 1425 -1443 -1418
		mu 0 4 1062 1072 1073 1064
		f 4 1450 1426 -1452 -1419
		mu 0 4 1066 1075 1074 1065
		f 4 1451 1427 -1453 -1420
		mu 0 4 1065 1074 1076 1067
		f 4 1452 1428 -1454 -1421
		mu 0 4 1067 1076 1077 1068
		f 4 1453 1429 -1455 -1422
		mu 0 4 1068 1077 1078 1069
		f 4 1454 1430 -1456 -1423
		mu 0 4 1069 1078 1079 1070
		f 4 1455 1431 -1457 -1424
		mu 0 4 1070 1079 1080 1071
		f 4 1456 1432 -1458 -1425
		mu 0 4 1071 1080 1081 1072
		f 4 1457 1433 -1451 -1426
		mu 0 4 1072 1081 1082 1073
		f 3 -1460 1458 1402
		mu 0 3 1048 1083 1047
		f 3 -1461 1459 1403
		mu 0 3 1051 1084 1048
		f 3 -1462 1460 1404
		mu 0 3 1053 1085 1051
		f 3 -1463 1461 1405
		mu 0 3 1055 1086 1053
		f 3 -1464 1462 1406
		mu 0 3 1057 1087 1055
		f 3 -1465 1463 1407
		mu 0 3 1059 1088 1057
		f 3 -1466 1464 1408
		mu 0 3 1061 1089 1059
		f 3 -1459 1465 1409
		mu 0 3 1063 1090 1061;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
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
createNode skinCluster -n "skinCluster1";
	setAttr -s 423 ".wl";
	setAttr ".wl[0].w[26]"  1;
	setAttr ".wl[1].w[26]"  1;
	setAttr ".wl[2].w[26]"  1;
	setAttr ".wl[3].w[26]"  1;
	setAttr ".wl[4].w[26]"  1;
	setAttr ".wl[5].w[26]"  1;
	setAttr ".wl[6].w[26]"  1;
	setAttr ".wl[7].w[26]"  1;
	setAttr ".wl[8].w[26]"  1;
	setAttr ".wl[9].w[26]"  1;
	setAttr ".wl[10].w[26]"  1;
	setAttr ".wl[11].w[26]"  1;
	setAttr ".wl[12].w[25]"  1;
	setAttr ".wl[13].w[25]"  1;
	setAttr ".wl[14].w[25]"  1;
	setAttr ".wl[15].w[25]"  1;
	setAttr ".wl[16].w[25]"  1;
	setAttr ".wl[17].w[25]"  1;
	setAttr ".wl[18].w[25]"  1;
	setAttr ".wl[19].w[25]"  1;
	setAttr ".wl[20].w[25]"  1;
	setAttr ".wl[21].w[25]"  1;
	setAttr ".wl[22].w[25]"  1;
	setAttr ".wl[23].w[25]"  1;
	setAttr ".wl[24].w[28]"  1;
	setAttr ".wl[25].w[28]"  1;
	setAttr ".wl[26].w[28]"  1;
	setAttr ".wl[27].w[28]"  1;
	setAttr ".wl[28].w[28]"  1;
	setAttr ".wl[29].w[28]"  1;
	setAttr ".wl[30].w[28]"  1;
	setAttr ".wl[31].w[28]"  1;
	setAttr ".wl[32].w[45]"  1;
	setAttr ".wl[33].w[45]"  1;
	setAttr ".wl[34].w[24]"  1;
	setAttr ".wl[35].w[24]"  1;
	setAttr ".wl[36].w[24]"  1;
	setAttr ".wl[37].w[24]"  1;
	setAttr ".wl[38].w[45]"  1;
	setAttr ".wl[39].w[45]"  1;
	setAttr ".wl[40].w[44]"  1;
	setAttr ".wl[41].w[44]"  1;
	setAttr ".wl[42].w[23]"  1;
	setAttr ".wl[43].w[23]"  1;
	setAttr ".wl[44].w[23]"  1;
	setAttr ".wl[45].w[23]"  1;
	setAttr ".wl[46].w[44]"  1;
	setAttr ".wl[47].w[44]"  1;
	setAttr ".wl[48].w[1]"  1;
	setAttr ".wl[49].w[1]"  1;
	setAttr ".wl[50].w[1]"  1;
	setAttr ".wl[51].w[1]"  1;
	setAttr ".wl[52].w[22]"  1;
	setAttr ".wl[53].w[14]"  1;
	setAttr ".wl[54].w[22]"  1;
	setAttr ".wl[55].w[14]"  1;
	setAttr ".wl[56].w[22]"  1;
	setAttr ".wl[57].w[14]"  1;
	setAttr ".wl[58].w[22]"  1;
	setAttr ".wl[59].w[14]"  1;
	setAttr ".wl[60].w[1]"  1;
	setAttr ".wl[61].w[1]"  1;
	setAttr ".wl[62].w[1]"  1;
	setAttr ".wl[63].w[1]"  1;
	setAttr -s 3 ".wl[64].w";
	setAttr ".wl[64].w[5]" 0.40158001855878322;
	setAttr ".wl[64].w[6]" 0.39359001930329301;
	setAttr ".wl[64].w[22]" 0.2048299621379239;
	setAttr -s 3 ".wl[65].w";
	setAttr ".wl[65].w[5]" 0.40158001855878322;
	setAttr ".wl[65].w[6]" 0.39359001930329301;
	setAttr ".wl[65].w[14]" 0.2048299621379239;
	setAttr -s 3 ".wl[66].w[5:7]"  0.38097795933374851 0.39264425562801947 
		0.226377785038232;
	setAttr -s 3 ".wl[67].w[5:7]"  0.38097795933374851 0.39264425562801947 
		0.226377785038232;
	setAttr -s 3 ".wl[68].w[6:8]"  0.21444554868532456 0.39078732036673153 
		0.39476713094794402;
	setAttr -s 3 ".wl[69].w[6:8]"  0.21444554868532456 0.39078732036673153 
		0.39476713094794402;
	setAttr -s 3 ".wl[70].w[6:8]"  0.21663094808961592 0.39968901499462034 
		0.38368003691576369;
	setAttr -s 4 ".wl[71].w";
	setAttr ".wl[71].w[6]" 0.21663094728360721;
	setAttr ".wl[71].w[7]" 0.39968901986232896;
	setAttr ".wl[71].w[8]" 0.38368003686958374;
	setAttr ".wl[71].w[11]" -4.0155199609751823e-09;
	setAttr -s 3 ".wl[72].w";
	setAttr ".wl[72].w[4]" 0.33801287275095188;
	setAttr ".wl[72].w[5]" 0.36378666274811311;
	setAttr ".wl[72].w[14]" 0.29820046450093507;
	setAttr -s 3 ".wl[73].w";
	setAttr ".wl[73].w[4]" 0.36284415514745622;
	setAttr ".wl[73].w[5]" 0.3628229081756229;
	setAttr ".wl[73].w[14]" 0.27433293667692077;
	setAttr ".wl[74].w[1]"  1;
	setAttr ".wl[75].w[1]"  1;
	setAttr ".wl[76].w[1]"  1;
	setAttr ".wl[77].w[1]"  1;
	setAttr -s 3 ".wl[78].w";
	setAttr ".wl[78].w[5]" 0.33338672122127105;
	setAttr ".wl[78].w[14]" 0.33338672122127105;
	setAttr ".wl[78].w[22]" 0.33322655755745789;
	setAttr -s 3 ".wl[79].w[5:7]"  0.36983491040859706 0.36983491040859706 
		0.26033017918280582;
	setAttr -s 3 ".wl[80].w[5:7]"  0.49353872699459778 0.37774307212409958 
		0.1287182008813027;
	setAttr -s 3 ".wl[81].w[6:8]"  0.17387764014036333 0.36464648602989674 
		0.46147587382973998;
	setAttr -s 3 ".wl[82].w[6:8]"  0.19479562272128248 0.41266638910148173 
		0.39253798817723567;
	setAttr -s 3 ".wl[83].w[5:7]"  0.39271361901360968 0.41891919412266571 
		0.18836718686372467;
	setAttr ".wl[84].w[4]"  1;
	setAttr ".wl[85].w[4]"  1;
	setAttr ".wl[86].w[4]"  1;
	setAttr ".wl[87].w[4]"  1;
	setAttr ".wl[88].w[4]"  1;
	setAttr ".wl[89].w[4]"  1;
	setAttr -s 3 ".wl[90].w[5:7]"  0.22439262346426603 0.39494134319500934 
		0.38066603334072463;
	setAttr -s 3 ".wl[91].w[5:7]"  0.19524861808267449 0.41754350926363998 
		0.38720787265368561;
	setAttr -s 3 ".wl[92].w[5:7]"  0.22439262346426603 0.39494134319500934 
		0.38066603334072463;
	setAttr -s 3 ".wl[93].w[5:7]"  0.2219206681375761 0.39415498761054274 
		0.38392434425188121;
	setAttr -s 3 ".wl[94].w[5:7]"  0.18826022627412661 0.4134991348097159 
		0.39824063891615746;
	setAttr -s 3 ".wl[95].w[5:7]"  0.2219206681375761 0.39415498761054274 
		0.38392434425188121;
	setAttr -s 3 ".wl[96].w[5:7]"  0.35032208598581954 0.4328051860997979 
		0.21687272791438256;
	setAttr -s 3 ".wl[97].w[5:7]"  0.34793989397469965 0.39704267514561647 
		0.25501743087968376;
	setAttr -s 3 ".wl[98].w[5:7]"  0.34216771204086982 0.39457260341744782 
		0.26325968454168241;
	setAttr -s 3 ".wl[99].w[5:7]"  0.33349227977232238 0.4294564971781189 
		0.23705122304955881;
	setAttr -s 3 ".wl[100].w[5:7]"  0.34216771204086982 0.39457260341744782 
		0.26325968454168241;
	setAttr -s 3 ".wl[101].w[5:7]"  0.34793989397469965 0.39704267514561647 
		0.25501743087968376;
	setAttr -s 3 ".wl[102].w[6:8]"  0.34003543580499856 0.42905938008197847 
		0.23090518411302299;
	setAttr -s 3 ".wl[103].w[6:8]"  0.34009217285842419 0.40351223223111943 
		0.25639559491045638;
	setAttr -s 3 ".wl[104].w[6:8]"  0.33600889122460292 0.40325651529933382 
		0.2607345934760632;
	setAttr -s 3 ".wl[105].w[6:8]"  0.32710608533787722 0.42953877304557087 
		0.243355141616552;
	setAttr -s 3 ".wl[106].w[6:8]"  0.33600889122460292 0.40325651529933382 
		0.2607345934760632;
	setAttr -s 3 ".wl[107].w[6:8]"  0.34009217285842419 0.40351223223111943 
		0.25639559491045638;
	setAttr ".wl[108].w[1]"  1;
	setAttr ".wl[109].w[1]"  1;
	setAttr ".wl[110].w[1]"  1;
	setAttr ".wl[111].w[1]"  1;
	setAttr ".wl[112].w[1]"  1;
	setAttr ".wl[113].w[1]"  1;
	setAttr ".wl[114].w[3]"  1;
	setAttr ".wl[115].w[3]"  1;
	setAttr ".wl[116].w[3]"  1;
	setAttr ".wl[117].w[3]"  1;
	setAttr ".wl[118].w[3]"  1;
	setAttr ".wl[119].w[3]"  1;
	setAttr -s 3 ".wl[120].w";
	setAttr ".wl[120].w[7]" 0.23860856990852256;
	setAttr ".wl[120].w[8]" 0.4672525619103961;
	setAttr ".wl[120].w[11]" 0.29413886818108137;
	setAttr -s 3 ".wl[121].w";
	setAttr ".wl[121].w[7]" 0.18911353737117195;
	setAttr ".wl[121].w[8]" 0.45143747579036991;
	setAttr ".wl[121].w[11]" 0.35944898683845811;
	setAttr -s 3 ".wl[122].w";
	setAttr ".wl[122].w[7]" 0.23372644786780444;
	setAttr ".wl[122].w[8]" 0.54866514292241475;
	setAttr ".wl[122].w[11]" 0.21760840920978089;
	setAttr -s 3 ".wl[123].w";
	setAttr ".wl[123].w[7]" 0.25252891762624857;
	setAttr ".wl[123].w[8]" 0.49502058004893257;
	setAttr ".wl[123].w[11]" 0.25245050232481869;
	setAttr -s 3 ".wl[124].w";
	setAttr ".wl[124].w[7]" 0.23860856990852256;
	setAttr ".wl[124].w[8]" 0.4672525619103961;
	setAttr ".wl[124].w[11]" 0.29413886818108137;
	setAttr -s 3 ".wl[125].w";
	setAttr ".wl[125].w[7]" 0.2525289209883928;
	setAttr ".wl[125].w[8]" 0.49502057045653552;
	setAttr ".wl[125].w[11]" 0.25245050855507156;
	setAttr ".wl[126].w[22]"  1;
	setAttr ".wl[127].w[22]"  1;
	setAttr ".wl[128].w[22]"  1;
	setAttr ".wl[129].w[22]"  1;
	setAttr ".wl[130].w[22]"  1;
	setAttr ".wl[131].w[22]"  1;
	setAttr ".wl[132].w[22]"  1;
	setAttr ".wl[133].w[22]"  1;
	setAttr ".wl[134].w[22]"  1;
	setAttr ".wl[135].w[22]"  1;
	setAttr ".wl[136].w[22]"  1;
	setAttr ".wl[137].w[22]"  1;
	setAttr ".wl[138].w[22]"  1;
	setAttr ".wl[139].w[22]"  1;
	setAttr ".wl[140].w[22]"  1;
	setAttr ".wl[141].w[22]"  1;
	setAttr ".wl[142].w[22]"  1;
	setAttr ".wl[143].w[22]"  1;
	setAttr ".wl[144].w[14]"  1;
	setAttr ".wl[145].w[14]"  1;
	setAttr ".wl[146].w[14]"  1;
	setAttr ".wl[147].w[14]"  1;
	setAttr ".wl[148].w[14]"  1;
	setAttr ".wl[149].w[14]"  1;
	setAttr ".wl[150].w[14]"  1;
	setAttr ".wl[151].w[14]"  1;
	setAttr ".wl[152].w[14]"  1;
	setAttr ".wl[153].w[14]"  1;
	setAttr ".wl[154].w[14]"  1;
	setAttr ".wl[155].w[14]"  1;
	setAttr ".wl[156].w[14]"  1;
	setAttr ".wl[157].w[14]"  1;
	setAttr ".wl[158].w[14]"  1;
	setAttr ".wl[159].w[14]"  1;
	setAttr ".wl[160].w[14]"  1;
	setAttr ".wl[161].w[14]"  1;
	setAttr ".wl[162].w[43]"  1;
	setAttr ".wl[163].w[43]"  1;
	setAttr ".wl[164].w[15]"  1;
	setAttr ".wl[165].w[15]"  1;
	setAttr ".wl[166].w[15]"  1;
	setAttr ".wl[167].w[15]"  1;
	setAttr ".wl[168].w[43]"  1;
	setAttr ".wl[169].w[43]"  1;
	setAttr ".wl[170].w[42]"  1;
	setAttr ".wl[171].w[42]"  1;
	setAttr ".wl[172].w[16]"  1;
	setAttr ".wl[173].w[16]"  1;
	setAttr ".wl[174].w[16]"  1;
	setAttr ".wl[175].w[16]"  1;
	setAttr ".wl[176].w[42]"  1;
	setAttr ".wl[177].w[42]"  1;
	setAttr ".wl[178].w[17]"  1;
	setAttr ".wl[179].w[17]"  1;
	setAttr ".wl[180].w[17]"  1;
	setAttr ".wl[181].w[17]"  1;
	setAttr ".wl[182].w[17]"  1;
	setAttr ".wl[183].w[17]"  1;
	setAttr ".wl[184].w[17]"  1;
	setAttr ".wl[185].w[17]"  1;
	setAttr ".wl[186].w[17]"  1;
	setAttr ".wl[187].w[17]"  1;
	setAttr ".wl[188].w[17]"  1;
	setAttr ".wl[189].w[17]"  1;
	setAttr ".wl[190].w[20]"  1;
	setAttr ".wl[191].w[20]"  1;
	setAttr ".wl[192].w[20]"  1;
	setAttr ".wl[193].w[20]"  1;
	setAttr ".wl[194].w[20]"  1;
	setAttr ".wl[195].w[20]"  1;
	setAttr ".wl[196].w[20]"  1;
	setAttr ".wl[197].w[20]"  1;
	setAttr ".wl[198].w[18]"  1;
	setAttr ".wl[199].w[18]"  1;
	setAttr ".wl[200].w[18]"  1;
	setAttr ".wl[201].w[18]"  1;
	setAttr ".wl[202].w[18]"  1;
	setAttr ".wl[203].w[18]"  1;
	setAttr ".wl[204].w[18]"  1;
	setAttr ".wl[205].w[18]"  1;
	setAttr ".wl[206].w[18]"  1;
	setAttr ".wl[207].w[18]"  1;
	setAttr ".wl[208].w[18]"  1;
	setAttr ".wl[209].w[18]"  1;
	setAttr ".wl[210].w[11]"  1;
	setAttr ".wl[211].w[11]"  1;
	setAttr ".wl[212].w[11]"  1;
	setAttr ".wl[213].w[11]"  1;
	setAttr ".wl[214].w[11]"  1;
	setAttr ".wl[215].w[11]"  1;
	setAttr ".wl[216].w[11]"  1;
	setAttr ".wl[217].w[11]"  1;
	setAttr ".wl[218].w[11]"  1;
	setAttr ".wl[219].w[11]"  1;
	setAttr ".wl[220].w[11]"  1;
	setAttr ".wl[221].w[11]"  1;
	setAttr ".wl[222].w[11]"  1;
	setAttr ".wl[223].w[11]"  1;
	setAttr ".wl[224].w[11]"  1;
	setAttr ".wl[225].w[11]"  1;
	setAttr ".wl[226].w[11]"  1;
	setAttr ".wl[227].w[11]"  1;
	setAttr ".wl[228].w[11]"  1;
	setAttr ".wl[229].w[11]"  1;
	setAttr ".wl[230].w[11]"  1;
	setAttr ".wl[231].w[11]"  1;
	setAttr ".wl[232].w[11]"  1;
	setAttr ".wl[233].w[11]"  1;
	setAttr ".wl[234].w[11]"  1;
	setAttr ".wl[235].w[11]"  1;
	setAttr ".wl[236].w[11]"  1;
	setAttr ".wl[237].w[11]"  1;
	setAttr ".wl[238].w[11]"  1;
	setAttr ".wl[239].w[11]"  1;
	setAttr ".wl[240].w[11]"  1;
	setAttr ".wl[241].w[11]"  1;
	setAttr ".wl[242].w[11]"  1;
	setAttr ".wl[243].w[11]"  1;
	setAttr ".wl[244].w[8]"  1;
	setAttr ".wl[245].w[8]"  1;
	setAttr ".wl[246].w[8]"  1;
	setAttr ".wl[247].w[8]"  1;
	setAttr ".wl[248].w[8]"  1;
	setAttr ".wl[249].w[8]"  1;
	setAttr ".wl[250].w[8]"  1;
	setAttr ".wl[251].w[8]"  1;
	setAttr ".wl[252].w[8]"  1;
	setAttr ".wl[253].w[8]"  1;
	setAttr ".wl[254].w[8]"  1;
	setAttr ".wl[255].w[8]"  1;
	setAttr ".wl[256].w[8]"  1;
	setAttr ".wl[257].w[8]"  1;
	setAttr ".wl[258].w[8]"  1;
	setAttr ".wl[259].w[8]"  1;
	setAttr ".wl[260].w[8]"  1;
	setAttr ".wl[261].w[8]"  1;
	setAttr ".wl[262].w[8]"  1;
	setAttr ".wl[263].w[8]"  1;
	setAttr ".wl[264].w[8]"  1;
	setAttr ".wl[265].w[8]"  1;
	setAttr ".wl[266].w[8]"  1;
	setAttr ".wl[267].w[8]"  1;
	setAttr ".wl[268].w[8]"  1;
	setAttr ".wl[269].w[8]"  1;
	setAttr ".wl[270].w[8]"  1;
	setAttr ".wl[271].w[8]"  1;
	setAttr ".wl[272].w[8]"  1;
	setAttr ".wl[273].w[8]"  1;
	setAttr ".wl[274].w[8]"  1;
	setAttr ".wl[275].w[8]"  1;
	setAttr ".wl[276].w[8]"  1;
	setAttr ".wl[277].w[8]"  1;
	setAttr ".wl[278].w[8]"  1;
	setAttr ".wl[279].w[8]"  1;
	setAttr ".wl[280].w[8]"  1;
	setAttr ".wl[281].w[8]"  1;
	setAttr ".wl[282].w[8]"  1;
	setAttr ".wl[283].w[8]"  1;
	setAttr ".wl[284].w[8]"  1;
	setAttr ".wl[285].w[8]"  1;
	setAttr ".wl[286].w[8]"  1;
	setAttr ".wl[287].w[8]"  1;
	setAttr ".wl[288].w[8]"  1;
	setAttr ".wl[289].w[8]"  1;
	setAttr ".wl[290].w[8]"  1;
	setAttr ".wl[291].w[8]"  1;
	setAttr ".wl[292].w[8]"  1;
	setAttr ".wl[293].w[8]"  1;
	setAttr ".wl[294].w[8]"  1;
	setAttr ".wl[295].w[8]"  1;
	setAttr ".wl[296].w[8]"  1;
	setAttr ".wl[297].w[8]"  1;
	setAttr ".wl[298].w[8]"  1;
	setAttr ".wl[299].w[8]"  1;
	setAttr ".wl[300].w[8]"  1;
	setAttr ".wl[301].w[8]"  1;
	setAttr ".wl[302].w[8]"  1;
	setAttr ".wl[303].w[8]"  1;
	setAttr ".wl[304].w[8]"  1;
	setAttr ".wl[305].w[8]"  1;
	setAttr ".wl[306].w[8]"  1;
	setAttr ".wl[307].w[8]"  1;
	setAttr ".wl[308].w[8]"  1;
	setAttr ".wl[309].w[8]"  1;
	setAttr ".wl[310].w[8]"  1;
	setAttr ".wl[311].w[8]"  1;
	setAttr ".wl[312].w[8]"  1;
	setAttr ".wl[313].w[8]"  1;
	setAttr ".wl[314].w[8]"  1;
	setAttr ".wl[315].w[46]"  1;
	setAttr ".wl[316].w[46]"  1;
	setAttr ".wl[317].w[30]"  1;
	setAttr ".wl[318].w[30]"  1;
	setAttr ".wl[319].w[30]"  1;
	setAttr ".wl[320].w[30]"  1;
	setAttr ".wl[321].w[46]"  1;
	setAttr ".wl[322].w[46]"  1;
	setAttr ".wl[323].w[49]"  1;
	setAttr ".wl[324].w[49]"  1;
	setAttr ".wl[325].w[36]"  1;
	setAttr ".wl[326].w[36]"  1;
	setAttr ".wl[327].w[36]"  1;
	setAttr ".wl[328].w[36]"  1;
	setAttr ".wl[329].w[49]"  1;
	setAttr ".wl[330].w[49]"  1;
	setAttr ".wl[331].w[1]"  1;
	setAttr ".wl[332].w[1]"  1;
	setAttr ".wl[333].w[1]"  1;
	setAttr ".wl[334].w[1]"  1;
	setAttr ".wl[335].w[1]"  1;
	setAttr ".wl[336].w[1]"  1;
	setAttr ".wl[337].w[1]"  1;
	setAttr ".wl[338].w[1]"  1;
	setAttr ".wl[339].w[1]"  1;
	setAttr ".wl[340].w[1]"  1;
	setAttr ".wl[341].w[1]"  1;
	setAttr ".wl[342].w[1]"  1;
	setAttr ".wl[343].w[1]"  1;
	setAttr ".wl[344].w[1]"  1;
	setAttr ".wl[345].w[1]"  1;
	setAttr ".wl[346].w[1]"  1;
	setAttr ".wl[347].w[1]"  1;
	setAttr ".wl[348].w[1]"  1;
	setAttr ".wl[349].w[1]"  1;
	setAttr ".wl[350].w[1]"  1;
	setAttr ".wl[351].w[1]"  1;
	setAttr ".wl[352].w[1]"  1;
	setAttr ".wl[353].w[1]"  1;
	setAttr ".wl[354].w[1]"  1;
	setAttr ".wl[355].w[1]"  1;
	setAttr ".wl[356].w[1]"  1;
	setAttr ".wl[357].w[1]"  1;
	setAttr ".wl[358].w[1]"  1;
	setAttr ".wl[359].w[1]"  1;
	setAttr ".wl[360].w[1]"  1;
	setAttr ".wl[361].w[1]"  1;
	setAttr ".wl[362].w[1]"  1;
	setAttr ".wl[363].w[1]"  1;
	setAttr ".wl[364].w[1]"  1;
	setAttr ".wl[365].w[1]"  1;
	setAttr ".wl[366].w[1]"  1;
	setAttr ".wl[367].w[48]"  1;
	setAttr ".wl[368].w[48]"  1;
	setAttr ".wl[369].w[37]"  1;
	setAttr ".wl[370].w[37]"  1;
	setAttr ".wl[371].w[37]"  1;
	setAttr ".wl[372].w[37]"  1;
	setAttr ".wl[373].w[48]"  1;
	setAttr ".wl[374].w[48]"  1;
	setAttr ".wl[375].w[47]"  1;
	setAttr ".wl[376].w[47]"  1;
	setAttr ".wl[377].w[31]"  1;
	setAttr ".wl[378].w[31]"  1;
	setAttr ".wl[379].w[31]"  1;
	setAttr ".wl[380].w[31]"  1;
	setAttr ".wl[381].w[47]"  1;
	setAttr ".wl[382].w[47]"  1;
	setAttr ".wl[383].w[32]"  1;
	setAttr ".wl[384].w[32]"  1;
	setAttr ".wl[385].w[32]"  1;
	setAttr ".wl[386].w[32]"  1;
	setAttr ".wl[387].w[32]"  1;
	setAttr ".wl[388].w[32]"  1;
	setAttr ".wl[389].w[32]"  1;
	setAttr ".wl[390].w[32]"  1;
	setAttr ".wl[391].w[33]"  1;
	setAttr ".wl[392].w[33]"  1;
	setAttr ".wl[393].w[33]"  1;
	setAttr ".wl[394].w[33]"  1;
	setAttr ".wl[395].w[33]"  1;
	setAttr ".wl[396].w[33]"  1;
	setAttr ".wl[397].w[33]"  1;
	setAttr ".wl[398].w[33]"  1;
	setAttr ".wl[399].w[33]"  1;
	setAttr ".wl[400].w[33]"  1;
	setAttr ".wl[401].w[33]"  1;
	setAttr ".wl[402].w[33]"  1;
	setAttr ".wl[403].w[39]"  1;
	setAttr ".wl[404].w[39]"  1;
	setAttr ".wl[405].w[39]"  1;
	setAttr ".wl[406].w[39]"  1;
	setAttr ".wl[407].w[39]"  1;
	setAttr ".wl[408].w[39]"  1;
	setAttr ".wl[409].w[39]"  1;
	setAttr ".wl[410].w[39]"  1;
	setAttr ".wl[411].w[39]"  1;
	setAttr ".wl[412].w[39]"  1;
	setAttr ".wl[413].w[39]"  1;
	setAttr ".wl[414].w[39]"  1;
	setAttr ".wl[415].w[38]"  1;
	setAttr ".wl[416].w[38]"  1;
	setAttr ".wl[417].w[38]"  1;
	setAttr ".wl[418].w[38]"  1;
	setAttr ".wl[419].w[38]"  1;
	setAttr ".wl[420].w[38]"  1;
	setAttr ".wl[421].w[38]"  1;
	setAttr ".wl[422].w[38]"  1;
	setAttr -s 50 ".pm";
	setAttr ".pm[0]" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".pm[1]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -0.94502621553771726 -0.0011685033075627034 -0.0068526279305598072 1;
	setAttr ".pm[2]" -type "matrix" -0.019706000177291037 9.5458239375163605e-05 0.99980581336814445 0
		 0.99979408310123452 -0.00484312301086663 0.019706231381541692 0 0.004844063663274026 0.99998826745478675 2.7723049550454343e-16 0
		 -1.0613325749496161 0.0093675768454640953 -0.020074561363538804 1;
	setAttr ".pm[3]" -type "matrix" 0.019073572066682067 -7.2306505664461402e-05 0.99981808026279761 0
		 0.99981089608638352 -0.0037902094043473339 -0.019073709120506068 0 0.003790899043705255 0.99999281451640443 -3.3294493464314229e-16 0
		 -1.1641569960339386 0.0081410506660616593 0.025082625298429809 1;
	setAttr ".pm[4]" -type "matrix" 0.0045534302937101203 2.7211509261482174e-05 0.99998963271230668 0
		 0.99997177681231586 0.0059758774179040127 -0.00455351160160084 0 -0.0059759393721865832 0.99998214391489004 2.7695266869784393e-16 0
		 -1.2663605058650147 -0.0042264745881383471 0.0066946894503174589 1;
	setAttr ".pm[5]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.4341613524492285 -0.05455186883050709 0.00015952817223838822 1;
	setAttr ".pm[6]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6058499897458056 0.018733889287306887 0.00015952817223838884 1;
	setAttr ".pm[7]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.7152912975186612 0.020114849330770467 0.00015952817223831102 1;
	setAttr ".pm[8]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.8337958776836476 0.019920284608686455 0.00015952817223823421 1;
	setAttr ".pm[9]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.8250283726105887 -0.054551868830507 0.00015952817223838822 1;
	setAttr ".pm[10]" -type "matrix" 1 -2.1942124611942431e-16 -1.9506596001404569e-16 0
		 1.5372687562051188e-16 0.9810414047811844 0.19379825103689671 0 2.4143219255223596e-16 -0.19379825103689663 0.9810414047811844 0
		 -0.092862815907565635 -1.9521402498114755 -0.78286166260919077 1;
	setAttr ".pm[11]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.0641521117653978 0.016519491591400367 0.00015952817223826389 1;
	setAttr ".pm[12]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6682845582447858 -0.4568329720549904 0.00015952817223754306 1;
	setAttr ".pm[13]" -type "matrix" 1 -3.2912227236329371e-16 1.0992607845106943e-16 0
		 -2.7051614496067569e-16 -0.98104140478118451 -0.19379825103689607 0 9.8902989564137531e-17 0.19379825103689591 -0.98104140478118451 0
		 0.093181900000000512 1.9521426366394157 0.78286178851602672 1;
	setAttr ".pm[14]" -type "matrix" 0.98709997017857787 0.032486613313186558 0.1567745796642116 0
		 -0.032893359049031491 0.99945886705280229 -4.8724045631498563e-14 0 -0.15668974377387376 -0.0051568425386077331 0.98763441169853405 0
		 -0.030674083788439582 -1.4843075040553737 0.034020593604505406 1;
	setAttr ".pm[15]" -type "matrix" 0.99901628689829347 -0.0059520157187940275 0.043943509427787165 0
		 0.0059577708215473877 0.99998225232592886 5.8608570470755618e-13 0 -0.043942729532707774 0.00026180535767982764 0.99903401742842068 0
		 -0.28300699742905255 -1.5036557390835359 0.068386888079294328 1;
	setAttr ".pm[16]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.63602611492977545 -1.502792210048757 0.11521662238140697 1;
	setAttr ".pm[17]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.91544442186787278 -1.4957922401719286 0.1148209832473453 1;
	setAttr ".pm[18]" -type "matrix" 0.96687236460492187 0.25321706230697183 -0.032232746080877776 0
		 0.031181153458877519 0.0081661244717597808 0.99948039004278932 0 0.25334870481662447 -0.96737502229886996 -5.3117059362062246e-13 0
		 -1.1814809606791408 -0.38218209163617911 -1.4802241633262798 1;
	setAttr ".pm[19]" -type "matrix" 0.99778886398022892 -0.04119389727265977 -0.052157892447198727 0
		 0.041250044739540047 0.99914885468031556 5.1744632884043166e-14 0 0.052113498501155493 -0.0021515153970184438 0.99863885076411196 0
		 -1.5244691757871549 -1.4280990511325131 0.15817231164890205 1;
	setAttr ".pm[20]" -type "matrix" 0.55146716803094264 -0.59531909799528659 -0.5843621600908212 0
		 -0.184831412267696 0.59589931064290147 -0.78149943097512453 0 0.8134625446958581 0.53897976134303305 0.218585235639432 0
		 -0.34643070642497487 -0.33203413254649256 1.7223233842299677 1;
	setAttr ".pm[21]" -type "matrix" 0.43247852844110041 -0.78347014219601152 -0.44624753077723794 0
		 -0.016862308610989668 0.48781180705669247 -0.87278594365651407 0 0.90148654176628085 0.38498594413750431 0.19775701714686711 0
		 -0.68330210017345672 -0.055571858369026367 1.6719772833616835 1;
	setAttr ".pm[22]" -type "matrix" 0.98709997017857765 0.032486613313185884 0.1567745796642111 0
		 0.032893359049031172 -0.99945886705280196 4.7295500849031624e-14 0 0.1566897437738731 0.0051568425386092683 -0.98763441169853394 0
		 0.030988873030484747 1.4843225439599186 -0.033970610371506713 1;
	setAttr ".pm[23]" -type "matrix" 0.99901628689829325 -0.0059520157187814837 0.043943509427789323 0
		 -0.0059577708215470546 -0.99998225232592863 -3.0522025878942906e-13 0 0.043942729532708065 -0.00026180535796021756 -0.99903401742842046 0
		 0.2833260565934661 1.5036586947314918 -0.068372892651038242 1;
	setAttr ".pm[24]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.63634490480602257 1.5027846255377977 -0.11523170466323172 1;
	setAttr ".pm[25]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.91576321961067553 1.495788397645736 -0.114836104991323 1;
	setAttr ".pm[26]" -type "matrix" 0.96687236460492165 0.25321706230697189 -0.032232746080877665 0
		 -0.031181153458877408 -0.0081661244717593524 -0.99948039004278866 0 -0.25334870481662469 0.9673750222988694 5.3187315662839256e-13 0
		 1.1817860232541479 0.38226194581938894 1.4802180860793479 1;
	setAttr ".pm[27]" -type "matrix" 0.99778886398022859 -0.041193897272659673 -0.052157892447198755 0
		 -0.041250044739539866 -0.99914885468031489 -5.2383011123202599e-14 0 -0.052113498501155792 0.0021515153970194821 -0.99863885076411163 0
		 1.5247892137638857 1.4280878870350271 -0.15818906625546916 1;
	setAttr ".pm[28]" -type "matrix" 0.55146716803094298 -0.59531909799528626 -0.58436216009082076 0
		 0.18483141226769609 -0.59589931064290136 0.78149943097512431 0 -0.81346254469585788 -0.53897976134303316 -0.21858523563943225 0
		 0.34660786863342058 0.33184191323535761 -1.7225088095631471 1;
	setAttr ".pm[29]" -type "matrix" 0.43247852844110091 -0.78347014219601219 -0.446247530777236 0
		 0.016862308610989852 -0.48781180705669058 0.87278594365651485 0 -0.90148654176628051 -0.38498594413750481 -0.19775701714686661 0
		 0.68344018798611017 0.055319914102758515 -1.6721152336484386 1;
	setAttr ".pm[30]" -type "matrix" 0.0022554669568005054 -0.00014975192740381045 -0.99999744521832001 0
		 -0.99780055773920817 0.066249055981891902 -0.0022604328861923848 0 0.066249225234198697 0.99780310690830587 2.9590587792560625e-16 0
		 0.94226554016471564 -0.062781841508607925 0.21743813129452583 1;
	setAttr ".pm[31]" -type "matrix" -0.013350758322473745 -0.00087893656994142552 -0.99991048835519292 0
		 -0.99775062933432612 -0.065686120190470182 0.013379659086803468 0 -0.065692000389475827 0.99783994762929229 -1.232737870116018e-16 0
		 0.56786214599764662 0.035281816434817856 0.20770911692970945 1;
	setAttr ".pm[32]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 0.18978345984901215 0.015292731874088965 0.21528362544683308 1;
	setAttr ".pm[33]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.22722886347059751 -0.10526655770819621 0.21530292529543407 1;
	setAttr ".pm[34]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.60631281165200357 -0.00091788483853666566 0.215302925295426 1;
	setAttr ".pm[35]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 -0.015921531366467314 0.22526446895315411 0.21523776392495572 1;
	setAttr ".pm[36]" -type "matrix" 0.0022554669568004299 -0.00014975192802755828 -0.99999744521832035 0
		 0.99780055773920828 -0.066249055981890251 0.0022604328862336548 0 -0.066249225234198475 -0.99780310690830654 6.2200017272168214e-13 0
		 -0.94226571602569853 0.06278185367193026 -0.21743820639780065 1;
	setAttr ".pm[37]" -type "matrix" -0.013350758322473837 -0.00088768916550628228 -0.99991048062322097 0
		 0.99775062933432646 0.065686003070725738 -0.01338023406180442 0 0.065692000389476521 -0.99783994759106476 8.7344713705757555e-06 0
		 -0.56786188528643733 -0.035283621889183818 -0.20770888629017781 1;
	setAttr ".pm[38]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 -0.18978378855540295 -0.015292757530726382 -0.21528370011797163 1;
	setAttr ".pm[39]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.22722857608019675 0.10526664874358312 -0.21530299999967803 1;
	setAttr ".pm[40]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.60631330964025831 0.0009178855077175889 -0.21530299999999705 1;
	setAttr ".pm[41]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 0.015921549419727878 -0.22526470836685364 -0.21523780051723371 1;
	setAttr ".pm[42]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.91544442186787278 -1.4957922401719279 0.11482098324734533 1;
	setAttr ".pm[43]" -type "matrix" 0.99868185990108238 -0.020107967638530615 -0.047225124054504443 0
		 0.020130427732428666 0.99979736240865813 5.2071693311395172e-13 0 0.047215554469104755 -0.00095066194745413684 0.99888427140386837 0
		 -0.63602611492977545 -1.502792210048757 0.11521662238140692 1;
	setAttr ".pm[44]" -type "matrix" 0.99868185990108194 -0.02010796763852658 -0.047225124054506205 0
		 -0.020130427732428589 -0.99979736240865758 -6.0737135806898616e-13 0 -0.04721555446910497 0.00095066194754091021 -0.99888427140386804 0
		 0.63634490480602257 1.5027846255377977 -0.11523170466323172 1;
	setAttr ".pm[45]" -type "matrix" 0.99868185990108194 -0.020107967638526576 -0.047225124054506226 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737103280833442e-13 0 -0.047215554469104984 0.00095066194754090988 -0.99888427140386804 0
		 0.91576321961067564 1.4957883976457356 -0.114836104991323 1;
	setAttr ".pm[46]" -type "matrix" -0.013350758322473748 -0.00087893656994142563 -0.99991048835519314 0
		 -0.99775062933432623 -0.065686120190470168 0.013379659086803473 0 -0.065692000389475813 0.9978399476292924 -1.2316536679435328e-16 0
		 0.56786214599764651 0.035281816434817842 0.20770911692970939 1;
	setAttr ".pm[47]" -type "matrix" -0.00010105259733121729 -8.0327824647431743e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971994 0 -0.079241141789792913 0.99685547671056596 1.0176253828313159e-16 0
		 0.18978345984901196 0.015292731874088944 0.21528362544683308 1;
	setAttr ".pm[48]" -type "matrix" -0.00010105259732965301 -8.0327833421173161e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647373 -0.00010137136200765811 0 0.079241141789794689 -0.99685547671056651 8.7454863466893787e-13 0
		 -0.18978378855540276 -0.015292757530726366 -0.2152837001179716 1;
	setAttr ".pm[49]" -type "matrix" -0.013350758322473831 -0.00088768916550628228 -0.99991048062322097 0
		 0.99775062933432646 0.06568600307072571 -0.013380234061804415 0 0.065692000389476493 -0.99783994759106476 8.7344713705762993e-06 0
		 -0.56786188528643688 -0.035283621889183762 -0.20770888629017781 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 50 ".ma";
	setAttr -s 50 ".dpf[0:49]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
		4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4;
	setAttr -s 50 ".lw";
	setAttr -s 50 ".lw";
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 50 ".ifcl";
	setAttr -s 50 ".ifcl";
createNode groupId -n "groupId892";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts1";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:409]";
createNode tweak -n "tweak1";
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
createNode groupId -n "groupId894";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts3";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode dagPose -n "bindPose1";
	setAttr -s 50 ".wm";
	setAttr -s 50 ".xm";
	setAttr ".xm[0]" -type "matrix" "xform" 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
		 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[1]" -type "matrix" "xform" 1 1 1 0 0 0 0 5.6410046325731392e-19
		 0.94504479510672268 -0.0036341718130823448 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.49690720307978387 0.50307378338314013 0.50054198510985581 0.4994574267565603 1 1
		 1 yes;
	setAttr ".xm[2]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.11651476353447188 1.0842021724855044e-18
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -7.4107894115387808e-07 0.0062281242360974686 0.0049629550809076042 0.99996828926962256 1
		 1 1 yes;
	setAttr ".xm[3]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.10291232484710576 0
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -8.3715850798415925e-05 -0.019389790499412113 -0.00052648821770801002 0.99981185821443508 1
		 1 1 yes;
	setAttr ".xm[4]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.10195366183573108 -1.7347234759768071e-18
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -7.9324524497065505e-06 0.0072606011207018298 -0.0048832934025505636 0.99996171779422993 1
		 1 1 yes;
	setAttr ".xm[5]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.16881615042049525 0
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -5.3528736187469309e-05 0.002276132360176486 -0.017536155793018638 0.99984363757347394 1
		 1 1 yes;
	setAttr ".xm[6]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.17168863729657735 -0.073285758117813973
		 -6.2341624917916505e-19 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[7]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.10944130777285556 -0.0013809600434635839
		 7.7764400821522793e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[8]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.11850458016498666 0.00019456472208401882
		 7.6761513811973714e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[9]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.99123249492694077 0.074472153439193473
		 -1.5398381354725377e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[10]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.21531786830826069 0.49411095691703888
		 0.093022344079802172 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.53697634388131021 -0.46006130690578723 -0.53697634388130977 0.4600613069057875 1
		 1 1 yes;
	setAttr ".xm[11]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.23035623408174985 0.0034007930172860828
		 -2.9661214069869355e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[12]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.39586755352061176
		 0.47335246364639078 7.2083181437698772e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[13]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.21532024620650181 0.49411071525592121
		 -0.093022371827763045 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.46006130690578767 -0.53697634388130977 0.4600613069057875 0.53697634388130999 1
		 1 1 yes;
	setAttr ".xm[14]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.048975319911061063
		 -0.039734026455491442 0.073324475024895974 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.44185013451752497 -0.47579530135840903 -0.53557117905348761 0.53995444437411844 1
		 1 1 yes;
	setAttr ".xm[15]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.19968381272885136 0.029404003637012677
		 -0.0028985034267901347 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.00076380493560487968 -0.05669759216575071 0.019396071039695581 0.99820268085837649 1
		 1 1 yes;
	setAttr ".xm[16]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.33963150475980641 0.0079527165474750916
		 0.0088076300635101801 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0005946220876097639 -0.045580499814043295 0.0070795645044933334 0.99893540543305503 1
		 1 1 yes;
	setAttr ".xm[17]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.27941830693809711 -0.0069999698768283825
		 0.00039563913406168161 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[18]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.30165291031078711 -0.00057403285758761413
		 -0.011751453835041297 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.70225938043403824 -0.077914471545807745 -0.069538080749365044 0.70421981869430028 1
		 1 1 yes;
	setAttr ".xm[19]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.26610698604005578 0.081266613976036406
		 -0.038629184935063066 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.70315945897750187 0.06874721230002126 0.075246435081633145 0.70368925674543892 1
		 1 1 yes;
	setAttr ".xm[20]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.1168465904586284 -0.03645460442714403
		 0.15180300812604808 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.42785886947404494 -0.44041778249794106 0.11540525762577326 0.78080124947666274 1
		 1 1 yes;
	setAttr ".xm[21]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.18090088247848679 0.11797949031486632
		 0.053519272836031861 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.077878408690608206 0.029927022708609044 0.10786291466732913 0.99065883048155645 1
		 1 1 yes;
	setAttr ".xm[22]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.048979994764904999
		 -0.039733871118134471 -0.073324471827762597 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.47579530135840914 -0.44185013451752531 0.53995444437411766 0.53557117905348806 1
		 1 1 yes;
	setAttr ".xm[23]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.19968409282727173
		 -0.029404192138899443 0.002898459021307323 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.00076380493574576959 -0.056697592165747504 0.019396071039703179 0.99820268085837627 1
		 1 1 yes;
	setAttr ".xm[24]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.33963135933556815
		 -0.0079466952326225915 -0.0088076565194131484 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00059462208779333396 -0.045580499814042851 0.0070795645044978844 0.99893540543305492 1
		 1 1 yes;
	setAttr ".xm[25]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.27941831480465273
		 0.0069962278920612242 -0.00039559967190873346 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[26]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.30164915390809766
		 0.0005724424916553339 0.011751187392012918 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.70225938043400782 -0.077914471545804748 -0.069538080749368486 0.70421981869433048 1
		 1 1 yes;
	setAttr ".xm[27]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.26611202108628595
		 -0.081268002652725824 0.038631397650857435 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.70315945897750176 0.068747212300021274 0.075246435081633214 0.70368925674543903 1
		 1 1 yes;
	setAttr ".xm[28]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.11684780801718976
		 0.036459584437446679 -0.15180297613787597 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.4278588694740787 -0.44041778249794578 0.11540525762575408 0.7808012494766442 1 1
		 1 yes;
	setAttr ".xm[29]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.18090051900842419
		 -0.11797923380413422 -0.053522298325392015 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.077878408690609274 0.029927022708609176 0.10786291466732904 0.99065883048155645 1
		 1 1 yes;
	setAttr ".xm[30]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.0017817144483043713
		 0.0038447212341440663 0.21529580778360333 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.030602986446456593 0.99952850402287519 8.9040617200012806e-05 0.0024937798858926689 1
		 1 1 yes;
	setAttr ".xm[31]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.37801205922697712 -0.023215167355213007
		 0.00085607241199331385 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -2.1835523542347276e-06 -0.0078201665479101321 -0.065968598135859799 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[32]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.37505277766941342 0.022381933441364285
		 -0.0050273613000233475 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0004811380204642594 0.0066218381349152098 -0.0067922801903750069 0.99995489133047188 1
		 1 1 yes;
	setAttr ".xm[33]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.067124334955903059
		 0.23363495222689204 -8.6598271830939932e-06 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		3.4364933632698284e-05 3.7257074528373049e-05 0.73411591966989509 0.67902416298551993 1
		 1 1 yes;
	setAttr ".xm[34]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.37908394818140601 -0.10434867286965951
		 8.0491169285323849e-15 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[35]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.20570499121547947 -0.20997173707906511
		 4.5861521877329675e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[36]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.0013407945002021915
		 0.0038605906372394102 -0.21529879574225355 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.9995203124736306 0.030602735642331333 -0.0047527598842475151 0.00016969768529547747 1
		 1 1 yes;
	setAttr ".xm[37]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.3780124963906441 0.023215201330149399
		 -0.00085607340310611679 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2.183469031202985e-06 -0.0078204552719308255 -0.065968563908784389 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[38]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.37505218697325304
		 -0.022381855480582729 0.0050275493002892857 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00048551451215832713 0.0066218084071478084 -0.0067923091720432363 0.999954889215103 1
		 1 1 yes;
	setAttr ".xm[39]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.067124595270357107
		 -0.23363468427733067 8.6598515412483756e-06 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		3.4364932269262498e-05 3.7257073698436208e-05 0.73411591966989564 0.67902416298551938 1
		 1 1 yes;
	setAttr ".xm[40]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.37908473356006162
		 0.10434876323586556 3.189948305504231e-13 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[41]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.20570533797513085
		 0.20997195083612727 -4.5899600737836499e-05 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[42]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.27941830693809722 -0.0069999698768283825
		 0.00039563913406165385 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[43]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.33963150475980652 0.0079527165474753136
		 0.0088076300635102078 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.00059462208760976422 -0.045580499814043281 0.0070795645044933308 0.99893540543305503 1
		 1 1 yes;
	setAttr ".xm[44]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.33963135933556821
		 -0.0079466952326228135 -0.0088076565194131484 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00059462208779333418 -0.045580499814042837 0.0070795645044978879 0.99893540543305492 1
		 1 1 yes;
	setAttr ".xm[45]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.27941831480465296
		 0.0069962278920616683 -0.00039559967190871959 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[46]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.37801205922697712 -0.023215167355213021
		 0.00085607241199334161 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -2.183552354234836e-06 -0.0078201665479101339 -0.065968598135859785 0.99779105480575681 1
		 1 1 yes;
	setAttr ".xm[47]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.37505277766941336 0.022381933441364282
		 -0.0050273613000233475 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0004811380204642594 0.0066218381349152098 -0.0067922801903750017 0.99995489133047188 1
		 1 1 yes;
	setAttr ".xm[48]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.37505218697325293
		 -0.022381855480582719 0.0050275493002892579 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.00048551451215832735 0.0066218084071478101 -0.0067923091720432415 0.999954889215103 1
		 1 1 yes;
	setAttr ".xm[49]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.37801249639064421
		 0.023215201330149409 -0.00085607340310611679 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		2.1834690312032019e-06 -0.0078204552719308238 -0.065968563908784375 0.99779105480575681 1
		 1 1 yes;
	setAttr -s 50 ".m";
	setAttr -s 50 ".p";
	setAttr ".bp" yes;
createNode skinCluster -n "skinCluster2";
	setAttr -s 116 ".wl";
	setAttr ".wl[0].w[10]"  1;
	setAttr ".wl[1].w[10]"  1;
	setAttr ".wl[2].w[10]"  1;
	setAttr ".wl[3].w[10]"  1;
	setAttr ".wl[4].w[10]"  1;
	setAttr ".wl[5].w[10]"  1;
	setAttr ".wl[6].w[10]"  1;
	setAttr ".wl[7].w[10]"  1;
	setAttr ".wl[8].w[10]"  1;
	setAttr ".wl[9].w[10]"  1;
	setAttr ".wl[10].w[10]"  1;
	setAttr ".wl[11].w[10]"  1;
	setAttr ".wl[12].w[10]"  1;
	setAttr ".wl[13].w[10]"  1;
	setAttr ".wl[14].w[10]"  1;
	setAttr ".wl[15].w[10]"  1;
	setAttr ".wl[16].w[10]"  1;
	setAttr ".wl[17].w[10]"  1;
	setAttr ".wl[18].w[10]"  1;
	setAttr ".wl[19].w[10]"  1;
	setAttr ".wl[20].w[10]"  1;
	setAttr ".wl[21].w[10]"  1;
	setAttr ".wl[22].w[10]"  1;
	setAttr ".wl[23].w[10]"  1;
	setAttr ".wl[24].w[10]"  1;
	setAttr ".wl[25].w[10]"  1;
	setAttr ".wl[26].w[10]"  1;
	setAttr ".wl[27].w[10]"  1;
	setAttr ".wl[28].w[10]"  1;
	setAttr ".wl[29].w[10]"  1;
	setAttr ".wl[30].w[10]"  1;
	setAttr ".wl[31].w[10]"  1;
	setAttr ".wl[32].w[10]"  1;
	setAttr ".wl[33].w[10]"  1;
	setAttr ".wl[34].w[10]"  1;
	setAttr ".wl[35].w[10]"  1;
	setAttr ".wl[36].w[10]"  1;
	setAttr ".wl[37].w[10]"  1;
	setAttr ".wl[38].w[10]"  1;
	setAttr ".wl[39].w[10]"  1;
	setAttr ".wl[40].w[10]"  1;
	setAttr ".wl[41].w[10]"  1;
	setAttr ".wl[42].w[10]"  1;
	setAttr ".wl[43].w[10]"  1;
	setAttr ".wl[44].w[10]"  1;
	setAttr ".wl[45].w[10]"  1;
	setAttr ".wl[46].w[10]"  1;
	setAttr ".wl[47].w[10]"  1;
	setAttr ".wl[48].w[10]"  1;
	setAttr ".wl[49].w[10]"  1;
	setAttr ".wl[50].w[10]"  1;
	setAttr ".wl[51].w[10]"  1;
	setAttr ".wl[52].w[10]"  1;
	setAttr ".wl[53].w[10]"  1;
	setAttr ".wl[54].w[10]"  1;
	setAttr ".wl[55].w[10]"  1;
	setAttr ".wl[56].w[10]"  1;
	setAttr ".wl[57].w[10]"  1;
	setAttr ".wl[58].w[13]"  1;
	setAttr ".wl[59].w[13]"  1;
	setAttr ".wl[60].w[13]"  1;
	setAttr ".wl[61].w[13]"  1;
	setAttr ".wl[62].w[13]"  1;
	setAttr ".wl[63].w[13]"  1;
	setAttr ".wl[64].w[13]"  1;
	setAttr ".wl[65].w[13]"  1;
	setAttr ".wl[66].w[13]"  1;
	setAttr ".wl[67].w[13]"  1;
	setAttr ".wl[68].w[13]"  1;
	setAttr ".wl[69].w[13]"  1;
	setAttr ".wl[70].w[13]"  1;
	setAttr ".wl[71].w[13]"  1;
	setAttr ".wl[72].w[13]"  1;
	setAttr ".wl[73].w[13]"  1;
	setAttr ".wl[74].w[13]"  1;
	setAttr ".wl[75].w[13]"  1;
	setAttr ".wl[76].w[13]"  1;
	setAttr ".wl[77].w[13]"  1;
	setAttr ".wl[78].w[13]"  1;
	setAttr ".wl[79].w[13]"  1;
	setAttr ".wl[80].w[13]"  1;
	setAttr ".wl[81].w[13]"  1;
	setAttr ".wl[82].w[13]"  1;
	setAttr ".wl[83].w[13]"  1;
	setAttr ".wl[84].w[13]"  1;
	setAttr ".wl[85].w[13]"  1;
	setAttr ".wl[86].w[13]"  1;
	setAttr ".wl[87].w[13]"  1;
	setAttr ".wl[88].w[13]"  1;
	setAttr ".wl[89].w[13]"  1;
	setAttr ".wl[90].w[13]"  1;
	setAttr ".wl[91].w[13]"  1;
	setAttr ".wl[92].w[13]"  1;
	setAttr ".wl[93].w[13]"  1;
	setAttr ".wl[94].w[13]"  1;
	setAttr ".wl[95].w[13]"  1;
	setAttr ".wl[96].w[13]"  1;
	setAttr ".wl[97].w[13]"  1;
	setAttr ".wl[98].w[13]"  1;
	setAttr ".wl[99].w[13]"  1;
	setAttr ".wl[100].w[13]"  1;
	setAttr ".wl[101].w[13]"  1;
	setAttr ".wl[102].w[13]"  1;
	setAttr ".wl[103].w[13]"  1;
	setAttr ".wl[104].w[13]"  1;
	setAttr ".wl[105].w[13]"  1;
	setAttr ".wl[106].w[13]"  1;
	setAttr ".wl[107].w[13]"  1;
	setAttr ".wl[108].w[13]"  1;
	setAttr ".wl[109].w[13]"  1;
	setAttr ".wl[110].w[13]"  1;
	setAttr ".wl[111].w[13]"  1;
	setAttr ".wl[112].w[13]"  1;
	setAttr ".wl[113].w[13]"  1;
	setAttr ".wl[114].w[13]"  1;
	setAttr ".wl[115].w[13]"  1;
	setAttr -s 42 ".pm";
	setAttr ".pm[0]" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".pm[1]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -0.94502621553771726 -0.0011685033075627034 -0.0068526279305598072 1;
	setAttr ".pm[2]" -type "matrix" -0.019706000177291037 9.5458239375163605e-05 0.99980581336814445 0
		 0.99979408310123452 -0.00484312301086663 0.019706231381541692 0 0.004844063663274026 0.99998826745478675 2.7723049550454343e-16 0
		 -1.0613325749496161 0.0093675768454640953 -0.020074561363538804 1;
	setAttr ".pm[3]" -type "matrix" 0.019073572066682067 -7.2306505664461402e-05 0.99981808026279761 0
		 0.99981089608638352 -0.0037902094043473339 -0.019073709120506068 0 0.003790899043705255 0.99999281451640443 -3.3294493464314229e-16 0
		 -1.1641569960339386 0.0081410506660616593 0.025082625298429809 1;
	setAttr ".pm[4]" -type "matrix" 0.0045534302937101203 2.7211509261482174e-05 0.99998963271230668 0
		 0.99997177681231586 0.0059758774179040127 -0.00455351160160084 0 -0.0059759393721865832 0.99998214391489004 2.7695266869784393e-16 0
		 -1.2663605058650147 -0.0042264745881383471 0.0066946894503174589 1;
	setAttr ".pm[5]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.4341613524492285 -0.05455186883050709 0.00015952817223838822 1;
	setAttr ".pm[6]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6058499897458056 0.018733889287306887 0.00015952817223838884 1;
	setAttr ".pm[7]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.7152912975186612 0.020114849330770467 0.00015952817223831102 1;
	setAttr ".pm[8]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.8337958776836476 0.019920284608686455 0.00015952817223823421 1;
	setAttr ".pm[9]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.8250283726105887 -0.054551868830507 0.00015952817223838822 1;
	setAttr ".pm[10]" -type "matrix" 1 -2.1942124611942431e-16 -1.9506596001404569e-16 0
		 1.5372687562051188e-16 0.9810414047811844 0.19379825103689671 0 2.4143219255223596e-16 -0.19379825103689663 0.9810414047811844 0
		 -0.092862815907565635 -1.9521402498114755 -0.78286166260919077 1;
	setAttr ".pm[11]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.0641521117653978 0.016519491591400367 0.00015952817223826389 1;
	setAttr ".pm[12]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6682845582447858 -0.4568329720549904 0.00015952817223754306 1;
	setAttr ".pm[13]" -type "matrix" 1 -3.2912227236329371e-16 1.0992607845106943e-16 0
		 -2.7051614496067569e-16 -0.98104140478118451 -0.19379825103689607 0 9.8902989564137531e-17 0.19379825103689591 -0.98104140478118451 0
		 0.093181900000000512 1.9521426366394157 0.78286178851602672 1;
	setAttr ".pm[14]" -type "matrix" 0.98709997017857787 0.032486613313186558 0.1567745796642116 0
		 -0.032893359049031491 0.99945886705280229 -4.8724045631498563e-14 0 -0.15668974377387376 -0.0051568425386077331 0.98763441169853405 0
		 -0.030674083788439582 -1.4843075040553737 0.034020593604505406 1;
	setAttr ".pm[15]" -type "matrix" 0.99901628689829347 -0.0059520157187940275 0.043943509427787165 0
		 0.0059577708215473877 0.99998225232592886 5.8608570470755618e-13 0 -0.043942729532707774 0.00026180535767982764 0.99903401742842068 0
		 -0.28300699742905255 -1.5036557390835359 0.068386888079294328 1;
	setAttr ".pm[16]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.63602611492977545 -1.502792210048757 0.11521662238140697 1;
	setAttr ".pm[17]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.91544442186787278 -1.4957922401719286 0.1148209832473453 1;
	setAttr ".pm[18]" -type "matrix" 0.96687236460492187 0.25321706230697183 -0.032232746080877776 0
		 0.031181153458877519 0.0081661244717597808 0.99948039004278932 0 0.25334870481662447 -0.96737502229886996 -5.3117059362062246e-13 0
		 -1.1814809606791408 -0.38218209163617911 -1.4802241633262798 1;
	setAttr ".pm[19]" -type "matrix" 0.99778886398022892 -0.04119389727265977 -0.052157892447198727 0
		 0.041250044739540047 0.99914885468031556 5.1744632884043166e-14 0 0.052113498501155493 -0.0021515153970184438 0.99863885076411196 0
		 -1.5244691757871549 -1.4280990511325131 0.15817231164890205 1;
	setAttr ".pm[20]" -type "matrix" 0.55146716803094264 -0.59531909799528659 -0.5843621600908212 0
		 -0.184831412267696 0.59589931064290147 -0.78149943097512453 0 0.8134625446958581 0.53897976134303305 0.218585235639432 0
		 -0.34643070642497487 -0.33203413254649256 1.7223233842299677 1;
	setAttr ".pm[21]" -type "matrix" 0.43247852844110041 -0.78347014219601152 -0.44624753077723794 0
		 -0.016862308610989668 0.48781180705669247 -0.87278594365651407 0 0.90148654176628085 0.38498594413750431 0.19775701714686711 0
		 -0.68330210017345672 -0.055571858369026367 1.6719772833616835 1;
	setAttr ".pm[22]" -type "matrix" 0.98709997017857765 0.032486613313185884 0.1567745796642111 0
		 0.032893359049031172 -0.99945886705280196 4.7295500849031624e-14 0 0.1566897437738731 0.0051568425386092683 -0.98763441169853394 0
		 0.030988873030484747 1.4843225439599186 -0.033970610371506713 1;
	setAttr ".pm[23]" -type "matrix" 0.99901628689829325 -0.0059520157187814837 0.043943509427789323 0
		 -0.0059577708215470546 -0.99998225232592863 -3.0522025878942906e-13 0 0.043942729532708065 -0.00026180535796021756 -0.99903401742842046 0
		 0.2833260565934661 1.5036586947314918 -0.068372892651038242 1;
	setAttr ".pm[24]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.63634490480602257 1.5027846255377977 -0.11523170466323172 1;
	setAttr ".pm[25]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.91576321961067553 1.495788397645736 -0.114836104991323 1;
	setAttr ".pm[26]" -type "matrix" 0.96687236460492165 0.25321706230697189 -0.032232746080877665 0
		 -0.031181153458877408 -0.0081661244717593524 -0.99948039004278866 0 -0.25334870481662469 0.9673750222988694 5.3187315662839256e-13 0
		 1.1817860232541479 0.38226194581938894 1.4802180860793479 1;
	setAttr ".pm[27]" -type "matrix" 0.99778886398022859 -0.041193897272659673 -0.052157892447198755 0
		 -0.041250044739539866 -0.99914885468031489 -5.2383011123202599e-14 0 -0.052113498501155792 0.0021515153970194821 -0.99863885076411163 0
		 1.5247892137638857 1.4280878870350271 -0.15818906625546916 1;
	setAttr ".pm[28]" -type "matrix" 0.55146716803094298 -0.59531909799528626 -0.58436216009082076 0
		 0.18483141226769609 -0.59589931064290136 0.78149943097512431 0 -0.81346254469585788 -0.53897976134303316 -0.21858523563943225 0
		 0.34660786863342058 0.33184191323535761 -1.7225088095631471 1;
	setAttr ".pm[29]" -type "matrix" 0.43247852844110091 -0.78347014219601219 -0.446247530777236 0
		 0.016862308610989852 -0.48781180705669058 0.87278594365651485 0 -0.90148654176628051 -0.38498594413750481 -0.19775701714686661 0
		 0.68344018798611017 0.055319914102758515 -1.6721152336484386 1;
	setAttr ".pm[30]" -type "matrix" 0.0022554669568005054 -0.00014975192740381045 -0.99999744521832001 0
		 -0.99780055773920817 0.066249055981891902 -0.0022604328861923848 0 0.066249225234198697 0.99780310690830587 2.9590587792560625e-16 0
		 0.94226554016471564 -0.062781841508607925 0.21743813129452583 1;
	setAttr ".pm[31]" -type "matrix" -0.013350758322473745 -0.00087893656994142552 -0.99991048835519292 0
		 -0.99775062933432612 -0.065686120190470182 0.013379659086803468 0 -0.065692000389475827 0.99783994762929229 -1.232737870116018e-16 0
		 0.56786214599764662 0.035281816434817856 0.20770911692970945 1;
	setAttr ".pm[32]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 0.18978345984901215 0.015292731874088965 0.21528362544683308 1;
	setAttr ".pm[33]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.22722886347059751 -0.10526655770819621 0.21530292529543407 1;
	setAttr ".pm[34]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.60631281165200357 -0.00091788483853666566 0.215302925295426 1;
	setAttr ".pm[35]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 -0.015921531366467314 0.22526446895315411 0.21523776392495572 1;
	setAttr ".pm[36]" -type "matrix" 0.0022554669568004299 -0.00014975192802755828 -0.99999744521832035 0
		 0.99780055773920828 -0.066249055981890251 0.0022604328862336548 0 -0.066249225234198475 -0.99780310690830654 6.2200017272168214e-13 0
		 -0.94226571602569853 0.06278185367193026 -0.21743820639780065 1;
	setAttr ".pm[37]" -type "matrix" -0.013350758322473837 -0.00088768916550628228 -0.99991048062322097 0
		 0.99775062933432646 0.065686003070725738 -0.01338023406180442 0 0.065692000389476521 -0.99783994759106476 8.7344713705757555e-06 0
		 -0.56786188528643733 -0.035283621889183818 -0.20770888629017781 1;
	setAttr ".pm[38]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 -0.18978378855540295 -0.015292757530726382 -0.21528370011797163 1;
	setAttr ".pm[39]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.22722857608019675 0.10526664874358312 -0.21530299999967803 1;
	setAttr ".pm[40]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.60631330964025831 0.0009178855077175889 -0.21530299999999705 1;
	setAttr ".pm[41]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 0.015921549419727878 -0.22526470836685364 -0.21523780051723371 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 3 ".ma";
	setAttr -s 42 ".dpf[0:41]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
		4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4;
	setAttr -s 3 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 42 ".ifcl";
	setAttr -s 42 ".ifcl";
createNode groupId -n "groupId895";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts4";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:127]";
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
createNode groupId -n "groupId897";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts6";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode skinCluster -n "skinCluster3";
	setAttr -s 717 ".wl";
	setAttr ".wl[0].w[10]"  1;
	setAttr ".wl[1].w[10]"  1;
	setAttr ".wl[2].w[10]"  1;
	setAttr ".wl[3].w[10]"  1;
	setAttr ".wl[4].w[10]"  1;
	setAttr ".wl[5].w[10]"  1;
	setAttr ".wl[6].w[10]"  1;
	setAttr ".wl[7].w[10]"  1;
	setAttr ".wl[8].w[10]"  1;
	setAttr ".wl[9].w[10]"  1;
	setAttr ".wl[10].w[10]"  1;
	setAttr ".wl[11].w[10]"  1;
	setAttr ".wl[12].w[10]"  1;
	setAttr ".wl[13].w[10]"  1;
	setAttr ".wl[14].w[10]"  1;
	setAttr ".wl[15].w[10]"  1;
	setAttr ".wl[16].w[10]"  1;
	setAttr ".wl[17].w[10]"  1;
	setAttr ".wl[18].w[13]"  1;
	setAttr ".wl[19].w[13]"  1;
	setAttr ".wl[20].w[13]"  1;
	setAttr ".wl[21].w[13]"  1;
	setAttr ".wl[22].w[13]"  1;
	setAttr ".wl[23].w[13]"  1;
	setAttr ".wl[24].w[13]"  1;
	setAttr ".wl[25].w[13]"  1;
	setAttr ".wl[26].w[13]"  1;
	setAttr ".wl[27].w[13]"  1;
	setAttr ".wl[28].w[13]"  1;
	setAttr ".wl[29].w[13]"  1;
	setAttr ".wl[30].w[13]"  1;
	setAttr ".wl[31].w[13]"  1;
	setAttr ".wl[32].w[13]"  1;
	setAttr ".wl[33].w[13]"  1;
	setAttr ".wl[34].w[13]"  1;
	setAttr ".wl[35].w[13]"  1;
	setAttr ".wl[36].w[8]"  1;
	setAttr ".wl[37].w[8]"  1;
	setAttr ".wl[38].w[8]"  1;
	setAttr ".wl[39].w[8]"  1;
	setAttr ".wl[40].w[8]"  1;
	setAttr ".wl[41].w[8]"  1;
	setAttr ".wl[42].w[8]"  1;
	setAttr ".wl[43].w[8]"  1;
	setAttr ".wl[44].w[8]"  1;
	setAttr ".wl[45].w[8]"  1;
	setAttr ".wl[46].w[8]"  1;
	setAttr ".wl[47].w[8]"  1;
	setAttr ".wl[48].w[8]"  1;
	setAttr ".wl[49].w[8]"  1;
	setAttr ".wl[50].w[8]"  1;
	setAttr ".wl[51].w[8]"  1;
	setAttr -s 2 ".wl[52].w[4:5]"  0.5 0.5;
	setAttr -s 2 ".wl[53].w[4:5]"  0.5 0.5;
	setAttr ".wl[54].w[5]"  1;
	setAttr ".wl[55].w[5]"  1;
	setAttr ".wl[56].w[5]"  1;
	setAttr ".wl[57].w[5]"  1;
	setAttr -s 2 ".wl[58].w[4:5]"  0.5 0.5;
	setAttr -s 2 ".wl[59].w[4:5]"  0.5 0.5;
	setAttr ".wl[60].w[5]"  1;
	setAttr ".wl[61].w[5]"  1;
	setAttr -s 2 ".wl[62].w[4:5]"  0.5 0.5;
	setAttr -s 2 ".wl[63].w[4:5]"  0.5 0.5;
	setAttr -s 2 ".wl[64].w[4:5]"  0.20000000298023224 0.79999999701976765;
	setAttr -s 2 ".wl[65].w[4:5]"  0.20000000298023224 0.79999999701976765;
	setAttr -s 2 ".wl[66].w[4:5]"  0.20000000298023224 0.79999999701976765;
	setAttr -s 2 ".wl[67].w[4:5]"  0.20000000298023224 0.79999999701976765;
	setAttr -s 2 ".wl[68].w[4:5]"  0.20000000298023224 0.79999999701976765;
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
	setAttr ".wl[85].w[32]"  1;
	setAttr ".wl[86].w[32]"  1;
	setAttr ".wl[87].w[32]"  1;
	setAttr ".wl[88].w[32]"  1;
	setAttr ".wl[89].w[32]"  1;
	setAttr ".wl[90].w[32]"  1;
	setAttr ".wl[91].w[32]"  1;
	setAttr ".wl[92].w[32]"  1;
	setAttr ".wl[93].w[32]"  1;
	setAttr ".wl[94].w[32]"  1;
	setAttr ".wl[95].w[32]"  1;
	setAttr ".wl[96].w[32]"  1;
	setAttr ".wl[97].w[32]"  1;
	setAttr ".wl[98].w[32]"  1;
	setAttr ".wl[99].w[32]"  1;
	setAttr ".wl[100].w[32]"  1;
	setAttr ".wl[101].w[32]"  1;
	setAttr ".wl[102].w[32]"  1;
	setAttr ".wl[103].w[32]"  1;
	setAttr ".wl[104].w[32]"  1;
	setAttr ".wl[105].w[32]"  1;
	setAttr ".wl[106].w[32]"  1;
	setAttr ".wl[107].w[32]"  1;
	setAttr ".wl[108].w[32]"  1;
	setAttr ".wl[109].w[32]"  1;
	setAttr ".wl[110].w[32]"  1;
	setAttr ".wl[111].w[32]"  1;
	setAttr ".wl[112].w[32]"  1;
	setAttr ".wl[113].w[32]"  1;
	setAttr ".wl[114].w[32]"  1;
	setAttr ".wl[115].w[32]"  1;
	setAttr ".wl[116].w[32]"  1;
	setAttr ".wl[117].w[32]"  1;
	setAttr ".wl[118].w[32]"  1;
	setAttr ".wl[119].w[32]"  1;
	setAttr ".wl[120].w[32]"  1;
	setAttr ".wl[121].w[32]"  1;
	setAttr ".wl[122].w[33]"  1;
	setAttr ".wl[123].w[33]"  1;
	setAttr ".wl[124].w[33]"  1;
	setAttr ".wl[125].w[33]"  1;
	setAttr ".wl[126].w[33]"  1;
	setAttr ".wl[127].w[33]"  1;
	setAttr ".wl[128].w[33]"  1;
	setAttr ".wl[129].w[33]"  1;
	setAttr ".wl[130].w[33]"  1;
	setAttr ".wl[131].w[33]"  1;
	setAttr ".wl[132].w[33]"  1;
	setAttr ".wl[133].w[33]"  1;
	setAttr ".wl[134].w[33]"  1;
	setAttr ".wl[135].w[33]"  1;
	setAttr ".wl[136].w[33]"  1;
	setAttr ".wl[137].w[33]"  1;
	setAttr ".wl[138].w[33]"  1;
	setAttr ".wl[139].w[33]"  1;
	setAttr ".wl[140].w[31]"  1;
	setAttr ".wl[141].w[31]"  1;
	setAttr ".wl[142].w[31]"  1;
	setAttr ".wl[143].w[31]"  1;
	setAttr ".wl[144].w[31]"  1;
	setAttr ".wl[145].w[31]"  1;
	setAttr ".wl[146].w[31]"  1;
	setAttr ".wl[147].w[31]"  1;
	setAttr ".wl[148].w[31]"  1;
	setAttr ".wl[149].w[31]"  1;
	setAttr ".wl[150].w[31]"  1;
	setAttr ".wl[151].w[31]"  1;
	setAttr ".wl[152].w[31]"  1;
	setAttr ".wl[153].w[31]"  1;
	setAttr ".wl[154].w[31]"  1;
	setAttr ".wl[155].w[31]"  1;
	setAttr ".wl[156].w[31]"  1;
	setAttr ".wl[157].w[31]"  1;
	setAttr ".wl[158].w[30]"  1;
	setAttr ".wl[159].w[30]"  1;
	setAttr ".wl[160].w[30]"  1;
	setAttr ".wl[161].w[30]"  1;
	setAttr ".wl[162].w[30]"  1;
	setAttr ".wl[163].w[30]"  1;
	setAttr ".wl[164].w[30]"  1;
	setAttr ".wl[165].w[30]"  1;
	setAttr ".wl[166].w[30]"  1;
	setAttr ".wl[167].w[30]"  1;
	setAttr ".wl[168].w[30]"  1;
	setAttr ".wl[169].w[30]"  1;
	setAttr ".wl[170].w[30]"  1;
	setAttr ".wl[171].w[30]"  1;
	setAttr ".wl[172].w[30]"  1;
	setAttr ".wl[173].w[30]"  1;
	setAttr ".wl[174].w[30]"  1;
	setAttr ".wl[175].w[30]"  1;
	setAttr ".wl[176].w[30]"  1;
	setAttr ".wl[177].w[30]"  1;
	setAttr ".wl[178].w[30]"  1;
	setAttr ".wl[179].w[30]"  1;
	setAttr ".wl[180].w[30]"  1;
	setAttr ".wl[181].w[30]"  1;
	setAttr ".wl[182].w[30]"  1;
	setAttr ".wl[183].w[30]"  1;
	setAttr ".wl[184].w[30]"  1;
	setAttr ".wl[185].w[30]"  1;
	setAttr ".wl[186].w[30]"  1;
	setAttr ".wl[187].w[30]"  1;
	setAttr ".wl[188].w[30]"  1;
	setAttr ".wl[189].w[30]"  1;
	setAttr ".wl[190].w[30]"  1;
	setAttr ".wl[191].w[30]"  1;
	setAttr ".wl[192].w[30]"  1;
	setAttr ".wl[193].w[30]"  1;
	setAttr ".wl[194].w[30]"  1;
	setAttr ".wl[195].w[30]"  1;
	setAttr ".wl[196].w[30]"  1;
	setAttr ".wl[197].w[30]"  1;
	setAttr ".wl[198].w[30]"  1;
	setAttr ".wl[199].w[30]"  1;
	setAttr ".wl[200].w[30]"  1;
	setAttr ".wl[201].w[30]"  1;
	setAttr ".wl[202].w[30]"  1;
	setAttr ".wl[203].w[30]"  1;
	setAttr ".wl[204].w[30]"  1;
	setAttr ".wl[205].w[30]"  1;
	setAttr ".wl[206].w[30]"  1;
	setAttr ".wl[207].w[30]"  1;
	setAttr ".wl[208].w[30]"  1;
	setAttr ".wl[209].w[30]"  1;
	setAttr ".wl[210].w[30]"  1;
	setAttr ".wl[211].w[30]"  1;
	setAttr ".wl[212].w[30]"  1;
	setAttr ".wl[213].w[30]"  1;
	setAttr ".wl[214].w[30]"  1;
	setAttr ".wl[215].w[30]"  1;
	setAttr ".wl[216].w[38]"  1;
	setAttr ".wl[217].w[38]"  1;
	setAttr ".wl[218].w[38]"  1;
	setAttr ".wl[219].w[38]"  1;
	setAttr ".wl[220].w[38]"  1;
	setAttr ".wl[221].w[38]"  1;
	setAttr ".wl[222].w[38]"  1;
	setAttr ".wl[223].w[38]"  1;
	setAttr ".wl[224].w[38]"  1;
	setAttr ".wl[225].w[38]"  1;
	setAttr ".wl[226].w[38]"  1;
	setAttr ".wl[227].w[38]"  1;
	setAttr ".wl[228].w[38]"  1;
	setAttr ".wl[229].w[38]"  0.99999999999999989;
	setAttr ".wl[230].w[38]"  1;
	setAttr ".wl[231].w[38]"  1;
	setAttr ".wl[232].w[38]"  1;
	setAttr ".wl[233].w[38]"  1;
	setAttr ".wl[234].w[38]"  1;
	setAttr ".wl[235].w[38]"  1;
	setAttr ".wl[236].w[38]"  1;
	setAttr ".wl[237].w[38]"  1;
	setAttr ".wl[238].w[38]"  1;
	setAttr ".wl[239].w[38]"  1;
	setAttr ".wl[240].w[38]"  1;
	setAttr ".wl[241].w[38]"  1;
	setAttr ".wl[242].w[38]"  1;
	setAttr ".wl[243].w[38]"  1;
	setAttr ".wl[244].w[38]"  1;
	setAttr ".wl[245].w[38]"  1;
	setAttr ".wl[246].w[38]"  1;
	setAttr ".wl[247].w[38]"  1;
	setAttr ".wl[248].w[38]"  1;
	setAttr ".wl[249].w[38]"  1;
	setAttr ".wl[250].w[38]"  1;
	setAttr ".wl[251].w[38]"  1;
	setAttr ".wl[252].w[38]"  1;
	setAttr ".wl[253].w[39]"  1;
	setAttr ".wl[254].w[39]"  1;
	setAttr ".wl[255].w[39]"  1;
	setAttr ".wl[256].w[39]"  1;
	setAttr ".wl[257].w[39]"  1;
	setAttr ".wl[258].w[39]"  1;
	setAttr ".wl[259].w[39]"  1;
	setAttr ".wl[260].w[39]"  1;
	setAttr ".wl[261].w[39]"  1;
	setAttr ".wl[262].w[39]"  1;
	setAttr ".wl[263].w[39]"  1;
	setAttr ".wl[264].w[39]"  1;
	setAttr ".wl[265].w[39]"  1;
	setAttr ".wl[266].w[39]"  1;
	setAttr ".wl[267].w[39]"  1;
	setAttr ".wl[268].w[39]"  1;
	setAttr ".wl[269].w[39]"  1;
	setAttr ".wl[270].w[39]"  1;
	setAttr ".wl[271].w[37]"  1;
	setAttr ".wl[272].w[37]"  1;
	setAttr ".wl[273].w[37]"  1;
	setAttr ".wl[274].w[37]"  1;
	setAttr ".wl[275].w[37]"  1;
	setAttr ".wl[276].w[37]"  1;
	setAttr ".wl[277].w[37]"  1;
	setAttr ".wl[278].w[37]"  1;
	setAttr ".wl[279].w[37]"  1;
	setAttr ".wl[280].w[37]"  1;
	setAttr ".wl[281].w[37]"  1;
	setAttr ".wl[282].w[37]"  1;
	setAttr ".wl[283].w[37]"  1;
	setAttr ".wl[284].w[37]"  1;
	setAttr ".wl[285].w[37]"  1;
	setAttr ".wl[286].w[37]"  1;
	setAttr ".wl[287].w[37]"  1;
	setAttr ".wl[288].w[37]"  1;
	setAttr ".wl[289].w[36]"  1;
	setAttr ".wl[290].w[36]"  1;
	setAttr ".wl[291].w[36]"  1;
	setAttr ".wl[292].w[36]"  1;
	setAttr ".wl[293].w[36]"  1;
	setAttr ".wl[294].w[36]"  1;
	setAttr ".wl[295].w[36]"  1;
	setAttr ".wl[296].w[36]"  1;
	setAttr ".wl[297].w[36]"  1;
	setAttr ".wl[298].w[36]"  1;
	setAttr ".wl[299].w[36]"  0.99999999999998579;
	setAttr ".wl[300].w[36]"  1;
	setAttr ".wl[301].w[36]"  1;
	setAttr ".wl[302].w[36]"  1;
	setAttr ".wl[303].w[36]"  1;
	setAttr ".wl[304].w[36]"  1;
	setAttr ".wl[305].w[36]"  1;
	setAttr ".wl[306].w[36]"  1;
	setAttr ".wl[307].w[36]"  0.99999999999998579;
	setAttr ".wl[308].w[36]"  1;
	setAttr ".wl[309].w[36]"  1;
	setAttr ".wl[310].w[36]"  1;
	setAttr ".wl[311].w[36]"  1;
	setAttr ".wl[312].w[36]"  1;
	setAttr ".wl[313].w[36]"  1;
	setAttr ".wl[314].w[36]"  1;
	setAttr ".wl[315].w[36]"  1;
	setAttr ".wl[316].w[36]"  1;
	setAttr ".wl[317].w[36]"  1;
	setAttr ".wl[318].w[36]"  1;
	setAttr ".wl[319].w[36]"  1;
	setAttr ".wl[320].w[36]"  1;
	setAttr ".wl[321].w[36]"  1;
	setAttr ".wl[322].w[36]"  1;
	setAttr ".wl[323].w[36]"  1;
	setAttr ".wl[324].w[36]"  1;
	setAttr ".wl[325].w[36]"  1;
	setAttr ".wl[326].w[36]"  1;
	setAttr ".wl[327].w[36]"  1;
	setAttr ".wl[328].w[36]"  1;
	setAttr ".wl[329].w[36]"  1;
	setAttr ".wl[330].w[36]"  1;
	setAttr ".wl[331].w[36]"  1;
	setAttr ".wl[332].w[36]"  1;
	setAttr ".wl[333].w[36]"  1;
	setAttr ".wl[334].w[36]"  1;
	setAttr ".wl[335].w[36]"  1;
	setAttr ".wl[336].w[36]"  1;
	setAttr ".wl[337].w[36]"  1;
	setAttr ".wl[338].w[36]"  1;
	setAttr ".wl[339].w[36]"  1;
	setAttr ".wl[340].w[36]"  1;
	setAttr ".wl[341].w[36]"  1;
	setAttr ".wl[342].w[36]"  1;
	setAttr ".wl[343].w[36]"  1;
	setAttr ".wl[344].w[36]"  1;
	setAttr ".wl[345].w[36]"  1;
	setAttr ".wl[346].w[36]"  1;
	setAttr ".wl[347].w[16]"  1;
	setAttr ".wl[348].w[16]"  1;
	setAttr ".wl[349].w[16]"  1;
	setAttr ".wl[350].w[16]"  1;
	setAttr ".wl[351].w[16]"  1;
	setAttr ".wl[352].w[16]"  1;
	setAttr ".wl[353].w[16]"  1;
	setAttr ".wl[354].w[16]"  1;
	setAttr ".wl[355].w[16]"  1;
	setAttr ".wl[356].w[16]"  1;
	setAttr ".wl[357].w[16]"  1;
	setAttr ".wl[358].w[16]"  1;
	setAttr ".wl[359].w[16]"  1;
	setAttr ".wl[360].w[16]"  1;
	setAttr ".wl[361].w[16]"  1;
	setAttr ".wl[362].w[16]"  1;
	setAttr ".wl[363].w[16]"  1;
	setAttr ".wl[364].w[16]"  1;
	setAttr ".wl[365].w[15]"  1;
	setAttr ".wl[366].w[15]"  1;
	setAttr ".wl[367].w[15]"  1;
	setAttr ".wl[368].w[15]"  1;
	setAttr ".wl[369].w[15]"  1;
	setAttr ".wl[370].w[15]"  1;
	setAttr ".wl[371].w[15]"  1;
	setAttr ".wl[372].w[15]"  1;
	setAttr ".wl[373].w[15]"  1;
	setAttr ".wl[374].w[15]"  1;
	setAttr ".wl[375].w[15]"  1;
	setAttr ".wl[376].w[15]"  1;
	setAttr ".wl[377].w[15]"  1;
	setAttr ".wl[378].w[15]"  1;
	setAttr ".wl[379].w[15]"  1;
	setAttr ".wl[380].w[15]"  1;
	setAttr ".wl[381].w[15]"  1;
	setAttr ".wl[382].w[15]"  1;
	setAttr ".wl[383].w[15]"  1;
	setAttr ".wl[384].w[15]"  1;
	setAttr ".wl[385].w[15]"  1;
	setAttr ".wl[386].w[15]"  1;
	setAttr ".wl[387].w[15]"  1;
	setAttr ".wl[388].w[15]"  1;
	setAttr ".wl[389].w[15]"  1;
	setAttr ".wl[390].w[15]"  1;
	setAttr ".wl[391].w[15]"  1;
	setAttr ".wl[392].w[15]"  1;
	setAttr ".wl[393].w[15]"  1;
	setAttr ".wl[394].w[15]"  1;
	setAttr ".wl[395].w[15]"  1;
	setAttr ".wl[396].w[15]"  1;
	setAttr ".wl[397].w[15]"  1;
	setAttr ".wl[398].w[15]"  1;
	setAttr ".wl[399].w[15]"  1;
	setAttr ".wl[400].w[15]"  1;
	setAttr ".wl[401].w[15]"  1;
	setAttr ".wl[402].w[15]"  1;
	setAttr ".wl[403].w[15]"  1;
	setAttr ".wl[404].w[15]"  1;
	setAttr ".wl[405].w[15]"  1;
	setAttr ".wl[406].w[15]"  1;
	setAttr ".wl[407].w[15]"  1;
	setAttr ".wl[408].w[15]"  1;
	setAttr ".wl[409].w[15]"  1;
	setAttr ".wl[410].w[15]"  1;
	setAttr ".wl[411].w[15]"  1;
	setAttr ".wl[412].w[15]"  1;
	setAttr ".wl[413].w[15]"  1;
	setAttr ".wl[414].w[15]"  1;
	setAttr ".wl[415].w[15]"  1;
	setAttr ".wl[416].w[15]"  1;
	setAttr ".wl[417].w[15]"  1;
	setAttr ".wl[418].w[15]"  1;
	setAttr ".wl[419].w[15]"  1;
	setAttr ".wl[420].w[15]"  1;
	setAttr ".wl[421].w[15]"  1;
	setAttr ".wl[422].w[15]"  1;
	setAttr ".wl[423].w[26]"  1;
	setAttr ".wl[424].w[26]"  1;
	setAttr ".wl[425].w[26]"  1;
	setAttr ".wl[426].w[26]"  1;
	setAttr ".wl[427].w[26]"  1;
	setAttr ".wl[428].w[26]"  1;
	setAttr ".wl[429].w[26]"  1;
	setAttr ".wl[430].w[26]"  1;
	setAttr ".wl[431].w[26]"  1;
	setAttr ".wl[432].w[26]"  1;
	setAttr ".wl[433].w[26]"  1;
	setAttr ".wl[434].w[26]"  1;
	setAttr ".wl[435].w[26]"  1;
	setAttr ".wl[436].w[26]"  1;
	setAttr ".wl[437].w[26]"  1;
	setAttr ".wl[438].w[26]"  1;
	setAttr ".wl[439].w[26]"  1;
	setAttr ".wl[440].w[26]"  1;
	setAttr ".wl[441].w[28]"  1;
	setAttr ".wl[442].w[28]"  1;
	setAttr ".wl[443].w[28]"  1;
	setAttr ".wl[444].w[28]"  1;
	setAttr ".wl[445].w[28]"  1;
	setAttr ".wl[446].w[28]"  1;
	setAttr ".wl[447].w[28]"  1;
	setAttr ".wl[448].w[28]"  1;
	setAttr ".wl[449].w[28]"  1;
	setAttr ".wl[450].w[28]"  1;
	setAttr ".wl[451].w[28]"  1;
	setAttr ".wl[452].w[28]"  1;
	setAttr ".wl[453].w[28]"  1;
	setAttr ".wl[454].w[28]"  1;
	setAttr ".wl[455].w[28]"  1;
	setAttr ".wl[456].w[28]"  1;
	setAttr ".wl[457].w[28]"  1;
	setAttr ".wl[458].w[28]"  1;
	setAttr ".wl[459].w[28]"  1;
	setAttr ".wl[460].w[28]"  1;
	setAttr ".wl[461].w[28]"  1;
	setAttr ".wl[462].w[28]"  1;
	setAttr ".wl[463].w[28]"  0.99999999999991473;
	setAttr ".wl[464].w[28]"  0.99999999999990763;
	setAttr ".wl[465].w[28]"  1;
	setAttr ".wl[466].w[28]"  1;
	setAttr ".wl[467].w[28]"  1;
	setAttr ".wl[468].w[28]"  1;
	setAttr ".wl[469].w[28]"  1;
	setAttr ".wl[470].w[28]"  1;
	setAttr ".wl[471].w[28]"  1;
	setAttr ".wl[472].w[28]"  1;
	setAttr ".wl[473].w[28]"  1;
	setAttr ".wl[474].w[28]"  1;
	setAttr ".wl[475].w[28]"  1;
	setAttr ".wl[476].w[28]"  1;
	setAttr ".wl[477].w[28]"  1;
	setAttr ".wl[478].w[28]"  1;
	setAttr ".wl[479].w[28]"  1;
	setAttr ".wl[480].w[28]"  1;
	setAttr ".wl[481].w[28]"  1;
	setAttr ".wl[482].w[28]"  1;
	setAttr ".wl[483].w[28]"  1;
	setAttr ".wl[484].w[28]"  1;
	setAttr ".wl[485].w[28]"  1;
	setAttr ".wl[486].w[28]"  1;
	setAttr ".wl[487].w[28]"  1;
	setAttr ".wl[488].w[28]"  1;
	setAttr ".wl[489].w[28]"  1;
	setAttr ".wl[490].w[28]"  1;
	setAttr ".wl[491].w[28]"  1;
	setAttr ".wl[492].w[28]"  1;
	setAttr ".wl[493].w[28]"  1;
	setAttr ".wl[494].w[28]"  1;
	setAttr ".wl[495].w[28]"  1;
	setAttr ".wl[496].w[28]"  1;
	setAttr ".wl[497].w[28]"  1;
	setAttr ".wl[498].w[28]"  1;
	setAttr ".wl[499].w[24]"  1;
	setAttr ".wl[500].w[24]"  1;
	setAttr ".wl[501].w[24]"  1;
	setAttr ".wl[502].w[24]"  1;
	setAttr ".wl[503].w[24]"  1;
	setAttr ".wl[504].w[24]"  1;
	setAttr ".wl[505].w[24]"  1;
	setAttr ".wl[506].w[24]"  1;
	setAttr ".wl[507].w[24]"  1;
	setAttr ".wl[508].w[24]"  1;
	setAttr ".wl[509].w[24]"  1;
	setAttr ".wl[510].w[24]"  1;
	setAttr ".wl[511].w[24]"  1;
	setAttr ".wl[512].w[24]"  1;
	setAttr ".wl[513].w[24]"  1;
	setAttr ".wl[514].w[24]"  1;
	setAttr ".wl[515].w[24]"  1;
	setAttr ".wl[516].w[24]"  1;
	setAttr ".wl[517].w[23]"  0.99999999999999989;
	setAttr ".wl[518].w[23]"  1;
	setAttr ".wl[519].w[23]"  1;
	setAttr ".wl[520].w[23]"  1;
	setAttr ".wl[521].w[23]"  1;
	setAttr ".wl[522].w[23]"  1;
	setAttr ".wl[523].w[23]"  1;
	setAttr ".wl[524].w[23]"  1;
	setAttr ".wl[525].w[23]"  1;
	setAttr ".wl[526].w[23]"  1;
	setAttr ".wl[527].w[23]"  1;
	setAttr ".wl[528].w[23]"  0.99999999999999301;
	setAttr ".wl[529].w[23]"  1;
	setAttr ".wl[530].w[23]"  1;
	setAttr ".wl[531].w[23]"  1;
	setAttr ".wl[532].w[23]"  1;
	setAttr ".wl[533].w[23]"  1;
	setAttr ".wl[534].w[23]"  1;
	setAttr ".wl[535].w[23]"  1;
	setAttr ".wl[536].w[23]"  1;
	setAttr ".wl[537].w[23]"  1;
	setAttr ".wl[538].w[23]"  1;
	setAttr ".wl[539].w[23]"  1;
	setAttr ".wl[540].w[23]"  1;
	setAttr ".wl[541].w[23]"  1;
	setAttr ".wl[542].w[23]"  1;
	setAttr ".wl[543].w[23]"  1;
	setAttr ".wl[544].w[23]"  1;
	setAttr ".wl[545].w[23]"  1;
	setAttr ".wl[546].w[23]"  1;
	setAttr ".wl[547].w[23]"  1;
	setAttr ".wl[548].w[23]"  1;
	setAttr ".wl[549].w[23]"  1;
	setAttr ".wl[550].w[23]"  1;
	setAttr ".wl[551].w[23]"  1;
	setAttr ".wl[552].w[23]"  1;
	setAttr ".wl[553].w[23]"  1;
	setAttr ".wl[554].w[23]"  1;
	setAttr ".wl[555].w[23]"  1;
	setAttr ".wl[556].w[23]"  1;
	setAttr ".wl[557].w[23]"  1;
	setAttr ".wl[558].w[23]"  1;
	setAttr ".wl[559].w[23]"  1;
	setAttr ".wl[560].w[23]"  1;
	setAttr ".wl[561].w[23]"  1;
	setAttr ".wl[562].w[23]"  1;
	setAttr ".wl[563].w[23]"  1;
	setAttr ".wl[564].w[23]"  1;
	setAttr ".wl[565].w[23]"  1;
	setAttr ".wl[566].w[23]"  1;
	setAttr ".wl[567].w[23]"  1;
	setAttr ".wl[568].w[23]"  1;
	setAttr ".wl[569].w[23]"  1;
	setAttr ".wl[570].w[23]"  1;
	setAttr ".wl[571].w[23]"  1;
	setAttr ".wl[572].w[23]"  1;
	setAttr ".wl[573].w[23]"  1;
	setAttr ".wl[574].w[23]"  1;
	setAttr ".wl[575].w[18]"  1;
	setAttr ".wl[576].w[18]"  1;
	setAttr ".wl[577].w[18]"  1;
	setAttr ".wl[578].w[18]"  1;
	setAttr ".wl[579].w[18]"  1;
	setAttr ".wl[580].w[18]"  1;
	setAttr ".wl[581].w[18]"  1;
	setAttr ".wl[582].w[18]"  1;
	setAttr ".wl[583].w[18]"  1;
	setAttr ".wl[584].w[18]"  1;
	setAttr ".wl[585].w[18]"  1;
	setAttr ".wl[586].w[18]"  1;
	setAttr ".wl[587].w[18]"  1;
	setAttr ".wl[588].w[18]"  1;
	setAttr ".wl[589].w[18]"  1;
	setAttr ".wl[590].w[18]"  1;
	setAttr ".wl[591].w[18]"  1;
	setAttr ".wl[592].w[18]"  1;
	setAttr ".wl[593].w[20]"  1;
	setAttr ".wl[594].w[20]"  1;
	setAttr ".wl[595].w[20]"  1;
	setAttr ".wl[596].w[20]"  1;
	setAttr ".wl[597].w[20]"  1;
	setAttr ".wl[598].w[20]"  1;
	setAttr ".wl[599].w[20]"  1;
	setAttr ".wl[600].w[20]"  1;
	setAttr ".wl[601].w[20]"  1;
	setAttr ".wl[602].w[20]"  1;
	setAttr ".wl[603].w[20]"  1;
	setAttr ".wl[604].w[20]"  1;
	setAttr ".wl[605].w[20]"  1;
	setAttr ".wl[606].w[20]"  1;
	setAttr ".wl[607].w[20]"  1;
	setAttr ".wl[608].w[20]"  1;
	setAttr ".wl[609].w[20]"  1;
	setAttr ".wl[610].w[20]"  1;
	setAttr ".wl[611].w[20]"  1;
	setAttr ".wl[612].w[20]"  1;
	setAttr ".wl[613].w[20]"  1;
	setAttr ".wl[614].w[20]"  1;
	setAttr ".wl[615].w[20]"  1;
	setAttr ".wl[616].w[20]"  1;
	setAttr ".wl[617].w[20]"  1;
	setAttr ".wl[618].w[20]"  1;
	setAttr ".wl[619].w[20]"  1;
	setAttr ".wl[620].w[20]"  1;
	setAttr ".wl[621].w[20]"  1;
	setAttr ".wl[622].w[20]"  1;
	setAttr ".wl[623].w[20]"  1;
	setAttr ".wl[624].w[20]"  1;
	setAttr ".wl[625].w[20]"  1;
	setAttr ".wl[626].w[20]"  1;
	setAttr ".wl[627].w[20]"  1;
	setAttr ".wl[628].w[20]"  1;
	setAttr ".wl[629].w[20]"  1;
	setAttr ".wl[630].w[20]"  1;
	setAttr ".wl[631].w[20]"  1;
	setAttr ".wl[632].w[20]"  1;
	setAttr ".wl[633].w[20]"  1;
	setAttr ".wl[634].w[20]"  1;
	setAttr ".wl[635].w[20]"  1;
	setAttr ".wl[636].w[20]"  1;
	setAttr ".wl[637].w[20]"  1;
	setAttr ".wl[638].w[20]"  1;
	setAttr ".wl[639].w[20]"  1;
	setAttr ".wl[640].w[20]"  1;
	setAttr ".wl[641].w[20]"  1;
	setAttr ".wl[642].w[20]"  1;
	setAttr ".wl[643].w[20]"  1;
	setAttr ".wl[644].w[20]"  1;
	setAttr ".wl[645].w[20]"  1;
	setAttr ".wl[646].w[20]"  1;
	setAttr ".wl[647].w[20]"  1;
	setAttr ".wl[648].w[20]"  1;
	setAttr ".wl[649].w[20]"  1;
	setAttr ".wl[650].w[20]"  1;
	setAttr ".wl[651].w[17]"  1;
	setAttr ".wl[652].w[17]"  1;
	setAttr ".wl[653].w[17]"  1;
	setAttr ".wl[654].w[17]"  1;
	setAttr ".wl[655].w[17]"  1;
	setAttr ".wl[656].w[17]"  1;
	setAttr ".wl[657].w[17]"  1;
	setAttr ".wl[658].w[17]"  1;
	setAttr ".wl[659].w[17]"  1;
	setAttr ".wl[660].w[17]"  1;
	setAttr ".wl[661].w[17]"  1;
	setAttr ".wl[662].w[17]"  1;
	setAttr ".wl[663].w[17]"  1;
	setAttr ".wl[664].w[17]"  1;
	setAttr ".wl[665].w[17]"  1;
	setAttr ".wl[666].w[17]"  1;
	setAttr ".wl[667].w[17]"  1;
	setAttr ".wl[668].w[17]"  1;
	setAttr ".wl[669].w[17]"  1;
	setAttr ".wl[670].w[17]"  1;
	setAttr ".wl[671].w[17]"  1;
	setAttr ".wl[672].w[17]"  1;
	setAttr ".wl[673].w[17]"  1;
	setAttr ".wl[674].w[17]"  1;
	setAttr ".wl[675].w[17]"  1;
	setAttr ".wl[676].w[17]"  1;
	setAttr ".wl[677].w[17]"  1;
	setAttr ".wl[678].w[17]"  1;
	setAttr ".wl[679].w[17]"  1;
	setAttr ".wl[680].w[17]"  1;
	setAttr ".wl[681].w[17]"  1;
	setAttr ".wl[682].w[17]"  1;
	setAttr ".wl[683].w[17]"  1;
	setAttr ".wl[684].w[25]"  1;
	setAttr ".wl[685].w[25]"  1;
	setAttr ".wl[686].w[25]"  1;
	setAttr ".wl[687].w[25]"  1;
	setAttr ".wl[688].w[25]"  1;
	setAttr ".wl[689].w[25]"  1;
	setAttr ".wl[690].w[25]"  1;
	setAttr ".wl[691].w[25]"  1;
	setAttr ".wl[692].w[25]"  1;
	setAttr ".wl[693].w[25]"  1;
	setAttr ".wl[694].w[25]"  1;
	setAttr ".wl[695].w[25]"  1;
	setAttr ".wl[696].w[25]"  1;
	setAttr ".wl[697].w[25]"  1;
	setAttr ".wl[698].w[25]"  1;
	setAttr ".wl[699].w[25]"  1;
	setAttr ".wl[700].w[25]"  1;
	setAttr ".wl[701].w[25]"  1;
	setAttr ".wl[702].w[25]"  1;
	setAttr ".wl[703].w[25]"  1;
	setAttr ".wl[704].w[25]"  1;
	setAttr ".wl[705].w[25]"  1;
	setAttr ".wl[706].w[25]"  1;
	setAttr ".wl[707].w[25]"  1;
	setAttr ".wl[708].w[25]"  1;
	setAttr ".wl[709].w[25]"  1;
	setAttr ".wl[710].w[25]"  1;
	setAttr ".wl[711].w[25]"  1;
	setAttr ".wl[712].w[25]"  1;
	setAttr ".wl[713].w[25]"  1;
	setAttr ".wl[714].w[25]"  1;
	setAttr ".wl[715].w[25]"  1;
	setAttr ".wl[716].w[25]"  1;
	setAttr -s 42 ".pm";
	setAttr ".pm[0]" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr ".pm[1]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -0.94502621553771726 -0.0011685033075627034 -0.0068526279305598072 1;
	setAttr ".pm[2]" -type "matrix" -0.019706000177291037 9.5458239375163605e-05 0.99980581336814445 0
		 0.99979408310123452 -0.00484312301086663 0.019706231381541692 0 0.004844063663274026 0.99998826745478675 2.7723049550454343e-16 0
		 -1.0613325749496161 0.0093675768454640953 -0.020074561363538804 1;
	setAttr ".pm[3]" -type "matrix" 0.019073572066682067 -7.2306505664461402e-05 0.99981808026279761 0
		 0.99981089608638352 -0.0037902094043473339 -0.019073709120506068 0 0.003790899043705255 0.99999281451640443 -3.3294493464314229e-16 0
		 -1.1641569960339386 0.0081410506660616593 0.025082625298429809 1;
	setAttr ".pm[4]" -type "matrix" 0.0045534302937101203 2.7211509261482174e-05 0.99998963271230668 0
		 0.99997177681231586 0.0059758774179040127 -0.00455351160160084 0 -0.0059759393721865832 0.99998214391489004 2.7695266869784393e-16 0
		 -1.2663605058650147 -0.0042264745881383471 0.0066946894503174589 1;
	setAttr ".pm[5]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.4341613524492285 -0.05455186883050709 0.00015952817223838822 1;
	setAttr ".pm[6]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6058499897458056 0.018733889287306887 0.00015952817223838884 1;
	setAttr ".pm[7]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.7152912975186612 0.020114849330770467 0.00015952817223831102 1;
	setAttr ".pm[8]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.8337958776836476 0.019920284608686455 0.00015952817223823421 1;
	setAttr ".pm[9]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.8250283726105887 -0.054551868830507 0.00015952817223838822 1;
	setAttr ".pm[10]" -type "matrix" 1 -2.1942124611942431e-16 -1.9506596001404569e-16 0
		 1.5372687562051188e-16 0.9810414047811844 0.19379825103689671 0 2.4143219255223596e-16 -0.19379825103689663 0.9810414047811844 0
		 -0.092862815907565635 -1.9521402498114755 -0.78286166260919077 1;
	setAttr ".pm[11]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -2.0641521117653978 0.016519491591400367 0.00015952817223826389 1;
	setAttr ".pm[12]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -1.6682845582447858 -0.4568329720549904 0.00015952817223754306 1;
	setAttr ".pm[13]" -type "matrix" 1 -3.2912227236329371e-16 1.0992607845106943e-16 0
		 -2.7051614496067569e-16 -0.98104140478118451 -0.19379825103689607 0 9.8902989564137531e-17 0.19379825103689591 -0.98104140478118451 0
		 0.093181900000000512 1.9521426366394157 0.78286178851602672 1;
	setAttr ".pm[14]" -type "matrix" 0.98709997017857787 0.032486613313186558 0.1567745796642116 0
		 -0.032893359049031491 0.99945886705280229 -4.8724045631498563e-14 0 -0.15668974377387376 -0.0051568425386077331 0.98763441169853405 0
		 -0.030674083788439582 -1.4843075040553737 0.034020593604505406 1;
	setAttr ".pm[15]" -type "matrix" 0.99901628689829347 -0.0059520157187940275 0.043943509427787165 0
		 0.0059577708215473877 0.99998225232592886 5.8608570470755618e-13 0 -0.043942729532707774 0.00026180535767982764 0.99903401742842068 0
		 -0.28300699742905255 -1.5036557390835359 0.068386888079294328 1;
	setAttr ".pm[16]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.63602611492977545 -1.502792210048757 0.11521662238140697 1;
	setAttr ".pm[17]" -type "matrix" 0.99868185990108238 -0.020107967638530625 -0.047225124054504471 0
		 0.020130427732428673 0.99979736240865813 5.2071563207134474e-13 0 0.047215554469104783 -0.00095066194745413641 0.99888427140386837 0
		 -0.91544442186787278 -1.4957922401719286 0.1148209832473453 1;
	setAttr ".pm[18]" -type "matrix" 0.96687236460492187 0.25321706230697183 -0.032232746080877776 0
		 0.031181153458877519 0.0081661244717597808 0.99948039004278932 0 0.25334870481662447 -0.96737502229886996 -5.3117059362062246e-13 0
		 -1.1814809606791408 -0.38218209163617911 -1.4802241633262798 1;
	setAttr ".pm[19]" -type "matrix" 0.99778886398022892 -0.04119389727265977 -0.052157892447198727 0
		 0.041250044739540047 0.99914885468031556 5.1744632884043166e-14 0 0.052113498501155493 -0.0021515153970184438 0.99863885076411196 0
		 -1.5244691757871549 -1.4280990511325131 0.15817231164890205 1;
	setAttr ".pm[20]" -type "matrix" 0.55146716803094264 -0.59531909799528659 -0.5843621600908212 0
		 -0.184831412267696 0.59589931064290147 -0.78149943097512453 0 0.8134625446958581 0.53897976134303305 0.218585235639432 0
		 -0.34643070642497487 -0.33203413254649256 1.7223233842299677 1;
	setAttr ".pm[21]" -type "matrix" 0.43247852844110041 -0.78347014219601152 -0.44624753077723794 0
		 -0.016862308610989668 0.48781180705669247 -0.87278594365651407 0 0.90148654176628085 0.38498594413750431 0.19775701714686711 0
		 -0.68330210017345672 -0.055571858369026367 1.6719772833616835 1;
	setAttr ".pm[22]" -type "matrix" 0.98709997017857765 0.032486613313185884 0.1567745796642111 0
		 0.032893359049031172 -0.99945886705280196 4.7295500849031624e-14 0 0.1566897437738731 0.0051568425386092683 -0.98763441169853394 0
		 0.030988873030484747 1.4843225439599186 -0.033970610371506713 1;
	setAttr ".pm[23]" -type "matrix" 0.99901628689829325 -0.0059520157187814837 0.043943509427789323 0
		 -0.0059577708215470546 -0.99998225232592863 -3.0522025878942906e-13 0 0.043942729532708065 -0.00026180535796021756 -0.99903401742842046 0
		 0.2833260565934661 1.5036586947314918 -0.068372892651038242 1;
	setAttr ".pm[24]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.63634490480602257 1.5027846255377977 -0.11523170466323172 1;
	setAttr ".pm[25]" -type "matrix" 0.99868185990108194 -0.020107967638526573 -0.047225124054506198 0
		 -0.020130427732428582 -0.99979736240865758 -6.0737124964876891e-13 0 -0.047215554469104963 0.00095066194754090923 -0.99888427140386804 0
		 0.91576321961067553 1.495788397645736 -0.114836104991323 1;
	setAttr ".pm[26]" -type "matrix" 0.96687236460492165 0.25321706230697189 -0.032232746080877665 0
		 -0.031181153458877408 -0.0081661244717593524 -0.99948039004278866 0 -0.25334870481662469 0.9673750222988694 5.3187315662839256e-13 0
		 1.1817860232541479 0.38226194581938894 1.4802180860793479 1;
	setAttr ".pm[27]" -type "matrix" 0.99778886398022859 -0.041193897272659673 -0.052157892447198755 0
		 -0.041250044739539866 -0.99914885468031489 -5.2383011123202599e-14 0 -0.052113498501155792 0.0021515153970194821 -0.99863885076411163 0
		 1.5247892137638857 1.4280878870350271 -0.15818906625546916 1;
	setAttr ".pm[28]" -type "matrix" 0.55146716803094298 -0.59531909799528626 -0.58436216009082076 0
		 0.18483141226769609 -0.59589931064290136 0.78149943097512431 0 -0.81346254469585788 -0.53897976134303316 -0.21858523563943225 0
		 0.34660786863342058 0.33184191323535761 -1.7225088095631471 1;
	setAttr ".pm[29]" -type "matrix" 0.43247852844110091 -0.78347014219601219 -0.446247530777236 0
		 0.016862308610989852 -0.48781180705669058 0.87278594365651485 0 -0.90148654176628051 -0.38498594413750481 -0.19775701714686661 0
		 0.68344018798611017 0.055319914102758515 -1.6721152336484386 1;
	setAttr ".pm[30]" -type "matrix" 0.0022554669568005054 -0.00014975192740381045 -0.99999744521832001 0
		 -0.99780055773920817 0.066249055981891902 -0.0022604328861923848 0 0.066249225234198697 0.99780310690830587 2.9590587792560625e-16 0
		 0.94226554016471564 -0.062781841508607925 0.21743813129452583 1;
	setAttr ".pm[31]" -type "matrix" -0.013350758322473745 -0.00087893656994142552 -0.99991048835519292 0
		 -0.99775062933432612 -0.065686120190470182 0.013379659086803468 0 -0.065692000389475827 0.99783994762929229 -1.232737870116018e-16 0
		 0.56786214599764662 0.035281816434817856 0.20770911692970945 1;
	setAttr ".pm[32]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 0.18978345984901215 0.015292731874088965 0.21528362544683308 1;
	setAttr ".pm[33]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.22722886347059751 -0.10526655770819621 0.21530292529543407 1;
	setAttr ".pm[34]" -type "matrix" 3.1206043405778538e-16 -7.9209135374880809e-14 -1 0
		 -0.0013930756639796559 0.99999902966962628 -7.9196318730288993e-14 0 0.99999902966962628 0.0013930756639797324 1.5782060301636511e-16 0
		 -0.60631281165200357 -0.00091788483853666566 0.215302925295426 1;
	setAttr ".pm[35]" -type "matrix" -0.00010105259733121728 -8.0327824647432844e-06 -0.99999999486192337 0
		 -0.99685547158864629 -0.079241141382645722 0.00010137136193971992 0 -0.079241141789792927 0.99685547671056596 1.0198107278352319e-16 0
		 -0.015921531366467314 0.22526446895315411 0.21523776392495572 1;
	setAttr ".pm[36]" -type "matrix" 0.0022554669568004299 -0.00014975192802755828 -0.99999744521832035 0
		 0.99780055773920828 -0.066249055981890251 0.0022604328862336548 0 -0.066249225234198475 -0.99780310690830654 6.2200017272168214e-13 0
		 -0.94226571602569853 0.06278185367193026 -0.21743820639780065 1;
	setAttr ".pm[37]" -type "matrix" -0.013350758322473837 -0.00088768916550628228 -0.99991048062322097 0
		 0.99775062933432646 0.065686003070725738 -0.01338023406180442 0 0.065692000389476521 -0.99783994759106476 8.7344713705757555e-06 0
		 -0.56786188528643733 -0.035283621889183818 -0.20770888629017781 1;
	setAttr ".pm[38]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 -0.18978378855540295 -0.015292757530726382 -0.21528370011797163 1;
	setAttr ".pm[39]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.22722857608019675 0.10526664874358312 -0.21530299999967803 1;
	setAttr ".pm[40]" -type "matrix" 2.245214288981205e-16 3.0576918357659797e-12 -1 0
		 0.0013930756639799293 -0.99999902966962639 -3.0576751584222924e-12 0 -0.99999902966962684 -0.0013930756639801 -4.5285243148650493e-15 0
		 0.60631330964025831 0.0009178855077175889 -0.21530299999999705 1;
	setAttr ".pm[41]" -type "matrix" -0.00010105259732965646 -8.0327833421177989e-06 -0.99999999486192348 0
		 0.9968554715886464 0.079241141382647359 -0.00010137136200766162 0 0.079241141789794689 -0.99685547671056651 8.7454879391113195e-13 0
		 0.015921549419727878 -0.22526470836685364 -0.21523780051723371 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 40 ".ma";
	setAttr -s 42 ".dpf[0:41]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
		4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4;
	setAttr -s 40 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 42 ".ifcl";
	setAttr -s 42 ".ifcl";
createNode groupId -n "groupId898";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts7";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[0:789]";
createNode tweak -n "tweak3";
createNode objectSet -n "skinCluster3Set";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "skinCluster3GroupId";
	setAttr ".ihi" 0;
createNode groupParts -n "skinCluster3GroupParts";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode objectSet -n "tweakSet3";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "groupId900";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts9";
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
	setAttr -s 3 ".dsm";
	setAttr -k on ".mwc";
	setAttr -cb on ".an";
	setAttr -cb on ".il";
	setAttr -cb on ".vo";
	setAttr -cb on ".eo";
	setAttr -cb on ".fo";
	setAttr -cb on ".epo";
	setAttr ".ro" yes;
	setAttr -s 3 ".gn";
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
connectAttr "cRoot.s" "cSpine0.is";
connectAttr "cSpine0.s" "cSpine1.is";
connectAttr "cSpine1.s" "cSpine2.is";
connectAttr "cSpine2.s" "cSpine3.is";
connectAttr "cSpine3.s" "cSpine4.is";
connectAttr "cSpine4.s" "cNeck0.is";
connectAttr "cNeck0.s" "cNeck1.is";
connectAttr "cNeck1.s" "cNeck2.is";
connectAttr "cNeck2.s" "cHead.is";
connectAttr "cNeck2.s" "lEye.is";
connectAttr "cNeck2.s" "cJaw.is";
connectAttr "cJaw.s" "cJawEnd.is";
connectAttr "cNeck2.s" "rEye.is";
connectAttr "cSpine4.s" "lCollar.is";
connectAttr "lCollar.s" "lShoulder.is";
connectAttr "lShoulder.s" "lElbow.is";
connectAttr "lElbow.s" "lWrist.is";
connectAttr "lWrist.s" "lFinger.is";
connectAttr "lFinger.s" "lFingerEnd.is";
connectAttr "lWrist.s" "lThumb.is";
connectAttr "lThumb.s" "lThumbEnd.is";
connectAttr "lElbow.s" "lWristStretch.is";
connectAttr "lShoulder.s" "lElbowStretch.is";
connectAttr "cSpine4.s" "rCollar.is";
connectAttr "rCollar.s" "rShoulder.is";
connectAttr "rShoulder.s" "rElbow.is";
connectAttr "rElbow.s" "rWrist.is";
connectAttr "rWrist.s" "rFinger.is";
connectAttr "rFinger.s" "rFingerEnd.is";
connectAttr "rWrist.s" "rThumb.is";
connectAttr "rThumb.s" "rThumbEnd.is";
connectAttr "rElbow.s" "rWristStretch.is";
connectAttr "rShoulder.s" "rElbowStretch.is";
connectAttr "cSpine0.s" "lHip.is";
connectAttr "lHip.s" "lKnee.is";
connectAttr "lKnee.s" "lAnkle.is";
connectAttr "lAnkle.s" "lBall.is";
connectAttr "lBall.s" "lToe.is";
connectAttr "lAnkle.s" "lHeel.is";
connectAttr "lKnee.s" "lAnkleStretch.is";
connectAttr "lHip.s" "lKneeStretch.is";
connectAttr "cSpine0.s" "rHip.is";
connectAttr "rHip.s" "rKnee.is";
connectAttr "rKnee.s" "rAnkle.is";
connectAttr "rAnkle.s" "rBall.is";
connectAttr "rBall.s" "rToe.is";
connectAttr "rAnkle.s" "rHeel.is";
connectAttr "rKnee.s" "rAnkleStretch.is";
connectAttr "rHip.s" "rKneeStretch.is";
connectAttr "groupId892.id" "cBodyShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cBodyShape.iog.og[0].gco";
connectAttr "skinCluster1GroupId.id" "cBodyShape.iog.og[3].gid";
connectAttr "skinCluster1Set.mwc" "cBodyShape.iog.og[3].gco";
connectAttr "groupId894.id" "cBodyShape.iog.og[4].gid";
connectAttr "tweakSet1.mwc" "cBodyShape.iog.og[4].gco";
connectAttr "skinCluster1.og[0]" "cBodyShape.i";
connectAttr "tweak1.vl[0].vt[0]" "cBodyShape.twl";
connectAttr "groupId895.id" "cEyesShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cEyesShape.iog.og[0].gco";
connectAttr "skinCluster2GroupId.id" "cEyesShape.iog.og[1].gid";
connectAttr "skinCluster2Set.mwc" "cEyesShape.iog.og[1].gco";
connectAttr "groupId897.id" "cEyesShape.iog.og[2].gid";
connectAttr "tweakSet2.mwc" "cEyesShape.iog.og[2].gco";
connectAttr "skinCluster2.og[0]" "cEyesShape.i";
connectAttr "tweak2.vl[0].vt[0]" "cEyesShape.twl";
connectAttr "groupId898.id" "cJointsShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cJointsShape.iog.og[0].gco";
connectAttr "skinCluster3GroupId.id" "cJointsShape.iog.og[1].gid";
connectAttr "skinCluster3Set.mwc" "cJointsShape.iog.og[1].gco";
connectAttr "groupId900.id" "cJointsShape.iog.og[2].gid";
connectAttr "tweakSet3.mwc" "cJointsShape.iog.og[2].gco";
connectAttr "skinCluster3.og[0]" "cJointsShape.i";
connectAttr "tweak3.vl[0].vt[0]" "cJointsShape.twl";
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr "skinCluster1GroupParts.og" "skinCluster1.ip[0].ig";
connectAttr "skinCluster1GroupId.id" "skinCluster1.ip[0].gi";
connectAttr "bindPose1.msg" "skinCluster1.bp";
connectAttr "cRoot.wm" "skinCluster1.ma[0]";
connectAttr "cSpine0.wm" "skinCluster1.ma[1]";
connectAttr "cSpine1.wm" "skinCluster1.ma[2]";
connectAttr "cSpine2.wm" "skinCluster1.ma[3]";
connectAttr "cSpine3.wm" "skinCluster1.ma[4]";
connectAttr "cSpine4.wm" "skinCluster1.ma[5]";
connectAttr "cNeck0.wm" "skinCluster1.ma[6]";
connectAttr "cNeck1.wm" "skinCluster1.ma[7]";
connectAttr "cNeck2.wm" "skinCluster1.ma[8]";
connectAttr "cHead.wm" "skinCluster1.ma[9]";
connectAttr "lEye.wm" "skinCluster1.ma[10]";
connectAttr "cJaw.wm" "skinCluster1.ma[11]";
connectAttr "cJawEnd.wm" "skinCluster1.ma[12]";
connectAttr "rEye.wm" "skinCluster1.ma[13]";
connectAttr "lCollar.wm" "skinCluster1.ma[14]";
connectAttr "lShoulder.wm" "skinCluster1.ma[15]";
connectAttr "lElbow.wm" "skinCluster1.ma[16]";
connectAttr "lWrist.wm" "skinCluster1.ma[17]";
connectAttr "lFinger.wm" "skinCluster1.ma[18]";
connectAttr "lFingerEnd.wm" "skinCluster1.ma[19]";
connectAttr "lThumb.wm" "skinCluster1.ma[20]";
connectAttr "lThumbEnd.wm" "skinCluster1.ma[21]";
connectAttr "rCollar.wm" "skinCluster1.ma[22]";
connectAttr "rShoulder.wm" "skinCluster1.ma[23]";
connectAttr "rElbow.wm" "skinCluster1.ma[24]";
connectAttr "rWrist.wm" "skinCluster1.ma[25]";
connectAttr "rFinger.wm" "skinCluster1.ma[26]";
connectAttr "rFingerEnd.wm" "skinCluster1.ma[27]";
connectAttr "rThumb.wm" "skinCluster1.ma[28]";
connectAttr "rThumbEnd.wm" "skinCluster1.ma[29]";
connectAttr "lHip.wm" "skinCluster1.ma[30]";
connectAttr "lKnee.wm" "skinCluster1.ma[31]";
connectAttr "lAnkle.wm" "skinCluster1.ma[32]";
connectAttr "lBall.wm" "skinCluster1.ma[33]";
connectAttr "lToe.wm" "skinCluster1.ma[34]";
connectAttr "lHeel.wm" "skinCluster1.ma[35]";
connectAttr "rHip.wm" "skinCluster1.ma[36]";
connectAttr "rKnee.wm" "skinCluster1.ma[37]";
connectAttr "rAnkle.wm" "skinCluster1.ma[38]";
connectAttr "rBall.wm" "skinCluster1.ma[39]";
connectAttr "rToe.wm" "skinCluster1.ma[40]";
connectAttr "rHeel.wm" "skinCluster1.ma[41]";
connectAttr "lWristStretch.wm" "skinCluster1.ma[42]";
connectAttr "lElbowStretch.wm" "skinCluster1.ma[43]";
connectAttr "rElbowStretch.wm" "skinCluster1.ma[44]";
connectAttr "rWristStretch.wm" "skinCluster1.ma[45]";
connectAttr "lKneeStretch.wm" "skinCluster1.ma[46]";
connectAttr "lAnkleStretch.wm" "skinCluster1.ma[47]";
connectAttr "rAnkleStretch.wm" "skinCluster1.ma[48]";
connectAttr "rKneeStretch.wm" "skinCluster1.ma[49]";
connectAttr "cRoot.liw" "skinCluster1.lw[0]";
connectAttr "cSpine0.liw" "skinCluster1.lw[1]";
connectAttr "cSpine1.liw" "skinCluster1.lw[2]";
connectAttr "cSpine2.liw" "skinCluster1.lw[3]";
connectAttr "cSpine3.liw" "skinCluster1.lw[4]";
connectAttr "cSpine4.liw" "skinCluster1.lw[5]";
connectAttr "cNeck0.liw" "skinCluster1.lw[6]";
connectAttr "cNeck1.liw" "skinCluster1.lw[7]";
connectAttr "cNeck2.liw" "skinCluster1.lw[8]";
connectAttr "cHead.liw" "skinCluster1.lw[9]";
connectAttr "lEye.liw" "skinCluster1.lw[10]";
connectAttr "cJaw.liw" "skinCluster1.lw[11]";
connectAttr "cJawEnd.liw" "skinCluster1.lw[12]";
connectAttr "rEye.liw" "skinCluster1.lw[13]";
connectAttr "lCollar.liw" "skinCluster1.lw[14]";
connectAttr "lShoulder.liw" "skinCluster1.lw[15]";
connectAttr "lElbow.liw" "skinCluster1.lw[16]";
connectAttr "lWrist.liw" "skinCluster1.lw[17]";
connectAttr "lFinger.liw" "skinCluster1.lw[18]";
connectAttr "lFingerEnd.liw" "skinCluster1.lw[19]";
connectAttr "lThumb.liw" "skinCluster1.lw[20]";
connectAttr "lThumbEnd.liw" "skinCluster1.lw[21]";
connectAttr "rCollar.liw" "skinCluster1.lw[22]";
connectAttr "rShoulder.liw" "skinCluster1.lw[23]";
connectAttr "rElbow.liw" "skinCluster1.lw[24]";
connectAttr "rWrist.liw" "skinCluster1.lw[25]";
connectAttr "rFinger.liw" "skinCluster1.lw[26]";
connectAttr "rFingerEnd.liw" "skinCluster1.lw[27]";
connectAttr "rThumb.liw" "skinCluster1.lw[28]";
connectAttr "rThumbEnd.liw" "skinCluster1.lw[29]";
connectAttr "lHip.liw" "skinCluster1.lw[30]";
connectAttr "lKnee.liw" "skinCluster1.lw[31]";
connectAttr "lAnkle.liw" "skinCluster1.lw[32]";
connectAttr "lBall.liw" "skinCluster1.lw[33]";
connectAttr "lToe.liw" "skinCluster1.lw[34]";
connectAttr "lHeel.liw" "skinCluster1.lw[35]";
connectAttr "rHip.liw" "skinCluster1.lw[36]";
connectAttr "rKnee.liw" "skinCluster1.lw[37]";
connectAttr "rAnkle.liw" "skinCluster1.lw[38]";
connectAttr "rBall.liw" "skinCluster1.lw[39]";
connectAttr "rToe.liw" "skinCluster1.lw[40]";
connectAttr "rHeel.liw" "skinCluster1.lw[41]";
connectAttr "lWristStretch.liw" "skinCluster1.lw[42]";
connectAttr "lElbowStretch.liw" "skinCluster1.lw[43]";
connectAttr "rElbowStretch.liw" "skinCluster1.lw[44]";
connectAttr "rWristStretch.liw" "skinCluster1.lw[45]";
connectAttr "lKneeStretch.liw" "skinCluster1.lw[46]";
connectAttr "lAnkleStretch.liw" "skinCluster1.lw[47]";
connectAttr "rAnkleStretch.liw" "skinCluster1.lw[48]";
connectAttr "rKneeStretch.liw" "skinCluster1.lw[49]";
connectAttr "cRoot.obcc" "skinCluster1.ifcl[0]";
connectAttr "cSpine0.obcc" "skinCluster1.ifcl[1]";
connectAttr "cSpine1.obcc" "skinCluster1.ifcl[2]";
connectAttr "cSpine2.obcc" "skinCluster1.ifcl[3]";
connectAttr "cSpine3.obcc" "skinCluster1.ifcl[4]";
connectAttr "cSpine4.obcc" "skinCluster1.ifcl[5]";
connectAttr "cNeck0.obcc" "skinCluster1.ifcl[6]";
connectAttr "cNeck1.obcc" "skinCluster1.ifcl[7]";
connectAttr "cNeck2.obcc" "skinCluster1.ifcl[8]";
connectAttr "cHead.obcc" "skinCluster1.ifcl[9]";
connectAttr "lEye.obcc" "skinCluster1.ifcl[10]";
connectAttr "cJaw.obcc" "skinCluster1.ifcl[11]";
connectAttr "cJawEnd.obcc" "skinCluster1.ifcl[12]";
connectAttr "rEye.obcc" "skinCluster1.ifcl[13]";
connectAttr "lCollar.obcc" "skinCluster1.ifcl[14]";
connectAttr "lShoulder.obcc" "skinCluster1.ifcl[15]";
connectAttr "lElbow.obcc" "skinCluster1.ifcl[16]";
connectAttr "lWrist.obcc" "skinCluster1.ifcl[17]";
connectAttr "lFinger.obcc" "skinCluster1.ifcl[18]";
connectAttr "lFingerEnd.obcc" "skinCluster1.ifcl[19]";
connectAttr "lThumb.obcc" "skinCluster1.ifcl[20]";
connectAttr "lThumbEnd.obcc" "skinCluster1.ifcl[21]";
connectAttr "rCollar.obcc" "skinCluster1.ifcl[22]";
connectAttr "rShoulder.obcc" "skinCluster1.ifcl[23]";
connectAttr "rElbow.obcc" "skinCluster1.ifcl[24]";
connectAttr "rWrist.obcc" "skinCluster1.ifcl[25]";
connectAttr "rFinger.obcc" "skinCluster1.ifcl[26]";
connectAttr "rFingerEnd.obcc" "skinCluster1.ifcl[27]";
connectAttr "rThumb.obcc" "skinCluster1.ifcl[28]";
connectAttr "rThumbEnd.obcc" "skinCluster1.ifcl[29]";
connectAttr "lHip.obcc" "skinCluster1.ifcl[30]";
connectAttr "lKnee.obcc" "skinCluster1.ifcl[31]";
connectAttr "lAnkle.obcc" "skinCluster1.ifcl[32]";
connectAttr "lBall.obcc" "skinCluster1.ifcl[33]";
connectAttr "lToe.obcc" "skinCluster1.ifcl[34]";
connectAttr "lHeel.obcc" "skinCluster1.ifcl[35]";
connectAttr "rHip.obcc" "skinCluster1.ifcl[36]";
connectAttr "rKnee.obcc" "skinCluster1.ifcl[37]";
connectAttr "rAnkle.obcc" "skinCluster1.ifcl[38]";
connectAttr "rBall.obcc" "skinCluster1.ifcl[39]";
connectAttr "rToe.obcc" "skinCluster1.ifcl[40]";
connectAttr "rHeel.obcc" "skinCluster1.ifcl[41]";
connectAttr "lWristStretch.obcc" "skinCluster1.ifcl[42]";
connectAttr "lElbowStretch.obcc" "skinCluster1.ifcl[43]";
connectAttr "rElbowStretch.obcc" "skinCluster1.ifcl[44]";
connectAttr "rWristStretch.obcc" "skinCluster1.ifcl[45]";
connectAttr "lKneeStretch.obcc" "skinCluster1.ifcl[46]";
connectAttr "lAnkleStretch.obcc" "skinCluster1.ifcl[47]";
connectAttr "rAnkleStretch.obcc" "skinCluster1.ifcl[48]";
connectAttr "rKneeStretch.obcc" "skinCluster1.ifcl[49]";
connectAttr "rWristStretch.msg" "skinCluster1.ptt";
connectAttr "cBodyShapeOrig.w" "groupParts1.ig";
connectAttr "groupId892.id" "groupParts1.gi";
connectAttr "groupParts3.og" "tweak1.ip[0].ig";
connectAttr "groupId894.id" "tweak1.ip[0].gi";
connectAttr "skinCluster1GroupId.msg" "skinCluster1Set.gn" -na;
connectAttr "cBodyShape.iog.og[3]" "skinCluster1Set.dsm" -na;
connectAttr "skinCluster1.msg" "skinCluster1Set.ub[0]";
connectAttr "tweak1.og[0]" "skinCluster1GroupParts.ig";
connectAttr "skinCluster1GroupId.id" "skinCluster1GroupParts.gi";
connectAttr "groupId894.msg" "tweakSet1.gn" -na;
connectAttr "cBodyShape.iog.og[4]" "tweakSet1.dsm" -na;
connectAttr "tweak1.msg" "tweakSet1.ub[0]";
connectAttr "groupParts1.og" "groupParts3.ig";
connectAttr "groupId894.id" "groupParts3.gi";
connectAttr "cRoot.msg" "bindPose1.m[0]";
connectAttr "cSpine0.msg" "bindPose1.m[1]";
connectAttr "cSpine1.msg" "bindPose1.m[2]";
connectAttr "cSpine2.msg" "bindPose1.m[3]";
connectAttr "cSpine3.msg" "bindPose1.m[4]";
connectAttr "cSpine4.msg" "bindPose1.m[5]";
connectAttr "cNeck0.msg" "bindPose1.m[6]";
connectAttr "cNeck1.msg" "bindPose1.m[7]";
connectAttr "cNeck2.msg" "bindPose1.m[8]";
connectAttr "cHead.msg" "bindPose1.m[9]";
connectAttr "lEye.msg" "bindPose1.m[10]";
connectAttr "cJaw.msg" "bindPose1.m[11]";
connectAttr "cJawEnd.msg" "bindPose1.m[12]";
connectAttr "rEye.msg" "bindPose1.m[13]";
connectAttr "lCollar.msg" "bindPose1.m[14]";
connectAttr "lShoulder.msg" "bindPose1.m[15]";
connectAttr "lElbow.msg" "bindPose1.m[16]";
connectAttr "lWrist.msg" "bindPose1.m[17]";
connectAttr "lFinger.msg" "bindPose1.m[18]";
connectAttr "lFingerEnd.msg" "bindPose1.m[19]";
connectAttr "lThumb.msg" "bindPose1.m[20]";
connectAttr "lThumbEnd.msg" "bindPose1.m[21]";
connectAttr "rCollar.msg" "bindPose1.m[22]";
connectAttr "rShoulder.msg" "bindPose1.m[23]";
connectAttr "rElbow.msg" "bindPose1.m[24]";
connectAttr "rWrist.msg" "bindPose1.m[25]";
connectAttr "rFinger.msg" "bindPose1.m[26]";
connectAttr "rFingerEnd.msg" "bindPose1.m[27]";
connectAttr "rThumb.msg" "bindPose1.m[28]";
connectAttr "rThumbEnd.msg" "bindPose1.m[29]";
connectAttr "lHip.msg" "bindPose1.m[30]";
connectAttr "lKnee.msg" "bindPose1.m[31]";
connectAttr "lAnkle.msg" "bindPose1.m[32]";
connectAttr "lBall.msg" "bindPose1.m[33]";
connectAttr "lToe.msg" "bindPose1.m[34]";
connectAttr "lHeel.msg" "bindPose1.m[35]";
connectAttr "rHip.msg" "bindPose1.m[36]";
connectAttr "rKnee.msg" "bindPose1.m[37]";
connectAttr "rAnkle.msg" "bindPose1.m[38]";
connectAttr "rBall.msg" "bindPose1.m[39]";
connectAttr "rToe.msg" "bindPose1.m[40]";
connectAttr "rHeel.msg" "bindPose1.m[41]";
connectAttr "lWristStretch.msg" "bindPose1.m[42]";
connectAttr "lElbowStretch.msg" "bindPose1.m[43]";
connectAttr "rElbowStretch.msg" "bindPose1.m[44]";
connectAttr "rWristStretch.msg" "bindPose1.m[45]";
connectAttr "lKneeStretch.msg" "bindPose1.m[46]";
connectAttr "lAnkleStretch.msg" "bindPose1.m[47]";
connectAttr "rAnkleStretch.msg" "bindPose1.m[48]";
connectAttr "rKneeStretch.msg" "bindPose1.m[49]";
connectAttr "bindPose1.w" "bindPose1.p[0]";
connectAttr "bindPose1.m[0]" "bindPose1.p[1]";
connectAttr "bindPose1.m[1]" "bindPose1.p[2]";
connectAttr "bindPose1.m[2]" "bindPose1.p[3]";
connectAttr "bindPose1.m[3]" "bindPose1.p[4]";
connectAttr "bindPose1.m[4]" "bindPose1.p[5]";
connectAttr "bindPose1.m[5]" "bindPose1.p[6]";
connectAttr "bindPose1.m[6]" "bindPose1.p[7]";
connectAttr "bindPose1.m[7]" "bindPose1.p[8]";
connectAttr "bindPose1.m[8]" "bindPose1.p[9]";
connectAttr "bindPose1.m[8]" "bindPose1.p[10]";
connectAttr "bindPose1.m[8]" "bindPose1.p[11]";
connectAttr "bindPose1.m[11]" "bindPose1.p[12]";
connectAttr "bindPose1.m[8]" "bindPose1.p[13]";
connectAttr "bindPose1.m[5]" "bindPose1.p[14]";
connectAttr "bindPose1.m[14]" "bindPose1.p[15]";
connectAttr "bindPose1.m[15]" "bindPose1.p[16]";
connectAttr "bindPose1.m[16]" "bindPose1.p[17]";
connectAttr "bindPose1.m[17]" "bindPose1.p[18]";
connectAttr "bindPose1.m[18]" "bindPose1.p[19]";
connectAttr "bindPose1.m[17]" "bindPose1.p[20]";
connectAttr "bindPose1.m[20]" "bindPose1.p[21]";
connectAttr "bindPose1.m[5]" "bindPose1.p[22]";
connectAttr "bindPose1.m[22]" "bindPose1.p[23]";
connectAttr "bindPose1.m[23]" "bindPose1.p[24]";
connectAttr "bindPose1.m[24]" "bindPose1.p[25]";
connectAttr "bindPose1.m[25]" "bindPose1.p[26]";
connectAttr "bindPose1.m[26]" "bindPose1.p[27]";
connectAttr "bindPose1.m[25]" "bindPose1.p[28]";
connectAttr "bindPose1.m[28]" "bindPose1.p[29]";
connectAttr "bindPose1.m[1]" "bindPose1.p[30]";
connectAttr "bindPose1.m[30]" "bindPose1.p[31]";
connectAttr "bindPose1.m[31]" "bindPose1.p[32]";
connectAttr "bindPose1.m[32]" "bindPose1.p[33]";
connectAttr "bindPose1.m[33]" "bindPose1.p[34]";
connectAttr "bindPose1.m[32]" "bindPose1.p[35]";
connectAttr "bindPose1.m[1]" "bindPose1.p[36]";
connectAttr "bindPose1.m[36]" "bindPose1.p[37]";
connectAttr "bindPose1.m[37]" "bindPose1.p[38]";
connectAttr "bindPose1.m[38]" "bindPose1.p[39]";
connectAttr "bindPose1.m[39]" "bindPose1.p[40]";
connectAttr "bindPose1.m[38]" "bindPose1.p[41]";
connectAttr "bindPose1.m[16]" "bindPose1.p[42]";
connectAttr "bindPose1.m[15]" "bindPose1.p[43]";
connectAttr "bindPose1.m[23]" "bindPose1.p[44]";
connectAttr "bindPose1.m[24]" "bindPose1.p[45]";
connectAttr "bindPose1.m[30]" "bindPose1.p[46]";
connectAttr "bindPose1.m[31]" "bindPose1.p[47]";
connectAttr "bindPose1.m[37]" "bindPose1.p[48]";
connectAttr "bindPose1.m[36]" "bindPose1.p[49]";
connectAttr "cRoot.bps" "bindPose1.wm[0]";
connectAttr "cSpine0.bps" "bindPose1.wm[1]";
connectAttr "cSpine1.bps" "bindPose1.wm[2]";
connectAttr "cSpine2.bps" "bindPose1.wm[3]";
connectAttr "cSpine3.bps" "bindPose1.wm[4]";
connectAttr "cSpine4.bps" "bindPose1.wm[5]";
connectAttr "cNeck0.bps" "bindPose1.wm[6]";
connectAttr "cNeck1.bps" "bindPose1.wm[7]";
connectAttr "cNeck2.bps" "bindPose1.wm[8]";
connectAttr "cHead.bps" "bindPose1.wm[9]";
connectAttr "lEye.bps" "bindPose1.wm[10]";
connectAttr "cJaw.bps" "bindPose1.wm[11]";
connectAttr "cJawEnd.bps" "bindPose1.wm[12]";
connectAttr "rEye.bps" "bindPose1.wm[13]";
connectAttr "lCollar.bps" "bindPose1.wm[14]";
connectAttr "lShoulder.bps" "bindPose1.wm[15]";
connectAttr "lElbow.bps" "bindPose1.wm[16]";
connectAttr "lWrist.bps" "bindPose1.wm[17]";
connectAttr "lFinger.bps" "bindPose1.wm[18]";
connectAttr "lFingerEnd.bps" "bindPose1.wm[19]";
connectAttr "lThumb.bps" "bindPose1.wm[20]";
connectAttr "lThumbEnd.bps" "bindPose1.wm[21]";
connectAttr "rCollar.bps" "bindPose1.wm[22]";
connectAttr "rShoulder.bps" "bindPose1.wm[23]";
connectAttr "rElbow.bps" "bindPose1.wm[24]";
connectAttr "rWrist.bps" "bindPose1.wm[25]";
connectAttr "rFinger.bps" "bindPose1.wm[26]";
connectAttr "rFingerEnd.bps" "bindPose1.wm[27]";
connectAttr "rThumb.bps" "bindPose1.wm[28]";
connectAttr "rThumbEnd.bps" "bindPose1.wm[29]";
connectAttr "lHip.bps" "bindPose1.wm[30]";
connectAttr "lKnee.bps" "bindPose1.wm[31]";
connectAttr "lAnkle.bps" "bindPose1.wm[32]";
connectAttr "lBall.bps" "bindPose1.wm[33]";
connectAttr "lToe.bps" "bindPose1.wm[34]";
connectAttr "lHeel.bps" "bindPose1.wm[35]";
connectAttr "rHip.bps" "bindPose1.wm[36]";
connectAttr "rKnee.bps" "bindPose1.wm[37]";
connectAttr "rAnkle.bps" "bindPose1.wm[38]";
connectAttr "rBall.bps" "bindPose1.wm[39]";
connectAttr "rToe.bps" "bindPose1.wm[40]";
connectAttr "rHeel.bps" "bindPose1.wm[41]";
connectAttr "lWristStretch.bps" "bindPose1.wm[42]";
connectAttr "lElbowStretch.bps" "bindPose1.wm[43]";
connectAttr "rElbowStretch.bps" "bindPose1.wm[44]";
connectAttr "rWristStretch.bps" "bindPose1.wm[45]";
connectAttr "lKneeStretch.bps" "bindPose1.wm[46]";
connectAttr "lAnkleStretch.bps" "bindPose1.wm[47]";
connectAttr "rAnkleStretch.bps" "bindPose1.wm[48]";
connectAttr "rKneeStretch.bps" "bindPose1.wm[49]";
connectAttr "skinCluster2GroupParts.og" "skinCluster2.ip[0].ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2.ip[0].gi";
connectAttr "cNeck2.wm" "skinCluster2.ma[8]";
connectAttr "lEye.wm" "skinCluster2.ma[10]";
connectAttr "rEye.wm" "skinCluster2.ma[13]";
connectAttr "cNeck2.liw" "skinCluster2.lw[8]";
connectAttr "lEye.liw" "skinCluster2.lw[10]";
connectAttr "rEye.liw" "skinCluster2.lw[13]";
connectAttr "cRoot.obcc" "skinCluster2.ifcl[0]";
connectAttr "cSpine0.obcc" "skinCluster2.ifcl[1]";
connectAttr "cSpine1.obcc" "skinCluster2.ifcl[2]";
connectAttr "cSpine2.obcc" "skinCluster2.ifcl[3]";
connectAttr "cSpine3.obcc" "skinCluster2.ifcl[4]";
connectAttr "cSpine4.obcc" "skinCluster2.ifcl[5]";
connectAttr "cNeck0.obcc" "skinCluster2.ifcl[6]";
connectAttr "cNeck1.obcc" "skinCluster2.ifcl[7]";
connectAttr "cNeck2.obcc" "skinCluster2.ifcl[8]";
connectAttr "cHead.obcc" "skinCluster2.ifcl[9]";
connectAttr "lEye.obcc" "skinCluster2.ifcl[10]";
connectAttr "cJaw.obcc" "skinCluster2.ifcl[11]";
connectAttr "cJawEnd.obcc" "skinCluster2.ifcl[12]";
connectAttr "rEye.obcc" "skinCluster2.ifcl[13]";
connectAttr "lCollar.obcc" "skinCluster2.ifcl[14]";
connectAttr "lShoulder.obcc" "skinCluster2.ifcl[15]";
connectAttr "lElbow.obcc" "skinCluster2.ifcl[16]";
connectAttr "lWrist.obcc" "skinCluster2.ifcl[17]";
connectAttr "lFinger.obcc" "skinCluster2.ifcl[18]";
connectAttr "lFingerEnd.obcc" "skinCluster2.ifcl[19]";
connectAttr "lThumb.obcc" "skinCluster2.ifcl[20]";
connectAttr "lThumbEnd.obcc" "skinCluster2.ifcl[21]";
connectAttr "rCollar.obcc" "skinCluster2.ifcl[22]";
connectAttr "rShoulder.obcc" "skinCluster2.ifcl[23]";
connectAttr "rElbow.obcc" "skinCluster2.ifcl[24]";
connectAttr "rWrist.obcc" "skinCluster2.ifcl[25]";
connectAttr "rFinger.obcc" "skinCluster2.ifcl[26]";
connectAttr "rFingerEnd.obcc" "skinCluster2.ifcl[27]";
connectAttr "rThumb.obcc" "skinCluster2.ifcl[28]";
connectAttr "rThumbEnd.obcc" "skinCluster2.ifcl[29]";
connectAttr "lHip.obcc" "skinCluster2.ifcl[30]";
connectAttr "lKnee.obcc" "skinCluster2.ifcl[31]";
connectAttr "lAnkle.obcc" "skinCluster2.ifcl[32]";
connectAttr "lBall.obcc" "skinCluster2.ifcl[33]";
connectAttr "lToe.obcc" "skinCluster2.ifcl[34]";
connectAttr "lHeel.obcc" "skinCluster2.ifcl[35]";
connectAttr "rHip.obcc" "skinCluster2.ifcl[36]";
connectAttr "rKnee.obcc" "skinCluster2.ifcl[37]";
connectAttr "rAnkle.obcc" "skinCluster2.ifcl[38]";
connectAttr "rBall.obcc" "skinCluster2.ifcl[39]";
connectAttr "rToe.obcc" "skinCluster2.ifcl[40]";
connectAttr "rHeel.obcc" "skinCluster2.ifcl[41]";
connectAttr "bindPose1.msg" "skinCluster2.bp";
connectAttr "cNeck2.msg" "skinCluster2.ptt";
connectAttr "cEyesShapeOrig.w" "groupParts4.ig";
connectAttr "groupId895.id" "groupParts4.gi";
connectAttr "groupParts6.og" "tweak2.ip[0].ig";
connectAttr "groupId897.id" "tweak2.ip[0].gi";
connectAttr "skinCluster2GroupId.msg" "skinCluster2Set.gn" -na;
connectAttr "cEyesShape.iog.og[1]" "skinCluster2Set.dsm" -na;
connectAttr "skinCluster2.msg" "skinCluster2Set.ub[0]";
connectAttr "tweak2.og[0]" "skinCluster2GroupParts.ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2GroupParts.gi";
connectAttr "groupId897.msg" "tweakSet2.gn" -na;
connectAttr "cEyesShape.iog.og[2]" "tweakSet2.dsm" -na;
connectAttr "tweak2.msg" "tweakSet2.ub[0]";
connectAttr "groupParts4.og" "groupParts6.ig";
connectAttr "groupId897.id" "groupParts6.gi";
connectAttr "skinCluster3GroupParts.og" "skinCluster3.ip[0].ig";
connectAttr "skinCluster3GroupId.id" "skinCluster3.ip[0].gi";
connectAttr "cRoot.wm" "skinCluster3.ma[0]";
connectAttr "cSpine0.wm" "skinCluster3.ma[1]";
connectAttr "cSpine1.wm" "skinCluster3.ma[2]";
connectAttr "cSpine2.wm" "skinCluster3.ma[3]";
connectAttr "cSpine3.wm" "skinCluster3.ma[4]";
connectAttr "cSpine4.wm" "skinCluster3.ma[5]";
connectAttr "cNeck1.wm" "skinCluster3.ma[7]";
connectAttr "cNeck2.wm" "skinCluster3.ma[8]";
connectAttr "cHead.wm" "skinCluster3.ma[9]";
connectAttr "lEye.wm" "skinCluster3.ma[10]";
connectAttr "cJaw.wm" "skinCluster3.ma[11]";
connectAttr "rEye.wm" "skinCluster3.ma[13]";
connectAttr "lCollar.wm" "skinCluster3.ma[14]";
connectAttr "lShoulder.wm" "skinCluster3.ma[15]";
connectAttr "lElbow.wm" "skinCluster3.ma[16]";
connectAttr "lWrist.wm" "skinCluster3.ma[17]";
connectAttr "lFinger.wm" "skinCluster3.ma[18]";
connectAttr "lFingerEnd.wm" "skinCluster3.ma[19]";
connectAttr "lThumb.wm" "skinCluster3.ma[20]";
connectAttr "lThumbEnd.wm" "skinCluster3.ma[21]";
connectAttr "rCollar.wm" "skinCluster3.ma[22]";
connectAttr "rShoulder.wm" "skinCluster3.ma[23]";
connectAttr "rElbow.wm" "skinCluster3.ma[24]";
connectAttr "rWrist.wm" "skinCluster3.ma[25]";
connectAttr "rFinger.wm" "skinCluster3.ma[26]";
connectAttr "rFingerEnd.wm" "skinCluster3.ma[27]";
connectAttr "rThumb.wm" "skinCluster3.ma[28]";
connectAttr "rThumbEnd.wm" "skinCluster3.ma[29]";
connectAttr "lHip.wm" "skinCluster3.ma[30]";
connectAttr "lKnee.wm" "skinCluster3.ma[31]";
connectAttr "lAnkle.wm" "skinCluster3.ma[32]";
connectAttr "lBall.wm" "skinCluster3.ma[33]";
connectAttr "lToe.wm" "skinCluster3.ma[34]";
connectAttr "lHeel.wm" "skinCluster3.ma[35]";
connectAttr "rHip.wm" "skinCluster3.ma[36]";
connectAttr "rKnee.wm" "skinCluster3.ma[37]";
connectAttr "rAnkle.wm" "skinCluster3.ma[38]";
connectAttr "rBall.wm" "skinCluster3.ma[39]";
connectAttr "rToe.wm" "skinCluster3.ma[40]";
connectAttr "rHeel.wm" "skinCluster3.ma[41]";
connectAttr "cRoot.liw" "skinCluster3.lw[0]";
connectAttr "cSpine0.liw" "skinCluster3.lw[1]";
connectAttr "cSpine1.liw" "skinCluster3.lw[2]";
connectAttr "cSpine2.liw" "skinCluster3.lw[3]";
connectAttr "cSpine3.liw" "skinCluster3.lw[4]";
connectAttr "cSpine4.liw" "skinCluster3.lw[5]";
connectAttr "cNeck1.liw" "skinCluster3.lw[7]";
connectAttr "cNeck2.liw" "skinCluster3.lw[8]";
connectAttr "cHead.liw" "skinCluster3.lw[9]";
connectAttr "lEye.liw" "skinCluster3.lw[10]";
connectAttr "cJaw.liw" "skinCluster3.lw[11]";
connectAttr "rEye.liw" "skinCluster3.lw[13]";
connectAttr "lCollar.liw" "skinCluster3.lw[14]";
connectAttr "lShoulder.liw" "skinCluster3.lw[15]";
connectAttr "lElbow.liw" "skinCluster3.lw[16]";
connectAttr "lWrist.liw" "skinCluster3.lw[17]";
connectAttr "lFinger.liw" "skinCluster3.lw[18]";
connectAttr "lFingerEnd.liw" "skinCluster3.lw[19]";
connectAttr "lThumb.liw" "skinCluster3.lw[20]";
connectAttr "lThumbEnd.liw" "skinCluster3.lw[21]";
connectAttr "rCollar.liw" "skinCluster3.lw[22]";
connectAttr "rShoulder.liw" "skinCluster3.lw[23]";
connectAttr "rElbow.liw" "skinCluster3.lw[24]";
connectAttr "rWrist.liw" "skinCluster3.lw[25]";
connectAttr "rFinger.liw" "skinCluster3.lw[26]";
connectAttr "rFingerEnd.liw" "skinCluster3.lw[27]";
connectAttr "rThumb.liw" "skinCluster3.lw[28]";
connectAttr "rThumbEnd.liw" "skinCluster3.lw[29]";
connectAttr "lHip.liw" "skinCluster3.lw[30]";
connectAttr "lKnee.liw" "skinCluster3.lw[31]";
connectAttr "lAnkle.liw" "skinCluster3.lw[32]";
connectAttr "lBall.liw" "skinCluster3.lw[33]";
connectAttr "lToe.liw" "skinCluster3.lw[34]";
connectAttr "lHeel.liw" "skinCluster3.lw[35]";
connectAttr "rHip.liw" "skinCluster3.lw[36]";
connectAttr "rKnee.liw" "skinCluster3.lw[37]";
connectAttr "rAnkle.liw" "skinCluster3.lw[38]";
connectAttr "rBall.liw" "skinCluster3.lw[39]";
connectAttr "rToe.liw" "skinCluster3.lw[40]";
connectAttr "rHeel.liw" "skinCluster3.lw[41]";
connectAttr "cRoot.obcc" "skinCluster3.ifcl[0]";
connectAttr "cSpine0.obcc" "skinCluster3.ifcl[1]";
connectAttr "cSpine1.obcc" "skinCluster3.ifcl[2]";
connectAttr "cSpine2.obcc" "skinCluster3.ifcl[3]";
connectAttr "cSpine3.obcc" "skinCluster3.ifcl[4]";
connectAttr "cSpine4.obcc" "skinCluster3.ifcl[5]";
connectAttr "cNeck0.obcc" "skinCluster3.ifcl[6]";
connectAttr "cNeck1.obcc" "skinCluster3.ifcl[7]";
connectAttr "cNeck2.obcc" "skinCluster3.ifcl[8]";
connectAttr "cHead.obcc" "skinCluster3.ifcl[9]";
connectAttr "lEye.obcc" "skinCluster3.ifcl[10]";
connectAttr "cJaw.obcc" "skinCluster3.ifcl[11]";
connectAttr "cJawEnd.obcc" "skinCluster3.ifcl[12]";
connectAttr "rEye.obcc" "skinCluster3.ifcl[13]";
connectAttr "lCollar.obcc" "skinCluster3.ifcl[14]";
connectAttr "lShoulder.obcc" "skinCluster3.ifcl[15]";
connectAttr "lElbow.obcc" "skinCluster3.ifcl[16]";
connectAttr "lWrist.obcc" "skinCluster3.ifcl[17]";
connectAttr "lFinger.obcc" "skinCluster3.ifcl[18]";
connectAttr "lFingerEnd.obcc" "skinCluster3.ifcl[19]";
connectAttr "lThumb.obcc" "skinCluster3.ifcl[20]";
connectAttr "lThumbEnd.obcc" "skinCluster3.ifcl[21]";
connectAttr "rCollar.obcc" "skinCluster3.ifcl[22]";
connectAttr "rShoulder.obcc" "skinCluster3.ifcl[23]";
connectAttr "rElbow.obcc" "skinCluster3.ifcl[24]";
connectAttr "rWrist.obcc" "skinCluster3.ifcl[25]";
connectAttr "rFinger.obcc" "skinCluster3.ifcl[26]";
connectAttr "rFingerEnd.obcc" "skinCluster3.ifcl[27]";
connectAttr "rThumb.obcc" "skinCluster3.ifcl[28]";
connectAttr "rThumbEnd.obcc" "skinCluster3.ifcl[29]";
connectAttr "lHip.obcc" "skinCluster3.ifcl[30]";
connectAttr "lKnee.obcc" "skinCluster3.ifcl[31]";
connectAttr "lAnkle.obcc" "skinCluster3.ifcl[32]";
connectAttr "lBall.obcc" "skinCluster3.ifcl[33]";
connectAttr "lToe.obcc" "skinCluster3.ifcl[34]";
connectAttr "lHeel.obcc" "skinCluster3.ifcl[35]";
connectAttr "rHip.obcc" "skinCluster3.ifcl[36]";
connectAttr "rKnee.obcc" "skinCluster3.ifcl[37]";
connectAttr "rAnkle.obcc" "skinCluster3.ifcl[38]";
connectAttr "rBall.obcc" "skinCluster3.ifcl[39]";
connectAttr "rToe.obcc" "skinCluster3.ifcl[40]";
connectAttr "rHeel.obcc" "skinCluster3.ifcl[41]";
connectAttr "bindPose1.msg" "skinCluster3.bp";
connectAttr "cNeck2.msg" "skinCluster3.ptt";
connectAttr "cJointsShapeOrig.w" "groupParts7.ig";
connectAttr "groupId898.id" "groupParts7.gi";
connectAttr "groupParts9.og" "tweak3.ip[0].ig";
connectAttr "groupId900.id" "tweak3.ip[0].gi";
connectAttr "skinCluster3GroupId.msg" "skinCluster3Set.gn" -na;
connectAttr "cJointsShape.iog.og[1]" "skinCluster3Set.dsm" -na;
connectAttr "skinCluster3.msg" "skinCluster3Set.ub[0]";
connectAttr "tweak3.og[0]" "skinCluster3GroupParts.ig";
connectAttr "skinCluster3GroupId.id" "skinCluster3GroupParts.gi";
connectAttr "groupId900.msg" "tweakSet3.gn" -na;
connectAttr "cJointsShape.iog.og[2]" "tweakSet3.dsm" -na;
connectAttr "tweak3.msg" "tweakSet3.ub[0]";
connectAttr "groupParts7.og" "groupParts9.ig";
connectAttr "groupId900.id" "groupParts9.gi";
connectAttr "cBodyShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "cEyesShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "cJointsShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "groupId892.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId895.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId898.msg" ":initialShadingGroup.gn" -na;
connectAttr "defaultRenderLayer.msg" ":defaultRenderingList1.r" -na;
// End of baby_001.ma

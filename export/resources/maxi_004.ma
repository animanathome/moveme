//Maya ASCII 2014 scene
//Name: maxi_004.ma
//Last modified: Sun, May 31, 2015 02:41:20 PM
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
fileInfo "osv" "Mac OS X 10.9.3";
createNode transform -s -n "persp";
	setAttr ".t" -type "double3" 9.5438894656638649 10.716603403687664 10.17941993349085 ;
	setAttr ".r" -type "double3" -26.138352729917791 36.199999999575454 1.9707008099299721e-15 ;
createNode camera -s -n "perspShape" -p "persp";
	setAttr -k off ".v";
	setAttr ".fl" 34.999999999999986;
	setAttr ".coi" 14.852322299652158;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".tp" -type "double3" -0.0037754235079476145 6.2864605957134643 0.37387416033247278 ;
	setAttr ".hc" -type "string" "viewSet -p %camera";
createNode transform -s -n "top";
	setAttr ".t" -type "double3" 4.1556371142396333 100.1 0.1814482475694871 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 3.5271082387347388;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	setAttr ".t" -type "double3" 0.36992644035146666 4.3272044218937733 100.19932318650125 ;
createNode camera -s -n "frontShape" -p "front";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 3.6352826463251326;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	setAttr ".t" -type "double3" 100.19693403436143 1.4736285756279 -0.59096540945971821 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	setAttr -k off ".v";
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 4.4259040543472699;
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
	setAttr ".t" -type "double3" -0.011875891656619349 2.9965554205038156 -0.16912594013818316 ;
	setAttr ".jo" -type "double3" 90.000000000000014 0.29118063624749313 90.415461893171141 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861395e-05 0.0050819053394226543 0.99998708635670197 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 -0.011875891656619349 2.9965554205038156 -0.16912594013818316 1;
createNode joint -n "cSpine1" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.33400692567087847 0 0 ;
	setAttr ".jo" -type "double3" 0.0034573632410439654 0.71368671121623395 0.56874765833788066 ;
	setAttr ".bps" -type "matrix" -0.01970600017729103 0.99979408310123485 0.0048440636632738907 0
		 9.5458239375119261e-05 -0.0048431230108667671 0.99998826745478675 0 0.99980581336814467 0.019706231381541709 2.3024755733993518e-16 0
		 -0.014297782812077388 3.3305492521080482 -0.17082337634220143 1;
createNode joint -n "cSpine2" -p "cSpine1";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.33471023855854692 0 0 ;
	setAttr ".jo" -type "double3" -0.0084278546868556022 -2.2220503106433847 -0.060179007623162618 ;
	setAttr ".bps" -type "matrix" 0.019073572066682084 0.99981089608638363 0.0037908990437051184 0
		 -7.2306505664505801e-05 -0.003790209404347471 0.99999281451640465 0 0.99981808026279773 -0.019073709120506058 -3.7466644221953962e-16 0
		 -0.020893582832453236 3.6651905681722856 -0.16920201863787424 1;
createNode joint -n "cSpine3" -p "cSpine2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 0.36390642398316486 0 0 ;
	setAttr ".jo" -type "double3" -0.0049723992362982819 0.83199655114538429 -0.5596372815551971 ;
	setAttr ".bps" -type "matrix" 0.004553430293710135 0.99997177681231619 -0.005975939372186722 0
		 2.7211509261437902e-05 0.0059758774179038765 0.99998214391489004 0 0.99998963271230668 -0.0045535116016008261 2.3322423164662358e-16 0
		 -0.013952587429081776 4.0290281760264852 -0.16782248612319833 1;
createNode joint -n "cSpine4" -p "cSpine3";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.52323859272551609 0.0064139039865133323 -0.00081114315063660839 ;
	setAttr ".jo" -type "double3" -0.010706970671685146 0.26067810595998864 -2.0096280039796857 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.012381017179401623 4.5522940235447358 -0.16453553877121643 1;
createNode joint -n "cNeck0" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.81724519930823103 -0.10264332867938249 -0.00058486344634729563 ;
	setAttr ".jo" -type "double3" -1.0642744742221428e-14 -3.5929876337273438e-15 1.1927080055488188e-15 ;
	setAttr ".bps" -type "matrix" 6.5832755913319829e-16 0.99915755986695876 -0.041038647159784586 0
		 -1.4731597018646791e-16 0.041038647159784461 0.99915755986695853 0 1 -6.366435156834882e-16 1.2982958407026812e-16 0
		 -0.012965880625748369 5.3646383993495554 -0.30063103396856877 1;
createNode joint -n "cNeck1" -p "cNeck0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" 0.36505776775008186 0.035412056591436203 0.023575376585429859 ;
	setAttr ".jo" -type "double3" -0.16107433294785933 3.1652038835124543 -0.56270242013537075 ;
	setAttr ".bps" -type "matrix" -0.055215134871248926 0.99718279461996828 -0.050771675125603904 0
		 -0.0028069850953665529 0.050694021637015974 0.99871028682243013 0 0.99847053522666562 0.05528643851954855 3.1784851143837959e-16 0
		 0.010609495959681728 5.730841890680864 -0.28023028683843293 1;
createNode joint -n "cNeck2" -p "cNeck1";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" 0.31834145421877297 0.032888733331352525 -0.0048231799861180825 ;
	setAttr ".jo" -type "double3" -0.4865733966072483 -3.1317593017856216 11.74608278953321 ;
	setAttr ".bps" -type "matrix" 6.2450045135165055e-16 0.98816815417410819 0.15337437555255512 0
		 -2.8622937353617317e-16 -0.15337437555255531 0.98816815417410819 0 0.99999999999999989 -6.5225602696727947e-16 1.4345634487020291e-16 0
		 -0.011875891656617793 6.0496871173574673 -0.26354669943245929 1;
createNode joint -n "cHead" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.92409391417100861 -0.062935719603715287 -1.0208797917943545e-16 ;
	setAttr ".bps" -type "matrix" 6.2450045135165055e-16 0.98816815417410819 0.15337437555255512 0
		 -2.8622937353617317e-16 -0.15337437555255531 0.98816815417410819 0 0.99999999999999989 -6.5225602696727947e-16 1.4345634487020291e-16 0
		 1.9203741289650048e-15 4.8542899011898744 -0.1295735207236651 1;
createNode joint -n "cJaw" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.23029713238770383 0.036350474189643565 0.019394678134099595 ;
	setAttr ".jo" -type "double3" -178.41252348103609 1.6453068204088963 125.16389672751586 ;
	setAttr ".bps" -type "matrix" -0.028712074798593945 -0.69420158838219781 0.71920773872949495 0
		 -0.027691725940385433 0.71978062955850164 0.69364905653133357 0 -0.99920407578992687 2.6055673677148008e-16 -0.039890035407322791 0
		 0.0075187864774819303 6.2716841783007391 -0.19230463957761745 1;
createNode joint -n "cJawEnd" -p "cJaw";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.9367478614331306 0.071520002486670647 -0.0094893616515838997 ;
	setAttr ".bps" -type "matrix" -0.028712074798593945 -0.69420158838219781 0.71920773872949495 0
		 -0.027691725940385433 0.71978062955850164 0.69364905653133357 0 -0.99920407578992687 2.6055673677148008e-16 -0.039890035407322791 0
		 8.7777007884426439e-16 3.3524146273234128 0.41645064269211296 1;
createNode joint -n "lEye" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.30857790957152115 0.62200468916286278 0.13310587445226155 ;
	setAttr ".mnrl" -type "double3" -360 -360 -360 ;
	setAttr ".mxrl" -type "double3" 360 360 360 ;
	setAttr ".jo" -type "double3" -98.822527523776884 -89.999999999999957 0 ;
	setAttr ".bps" -type "matrix" 0.99999999999999989 2.1689961444877191e-16 3.3453450721923667e-16 0
		 -1.1614440751364199e-16 0.99999999999999989 -5.5511151231257837e-16 0 -4.0910498988433428e-16 3.3306690738754716e-16 1 0
		 0.11931158849048536 3.8942923133005487 0.48573942111034418 1;
	setAttr ".radi" 0.5;
createNode joint -n "rEye" -p "cNeck2";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 0.30857348960640252 0.62200489922255509 -0.13310610834338221 ;
	setAttr ".mnrl" -type "double3" -360 -360 -360 ;
	setAttr ".mxrl" -type "double3" 360 360 360 ;
	setAttr ".jo" -type "double3" 81.17747247622313 -89.999999999999972 0 ;
	setAttr ".bps" -type "matrix" 0.99999999999999989 2.1689961444877191e-16 3.3453450721923667e-16 0
		 -1.1614440751364199e-16 0.99999999999999989 -5.5511151231257837e-16 0 -4.0910498988433428e-16 3.3306690738754716e-16 1 0
		 0.11931158849048536 3.8942923133005487 0.48573942111034418 1;
	setAttr ".radi" 0.5;
createNode joint -n "lCollar" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.29849561138748992 0.12591418934491666 0.11782608336004058 ;
	setAttr ".jo" -type "double3" 11.707064156044268 -80.78700229215832 -99.503754253447013 ;
	setAttr ".bps" -type "matrix" 0.98709997017857787 -0.032893359049031519 -0.15668974377387354 0
		 0.032486613313186516 0.99945886705280251 -0.0051568425386084747 0 0.15677457966421132 -4.824879431877948e-14 0.98763441169853428 0
		 0.10544506618063912 4.855705518238592 -0.050977280667198685 1;
createNode joint -n "lShoulder" -p "lCollar";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" 1.4646841193933675 0.1051220822339138 0.015816260830065286 ;
	setAttr ".jo" -type "double3" -2.787940345666806e-12 -9.0197305805236692 1.8849906699715884 ;
	setAttr ".bps" -type "matrix" 1 -7.9009337276034695e-19 -2.7755575615628914e-17 0
		 5.5511151231257827e-17 1.0000000000000002 4.8650319883769555e-14 0 2.7755575615628914e-17 -4.88534655993053e-14 1 0
		 1.5571293648345723 4.9125923348177096 -0.26539967460984593 1;
createNode joint -n "lElbow" -p "lShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" 1.3368173540977832 -3.6143396588302111e-15 -0.055802821881460463 ;
	setAttr ".bps" -type "matrix" 1 -7.9009337276034695e-19 -2.7755575615628914e-17 0
		 5.5511151231257827e-17 1.0000000000000002 4.8650319883769555e-14 0 2.7755575615628914e-17 -4.88534655993053e-14 1 0
		 2.893946718932356 4.9125923348177096 -0.26539967460984598 1;
createNode joint -n "lWrist" -p "lElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" 1.1192420405986296 1.8379828194299607e-15 0.055802821881460463 ;
	setAttr ".jo" -type "double3" 1.4287647983136889e-16 -1.590277340731758e-15 -4.4648899947302782e-17 ;
	setAttr ".bps" -type "matrix" 1 -7.9009337276034695e-19 -2.7755575615628914e-17 0
		 5.5511151231257827e-17 1.0000000000000002 4.8650319883769555e-14 0 2.7755575615628914e-17 -4.88534655993053e-14 1 0
		 4.013188759530987 4.9125923348177096 -0.26539967460984604 1;
createNode joint -n "lThumb" -p "lWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.33950951871461521 -0.092281084035010938 0.4562217912768044 ;
	setAttr ".jo" -type "double3" 66.532329537002056 -51.860721594731913 -18.568170690591256 ;
	setAttr ".bps" -type "matrix" 0.58542760674385053 -0.19665617033094832 0.78651183585050555 0
		 -0.55709044773242944 0.60723682864941475 0.56649242446574921 0 -0.58900318361401816 -0.7697985350743185 0.24593792934393985 0
		 4.3526982782456018 4.8203112507826766 0.19082211666695387 1;
createNode joint -n "lThumbEnd" -p "lThumb";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.49751131262869752 0.32559047588005308 0.13694312146954038 ;
	setAttr ".bps" -type "matrix" 0.4324785284411003 -0.016862308610989869 0.90148654176628062 0
		 -0.78347014219601152 0.48781180705669269 0.38498594413750431 0 -0.44624753077723767 -0.87278594365651418 0.19775701714686728 0
		 1.9372533774967455 3.0039613516677162 0.3873755953685169 1;
createNode joint -n "lFinger" -p "lWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.8530288430137265 -0.042923999386753835 1.9206265654454469e-15 ;
	setAttr ".bps" -type "matrix" 1 -7.9009337276034695e-19 -2.7755575615628914e-17 0
		 5.5511151231257827e-17 1.0000000000000002 4.8650319883769555e-14 0 2.7755575615628914e-17 -4.88534655993053e-14 1 0
		 4.8662176025447135 4.8696683354309558 -0.2653996746098462 1;
createNode joint -n "lFingerEnd" -p "lFinger";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 0.75908483609808464 -8.8820098614043347e-16 1.1022955496961406e-16 ;
	setAttr ".bps" -type "matrix" 0.99778886398022915 0.041250044739540026 0.052113498501155549 0
		 -0.041193897272659777 0.99914885468031556 -0.0021515153970186954 0 -0.052157892447198671 5.1496133746109507e-14 0.99863885076411218 0
		 2.52842987715439 3.0294272065987928 -0.093642370867875427 1;
createNode joint -n "lWristStretch" -p "lElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 1.1192420405986303 1.7763568394002505e-15 0.055802821881460518 ;
	setAttr ".jo" -type "double3" 0 0 -2.9113023828648599e-34 ;
	setAttr ".bps" -type "matrix" 1 -7.90093372758991e-19 -2.7755575615628914e-17 0 5.5511151231256453e-17 1.0000000000000002 4.8636442095961741e-14 0
		 2.7755575615634343e-17 -4.88534655993053e-14 1.0000000000000002 0 4.0131887595309852 4.9125923348177079 -0.20959685272838549 1;
createNode joint -n "lElbowStretch" -p "lShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 1.3368173540977828 -3.5527136788005009e-15 -0.055802821881460518 ;
	setAttr ".jo" -type "double3" 0 0 -2.9113023828648599e-34 ;
	setAttr ".bps" -type "matrix" 1 -7.90093372758991e-19 -2.7755575615628914e-17 0 5.5511151231256471e-17 1.0000000000000002 4.8657258777673456e-14 0
		 2.7755575615631625e-17 -4.8853465599305281e-14 1 0 2.8939467189323551 4.912592334817707 -0.32120249649130639 1;
createNode joint -n "rCollar" -p "cSpine4";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.29850009016667478 0.12591435395382714 -0.11782598282059852 ;
	setAttr ".jo" -type "double3" 11.707064156044794 -80.787002292158363 80.496245746552546 ;
	setAttr ".bps" -type "matrix" 0.98709997017857787 0.032893359049031339 0.15668974377387321 0
		 0.032486613313186488 -0.99945886705280251 0.0051568425386071511 0 0.15677457966421099 4.954103746898509e-14 -0.98763441169853439 0
		 -0.13020699999999996 4.8557100000000011 -0.050977300000000045 1;
createNode joint -n "rShoulder" -p "rCollar";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 6;
	setAttr ".t" -type "double3" -1.4646831096683419 -0.10511522873289179 -0.015815754961366703 ;
	setAttr ".jo" -type "double3" 2.0243085605561775e-12 -9.0197305805236407 1.8849906699715833 ;
	setAttr ".bps" -type "matrix" 1 1.0623645541547468e-16 1.3877787807814457e-16 0 1.1102230246251563e-16 -1.0000000000000002 -4.9948760405538195e-14 0
		 1.9428902930940239e-16 5.0143607190537899e-14 -1 0 -1.5818899999999998 4.9125899999999998 -0.26539999999999997 1;
createNode joint -n "rElbow" -p "rShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 7;
	setAttr ".t" -type "double3" -1.33682 2.7981063793149302e-15 0.055802821881460296 ;
	setAttr ".bps" -type "matrix" 1 1.0623645541547468e-16 1.3877787807814457e-16 0 1.1102230246251563e-16 -1.0000000000000002 -4.9948760405538195e-14 0
		 1.9428902930940239e-16 5.0143607190537899e-14 -1 0 -2.9187099999999999 4.9125899999999998 -0.26540000000000002 1;
createNode joint -n "rWrist" -p "rElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".t" -type "double3" -1.11924 -2.7981063793149302e-15 -0.055802821881460518 ;
	setAttr ".bps" -type "matrix" 1 1.0623645541547468e-16 1.3877787807814457e-16 0 1.1102230246251563e-16 -1.0000000000000002 -4.9948760405538195e-14 0
		 1.9428902930940239e-16 5.0143607190537899e-14 -1 0 -4.0379500000000004 4.9125899999999998 -0.26540000000000002 1;
createNode joint -n "rThumb" -p "rWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.33950999999999976 0.092279999999975715 -0.45622200000000462 ;
	setAttr ".jo" -type "double3" 66.532329537001999 -51.860721594731913 -18.568170690591195 ;
	setAttr ".bps" -type "matrix" 0.58542760674385075 0.19665617033094879 -0.78651183585050533 0
		 -0.55709044773242911 -0.60723682864941453 -0.56649242446574988 0 -0.58900318361401816 0.76979853507431861 -0.24593792934393949 0
		 -4.3774600000000001 4.820310000000001 0.19082199999999999 1;
createNode joint -n "rThumbEnd" -p "rThumb";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.49751018467784758 -0.32559073641792147 -0.13694782959086904 ;
	setAttr ".bps" -type "matrix" 0.4324785284411003 -0.016862308610989869 0.90148654176628062 0
		 -0.78347014219601152 0.48781180705669269 0.38498594413750431 0 -0.44624753077723767 -0.87278594365651418 0.19775701714686728 0
		 1.9372533774967455 3.0039613516677162 0.3873755953685169 1;
createNode joint -n "rFinger" -p "rWrist";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.85302999999999951 0.042919999999998737 -2.2759572004815709e-15 ;
	setAttr ".bps" -type "matrix" 1 1.0623645541547468e-16 1.3877787807814457e-16 0 1.1102230246251563e-16 -1.0000000000000002 -4.9948760405538195e-14 0
		 1.9428902930940239e-16 5.0143607190537899e-14 -1 0 -4.8909799999999999 4.8696700000000011 -0.26540000000000002 1;
createNode joint -n "rFingerEnd" -p "rFinger";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -0.75908 8.8817841970012523e-16 -1.1102230246251563e-16 ;
	setAttr ".bps" -type "matrix" 0.99778886398022915 0.041250044739540026 0.052113498501155549 0
		 -0.041193897272659777 0.99914885468031556 -0.0021515153970186954 0 -0.052157892447198671 5.1496133746109507e-14 0.99863885076411218 0
		 2.52842987715439 3.0294272065987928 -0.093642370867875427 1;
createNode joint -n "rWristStretch" -p "rElbow";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -1.11924 -2.6645352591003757e-15 -0.055802821881460518 ;
	setAttr ".jo" -type "double3" 0 0 2.5025166719419889e-31 ;
	setAttr ".bps" -type "matrix" 1 1.0623645541546929e-16 1.3877787807814457e-16 0 1.1102230246250732e-16 -1.0000000000000002 -4.9941821511634269e-14 0
		 1.9428902930940797e-16 5.0143607190537874e-14 -1 0 -4.0379499999999995 4.9125899999999998 -0.20959717811853967 1;
createNode joint -n "rElbowStretch" -p "rShoulder";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -1.33682 2.6645352591003757e-15 0.055802821881460296 ;
	setAttr ".jo" -type "double3" 0 0 2.5025166719419889e-31 ;
	setAttr ".bps" -type "matrix" 0.99999999999999989 6.51643508269799e-16 1.0931255900459292e-16 2.9486539714206408e-33
		 1.5492856997311453e-16 -1.0000000000000002 -4.9941394075769801e-14 -2.775557561562892e-17
		 1.9428902930940163e-16 5.0143607190537887e-14 -1.0000000000000002 -1.8598120354896028e-31
		 -2.9187099999999999 4.9125899999999989 -0.32120282188146049 1;
createNode joint -n "lHip" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" -0.0036473823077365353 0.002852647173743561 0.65133703893898642 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861395e-05 0.0050819053394226543 0.99998708635670197 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 0.6394703659664206 2.9976455974551341 -0.16625479366357412 1;
createNode joint -n "lKnee" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" -1.3095297472159055 0.031354773677064532 -1.1334340329127202e-16 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861395e-05 0.0050819053394226543 0.99998708635670197 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 0.6489646379253986 1.6883265296987762 -0.15960052230309388 1;
createNode joint -n "lAnkle" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" -1.3062240994327188 -0.031354773677064504 2.3211008287563675e-18 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833895 0.99996079702054064 -0.0050820389445783154 0
		 -3.6850445815861395e-05 0.0050819053394226543 0.99998708635670197 0 0.99997371032434335 0.0072511144085883883 -2.2204460492503131e-16 0
		 0.65843725143841847 0.38199429615083136 -0.15296143074547527 1;
createNode joint -n "lHeel" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.36421307767375377 -0.37974979030526423 -0.0035075428838177158 ;
	setAttr ".jo" -type "double3" 179.96237264803048 -0.47337112725991182 -175.16325663462854 ;
	setAttr ".bps" -type "matrix" -0.00010105259733122693 -0.99685547158864651 -0.079241141789792816 0
		 -8.032782464788106e-06 -0.079241141382645902 0.99685547671056629 0 -0.99999999486192348 0.00010137136193970678 1.4588278939879385e-16 0
		 0.30414617399077676 0.003467884707847535 -0.275597156565839 1;
createNode joint -n "lBall" -p "lAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" -0.19207324368874903 0.43914115289776245 0 ;
	setAttr ".jo" -type "double3" -179.51932811084308 -0.00066731226095268804 90.371454624747997 ;
	setAttr ".bps" -type "matrix" 2.1805627086758079e-05 -0.0014009236593202749 0.99999901846822603 0
		 -0.01563984025474046 0.99987670856672795 0.001401093349175986 0 -0.99987768998079041 -0.015639855455459407 -1.0728360106717577e-07 0
		 0.65981379597056089 0.1921602560751807 0.28715017494471884 1;
createNode joint -n "lToe" -p "lBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" 0.85734006342649827 -0.17390363599079495 -0.00017868760009080525 ;
	setAttr ".bps" -type "matrix" 2.6814691417818837e-16 -0.0013930756639797331 0.99999902966962673 0
		 -7.9196022027654121e-14 0.99999902966962639 0.0013930756639796565 0 -1 -7.9209493239647266e-14 2.0171581240045137e-16 0
		 0.30421113587877707 0.0021028530987221346 0.76735763294064419 1;
createNode joint -n "lAnkleStretch" -p "lKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -1.3062240994327188 -0.031354773677064518 -1.1102230246251563e-16 ;
	setAttr ".jo" -type "double3" 1.3075830917025694e-19 -1.7624961747698514e-18 4.9696166897867443e-17 ;
	setAttr ".bps" -type "matrix" -0.0072510207702834867 0.99996079702054064 -0.0050820389445783102 0
		 -3.685044581586254e-05 0.0050819053394226535 0.99998708635670175 0 0.99997371032434357 0.0072511144085883892 -2.2205661671586765e-16 0
		 0.65843725143841858 0.38199429615083025 -0.18431660933213159 1;
createNode joint -n "lKneeStretch" -p "lHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" -1.309529747215906 0.031354773677064518 -4.4408920985006262e-16 ;
	setAttr ".jo" -type "double3" 1.3075830917025694e-19 -1.7624961747698514e-18 4.9696166897867443e-17 ;
	setAttr ".bps" -type "matrix" -0.0072510207702833748 0.99996079702054053 -0.0050820389445783033 0
		 -3.6850445815861307e-05 0.0050819053394226526 0.99998708635670175 0 0.99997371032434323 0.0072511144085883866 -2.2206543194808053e-16 0
		 0.64896463792539816 1.6883265296987753 -0.12824534371643753 1;
createNode joint -n "rHip" -p "cSpine0";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 1;
	setAttr ".t" -type "double3" 0.0058028705160584337 0.0029004680077452383 -0.65132104774429578 ;
	setAttr ".jo" -type "double3" -0.0042239368762231905 0.83091305533695947 179.9999693775317 ;
	setAttr ".bps" -type "matrix" -0.0072510207702900188 -0.99996079702054064 0.0050820389445782451 0
		 -3.6865346585329338e-05 -0.0050819052313725568 -0.99998708635670175 0 0.99997371032379412 -0.0072511144843212831 -1.4900968619840205e-08 0
		 -0.66322199999999998 2.9976500000000001 -0.16625499999999999 1;
createNode joint -n "rKnee" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 2;
	setAttr ".t" -type "double3" 1.3095306760719547 -0.031354497592540609 2.7824442389462549e-07 ;
	setAttr ".jo" -type "double3" 1.2074182697257331e-06 -8.5876093872792627e-23 8.0046141479316596e-21 ;
	setAttr ".bps" -type "matrix" -0.0072510207702900188 -0.99996079702054064 0.0050820389445782451 0
		 -3.6865346585329338e-05 -0.0050819052313725568 -0.99998708635670175 0 0.99997371032379412 -0.0072511144843212831 -1.4900968619840205e-08 0
		 -0.67271599999999987 1.6883300000000003 -0.15960099999999999 1;
createNode joint -n "rAnkle" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 3;
	setAttr ".t" -type "double3" 1.3062278731562824 0.031353884401414706 -3.5869862675003221e-07 ;
	setAttr ".jo" -type "double3" 1.2074182697257331e-06 -8.5876093872792627e-23 8.0046141479316596e-21 ;
	setAttr ".bps" -type "matrix" -0.0072510207702900188 -0.99996079702054064 0.0050820389445782451 0
		 -3.6865346585329338e-05 -0.0050819052313725568 -0.99998708635670175 0 0.99997371032379412 -0.0072511144843212831 -1.4900968619840205e-08 0
		 -0.68218899999999993 0.38199400000000039 -0.15296100000000001 1;
createNode joint -n "rHeel" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.36421278853446037 0.37974984747724577 0.0035080063285621854 ;
	setAttr ".jo" -type "double3" 179.96237179726802 -0.47337105527201262 -175.16325662759974 ;
	setAttr ".bps" -type "matrix" -0.00010105259733122693 -0.99685547158864651 -0.079241141789792816 0
		 -8.032782464788106e-06 -0.079241141382645902 0.99685547671056629 0 -0.99999999486192348 0.00010137136193970678 1.4588278939879385e-16 0
		 0.30414617399077676 0.003467884707847535 -0.275597156565839 1;
createNode joint -n "rBall" -p "rAnkle";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 4;
	setAttr ".t" -type "double3" 0.19207320383913545 -0.43914054740225961 -4.6229017935939254e-07 ;
	setAttr ".jo" -type "double3" -179.51932811637695 -0.0006681660166554705 90.371454624748068 ;
	setAttr ".bps" -type "matrix" 2.1805627086759939e-05 0.0014009236593203469 -0.99999901846822625 0
		 -0.015639840254768146 -0.99987670856672772 -0.0014010933491759975 0 -0.99987768998079007 0.015639855455487069 1.0728360119380178e-07 0
		 -0.6835659999999999 0.19216000000000011 0.28714999999999991 1;
createNode joint -n "rToe" -p "rBall";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".uoc" yes;
	setAttr ".oc" 5;
	setAttr ".t" -type "double3" -0.85734449633058885 0.17390335841564847 0.00017850615333081521 ;
	setAttr ".jo" -type "double3" 8.5377364625159355e-07 6.1278906620843449e-23 6.2329769894869986e-25 ;
	setAttr ".bps" -type "matrix" 2.6814691417818837e-16 -0.0013930756639797331 0.99999902966962673 0
		 -7.9196022027654121e-14 0.99999902966962639 0.0013930756639796565 0 -1 -7.9209493239647266e-14 2.0171581240045137e-16 0
		 0.30421113587877707 0.0021028530987221346 0.76735763294064419 1;
createNode joint -n "rAnkleStretch" -p "rKnee";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 1.3062278731562822 0.031353884401414706 -3.5869862646809025e-07 ;
	setAttr ".jo" -type "double3" 4.4512405348279113e-19 -1.6214774142114948e-17 -4.9696166897867443e-17 ;
	setAttr ".bps" -type "matrix" -0.0072510207702899242 -0.99996079702054053 0.0050820389445782417 1.1102230246251563e-16
		 -3.6865346585328972e-05 -0.0050819052313725551 -0.99998708635670164 4.3368086899420177e-19
		 0.99997371032379445 -0.0072511144843212822 -1.4900968619819992e-08 8.6736173798840355e-19
		 -0.68218899999999938 0.38199400000000039 -0.1843161785866563 1;
createNode joint -n "rKneeStretch" -p "rHip";
	addAttr -ci true -sn "liw" -ln "lockInfluenceWeights" -min 0 -max 1 -at "bool";
	setAttr ".t" -type "double3" 1.3095306760719541 -0.031354497592540623 2.7824442394575044e-07 ;
	setAttr ".jo" -type "double3" 4.4512405348279113e-19 -1.6214774142114948e-17 -4.9696166897867443e-17 ;
	setAttr ".bps" -type "matrix" -0.0072510207702900084 -0.99996079702054053 0.0050820389445782347 0
		 -3.6865346585328986e-05 -0.0050819052313725559 -0.99998708635670164 0 0.99997371032379456 -0.0072511144843212839 -1.4900968619975848e-08 0
		 -0.67271600000000031 1.6883300000000021 -0.12824582141334365 1;
createNode transform -n "model";
createNode transform -n "cEyes" -p "model";
	setAttr -l on ".tx";
	setAttr -l on ".ty";
	setAttr -l on ".tz";
	setAttr -l on ".rx";
	setAttr -l on ".ry";
	setAttr -l on ".rz";
	setAttr ".s" -type "double3" 3.0116995367531136 3.0116995367531136 3.0116995367531136 ;
	setAttr -l on ".sx";
	setAttr -l on ".sy";
	setAttr -l on ".sz";
	setAttr ".rp" -type "double3" 4.3368086899420177e-19 1.3322676295501882e-15 -2.7755575615628914e-17 ;
	setAttr ".sp" -type "double3" 1.4399871690445896e-19 2.9490937222033196e-16 -9.2159178818853736e-18 ;
	setAttr ".spt" -type "double3" 2.8968215208974291e-19 5.9326904747979338e-16 -1.8539657733743543e-17 ;
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
	setAttr -s 116 ".vt[0:115]"  0.12076117 3.92092252 0.45798188 0.10662235 3.92584944 0.46512166
		 0.092483506 3.91837835 0.46953025 0.086627021 3.90288496 0.46862501 0.092483535 3.88844562 0.46293634
		 0.10662235 3.88351798 0.45579645 0.1207612 3.89098954 0.45138794 0.12661768 3.9064827 0.45229313
		 0.13522674 3.93341351 0.46167165 0.10910161 3.94251776 0.4748643 0.082976446 3.92871284 0.48301029
		 0.072155073 3.90008497 0.48133767 0.082976446 3.87340379 0.47082624 0.10910161 3.86429906 0.45763347
		 0.13522674 3.87810445 0.44948757 0.14604814 3.9067328 0.45116025 0.14694624 3.94070268 0.4689334
		 0.11281206 3.95259857 0.4861705 0.078677937 3.93456101 0.49681365 0.064539075 3.89715719 0.49462831
		 0.078677937 3.86229634 0.48089442 0.11281206 3.85040069 0.46365726 0.14694621 3.86843824 0.45301414
		 0.16108505 3.90584278 0.45519966 0.15413536 3.94168115 0.47866169 0.11718883 3.95455718 0.49731907
		 0.080242291 3.93503356 0.50883907 0.06493856 3.89454722 0.5064736 0.080242321 3.8568151 0.49160832
		 0.11718886 3.84393907 0.47295094 0.15413542 3.86346269 0.46143091 0.16943915 3.90394855 0.46379629
		 0.1556998 3.93619967 0.48937553 0.12156565 3.94809532 0.50661278 0.087431505 3.93005776 0.51725584
		 0.073292643 3.89265347 0.51507038 0.087431505 3.85779333 0.50133663 0.12156563 3.84589791 0.48409957
		 0.1556998 3.86393523 0.47345638 0.16983862 3.90133905 0.47564173 0.15140124 3.92509222 0.49944374
		 0.1252761 3.93419695 0.51263654 0.099150911 3.92039156 0.52078235 0.088329569 3.89176345 0.51910979
		 0.099150911 3.86508298 0.50859845 0.1252761 3.85597849 0.49540573 0.15140124 3.86978364 0.48725981
		 0.16222264 3.89841127 0.48893237 0.14189418 3.91005063 0.5073337 0.12775533 3.91497827 0.51447356
		 0.11361651 3.9075067 0.51888204 0.10776003 3.89201307 0.51797676 0.11361651 3.87757373 0.51228809
		 0.12775533 3.87264633 0.50514823 0.14189418 3.88011789 0.50073975 0.14775066 3.89561081 0.50164491
		 0.10575177 3.90513158 0.45842594 0.12862594 3.89336467 0.51184404 -0.12076117 3.92092252 0.45798188
		 -0.10662235 3.92584944 0.46512166 -0.10910161 3.94251776 0.4748643 -0.13522674 3.93341351 0.46167165
		 -0.092483506 3.91837835 0.46953025 -0.082976446 3.92871284 0.48301029 -0.086627021 3.90288496 0.46862501
		 -0.072155073 3.90008497 0.48133767 -0.092483535 3.88844562 0.46293634 -0.082976446 3.87340379 0.47082624
		 -0.10662235 3.88351798 0.45579645 -0.10910161 3.86429906 0.45763347 -0.1207612 3.89098954 0.45138794
		 -0.13522674 3.87810445 0.44948757 -0.12661768 3.9064827 0.45229313 -0.14604814 3.9067328 0.45116025
		 -0.11281206 3.95259857 0.4861705 -0.14694624 3.94070268 0.4689334 -0.078677937 3.93456101 0.49681365
		 -0.064539075 3.89715719 0.49462831 -0.078677937 3.86229634 0.48089442 -0.11281206 3.85040069 0.46365726
		 -0.14694621 3.86843824 0.45301414 -0.16108505 3.90584278 0.45519966 -0.11718883 3.95455718 0.49731907
		 -0.15413536 3.94168115 0.47866169 -0.080242291 3.93503356 0.50883907 -0.06493856 3.89454722 0.5064736
		 -0.080242321 3.8568151 0.49160832 -0.11718886 3.84393907 0.47295094 -0.15413542 3.86346269 0.46143091
		 -0.16943915 3.90394855 0.46379629 -0.12156565 3.94809532 0.50661278 -0.1556998 3.93619967 0.48937553
		 -0.087431505 3.93005776 0.51725584 -0.073292643 3.89265347 0.51507038 -0.087431505 3.85779333 0.50133663
		 -0.12156563 3.84589791 0.48409957 -0.1556998 3.86393523 0.47345638 -0.16983862 3.90133905 0.47564173
		 -0.1252761 3.93419695 0.51263654 -0.15140124 3.92509222 0.49944374 -0.099150911 3.92039156 0.52078235
		 -0.088329569 3.89176345 0.51910979 -0.099150911 3.86508298 0.50859845 -0.1252761 3.85597849 0.49540573
		 -0.15140124 3.86978364 0.48725981 -0.16222264 3.89841127 0.48893237 -0.12775533 3.91497827 0.51447356
		 -0.14189418 3.91005063 0.5073337 -0.11361651 3.9075067 0.51888204 -0.10776003 3.89201307 0.51797676
		 -0.11361651 3.87757373 0.51228809 -0.12775533 3.87264633 0.50514823 -0.14189418 3.88011789 0.50073975
		 -0.14775066 3.89561081 0.50164491 -0.10575177 3.90513158 0.45842594 -0.12862594 3.89336467 0.51184404;
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
createNode mesh -n "cEyesShapeOrig1" -p "cEyes";
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
	setAttr -s 116 ".pt[0:115]" -type "float3"  -0.081224471 -1.8341984 -0.33503172 
		-0.071824409 -1.8374739 -0.33977851 -0.062424332 -1.8325068 -0.34270954 -0.058530703 
		-1.8222061 -0.34210768 -0.062424351 -1.8126063 -0.33832562 -0.071824409 -1.8093302 
		-0.33357874 -0.081224494 -1.8142977 -0.3306478 -0.085118122 -1.8245981 -0.33124959 
		-0.09084177 -1.8425028 -0.33748481 -0.073472723 -1.8485557 -0.34625581 -0.05610365 
		-1.8393776 -0.35167161 -0.048909161 -1.8203447 -0.35055959 -0.05610365 -1.8026059 
		-0.34357116 -0.073472723 -1.7965527 -0.33480006 -0.09084177 -1.8057311 -0.32938433 
		-0.098036282 -1.8247644 -0.3304964 -0.098633371 -1.8473489 -0.34231272 -0.075939581 
		-1.8552579 -0.35377264 -0.053245828 -1.8432658 -0.36084864 -0.043845735 -1.8183981 
		-0.35939574 -0.053245828 -1.7952212 -0.35026488 -0.075939581 -1.7873125 -0.33880493 
		-0.098633349 -1.7993046 -0.33172894 -0.10803343 -1.8241726 -0.33318198 -0.10341299 
		-1.8479995 -0.34878048 -0.078849435 -1.85656 -0.36118466 -0.054285873 -1.8435799 
		-0.36884364 -0.04411133 -1.8166629 -0.36727098 -0.054285891 -1.7915771 -0.35738793 
		-0.078849457 -1.7830166 -0.34498373 -0.10341303 -1.7959967 -0.33732477 -0.11358757 
		-1.8229133 -0.33889735 -0.1044531 -1.8443552 -0.35590348 -0.081759319 -1.8522639 
		-0.36736351 -0.059065554 -1.8402718 -0.37443945 -0.049665466 -1.8154039 -0.37298647 
		-0.059065554 -1.7922274 -0.36385572 -0.081759311 -1.7843189 -0.3523958 -0.1044531 
		-1.7963108 -0.34531978 -0.11385316 -1.8211784 -0.3467727 -0.10159524 -1.8369704 -0.36259723 
		-0.084226184 -1.8430237 -0.37136835 -0.066857092 -1.8338453 -0.376784 -0.059662625 
		-1.8148122 -0.37567201 -0.066857092 -1.7970738 -0.36868367 -0.084226184 -1.7910209 
		-0.3599126 -0.10159524 -1.800199 -0.35449687 -0.10878974 -1.8192319 -0.35560885 -0.095274553 
		-1.8269702 -0.36784279 -0.085874476 -1.8302463 -0.37258968 -0.076474413 -1.8252789 
		-0.37552062 -0.072580785 -1.8149781 -0.37491873 -0.076474413 -1.8053782 -0.3711367 
		-0.085874476 -1.8021023 -0.36638981 -0.095274553 -1.8070698 -0.36345887 -0.099168181 
		-1.8173701 -0.36406067 -0.071245611 -1.8236998 -0.33532694 -0.086453296 -1.8158767 
		-0.37084144 0.079349406 -1.8341984 -0.33503172 0.069949344 -1.8374739 -0.33977851 
		0.071597658 -1.8485557 -0.34625581 0.088966705 -1.8425028 -0.33748481 0.060549267 
		-1.8325068 -0.34270954 0.054228585 -1.8393776 -0.35167161 0.056655634 -1.8222061 
		-0.34210768 0.047034096 -1.8203447 -0.35055959 0.060549285 -1.8126063 -0.33832562 
		0.054228585 -1.8026059 -0.34357116 0.069949344 -1.8093302 -0.33357874 0.071597658 
		-1.7965527 -0.33480006 0.079349428 -1.8142977 -0.3306478 0.088966705 -1.8057311 -0.32938433 
		0.083243057 -1.8245981 -0.33124959 0.096161216 -1.8247644 -0.3304964 0.074064516 
		-1.8552579 -0.35377264 0.096758306 -1.8473489 -0.34231272 0.051370762 -1.8432658 
		-0.36084864 0.04197067 -1.8183981 -0.35939574 0.051370762 -1.7952212 -0.35026488 
		0.074064516 -1.7873125 -0.33880493 0.096758284 -1.7993046 -0.33172894 0.10615837 
		-1.8241726 -0.33318198 0.07697437 -1.85656 -0.36118466 0.10153793 -1.8479995 -0.34878048 
		0.052410807 -1.8435799 -0.36884364 0.042236265 -1.8166629 -0.36727098 0.052410826 
		-1.7915771 -0.35738793 0.076974392 -1.7830166 -0.34498373 0.10153797 -1.7959967 -0.33732477 
		0.11171251 -1.8229133 -0.33889735 0.079884253 -1.8522639 -0.36736351 0.10257803 -1.8443552 
		-0.35590348 0.057190489 -1.8402718 -0.37443945 0.047790397 -1.8154039 -0.37298647 
		0.057190489 -1.7922274 -0.36385572 0.079884246 -1.7843189 -0.3523958 0.10257803 -1.7963108 
		-0.34531978 0.11197809 -1.8211784 -0.3467727 0.082351118 -1.8430237 -0.37136835 0.099720173 
		-1.8369704 -0.36259723 0.064982027 -1.8338453 -0.376784 0.05778756 -1.8148122 -0.37567201 
		0.064982027 -1.7970738 -0.36868367 0.082351118 -1.7910209 -0.3599126 0.099720173 
		-1.800199 -0.35449687 0.10691468 -1.8192319 -0.35560885 0.08399941 -1.8302463 -0.37258968 
		0.093399487 -1.8269702 -0.36784279 0.074599348 -1.8252789 -0.37552062 0.070705719 
		-1.8149781 -0.37491873 0.074599348 -1.8053782 -0.3711367 0.08399941 -1.8021023 -0.36638981 
		0.093399487 -1.8070698 -0.36345887 0.097293116 -1.8173701 -0.36406067 0.069370545 
		-1.8236998 -0.33532694 0.084578231 -1.8158767 -0.37084144;
	setAttr -s 116 ".vt[0:115]"  0.12076117 3.92092252 0.45798188 0.10662235 3.92584944 0.46512166
		 0.092483506 3.91837835 0.46953025 0.086627021 3.90288496 0.46862501 0.092483535 3.88844562 0.46293634
		 0.10662235 3.88351798 0.45579645 0.1207612 3.89098954 0.45138794 0.12661768 3.9064827 0.45229313
		 0.13522674 3.93341351 0.46167165 0.10910161 3.94251776 0.4748643 0.082976446 3.92871284 0.48301029
		 0.072155073 3.90008497 0.48133767 0.082976446 3.87340379 0.47082624 0.10910161 3.86429906 0.45763347
		 0.13522674 3.87810445 0.44948757 0.14604814 3.9067328 0.45116025 0.14694624 3.94070268 0.4689334
		 0.11281206 3.95259857 0.4861705 0.078677937 3.93456101 0.49681365 0.064539075 3.89715719 0.49462831
		 0.078677937 3.86229634 0.48089442 0.11281206 3.85040069 0.46365726 0.14694621 3.86843824 0.45301414
		 0.16108505 3.90584278 0.45519966 0.15413536 3.94168115 0.47866169 0.11718883 3.95455718 0.49731907
		 0.080242291 3.93503356 0.50883907 0.06493856 3.89454722 0.5064736 0.080242321 3.8568151 0.49160832
		 0.11718886 3.84393907 0.47295094 0.15413542 3.86346269 0.46143091 0.16943915 3.90394855 0.46379629
		 0.1556998 3.93619967 0.48937553 0.12156565 3.94809532 0.50661278 0.087431505 3.93005776 0.51725584
		 0.073292643 3.89265347 0.51507038 0.087431505 3.85779333 0.50133663 0.12156563 3.84589791 0.48409957
		 0.1556998 3.86393523 0.47345638 0.16983862 3.90133905 0.47564173 0.15140124 3.92509222 0.49944374
		 0.1252761 3.93419695 0.51263654 0.099150911 3.92039156 0.52078235 0.088329569 3.89176345 0.51910979
		 0.099150911 3.86508298 0.50859845 0.1252761 3.85597849 0.49540573 0.15140124 3.86978364 0.48725981
		 0.16222264 3.89841127 0.48893237 0.14189418 3.91005063 0.5073337 0.12775533 3.91497827 0.51447356
		 0.11361651 3.9075067 0.51888204 0.10776003 3.89201307 0.51797676 0.11361651 3.87757373 0.51228809
		 0.12775533 3.87264633 0.50514823 0.14189418 3.88011789 0.50073975 0.14775066 3.89561081 0.50164491
		 0.10575177 3.90513158 0.45842594 0.12862594 3.89336467 0.51184404 -0.12076117 3.92092252 0.45798188
		 -0.10662235 3.92584944 0.46512166 -0.10910161 3.94251776 0.4748643 -0.13522674 3.93341351 0.46167165
		 -0.092483506 3.91837835 0.46953025 -0.082976446 3.92871284 0.48301029 -0.086627021 3.90288496 0.46862501
		 -0.072155073 3.90008497 0.48133767 -0.092483535 3.88844562 0.46293634 -0.082976446 3.87340379 0.47082624
		 -0.10662235 3.88351798 0.45579645 -0.10910161 3.86429906 0.45763347 -0.1207612 3.89098954 0.45138794
		 -0.13522674 3.87810445 0.44948757 -0.12661768 3.9064827 0.45229313 -0.14604814 3.9067328 0.45116025
		 -0.11281206 3.95259857 0.4861705 -0.14694624 3.94070268 0.4689334 -0.078677937 3.93456101 0.49681365
		 -0.064539075 3.89715719 0.49462831 -0.078677937 3.86229634 0.48089442 -0.11281206 3.85040069 0.46365726
		 -0.14694621 3.86843824 0.45301414 -0.16108505 3.90584278 0.45519966 -0.11718883 3.95455718 0.49731907
		 -0.15413536 3.94168115 0.47866169 -0.080242291 3.93503356 0.50883907 -0.06493856 3.89454722 0.5064736
		 -0.080242321 3.8568151 0.49160832 -0.11718886 3.84393907 0.47295094 -0.15413542 3.86346269 0.46143091
		 -0.16943915 3.90394855 0.46379629 -0.12156565 3.94809532 0.50661278 -0.1556998 3.93619967 0.48937553
		 -0.087431505 3.93005776 0.51725584 -0.073292643 3.89265347 0.51507038 -0.087431505 3.85779333 0.50133663
		 -0.12156563 3.84589791 0.48409957 -0.1556998 3.86393523 0.47345638 -0.16983862 3.90133905 0.47564173
		 -0.1252761 3.93419695 0.51263654 -0.15140124 3.92509222 0.49944374 -0.099150911 3.92039156 0.52078235
		 -0.088329569 3.89176345 0.51910979 -0.099150911 3.86508298 0.50859845 -0.1252761 3.85597849 0.49540573
		 -0.15140124 3.86978364 0.48725981 -0.16222264 3.89841127 0.48893237 -0.12775533 3.91497827 0.51447356
		 -0.14189418 3.91005063 0.5073337 -0.11361651 3.9075067 0.51888204 -0.10776003 3.89201307 0.51797676
		 -0.11361651 3.87757373 0.51228809 -0.12775533 3.87264633 0.50514823 -0.14189418 3.88011789 0.50073975
		 -0.14775066 3.89561081 0.50164491 -0.10575177 3.90513158 0.45842594 -0.12862594 3.89336467 0.51184404;
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
	setAttr -s 8 ".iog[0].og";
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
	setAttr -s 1247 ".uvst[0].uvsp";
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
		 0.38951457 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125
		 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5
		 0.25 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1
		 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375
		 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5
		 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625
		 0.75 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625
		 0.75 0.75 0.75 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875
		 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625
		 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875
		 1 0.8125 1 0.9375 1 0.375 0.3125 0.40625 0.3125 0.40625 0.68843985 0.375 0.68843985
		 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875 0.68843985 0.5 0.3125 0.5
		 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125 0.5625 0.68843985 0.59375
		 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985 0.5 1.4901161e-08 0.61048543
		 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543
		 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 1 0.5
		 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875
		 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25
		 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25
		 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25
		 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5
		 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625 0
		 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625
		 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1
		 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875
		 0.875 0.875 1 0.875;
	setAttr ".uvst[0].uvsp[250:499]" 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625
		 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875
		 1 0.8125 1 0.9375 1 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375
		 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875
		 0.125 0.875 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375
		 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5
		 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75
		 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25
		 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875
		 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125
		 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.375 0.3125 0.40625 0.3125 0.40625
		 0.68843985 0.375 0.68843985 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875
		 0.68843985 0.5 0.3125 0.5 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125
		 0.5625 0.68843985 0.59375 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985
		 0.5 1.4901161e-08 0.61048543 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 1 0.5 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0 0.25 0.125
		 0.25 0.125 0.125 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625
		 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375
		 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1
		 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5
		 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875
		 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75
		 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875
		 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875
		 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125
		 1 0.9375 1 0.375 0.3125 0.375 0.68843985 0.40625 0.68843985 0.40625 0.3125 0.4375
		 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875 0.3125 0.5 0.68843985 0.5 0.3125
		 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985 0.5625 0.3125 0.59375 0.68843985
		 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543
		 0.04576458 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125
		 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 0.83749998 0.5 1
		 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875 0.61048543
		 0.73326457 0.65625 0.84375 0 0.125 0 0.25 0.125 0.25 0.125 0.125;
	setAttr ".uvst[0].uvsp[500:749]" 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125
		 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125
		 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75
		 0.375 0.875 0.375 1 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75
		 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625
		 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625
		 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875
		 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625
		 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875
		 1 0.8125 1 0.9375 1 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.25 0.25 0.25 0.125 0.375
		 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875
		 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375
		 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5
		 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625
		 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75
		 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25
		 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875
		 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125
		 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0.375 0.3125 0.375 0.68843985 0.40625
		 0.68843985 0.40625 0.3125 0.4375 0.68843985 0.4375 0.3125 0.46875 0.68843985 0.46875
		 0.3125 0.5 0.68843985 0.5 0.3125 0.53125 0.68843985 0.53125 0.3125 0.5625 0.68843985
		 0.5625 0.3125 0.59375 0.68843985 0.59375 0.3125 0.625 0.68843985 0.625 0.3125 0.5
		 1.4901161e-08 0.5 0.15000001 0.61048543 0.04576458 0.38951457 0.04576458 0.34375
		 0.15625 0.38951457 0.26673543 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543
		 0.95423543 0.5 0.83749998 0.5 1 0.38951457 0.95423543 0.34375 0.84375 0.38951457
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0 0.125 0.125 0.125 0.125
		 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125 0.375 0.25 0.5 0.125 0.5 0.25 0.625
		 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125 0.875 0.25 1 0.125 1 0.25 0.125
		 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375
		 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1
		 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875
		 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75
		 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875;
	setAttr ".uvst[0].uvsp[750:999]" 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875
		 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125
		 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0 0.125 0 0.25 0.125 0.25 0.125 0.125
		 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125
		 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375 0.125 0.375 0.25
		 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1 0.375 0 0.5 0.125
		 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625
		 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0 0.75
		 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0
		 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875
		 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625
		 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125 1 0.9375 1 0 0.125 0 0.25 0.125
		 0.25 0.125 0.125 0.25 0.25 0.25 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625
		 0.25 0.625 0.125 0.75 0.25 0.75 0.125 0.875 0.25 0.875 0.125 1 0.25 1 0.125 0 0.375
		 0.125 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.75 0.375 0.875 0.375 1
		 0.375 0 0.5 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5
		 0 0.625 0.125 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.75 0.625 0.875
		 0.625 1 0.625 0 0.75 0.125 0.75 0.25 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.75 0.75
		 0.875 0.75 1 0.75 0 0.875 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875 0.625 0.875
		 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.6875
		 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125
		 1 0.9375 1 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.25 0.125 0.25 0.25 0.375 0.125
		 0.375 0.25 0.5 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.75 0.125 0.75 0.25 0.875 0.125
		 0.875 0.25 1 0.125 1 0.25 0.125 0.375 0 0.375 0.25 0.375 0.375 0.375 0.5 0.375 0.625
		 0.375 0.75 0.375 0.875 0.375 1 0.375 0.125 0.5 0 0.5 0.25 0.5 0.375 0.5 0.5 0.5 0.625
		 0.5 0.75 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.25 0.625 0.375 0.625 0.5 0.625
		 0.625 0.625 0.75 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.25 0.75 0.375 0.75
		 0.5 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75 0.125 0.875 0 0.875 0.25 0.875 0.375
		 0.875 0.5 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.1875 0 0.3125
		 0 0.4375 0 0.5625 0 0.6875 0 0.8125 0 0.9375 0 0.0625 1 0.1875 1;
	setAttr ".uvst[0].uvsp[1000:1246]" 0.3125 1 0.4375 1 0.5625 1 0.6875 1 0.8125
		 1 0.9375 1 0.125 0.125 0.25 0.125 0.25 0.25 0.125 0.25 0.375 0.125 0.375 0.25 0.5
		 0.125 0.5 0.25 0.625 0.125 0.625 0.25 0.25 0.375 0.125 0.375 0.375 0.375 0.5 0.375
		 0.625 0.375 0.25 0.5 0.125 0.5 0.375 0.5 0.5 0.5 0.625 0.5 0.25 0.625 0.125 0.625
		 0.375 0.625 0.5 0.625 0.625 0.625 0.25 0.75 0.125 0.75 0.375 0.75 0.5 0.75 0.625
		 0.75 0.25 0.875 0.125 0.875 0.375 0.875 0.5 0.875 0.625 0.875 0.1875 0 0.3125 0 0.4375
		 0 0.5625 0 0.1875 1 0.3125 1 0.4375 1 0.5625 1 0.125 0.125 0.125 0.25 0.25 0.25 0.25
		 0.125 0.375 0.25 0.375 0.125 0.5 0.25 0.5 0.125 0.625 0.25 0.625 0.125 0.125 0.375
		 0.25 0.375 0.375 0.375 0.5 0.375 0.625 0.375 0.125 0.5 0.25 0.5 0.375 0.5 0.5 0.5
		 0.625 0.5 0.125 0.625 0.25 0.625 0.375 0.625 0.5 0.625 0.625 0.625 0.125 0.75 0.25
		 0.75 0.375 0.75 0.5 0.75 0.625 0.75 0.125 0.875 0.25 0.875 0.375 0.875 0.5 0.875
		 0.625 0.875 0.1875 0 0.3125 0 0.4375 0 0.5625 0 0.1875 1 0.3125 1 0.4375 1 0.5625
		 1 0.375 0.3125 0.375 0.68843985 0.40625 0.68843985 0.40625 0.3125 0.4375 0.68843985
		 0.4375 0.3125 0.46875 0.68843985 0.46875 0.3125 0.5 0.68843985 0.5 0.3125 0.53125
		 0.68843985 0.53125 0.3125 0.5625 0.68843985 0.5625 0.3125 0.59375 0.68843985 0.59375
		 0.3125 0.625 0.68843985 0.625 0.3125 0.5 1.4901161e-08 0.5 0.15000001 0.61048543
		 0.04576458 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543 0.5 0.3125
		 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 0.83749998 0.5 1
		 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875 0.61048543
		 0.73326457 0.65625 0.84375 0.375 0.3125 0.40625 0.3125 0.40625 0.68843985 0.375 0.68843985
		 0.4375 0.3125 0.4375 0.68843985 0.46875 0.3125 0.46875 0.68843985 0.5 0.3125 0.5
		 0.68843985 0.53125 0.3125 0.53125 0.68843985 0.5625 0.3125 0.5625 0.68843985 0.59375
		 0.3125 0.59375 0.68843985 0.625 0.3125 0.625 0.68843985 0.5 1.4901161e-08 0.61048543
		 0.04576458 0.5 0.15000001 0.38951457 0.04576458 0.34375 0.15625 0.38951457 0.26673543
		 0.5 0.3125 0.61048543 0.26673543 0.65625 0.15625 0.61048543 0.95423543 0.5 1 0.5
		 0.83749998 0.38951457 0.95423543 0.34375 0.84375 0.38951457 0.73326457 0.5 0.6875
		 0.61048543 0.73326457 0.65625 0.84375 0.5 0.125 0.625 0.125 0.625 0.25 0.5 0.25 0.625
		 0.5 0.5 0.5 0.5 0.75 0.625 0.75 0.625 1 0.5 1 0.875 0.125 0.875 0.25 0.125 0 0.375
		 0 0.375 0.125 0.125 0.125 0.375 0.25 0.375 0.5 0.375 0.75 0.375 1 0.5 0 0.625 0 0.875
		 0 0.125 0.25 0.5 0 0.625 0 0.625 0.25 0.5 0.25 0.375 0.375 0.625 0.375 0.625 0.4375
		 0.375 0.4375 0.375 0.5 0.625 0.5 0.625 0.75 0.375 0.75 0.625 1 0.5 1 0.375 1 0.875
		 0 0.875 0.25 0.8125 0.25 0.75 0.25 0.6875 0.25 0.125 0 0.375 0 0.375 0.25 0.3125
		 0.25 0.25 0.25 0.1875 0.25 0.125 0.25 0.375 0.3125 0.625 0.3125 0.375 0 0.625 0 0.625
		 0.25 0.375 0.25 0.625 0.33333334 0.375 0.33333334 0.625 0.41666669 0.375 0.41666669
		 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 0.83333331 0.375 0.83333331 0.625
		 0.91666663 0.375 0.91666663 0.625 0.99999994 0.375 0.99999994 0.79166669 0 0.875
		 0 0.875 0.25 0.79166669 0.25 0.70833337 0 0.70833337 0.25 0.125 0 0.20833334 0 0.20833334
		 0.25 0.125 0.25 0.29166669 0 0.29166669 0.25;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 847 ".vt";
	setAttr ".vt[0:165]"  0.54093766 6.14291573 -0.31881464 0.54093778 6.26889515 -0.37099689
		 0.54093766 6.39487457 -0.31881464 0.54093766 6.44705772 -0.19283523 0.54093766 6.39487457 -0.066855878
		 0.54093778 6.26889515 -0.014673568 0.54093766 6.14291573 -0.066855878 0.54093766 6.090733528 -0.19283523
		 0.64538318 6.14291668 -0.31881464 0.64538318 6.26889515 -0.37099689 0.64538318 6.39487457 -0.31881464
		 0.64538318 6.44705772 -0.19283523 0.64538318 6.39487457 -0.066855878 0.64538318 6.26889515 -0.014673568
		 0.64538318 6.14291668 -0.066855878 0.64538318 6.090733528 -0.19283523 0.54093778 6.26889515 -0.19283523
		 0.64538318 6.26889515 -0.19283523 -0.54360032 6.14291573 -0.31881464 -0.54360032 6.26889515 -0.37099689
		 -0.64804572 6.26889515 -0.37099689 -0.64804572 6.14291668 -0.31881464 -0.54360032 6.39487457 -0.31881464
		 -0.64804572 6.39487457 -0.31881464 -0.54360032 6.44705772 -0.19283523 -0.64804572 6.44705772 -0.19283523
		 -0.54360032 6.39487457 -0.066855878 -0.64804572 6.39487457 -0.066855878 -0.54360032 6.26889515 -0.014673568
		 -0.64804572 6.26889515 -0.014673568 -0.54360032 6.14291573 -0.066855878 -0.64804572 6.14291668 -0.066855878
		 -0.54360032 6.090733528 -0.19283523 -0.64804572 6.090733528 -0.19283523 -0.54360032 6.26889515 -0.19283523
		 -0.64804572 6.26889515 -0.19283523 1.063732505 4.76462269 -0.40774965 1.063732505 4.90883684 -0.46748507
		 1.063732505 5.053050995 -0.40774965 1.063732505 5.11278629 -0.2635355 1.063732505 5.053050995 -0.11932141
		 1.063732505 4.90883684 -0.059585959 1.063732505 4.76462269 -0.11932141 1.063732505 4.70488739 -0.2635355
		 1.17926061 4.64236403 -0.53000844 1.17926061 4.90883684 -0.64038515 1.17926061 5.17530966 -0.53000844
		 1.17926061 5.28568649 -0.2635355 1.17926061 5.17530966 0.0029373914 1.17926061 4.90883684 0.11331408
		 1.17926061 4.64236403 0.0029373914 1.17926061 4.53198719 -0.2635355 1.35216069 4.56067324 -0.61169916
		 1.35216069 4.90883684 -0.75591326 1.35216069 5.25700045 -0.61169916 1.35216069 5.4012146 -0.2635355
		 1.35216069 5.25700045 0.08462812 1.35216069 4.90883684 0.22884221 1.35216069 4.56067324 0.08462815
		 1.35216069 4.41645908 -0.2635355 1.55611026 4.53198719 -0.64038515 1.55611026 4.90883684 -0.79648137
		 1.55611026 5.28568649 -0.64038515 1.55611026 5.44178247 -0.2635355 1.55611026 5.28568649 0.11331408
		 1.55611026 4.90883684 0.26941031 1.55611026 4.53198719 0.11331411 1.55611026 4.37589073 -0.2635355
		 1.76005983 4.56067324 -0.61169916 1.76005983 4.90883684 -0.75591326 1.76005983 5.25700045 -0.61169916
		 1.76005983 5.4012146 -0.2635355 1.76005983 5.25700045 0.08462812 1.76005983 4.90883684 0.22884221
		 1.76005983 4.56067324 0.08462815 1.76005983 4.41645908 -0.2635355 1.93295991 4.64236403 -0.53000844
		 1.93295991 4.90883684 -0.64038515 1.93295991 5.17530966 -0.53000844 1.93295991 5.28568649 -0.2635355
		 1.93295991 5.17530966 0.0029373914 1.93295991 4.90883684 0.11331408 1.93295991 4.64236403 0.0029373914
		 1.93295991 4.53198719 -0.2635355 2.04848814 4.76462269 -0.40774965 2.04848814 4.90883684 -0.46748507
		 2.04848814 5.053050995 -0.40774965 2.04848814 5.11278629 -0.2635355 2.04848814 5.053050995 -0.11932141
		 2.04848814 4.90883684 -0.059585959 2.04848814 4.76462269 -0.11932141 2.04848814 4.70488739 -0.2635355
		 1.023164392 4.90883684 -0.2635355 2.089056015 4.90883684 -0.2635355 3.18949008 4.6557765 -0.55920082
		 2.895401 4.6557765 -0.68101656 2.60131192 4.6557765 -0.55920082 2.47949624 4.6557765 -0.26511168
		 2.60131192 4.6557765 0.028977454 2.895401 4.6557765 0.15079319 3.18949008 4.6557765 0.028977484
		 3.311306 4.6557765 -0.26511168 3.18949008 5.14644957 -0.55920082 2.895401 5.14644957 -0.68101656
		 2.60131192 5.14644957 -0.55920082 2.47949624 5.14644957 -0.26511168 2.60131192 5.14644957 0.028977454
		 2.895401 5.14644957 0.15079319 3.18949008 5.14644957 0.028977484 3.311306 5.14644957 -0.26511168
		 2.895401 4.6557765 -0.26511168 2.895401 5.14644957 -0.26511168 3.78317904 4.87025785 -0.33011442
		 3.78331375 4.93866158 -0.35845023 3.7834487 5.007062912 -0.33011442 3.78350449 5.035396576 -0.26170564
		 3.7834487 5.007062912 -0.19329689 3.78331375 4.93866158 -0.16496103 3.78317904 4.87025785 -0.19329689
		 3.78312325 4.84192705 -0.26170564 3.8357327 4.81237841 -0.38810855 3.83598185 4.93876934 -0.4404664
		 3.83623099 5.065159321 -0.38810855 3.83633471 5.1175127 -0.26170564 3.83623099 5.065159321 -0.13530274
		 3.83598185 4.93876934 -0.082945004 3.8357327 4.81237841 -0.1353028 3.83562946 4.76002645 -0.26170564
		 3.91447926 4.77379417 -0.42685908 3.91480517 4.93893147 -0.49526787 3.91513014 5.10406828 -0.42685908
		 3.91526532 5.17247009 -0.26170564 3.91513014 5.10406828 -0.096552372 3.91480517 4.93893147 -0.028143585
		 3.91447902 4.77379417 -0.096552372 3.91434407 4.70539284 -0.26170564 4.0074310303 4.76037884 -0.4404664
		 4.0077829361 4.93912172 -0.51451147 4.0081348419 5.11786461 -0.4404664 4.0082807541 5.19190216 -0.26170564
		 4.0081348419 5.11786461 -0.082945004 4.0077829361 4.93912172 -0.0088998079 4.0074310303 4.76037884 -0.082945004
		 4.0072851181 4.68634081 -0.26170564 4.10050774 4.77417183 -0.42685908 4.10076094 4.93931293 -0.49526787
		 4.10108662 5.10444975 -0.42685908 4.10122156 5.17285109 -0.26170564 4.10108662 5.10444975 -0.096552372
		 4.10076094 4.93931293 -0.028143585 4.10050774 4.77417183 -0.096552372 4.10050774 4.70576382 -0.26170564
		 4.1825242 4.81292248 -0.38810855 4.1825242 4.93932581 -0.4404664 4.18252373 5.065728188 -0.38810855
		 4.18252373 5.11808681 -0.26170564 4.18252373 5.065728188 -0.13530274 4.1825242 4.93932581 -0.082945004
		 4.1825242 4.81292248 -0.1353028 4.1825242 4.7605648 -0.26170564 4.23732567 4.87091637 -0.33011442
		 4.23732519 4.93932581 -0.35845023 4.23732567 5.0077338219 -0.33011442 4.23732567 5.036070347 -0.26170564
		 4.23732567 5.0077338219 -0.19329689 4.23732519 4.93932581 -0.16496103;
	setAttr ".vt[166:331]" 4.23732567 4.87091637 -0.19329689 4.23732519 4.84258127 -0.26170564
		 3.76481938 4.93862391 -0.26170564 4.25656939 4.93932533 -0.26170564 4.19114685 4.89899302 0.14361924
		 4.19114685 4.91869783 0.19119105 4.19114685 4.89899302 0.23876265 4.19114685 4.85142136 0.25846612
		 4.19114685 4.80385017 0.23876283 4.19114685 4.78414488 0.19119115 4.19114685 4.80385017 0.14361945
		 4.19114685 4.85142136 0.12391389 4.22925615 4.93932247 0.10328927 4.22925615 4.97573185 0.19119035
		 4.22925615 4.93932199 0.27909157 4.22925615 4.85142136 0.31550211 4.22925615 4.76352024 0.27909192
		 4.22925615 4.72711086 0.19119056 4.22925615 4.76352024 0.10328939 4.22925615 4.85142136 0.066881031
		 4.28629017 4.96626902 0.076343201 4.28629017 5.013841152 0.19119081 4.28629017 4.96626902 0.30603871
		 4.28629017 4.85142136 0.35361052 4.28629017 4.7365737 0.30603883 4.28629017 4.68900204 0.19119102
		 4.28629065 4.73657322 0.076343231 4.28629065 4.85142136 0.028771527 4.35356665 4.97573185 0.066880912
		 4.35356665 5.02722311 0.19119021 4.35356665 4.97573185 0.31550089 4.35356665 4.85142136 0.36699277
		 4.35356665 4.72711086 0.3155013 4.35356665 4.6756196 0.19119057 4.35356665 4.72711039 0.066880979
		 4.35356665 4.85142136 0.015389081 4.42084312 4.96626902 0.076343201 4.42084312 5.013841152 0.19119081
		 4.42084312 4.96626902 0.30603871 4.42084312 4.85142136 0.35361052 4.42084312 4.7365737 0.30603883
		 4.42084312 4.68900204 0.19119102 4.42084312 4.73657322 0.076343231 4.42084312 4.85142136 0.028771527
		 4.47787714 4.93932247 0.10328978 4.47787714 4.97573185 0.19119087 4.47787666 4.93932199 0.2790921
		 4.47787714 4.85142136 0.31550163 4.47787666 4.76352024 0.27909225 4.47787714 4.72711086 0.19119105
		 4.47787666 4.76352024 0.10328989 4.47787714 4.85142136 0.06688039 4.51598597 4.89899302 0.14361924
		 4.51598597 4.91869783 0.19119105 4.51598597 4.89899302 0.23876265 4.51598597 4.85142136 0.25846714
		 4.51598597 4.80385017 0.23876283 4.51598597 4.78414488 0.19119115 4.51598597 4.80385017 0.14361945
		 4.51598597 4.85142136 0.12391389 4.17776489 4.85142136 0.19119102 4.52936792 4.85142136 0.19119053
		 4.95888615 4.96303606 -0.71072167 4.86656475 5.0012764931 -0.71072179 4.77424288 4.96303606 -0.71072167
		 4.73600292 4.87071419 -0.71072114 4.77424288 4.77839279 -0.71072102 4.86656475 4.74015236 -0.71072066
		 4.95888567 4.77839279 -0.71072102 4.99712658 4.87071419 -0.71072114 4.95888615 4.96303606 0.15423538
		 4.86656475 5.0012764931 0.1542353 4.77424288 4.96303606 0.15423538 4.73600292 4.87071419 0.15423548
		 4.77424288 4.77839279 0.15423568 4.86656475 4.74015236 0.15423585 4.95888567 4.77839279 0.15423568
		 4.99712658 4.87071419 0.15423548 4.86656475 4.87071419 -0.71072114 4.86656475 4.87071419 0.15423548
		 -1.063732505 4.76462269 -0.40774965 -1.063732505 4.90883684 -0.46748507 -1.17926061 4.90883684 -0.64038515
		 -1.17926061 4.64236403 -0.53000844 -1.063732505 5.053050995 -0.40774965 -1.17926061 5.17530966 -0.53000844
		 -1.063732505 5.11278629 -0.2635355 -1.17926061 5.28568649 -0.2635355 -1.063732505 5.053050995 -0.11932141
		 -1.17926061 5.17530966 0.0029373914 -1.063732505 4.90883684 -0.059585959 -1.17926061 4.90883684 0.11331408
		 -1.063732505 4.76462269 -0.11932141 -1.17926061 4.64236403 0.0029373914 -1.063732505 4.70488739 -0.2635355
		 -1.17926061 4.53198719 -0.2635355 -1.35216069 4.90883684 -0.75591326 -1.35216069 4.56067324 -0.61169916
		 -1.35216069 5.25700045 -0.61169916 -1.35216069 5.4012146 -0.2635355 -1.35216069 5.25700045 0.08462812
		 -1.35216069 4.90883684 0.22884221 -1.35216069 4.56067324 0.08462815 -1.35216069 4.41645908 -0.2635355
		 -1.55611026 4.90883684 -0.79648137 -1.55611026 4.53198719 -0.64038515 -1.55611026 5.28568649 -0.64038515
		 -1.55611026 5.44178247 -0.2635355 -1.55611026 5.28568649 0.11331408 -1.55611026 4.90883684 0.26941031
		 -1.55611026 4.53198719 0.11331411 -1.55611026 4.37589073 -0.2635355 -1.76005983 4.90883684 -0.75591326
		 -1.76005983 4.56067324 -0.61169916 -1.76005983 5.25700045 -0.61169916 -1.76005983 5.4012146 -0.2635355
		 -1.76005983 5.25700045 0.08462812 -1.76005983 4.90883684 0.22884221 -1.76005983 4.56067324 0.08462815
		 -1.76005983 4.41645908 -0.2635355 -1.93295991 4.90883684 -0.64038515 -1.93295991 4.64236403 -0.53000844
		 -1.93295991 5.17530966 -0.53000844 -1.93295991 5.28568649 -0.2635355 -1.93295991 5.17530966 0.0029373914
		 -1.93295991 4.90883684 0.11331408 -1.93295991 4.64236403 0.0029373914 -1.93295991 4.53198719 -0.2635355
		 -2.04848814 4.90883684 -0.46748507 -2.04848814 4.76462269 -0.40774965 -2.04848814 5.053050995 -0.40774965
		 -2.04848814 5.11278629 -0.2635355 -2.04848814 5.053050995 -0.11932141 -2.04848814 4.90883684 -0.059585959
		 -2.04848814 4.76462269 -0.11932141 -2.04848814 4.70488739 -0.2635355 -1.023164392 4.90883684 -0.2635355
		 -2.089056015 4.90883684 -0.2635355 -3.18949008 4.6557765 -0.55920082 -2.895401 4.6557765 -0.68101656
		 -2.895401 5.14644957 -0.68101656 -3.18949008 5.14644957 -0.55920082 -2.60131192 4.6557765 -0.55920082
		 -2.60131192 5.14644957 -0.55920082 -2.47949624 4.6557765 -0.26511168 -2.47949624 5.14644957 -0.26511168
		 -2.60131192 4.6557765 0.028977454 -2.60131192 5.14644957 0.028977454 -2.895401 4.6557765 0.15079319
		 -2.895401 5.14644957 0.15079319 -3.18949008 4.6557765 0.028977484 -3.18949008 5.14644957 0.028977484
		 -3.311306 4.6557765 -0.26511168 -3.311306 5.14644957 -0.26511168 -2.895401 4.6557765 -0.26511168
		 -2.895401 5.14644957 -0.26511168 -3.78317904 4.87025785 -0.33011442 -3.78331375 4.93866158 -0.35845023
		 -3.83598185 4.93876934 -0.4404664 -3.8357327 4.81237841 -0.38810855 -3.7834487 5.007062912 -0.33011442
		 -3.83623099 5.065159321 -0.38810855 -3.78350449 5.035396576 -0.26170564 -3.83633471 5.1175127 -0.26170564
		 -3.7834487 5.007062912 -0.19329689 -3.83623099 5.065159321 -0.13530274;
	setAttr ".vt[332:497]" -3.78331375 4.93866158 -0.16496103 -3.83598185 4.93876934 -0.082945004
		 -3.78317904 4.87025785 -0.19329689 -3.8357327 4.81237841 -0.1353028 -3.78312325 4.84192705 -0.26170564
		 -3.83562946 4.76002645 -0.26170564 -3.91480517 4.93893147 -0.49526787 -3.91447926 4.77379417 -0.42685908
		 -3.91513014 5.10406828 -0.42685908 -3.91526532 5.17247009 -0.26170564 -3.91513014 5.10406828 -0.096552372
		 -3.91480517 4.93893147 -0.028143585 -3.91447902 4.77379417 -0.096552372 -3.91434407 4.70539284 -0.26170564
		 -4.0077829361 4.93912172 -0.51451147 -4.0074310303 4.76037884 -0.4404664 -4.0081348419 5.11786461 -0.4404664
		 -4.0082807541 5.19190216 -0.26170564 -4.0081348419 5.11786461 -0.082945004 -4.0077829361 4.93912172 -0.0088998079
		 -4.0074310303 4.76037884 -0.082945004 -4.0072851181 4.68634081 -0.26170564 -4.10076094 4.93931293 -0.49526787
		 -4.10050774 4.77417183 -0.42685908 -4.10108662 5.10444975 -0.42685908 -4.10122156 5.17285109 -0.26170564
		 -4.10108662 5.10444975 -0.096552372 -4.10076094 4.93931293 -0.028143585 -4.10050774 4.77417183 -0.096552372
		 -4.10050774 4.70576382 -0.26170564 -4.1825242 4.93932581 -0.4404664 -4.1825242 4.81292248 -0.38810855
		 -4.18252373 5.065728188 -0.38810855 -4.18252373 5.11808681 -0.26170564 -4.18252373 5.065728188 -0.13530274
		 -4.1825242 4.93932581 -0.082945004 -4.1825242 4.81292248 -0.1353028 -4.1825242 4.7605648 -0.26170564
		 -4.23732519 4.93932581 -0.35845023 -4.23732567 4.87091637 -0.33011442 -4.23732567 5.0077338219 -0.33011442
		 -4.23732567 5.036070347 -0.26170564 -4.23732567 5.0077338219 -0.19329689 -4.23732519 4.93932581 -0.16496103
		 -4.23732567 4.87091637 -0.19329689 -4.23732519 4.84258127 -0.26170564 -3.76481938 4.93862391 -0.26170564
		 -4.25656939 4.93932533 -0.26170564 -4.19114685 4.89899302 0.14361924 -4.19114685 4.91869783 0.19119105
		 -4.22925615 4.97573185 0.19119035 -4.22925615 4.93932247 0.10328927 -4.19114685 4.89899302 0.23876265
		 -4.22925615 4.93932199 0.27909157 -4.19114685 4.85142136 0.25846612 -4.22925615 4.85142136 0.31550211
		 -4.19114685 4.80385017 0.23876283 -4.22925615 4.76352024 0.27909192 -4.19114685 4.78414488 0.19119115
		 -4.22925615 4.72711086 0.19119056 -4.19114685 4.80385017 0.14361945 -4.22925615 4.76352024 0.10328939
		 -4.19114685 4.85142136 0.12391389 -4.22925615 4.85142136 0.066881031 -4.28629017 5.013841152 0.19119081
		 -4.28629017 4.96626902 0.076343201 -4.28629017 4.96626902 0.30603871 -4.28629017 4.85142136 0.35361052
		 -4.28629017 4.7365737 0.30603883 -4.28629017 4.68900204 0.19119102 -4.28629065 4.73657322 0.076343231
		 -4.28629065 4.85142136 0.028771527 -4.35356665 5.02722311 0.19119021 -4.35356665 4.97573185 0.066880912
		 -4.35356665 4.97573185 0.31550089 -4.35356665 4.85142136 0.36699277 -4.35356665 4.72711086 0.3155013
		 -4.35356665 4.6756196 0.19119057 -4.35356665 4.72711039 0.066880979 -4.35356665 4.85142136 0.015389081
		 -4.42084312 5.013841152 0.19119081 -4.42084312 4.96626902 0.076343201 -4.42084312 4.96626902 0.30603871
		 -4.42084312 4.85142136 0.35361052 -4.42084312 4.7365737 0.30603883 -4.42084312 4.68900204 0.19119102
		 -4.42084312 4.73657322 0.076343231 -4.42084312 4.85142136 0.028771527 -4.47787714 4.97573185 0.19119087
		 -4.47787714 4.93932247 0.10328978 -4.47787666 4.93932199 0.2790921 -4.47787714 4.85142136 0.31550163
		 -4.47787666 4.76352024 0.27909225 -4.47787714 4.72711086 0.19119105 -4.47787666 4.76352024 0.10328989
		 -4.47787714 4.85142136 0.06688039 -4.51598597 4.91869783 0.19119105 -4.51598597 4.89899302 0.14361924
		 -4.51598597 4.89899302 0.23876265 -4.51598597 4.85142136 0.25846714 -4.51598597 4.80385017 0.23876283
		 -4.51598597 4.78414488 0.19119115 -4.51598597 4.80385017 0.14361945 -4.51598597 4.85142136 0.12391389
		 -4.17776489 4.85142136 0.19119102 -4.52936792 4.85142136 0.19119053 -4.95888615 4.96303606 -0.71072167
		 -4.86656475 5.0012764931 -0.71072179 -4.86656475 5.0012764931 0.1542353 -4.95888615 4.96303606 0.15423538
		 -4.77424288 4.96303606 -0.71072167 -4.77424288 4.96303606 0.15423538 -4.73600292 4.87071419 -0.71072114
		 -4.73600292 4.87071419 0.15423548 -4.77424288 4.77839279 -0.71072102 -4.77424288 4.77839279 0.15423568
		 -4.86656475 4.74015236 -0.71072066 -4.86656475 4.74015236 0.15423585 -4.95888567 4.77839279 -0.71072102
		 -4.95888567 4.77839279 0.15423568 -4.99712658 4.87071419 -0.71072114 -4.99712658 4.87071419 0.15423548
		 -4.86656475 4.87071419 -0.71072114 -4.86656475 4.87071419 0.15423548 0.39683276 2.93052316 -0.24366984
		 0.39683276 3.0046696663 -0.27438265 0.3968327 3.078817606 -0.24366984 0.39683282 3.10952926 -0.16952248
		 0.3968327 3.078817606 -0.095375121 0.39683276 3.0046696663 -0.0646623 0.39683276 2.93052316 -0.095375121
		 0.39683276 2.89981008 -0.16952248 0.45623124 2.86766386 -0.30652893 0.45623124 3.0046699047 -0.36327881
		 0.4562313 3.14167619 -0.30652893 0.4562313 3.19842577 -0.16952248 0.4562313 3.14167619 -0.032516032
		 0.45623124 3.0046699047 0.024233833 0.45623124 2.86766386 -0.032516032 0.45623124 2.81091404 -0.16952248
		 0.54512745 2.82566237 -0.34853005 0.54512745 3.0046699047 -0.42267728 0.54512745 3.18367767 -0.34853005
		 0.54512745 3.2578249 -0.16952248 0.54512745 3.18367767 0.0094850957 0.54512745 3.0046699047 0.083632335
		 0.54512745 2.82566237 0.0094850957 0.54512745 2.75151515 -0.16952248 0.64998764 2.81091356 -0.36327881
		 0.64998764 3.0046696663 -0.44353539 0.64998782 3.19842625 -0.36327881 0.64998782 3.27868271 -0.16952248
		 0.64998782 3.19842625 0.024233833 0.64998764 3.0046696663 0.10449041 0.64998764 2.81091356 0.024233833
		 0.64998764 2.73065686 -0.16952248 0.75484782 2.82566261 -0.34853005 0.75484782 3.0046703815 -0.42267728
		 0.75484782 3.18367767 -0.34853005 0.75484782 3.2578249 -0.16952248 0.75484782 3.18367767 0.0094850957
		 0.75484782 3.0046703815 0.083632335 0.75484782 2.82566261 0.0094850957 0.75484782 2.75151539 -0.16952248
		 0.84374404 2.86766362 -0.30652893 0.84374404 3.0046696663 -0.36327881;
	setAttr ".vt[498:663]" 0.84374416 3.14167643 -0.30652893 0.84374416 3.19842625 -0.16952248
		 0.84374416 3.14167643 -0.032516032 0.84374404 3.0046696663 0.024233833 0.84374404 2.86766362 -0.032516032
		 0.84374404 2.81091356 -0.16952248 0.90314257 2.93052268 -0.24366984 0.90314257 3.0046699047 -0.27438265
		 0.90314257 3.078817129 -0.24366984 0.90314257 3.10952973 -0.16952248 0.90314257 3.078817129 -0.095375121
		 0.90314257 3.0046699047 -0.0646623 0.90314257 2.93052268 -0.095375121 0.90314257 2.8998096 -0.16952248
		 0.37597471 3.00467062 -0.16952248 0.9240005 3.0046699047 -0.16952248 -0.39683276 2.93052316 -0.24366984
		 -0.39683276 3.0046696663 -0.27438265 -0.45623124 3.0046699047 -0.36327881 -0.45623124 2.86766386 -0.30652893
		 -0.3968327 3.078817606 -0.24366984 -0.4562313 3.14167619 -0.30652893 -0.39683282 3.10952926 -0.16952248
		 -0.4562313 3.19842577 -0.16952248 -0.3968327 3.078817606 -0.095375121 -0.4562313 3.14167619 -0.032516032
		 -0.39683276 3.0046696663 -0.0646623 -0.45623124 3.0046699047 0.024233833 -0.39683276 2.93052316 -0.095375121
		 -0.45623124 2.86766386 -0.032516032 -0.39683276 2.89981008 -0.16952248 -0.45623124 2.81091404 -0.16952248
		 -0.54512745 3.0046699047 -0.42267728 -0.54512745 2.82566237 -0.34853005 -0.54512745 3.18367767 -0.34853005
		 -0.54512745 3.2578249 -0.16952248 -0.54512745 3.18367767 0.0094850957 -0.54512745 3.0046699047 0.083632335
		 -0.54512745 2.82566237 0.0094850957 -0.54512745 2.75151515 -0.16952248 -0.64998764 3.0046696663 -0.44353539
		 -0.64998764 2.81091356 -0.36327881 -0.64998782 3.19842625 -0.36327881 -0.64998782 3.27868271 -0.16952248
		 -0.64998782 3.19842625 0.024233833 -0.64998764 3.0046696663 0.10449041 -0.64998764 2.81091356 0.024233833
		 -0.64998764 2.73065686 -0.16952248 -0.75484782 3.0046703815 -0.42267728 -0.75484782 2.82566261 -0.34853005
		 -0.75484782 3.18367767 -0.34853005 -0.75484782 3.2578249 -0.16952248 -0.75484782 3.18367767 0.0094850957
		 -0.75484782 3.0046703815 0.083632335 -0.75484782 2.82566261 0.0094850957 -0.75484782 2.75151539 -0.16952248
		 -0.84374404 3.0046696663 -0.36327881 -0.84374404 2.86766362 -0.30652893 -0.84374416 3.14167643 -0.30652893
		 -0.84374416 3.19842625 -0.16952248 -0.84374416 3.14167643 -0.032516032 -0.84374404 3.0046696663 0.024233833
		 -0.84374404 2.86766362 -0.032516032 -0.84374404 2.81091356 -0.16952248 -0.90314257 3.0046699047 -0.27438265
		 -0.90314257 2.93052268 -0.24366984 -0.90314257 3.078817129 -0.24366984 -0.90314257 3.10952973 -0.16952248
		 -0.90314257 3.078817129 -0.095375121 -0.90314257 3.0046699047 -0.0646623 -0.90314257 2.93052268 -0.095375121
		 -0.90314257 2.8998096 -0.16952248 -0.37597471 3.00467062 -0.16952248 -0.9240005 3.0046699047 -0.16952248
		 -0.39683276 1.61583257 -0.24366984 -0.39683276 1.68997908 -0.27438265 -0.45623124 1.68997931 -0.36327881
		 -0.45623124 1.55297327 -0.30652893 -0.3968327 1.76412702 -0.24366984 -0.4562313 1.8269856 -0.30652893
		 -0.39683282 1.79483867 -0.16952248 -0.4562313 1.88373518 -0.16952248 -0.3968327 1.76412702 -0.095375121
		 -0.4562313 1.8269856 -0.032516032 -0.39683276 1.68997908 -0.0646623 -0.45623124 1.68997931 0.024233833
		 -0.39683276 1.61583257 -0.095375121 -0.45623124 1.55297327 -0.032516032 -0.39683276 1.58511949 -0.16952248
		 -0.45623124 1.49622345 -0.16952248 -0.54512745 1.68997931 -0.42267728 -0.54512745 1.51097178 -0.34853005
		 -0.54512745 1.86898708 -0.34853005 -0.54512745 1.94313431 -0.16952248 -0.54512745 1.86898708 0.0094850957
		 -0.54512745 1.68997931 0.083632335 -0.54512745 1.51097178 0.0094850957 -0.54512745 1.43682456 -0.16952248
		 -0.64998764 1.68997908 -0.44353539 -0.64998764 1.49622297 -0.36327881 -0.64998782 1.88373566 -0.36327881
		 -0.64998782 1.96399212 -0.16952248 -0.64998782 1.88373566 0.024233833 -0.64998764 1.68997908 0.10449041
		 -0.64998764 1.49622297 0.024233833 -0.64998764 1.41596627 -0.16952248 -0.75484782 1.68997979 -0.42267728
		 -0.75484782 1.51097202 -0.34853005 -0.75484782 1.86898708 -0.34853005 -0.75484782 1.94313431 -0.16952248
		 -0.75484782 1.86898708 0.0094850957 -0.75484782 1.68997979 0.083632335 -0.75484782 1.51097202 0.0094850957
		 -0.75484782 1.4368248 -0.16952248 -0.84374404 1.68997908 -0.36327881 -0.84374404 1.55297303 -0.30652893
		 -0.84374416 1.82698584 -0.30652893 -0.84374416 1.88373566 -0.16952248 -0.84374416 1.82698584 -0.032516032
		 -0.84374404 1.68997908 0.024233833 -0.84374404 1.55297303 -0.032516032 -0.84374404 1.49622297 -0.16952248
		 -0.90314257 1.68997931 -0.27438265 -0.90314257 1.61583209 -0.24366984 -0.90314257 1.76412654 -0.24366984
		 -0.90314257 1.79483914 -0.16952248 -0.90314257 1.76412654 -0.095375121 -0.90314257 1.68997931 -0.0646623
		 -0.90314257 1.61583209 -0.095375121 -0.90314257 1.58511901 -0.16952248 -0.37597471 1.68998003 -0.16952248
		 -0.9240005 1.68997931 -0.16952248 0.39683276 1.61583257 -0.24366984 0.39683276 1.68997908 -0.27438265
		 0.3968327 1.76412702 -0.24366984 0.39683282 1.79483867 -0.16952248 0.3968327 1.76412702 -0.095375121
		 0.39683276 1.68997908 -0.0646623 0.39683276 1.61583257 -0.095375121 0.39683276 1.58511949 -0.16952248
		 0.45623124 1.55297327 -0.30652893 0.45623124 1.68997931 -0.36327881 0.4562313 1.8269856 -0.30652893
		 0.4562313 1.88373518 -0.16952248 0.4562313 1.8269856 -0.032516032 0.45623124 1.68997931 0.024233833
		 0.45623124 1.55297327 -0.032516032 0.45623124 1.49622345 -0.16952248 0.54512745 1.51097178 -0.34853005
		 0.54512745 1.68997931 -0.42267728 0.54512745 1.86898708 -0.34853005 0.54512745 1.94313431 -0.16952248
		 0.54512745 1.86898708 0.0094850957 0.54512745 1.68997931 0.083632335 0.54512745 1.51097178 0.0094850957
		 0.54512745 1.43682456 -0.16952248 0.64998764 1.49622297 -0.36327881 0.64998764 1.68997908 -0.44353539
		 0.64998782 1.88373566 -0.36327881 0.64998782 1.96399212 -0.16952248 0.64998782 1.88373566 0.024233833
		 0.64998764 1.68997908 0.10449041 0.64998764 1.49622297 0.024233833 0.64998764 1.41596627 -0.16952248
		 0.75484782 1.51097202 -0.34853005 0.75484782 1.68997979 -0.42267728;
	setAttr ".vt[664:829]" 0.75484782 1.86898708 -0.34853005 0.75484782 1.94313431 -0.16952248
		 0.75484782 1.86898708 0.0094850957 0.75484782 1.68997979 0.083632335 0.75484782 1.51097202 0.0094850957
		 0.75484782 1.4368248 -0.16952248 0.84374404 1.55297303 -0.30652893 0.84374404 1.68997908 -0.36327881
		 0.84374416 1.82698584 -0.30652893 0.84374416 1.88373566 -0.16952248 0.84374416 1.82698584 -0.032516032
		 0.84374404 1.68997908 0.024233833 0.84374404 1.55297303 -0.032516032 0.84374404 1.49622297 -0.16952248
		 0.90314257 1.61583209 -0.24366984 0.90314257 1.68997931 -0.27438265 0.90314257 1.76412654 -0.24366984
		 0.90314257 1.79483914 -0.16952248 0.90314257 1.76412654 -0.095375121 0.90314257 1.68997931 -0.0646623
		 0.90314257 1.61583209 -0.095375121 0.90314257 1.58511901 -0.16952248 0.37597471 1.68998003 -0.16952248
		 0.9240005 1.68997931 -0.16952248 0.43378392 0.35836911 -0.25907698 0.43378392 0.4216938 -0.23284708
		 0.43378398 0.44792372 -0.16952248 0.43378392 0.4216938 -0.10619788 0.43378392 0.35836911 -0.079967938
		 0.48451248 0.35836941 -0.33499762 0.48451248 0.47537833 -0.28653109 0.48451248 0.52384496 -0.16952248
		 0.48451248 0.47537833 -0.052513853 0.48451248 0.35836941 -0.0040473342 0.56043309 0.35836953 -0.38572612
		 0.56043315 0.51124883 -0.32240155 0.56043315 0.5745734 -0.16952248 0.56043315 0.51124883 -0.016643405
		 0.56043309 0.35836953 0.04668127 0.64998764 0.35836941 -0.40353972 0.6499877 0.52384496 -0.33499762
		 0.6499877 0.59238684 -0.16952248 0.6499877 0.52384496 -0.0040473342 0.64998764 0.35836941 0.064494774
		 0.73954213 0.35836959 -0.38572612 0.73954225 0.51124883 -0.32240155 0.73954213 0.57457316 -0.16952248
		 0.73954225 0.51124883 -0.016643405 0.73954213 0.35836959 0.04668127 0.81546283 0.35836953 -0.33499762
		 0.81546283 0.47537804 -0.28653109 0.81546283 0.5238446 -0.16952248 0.81546283 0.47537804 -0.052513853
		 0.81546283 0.35836953 -0.0040473342 0.86619139 0.35836959 -0.25907698 0.86619139 0.42169428 -0.23284708
		 0.86619139 0.4479242 -0.16952248 0.86619139 0.42169428 -0.10619788 0.86619139 0.35836959 -0.079967938
		 0.41597041 0.35836935 -0.16952248 0.88400483 0.35836959 -0.16952248 -0.43378392 0.35836911 -0.25907698
		 -0.43378392 0.4216938 -0.23284708 -0.48451248 0.47537833 -0.28653109 -0.48451248 0.35836941 -0.33499762
		 -0.43378398 0.44792372 -0.16952248 -0.48451248 0.52384496 -0.16952248 -0.43378392 0.4216938 -0.10619788
		 -0.48451248 0.47537833 -0.052513853 -0.43378392 0.35836911 -0.079967938 -0.48451248 0.35836941 -0.0040473342
		 -0.56043315 0.51124883 -0.32240155 -0.56043309 0.35836953 -0.38572612 -0.56043315 0.5745734 -0.16952248
		 -0.56043315 0.51124883 -0.016643405 -0.56043309 0.35836953 0.04668127 -0.6499877 0.52384496 -0.33499762
		 -0.64998764 0.35836941 -0.40353972 -0.6499877 0.59238684 -0.16952248 -0.6499877 0.52384496 -0.0040473342
		 -0.64998764 0.35836941 0.064494774 -0.73954225 0.51124883 -0.32240155 -0.73954213 0.35836959 -0.38572612
		 -0.73954213 0.57457316 -0.16952248 -0.73954225 0.51124883 -0.016643405 -0.73954213 0.35836959 0.04668127
		 -0.81546283 0.47537804 -0.28653109 -0.81546283 0.35836953 -0.33499762 -0.81546283 0.5238446 -0.16952248
		 -0.81546283 0.47537804 -0.052513853 -0.81546283 0.35836953 -0.0040473342 -0.86619139 0.42169428 -0.23284708
		 -0.86619139 0.35836959 -0.25907698 -0.86619139 0.4479242 -0.16952248 -0.86619139 0.42169428 -0.10619788
		 -0.86619139 0.35836959 -0.079967938 -0.41597041 0.35836935 -0.16952248 -0.88400483 0.35836959 -0.16952248
		 -0.32552361 0.076988816 0.17074604 -0.32552361 0.19341677 0.12252001 -1.04805696 0.19341677 0.12252001
		 -1.04805696 0.076988816 0.17074604 -0.32552361 0.30984473 0.17074604 -1.04805696 0.30984473 0.17074604
		 -0.32552356 0.35807091 0.28717405 -1.04805696 0.35807079 0.28717405 -0.32552361 0.30984473 0.40360206
		 -1.04805696 0.30984473 0.40360206 -0.32552361 0.19341677 0.45182806 -1.04805696 0.19341677 0.45182806
		 -0.32552361 0.076988816 0.40360206 -1.04805696 0.076988816 0.40360206 -0.32552361 0.028762698 0.28717405
		 -1.04805696 0.028762698 0.28717405 -0.32552361 0.19341677 0.28717405 -1.04805696 0.19341677 0.28717405
		 0.32552361 0.076988816 0.17074604 0.32552361 0.19341677 0.12252001 0.32552361 0.30984473 0.17074604
		 0.32552356 0.35807091 0.28717405 0.32552361 0.30984473 0.40360206 0.32552361 0.19341677 0.45182806
		 0.32552361 0.076988816 0.40360206 0.32552361 0.028762698 0.28717405 1.04805696 0.076988816 0.17074604
		 1.04805696 0.19341677 0.12252001 1.04805696 0.30984473 0.17074604 1.04805696 0.35807079 0.28717405
		 1.04805696 0.30984473 0.40360206 1.04805696 0.19341677 0.45182806 1.04805696 0.076988816 0.40360206
		 1.04805696 0.028762698 0.28717405 0.32552361 0.19341677 0.28717405 1.04805696 0.19341677 0.28717405
		 -0.33234838 4.3821454 0.97885168 0.33234838 4.3821454 0.97885168 -0.33234838 4.94699764 0.98995054
		 0.33234838 4.94699764 0.98995054 -0.33234838 4.95221424 0.63456559 0.33234838 4.95221424 0.63456559
		 -0.33234838 4.38701725 0.62346661 0.33234838 4.38701725 0.62346661 -5.146824e-17 4.95221424 0.63456559
		 -5.146824e-17 4.94699764 0.98995054 -5.146824e-17 4.3821454 0.97885168 -5.146824e-17 4.38701725 0.62346661
		 -0.33234844 4.65493965 0.98440135 -5.146824e-17 4.65493965 0.98440135 0.33234844 4.65493965 0.98440135
		 0.33234844 4.66012192 0.62901616 -0.33234844 4.66012192 0.62901616 -0.065827504 6.54141474 0.28856647
		 0.06316489 6.54141474 0.28856647 -0.065827504 7.3129034 0.27519771 0.06316489 7.3129034 0.27519771
		 -0.065827504 6.92497635 -0.63052672 0.06316489 6.92497635 -0.63052672 -0.065827504 6.54141474 -0.68008828
		 0.06316489 6.54141474 -0.68008828 -0.065827504 7.27830219 -0.17476125 0.06316489 7.27830219 -0.17476125
		 0.06316489 7.13761806 -0.44104773 -0.065827504 7.13761806 -0.44104773 0.06316489 7.3129034 0.080087833
		 -0.065827504 7.3129034 0.080087833 -0.001331308 7.3129034 0.30642232;
	setAttr ".vt[830:846]" -0.001331308 6.54141474 0.31979108 -0.19371082 2.59132123 0.28694263
		 0.19371082 2.59132123 0.28694263 -0.29616287 3.053613424 0.4774389 0.2961629 3.053613424 0.4774389
		 -0.19371082 3.047897577 0.16156438 0.19371082 3.047897577 0.16156438 -0.19371082 3.0091407299 -0.30346566
		 0.19371082 3.0091407299 -0.30346566 -0.39065608 3.034858465 -0.60936886 0.39065608 3.034858465 -0.60936886
		 -0.2634086 2.62826324 -0.58059257 0.2634086 2.62826324 -0.58059257 -0.19371082 2.35817885 -0.27468938
		 0.19371082 2.35817885 -0.27468938 -0.19371082 2.35817885 0.075201832 0.19371082 2.35817885 0.075201832;
	setAttr -s 1738 ".ed";
	setAttr ".ed[0:165]"  0 1 1 1 2 1 2 3 1 3 4 1 4 5 1 5 6 1 6 7 1 7 0 1 8 9 1
		 9 10 1 10 11 1 11 12 1 12 13 1 13 14 1 14 15 1 15 8 1 0 8 1 1 9 1 2 10 1 3 11 1 4 12 1
		 5 13 1 6 14 1 7 15 1 16 0 1 16 1 1 16 2 1 16 3 1 16 4 1 16 5 1 16 6 1 16 7 1 8 17 1
		 9 17 1 10 17 1 11 17 1 12 17 1 13 17 1 14 17 1 15 17 1 18 19 1 19 20 1 21 20 1 18 21 1
		 19 22 1 22 23 1 20 23 1 22 24 1 24 25 1 23 25 1 24 26 1 26 27 1 25 27 1 26 28 1 28 29 1
		 27 29 1 28 30 1 30 31 1 29 31 1 30 32 1 32 33 1 31 33 1 32 18 1 33 21 1 34 18 1 34 19 1
		 34 22 1 34 24 1 34 26 1 34 28 1 34 30 1 34 32 1 20 35 1 21 35 1 23 35 1 25 35 1 27 35 1
		 29 35 1 31 35 1 33 35 1 36 37 1 37 38 1 38 39 1 39 40 1 40 41 1 41 42 1 42 43 1 43 36 1
		 44 45 1 45 46 1 46 47 1 47 48 1 48 49 1 49 50 1 50 51 1 51 44 1 52 53 1 53 54 1 54 55 1
		 55 56 1 56 57 1 57 58 1 58 59 1 59 52 1 60 61 1 61 62 1 62 63 1 63 64 1 64 65 1 65 66 1
		 66 67 1 67 60 1 68 69 1 69 70 1 70 71 1 71 72 1 72 73 1 73 74 1 74 75 1 75 68 1 76 77 1
		 77 78 1 78 79 1 79 80 1 80 81 1 81 82 1 82 83 1 83 76 1 84 85 1 85 86 1 86 87 1 87 88 1
		 88 89 1 89 90 1 90 91 1 91 84 1 36 44 1 37 45 1 38 46 1 39 47 1 40 48 1 41 49 1 42 50 1
		 43 51 1 44 52 1 45 53 1 46 54 1 47 55 1 48 56 1 49 57 1 50 58 1 51 59 1 52 60 1 53 61 1
		 54 62 1 55 63 1 56 64 1 57 65 1 58 66 1 59 67 1 60 68 1 61 69 1 62 70 1 63 71 1 64 72 1
		 65 73 1;
	setAttr ".ed[166:331]" 66 74 1 67 75 1 68 76 1 69 77 1 70 78 1 71 79 1 72 80 1
		 73 81 1 74 82 1 75 83 1 76 84 1 77 85 1 78 86 1 79 87 1 80 88 1 81 89 1 82 90 1 83 91 1
		 92 36 1 92 37 1 92 38 1 92 39 1 92 40 1 92 41 1 92 42 1 92 43 1 84 93 1 85 93 1 86 93 1
		 87 93 1 88 93 1 89 93 1 90 93 1 91 93 1 94 95 1 95 96 1 96 97 1 97 98 1 98 99 1 99 100 1
		 100 101 1 101 94 1 102 103 1 103 104 1 104 105 1 105 106 1 106 107 1 107 108 1 108 109 1
		 109 102 1 94 102 1 95 103 1 96 104 1 97 105 1 98 106 1 99 107 1 100 108 1 101 109 1
		 110 94 1 110 95 1 110 96 1 110 97 1 110 98 1 110 99 1 110 100 1 110 101 1 102 111 1
		 103 111 1 104 111 1 105 111 1 106 111 1 107 111 1 108 111 1 109 111 1 112 113 1 113 114 1
		 114 115 1 115 116 1 116 117 1 117 118 1 118 119 1 119 112 1 120 121 1 121 122 1 122 123 1
		 123 124 1 124 125 1 125 126 1 126 127 1 127 120 1 128 129 1 129 130 1 130 131 1 131 132 1
		 132 133 1 133 134 1 134 135 1 135 128 1 136 137 1 137 138 1 138 139 1 139 140 1 140 141 1
		 141 142 1 142 143 1 143 136 1 144 145 1 145 146 1 146 147 1 147 148 1 148 149 1 149 150 1
		 150 151 1 151 144 1 152 153 1 153 154 1 154 155 1 155 156 1 156 157 1 157 158 1 158 159 1
		 159 152 1 160 161 1 161 162 1 162 163 1 163 164 1 164 165 1 165 166 1 166 167 1 167 160 1
		 112 120 1 113 121 1 114 122 1 115 123 1 116 124 1 117 125 1 118 126 1 119 127 1 120 128 1
		 121 129 1 122 130 1 123 131 1 124 132 1 125 133 1 126 134 1 127 135 1 128 136 1 129 137 1
		 130 138 1 131 139 1 132 140 1 133 141 1 134 142 1 135 143 1 136 144 1 137 145 1 138 146 1
		 139 147 1 140 148 1 141 149 1 142 150 1 143 151 1 144 152 1 145 153 1 146 154 1 147 155 1;
	setAttr ".ed[332:497]" 148 156 1 149 157 1 150 158 1 151 159 1 152 160 1 153 161 1
		 154 162 1 155 163 1 156 164 1 157 165 1 158 166 1 159 167 1 168 112 1 168 113 1 168 114 1
		 168 115 1 168 116 1 168 117 1 168 118 1 168 119 1 160 169 1 161 169 1 162 169 1 163 169 1
		 164 169 1 165 169 1 166 169 1 167 169 1 170 171 1 171 172 1 172 173 1 173 174 1 174 175 1
		 175 176 1 176 177 1 177 170 1 178 179 1 179 180 1 180 181 1 181 182 1 182 183 1 183 184 1
		 184 185 1 185 178 1 186 187 1 187 188 1 188 189 1 189 190 1 190 191 1 191 192 1 192 193 1
		 193 186 1 194 195 1 195 196 1 196 197 1 197 198 1 198 199 1 199 200 1 200 201 1 201 194 1
		 202 203 1 203 204 1 204 205 1 205 206 1 206 207 1 207 208 1 208 209 1 209 202 1 210 211 1
		 211 212 1 212 213 1 213 214 1 214 215 1 215 216 1 216 217 1 217 210 1 218 219 1 219 220 1
		 220 221 1 221 222 1 222 223 1 223 224 1 224 225 1 225 218 1 170 178 1 171 179 1 172 180 1
		 173 181 1 174 182 1 175 183 1 176 184 1 177 185 1 178 186 1 179 187 1 180 188 1 181 189 1
		 182 190 1 183 191 1 184 192 1 185 193 1 186 194 1 187 195 1 188 196 1 189 197 1 190 198 1
		 191 199 1 192 200 1 193 201 1 194 202 1 195 203 1 196 204 1 197 205 1 198 206 1 199 207 1
		 200 208 1 201 209 1 202 210 1 203 211 1 204 212 1 205 213 1 206 214 1 207 215 1 208 216 1
		 209 217 1 210 218 1 211 219 1 212 220 1 213 221 1 214 222 1 215 223 1 216 224 1 217 225 1
		 226 170 1 226 171 1 226 172 1 226 173 1 226 174 1 226 175 1 226 176 1 226 177 1 218 227 1
		 219 227 1 220 227 1 221 227 1 222 227 1 223 227 1 224 227 1 225 227 1 228 229 1 229 230 1
		 230 231 1 231 232 1 232 233 1 233 234 1 234 235 1 235 228 1 236 237 1 237 238 1 238 239 1
		 239 240 1 240 241 1 241 242 1 242 243 1 243 236 1 228 236 1 229 237 1;
	setAttr ".ed[498:663]" 230 238 1 231 239 1 232 240 1 233 241 1 234 242 1 235 243 1
		 244 228 1 244 229 1 244 230 1 244 231 1 244 232 1 244 233 1 244 234 1 244 235 1 236 245 1
		 237 245 1 238 245 1 239 245 1 240 245 1 241 245 1 242 245 1 243 245 1 246 247 1 247 248 1
		 249 248 1 246 249 1 247 250 1 250 251 1 248 251 1 250 252 1 252 253 1 251 253 1 252 254 1
		 254 255 1 253 255 1 254 256 1 256 257 1 255 257 1 256 258 1 258 259 1 257 259 1 258 260 1
		 260 261 1 259 261 1 260 246 1 261 249 1 248 262 1 263 262 1 249 263 1 251 264 1 262 264 1
		 253 265 1 264 265 1 255 266 1 265 266 1 257 267 1 266 267 1 259 268 1 267 268 1 261 269 1
		 268 269 1 269 263 1 262 270 1 271 270 1 263 271 1 264 272 1 270 272 1 265 273 1 272 273 1
		 266 274 1 273 274 1 267 275 1 274 275 1 268 276 1 275 276 1 269 277 1 276 277 1 277 271 1
		 270 278 1 279 278 1 271 279 1 272 280 1 278 280 1 273 281 1 280 281 1 274 282 1 281 282 1
		 275 283 1 282 283 1 276 284 1 283 284 1 277 285 1 284 285 1 285 279 1 278 286 1 287 286 1
		 279 287 1 280 288 1 286 288 1 281 289 1 288 289 1 282 290 1 289 290 1 283 291 1 290 291 1
		 284 292 1 291 292 1 285 293 1 292 293 1 293 287 1 286 294 1 295 294 1 287 295 1 288 296 1
		 294 296 1 289 297 1 296 297 1 290 298 1 297 298 1 291 299 1 298 299 1 292 300 1 299 300 1
		 293 301 1 300 301 1 301 295 1 302 246 1 302 247 1 302 250 1 302 252 1 302 254 1 302 256 1
		 302 258 1 302 260 1 294 303 1 295 303 1 296 303 1 297 303 1 298 303 1 299 303 1 300 303 1
		 301 303 1 304 305 1 305 306 1 307 306 1 304 307 1 305 308 1 308 309 1 306 309 1 308 310 1
		 310 311 1 309 311 1 310 312 1 312 313 1 311 313 1 312 314 1 314 315 1 313 315 1 314 316 1
		 316 317 1 315 317 1 316 318 1 318 319 1 317 319 1 318 304 1 319 307 1;
	setAttr ".ed[664:829]" 320 304 1 320 305 1 320 308 1 320 310 1 320 312 1 320 314 1
		 320 316 1 320 318 1 306 321 1 307 321 1 309 321 1 311 321 1 313 321 1 315 321 1 317 321 1
		 319 321 1 322 323 1 323 324 1 325 324 1 322 325 1 323 326 1 326 327 1 324 327 1 326 328 1
		 328 329 1 327 329 1 328 330 1 330 331 1 329 331 1 330 332 1 332 333 1 331 333 1 332 334 1
		 334 335 1 333 335 1 334 336 1 336 337 1 335 337 1 336 322 1 337 325 1 324 338 1 339 338 1
		 325 339 1 327 340 1 338 340 1 329 341 1 340 341 1 331 342 1 341 342 1 333 343 1 342 343 1
		 335 344 1 343 344 1 337 345 1 344 345 1 345 339 1 338 346 1 347 346 1 339 347 1 340 348 1
		 346 348 1 341 349 1 348 349 1 342 350 1 349 350 1 343 351 1 350 351 1 344 352 1 351 352 1
		 345 353 1 352 353 1 353 347 1 346 354 1 355 354 1 347 355 1 348 356 1 354 356 1 349 357 1
		 356 357 1 350 358 1 357 358 1 351 359 1 358 359 1 352 360 1 359 360 1 353 361 1 360 361 1
		 361 355 1 354 362 1 363 362 1 355 363 1 356 364 1 362 364 1 357 365 1 364 365 1 358 366 1
		 365 366 1 359 367 1 366 367 1 360 368 1 367 368 1 361 369 1 368 369 1 369 363 1 362 370 1
		 371 370 1 363 371 1 364 372 1 370 372 1 365 373 1 372 373 1 366 374 1 373 374 1 367 375 1
		 374 375 1 368 376 1 375 376 1 369 377 1 376 377 1 377 371 1 378 322 1 378 323 1 378 326 1
		 378 328 1 378 330 1 378 332 1 378 334 1 378 336 1 370 379 1 371 379 1 372 379 1 373 379 1
		 374 379 1 375 379 1 376 379 1 377 379 1 380 381 1 381 382 1 383 382 1 380 383 1 381 384 1
		 384 385 1 382 385 1 384 386 1 386 387 1 385 387 1 386 388 1 388 389 1 387 389 1 388 390 1
		 390 391 1 389 391 1 390 392 1 392 393 1 391 393 1 392 394 1 394 395 1 393 395 1 394 380 1
		 395 383 1 382 396 1 397 396 1 383 397 1 385 398 1 396 398 1 387 399 1;
	setAttr ".ed[830:995]" 398 399 1 389 400 1 399 400 1 391 401 1 400 401 1 393 402 1
		 401 402 1 395 403 1 402 403 1 403 397 1 396 404 1 405 404 1 397 405 1 398 406 1 404 406 1
		 399 407 1 406 407 1 400 408 1 407 408 1 401 409 1 408 409 1 402 410 1 409 410 1 403 411 1
		 410 411 1 411 405 1 404 412 1 413 412 1 405 413 1 406 414 1 412 414 1 407 415 1 414 415 1
		 408 416 1 415 416 1 409 417 1 416 417 1 410 418 1 417 418 1 411 419 1 418 419 1 419 413 1
		 412 420 1 421 420 1 413 421 1 414 422 1 420 422 1 415 423 1 422 423 1 416 424 1 423 424 1
		 417 425 1 424 425 1 418 426 1 425 426 1 419 427 1 426 427 1 427 421 1 420 428 1 429 428 1
		 421 429 1 422 430 1 428 430 1 423 431 1 430 431 1 424 432 1 431 432 1 425 433 1 432 433 1
		 426 434 1 433 434 1 427 435 1 434 435 1 435 429 1 436 380 1 436 381 1 436 384 1 436 386 1
		 436 388 1 436 390 1 436 392 1 436 394 1 428 437 1 429 437 1 430 437 1 431 437 1 432 437 1
		 433 437 1 434 437 1 435 437 1 438 439 1 439 440 1 441 440 1 438 441 1 439 442 1 442 443 1
		 440 443 1 442 444 1 444 445 1 443 445 1 444 446 1 446 447 1 445 447 1 446 448 1 448 449 1
		 447 449 1 448 450 1 450 451 1 449 451 1 450 452 1 452 453 1 451 453 1 452 438 1 453 441 1
		 454 438 1 454 439 1 454 442 1 454 444 1 454 446 1 454 448 1 454 450 1 454 452 1 440 455 1
		 441 455 1 443 455 1 445 455 1 447 455 1 449 455 1 451 455 1 453 455 1 456 457 1 457 458 1
		 458 459 1 459 460 1 460 461 1 461 462 1 462 463 1 463 456 1 464 465 1 465 466 1 466 467 1
		 467 468 1 468 469 1 469 470 1 470 471 1 471 464 1 472 473 1 473 474 1 474 475 1 475 476 1
		 476 477 1 477 478 1 478 479 1 479 472 1 480 481 1 481 482 1 482 483 1 483 484 1 484 485 1
		 485 486 1 486 487 1 487 480 1 488 489 1 489 490 1 490 491 1 491 492 1;
	setAttr ".ed[996:1161]" 492 493 1 493 494 1 494 495 1 495 488 1 496 497 1 497 498 1
		 498 499 1 499 500 1 500 501 1 501 502 1 502 503 1 503 496 1 504 505 1 505 506 1 506 507 1
		 507 508 1 508 509 1 509 510 1 510 511 1 511 504 1 456 464 1 457 465 1 458 466 1 459 467 1
		 460 468 1 461 469 1 462 470 1 463 471 1 464 472 1 465 473 1 466 474 1 467 475 1 468 476 1
		 469 477 1 470 478 1 471 479 1 472 480 1 473 481 1 474 482 1 475 483 1 476 484 1 477 485 1
		 478 486 1 479 487 1 480 488 1 481 489 1 482 490 1 483 491 1 484 492 1 485 493 1 486 494 1
		 487 495 1 488 496 1 489 497 1 490 498 1 491 499 1 492 500 1 493 501 1 494 502 1 495 503 1
		 496 504 1 497 505 1 498 506 1 499 507 1 500 508 1 501 509 1 502 510 1 503 511 1 512 456 1
		 512 457 1 512 458 1 512 459 1 512 460 1 512 461 1 512 462 1 512 463 1 504 513 1 505 513 1
		 506 513 1 507 513 1 508 513 1 509 513 1 510 513 1 511 513 1 514 515 1 515 516 1 517 516 1
		 514 517 1 515 518 1 518 519 1 516 519 1 518 520 1 520 521 1 519 521 1 520 522 1 522 523 1
		 521 523 1 522 524 1 524 525 1 523 525 1 524 526 1 526 527 1 525 527 1 526 528 1 528 529 1
		 527 529 1 528 514 1 529 517 1 516 530 1 531 530 1 517 531 1 519 532 1 530 532 1 521 533 1
		 532 533 1 523 534 1 533 534 1 525 535 1 534 535 1 527 536 1 535 536 1 529 537 1 536 537 1
		 537 531 1 530 538 1 539 538 1 531 539 1 532 540 1 538 540 1 533 541 1 540 541 1 534 542 1
		 541 542 1 535 543 1 542 543 1 536 544 1 543 544 1 537 545 1 544 545 1 545 539 1 538 546 1
		 547 546 1 539 547 1 540 548 1 546 548 1 541 549 1 548 549 1 542 550 1 549 550 1 543 551 1
		 550 551 1 544 552 1 551 552 1 545 553 1 552 553 1 553 547 1 546 554 1 555 554 1 547 555 1
		 548 556 1 554 556 1 549 557 1 556 557 1 550 558 1 557 558 1 551 559 1;
	setAttr ".ed[1162:1327]" 558 559 1 552 560 1 559 560 1 553 561 1 560 561 1 561 555 1
		 554 562 1 563 562 1 555 563 1 556 564 1 562 564 1 557 565 1 564 565 1 558 566 1 565 566 1
		 559 567 1 566 567 1 560 568 1 567 568 1 561 569 1 568 569 1 569 563 1 570 514 1 570 515 1
		 570 518 1 570 520 1 570 522 1 570 524 1 570 526 1 570 528 1 562 571 1 563 571 1 564 571 1
		 565 571 1 566 571 1 567 571 1 568 571 1 569 571 1 572 573 1 573 574 1 575 574 1 572 575 1
		 573 576 1 576 577 1 574 577 1 576 578 1 578 579 1 577 579 1 578 580 1 580 581 1 579 581 1
		 580 582 1 582 583 1 581 583 1 582 584 1 584 585 1 583 585 1 584 586 1 586 587 1 585 587 1
		 586 572 1 587 575 1 574 588 1 589 588 1 575 589 1 577 590 1 588 590 1 579 591 1 590 591 1
		 581 592 1 591 592 1 583 593 1 592 593 1 585 594 1 593 594 1 587 595 1 594 595 1 595 589 1
		 588 596 1 597 596 1 589 597 1 590 598 1 596 598 1 591 599 1 598 599 1 592 600 1 599 600 1
		 593 601 1 600 601 1 594 602 1 601 602 1 595 603 1 602 603 1 603 597 1 596 604 1 605 604 1
		 597 605 1 598 606 1 604 606 1 599 607 1 606 607 1 600 608 1 607 608 1 601 609 1 608 609 1
		 602 610 1 609 610 1 603 611 1 610 611 1 611 605 1 604 612 1 613 612 1 605 613 1 606 614 1
		 612 614 1 607 615 1 614 615 1 608 616 1 615 616 1 609 617 1 616 617 1 610 618 1 617 618 1
		 611 619 1 618 619 1 619 613 1 612 620 1 621 620 1 613 621 1 614 622 1 620 622 1 615 623 1
		 622 623 1 616 624 1 623 624 1 617 625 1 624 625 1 618 626 1 625 626 1 619 627 1 626 627 1
		 627 621 1 628 572 1 628 573 1 628 576 1 628 578 1 628 580 1 628 582 1 628 584 1 628 586 1
		 620 629 1 621 629 1 622 629 1 623 629 1 624 629 1 625 629 1 626 629 1 627 629 1 630 631 1
		 631 632 1 632 633 1 633 634 1 634 635 1 635 636 1 636 637 1 637 630 1;
	setAttr ".ed[1328:1493]" 638 639 1 639 640 1 640 641 1 641 642 1 642 643 1 643 644 1
		 644 645 1 645 638 1 646 647 1 647 648 1 648 649 1 649 650 1 650 651 1 651 652 1 652 653 1
		 653 646 1 654 655 1 655 656 1 656 657 1 657 658 1 658 659 1 659 660 1 660 661 1 661 654 1
		 662 663 1 663 664 1 664 665 1 665 666 1 666 667 1 667 668 1 668 669 1 669 662 1 670 671 1
		 671 672 1 672 673 1 673 674 1 674 675 1 675 676 1 676 677 1 677 670 1 678 679 1 679 680 1
		 680 681 1 681 682 1 682 683 1 683 684 1 684 685 1 685 678 1 630 638 1 631 639 1 632 640 1
		 633 641 1 634 642 1 635 643 1 636 644 1 637 645 1 638 646 1 639 647 1 640 648 1 641 649 1
		 642 650 1 643 651 1 644 652 1 645 653 1 646 654 1 647 655 1 648 656 1 649 657 1 650 658 1
		 651 659 1 652 660 1 653 661 1 654 662 1 655 663 1 656 664 1 657 665 1 658 666 1 659 667 1
		 660 668 1 661 669 1 662 670 1 663 671 1 664 672 1 665 673 1 666 674 1 667 675 1 668 676 1
		 669 677 1 670 678 1 671 679 1 672 680 1 673 681 1 674 682 1 675 683 1 676 684 1 677 685 1
		 686 630 1 686 631 1 686 632 1 686 633 1 686 634 1 686 635 1 686 636 1 686 637 1 678 687 1
		 679 687 1 680 687 1 681 687 1 682 687 1 683 687 1 684 687 1 685 687 1 688 689 1 689 690 1
		 690 691 1 691 692 1 693 694 1 694 695 1 695 696 1 696 697 1 698 699 1 699 700 1 700 701 1
		 701 702 1 703 704 1 704 705 1 705 706 1 706 707 1 708 709 1 709 710 1 710 711 1 711 712 1
		 713 714 1 714 715 1 715 716 1 716 717 1 718 719 1 719 720 1 720 721 1 721 722 1 688 693 0
		 689 694 1 690 695 1 691 696 1 692 697 0 693 698 0 694 699 1 695 700 1 696 701 1 697 702 0
		 698 703 0 699 704 1 700 705 1 701 706 1 702 707 0 703 708 0 704 709 1 705 710 1 706 711 1
		 707 712 0 708 713 0 709 714 1 710 715 1 711 716 1 712 717 0 713 718 0;
	setAttr ".ed[1494:1659]" 714 719 1 715 720 1 716 721 1 717 722 0 723 688 0 723 689 1
		 723 690 1 723 691 1 723 692 0 718 724 0 719 724 1 720 724 1 721 724 1 722 724 0 725 726 1
		 726 727 1 728 727 1 725 728 0 726 729 1 729 730 1 727 730 1 729 731 1 731 732 1 730 732 1
		 731 733 1 733 734 0 732 734 1 727 735 1 736 735 1 728 736 0 730 737 1 735 737 1 732 738 1
		 737 738 1 734 739 0 738 739 1 735 740 1 741 740 1 736 741 0 737 742 1 740 742 1 738 743 1
		 742 743 1 739 744 0 743 744 1 740 745 1 746 745 1 741 746 0 742 747 1 745 747 1 743 748 1
		 747 748 1 744 749 0 748 749 1 745 750 1 751 750 1 746 751 0 747 752 1 750 752 1 748 753 1
		 752 753 1 749 754 0 753 754 1 750 755 1 756 755 1 751 756 0 752 757 1 755 757 1 753 758 1
		 757 758 1 754 759 0 758 759 1 760 725 0 760 726 1 760 729 1 760 731 1 760 733 0 755 761 1
		 756 761 0 757 761 1 758 761 1 759 761 0 762 763 1 763 764 1 765 764 1 762 765 1 763 766 1
		 766 767 1 764 767 1 766 768 1 768 769 1 767 769 1 768 770 1 770 771 1 769 771 1 770 772 1
		 772 773 1 771 773 1 772 774 1 774 775 1 773 775 1 774 776 1 776 777 1 775 777 1 776 762 1
		 777 765 1 778 762 1 778 763 1 778 766 1 778 768 1 778 770 1 778 772 1 778 774 1 778 776 1
		 764 779 1 765 779 1 767 779 1 769 779 1 771 779 1 773 779 1 775 779 1 777 779 1 780 781 1
		 781 782 1 782 783 1 783 784 1 784 785 1 785 786 1 786 787 1 787 780 1 788 789 1 789 790 1
		 790 791 1 791 792 1 792 793 1 793 794 1 794 795 1 795 788 1 780 788 1 781 789 1 782 790 1
		 783 791 1 784 792 1 785 793 1 786 794 1 787 795 1 796 780 1 796 781 1 796 782 1 796 783 1
		 796 784 1 796 785 1 796 786 1 796 787 1 788 797 1 789 797 1 790 797 1 791 797 1 792 797 1
		 793 797 1 794 797 1 795 797 1 798 808 1 800 807 1 802 806 0 804 809 0;
	setAttr ".ed[1660:1737]" 798 810 1 799 812 1 800 802 1 801 803 1 802 814 0 803 813 0
		 804 798 1 805 799 1 806 803 0 807 801 1 806 807 0 808 799 1 807 811 0 809 805 0 808 809 0
		 810 800 1 811 808 0 810 811 0 812 801 1 811 812 0 813 805 0 812 813 0 814 804 0 810 814 0
		 815 830 1 817 829 1 819 820 1 821 822 1 815 817 1 816 818 1 817 828 1 818 827 1 819 821 1
		 820 822 1 821 815 1 822 816 1 823 826 1 824 825 1 823 824 1 825 820 1 826 819 1 825 826 1
		 827 824 1 828 823 1 827 828 1 829 818 1 830 816 1 829 830 0 829 828 0 829 827 0 831 832 1
		 833 834 1 835 836 1 837 838 1 839 840 1 841 842 1 843 844 1 845 846 1 831 833 1 832 834 1
		 833 835 1 834 836 1 835 837 1 836 838 1 837 839 1 838 840 1 839 841 1 840 842 1 841 843 1
		 842 844 1 843 845 1 844 846 1 845 831 1 846 832 1 844 838 1 846 836 1 843 837 1 845 835 1;
	setAttr -s 934 -ch 3436 ".fc";
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
		f 4 80 137 -89 -137
		mu 0 4 72 73 74 75
		f 4 81 138 -90 -138
		mu 0 4 73 76 77 74
		f 4 82 139 -91 -139
		mu 0 4 76 78 79 77
		f 4 83 140 -92 -140
		mu 0 4 78 80 81 79
		f 4 84 141 -93 -141
		mu 0 4 80 82 83 81
		f 4 85 142 -94 -142
		mu 0 4 82 84 85 83
		f 4 86 143 -95 -143
		mu 0 4 84 86 87 85
		f 4 87 136 -96 -144
		mu 0 4 86 88 89 87
		f 4 88 145 -97 -145
		mu 0 4 75 74 90 91
		f 4 89 146 -98 -146
		mu 0 4 74 77 92 90
		f 4 90 147 -99 -147
		mu 0 4 77 79 93 92
		f 4 91 148 -100 -148
		mu 0 4 79 81 94 93
		f 4 92 149 -101 -149
		mu 0 4 81 83 95 94
		f 4 93 150 -102 -150
		mu 0 4 83 85 96 95
		f 4 94 151 -103 -151
		mu 0 4 85 87 97 96
		f 4 95 144 -104 -152
		mu 0 4 87 89 98 97
		f 4 96 153 -105 -153
		mu 0 4 91 90 99 100
		f 4 97 154 -106 -154
		mu 0 4 90 92 101 99
		f 4 98 155 -107 -155
		mu 0 4 92 93 102 101
		f 4 99 156 -108 -156
		mu 0 4 93 94 103 102
		f 4 100 157 -109 -157
		mu 0 4 94 95 104 103
		f 4 101 158 -110 -158
		mu 0 4 95 96 105 104
		f 4 102 159 -111 -159
		mu 0 4 96 97 106 105
		f 4 103 152 -112 -160
		mu 0 4 97 98 107 106
		f 4 104 161 -113 -161
		mu 0 4 100 99 108 109
		f 4 105 162 -114 -162
		mu 0 4 99 101 110 108
		f 4 106 163 -115 -163
		mu 0 4 101 102 111 110
		f 4 107 164 -116 -164
		mu 0 4 102 103 112 111
		f 4 108 165 -117 -165
		mu 0 4 103 104 113 112
		f 4 109 166 -118 -166
		mu 0 4 104 105 114 113
		f 4 110 167 -119 -167
		mu 0 4 105 106 115 114
		f 4 111 160 -120 -168
		mu 0 4 106 107 116 115
		f 4 112 169 -121 -169
		mu 0 4 109 108 117 118
		f 4 113 170 -122 -170
		mu 0 4 108 110 119 117
		f 4 114 171 -123 -171
		mu 0 4 110 111 120 119
		f 4 115 172 -124 -172
		mu 0 4 111 112 121 120
		f 4 116 173 -125 -173
		mu 0 4 112 113 122 121
		f 4 117 174 -126 -174
		mu 0 4 113 114 123 122
		f 4 118 175 -127 -175
		mu 0 4 114 115 124 123
		f 4 119 168 -128 -176
		mu 0 4 115 116 125 124
		f 4 120 177 -129 -177
		mu 0 4 118 117 126 127
		f 4 121 178 -130 -178
		mu 0 4 117 119 128 126
		f 4 122 179 -131 -179
		mu 0 4 119 120 129 128
		f 4 123 180 -132 -180
		mu 0 4 120 121 130 129
		f 4 124 181 -133 -181
		mu 0 4 121 122 131 130
		f 4 125 182 -134 -182
		mu 0 4 122 123 132 131
		f 4 126 183 -135 -183
		mu 0 4 123 124 133 132
		f 4 127 176 -136 -184
		mu 0 4 124 125 134 133
		f 3 -81 -185 185
		mu 0 3 73 72 135
		f 3 -82 -186 186
		mu 0 3 76 73 136
		f 3 -83 -187 187
		mu 0 3 78 76 137
		f 3 -84 -188 188
		mu 0 3 80 78 138
		f 3 -85 -189 189
		mu 0 3 82 80 139
		f 3 -86 -190 190
		mu 0 3 84 82 140
		f 3 -87 -191 191
		mu 0 3 86 84 141
		f 3 -88 -192 184
		mu 0 3 88 86 142
		f 3 128 193 -193
		mu 0 3 127 126 143
		f 3 129 194 -194
		mu 0 3 126 128 144
		f 3 130 195 -195
		mu 0 3 128 129 145
		f 3 131 196 -196
		mu 0 3 129 130 146
		f 3 132 197 -197
		mu 0 3 130 131 147
		f 3 133 198 -198
		mu 0 3 131 132 148
		f 3 134 199 -199
		mu 0 3 132 133 149
		f 3 135 192 -200
		mu 0 3 133 134 150
		f 4 200 217 -209 -217
		mu 0 4 151 152 153 154
		f 4 201 218 -210 -218
		mu 0 4 152 155 156 153
		f 4 202 219 -211 -219
		mu 0 4 155 157 158 156
		f 4 203 220 -212 -220
		mu 0 4 157 159 160 158
		f 4 204 221 -213 -221
		mu 0 4 159 161 162 160
		f 4 205 222 -214 -222
		mu 0 4 161 163 164 162
		f 4 206 223 -215 -223
		mu 0 4 163 165 166 164
		f 4 207 216 -216 -224
		mu 0 4 165 167 168 166
		f 3 -201 -225 225
		mu 0 3 169 170 171
		f 3 -202 -226 226
		mu 0 3 172 169 171
		f 3 -203 -227 227
		mu 0 3 173 172 171
		f 3 -204 -228 228
		mu 0 3 174 173 171
		f 3 -205 -229 229
		mu 0 3 175 174 171
		f 3 -206 -230 230
		mu 0 3 176 175 171
		f 3 -207 -231 231
		mu 0 3 177 176 171
		f 3 -208 -232 224
		mu 0 3 170 177 171
		f 3 208 233 -233
		mu 0 3 178 179 180
		f 3 209 234 -234
		mu 0 3 179 181 180
		f 3 210 235 -235
		mu 0 3 181 182 180
		f 3 211 236 -236
		mu 0 3 182 183 180
		f 3 212 237 -237
		mu 0 3 183 184 180
		f 3 213 238 -238
		mu 0 3 184 185 180
		f 3 214 239 -239
		mu 0 3 185 186 180
		f 3 215 232 -240
		mu 0 3 186 178 180
		f 4 240 297 -249 -297
		mu 0 4 187 188 189 190
		f 4 241 298 -250 -298
		mu 0 4 188 191 192 189
		f 4 242 299 -251 -299
		mu 0 4 191 193 194 192
		f 4 243 300 -252 -300
		mu 0 4 193 195 196 194
		f 4 244 301 -253 -301
		mu 0 4 195 197 198 196
		f 4 245 302 -254 -302
		mu 0 4 197 199 200 198
		f 4 246 303 -255 -303
		mu 0 4 199 201 202 200
		f 4 247 296 -256 -304
		mu 0 4 201 203 204 202
		f 4 248 305 -257 -305
		mu 0 4 190 189 205 206
		f 4 249 306 -258 -306
		mu 0 4 189 192 207 205
		f 4 250 307 -259 -307
		mu 0 4 192 194 208 207
		f 4 251 308 -260 -308
		mu 0 4 194 196 209 208
		f 4 252 309 -261 -309
		mu 0 4 196 198 210 209
		f 4 253 310 -262 -310
		mu 0 4 198 200 211 210
		f 4 254 311 -263 -311
		mu 0 4 200 202 212 211
		f 4 255 304 -264 -312
		mu 0 4 202 204 213 212
		f 4 256 313 -265 -313
		mu 0 4 206 205 214 215
		f 4 257 314 -266 -314
		mu 0 4 205 207 216 214
		f 4 258 315 -267 -315
		mu 0 4 207 208 217 216
		f 4 259 316 -268 -316
		mu 0 4 208 209 218 217
		f 4 260 317 -269 -317
		mu 0 4 209 210 219 218
		f 4 261 318 -270 -318
		mu 0 4 210 211 220 219
		f 4 262 319 -271 -319
		mu 0 4 211 212 221 220
		f 4 263 312 -272 -320
		mu 0 4 212 213 222 221
		f 4 264 321 -273 -321
		mu 0 4 215 214 223 224
		f 4 265 322 -274 -322
		mu 0 4 214 216 225 223
		f 4 266 323 -275 -323
		mu 0 4 216 217 226 225
		f 4 267 324 -276 -324
		mu 0 4 217 218 227 226
		f 4 268 325 -277 -325
		mu 0 4 218 219 228 227
		f 4 269 326 -278 -326
		mu 0 4 219 220 229 228
		f 4 270 327 -279 -327
		mu 0 4 220 221 230 229
		f 4 271 320 -280 -328
		mu 0 4 221 222 231 230
		f 4 272 329 -281 -329
		mu 0 4 224 223 232 233
		f 4 273 330 -282 -330
		mu 0 4 223 225 234 232
		f 4 274 331 -283 -331
		mu 0 4 225 226 235 234
		f 4 275 332 -284 -332
		mu 0 4 226 227 236 235
		f 4 276 333 -285 -333
		mu 0 4 227 228 237 236
		f 4 277 334 -286 -334
		mu 0 4 228 229 238 237
		f 4 278 335 -287 -335
		mu 0 4 229 230 239 238
		f 4 279 328 -288 -336
		mu 0 4 230 231 240 239
		f 4 280 337 -289 -337
		mu 0 4 233 232 241 242
		f 4 281 338 -290 -338
		mu 0 4 232 234 243 241
		f 4 282 339 -291 -339
		mu 0 4 234 235 244 243
		f 4 283 340 -292 -340
		mu 0 4 235 236 245 244
		f 4 284 341 -293 -341
		mu 0 4 236 237 246 245
		f 4 285 342 -294 -342
		mu 0 4 237 238 247 246
		f 4 286 343 -295 -343
		mu 0 4 238 239 248 247
		f 4 287 336 -296 -344
		mu 0 4 239 240 249 248
		f 3 -241 -345 345
		mu 0 3 188 187 250
		f 3 -242 -346 346
		mu 0 3 191 188 251
		f 3 -243 -347 347
		mu 0 3 193 191 252
		f 3 -244 -348 348
		mu 0 3 195 193 253
		f 3 -245 -349 349
		mu 0 3 197 195 254
		f 3 -246 -350 350
		mu 0 3 199 197 255
		f 3 -247 -351 351
		mu 0 3 201 199 256
		f 3 -248 -352 344
		mu 0 3 203 201 257
		f 3 288 353 -353
		mu 0 3 242 241 258
		f 3 289 354 -354
		mu 0 3 241 243 259
		f 3 290 355 -355
		mu 0 3 243 244 260
		f 3 291 356 -356
		mu 0 3 244 245 261
		f 3 292 357 -357
		mu 0 3 245 246 262
		f 3 293 358 -358
		mu 0 3 246 247 263
		f 3 294 359 -359
		mu 0 3 247 248 264
		f 3 295 352 -360
		mu 0 3 248 249 265
		f 4 360 417 -369 -417
		mu 0 4 266 267 268 269
		f 4 361 418 -370 -418
		mu 0 4 267 270 271 268
		f 4 362 419 -371 -419
		mu 0 4 270 272 273 271
		f 4 363 420 -372 -420
		mu 0 4 272 274 275 273
		f 4 364 421 -373 -421
		mu 0 4 274 276 277 275
		f 4 365 422 -374 -422
		mu 0 4 276 278 279 277
		f 4 366 423 -375 -423
		mu 0 4 278 280 281 279
		f 4 367 416 -376 -424
		mu 0 4 280 282 283 281
		f 4 368 425 -377 -425
		mu 0 4 269 268 284 285
		f 4 369 426 -378 -426
		mu 0 4 268 271 286 284
		f 4 370 427 -379 -427
		mu 0 4 271 273 287 286
		f 4 371 428 -380 -428
		mu 0 4 273 275 288 287
		f 4 372 429 -381 -429
		mu 0 4 275 277 289 288
		f 4 373 430 -382 -430
		mu 0 4 277 279 290 289
		f 4 374 431 -383 -431
		mu 0 4 279 281 291 290
		f 4 375 424 -384 -432
		mu 0 4 281 283 292 291
		f 4 376 433 -385 -433
		mu 0 4 285 284 293 294
		f 4 377 434 -386 -434
		mu 0 4 284 286 295 293
		f 4 378 435 -387 -435
		mu 0 4 286 287 296 295
		f 4 379 436 -388 -436
		mu 0 4 287 288 297 296
		f 4 380 437 -389 -437
		mu 0 4 288 289 298 297
		f 4 381 438 -390 -438
		mu 0 4 289 290 299 298
		f 4 382 439 -391 -439
		mu 0 4 290 291 300 299
		f 4 383 432 -392 -440
		mu 0 4 291 292 301 300
		f 4 384 441 -393 -441
		mu 0 4 294 293 302 303
		f 4 385 442 -394 -442
		mu 0 4 293 295 304 302
		f 4 386 443 -395 -443
		mu 0 4 295 296 305 304
		f 4 387 444 -396 -444
		mu 0 4 296 297 306 305
		f 4 388 445 -397 -445
		mu 0 4 297 298 307 306
		f 4 389 446 -398 -446
		mu 0 4 298 299 308 307
		f 4 390 447 -399 -447
		mu 0 4 299 300 309 308
		f 4 391 440 -400 -448
		mu 0 4 300 301 310 309
		f 4 392 449 -401 -449
		mu 0 4 303 302 311 312
		f 4 393 450 -402 -450
		mu 0 4 302 304 313 311
		f 4 394 451 -403 -451
		mu 0 4 304 305 314 313
		f 4 395 452 -404 -452
		mu 0 4 305 306 315 314
		f 4 396 453 -405 -453
		mu 0 4 306 307 316 315
		f 4 397 454 -406 -454
		mu 0 4 307 308 317 316
		f 4 398 455 -407 -455
		mu 0 4 308 309 318 317
		f 4 399 448 -408 -456
		mu 0 4 309 310 319 318
		f 4 400 457 -409 -457
		mu 0 4 312 311 320 321
		f 4 401 458 -410 -458
		mu 0 4 311 313 322 320
		f 4 402 459 -411 -459
		mu 0 4 313 314 323 322
		f 4 403 460 -412 -460
		mu 0 4 314 315 324 323
		f 4 404 461 -413 -461
		mu 0 4 315 316 325 324
		f 4 405 462 -414 -462
		mu 0 4 316 317 326 325
		f 4 406 463 -415 -463
		mu 0 4 317 318 327 326
		f 4 407 456 -416 -464
		mu 0 4 318 319 328 327
		f 3 -361 -465 465
		mu 0 3 267 266 329
		f 3 -362 -466 466
		mu 0 3 270 267 330
		f 3 -363 -467 467
		mu 0 3 272 270 331
		f 3 -364 -468 468
		mu 0 3 274 272 332
		f 3 -365 -469 469
		mu 0 3 276 274 333
		f 3 -366 -470 470
		mu 0 3 278 276 334
		f 3 -367 -471 471
		mu 0 3 280 278 335
		f 3 -368 -472 464
		mu 0 3 282 280 336
		f 3 408 473 -473
		mu 0 3 321 320 337
		f 3 409 474 -474
		mu 0 3 320 322 338
		f 3 410 475 -475
		mu 0 3 322 323 339
		f 3 411 476 -476
		mu 0 3 323 324 340
		f 3 412 477 -477
		mu 0 3 324 325 341
		f 3 413 478 -478
		mu 0 3 325 326 342
		f 3 414 479 -479
		mu 0 3 326 327 343
		f 3 415 472 -480
		mu 0 3 327 328 344
		f 4 480 497 -489 -497
		mu 0 4 345 346 347 348
		f 4 481 498 -490 -498
		mu 0 4 346 349 350 347
		f 4 482 499 -491 -499
		mu 0 4 349 351 352 350
		f 4 483 500 -492 -500
		mu 0 4 351 353 354 352
		f 4 484 501 -493 -501
		mu 0 4 353 355 356 354
		f 4 485 502 -494 -502
		mu 0 4 355 357 358 356
		f 4 486 503 -495 -503
		mu 0 4 357 359 360 358
		f 4 487 496 -496 -504
		mu 0 4 359 361 362 360
		f 3 -481 -505 505
		mu 0 3 363 364 365
		f 3 -482 -506 506
		mu 0 3 366 363 365
		f 3 -483 -507 507
		mu 0 3 367 366 365
		f 3 -484 -508 508
		mu 0 3 368 367 365
		f 3 -485 -509 509
		mu 0 3 369 368 365
		f 3 -486 -510 510
		mu 0 3 370 369 365
		f 3 -487 -511 511
		mu 0 3 371 370 365
		f 3 -488 -512 504
		mu 0 3 364 371 365
		f 3 488 513 -513
		mu 0 3 372 373 374
		f 3 489 514 -514
		mu 0 3 373 375 374
		f 3 490 515 -515
		mu 0 3 375 376 374
		f 3 491 516 -516
		mu 0 3 376 377 374
		f 3 492 517 -517
		mu 0 3 377 378 374
		f 3 493 518 -518
		mu 0 3 378 379 374
		f 3 494 519 -519
		mu 0 3 379 380 374
		f 3 495 512 -520
		mu 0 3 380 372 374
		f 4 523 522 -522 -521
		mu 0 4 381 382 383 384
		f 4 521 526 -526 -525
		mu 0 4 384 383 385 386
		f 4 525 529 -529 -528
		mu 0 4 386 385 387 388
		f 4 528 532 -532 -531
		mu 0 4 388 387 389 390
		f 4 531 535 -535 -534
		mu 0 4 390 389 391 392
		f 4 534 538 -538 -537
		mu 0 4 392 391 393 394
		f 4 537 541 -541 -540
		mu 0 4 394 393 395 396
		f 4 540 543 -524 -543
		mu 0 4 396 395 397 398
		f 4 546 545 -545 -523
		mu 0 4 382 399 400 383
		f 4 544 548 -548 -527
		mu 0 4 383 400 401 385
		f 4 547 550 -550 -530
		mu 0 4 385 401 402 387
		f 4 549 552 -552 -533
		mu 0 4 387 402 403 389
		f 4 551 554 -554 -536
		mu 0 4 389 403 404 391
		f 4 553 556 -556 -539
		mu 0 4 391 404 405 393
		f 4 555 558 -558 -542
		mu 0 4 393 405 406 395
		f 4 557 559 -547 -544
		mu 0 4 395 406 407 397
		f 4 562 561 -561 -546
		mu 0 4 399 408 409 400
		f 4 560 564 -564 -549
		mu 0 4 400 409 410 401
		f 4 563 566 -566 -551
		mu 0 4 401 410 411 402
		f 4 565 568 -568 -553
		mu 0 4 402 411 412 403
		f 4 567 570 -570 -555
		mu 0 4 403 412 413 404
		f 4 569 572 -572 -557
		mu 0 4 404 413 414 405
		f 4 571 574 -574 -559
		mu 0 4 405 414 415 406
		f 4 573 575 -563 -560
		mu 0 4 406 415 416 407
		f 4 578 577 -577 -562
		mu 0 4 408 417 418 409
		f 4 576 580 -580 -565
		mu 0 4 409 418 419 410
		f 4 579 582 -582 -567
		mu 0 4 410 419 420 411
		f 4 581 584 -584 -569
		mu 0 4 411 420 421 412
		f 4 583 586 -586 -571
		mu 0 4 412 421 422 413
		f 4 585 588 -588 -573
		mu 0 4 413 422 423 414
		f 4 587 590 -590 -575
		mu 0 4 414 423 424 415
		f 4 589 591 -579 -576
		mu 0 4 415 424 425 416
		f 4 594 593 -593 -578
		mu 0 4 417 426 427 418
		f 4 592 596 -596 -581
		mu 0 4 418 427 428 419
		f 4 595 598 -598 -583
		mu 0 4 419 428 429 420
		f 4 597 600 -600 -585
		mu 0 4 420 429 430 421
		f 4 599 602 -602 -587
		mu 0 4 421 430 431 422
		f 4 601 604 -604 -589
		mu 0 4 422 431 432 423
		f 4 603 606 -606 -591
		mu 0 4 423 432 433 424
		f 4 605 607 -595 -592
		mu 0 4 424 433 434 425
		f 4 610 609 -609 -594
		mu 0 4 426 435 436 427
		f 4 608 612 -612 -597
		mu 0 4 427 436 437 428
		f 4 611 614 -614 -599
		mu 0 4 428 437 438 429
		f 4 613 616 -616 -601
		mu 0 4 429 438 439 430
		f 4 615 618 -618 -603
		mu 0 4 430 439 440 431
		f 4 617 620 -620 -605
		mu 0 4 431 440 441 432
		f 4 619 622 -622 -607
		mu 0 4 432 441 442 433
		f 4 621 623 -611 -608
		mu 0 4 433 442 443 434
		f 3 -626 624 520
		mu 0 3 384 444 381
		f 3 -627 625 524
		mu 0 3 386 445 384
		f 3 -628 626 527
		mu 0 3 388 446 386
		f 3 -629 627 530
		mu 0 3 390 447 388
		f 3 -630 628 533
		mu 0 3 392 448 390
		f 3 -631 629 536
		mu 0 3 394 449 392
		f 3 -632 630 539
		mu 0 3 396 450 394
		f 3 -625 631 542
		mu 0 3 398 451 396
		f 3 633 -633 -610
		mu 0 3 435 452 436
		f 3 632 -635 -613
		mu 0 3 436 453 437
		f 3 634 -636 -615
		mu 0 3 437 454 438
		f 3 635 -637 -617
		mu 0 3 438 455 439
		f 3 636 -638 -619
		mu 0 3 439 456 440
		f 3 637 -639 -621
		mu 0 3 440 457 441
		f 3 638 -640 -623
		mu 0 3 441 458 442
		f 3 639 -634 -624
		mu 0 3 442 459 443
		f 4 643 642 -642 -641
		mu 0 4 460 461 462 463
		f 4 641 646 -646 -645
		mu 0 4 463 462 464 465
		f 4 645 649 -649 -648
		mu 0 4 465 464 466 467
		f 4 648 652 -652 -651
		mu 0 4 467 466 468 469
		f 4 651 655 -655 -654
		mu 0 4 469 468 470 471
		f 4 654 658 -658 -657
		mu 0 4 471 470 472 473
		f 4 657 661 -661 -660
		mu 0 4 473 472 474 475
		f 4 660 663 -644 -663
		mu 0 4 475 474 476 477
		f 3 -666 664 640
		mu 0 3 478 479 480
		f 3 -667 665 644
		mu 0 3 481 479 478
		f 3 -668 666 647
		mu 0 3 482 479 481
		f 3 -669 667 650
		mu 0 3 483 479 482
		f 3 -670 668 653
		mu 0 3 484 479 483
		f 3 -671 669 656
		mu 0 3 485 479 484
		f 3 -672 670 659
		mu 0 3 486 479 485
		f 3 -665 671 662
		mu 0 3 480 479 486
		f 3 673 -673 -643
		mu 0 3 487 488 489
		f 3 672 -675 -647
		mu 0 3 489 488 490
		f 3 674 -676 -650
		mu 0 3 490 488 491
		f 3 675 -677 -653
		mu 0 3 491 488 492
		f 3 676 -678 -656
		mu 0 3 492 488 493
		f 3 677 -679 -659
		mu 0 3 493 488 494
		f 3 678 -680 -662
		mu 0 3 494 488 495
		f 3 679 -674 -664
		mu 0 3 495 488 487
		f 4 683 682 -682 -681
		mu 0 4 496 497 498 499
		f 4 681 686 -686 -685
		mu 0 4 499 498 500 501
		f 4 685 689 -689 -688
		mu 0 4 501 500 502 503
		f 4 688 692 -692 -691
		mu 0 4 503 502 504 505
		f 4 691 695 -695 -694
		mu 0 4 505 504 506 507
		f 4 694 698 -698 -697
		mu 0 4 507 506 508 509
		f 4 697 701 -701 -700
		mu 0 4 509 508 510 511
		f 4 700 703 -684 -703
		mu 0 4 511 510 512 513
		f 4 706 705 -705 -683
		mu 0 4 497 514 515 498
		f 4 704 708 -708 -687
		mu 0 4 498 515 516 500
		f 4 707 710 -710 -690
		mu 0 4 500 516 517 502
		f 4 709 712 -712 -693
		mu 0 4 502 517 518 504
		f 4 711 714 -714 -696
		mu 0 4 504 518 519 506
		f 4 713 716 -716 -699
		mu 0 4 506 519 520 508
		f 4 715 718 -718 -702
		mu 0 4 508 520 521 510
		f 4 717 719 -707 -704
		mu 0 4 510 521 522 512
		f 4 722 721 -721 -706
		mu 0 4 514 523 524 515
		f 4 720 724 -724 -709
		mu 0 4 515 524 525 516
		f 4 723 726 -726 -711
		mu 0 4 516 525 526 517
		f 4 725 728 -728 -713
		mu 0 4 517 526 527 518
		f 4 727 730 -730 -715
		mu 0 4 518 527 528 519
		f 4 729 732 -732 -717
		mu 0 4 519 528 529 520
		f 4 731 734 -734 -719
		mu 0 4 520 529 530 521
		f 4 733 735 -723 -720
		mu 0 4 521 530 531 522
		f 4 738 737 -737 -722
		mu 0 4 523 532 533 524
		f 4 736 740 -740 -725
		mu 0 4 524 533 534 525
		f 4 739 742 -742 -727
		mu 0 4 525 534 535 526
		f 4 741 744 -744 -729
		mu 0 4 526 535 536 527
		f 4 743 746 -746 -731
		mu 0 4 527 536 537 528
		f 4 745 748 -748 -733
		mu 0 4 528 537 538 529
		f 4 747 750 -750 -735
		mu 0 4 529 538 539 530
		f 4 749 751 -739 -736
		mu 0 4 530 539 540 531
		f 4 754 753 -753 -738
		mu 0 4 532 541 542 533
		f 4 752 756 -756 -741
		mu 0 4 533 542 543 534
		f 4 755 758 -758 -743
		mu 0 4 534 543 544 535
		f 4 757 760 -760 -745
		mu 0 4 535 544 545 536
		f 4 759 762 -762 -747
		mu 0 4 536 545 546 537
		f 4 761 764 -764 -749
		mu 0 4 537 546 547 538
		f 4 763 766 -766 -751
		mu 0 4 538 547 548 539
		f 4 765 767 -755 -752
		mu 0 4 539 548 549 540
		f 4 770 769 -769 -754
		mu 0 4 541 550 551 542
		f 4 768 772 -772 -757
		mu 0 4 542 551 552 543
		f 4 771 774 -774 -759
		mu 0 4 543 552 553 544
		f 4 773 776 -776 -761
		mu 0 4 544 553 554 545
		f 4 775 778 -778 -763
		mu 0 4 545 554 555 546
		f 4 777 780 -780 -765
		mu 0 4 546 555 556 547
		f 4 779 782 -782 -767
		mu 0 4 547 556 557 548
		f 4 781 783 -771 -768
		mu 0 4 548 557 558 549
		f 3 -786 784 680
		mu 0 3 499 559 496
		f 3 -787 785 684
		mu 0 3 501 560 499
		f 3 -788 786 687
		mu 0 3 503 561 501
		f 3 -789 787 690
		mu 0 3 505 562 503
		f 3 -790 788 693
		mu 0 3 507 563 505
		f 3 -791 789 696
		mu 0 3 509 564 507
		f 3 -792 790 699
		mu 0 3 511 565 509
		f 3 -785 791 702
		mu 0 3 513 566 511
		f 3 793 -793 -770
		mu 0 3 550 567 551
		f 3 792 -795 -773
		mu 0 3 551 568 552
		f 3 794 -796 -775
		mu 0 3 552 569 553
		f 3 795 -797 -777
		mu 0 3 553 570 554
		f 3 796 -798 -779
		mu 0 3 554 571 555
		f 3 797 -799 -781
		mu 0 3 555 572 556
		f 3 798 -800 -783
		mu 0 3 556 573 557
		f 3 799 -794 -784
		mu 0 3 557 574 558
		f 4 803 802 -802 -801
		mu 0 4 575 576 577 578
		f 4 801 806 -806 -805
		mu 0 4 578 577 579 580
		f 4 805 809 -809 -808
		mu 0 4 580 579 581 582
		f 4 808 812 -812 -811
		mu 0 4 582 581 583 584
		f 4 811 815 -815 -814
		mu 0 4 584 583 585 586
		f 4 814 818 -818 -817
		mu 0 4 586 585 587 588
		f 4 817 821 -821 -820
		mu 0 4 588 587 589 590
		f 4 820 823 -804 -823
		mu 0 4 590 589 591 592
		f 4 826 825 -825 -803
		mu 0 4 576 593 594 577
		f 4 824 828 -828 -807
		mu 0 4 577 594 595 579
		f 4 827 830 -830 -810
		mu 0 4 579 595 596 581
		f 4 829 832 -832 -813
		mu 0 4 581 596 597 583
		f 4 831 834 -834 -816
		mu 0 4 583 597 598 585
		f 4 833 836 -836 -819
		mu 0 4 585 598 599 587
		f 4 835 838 -838 -822
		mu 0 4 587 599 600 589
		f 4 837 839 -827 -824
		mu 0 4 589 600 601 591
		f 4 842 841 -841 -826
		mu 0 4 593 602 603 594
		f 4 840 844 -844 -829
		mu 0 4 594 603 604 595
		f 4 843 846 -846 -831
		mu 0 4 595 604 605 596
		f 4 845 848 -848 -833
		mu 0 4 596 605 606 597
		f 4 847 850 -850 -835
		mu 0 4 597 606 607 598
		f 4 849 852 -852 -837
		mu 0 4 598 607 608 599
		f 4 851 854 -854 -839
		mu 0 4 599 608 609 600
		f 4 853 855 -843 -840
		mu 0 4 600 609 610 601
		f 4 858 857 -857 -842
		mu 0 4 602 611 612 603
		f 4 856 860 -860 -845
		mu 0 4 603 612 613 604
		f 4 859 862 -862 -847
		mu 0 4 604 613 614 605
		f 4 861 864 -864 -849
		mu 0 4 605 614 615 606
		f 4 863 866 -866 -851
		mu 0 4 606 615 616 607
		f 4 865 868 -868 -853
		mu 0 4 607 616 617 608
		f 4 867 870 -870 -855
		mu 0 4 608 617 618 609
		f 4 869 871 -859 -856
		mu 0 4 609 618 619 610
		f 4 874 873 -873 -858
		mu 0 4 611 620 621 612
		f 4 872 876 -876 -861
		mu 0 4 612 621 622 613
		f 4 875 878 -878 -863
		mu 0 4 613 622 623 614
		f 4 877 880 -880 -865
		mu 0 4 614 623 624 615
		f 4 879 882 -882 -867
		mu 0 4 615 624 625 616
		f 4 881 884 -884 -869
		mu 0 4 616 625 626 617
		f 4 883 886 -886 -871
		mu 0 4 617 626 627 618
		f 4 885 887 -875 -872
		mu 0 4 618 627 628 619
		f 4 890 889 -889 -874
		mu 0 4 620 629 630 621
		f 4 888 892 -892 -877
		mu 0 4 621 630 631 622
		f 4 891 894 -894 -879
		mu 0 4 622 631 632 623
		f 4 893 896 -896 -881
		mu 0 4 623 632 633 624
		f 4 895 898 -898 -883
		mu 0 4 624 633 634 625
		f 4 897 900 -900 -885
		mu 0 4 625 634 635 626
		f 4 899 902 -902 -887
		mu 0 4 626 635 636 627
		f 4 901 903 -891 -888
		mu 0 4 627 636 637 628
		f 3 -906 904 800
		mu 0 3 578 638 575
		f 3 -907 905 804
		mu 0 3 580 639 578
		f 3 -908 906 807
		mu 0 3 582 640 580
		f 3 -909 907 810
		mu 0 3 584 641 582
		f 3 -910 908 813
		mu 0 3 586 642 584
		f 3 -911 909 816
		mu 0 3 588 643 586
		f 3 -912 910 819
		mu 0 3 590 644 588
		f 3 -905 911 822
		mu 0 3 592 645 590
		f 3 913 -913 -890
		mu 0 3 629 646 630
		f 3 912 -915 -893
		mu 0 3 630 647 631
		f 3 914 -916 -895
		mu 0 3 631 648 632
		f 3 915 -917 -897
		mu 0 3 632 649 633;
	setAttr ".fc[500:933]"
		f 3 916 -918 -899
		mu 0 3 633 650 634
		f 3 917 -919 -901
		mu 0 3 634 651 635
		f 3 918 -920 -903
		mu 0 3 635 652 636
		f 3 919 -914 -904
		mu 0 3 636 653 637
		f 4 923 922 -922 -921
		mu 0 4 654 655 656 657
		f 4 921 926 -926 -925
		mu 0 4 657 656 658 659
		f 4 925 929 -929 -928
		mu 0 4 659 658 660 661
		f 4 928 932 -932 -931
		mu 0 4 661 660 662 663
		f 4 931 935 -935 -934
		mu 0 4 663 662 664 665
		f 4 934 938 -938 -937
		mu 0 4 665 664 666 667
		f 4 937 941 -941 -940
		mu 0 4 667 666 668 669
		f 4 940 943 -924 -943
		mu 0 4 669 668 670 671
		f 3 -946 944 920
		mu 0 3 672 673 674
		f 3 -947 945 924
		mu 0 3 675 673 672
		f 3 -948 946 927
		mu 0 3 676 673 675
		f 3 -949 947 930
		mu 0 3 677 673 676
		f 3 -950 948 933
		mu 0 3 678 673 677
		f 3 -951 949 936
		mu 0 3 679 673 678
		f 3 -952 950 939
		mu 0 3 680 673 679
		f 3 -945 951 942
		mu 0 3 674 673 680
		f 3 953 -953 -923
		mu 0 3 681 682 683
		f 3 952 -955 -927
		mu 0 3 683 682 684
		f 3 954 -956 -930
		mu 0 3 684 682 685
		f 3 955 -957 -933
		mu 0 3 685 682 686
		f 3 956 -958 -936
		mu 0 3 686 682 687
		f 3 957 -959 -939
		mu 0 3 687 682 688
		f 3 958 -960 -942
		mu 0 3 688 682 689
		f 3 959 -954 -944
		mu 0 3 689 682 681
		f 4 960 1017 -969 -1017
		mu 0 4 690 691 692 693
		f 4 961 1018 -970 -1018
		mu 0 4 691 694 695 692
		f 4 962 1019 -971 -1019
		mu 0 4 694 696 697 695
		f 4 963 1020 -972 -1020
		mu 0 4 696 698 699 697
		f 4 964 1021 -973 -1021
		mu 0 4 698 700 701 699
		f 4 965 1022 -974 -1022
		mu 0 4 700 702 703 701
		f 4 966 1023 -975 -1023
		mu 0 4 702 704 705 703
		f 4 967 1016 -976 -1024
		mu 0 4 704 706 707 705
		f 4 968 1025 -977 -1025
		mu 0 4 693 692 708 709
		f 4 969 1026 -978 -1026
		mu 0 4 692 695 710 708
		f 4 970 1027 -979 -1027
		mu 0 4 695 697 711 710
		f 4 971 1028 -980 -1028
		mu 0 4 697 699 712 711
		f 4 972 1029 -981 -1029
		mu 0 4 699 701 713 712
		f 4 973 1030 -982 -1030
		mu 0 4 701 703 714 713
		f 4 974 1031 -983 -1031
		mu 0 4 703 705 715 714
		f 4 975 1024 -984 -1032
		mu 0 4 705 707 716 715
		f 4 976 1033 -985 -1033
		mu 0 4 709 708 717 718
		f 4 977 1034 -986 -1034
		mu 0 4 708 710 719 717
		f 4 978 1035 -987 -1035
		mu 0 4 710 711 720 719
		f 4 979 1036 -988 -1036
		mu 0 4 711 712 721 720
		f 4 980 1037 -989 -1037
		mu 0 4 712 713 722 721
		f 4 981 1038 -990 -1038
		mu 0 4 713 714 723 722
		f 4 982 1039 -991 -1039
		mu 0 4 714 715 724 723
		f 4 983 1032 -992 -1040
		mu 0 4 715 716 725 724
		f 4 984 1041 -993 -1041
		mu 0 4 718 717 726 727
		f 4 985 1042 -994 -1042
		mu 0 4 717 719 728 726
		f 4 986 1043 -995 -1043
		mu 0 4 719 720 729 728
		f 4 987 1044 -996 -1044
		mu 0 4 720 721 730 729
		f 4 988 1045 -997 -1045
		mu 0 4 721 722 731 730
		f 4 989 1046 -998 -1046
		mu 0 4 722 723 732 731
		f 4 990 1047 -999 -1047
		mu 0 4 723 724 733 732
		f 4 991 1040 -1000 -1048
		mu 0 4 724 725 734 733
		f 4 992 1049 -1001 -1049
		mu 0 4 727 726 735 736
		f 4 993 1050 -1002 -1050
		mu 0 4 726 728 737 735
		f 4 994 1051 -1003 -1051
		mu 0 4 728 729 738 737
		f 4 995 1052 -1004 -1052
		mu 0 4 729 730 739 738
		f 4 996 1053 -1005 -1053
		mu 0 4 730 731 740 739
		f 4 997 1054 -1006 -1054
		mu 0 4 731 732 741 740
		f 4 998 1055 -1007 -1055
		mu 0 4 732 733 742 741
		f 4 999 1048 -1008 -1056
		mu 0 4 733 734 743 742
		f 4 1000 1057 -1009 -1057
		mu 0 4 736 735 744 745
		f 4 1001 1058 -1010 -1058
		mu 0 4 735 737 746 744
		f 4 1002 1059 -1011 -1059
		mu 0 4 737 738 747 746
		f 4 1003 1060 -1012 -1060
		mu 0 4 738 739 748 747
		f 4 1004 1061 -1013 -1061
		mu 0 4 739 740 749 748
		f 4 1005 1062 -1014 -1062
		mu 0 4 740 741 750 749
		f 4 1006 1063 -1015 -1063
		mu 0 4 741 742 751 750
		f 4 1007 1056 -1016 -1064
		mu 0 4 742 743 752 751
		f 3 -961 -1065 1065
		mu 0 3 691 690 753
		f 3 -962 -1066 1066
		mu 0 3 694 691 754
		f 3 -963 -1067 1067
		mu 0 3 696 694 755
		f 3 -964 -1068 1068
		mu 0 3 698 696 756
		f 3 -965 -1069 1069
		mu 0 3 700 698 757
		f 3 -966 -1070 1070
		mu 0 3 702 700 758
		f 3 -967 -1071 1071
		mu 0 3 704 702 759
		f 3 -968 -1072 1064
		mu 0 3 706 704 760
		f 3 1008 1073 -1073
		mu 0 3 745 744 761
		f 3 1009 1074 -1074
		mu 0 3 744 746 762
		f 3 1010 1075 -1075
		mu 0 3 746 747 763
		f 3 1011 1076 -1076
		mu 0 3 747 748 764
		f 3 1012 1077 -1077
		mu 0 3 748 749 765
		f 3 1013 1078 -1078
		mu 0 3 749 750 766
		f 3 1014 1079 -1079
		mu 0 3 750 751 767
		f 3 1015 1072 -1080
		mu 0 3 751 752 768
		f 4 1083 1082 -1082 -1081
		mu 0 4 769 770 771 772
		f 4 1081 1086 -1086 -1085
		mu 0 4 772 771 773 774
		f 4 1085 1089 -1089 -1088
		mu 0 4 774 773 775 776
		f 4 1088 1092 -1092 -1091
		mu 0 4 776 775 777 778
		f 4 1091 1095 -1095 -1094
		mu 0 4 778 777 779 780
		f 4 1094 1098 -1098 -1097
		mu 0 4 780 779 781 782
		f 4 1097 1101 -1101 -1100
		mu 0 4 782 781 783 784
		f 4 1100 1103 -1084 -1103
		mu 0 4 784 783 785 786
		f 4 1106 1105 -1105 -1083
		mu 0 4 770 787 788 771
		f 4 1104 1108 -1108 -1087
		mu 0 4 771 788 789 773
		f 4 1107 1110 -1110 -1090
		mu 0 4 773 789 790 775
		f 4 1109 1112 -1112 -1093
		mu 0 4 775 790 791 777
		f 4 1111 1114 -1114 -1096
		mu 0 4 777 791 792 779
		f 4 1113 1116 -1116 -1099
		mu 0 4 779 792 793 781
		f 4 1115 1118 -1118 -1102
		mu 0 4 781 793 794 783
		f 4 1117 1119 -1107 -1104
		mu 0 4 783 794 795 785
		f 4 1122 1121 -1121 -1106
		mu 0 4 787 796 797 788
		f 4 1120 1124 -1124 -1109
		mu 0 4 788 797 798 789
		f 4 1123 1126 -1126 -1111
		mu 0 4 789 798 799 790
		f 4 1125 1128 -1128 -1113
		mu 0 4 790 799 800 791
		f 4 1127 1130 -1130 -1115
		mu 0 4 791 800 801 792
		f 4 1129 1132 -1132 -1117
		mu 0 4 792 801 802 793
		f 4 1131 1134 -1134 -1119
		mu 0 4 793 802 803 794
		f 4 1133 1135 -1123 -1120
		mu 0 4 794 803 804 795
		f 4 1138 1137 -1137 -1122
		mu 0 4 796 805 806 797
		f 4 1136 1140 -1140 -1125
		mu 0 4 797 806 807 798
		f 4 1139 1142 -1142 -1127
		mu 0 4 798 807 808 799
		f 4 1141 1144 -1144 -1129
		mu 0 4 799 808 809 800
		f 4 1143 1146 -1146 -1131
		mu 0 4 800 809 810 801
		f 4 1145 1148 -1148 -1133
		mu 0 4 801 810 811 802
		f 4 1147 1150 -1150 -1135
		mu 0 4 802 811 812 803
		f 4 1149 1151 -1139 -1136
		mu 0 4 803 812 813 804
		f 4 1154 1153 -1153 -1138
		mu 0 4 805 814 815 806
		f 4 1152 1156 -1156 -1141
		mu 0 4 806 815 816 807
		f 4 1155 1158 -1158 -1143
		mu 0 4 807 816 817 808
		f 4 1157 1160 -1160 -1145
		mu 0 4 808 817 818 809
		f 4 1159 1162 -1162 -1147
		mu 0 4 809 818 819 810
		f 4 1161 1164 -1164 -1149
		mu 0 4 810 819 820 811
		f 4 1163 1166 -1166 -1151
		mu 0 4 811 820 821 812
		f 4 1165 1167 -1155 -1152
		mu 0 4 812 821 822 813
		f 4 1170 1169 -1169 -1154
		mu 0 4 814 823 824 815
		f 4 1168 1172 -1172 -1157
		mu 0 4 815 824 825 816
		f 4 1171 1174 -1174 -1159
		mu 0 4 816 825 826 817
		f 4 1173 1176 -1176 -1161
		mu 0 4 817 826 827 818
		f 4 1175 1178 -1178 -1163
		mu 0 4 818 827 828 819
		f 4 1177 1180 -1180 -1165
		mu 0 4 819 828 829 820
		f 4 1179 1182 -1182 -1167
		mu 0 4 820 829 830 821
		f 4 1181 1183 -1171 -1168
		mu 0 4 821 830 831 822
		f 3 -1186 1184 1080
		mu 0 3 772 832 769
		f 3 -1187 1185 1084
		mu 0 3 774 833 772
		f 3 -1188 1186 1087
		mu 0 3 776 834 774
		f 3 -1189 1187 1090
		mu 0 3 778 835 776
		f 3 -1190 1188 1093
		mu 0 3 780 836 778
		f 3 -1191 1189 1096
		mu 0 3 782 837 780
		f 3 -1192 1190 1099
		mu 0 3 784 838 782
		f 3 -1185 1191 1102
		mu 0 3 786 839 784
		f 3 1193 -1193 -1170
		mu 0 3 823 840 824
		f 3 1192 -1195 -1173
		mu 0 3 824 841 825
		f 3 1194 -1196 -1175
		mu 0 3 825 842 826
		f 3 1195 -1197 -1177
		mu 0 3 826 843 827
		f 3 1196 -1198 -1179
		mu 0 3 827 844 828
		f 3 1197 -1199 -1181
		mu 0 3 828 845 829
		f 3 1198 -1200 -1183
		mu 0 3 829 846 830
		f 3 1199 -1194 -1184
		mu 0 3 830 847 831
		f 4 1203 1202 -1202 -1201
		mu 0 4 848 849 850 851
		f 4 1201 1206 -1206 -1205
		mu 0 4 851 850 852 853
		f 4 1205 1209 -1209 -1208
		mu 0 4 853 852 854 855
		f 4 1208 1212 -1212 -1211
		mu 0 4 855 854 856 857
		f 4 1211 1215 -1215 -1214
		mu 0 4 857 856 858 859
		f 4 1214 1218 -1218 -1217
		mu 0 4 859 858 860 861
		f 4 1217 1221 -1221 -1220
		mu 0 4 861 860 862 863
		f 4 1220 1223 -1204 -1223
		mu 0 4 863 862 864 865
		f 4 1226 1225 -1225 -1203
		mu 0 4 849 866 867 850
		f 4 1224 1228 -1228 -1207
		mu 0 4 850 867 868 852
		f 4 1227 1230 -1230 -1210
		mu 0 4 852 868 869 854
		f 4 1229 1232 -1232 -1213
		mu 0 4 854 869 870 856
		f 4 1231 1234 -1234 -1216
		mu 0 4 856 870 871 858
		f 4 1233 1236 -1236 -1219
		mu 0 4 858 871 872 860
		f 4 1235 1238 -1238 -1222
		mu 0 4 860 872 873 862
		f 4 1237 1239 -1227 -1224
		mu 0 4 862 873 874 864
		f 4 1242 1241 -1241 -1226
		mu 0 4 866 875 876 867
		f 4 1240 1244 -1244 -1229
		mu 0 4 867 876 877 868
		f 4 1243 1246 -1246 -1231
		mu 0 4 868 877 878 869
		f 4 1245 1248 -1248 -1233
		mu 0 4 869 878 879 870
		f 4 1247 1250 -1250 -1235
		mu 0 4 870 879 880 871
		f 4 1249 1252 -1252 -1237
		mu 0 4 871 880 881 872
		f 4 1251 1254 -1254 -1239
		mu 0 4 872 881 882 873
		f 4 1253 1255 -1243 -1240
		mu 0 4 873 882 883 874
		f 4 1258 1257 -1257 -1242
		mu 0 4 875 884 885 876
		f 4 1256 1260 -1260 -1245
		mu 0 4 876 885 886 877
		f 4 1259 1262 -1262 -1247
		mu 0 4 877 886 887 878
		f 4 1261 1264 -1264 -1249
		mu 0 4 878 887 888 879
		f 4 1263 1266 -1266 -1251
		mu 0 4 879 888 889 880
		f 4 1265 1268 -1268 -1253
		mu 0 4 880 889 890 881
		f 4 1267 1270 -1270 -1255
		mu 0 4 881 890 891 882
		f 4 1269 1271 -1259 -1256
		mu 0 4 882 891 892 883
		f 4 1274 1273 -1273 -1258
		mu 0 4 884 893 894 885
		f 4 1272 1276 -1276 -1261
		mu 0 4 885 894 895 886
		f 4 1275 1278 -1278 -1263
		mu 0 4 886 895 896 887
		f 4 1277 1280 -1280 -1265
		mu 0 4 887 896 897 888
		f 4 1279 1282 -1282 -1267
		mu 0 4 888 897 898 889
		f 4 1281 1284 -1284 -1269
		mu 0 4 889 898 899 890
		f 4 1283 1286 -1286 -1271
		mu 0 4 890 899 900 891
		f 4 1285 1287 -1275 -1272
		mu 0 4 891 900 901 892
		f 4 1290 1289 -1289 -1274
		mu 0 4 893 902 903 894
		f 4 1288 1292 -1292 -1277
		mu 0 4 894 903 904 895
		f 4 1291 1294 -1294 -1279
		mu 0 4 895 904 905 896
		f 4 1293 1296 -1296 -1281
		mu 0 4 896 905 906 897
		f 4 1295 1298 -1298 -1283
		mu 0 4 897 906 907 898
		f 4 1297 1300 -1300 -1285
		mu 0 4 898 907 908 899
		f 4 1299 1302 -1302 -1287
		mu 0 4 899 908 909 900
		f 4 1301 1303 -1291 -1288
		mu 0 4 900 909 910 901
		f 3 -1306 1304 1200
		mu 0 3 851 911 848
		f 3 -1307 1305 1204
		mu 0 3 853 912 851
		f 3 -1308 1306 1207
		mu 0 3 855 913 853
		f 3 -1309 1307 1210
		mu 0 3 857 914 855
		f 3 -1310 1308 1213
		mu 0 3 859 915 857
		f 3 -1311 1309 1216
		mu 0 3 861 916 859
		f 3 -1312 1310 1219
		mu 0 3 863 917 861
		f 3 -1305 1311 1222
		mu 0 3 865 918 863
		f 3 1313 -1313 -1290
		mu 0 3 902 919 903
		f 3 1312 -1315 -1293
		mu 0 3 903 920 904
		f 3 1314 -1316 -1295
		mu 0 3 904 921 905
		f 3 1315 -1317 -1297
		mu 0 3 905 922 906
		f 3 1316 -1318 -1299
		mu 0 3 906 923 907
		f 3 1317 -1319 -1301
		mu 0 3 907 924 908
		f 3 1318 -1320 -1303
		mu 0 3 908 925 909
		f 3 1319 -1314 -1304
		mu 0 3 909 926 910
		f 4 1320 1377 -1329 -1377
		mu 0 4 927 928 929 930
		f 4 1321 1378 -1330 -1378
		mu 0 4 928 931 932 929
		f 4 1322 1379 -1331 -1379
		mu 0 4 931 933 934 932
		f 4 1323 1380 -1332 -1380
		mu 0 4 933 935 936 934
		f 4 1324 1381 -1333 -1381
		mu 0 4 935 937 938 936
		f 4 1325 1382 -1334 -1382
		mu 0 4 937 939 940 938
		f 4 1326 1383 -1335 -1383
		mu 0 4 939 941 942 940
		f 4 1327 1376 -1336 -1384
		mu 0 4 941 943 944 942
		f 4 1328 1385 -1337 -1385
		mu 0 4 930 929 945 946
		f 4 1329 1386 -1338 -1386
		mu 0 4 929 932 947 945
		f 4 1330 1387 -1339 -1387
		mu 0 4 932 934 948 947
		f 4 1331 1388 -1340 -1388
		mu 0 4 934 936 949 948
		f 4 1332 1389 -1341 -1389
		mu 0 4 936 938 950 949
		f 4 1333 1390 -1342 -1390
		mu 0 4 938 940 951 950
		f 4 1334 1391 -1343 -1391
		mu 0 4 940 942 952 951
		f 4 1335 1384 -1344 -1392
		mu 0 4 942 944 953 952
		f 4 1336 1393 -1345 -1393
		mu 0 4 946 945 954 955
		f 4 1337 1394 -1346 -1394
		mu 0 4 945 947 956 954
		f 4 1338 1395 -1347 -1395
		mu 0 4 947 948 957 956
		f 4 1339 1396 -1348 -1396
		mu 0 4 948 949 958 957
		f 4 1340 1397 -1349 -1397
		mu 0 4 949 950 959 958
		f 4 1341 1398 -1350 -1398
		mu 0 4 950 951 960 959
		f 4 1342 1399 -1351 -1399
		mu 0 4 951 952 961 960
		f 4 1343 1392 -1352 -1400
		mu 0 4 952 953 962 961
		f 4 1344 1401 -1353 -1401
		mu 0 4 955 954 963 964
		f 4 1345 1402 -1354 -1402
		mu 0 4 954 956 965 963
		f 4 1346 1403 -1355 -1403
		mu 0 4 956 957 966 965
		f 4 1347 1404 -1356 -1404
		mu 0 4 957 958 967 966
		f 4 1348 1405 -1357 -1405
		mu 0 4 958 959 968 967
		f 4 1349 1406 -1358 -1406
		mu 0 4 959 960 969 968
		f 4 1350 1407 -1359 -1407
		mu 0 4 960 961 970 969
		f 4 1351 1400 -1360 -1408
		mu 0 4 961 962 971 970
		f 4 1352 1409 -1361 -1409
		mu 0 4 964 963 972 973
		f 4 1353 1410 -1362 -1410
		mu 0 4 963 965 974 972
		f 4 1354 1411 -1363 -1411
		mu 0 4 965 966 975 974
		f 4 1355 1412 -1364 -1412
		mu 0 4 966 967 976 975
		f 4 1356 1413 -1365 -1413
		mu 0 4 967 968 977 976
		f 4 1357 1414 -1366 -1414
		mu 0 4 968 969 978 977
		f 4 1358 1415 -1367 -1415
		mu 0 4 969 970 979 978
		f 4 1359 1408 -1368 -1416
		mu 0 4 970 971 980 979
		f 4 1360 1417 -1369 -1417
		mu 0 4 973 972 981 982
		f 4 1361 1418 -1370 -1418
		mu 0 4 972 974 983 981
		f 4 1362 1419 -1371 -1419
		mu 0 4 974 975 984 983
		f 4 1363 1420 -1372 -1420
		mu 0 4 975 976 985 984
		f 4 1364 1421 -1373 -1421
		mu 0 4 976 977 986 985
		f 4 1365 1422 -1374 -1422
		mu 0 4 977 978 987 986
		f 4 1366 1423 -1375 -1423
		mu 0 4 978 979 988 987
		f 4 1367 1416 -1376 -1424
		mu 0 4 979 980 989 988
		f 3 -1321 -1425 1425
		mu 0 3 928 927 990
		f 3 -1322 -1426 1426
		mu 0 3 931 928 991
		f 3 -1323 -1427 1427
		mu 0 3 933 931 992
		f 3 -1324 -1428 1428
		mu 0 3 935 933 993
		f 3 -1325 -1429 1429
		mu 0 3 937 935 994
		f 3 -1326 -1430 1430
		mu 0 3 939 937 995
		f 3 -1327 -1431 1431
		mu 0 3 941 939 996
		f 3 -1328 -1432 1424
		mu 0 3 943 941 997
		f 3 1368 1433 -1433
		mu 0 3 982 981 998
		f 3 1369 1434 -1434
		mu 0 3 981 983 999
		f 3 1370 1435 -1435
		mu 0 3 983 984 1000
		f 3 1371 1436 -1436
		mu 0 3 984 985 1001
		f 3 1372 1437 -1437
		mu 0 3 985 986 1002
		f 3 1373 1438 -1438
		mu 0 3 986 987 1003
		f 3 1374 1439 -1439
		mu 0 3 987 988 1004
		f 3 1375 1432 -1440
		mu 0 3 988 989 1005
		f 4 1440 1469 -1445 -1469
		mu 0 4 1006 1007 1008 1009
		f 4 1441 1470 -1446 -1470
		mu 0 4 1007 1010 1011 1008
		f 4 1442 1471 -1447 -1471
		mu 0 4 1010 1012 1013 1011
		f 4 1443 1472 -1448 -1472
		mu 0 4 1012 1014 1015 1013
		f 4 1444 1474 -1449 -1474
		mu 0 4 1009 1008 1016 1017
		f 4 1445 1475 -1450 -1475
		mu 0 4 1008 1011 1018 1016
		f 4 1446 1476 -1451 -1476
		mu 0 4 1011 1013 1019 1018
		f 4 1447 1477 -1452 -1477
		mu 0 4 1013 1015 1020 1019
		f 4 1448 1479 -1453 -1479
		mu 0 4 1017 1016 1021 1022
		f 4 1449 1480 -1454 -1480
		mu 0 4 1016 1018 1023 1021
		f 4 1450 1481 -1455 -1481
		mu 0 4 1018 1019 1024 1023
		f 4 1451 1482 -1456 -1482
		mu 0 4 1019 1020 1025 1024
		f 4 1452 1484 -1457 -1484
		mu 0 4 1022 1021 1026 1027
		f 4 1453 1485 -1458 -1485
		mu 0 4 1021 1023 1028 1026
		f 4 1454 1486 -1459 -1486
		mu 0 4 1023 1024 1029 1028
		f 4 1455 1487 -1460 -1487
		mu 0 4 1024 1025 1030 1029
		f 4 1456 1489 -1461 -1489
		mu 0 4 1027 1026 1031 1032
		f 4 1457 1490 -1462 -1490
		mu 0 4 1026 1028 1033 1031
		f 4 1458 1491 -1463 -1491
		mu 0 4 1028 1029 1034 1033
		f 4 1459 1492 -1464 -1492
		mu 0 4 1029 1030 1035 1034
		f 4 1460 1494 -1465 -1494
		mu 0 4 1032 1031 1036 1037
		f 4 1461 1495 -1466 -1495
		mu 0 4 1031 1033 1038 1036
		f 4 1462 1496 -1467 -1496
		mu 0 4 1033 1034 1039 1038
		f 4 1463 1497 -1468 -1497
		mu 0 4 1034 1035 1040 1039
		f 3 -1441 -1499 1499
		mu 0 3 1007 1006 1041
		f 3 -1442 -1500 1500
		mu 0 3 1010 1007 1042
		f 3 -1443 -1501 1501
		mu 0 3 1012 1010 1043
		f 3 -1444 -1502 1502
		mu 0 3 1014 1012 1044
		f 3 1464 1504 -1504
		mu 0 3 1037 1036 1045
		f 3 1465 1505 -1505
		mu 0 3 1036 1038 1046
		f 3 1466 1506 -1506
		mu 0 3 1038 1039 1047
		f 3 1467 1507 -1507
		mu 0 3 1039 1040 1048
		f 4 1511 1510 -1510 -1509
		mu 0 4 1049 1050 1051 1052
		f 4 1509 1514 -1514 -1513
		mu 0 4 1052 1051 1053 1054
		f 4 1513 1517 -1517 -1516
		mu 0 4 1054 1053 1055 1056
		f 4 1516 1520 -1520 -1519
		mu 0 4 1056 1055 1057 1058
		f 4 1523 1522 -1522 -1511
		mu 0 4 1050 1059 1060 1051
		f 4 1521 1525 -1525 -1515
		mu 0 4 1051 1060 1061 1053
		f 4 1524 1527 -1527 -1518
		mu 0 4 1053 1061 1062 1055
		f 4 1526 1529 -1529 -1521
		mu 0 4 1055 1062 1063 1057
		f 4 1532 1531 -1531 -1523
		mu 0 4 1059 1064 1065 1060
		f 4 1530 1534 -1534 -1526
		mu 0 4 1060 1065 1066 1061
		f 4 1533 1536 -1536 -1528
		mu 0 4 1061 1066 1067 1062
		f 4 1535 1538 -1538 -1530
		mu 0 4 1062 1067 1068 1063
		f 4 1541 1540 -1540 -1532
		mu 0 4 1064 1069 1070 1065
		f 4 1539 1543 -1543 -1535
		mu 0 4 1065 1070 1071 1066
		f 4 1542 1545 -1545 -1537
		mu 0 4 1066 1071 1072 1067
		f 4 1544 1547 -1547 -1539
		mu 0 4 1067 1072 1073 1068
		f 4 1550 1549 -1549 -1541
		mu 0 4 1069 1074 1075 1070
		f 4 1548 1552 -1552 -1544
		mu 0 4 1070 1075 1076 1071
		f 4 1551 1554 -1554 -1546
		mu 0 4 1071 1076 1077 1072
		f 4 1553 1556 -1556 -1548
		mu 0 4 1072 1077 1078 1073
		f 4 1559 1558 -1558 -1550
		mu 0 4 1074 1079 1080 1075
		f 4 1557 1561 -1561 -1553
		mu 0 4 1075 1080 1081 1076
		f 4 1560 1563 -1563 -1555
		mu 0 4 1076 1081 1082 1077
		f 4 1562 1565 -1565 -1557
		mu 0 4 1077 1082 1083 1078
		f 3 -1568 1566 1508
		mu 0 3 1052 1084 1049
		f 3 -1569 1567 1512
		mu 0 3 1054 1085 1052
		f 3 -1570 1568 1515
		mu 0 3 1056 1086 1054
		f 3 -1571 1569 1518
		mu 0 3 1058 1087 1056
		f 3 1572 -1572 -1559
		mu 0 3 1079 1088 1080
		f 3 1571 -1574 -1562
		mu 0 3 1080 1089 1081
		f 3 1573 -1575 -1564
		mu 0 3 1081 1090 1082
		f 3 1574 -1576 -1566
		mu 0 3 1082 1091 1083
		f 4 1579 1578 -1578 -1577
		mu 0 4 1092 1093 1094 1095
		f 4 1577 1582 -1582 -1581
		mu 0 4 1095 1094 1096 1097
		f 4 1581 1585 -1585 -1584
		mu 0 4 1097 1096 1098 1099
		f 4 1584 1588 -1588 -1587
		mu 0 4 1099 1098 1100 1101
		f 4 1587 1591 -1591 -1590
		mu 0 4 1101 1100 1102 1103
		f 4 1590 1594 -1594 -1593
		mu 0 4 1103 1102 1104 1105
		f 4 1593 1597 -1597 -1596
		mu 0 4 1105 1104 1106 1107
		f 4 1596 1599 -1580 -1599
		mu 0 4 1107 1106 1108 1109
		f 3 -1602 1600 1576
		mu 0 3 1110 1111 1112
		f 3 -1603 1601 1580
		mu 0 3 1113 1111 1110
		f 3 -1604 1602 1583
		mu 0 3 1114 1111 1113
		f 3 -1605 1603 1586
		mu 0 3 1115 1111 1114
		f 3 -1606 1604 1589
		mu 0 3 1116 1111 1115
		f 3 -1607 1605 1592
		mu 0 3 1117 1111 1116
		f 3 -1608 1606 1595
		mu 0 3 1118 1111 1117
		f 3 -1601 1607 1598
		mu 0 3 1112 1111 1118
		f 3 1609 -1609 -1579
		mu 0 3 1119 1120 1121
		f 3 1608 -1611 -1583
		mu 0 3 1121 1120 1122
		f 3 1610 -1612 -1586
		mu 0 3 1122 1120 1123
		f 3 1611 -1613 -1589
		mu 0 3 1123 1120 1124
		f 3 1612 -1614 -1592
		mu 0 3 1124 1120 1125
		f 3 1613 -1615 -1595
		mu 0 3 1125 1120 1126
		f 3 1614 -1616 -1598
		mu 0 3 1126 1120 1127
		f 3 1615 -1610 -1600
		mu 0 3 1127 1120 1119
		f 4 1616 1633 -1625 -1633
		mu 0 4 1128 1129 1130 1131
		f 4 1617 1634 -1626 -1634
		mu 0 4 1129 1132 1133 1130
		f 4 1618 1635 -1627 -1635
		mu 0 4 1132 1134 1135 1133
		f 4 1619 1636 -1628 -1636
		mu 0 4 1134 1136 1137 1135
		f 4 1620 1637 -1629 -1637
		mu 0 4 1136 1138 1139 1137
		f 4 1621 1638 -1630 -1638
		mu 0 4 1138 1140 1141 1139
		f 4 1622 1639 -1631 -1639
		mu 0 4 1140 1142 1143 1141
		f 4 1623 1632 -1632 -1640
		mu 0 4 1142 1144 1145 1143
		f 3 -1617 -1641 1641
		mu 0 3 1146 1147 1148
		f 3 -1618 -1642 1642
		mu 0 3 1149 1146 1148
		f 3 -1619 -1643 1643
		mu 0 3 1150 1149 1148
		f 3 -1620 -1644 1644
		mu 0 3 1151 1150 1148
		f 3 -1621 -1645 1645
		mu 0 3 1152 1151 1148
		f 3 -1622 -1646 1646
		mu 0 3 1153 1152 1148
		f 3 -1623 -1647 1647
		mu 0 3 1154 1153 1148
		f 3 -1624 -1648 1640
		mu 0 3 1147 1154 1148
		f 3 1624 1649 -1649
		mu 0 3 1155 1156 1157
		f 3 1625 1650 -1650
		mu 0 3 1156 1158 1157
		f 3 1626 1651 -1651
		mu 0 3 1158 1159 1157
		f 3 1627 1652 -1652
		mu 0 3 1159 1160 1157
		f 3 1628 1653 -1653
		mu 0 3 1160 1161 1157
		f 3 1629 1654 -1654
		mu 0 3 1161 1162 1157
		f 3 1630 1655 -1655
		mu 0 3 1162 1163 1157
		f 3 1631 1648 -1656
		mu 0 3 1163 1155 1157
		f 4 1679 1678 -1670 1672
		mu 0 4 1164 1165 1166 1167
		f 4 1669 1663 -1669 1670
		mu 0 4 1167 1166 1168 1169
		f 4 1673 1667 -1672 1674
		mu 0 4 1170 1171 1172 1173
		f 4 1681 -1666 -1664 -1679
		mu 0 4 1165 1174 1175 1166
		f 4 1666 1660 1683 1682
		mu 0 4 1176 1177 1178 1179
		f 4 1657 -1671 -1659 -1663
		mu 0 4 1180 1167 1169 1181
		f 4 1677 -1673 -1658 -1676
		mu 0 4 1178 1164 1167 1180
		f 4 1659 -1675 -1657 -1667
		mu 0 4 1182 1170 1173 1183
		f 4 1656 -1677 -1678 -1661
		mu 0 4 1177 1184 1164 1178
		f 4 1671 1661 -1680 1676
		mu 0 4 1184 1185 1165 1164
		f 4 -1668 -1681 -1682 -1662
		mu 0 4 1185 1186 1174 1165
		f 4 -1684 1675 1662 1664
		mu 0 4 1179 1178 1180 1187
		f 4 1706 1689 -1706 1707
		mu 0 4 1188 1189 1190 1191
		f 4 1698 1697 1701 -1697
		mu 0 4 1192 1193 1194 1195
		f 4 1686 1693 -1688 -1693
		mu 0 4 1196 1197 1198 1199
		f 5 1687 1695 -1707 -1685 -1695
		mu 0 5 1199 1198 1200 1201 1202
		f 7 -1696 -1694 -1700 -1698 -1703 -1692 -1690
		mu 0 7 1189 1203 1204 1205 1206 1207 1190
		f 7 1694 1688 1690 1703 1696 1700 1692
		mu 0 7 1208 1209 1210 1211 1212 1213 1214
		f 3 1685 1708 -1691
		mu 0 3 1210 1191 1215
		f 4 -1702 1699 -1687 -1701
		mu 0 4 1195 1194 1197 1196
		f 4 -1705 1702 -1699 -1704
		mu 0 4 1215 1216 1193 1192
		f 4 1684 -1708 -1686 -1689
		mu 0 4 1209 1188 1191 1210
		f 3 -1709 1709 1704
		mu 0 3 1215 1191 1216
		f 3 -1710 1705 1691
		mu 0 3 1216 1191 1190
		f 4 1710 1719 -1712 -1719
		mu 0 4 1217 1218 1219 1220
		f 4 1711 1721 -1713 -1721
		mu 0 4 1220 1219 1221 1222
		f 4 1712 1723 -1714 -1723
		mu 0 4 1222 1221 1223 1224
		f 4 1713 1725 -1715 -1725
		mu 0 4 1224 1223 1225 1226
		f 4 1714 1727 -1716 -1727
		mu 0 4 1226 1225 1227 1228
		f 4 1715 1729 -1717 -1729
		mu 0 4 1228 1227 1229 1230
		f 4 1716 1731 -1718 -1731
		mu 0 4 1230 1229 1231 1232
		f 4 1717 1733 -1711 -1733
		mu 0 4 1232 1231 1233 1234
		f 4 -1730 -1728 -1726 -1735
		mu 0 4 1235 1236 1237 1238
		f 4 -1732 1734 -1724 -1736
		mu 0 4 1239 1235 1238 1240
		f 4 -1734 1735 -1722 -1720
		mu 0 4 1218 1239 1240 1219
		f 4 1728 1736 1724 1726
		mu 0 4 1241 1242 1243 1244
		f 4 1730 1737 1722 -1737
		mu 0 4 1242 1245 1246 1243
		f 4 1732 1718 1720 -1738
		mu 0 4 1245 1217 1220 1246;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
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
	setAttr -s 8 ".iog[0].og";
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
	setAttr -s 705 ".uvst[0].uvsp";
	setAttr ".uvst[0].uvsp[0:249]" -type "float2" 0.375 0 0.625 0 0.625 0.25
		 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875
		 0.25 0.125 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5
		 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375
		 0 0.625 0 0.625 0.125 0.375 0.125 0.375 0.25 0.625 0.25 0.625 0.5 0.375 0.5 0.375
		 0.625 0.625 0.625 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.125 0.875
		 0.25 0.125 0 0.125 0.125 0.125 0.25 0.375 0.125 0.625 0.125 0.625 0.25 0.375 0.25
		 0.625 0.5 0.375 0.5 0.625 0.625 0.375 0.625 0.375 0.75 0.625 0.75 0.625 1 0.375 1
		 0.875 0.125 0.875 0.25 0.125 0.125 0.125 0.25 0.375 0 0.625 0 0.875 0 0.125 0 0.375
		 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1
		 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25
		 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125
		 0 0.125 0.25 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75
		 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.625 0
		 0.625 0.125 0.375 0.125 0.375 0.25 0.625 0.25 0.625 0.5 0.375 0.5 0.375 0.625 0.625
		 0.625 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.125 0.875 0.25 0.125
		 0 0.125 0.125 0.125 0.25 0.375 0.125 0.625 0.125 0.625 0.25 0.375 0.25 0.625 0.5
		 0.375 0.5 0.625 0.625 0.375 0.625 0.375 0.75 0.625 0.75 0.625 1 0.375 1 0.875 0.125
		 0.875 0.25 0.125 0.125 0.125 0.25 0.375 0 0.625 0 0.875 0 0.125 0 0.375 0 0.625 0
		 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.875
		 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0.3125 0.40625 0.3125 0.40625 0.68843985 0.375
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
		 0.73326457 0.5 0.6875 0.61048543 0.73326457 0.65625 0.84375 0.5 0 0.5 0.25 0.625
		 0.25 0.625 0 0.375 0.25 0.375 0.5 0.5 0.5 0.375 0.75 0.5 0.75 0.375 1 0.5 1 0.875
		 0.25 0.875 0 0.125 0;
	setAttr ".uvst[0].uvsp[250:499]" 0.125 0.25 0.375 0 0.625 0.5 0.625 0.75 0.625
		 1 0.375 0 0.375 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75
		 0.375 1 0.625 1 0.14276735 0.41137075 0 0.023260495 1 0 0.88867164 0.41137075 0.11457131
		 0.45632055 0 0 1 0 0.85307395 0.45632055 0.375 0 0.375 0.25 0.625 0.25 0.625 0 0.375
		 0.5 0.625 0.5 0.375 0.75 0.625 0.75 0.375 1 0.625 1 0.875 0.25 0.875 0 0.125 0 0.125
		 0.25 0.375 0 0.375 0.25 0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.375 0.75 0.625 0.75
		 0.375 1 0.625 1 0.875 0.25 0.875 0 0.125 0 0.125 0.25 0.5 0 0.625 0 0.625 0.25 0.5
		 0.25 0.375 0.25 0.5 0.5 0.375 0.5 0.5 0.75 0.375 0.75 0.5 1 0.375 1 0.875 0 0.875
		 0.25 0.125 0 0.375 0 0.125 0.25 0.625 0.5 0.625 0.75 0.625 1 0.375 0 0.625 0 0.625
		 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.14276735
		 0.41137075 0.88867164 0.41137075 1 0 0 0.023260495 0.11457131 0.45632055 0.85307395
		 0.45632055 1 0 0 0 0.375 0 0.625 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625
		 0.75 0.375 0.75 0.625 1 0.375 1 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.375 0 0.625
		 0 0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1
		 0.875 0 0.875 0.25 0.125 0 0.125 0.25 0.5 0.041666668 0.625 0.041666668 0.625 0.083333336
		 0.5 0.083333336 0.5 0.125 0.625 0.125 0.625 0.16666667 0.5 0.16666667 0.625 0.25
		 0.5 0.25 0.5 0.5 0.625 0.5 0.625 0.58333331 0.5 0.58333331 0.625 0.625 0.5 0.625
		 0.5 0.66666663 0.625 0.66666663 0.625 0.70833325 0.5 0.70833325 0.5 0.74999994 0.625
		 0.74999994 0.625 0.99999994 0.5 0.99999994 0.875 0.041666668 0.875 0.083333336 0.875
		 0.125 0.875 0.16666667 0.875 0.25 0.125 0.041666668 0.375 0.041666668 0.375 0.083333336
		 0.125 0.083333336 0.125 0.125 0.375 0.125 0.375 0.16666667 0.125 0.16666667 0.375
		 0.25 0.125 0.25 0.5 0.25 0.375 0.25 0.625 0.5 0.625 0.25 0.5 0.5 0.375 0.5 0.375
		 0.5 0.5 0.25 0.375 0.25 0.625 0.5 0.625 0.25 0.375 0.5 0.5 0.5 0.375 0.74999994 0.375
		 0.99999994 0.375 0.66666663 0.375 0.70833325 0.375 0.58333331 0.375 0.625 0.5 0.09375
		 0.625 0.09375 0.625 0.10416667 0.5 0.10416667 0.875 0.09375 0.875 0.10416667 0.5
		 0.64583331 0.625 0.64583331 0.625 0.65625 0.5 0.65625 0.375 0.64583331 0.375 0.65625
		 0.125 0.09375 0.375 0.09375 0.375 0.10416667 0.125 0.10416667 0.625 0.25 0.5 0.25
		 0.5 0.25 0.625 0.25 0.375 0.25 0.375 0.25 0.375 0.5 0.375 0.5 0.5 0.5 0.5 0.5 0.625
		 0.5 0.625 0.5 0.5 0.25 0.375 0.25 0.375 0.5 0.5 0.5 0.625 0.5 0.625 0.25 0.5 0 0.625
		 0 0.875 0 0.125 0 0.375 0 0.5 0.25 0.375 0.25 0.375 0.5 0.5 0.5 0.625 0.25 0.625
		 0.5 0.5 0 0.625 0 0.625 0.25 0.5 0.25 0.75 0 0.875 0 0.875 0.25 0.75 0.25 0.546875
		 0.46875 0.625 0.375 0.625 0.5 0.5625 0.5 0.5 0.375 0.53125 0.4375 0.53125 0.8125
		 0.625 1 0.5 1 0.5 0.875 0.59375 0.75 0.625 0.875 0.546875 0.78125 0.625 0.375 0.546875
		 0.46875 0.625 0.5 0.5625 0.5 0 0 1 0 1 1 0 1 0 0 1 0;
	setAttr ".uvst[0].uvsp[500:704]" 1 1 0 1 0 0 1 0 1 1 0 1 0 0.5 1 0 1 1 0.5
		 0 0.5 0.25 0.625 0.25 0.625 0 0.75 0 0.75 0.25 0.875 0.25 0.875 0 0.546875 0.46875
		 0.5625 0.5 0.625 0.5 0.625 0.375 0.5 0.375 0.53125 0.4375 0.53125 0.8125 0.5 0.875
		 0.5 1 0.625 1 0.59375 0.75 0.546875 0.78125 0.625 0.875 0.546875 0.46875 0.625 0.375
		 0.625 0.5 0.5625 0.5 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0.5 1 1 1
		 0 0 0.125 0.125 0.125 0.125 0.25 0 0.25 0.875 0.125 1 0.125 1 0.25 0.875 0.25 0.125
		 0.375 0 0.375 0.625 0.25 0.75 0.25 0.75 0.375 0.625 0.375 0.875 0.375 1 0.375 0.125
		 0.5 0 0.5 0.75 0.5 0.625 0.5 0.875 0.5 1 0.5 0.125 0.625 0 0.625 0.75 0.625 0.625
		 0.625 0.875 0.625 1 0.625 0.125 0.75 0 0.75 0.75 0.75 0.625 0.75 0.875 0.75 1 0.75
		 0.125 0.875 0 0.875 0.75 0.875 0.625 0.875 0.875 0.875 1 0.875 0.0625 0 0.9375 0
		 0.0625 1 0.6875 1 0.8125 1 0.9375 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0
		 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1
		 0 0.125 0 0.25 0.125 0.25 0.125 0.125 0.875 0.125 0.875 0.25 1 0.25 1 0.125 0 0.375
		 0.125 0.375 0.625 0.25 0.625 0.375 0.75 0.375 0.75 0.25 0.875 0.375 1 0.375 0 0.5
		 0.125 0.5 0.625 0.5 0.75 0.5 0.875 0.5 1 0.5 0 0.625 0.125 0.625 0.625 0.625 0.75
		 0.625 0.875 0.625 1 0.625 0 0.75 0.125 0.75 0.625 0.75 0.75 0.75 0.875 0.75 1 0.75
		 0 0.875 0.125 0.875 0.625 0.875 0.75 0.875 0.875 0.875 1 0.875 0.0625 0 0.9375 0
		 0.0625 1 0.6875 1 0.8125 1 0.9375 1 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1
		 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 393 ".vt";
	setAttr ".vt[0:165]"  2.60855889 4.57712936 0.24095072 2.61834788 5.27141953 0.24095072
		 1.83605778 4.54508448 0.2952137 1.83825254 5.31097555 0.2952137 1.83605778 4.44984102 -0.86512852
		 1.83825254 5.3969593 -0.89730573 2.83780313 4.57712936 -0.80754972 2.84166336 5.27141953 -0.80754972
		 3.9412508 4.77597427 0.0070675462 3.94186854 5.089229584 0.0070675462 3.15905476 4.58698368 0.1884086
		 3.17997932 5.24468136 0.1884086 3.05489254 4.58698368 -0.57940644 3.063144207 5.24468136 -0.7404725
		 3.9412508 4.77597427 -0.46881002 3.94186854 5.089229584 -0.46881002 4.090180874 4.78156376 -0.71359515
		 4.70383835 4.78158236 -0.71359515 4.16193962 4.78158236 0.18236066 4.70383835 4.78158236 0.18236066
		 4.16193962 5.14380598 0.18236034 4.83760452 5.14380598 0.18236034 4.090895176 5.14375114 -0.71359622
		 4.83760452 5.14380598 -0.71359622 4.70383835 4.78158236 -0.26561773 4.047076702 4.78147554 -0.26561773
		 4.047791004 5.14366293 -0.26561773 4.83760452 5.14380598 -0.26561773 5.030568123 4.78158236 -0.71359515
		 5.28562927 4.78158236 -0.71359515 5.030568123 4.78158236 0.18236066 5.62627411 4.78158236 0.05195586
		 4.89680195 5.14380598 0.18236034 5.62627411 4.97223139 0.051955823 4.89680195 5.14380598 -0.71359622
		 5.28562927 5.058018684 -0.71359617 5.030568123 4.78158236 -0.36097163 5.62627411 4.78158236 -0.36097163
		 5.62627411 4.97223091 -0.36097127 4.89680195 5.14380598 -0.36097121 4.19243813 4.69642878 0.27840671
		 4.50242233 4.69642878 0.27840671 4.19243813 4.69642973 0.80645782 4.50242233 4.69642973 0.80645782
		 4.19243813 5.0064139366 0.806458 4.50242233 5.0064139366 0.806458 4.19243813 5.0064139366 0.27840644
		 4.50242233 5.0064139366 0.27840644 -2.60855889 4.57712936 0.24095072 -2.61834788 5.27141953 0.24095072
		 -1.83825254 5.31097555 0.2952137 -1.83605778 4.54508448 0.2952137 -1.83825254 5.3969593 -0.89730573
		 -1.83605778 4.44984102 -0.86512852 -2.84166336 5.27141953 -0.80754972 -2.83780313 4.57712936 -0.80754972
		 -3.9412508 4.77597427 0.0070675462 -3.94186854 5.089229584 0.0070675462 -3.17997932 5.24468136 0.1884086
		 -3.15905476 4.58698368 0.1884086 -3.063144207 5.24468136 -0.7404725 -3.05489254 4.58698368 -0.57940644
		 -3.94186854 5.089229584 -0.46881002 -3.9412508 4.77597427 -0.46881002 -4.090180874 4.78156376 -0.71359515
		 -4.70383835 4.78158236 -0.71359515 -4.70383835 4.78158236 -0.26561773 -4.047076702 4.78147554 -0.26561773
		 -4.16193962 4.78158236 0.18236066 -4.70383835 4.78158236 0.18236066 -4.83760452 5.14380598 0.18236034
		 -4.16193962 5.14380598 0.18236034 -4.047791004 5.14366293 -0.26561773 -4.83760452 5.14380598 -0.26561773
		 -4.83760452 5.14380598 -0.71359622 -4.090895176 5.14375114 -0.71359622 -5.030568123 4.78158236 -0.36097163
		 -5.62627411 4.78158236 -0.36097163 -5.62627411 4.78158236 0.05195586 -5.030568123 4.78158236 0.18236066
		 -5.62627411 4.97223139 0.051955823 -4.89680195 5.14380598 0.18236034 -5.62627411 4.97223091 -0.36097127
		 -4.89680195 5.14380598 -0.36097121 -4.89680195 5.14380598 -0.71359622 -5.28562927 5.058018684 -0.71359617
		 -5.28562927 4.78158236 -0.71359515 -5.030568123 4.78158236 -0.71359515 -4.19243813 4.69642878 0.27840671
		 -4.50242233 4.69642878 0.27840671 -4.50242233 4.69642973 0.80645782 -4.19243813 4.69642973 0.80645782
		 -4.50242233 5.0064139366 0.806458 -4.19243813 5.0064139366 0.806458 -4.50242233 5.0064139366 0.27840644
		 -4.19243813 5.0064139366 0.27840644 0.26371977 3.045442104 -0.35090786 0.36279541 3.19990206 -0.42691782
		 0.46187103 3.35436177 -0.35090786 0.50290948 3.41834116 -0.16740361 0.46187103 3.35436177 0.01610066
		 0.36279541 3.19990206 0.092110604 0.26371977 3.045442104 0.016100675 0.22268128 2.98146272 -0.16740361
		 0.45403194 2.92336965 -0.35090786 0.55310756 3.077829361 -0.42691782 0.65218318 3.23228931 -0.35090786
		 0.69322169 3.2962687 -0.16740361 0.65218318 3.23228931 0.01610066 0.55310756 3.077829361 0.092110604
		 0.45403194 2.92336965 0.016100675 0.41299346 2.85939026 -0.16740361 0.36279541 3.19990206 -0.16740361
		 0.55310756 3.077829361 -0.16740361 -0.26371977 3.045442104 -0.35090786 -0.36279541 3.19990206 -0.42691782
		 -0.46187103 3.35436177 -0.35090786 -0.50290948 3.41834116 -0.16740361 -0.46187103 3.35436177 0.01610066
		 -0.36279541 3.19990206 0.092110604 -0.26371977 3.045442104 0.016100675 -0.22268128 2.98146272 -0.16740361
		 -0.45403194 2.92336965 -0.35090786 -0.55310756 3.077829361 -0.42691782 -0.65218318 3.23228931 -0.35090786
		 -0.69322169 3.2962687 -0.16740361 -0.65218318 3.23228931 0.01610066 -0.55310756 3.077829361 0.092110604
		 -0.45403194 2.92336965 0.016100675 -0.41299346 2.85939026 -0.16740361 -0.36279541 3.19990206 -0.16740361
		 -0.55310756 3.077829361 -0.16740361 -0.72281253 0.0016106367 1.040430903 -1.0730443 0.0016106367 0.78483313
		 -1.0730443 0.13102609 0.78483313 -0.72281253 0.13102609 1.040430903 -0.29715103 0.13102609 1.048129201
		 -0.68509769 0.37639064 0.52393335 -0.29715103 0.37639064 0.52393335 -0.68509769 0.0016106367 0.37144423
		 -0.29715103 0.0016106367 0.37144423 -0.29715103 0.0016106367 1.048129201 -1.0730443 0.0016106367 0.37144423
		 -1.0730443 0.37639064 0.52393335 -0.29715103 0.0017328262 0.20156829 -1.0730443 0.0017328262 0.20156829
		 -1.0730443 0.3763907 0.062261254 -0.29715103 0.3763907 0.062261254 -0.9468168 0.3763907 -0.50336707
		 -0.29715103 0.3763907 -0.50336707 -0.9468168 0.0017328262 -0.6298148 -0.29715103 0.0017328262 -0.6298148
		 -0.57069367 0.52042526 -0.065070167 -0.72391051 0.52042526 -0.065070167 -0.83505791 1.52171004 0.081117183
		 -0.45954674 1.52171004 0.081117183 -0.83505791 1.52171004 -0.55423534 -0.45954674 1.52171004 -0.55423534
		 -0.72391051 0.52042526 -0.26659018 -0.57069367 0.52042526 -0.26659018 -0.51022375 1.79641247 -0.05649282
		 -0.8095094 1.79641247 -0.05649282 -0.95852381 2.77165079 0.12300062 -0.42572451 2.82650566 0.12300062
		 -0.95852381 2.77165079 -0.6106286 -0.42572451 2.82650566 -0.48341888;
	setAttr ".vt[166:331]" -0.8095094 1.79641247 -0.30392545 -0.51022375 1.79641247 -0.30392545
		 0.29715103 0.0016106367 1.048129201 1.0730443 0.0016106367 0.78483313 0.29715103 0.13102609 1.048129201
		 1.0730443 0.13102609 0.78483313 0.29715103 0.37639064 0.52393335 1.0730443 0.37639064 0.52393335
		 0.29715103 0.0016106367 0.37144423 1.0730443 0.0016106367 0.37144423 0.72281253 0.13102609 1.040430903
		 0.72281253 0.0016106367 1.040430903 0.68509769 0.37639064 0.52393335 0.68509769 0.0016106367 0.37144423
		 0.29715103 0.0017328262 0.20156829 1.0730443 0.0017328262 0.20156829 0.29715103 0.3763907 0.062261254
		 1.0730443 0.3763907 0.062261254 0.29715103 0.3763907 -0.50336707 0.9468168 0.3763907 -0.50336707
		 0.29715103 0.0017328262 -0.6298148 0.9468168 0.0017328262 -0.6298148 0.57069367 0.52042526 -0.065070167
		 0.72391051 0.52042526 -0.065070167 0.45954674 1.52171004 0.081117183 0.83505791 1.52171004 0.081117183
		 0.45954674 1.52171004 -0.55423534 0.83505791 1.52171004 -0.55423534 0.57069367 0.52042526 -0.26659018
		 0.72391051 0.52042526 -0.26659018 0.51022375 1.79641247 -0.05649282 0.8095094 1.79641247 -0.05649282
		 0.42572451 2.82650566 0.12300062 0.95852381 2.77165079 0.12300062 0.42572451 2.82650566 -0.48341888
		 0.95852381 2.77165079 -0.6106286 0.51022375 1.79641247 -0.30392545 0.8095094 1.79641247 -0.30392545
		 -0.37746939 2.89740467 0.029086407 0.37746939 2.89740467 0.029086407 -0.67428851 3.32845783 0.13864779
		 0.67428851 3.32845783 0.13864779 -1.33022904 4.55041742 0.64863437 1.33022904 4.55041742 0.64863437
		 -1.29167223 5.30177736 0.17312309 1.29167211 5.30177736 0.17312309 -1.23935306 5.43657207 -0.61866701
		 1.23881102 5.43589163 -0.76172215 -1.2812618 4.55041742 -0.95489329 1.28126192 4.55041742 -0.95489329
		 -0.67428851 3.32845783 -0.2864944 0.67428851 3.32845783 -0.2864944 -0.37746939 2.89740467 -0.21847609
		 0.37746939 2.89740467 -0.21847609 -0.35605338 5.42906427 -0.099133588 0.3548831 5.42906427 -0.099133588
		 0.3671414 5.66786718 -0.50488621 -0.36980402 5.66786718 -0.50488621 -0.31347528 6.11128664 -0.14953199
		 0.31081271 6.11128664 -0.14953199 0.36756954 6.11128664 -0.5116964 -0.37023214 6.11128664 -0.5116964
		 -9.4976853e-09 5.1067853 0.78785235 5.6994369e-16 4.55041742 0.97416008 -4.8480692e-17 3.32845783 0.58265412
		 -5.0931654e-17 2.73436308 0.24214911 -5.0930361e-17 2.73436308 -0.36469632 -4.847467e-17 3.32845783 -0.64816415
		 1.0683413e-15 4.55041742 -1.30994785 -0.00027102642 5.42541933 -1.049140215 -3.0580078e-09 5.31346178 0.036895525
		 -0.0013312836 6.11128664 0.019757079 -0.0013312821 6.11128664 -0.62960064 -0.001331314 5.69431543 -0.61646056
		 -4.71755e-17 3.92159891 0.71236032 0.69404411 3.92159891 0.32217118 0.69404411 3.92159891 -0.28255448
		 -4.7203565e-17 3.92159891 -0.69713074 -0.69404411 3.92159891 -0.28255448 -0.69404411 3.92159891 0.32217118
		 0.31576332 5.67853403 -0.1211121 -0.0013312945 5.67712641 0.019964602 -0.31842592 5.67853403 -0.1211121
		 -0.37608287 5.8289876 -0.49959862 -0.0013312951 5.82965899 -0.61578697 0.37342033 5.8289876 -0.49959862
		 -0.0012319394 5.54809523 0.021314578 -0.32060191 5.55105925 -0.10784297 -0.37294346 5.74661589 -0.4935497
		 -0.0013313045 5.77306509 -0.6162768 0.37028086 5.74661589 -0.4935497 0.31810579 5.55105925 -0.10784297
		 -0.0013312865 5.89250708 0.019860849 -0.32108235 5.89661074 -0.13532212 -0.37922239 5.89661074 -0.50564748
		 -0.0013312856 5.89661074 -0.61529714 0.37655979 5.89661074 -0.50564748 0.31841975 5.89661074 -0.13532212
		 1.5165524e-09 3.080521584 0.44059125 0.56416023 3.15646458 0.13193947 0.56416023 3.15646458 -0.31565174
		 2.2349655e-08 3.080521584 -0.56813282 -0.56416023 3.15646458 -0.31565174 -0.56416023 3.15646458 0.13193947
		 0.68416607 3.70439625 0.21673456 -4.3122659e-17 3.70439625 0.66074103 -0.68416607 3.70439625 0.21673456
		 -0.68416607 3.70439625 -0.23468116 -4.3126782e-17 3.70439625 -0.56365228 0.68416607 3.70439625 -0.23468116
		 -0.28547481 6.58370161 -0.14953199 -0.0013312773 6.58370161 0.019757079 -0.0013312747 6.58370161 -0.68944329
		 -0.28547481 6.58370161 -0.5116964 0.28281227 6.58370161 -0.14953199 0.33447784 6.58370161 -0.5116964
		 -4.0473997e-17 3.51642704 0.6216976 0.67922729 3.51642704 0.17769116 0.67922729 3.51642704 -0.26058778
		 -4.0457821e-17 3.51642704 -0.60590822 -0.67922729 3.51642704 -0.26058778 -0.67922729 3.51642704 0.17769116
		 0.27161181 5.68510723 0.27755877 0.38497964 5.98300838 0.3308489 0.50853992 5.98300838 -0.29448801
		 0.36605021 5.71944714 -0.29448801 -0.0013313117 6.052408218 0.5810402 -0.001331308 5.66949844 0.50613534
		 -0.001331308 6.052408218 0.35289359 0.39784268 5.98300838 -0.29448801 0.30067539 5.98300838 0.24096528
		 -0.001331308 5.66949844 0.29565519 0.1906895 5.68510723 0.23134878 0.39850044 5.98300838 -0.087464169
		 0.51852924 5.98300838 -0.075173937 0.40212432 5.71944714 -0.075173937 0.33061913 5.71944714 -0.087464169
		 0.50809228 6.27117348 -0.0874644 0.61778837 6.27117348 -0.075174175 0.61778837 6.27117348 -0.29448825
		 0.50747883 6.27117348 -0.29448825 -0.27427444 5.68510723 0.27755877 -0.38764226 5.98300838 0.3308489
		 -0.40478691 5.71944714 -0.075173937 -0.36871284 5.71944714 -0.29448801 -0.51120251 5.98300838 -0.29448801
		 -0.52119184 5.98300838 -0.075173937 -0.51075488 6.27117348 -0.0874644 -0.62045091 6.27117348 -0.075174175
		 -0.62045091 6.27117348 -0.29448825 -0.51014149 6.27117348 -0.29448825 -0.30333799 5.98300838 0.24096528
		 -0.19335212 5.68510723 0.23134878 -0.33328173 5.71944714 -0.087464169 -0.4011631 5.98300838 -0.087464169
		 -0.4005053 5.98300838 -0.29448801 0.17095101 5.91859245 -0.37775591 -0.001331308 5.91859245 -0.45370632
		 0.24231268 5.91859245 -0.19439551 0.31700486 6.065480232 -0.5332014 -0.001331308 6.065480232 -0.67353934
		 -0.001331308 5.98258018 0.40806043 0.31700486 5.98308086 0.25628218 0.4488641 5.98265743 -0.19439551
		 0.4065302 6.2584095 -0.63706684 -0.001331308 6.2584095 -0.820427;
	setAttr ".vt[332:392]" -0.001331308 6.2584095 0.45257738 0.4065302 6.2584095 0.27487689
		 0.575472 6.2584095 -0.19439551 0.41166028 6.42996311 -0.67353934 -0.001331308 6.42996311 -0.87200737
		 -0.001331308 6.42996311 0.4832162 0.41166028 6.42996311 0.28474838 0.58272702 6.42996311 -0.19439551
		 0.37641409 6.67730713 -0.63706684 -0.001331308 6.67730713 -0.820427 -0.001331308 6.67730713 0.43163607
		 0.37641409 6.67730713 0.24827567 0.53288138 6.67730713 -0.19439551 0.25102469 6.84813595 -0.53320134
		 -0.001331308 6.84813595 -0.67353934 -0.001331308 6.84813595 0.28474832 0.25102469 6.84813595 0.14441034
		 0.35555404 6.84813595 -0.19439551 0.11492737 6.94757271 -0.37775594 -0.001331308 6.94757271 -0.45370632
		 -0.001331308 6.94757271 0.064915292 0.11492737 6.94757271 -0.011035051 0.16308327 6.94757271 -0.19439551
		 -0.001331308 5.86701202 -0.19439551 -0.001331308 6.98248959 -0.19439551 -0.001331308 5.98285198 0.3258163
		 0.26157287 5.98309708 0.20234746 0.31946546 5.9825058 -0.19945788 0.24231268 5.95788574 -0.19896001
		 -0.001331308 5.90630627 -0.19896001 -0.001331308 6.079802513 0.3258163 0.26157287 6.079240799 0.20234746
		 0.31946546 6.079781532 -0.19945788 0.24231268 6.079880714 -0.19896001 -0.001331308 6.079926491 -0.19896001
		 -0.17361364 5.91859245 -0.37775591 -0.31966752 6.065480232 -0.5332014 -0.2449753 5.91859245 -0.19439551
		 -0.45152673 5.98265743 -0.19439551 -0.40919286 6.2584095 -0.63706684 -0.31966752 5.98308086 0.25628218
		 -0.40919286 6.2584095 0.27487689 -0.57813466 6.2584095 -0.19439551 -0.41432288 6.42996311 -0.67353934
		 -0.41432288 6.42996311 0.28474838 -0.58538961 6.42996311 -0.19439551 -0.37907672 6.67730713 -0.63706684
		 -0.37907672 6.67730713 0.24827567 -0.53554398 6.67730713 -0.19439551 -0.25368732 6.84813595 -0.53320134
		 -0.25368732 6.84813595 0.14441034 -0.35821664 6.84813595 -0.19439551 -0.11758999 6.94757271 -0.37775594
		 -0.11758999 6.94757271 -0.011035051 -0.16574588 6.94757271 -0.19439551 -0.2642355 5.98309708 0.20234746
		 -0.32212809 5.9825058 -0.19945788 -0.2449753 5.95788574 -0.19896001 -0.2642355 6.079240799 0.20234746
		 -0.32212809 6.079781532 -0.19945788 -0.2449753 6.079880714 -0.19896001;
	setAttr -s 716 ".ed";
	setAttr ".ed[0:165]"  0 1 1 2 3 1 4 5 1 6 7 1 0 2 1 1 3 1 2 4 1 3 5 1 4 6 1
		 5 7 1 6 0 1 7 1 1 8 9 1 10 11 1 12 13 1 14 15 1 8 10 1 9 11 1 10 12 1 11 13 1 12 14 1
		 13 15 1 14 8 1 15 9 1 16 17 1 18 19 1 20 21 1 22 23 1 16 25 1 17 24 1 18 20 1 19 21 1
		 20 26 1 21 27 1 22 16 1 23 17 1 24 19 1 25 18 1 24 25 1 26 22 1 25 26 1 27 23 1 26 27 1
		 28 29 1 30 31 1 32 33 1 34 35 1 28 36 1 29 37 1 30 32 1 31 33 1 32 39 1 33 38 1 34 28 1
		 35 29 1 36 30 1 37 31 1 36 37 1 38 35 1 37 38 1 39 34 1 38 39 1 39 36 1 40 41 1 42 43 1
		 44 45 1 46 47 1 40 42 1 41 43 1 42 44 1 43 45 1 44 46 1 45 47 1 46 40 1 47 41 1 48 49 1
		 49 50 1 51 50 1 48 51 1 50 52 1 53 52 1 51 53 1 52 54 1 55 54 1 53 55 1 54 49 1 55 48 1
		 56 57 1 57 58 1 59 58 1 56 59 1 58 60 1 61 60 1 59 61 1 60 62 1 63 62 1 61 63 1 62 57 1
		 63 56 1 64 65 1 65 66 1 66 67 1 64 67 1 68 69 1 69 70 1 71 70 1 68 71 1 72 73 1 73 74 1
		 75 74 1 72 75 1 74 65 1 75 64 1 70 73 1 66 69 1 67 72 1 67 68 1 71 72 1 76 77 1 77 78 1
		 79 78 1 76 79 1 78 80 1 81 80 1 79 81 1 80 82 1 82 83 1 81 83 1 84 85 1 85 86 1 87 86 1
		 84 87 1 77 82 1 83 76 1 86 77 1 87 76 1 82 85 1 83 84 1 88 89 1 89 90 1 91 90 1 88 91 1
		 90 92 1 93 92 1 91 93 1 92 94 1 95 94 1 93 95 1 94 89 1 95 88 1 96 97 1 97 98 1 98 99 1
		 99 100 1 100 101 1 101 102 1 102 103 1 103 96 1 104 105 1 105 106 1 106 107 1 107 108 1
		 108 109 1 109 110 1 110 111 1 111 104 1;
	setAttr ".ed[166:331]" 96 104 1 97 105 1 98 106 1 99 107 1 100 108 1 101 109 1
		 102 110 1 103 111 1 112 96 1 112 97 1 112 98 1 112 99 1 112 100 1 112 101 1 112 102 1
		 112 103 1 104 113 1 105 113 1 106 113 1 107 113 1 108 113 1 109 113 1 110 113 1 111 113 1
		 114 115 1 115 116 1 116 117 1 117 118 1 118 119 1 119 120 1 120 121 1 121 114 1 122 123 1
		 123 124 1 124 125 1 125 126 1 126 127 1 127 128 1 128 129 1 129 122 1 114 122 1 115 123 1
		 116 124 1 117 125 1 118 126 1 119 127 1 120 128 1 121 129 1 130 114 1 130 115 1 130 116 1
		 130 117 1 130 118 1 130 119 1 130 120 1 130 121 1 122 131 1 123 131 1 124 131 1 125 131 1
		 126 131 1 127 131 1 128 131 1 129 131 1 132 133 1 133 134 1 135 134 1 135 132 1 136 135 1
		 135 137 1 138 137 1 136 138 1 137 139 1 140 139 1 138 140 1 139 132 1 141 132 1 140 141 1
		 142 133 1 143 142 1 134 143 1 141 136 1 137 143 1 139 142 1 144 145 1 145 146 0 147 146 1
		 144 147 0 146 148 0 149 148 1 147 149 0 148 150 0 151 150 1 149 151 0 150 145 0 151 144 0
		 152 153 1 153 154 1 155 154 1 152 155 1 154 156 1 157 156 1 155 157 1 156 158 1 159 158 1
		 157 159 1 158 153 1 159 152 1 160 161 1 161 162 1 163 162 1 160 163 1 162 164 1 165 164 1
		 163 165 1 164 166 1 167 166 1 165 167 1 166 161 1 167 160 1 168 177 1 170 176 1 172 178 1
		 174 179 1 168 170 1 169 171 1 170 172 1 171 173 1 172 174 1 173 175 1 174 168 1 175 169 1
		 176 171 1 177 169 1 176 177 1 178 173 1 176 178 1 179 175 1 178 179 1 179 177 1 180 181 1
		 182 183 1 184 185 1 186 187 1 180 182 0 181 183 0 182 184 0 183 185 0 184 186 0 185 187 0
		 186 180 0 187 181 0 188 189 1 190 191 1 192 193 1 194 195 1 188 190 1 189 191 1 190 192 1
		 191 193 1 192 194 1 193 195 1 194 188 1 195 189 1 196 197 1 198 199 1;
	setAttr ".ed[332:497]" 200 201 1 202 203 1 196 198 1 197 199 1 198 200 1 199 201 1
		 200 202 1 201 203 1 202 196 1 203 197 1 204 231 1 206 230 1 208 229 1 210 228 1 212 235 1
		 214 234 1 216 233 1 218 232 1 204 269 1 205 265 1 206 287 1 207 283 1 208 210 1 209 211 1
		 210 212 1 211 213 1 212 214 1 213 215 1 214 244 1 215 242 1 216 268 1 217 266 1 218 204 1
		 219 205 1 217 207 1 215 209 1 216 206 1 214 208 1 210 220 1 211 221 1 220 236 1 213 222 1
		 221 222 1 212 223 1 223 239 1 220 223 1 220 253 1 221 257 1 224 237 1 222 256 1 225 226 1
		 223 254 1 227 238 1 224 227 1 228 211 1 229 209 1 228 229 1 230 207 1 229 240 1 231 205 1
		 230 264 1 232 219 1 231 232 1 233 217 1 232 267 1 234 215 1 233 285 1 235 213 1 234 235 1
		 236 221 1 228 236 1 237 225 1 236 252 1 238 226 1 239 222 1 238 261 1 239 235 1 240 271 1
		 241 209 1 240 241 1 242 275 1 241 242 1 243 234 1 242 243 1 244 273 1 243 244 1 245 208 1
		 244 245 1 245 240 1 246 263 1 247 258 1 246 247 1 248 259 1 247 248 1 249 260 1 248 249 1
		 250 255 1 249 250 1 251 262 1 250 251 1 251 246 1 252 247 1 253 248 1 252 253 1 254 249 1
		 253 254 1 255 239 1 254 255 1 256 251 1 255 256 1 257 246 1 256 257 1 257 252 1 258 237 1
		 259 224 1 258 259 1 260 227 1 259 260 1 261 250 1 260 261 1 262 226 1 261 262 1 263 225 1
		 262 263 1 263 258 1 264 231 1 265 207 1 264 265 1 266 219 1 265 266 1 267 233 1 266 267 1
		 268 218 1 267 268 1 269 206 1 268 269 1 269 264 1 270 241 1 271 282 1 270 271 1 272 245 1
		 271 272 1 273 286 1 272 273 1 274 243 1 273 274 1 275 284 1 274 275 1 275 270 1 224 276 0
		 237 277 0 276 277 0 238 278 0 227 279 0 279 278 0 276 279 0 225 280 0 277 280 0 226 281 0
		 280 281 0 278 281 0 282 230 1 283 270 1 282 283 1 284 217 1 283 284 1;
	setAttr ".ed[498:663]" 285 274 1 284 285 1 286 216 1 285 286 1 287 272 1 286 287 1
		 287 282 1 288 289 1 289 300 1 290 291 1 291 301 1 292 289 1 293 288 1 292 293 1 293 297 1
		 294 292 1 295 290 1 294 296 1 296 299 1 296 289 1 291 302 1 298 297 1 298 288 1 299 295 1
		 300 290 1 299 300 1 301 288 1 300 301 1 302 298 1 301 302 1 299 303 1 300 304 1 303 304 1
		 290 305 1 304 305 1 295 306 1 306 305 1 303 306 1 294 297 1 296 298 1 299 302 1 295 291 1
		 293 307 1 307 308 1 292 308 1 310 309 1 311 310 1 312 311 1 312 309 1 313 314 1 314 315 1
		 316 315 1 313 316 1 317 308 1 294 317 1 318 307 1 318 297 1 309 319 1 310 319 1 308 312 1
		 320 312 1 317 320 1 309 307 1 319 318 1 312 314 1 320 313 1 311 315 1 321 311 1 321 316 1
		 320 321 1 317 318 1 320 319 1 321 310 1 322 323 1 324 322 1 325 326 1 327 328 1 328 329 1
		 329 325 1 330 331 1 332 333 1 333 334 1 334 330 1 335 336 1 337 338 1 338 339 1 339 335 1
		 340 341 1 342 343 1 343 344 1 344 340 1 345 346 1 347 348 1 348 349 1 349 345 1 350 351 1
		 352 353 1 353 354 1 354 350 1 322 325 1 323 326 1 324 329 1 325 330 1 326 331 1 327 332 1
		 328 333 1 329 334 1 330 335 1 331 336 1 332 337 1 333 338 1 334 339 1 335 340 1 336 341 1
		 337 342 1 338 343 1 339 344 1 340 345 1 341 346 1 342 347 1 343 348 1 344 349 1 345 350 1
		 346 351 1 347 352 1 348 353 1 349 354 1 355 322 1 355 323 1 355 324 1 350 356 1 351 356 1
		 352 356 1 353 356 1 354 356 1 327 357 1 328 358 1 357 358 1 329 359 1 358 359 1 324 360 1
		 360 359 1 355 361 1 361 360 1 357 362 1 358 363 1 362 363 0 359 364 1 363 364 0 360 365 1
		 365 364 0 361 366 1 366 365 0 367 323 1 368 326 1 367 368 1 369 367 1 370 368 1 369 370 1
		 371 331 1 368 371 1 327 372 1 372 373 1 332 373 1 372 370 1 370 374 1;
	setAttr ".ed[664:715]" 373 374 1 374 371 1 375 336 1 371 375 1 373 376 1 337 376 1
		 374 377 1 376 377 1 377 375 1 378 341 1 375 378 1 376 379 1 342 379 1 377 380 1 379 380 1
		 380 378 1 381 346 1 378 381 1 379 382 1 347 382 1 380 383 1 382 383 1 383 381 1 384 351 1
		 381 384 1 382 385 1 352 385 1 383 386 1 385 386 1 386 384 1 355 367 1 355 369 1 384 356 1
		 385 356 1 386 356 1 357 387 1 372 387 1 387 388 1 370 388 1 389 388 1 369 389 1 361 389 1
		 362 390 0 387 390 1 390 391 0 388 391 1 392 391 0 389 392 1 366 392 0 365 363 0 392 390 0
		 366 362 0;
	setAttr -s 368 -ch 1426 ".fc[0:367]" -type "polyFaces" 
		f 4 0 5 -2 -5
		mu 0 4 0 1 2 3
		f 4 1 7 -3 -7
		mu 0 4 3 2 4 5
		f 4 2 9 -4 -9
		mu 0 4 5 4 6 7
		f 4 3 11 -1 -11
		mu 0 4 7 6 8 9
		f 4 -12 -10 -8 -6
		mu 0 4 1 10 11 2
		f 4 10 4 6 8
		mu 0 4 12 0 3 13
		f 4 12 17 -14 -17
		mu 0 4 14 15 16 17
		f 4 13 19 -15 -19
		mu 0 4 17 16 18 19
		f 4 14 21 -16 -21
		mu 0 4 19 18 20 21
		f 4 15 23 -13 -23
		mu 0 4 21 20 22 23
		f 4 -24 -22 -20 -18
		mu 0 4 15 24 25 16
		f 4 22 16 18 20
		mu 0 4 26 14 17 27
		f 4 24 29 38 -29
		mu 0 4 28 29 30 31
		f 4 25 31 -27 -31
		mu 0 4 32 33 34 35
		f 4 42 41 -28 -40
		mu 0 4 36 37 38 39
		f 4 27 35 -25 -35
		mu 0 4 39 38 40 41
		f 6 -36 -42 -34 -32 -37 -30
		mu 0 6 29 42 43 44 33 30
		f 4 34 28 40 39
		mu 0 4 45 28 31 46
		f 4 -39 36 -26 -38
		mu 0 4 31 30 33 32
		f 4 -41 37 30 32
		mu 0 4 46 31 32 47
		f 4 26 33 -43 -33
		mu 0 4 35 34 37 36
		f 4 57 56 -45 -56
		mu 0 4 48 49 50 51
		f 4 44 50 -46 -50
		mu 0 4 51 50 52 53
		f 4 45 52 61 -52
		mu 0 4 53 52 54 55
		f 4 46 54 -44 -54
		mu 0 4 56 57 58 59
		f 4 59 -53 -51 -57
		mu 0 4 49 60 61 50
		f 4 62 55 49 51
		mu 0 4 62 48 51 63
		f 4 43 48 -58 -48
		mu 0 4 64 65 49 48
		f 4 -55 -59 -60 -49
		mu 0 4 65 66 60 49
		f 4 -62 58 -47 -61
		mu 0 4 55 54 57 56
		f 4 53 47 -63 60
		mu 0 4 67 64 48 62
		f 4 63 68 -65 -68
		mu 0 4 68 69 70 71
		f 4 64 70 -66 -70
		mu 0 4 71 70 72 73
		f 4 65 72 -67 -72
		mu 0 4 73 72 74 75
		f 4 66 74 -64 -74
		mu 0 4 75 74 76 77
		f 4 -75 -73 -71 -69
		mu 0 4 69 78 79 70
		f 4 73 67 69 71
		mu 0 4 80 68 71 81
		f 4 78 77 -77 -76
		mu 0 4 82 85 84 83
		f 4 81 80 -80 -78
		mu 0 4 85 87 86 84
		f 4 84 83 -83 -81
		mu 0 4 87 89 88 86
		f 4 86 75 -86 -84
		mu 0 4 89 91 90 88
		f 4 76 79 82 85
		mu 0 4 83 84 93 92
		f 4 -85 -82 -79 -87
		mu 0 4 94 95 85 82
		f 4 90 89 -89 -88
		mu 0 4 96 99 98 97
		f 4 93 92 -92 -90
		mu 0 4 99 101 100 98
		f 4 96 95 -95 -93
		mu 0 4 101 103 102 100
		f 4 98 87 -98 -96
		mu 0 4 103 105 104 102
		f 4 88 91 94 97
		mu 0 4 97 98 107 106
		f 4 -97 -94 -91 -99
		mu 0 4 108 109 99 96
		f 4 102 -102 -101 -100
		mu 0 4 110 113 112 111
		f 4 106 105 -105 -104
		mu 0 4 114 117 116 115
		f 4 110 109 -109 -108
		mu 0 4 118 121 120 119
		f 4 112 99 -112 -110
		mu 0 4 121 123 122 120
		f 6 100 114 104 113 108 111
		mu 0 6 111 112 115 126 125 124
		f 4 -111 -116 -103 -113
		mu 0 4 127 128 113 110
		f 4 116 103 -115 101
		mu 0 4 113 114 115 112
		f 4 -118 -107 -117 115
		mu 0 4 128 129 114 113
		f 4 117 107 -114 -106
		mu 0 4 117 118 119 116
		f 4 121 120 -120 -119
		mu 0 4 130 133 132 131
		f 4 124 123 -123 -121
		mu 0 4 133 135 134 132
		f 4 127 -127 -126 -124
		mu 0 4 135 137 136 134
		f 4 131 130 -130 -129
		mu 0 4 138 141 140 139
		f 4 119 122 125 -133
		mu 0 4 131 132 143 142
		f 4 -128 -125 -122 -134
		mu 0 4 144 145 133 130
		f 4 135 118 -135 -131
		mu 0 4 146 130 131 147
		f 4 134 132 136 129
		mu 0 4 147 131 142 148
		f 4 137 128 -137 126
		mu 0 4 137 138 139 136
		f 4 -138 133 -136 -132
		mu 0 4 149 144 130 146
		f 4 141 140 -140 -139
		mu 0 4 150 153 152 151
		f 4 144 143 -143 -141
		mu 0 4 153 155 154 152
		f 4 147 146 -146 -144
		mu 0 4 155 157 156 154
		f 4 149 138 -149 -147
		mu 0 4 157 159 158 156
		f 4 139 142 145 148
		mu 0 4 151 152 161 160
		f 4 -148 -145 -142 -150
		mu 0 4 162 163 153 150
		f 4 150 167 -159 -167
		mu 0 4 164 165 166 167
		f 4 151 168 -160 -168
		mu 0 4 165 168 169 166
		f 4 152 169 -161 -169
		mu 0 4 168 170 171 169
		f 4 153 170 -162 -170
		mu 0 4 170 172 173 171
		f 4 154 171 -163 -171
		mu 0 4 172 174 175 173
		f 4 155 172 -164 -172
		mu 0 4 174 176 177 175
		f 4 156 173 -165 -173
		mu 0 4 176 178 179 177
		f 4 157 166 -166 -174
		mu 0 4 178 180 181 179
		f 3 -151 -175 175
		mu 0 3 182 183 184
		f 3 -152 -176 176
		mu 0 3 185 182 184
		f 3 -153 -177 177
		mu 0 3 186 185 184
		f 3 -154 -178 178
		mu 0 3 187 186 184
		f 3 -155 -179 179
		mu 0 3 188 187 184
		f 3 -156 -180 180
		mu 0 3 189 188 184
		f 3 -157 -181 181
		mu 0 3 190 189 184
		f 3 -158 -182 174
		mu 0 3 183 190 184
		f 3 158 183 -183
		mu 0 3 191 192 193
		f 3 159 184 -184
		mu 0 3 192 194 193
		f 3 160 185 -185
		mu 0 3 194 195 193
		f 3 161 186 -186
		mu 0 3 195 196 193
		f 3 162 187 -187
		mu 0 3 196 197 193
		f 3 163 188 -188
		mu 0 3 197 198 193
		f 3 164 189 -189
		mu 0 3 198 199 193
		f 3 165 182 -190
		mu 0 3 199 191 193
		f 4 206 198 -208 -191
		mu 0 4 200 201 202 203
		f 4 207 199 -209 -192
		mu 0 4 203 202 204 205
		f 4 208 200 -210 -193
		mu 0 4 205 204 206 207
		f 4 209 201 -211 -194
		mu 0 4 207 206 208 209
		f 4 210 202 -212 -195
		mu 0 4 209 208 210 211
		f 4 211 203 -213 -196
		mu 0 4 211 210 212 213
		f 4 212 204 -214 -197
		mu 0 4 213 212 214 215
		f 4 213 205 -207 -198
		mu 0 4 215 214 216 217
		f 3 -216 214 190
		mu 0 3 218 219 220
		f 3 -217 215 191
		mu 0 3 221 219 218
		f 3 -218 216 192
		mu 0 3 222 219 221
		f 3 -219 217 193
		mu 0 3 223 219 222
		f 3 -220 218 194
		mu 0 3 224 219 223
		f 3 -221 219 195
		mu 0 3 225 219 224
		f 3 -222 220 196
		mu 0 3 226 219 225
		f 3 -215 221 197
		mu 0 3 220 219 226
		f 3 222 -224 -199
		mu 0 3 227 228 229
		f 3 223 -225 -200
		mu 0 3 229 228 230
		f 3 224 -226 -201
		mu 0 3 230 228 231
		f 3 225 -227 -202
		mu 0 3 231 228 232
		f 3 226 -228 -203
		mu 0 3 232 228 233
		f 3 227 -229 -204
		mu 0 3 233 228 234
		f 3 228 -230 -205
		mu 0 3 234 228 235
		f 3 229 -223 -206
		mu 0 3 235 228 227
		f 4 -234 232 -232 -231
		mu 0 4 236 237 238 239
		f 4 237 236 -236 -235
		mu 0 4 240 241 242 237
		f 4 240 239 -239 -237
		mu 0 4 241 243 244 242
		f 4 243 242 -242 -240
		mu 0 4 243 245 246 244
		f 4 231 246 245 244
		mu 0 4 239 238 247 248
		f 4 -241 -238 -248 -244
		mu 0 4 249 250 240 251
		f 4 247 234 233 -243
		mu 0 4 251 240 237 236
		f 4 248 -247 -233 235
		mu 0 4 242 252 238 237
		f 4 249 -246 -249 238
		mu 0 4 244 253 252 242
		f 4 230 -245 -250 241
		mu 0 4 246 254 253 244
		f 4 253 252 -252 -251
		mu 0 4 255 256 257 258
		f 4 256 255 -255 -253
		mu 0 4 256 259 260 257
		f 4 259 258 -258 -256
		mu 0 4 259 261 262 260
		f 4 261 250 -261 -259
		mu 0 4 261 263 264 262
		f 4 257 260 251 254
		mu 0 4 265 266 267 268
		f 4 -254 -262 -260 -257
		mu 0 4 269 270 271 272
		f 4 265 264 -264 -263
		mu 0 4 273 274 275 276
		f 4 268 267 -267 -265
		mu 0 4 274 277 278 275
		f 4 271 270 -270 -268
		mu 0 4 277 279 280 278
		f 4 273 262 -273 -271
		mu 0 4 279 281 282 280
		f 4 263 266 269 272
		mu 0 4 276 275 283 284
		f 4 -272 -269 -266 -274
		mu 0 4 285 286 274 273
		f 4 277 276 -276 -275
		mu 0 4 287 288 289 290
		f 4 280 279 -279 -277
		mu 0 4 288 291 292 289
		f 4 283 282 -282 -280
		mu 0 4 291 293 294 292
		f 4 285 274 -285 -283
		mu 0 4 293 295 296 294
		f 4 275 278 281 284
		mu 0 4 290 289 297 298
		f 4 -284 -281 -278 -286
		mu 0 4 299 300 288 287
		f 4 299 291 -299 300
		mu 0 4 301 302 303 304
		f 4 287 302 -289 -293
		mu 0 4 305 304 306 307
		f 4 288 304 -290 -295
		mu 0 4 307 306 308 309
		f 4 289 305 -287 -297
		mu 0 4 309 308 310 311
		f 4 -298 -296 -294 -292
		mu 0 4 302 312 313 303
		f 4 296 290 292 294
		mu 0 4 314 315 305 316
		f 4 286 -301 -288 -291
		mu 0 4 315 301 304 305
		f 4 -303 298 293 -302
		mu 0 4 306 304 303 317
		f 4 -305 301 295 -304
		mu 0 4 308 306 317 318
		f 4 -306 303 297 -300
		mu 0 4 310 308 318 319
		f 4 306 311 -308 -311
		mu 0 4 320 321 322 323
		f 4 307 313 -309 -313
		mu 0 4 323 322 324 325
		f 4 308 315 -310 -315
		mu 0 4 325 324 326 327
		f 4 309 317 -307 -317
		mu 0 4 327 326 328 329
		f 4 -314 -312 -318 -316
		mu 0 4 330 331 332 333
		f 4 312 314 316 310
		mu 0 4 334 335 336 337
		f 4 318 323 -320 -323
		mu 0 4 338 339 340 341
		f 4 319 325 -321 -325
		mu 0 4 341 340 342 343
		f 4 320 327 -322 -327
		mu 0 4 343 342 344 345
		f 4 321 329 -319 -329
		mu 0 4 345 344 346 347
		f 4 -330 -328 -326 -324
		mu 0 4 339 348 349 340
		f 4 328 322 324 326
		mu 0 4 350 338 341 351
		f 4 330 335 -332 -335
		mu 0 4 352 353 354 355
		f 4 331 337 -333 -337
		mu 0 4 355 354 356 357
		f 4 332 339 -334 -339
		mu 0 4 357 356 358 359
		f 4 333 341 -331 -341
		mu 0 4 359 358 360 361
		f 4 -342 -340 -338 -336
		mu 0 4 353 362 363 354
		f 4 340 334 336 338
		mu 0 4 364 352 355 365
		f 4 459 458 -390 392
		mu 0 4 366 367 368 369
		f 4 411 410 -388 390
		mu 0 4 370 371 372 373
		f 4 387 355 -387 388
		mu 0 4 373 372 374 375
		f 4 399 359 -398 400
		mu 0 4 376 377 378 379
		f 4 397 361 415 414
		mu 0 4 379 378 380 381
		f 4 395 363 463 462
		mu 0 4 382 383 384 385
		f 4 393 365 -392 394
		mu 0 4 386 387 388 389
		f 4 461 -364 366 -459
		mu 0 4 367 390 391 368
		f 4 413 -362 367 -411
		mu 0 4 371 392 393 372
		f 4 -368 -360 -358 -356
		mu 0 4 372 393 394 374
		f 4 467 466 -369 362
		mu 0 4 395 396 397 398
		f 4 419 418 -370 360
		mu 0 4 399 400 401 402
		f 4 369 354 356 358
		mu 0 4 402 401 403 404
		f 4 345 402 -373 -371
		mu 0 4 403 375 405 406
		f 4 357 373 -375 -372
		mu 0 4 374 377 407 408
		f 4 408 -347 375 376
		mu 0 4 409 376 410 411
		f 4 -357 370 377 -376
		mu 0 4 410 403 406 411
		f 4 372 404 435 -379
		mu 0 4 406 405 412 413
		f 4 374 381 443 -380
		mu 0 4 408 407 414 415
		f 4 -377 383 439 438
		mu 0 4 409 411 416 417
		f 4 -378 378 437 -384
		mu 0 4 411 406 413 416
		f 4 344 -389 -346 -355
		mu 0 4 401 373 375 403
		f 4 420 -391 -345 -419
		mu 0 4 400 370 373 401
		f 4 468 -393 -344 -467
		mu 0 4 396 366 369 397
		f 4 349 -395 -343 -365
		mu 0 4 418 386 389 419
		f 4 348 -463 465 -363
		mu 0 4 420 382 385 421
		f 4 347 -415 417 -361
		mu 0 4 422 379 381 423
		f 4 346 -401 -348 -359
		mu 0 4 410 376 379 422
		f 4 -403 386 371 -402
		mu 0 4 405 375 374 408
		f 4 444 -405 401 379
		mu 0 4 415 412 405 408
		f 4 -407 -439 441 -382
		mu 0 4 407 409 417 414
		f 4 -400 -409 406 -374
		mu 0 4 377 376 409 407
		f 4 495 494 471 470
		mu 0 4 424 425 426 427
		f 4 497 -479 480 -495
		mu 0 4 425 428 429 426
		f 4 479 478 499 498
		mu 0 4 430 431 432 433
		f 4 477 -499 501 -475
		mu 0 4 434 430 433 435
		f 4 503 502 475 474
		mu 0 4 436 437 438 439
		f 4 504 -471 473 -503
		mu 0 4 437 424 427 438
		f 4 456 -423 -424 421
		mu 0 4 440 441 442 443
		f 4 -426 422 447 -425
		mu 0 4 444 442 441 445
		f 4 -428 424 449 -427
		mu 0 4 446 444 445 447
		f 4 -430 426 451 450
		mu 0 4 448 446 447 449
		f 4 -432 -451 453 -431
		mu 0 4 450 448 449 451
		f 4 -433 430 455 -422
		mu 0 4 443 450 451 440
		f 4 -436 433 425 -435
		mu 0 4 413 412 442 444
		f 4 -438 434 427 -437
		mu 0 4 416 413 444 446
		f 4 -440 436 429 428
		mu 0 4 417 416 446 448
		f 4 -442 -429 431 -441
		mu 0 4 414 417 448 450
		f 4 -444 440 432 -443
		mu 0 4 415 414 450 443
		f 4 -434 -445 442 423
		mu 0 4 442 412 415 443
		f 4 -448 445 -381 -447
		mu 0 4 445 441 452 453
		f 4 -450 446 385 -449
		mu 0 4 447 445 453 454
		f 4 -452 448 384 407
		mu 0 4 449 447 454 455
		f 4 -454 -408 405 -453
		mu 0 4 451 449 455 456
		f 4 -456 452 -383 -455
		mu 0 4 440 451 456 457
		f 4 -446 -457 454 -404
		mu 0 4 452 441 440 457
		f 4 391 351 -460 457
		mu 0 4 458 459 367 366
		f 4 -366 -461 -462 -352
		mu 0 4 459 460 390 367
		f 4 -464 460 -394 396
		mu 0 4 385 384 387 386
		f 4 -466 -397 -350 -465
		mu 0 4 421 385 386 418
		f 4 364 350 -468 464
		mu 0 4 461 462 396 395
		f 4 342 -458 -469 -351
		mu 0 4 462 458 366 396
		f 4 -472 469 -412 409
		mu 0 4 427 426 371 370
		f 4 -474 -410 -421 -473
		mu 0 4 438 427 370 400
		f 4 -476 472 -420 416
		mu 0 4 439 438 400 399
		f 4 -418 -477 -478 -417
		mu 0 4 423 381 430 434
		f 4 -416 412 -480 476
		mu 0 4 381 380 431 430
		f 4 -481 -413 -414 -470
		mu 0 4 426 429 392 371
		f 4 380 482 -484 -482
		mu 0 4 453 452 463 464
		f 4 -385 485 486 -485
		mu 0 4 455 454 465 466
		f 4 -386 481 487 -486
		mu 0 4 454 453 464 465
		f 4 403 488 -490 -483
		mu 0 4 452 457 467 463
		f 4 382 490 -492 -489
		mu 0 4 457 456 468 467
		f 4 -406 484 492 -491
		mu 0 4 456 455 466 468
		f 4 389 353 -496 493
		mu 0 4 369 368 425 424
		f 4 -367 -497 -498 -354
		mu 0 4 368 391 428 425
		f 4 -500 496 -396 398
		mu 0 4 433 432 383 382
		f 4 -502 -399 -349 -501
		mu 0 4 435 433 382 420
		f 4 368 352 -504 500
		mu 0 4 398 397 437 436
		f 4 343 -494 -505 -353
		mu 0 4 397 369 424 437
		f 4 510 505 -510 511
		mu 0 4 469 470 471 472
		f 4 -509 -508 -523 525
		mu 0 4 473 474 475 476
		f 4 530 532 -535 -536
		mu 0 4 477 478 479 480
		f 4 513 509 -518 -516
		mu 0 4 481 472 471 482
		f 4 520 -511 512 -520
		mu 0 4 483 484 485 486
		f 3 508 527 -519
		mu 0 3 487 488 489
		f 4 517 506 -524 -517
		mu 0 4 482 471 490 491
		f 4 -525 -526 -507 -506
		mu 0 4 470 473 476 471
		f 4 -528 524 -521 -527
		mu 0 4 489 488 484 483
		f 4 523 529 -531 -529
		mu 0 4 491 490 478 477
		f 4 522 531 -533 -530
		mu 0 4 490 492 479 478
		f 4 -515 533 534 -532
		mu 0 4 492 493 480 479
		f 4 -522 528 535 -534
		mu 0 4 493 491 477 480
		f 4 515 537 519 -537
		mu 0 4 494 495 496 497
		f 4 516 538 526 -538
		mu 0 4 498 499 500 501
		f 4 521 539 518 -539
		mu 0 4 502 503 504 505
		f 3 -540 514 507
		mu 0 3 506 507 508
		f 4 -512 542 -542 -541
		mu 0 4 509 510 511 512
		f 4 -547 545 544 543
		mu 0 4 513 514 515 516
		f 4 550 549 -549 -548
		mu 0 4 517 518 519 520
		f 4 552 551 -543 -514
		mu 0 4 521 522 511 510
		f 4 554 -513 540 -554
		mu 0 4 523 524 525 526
		f 3 556 -556 -544
		mu 0 3 527 528 529
		f 4 559 558 -558 -552
		mu 0 4 522 530 531 511
		f 4 541 557 546 560
		mu 0 4 512 511 514 513
		f 4 561 553 -561 555
		mu 0 4 528 523 526 529
		f 4 563 547 -563 -559
		mu 0 4 530 517 520 531
		f 4 562 548 -565 -546
		mu 0 4 531 520 519 532
		f 4 564 -550 -567 565
		mu 0 4 532 519 518 533
		f 4 566 -551 -564 567
		mu 0 4 533 518 517 530
		f 4 536 -555 -569 -553
		mu 0 4 534 535 536 537
		f 4 568 -562 -570 -560
		mu 0 4 538 539 540 541
		f 4 569 -557 -571 -568
		mu 0 4 542 543 544 545
		f 3 -545 -566 570
		mu 0 3 546 547 548
		f 4 571 598 -574 -598
		mu 0 4 549 550 551 552
		f 4 572 597 -577 -600
		mu 0 4 553 554 555 556
		f 4 573 601 -578 -601
		mu 0 4 552 551 557 558
		f 4 574 603 -579 -603
		mu 0 4 559 560 561 562
		f 4 575 604 -580 -604
		mu 0 4 560 556 563 561
		f 4 576 600 -581 -605
		mu 0 4 556 555 564 563
		f 4 577 606 -582 -606
		mu 0 4 558 557 565 566
		f 4 578 608 -583 -608
		mu 0 4 562 561 567 568
		f 4 579 609 -584 -609
		mu 0 4 561 563 569 567
		f 4 580 605 -585 -610
		mu 0 4 563 564 570 569
		f 4 581 611 -586 -611
		mu 0 4 566 565 571 572
		f 4 582 613 -587 -613
		mu 0 4 568 567 573 574
		f 4 583 614 -588 -614
		mu 0 4 567 569 575 573
		f 4 584 610 -589 -615
		mu 0 4 569 570 576 575
		f 4 585 616 -590 -616
		mu 0 4 572 571 577 578
		f 4 586 618 -591 -618
		mu 0 4 574 573 579 580
		f 4 587 619 -592 -619
		mu 0 4 573 575 581 579
		f 4 588 615 -593 -620
		mu 0 4 575 576 582 581
		f 4 589 621 -594 -621
		mu 0 4 578 577 583 584
		f 4 590 623 -595 -623
		mu 0 4 580 579 585 586
		f 4 591 624 -596 -624
		mu 0 4 579 581 587 585
		f 4 592 620 -597 -625
		mu 0 4 581 582 588 587
		f 3 -572 -626 626
		mu 0 3 550 549 589
		f 3 -573 -628 625
		mu 0 3 554 553 590
		f 3 593 629 -629
		mu 0 3 584 583 591
		f 3 594 631 -631
		mu 0 3 586 585 592
		f 3 595 632 -632
		mu 0 3 585 587 593
		f 3 596 628 -633
		mu 0 3 587 588 594
		f 4 -575 633 635 -635
		mu 0 4 595 596 597 598
		f 4 -576 634 637 -637
		mu 0 4 599 600 601 602
		f 4 599 636 -640 -639
		mu 0 4 603 604 605 606
		f 4 627 638 -642 -641
		mu 0 4 607 608 609 610
		f 4 -636 642 644 -644
		mu 0 4 611 612 613 614
		f 4 -638 643 646 -646
		mu 0 4 615 616 617 618
		f 4 639 645 -649 -648
		mu 0 4 619 620 621 622
		f 4 641 647 -651 -650
		mu 0 4 623 624 625 626
		f 4 653 652 -599 -652
		mu 0 4 627 628 629 630
		f 4 656 655 -654 -655
		mu 0 4 631 632 633 634
		f 4 658 657 -602 -653
		mu 0 4 628 635 636 629
		f 4 602 661 -661 -660
		mu 0 4 637 638 639 640
		f 4 660 664 -664 -663
		mu 0 4 640 639 641 632
		f 4 663 665 -659 -656
		mu 0 4 632 641 642 633
		f 4 667 666 -607 -658
		mu 0 4 635 643 644 636
		f 4 607 669 -669 -662
		mu 0 4 638 645 646 639
		f 4 668 671 -671 -665
		mu 0 4 639 646 647 641
		f 4 670 672 -668 -666
		mu 0 4 641 647 648 642
		f 4 674 673 -612 -667
		mu 0 4 643 649 650 644
		f 4 612 676 -676 -670
		mu 0 4 645 651 652 646
		f 4 675 678 -678 -672
		mu 0 4 646 652 653 647
		f 4 677 679 -675 -673
		mu 0 4 647 653 654 648
		f 4 681 680 -617 -674
		mu 0 4 649 655 656 650
		f 4 617 683 -683 -677
		mu 0 4 651 657 658 652
		f 4 682 685 -685 -679
		mu 0 4 652 658 659 653
		f 4 684 686 -682 -680
		mu 0 4 653 659 660 654
		f 4 688 687 -622 -681
		mu 0 4 655 661 662 656
		f 4 622 690 -690 -684
		mu 0 4 657 663 664 658
		f 4 689 692 -692 -686
		mu 0 4 658 664 665 659
		f 4 691 693 -689 -687
		mu 0 4 659 665 666 660
		f 3 -627 694 651
		mu 0 3 630 667 627
		f 3 -695 695 654
		mu 0 3 634 668 631
		f 3 696 -630 -688
		mu 0 3 661 669 662
		f 3 630 -698 -691
		mu 0 3 663 670 664
		f 3 697 -699 -693
		mu 0 3 664 671 665
		f 3 698 -697 -694
		mu 0 3 665 672 666
		f 4 700 -700 -634 659
		mu 0 4 673 674 675 676
		f 4 702 -702 -701 662
		mu 0 4 677 678 679 680
		f 4 704 703 -703 -657
		mu 0 4 681 682 683 684
		f 4 640 705 -705 -696
		mu 0 4 685 686 687 688
		f 4 707 -707 -643 699
		mu 0 4 689 690 691 692
		f 4 709 -709 -708 701
		mu 0 4 693 694 695 696
		f 4 711 710 -710 -704
		mu 0 4 697 698 699 700
		f 4 649 712 -712 -706
		mu 0 4 701 702 703 704
		f 3 714 708 -711
		mu 0 3 703 695 699
		f 3 -714 648 -647
		mu 0 3 614 622 618
		f 4 715 706 -715 -713
		mu 0 4 626 691 695 703
		f 4 -645 -716 650 713
		mu 0 4 614 691 626 622;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
createNode materialInfo -n "materialInfo1";
createNode shadingEngine -n "lambert2SG";
	setAttr ".ihi" 0;
	setAttr -s 2 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 2 ".gn";
createNode lambert -n "lambert2";
createNode materialInfo -n "materialInfo2";
createNode shadingEngine -n "lambert3SG";
	setAttr ".ihi" 0;
	setAttr ".ro" yes;
createNode lambert -n "lambert3";
	setAttr ".it" -type "float3" 0.1 0.1 0.1 ;
createNode lightLinker -s -n "lightLinker1";
	setAttr -s 4 ".lnk";
	setAttr -s 4 ".slnk";
createNode displayLayerManager -n "layerManager";
createNode displayLayer -n "defaultLayer";
createNode renderLayerManager -n "renderLayerManager";
createNode renderLayer -n "defaultRenderLayer";
	setAttr ".g" yes;
createNode script -n "sceneConfigurationScriptNode";
	setAttr ".b" -type "string" "playbackOptions -min 1 -max 24 -ast 1 -aet 48 ";
	setAttr ".st" 6;
createNode skinCluster -n "skinCluster2";
	setAttr -s 116 ".wl";
	setAttr -s 3 ".wl[0].w[0:2]"  0.00040939223029132064 0.99958734916608027 
		3.2586036282038898e-06;
	setAttr -s 3 ".wl[1].w[0:2]"  0.00065238278978641949 0.99934342536412835 
		4.1918460852089728e-06;
	setAttr -s 3 ".wl[2].w[0:2]"  0.00094933588003693551 0.99904605691401038 
		4.607205952728999e-06;
	setAttr -s 3 ".wl[3].w[0:2]"  0.0010182929488603948 0.99897751558759085 
		4.1914635487081711e-06;
	setAttr -s 3 ".wl[4].w[0:2]"  0.00074708930573748442 0.99924960498465443 
		3.3057096081865244e-06;
	setAttr -s 3 ".wl[5].w[0:2]"  0.00044825956439660454 0.9995492118411532 
		2.5285944501945184e-06;
	setAttr -s 3 ".wl[6].w[0:2]"  0.00030463263396506474 0.99969315556482674 
		2.2118012082696274e-06;
	setAttr -s 3 ".wl[7].w[0:2]"  0.00029722813660864624 0.99970030044191494 
		2.4714214765381672e-06;
	setAttr -s 3 ".wl[8].w[0:2]"  0.00075700663975029176 0.99923526361801773 
		7.7297422320062305e-06;
	setAttr -s 3 ".wl[9].w[0:2]"  0.0014815182130145583 0.99850799255016565 
		1.0489236819762475e-05;
	setAttr -s 3 ".wl[10].w[0:2]"  0.0027462616244409554 0.99724226880618316 
		1.146956937591928e-05;
	setAttr -s 3 ".wl[11].w[0:2]"  0.0033030798927133004 0.99668697879433554 
		9.9413129511281113e-06;
	setAttr -s 3 ".wl[12].w[0:2]"  0.0020810816607289631 0.99791157944361453 
		7.3388956565746353e-06;
	setAttr -s 3 ".wl[13].w[0:2]"  0.00094708993876218672 0.99904762222259358 
		5.287838644308151e-06;
	setAttr -s 3 ".wl[14].w[0:2]"  0.00052693038927604174 0.99946851964903261 
		4.5499616911563128e-06;
	setAttr -s 3 ".wl[15].w[0:2]"  0.00049425050071012994 0.99950037747428244 
		5.3720250076083367e-06;
	setAttr -s 3 ".wl[16].w[0:2]"  0.0011451116514583845 0.99884110563227313 
		1.3782716268529122e-05;
	setAttr -s 3 ".wl[17].w[0:2]"  0.0024222444522027996 0.99755912559776827 
		1.8629950028872568e-05;
	setAttr -s 3 ".wl[18].w[0:2]"  0.0051360892785995401 0.99484397218482878 
		1.9938536571518016e-05;
	setAttr -s 3 ".wl[19].w[0:2]"  0.0067539624756273028 0.99322918479589795 
		1.6852728474687952e-05;
	setAttr -s 3 ".wl[20].w[0:2]"  0.0039374783468880178 0.99605022382105246 
		1.2297832059560745e-05;
	setAttr -s 3 ".wl[21].w[0:2]"  0.0015723935004883258 0.99841868870894523 
		8.9177905662502587e-06;
	setAttr -s 3 ".wl[22].w[0:2]"  0.00080657334871518042 0.999185598114814 
		7.8285364708558032e-06;
	setAttr -s 3 ".wl[23].w[0:2]"  0.00073428666893762362 0.99925626211984186 
		9.451211220455236e-06;
	setAttr -s 3 ".wl[24].w[0:2]"  0.0012337232537762174 0.99875047532636607 
		1.580141985768938e-05;
	setAttr -s 3 ".wl[25].w[0:2]"  0.0026518760003204755 0.99732677408655324 
		2.1349913126231144e-05;
	setAttr -s 3 ".wl[26].w[0:2]"  0.0057907286195658441 0.99418655471462924 
		2.2716665804938398e-05;
	setAttr -s 3 ".wl[27].w[0:2]"  0.0077746386422716703 0.99220629797462512 
		1.906338310328255e-05;
	setAttr -s 3 ".wl[28].w[0:2]"  0.0044500208567149402 0.99553611746916415 
		1.386167412079514e-05;
	setAttr -s 3 ".wl[29].w[0:2]"  0.0017263801917298599 0.99826355762651553 
		1.0062181754632613e-05;
	setAttr -s 3 ".wl[30].w[0:2]"  0.00087089475980493304 0.99912022760664243 
		8.8776335526189042e-06;
	setAttr -s 3 ".wl[31].w[0:2]"  0.00078817155082712789 0.9992010424148996 
		1.0786034273268646e-05;
	setAttr -s 3 ".wl[32].w[0:2]"  0.00092216593070937249 0.99906649947374515 
		1.1334595545450052e-05;
	setAttr -s 3 ".wl[33].w[0:2]"  0.0019319723716258199 0.99805246736790787 
		1.5560260466372463e-05;
	setAttr -s 3 ".wl[34].w[0:2]"  0.0039521139635260698 0.99603105446102436 
		1.6831575449793609e-05;
	setAttr -s 3 ".wl[35].w[0:2]"  0.005037563816193997 0.9949481779346474 
		1.4258249158748132e-05;
	setAttr -s 3 ".wl[36].w[0:2]"  0.0029806196761166734 0.99700907620092682 
		1.0304122956431661e-05;
	setAttr -s 3 ".wl[37].w[0:2]"  0.0012202505981959526 0.99877241560639518 
		7.3337954088165731e-06;
	setAttr -s 3 ".wl[38].w[0:2]"  0.00063399343059388445 0.9993596704030534 
		6.3361663526942387e-06;
	setAttr -s 3 ".wl[39].w[0:2]"  0.00058507499568100367 0.99940726583631456 
		7.6591680043751829e-06;
	setAttr -s 3 ".wl[40].w[0:2]"  0.00046067188978224784 0.99953437056737804 
		4.9575428397972211e-06;
	setAttr -s 3 ".wl[41].w[0:2]"  0.00090564545307308996 0.99908733249583137 
		7.0220510955355377e-06;
	setAttr -s 3 ".wl[42].w[0:2]"  0.0016140871245494874 0.99837805010145919 
		7.862773991382535e-06;
	setAttr -s 3 ".wl[43].w[0:2]"  0.0018623496815476331 0.99813083905929234 
		6.8112591599871789e-06;
	setAttr -s 3 ".wl[44].w[0:2]"  0.0011731385263046724 0.99882197584997601 
		4.88562371940531e-06;
	setAttr -s 3 ".wl[45].w[0:2]"  0.00053778794744624707 0.99945886782853632 
		3.3442240174066731e-06;
	setAttr -s 3 ".wl[46].w[0:2]"  0.00029974355287959225 0.9996974963804186 
		2.7600667018348288e-06;
	setAttr -s 3 ".wl[47].w[0:2]"  0.00028932832843190666 0.99970738172970652 
		3.2899418615600016e-06;
	setAttr -s 3 ".wl[48].w[0:2]"  0.00016186116256511582 0.99983671819956188 
		1.4206378727597082e-06;
	setAttr -s 3 ".wl[49].w[0:2]"  0.00027257469126391285 0.99972543470355901 
		1.9906051770444507e-06;
	setAttr -s 3 ".wl[50].w[0:2]"  0.0003966111747671684 0.9996011085929406 
		2.2802322921246003e-06;
	setAttr -s 3 ".wl[51].w[0:2]"  0.000411475477280794 0.99958646987184818 
		2.0546508711074582e-06;
	setAttr -s 3 ".wl[52].w[0:2]"  0.00028801818400890324 0.99971045898274868 
		1.5228332424571125e-06;
	setAttr -s 3 ".wl[53].w[0:2]"  0.00016248255766090244 0.99983646317268382 
		1.0542696552398322e-06;
	setAttr -s 3 ".wl[54].w[0:2]"  0.00010600176793207019 0.99989314243442196 
		8.5579764605820065e-07;
	setAttr -s 3 ".wl[55].w[0:2]"  0.00010769837220978461 0.99989132139541925 
		9.8023237109044211e-07;
	setAttr -s 3 ".wl[56].w[0:2]"  0.000338181939320407 0.99965981717930075 
		2.0008813787183849e-06;
	setAttr -s 3 ".wl[57].w[0:2]"  9.4894334005754183e-05 0.99990445532412875 
		6.5034186536533534e-07;
	setAttr -s 3 ".wl[58].w[0:2]"  0.99910656933335285 0.00088801799138890278 
		5.4126752584350968e-06;
	setAttr -s 3 ".wl[59].w[0:2]"  0.99784432563070269 0.0021453004148434111 
		1.0373954453957593e-05;
	setAttr -s 3 ".wl[60].w[0:2]"  0.99651154555959076 0.0034698185817121276 
		1.8635858697285566e-05;
	setAttr -s 3 ".wl[61].w[0:2]"  0.99911674126869454 0.00087628196338525885 
		6.9767679202671325e-06;
	setAttr -s 3 ".wl[62].w[0:2]"  0.99564184726940352 0.004342644124557947 
		1.5508606038519598e-05;
	setAttr -s 3 ".wl[63].w[0:2]"  0.98964696813862363 0.010321693810951944 
		3.1338050424378483e-05;
	setAttr -s 3 ".wl[64].w[0:2]"  0.99449941012850895 0.0054841733306508636 
		1.6416540840173638e-05;
	setAttr -s 3 ".wl[65].w[0:2]"  0.98461350194294961 0.015353780336931556 
		3.271772011877832e-05;
	setAttr -s 3 ".wl[66].w[0:2]"  0.99614527366795347 0.0038422353633372239 
		1.2490968709171613e-05;
	setAttr -s 3 ".wl[67].w[0:2]"  0.99112519903597973 0.0088521772264082369 
		2.2623737612210436e-05;
	setAttr -s 3 ".wl[68].w[0:2]"  0.99828182258277665 0.0017109285374526466 
		7.2488797707277947e-06;
	setAttr -s 3 ".wl[69].w[0:2]"  0.99747026405413775 0.0025191041422922764 
		1.0631803569923036e-05;
	setAttr -s 3 ".wl[70].w[0:2]"  0.99928674851083732 0.00070931292935878126 
		3.9385598039200428e-06;
	setAttr -s 3 ".wl[71].w[0:2]"  0.99940025240099328 0.00059574557259373779 
		4.0020264129376024e-06;
	setAttr -s 3 ".wl[72].w[0:2]"  0.99948044472724962 0.00051624940983384111 
		3.3058629165199907e-06;
	setAttr -s 3 ".wl[73].w[0:2]"  0.99966084122002052 0.00033628582337386439 
		2.8729566057368076e-06;
	setAttr -s 3 ".wl[74].w[0:2]"  0.99533367240117954 0.0046390304199845564 
		2.7297178835794006e-05;
	setAttr -s 3 ".wl[75].w[0:2]"  0.99902007744136834 0.00097069856650606437 
		9.2239921256000613e-06;
	setAttr -s 3 ".wl[76].w[0:2]"  0.98337102615084404 0.016582314546680309 
		4.6659302475797605e-05;
	setAttr -s 3 ".wl[77].w[0:2]"  0.97264598984468542 0.027306440806435281 
		4.7569348879285255e-05;
	setAttr -s 3 ".wl[78].w[0:2]"  0.98579594871254772 0.014172099532099932 
		3.1951755352586624e-05;
	setAttr -s 3 ".wl[79].w[0:2]"  0.99669806080959022 0.0032877360578910972 
		1.4203132518696455e-05;
	setAttr -s 3 ".wl[80].w[0:2]"  0.99937223000412001 0.00062300944255143083 
		4.7605533286226716e-06;
	setAttr -s 3 ".wl[81].w[0:2]"  0.9996812788852838 0.00031548752542391844 
		3.2335892921735058e-06;
	setAttr -s 3 ".wl[82].w[0:2]"  0.99540970546582863 0.0045620218203229973 
		2.8272713848473093e-05;
	setAttr -s 3 ".wl[83].w[0:2]"  0.999115864108163 0.00087523281686717155 
		8.9030749698384572e-06;
	setAttr -s 3 ".wl[84].w[0:2]"  0.98270759460680812 0.017243111602205895 
		4.929379098586401e-05;
	setAttr -s 3 ".wl[85].w[0:2]"  0.97080898537169147 0.029140934085312833 
		5.008054299574698e-05;
	setAttr -s 3 ".wl[86].w[0:2]"  0.98530619403785669 0.014660668962438686 
		3.3136999704760356e-05;
	setAttr -s 3 ".wl[87].w[0:2]"  0.99681244678597725 0.0031733801171206864 
		1.4173096902041688e-05;
	setAttr -s 3 ".wl[88].w[0:2]"  0.99945802178221199 0.00053763833229905579 
		4.339885489017758e-06;
	setAttr -s 3 ".wl[89].w[0:2]"  0.99974301332433413 0.00025420052596848318 
		2.7861496975764564e-06;
	setAttr -s 3 ".wl[90].w[0:2]"  0.9968282785838446 0.0031521266601055174 
		1.9594756049887537e-05;
	setAttr -s 3 ".wl[91].w[0:2]"  0.9994401283376716 0.00055446137426936519 
		5.410288058967145e-06;
	setAttr -s 3 ".wl[92].w[0:2]"  0.98842783897542941 0.011535970772344173 
		3.6190252226411433e-05;
	setAttr -s 3 ".wl[93].w[0:2]"  0.98131355116640451 0.018648761780548914 
		3.7687053046663281e-05;
	setAttr -s 3 ".wl[94].w[0:2]"  0.99031883901086315 0.0096566603825852648 
		2.4500606551530061e-05;
	setAttr -s 3 ".wl[95].w[0:2]"  0.9978799934077428 0.0021102577842950655 
		9.7488079622036204e-06;
	setAttr -s 3 ".wl[96].w[0:2]"  0.99968683405017844 0.0003107073873566657 
		2.4585624650859206e-06;
	setAttr -s 3 ".wl[97].w[0:2]"  0.99986923514638548 0.00012940944284427029 
		1.3554107703023629e-06;
	setAttr -s 3 ".wl[98].w[0:2]"  0.99853615166152299 0.0014551426285425188 
		8.7057099345205731e-06;
	setAttr -s 3 ".wl[99].w[0:2]"  0.99976872386639548 0.00022932901734645111 
		1.9471162579185403e-06;
	setAttr -s 3 ".wl[100].w[0:2]"  0.99515026591478917 0.0048321567710880448 
		1.7577314122853981e-05;
	setAttr -s 3 ".wl[101].w[0:2]"  0.99284124747956659 0.007139628508880779 
		1.9124011552655339e-05;
	setAttr -s 3 ".wl[102].w[0:2]"  0.99603714705774915 0.0039505989254638892 
		1.2254016786969033e-05;
	setAttr -s 3 ".wl[103].w[0:2]"  0.99907776049976882 0.00091784917031882034 
		4.3903299123290988e-06;
	setAttr -s 3 ".wl[104].w[0:2]"  0.99989106861559163 0.00010814731843341484 
		7.8406597489509769e-07;
	setAttr -s 3 ".wl[105].w[0:2]"  0.99996573824924917 3.395511166021033e-05 
		3.066390908070328e-07;
	setAttr -s 3 ".wl[106].w[0:2]"  0.99954732574863692 0.00045014193735922506 
		2.5323140037932251e-06;
	setAttr -s 3 ".wl[107].w[0:2]"  0.99991087748912677 8.8516247169940932e-05 
		6.0626370332023633e-07;
	setAttr -s 3 ".wl[108].w[0:2]"  0.99881001456555307 0.001184822444542357 
		5.1629899045904118e-06;
	setAttr -s 3 ".wl[109].w[0:2]"  0.99844072911872062 0.0015534402668516928 
		5.830614427763582e-06;
	setAttr -s 3 ".wl[110].w[0:2]"  0.99903069936139299 0.00096543665289869503 
		3.8639857083048353e-06;
	setAttr -s 3 ".wl[111].w[0:2]"  0.99971230818902401 0.00028626341346144849 
		1.4283975145054663e-06;
	setAttr -s 3 ".wl[112].w[0:2]"  0.99995575963441186 4.396369861439411e-05 
		2.766669737510219e-07;
	setAttr -s 3 ".wl[113].w[0:2]"  0.99998354232836573 1.6341109095501162e-05 
		1.1656253873415059e-07;
	setAttr -s 3 ".wl[114].w[0:2]"  0.99847608923176179 0.0015171815398792535 
		6.729228359023683e-06;
	setAttr -s 3 ".wl[115].w[0:2]"  0.99983057062692415 0.00016854083580831249 
		8.8853726764570828e-07;
	setAttr -s 3 ".pm";
	setAttr ".pm[0]" -type "matrix" 1.0000000000000002 -2.1342121218110491e-16 2.1156825012058395e-16 0
		 -2.1692249987390495e-16 -1 1.6653345369377336e-16 0 1.8706038495930339e-16 -3.6082248300317602e-16 -1 0
		 0.14498200000000125 6.2592100000000013 0.398425999999999 1;
	setAttr ".pm[1]" -type "matrix" 1 -2.1689961444877186e-16 -3.3453450721923682e-16 0
		 1.1614440751364226e-16 1 5.5511151231257837e-16 0 4.0910498988433428e-16 -3.3306690738754726e-16 1 0
		 -0.12122998279564466 -6.2592143998865479 -0.39842647033509504 1;
	setAttr ".pm[2]" -type "matrix" 6.2253610690367447e-16 -2.4179835235144976e-16 1 0
		 0.98816815417410797 -0.15337437555255509 -6.6101170972396747e-16 0 0.15337437555255529 0.98816815417410797 1.8706038495930319e-16 0
		 -6.8617807558066275 1.2512311590336056 0.011875891656621942 1;
	setAttr ".gm" -type "matrix" 3.0116995367531136 0 0 0 0 3.0116995367531136 0 0 0 0 3.0116995367531136 0
		 4.8148248609680896e-35 0 -3.0814879110195774e-33 1;
	setAttr -s 3 ".ma";
	setAttr -s 3 ".dpf[0:2]"  4 4 4;
	setAttr -s 3 ".lw";
	setAttr -s 3 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 3 ".ifcl";
	setAttr -s 3 ".ifcl";
createNode groupId -n "groupId438";
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
createNode groupId -n "groupId440";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts6";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode skinCluster -n "skinCluster3";
	setAttr ".en" 0;
	setAttr -s 847 ".wl";
	setAttr ".wl[0].w[8]"  1;
	setAttr ".wl[1].w[8]"  1;
	setAttr ".wl[2].w[8]"  1;
	setAttr ".wl[3].w[8]"  1;
	setAttr ".wl[4].w[8]"  1;
	setAttr ".wl[5].w[8]"  1;
	setAttr ".wl[6].w[8]"  1;
	setAttr ".wl[7].w[8]"  1;
	setAttr ".wl[8].w[8]"  1;
	setAttr ".wl[9].w[8]"  1;
	setAttr ".wl[10].w[8]"  1;
	setAttr ".wl[11].w[8]"  1;
	setAttr ".wl[12].w[8]"  1;
	setAttr ".wl[13].w[8]"  1;
	setAttr ".wl[14].w[8]"  1;
	setAttr ".wl[15].w[8]"  1;
	setAttr ".wl[16].w[8]"  1;
	setAttr ".wl[17].w[8]"  1;
	setAttr ".wl[18].w[8]"  1;
	setAttr ".wl[19].w[8]"  1;
	setAttr ".wl[20].w[8]"  1;
	setAttr ".wl[21].w[8]"  1;
	setAttr ".wl[22].w[8]"  1;
	setAttr ".wl[23].w[8]"  1;
	setAttr ".wl[24].w[8]"  1;
	setAttr ".wl[25].w[8]"  1;
	setAttr ".wl[26].w[8]"  1;
	setAttr ".wl[27].w[8]"  1;
	setAttr ".wl[28].w[8]"  1;
	setAttr ".wl[29].w[8]"  1;
	setAttr ".wl[30].w[8]"  1;
	setAttr ".wl[31].w[8]"  1;
	setAttr ".wl[32].w[8]"  1;
	setAttr ".wl[33].w[8]"  1;
	setAttr ".wl[34].w[8]"  1;
	setAttr ".wl[35].w[8]"  1;
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
	setAttr ".wl[58].w[10]"  1;
	setAttr ".wl[59].w[10]"  1;
	setAttr ".wl[60].w[10]"  1;
	setAttr ".wl[61].w[10]"  1;
	setAttr ".wl[62].w[10]"  1;
	setAttr ".wl[63].w[10]"  1;
	setAttr ".wl[64].w[10]"  1;
	setAttr ".wl[65].w[10]"  1;
	setAttr ".wl[66].w[10]"  1;
	setAttr ".wl[67].w[10]"  1;
	setAttr ".wl[68].w[10]"  1;
	setAttr ".wl[69].w[10]"  1;
	setAttr ".wl[70].w[10]"  1;
	setAttr ".wl[71].w[10]"  1;
	setAttr ".wl[72].w[10]"  1;
	setAttr ".wl[73].w[10]"  1;
	setAttr ".wl[74].w[10]"  1;
	setAttr ".wl[75].w[10]"  1;
	setAttr ".wl[76].w[10]"  1;
	setAttr ".wl[77].w[10]"  1;
	setAttr ".wl[78].w[10]"  1;
	setAttr ".wl[79].w[10]"  1;
	setAttr ".wl[80].w[10]"  1;
	setAttr ".wl[81].w[10]"  1;
	setAttr ".wl[82].w[10]"  1;
	setAttr ".wl[83].w[10]"  1;
	setAttr ".wl[84].w[10]"  1;
	setAttr ".wl[85].w[10]"  1;
	setAttr ".wl[86].w[10]"  1;
	setAttr ".wl[87].w[10]"  1;
	setAttr ".wl[88].w[10]"  1;
	setAttr ".wl[89].w[10]"  1;
	setAttr ".wl[90].w[10]"  1;
	setAttr ".wl[91].w[10]"  1;
	setAttr ".wl[92].w[10]"  1;
	setAttr ".wl[93].w[10]"  1;
	setAttr ".wl[94].w[11]"  1;
	setAttr ".wl[95].w[11]"  1;
	setAttr ".wl[96].w[11]"  1;
	setAttr ".wl[97].w[11]"  1;
	setAttr ".wl[98].w[11]"  1;
	setAttr ".wl[99].w[11]"  1;
	setAttr ".wl[100].w[11]"  1;
	setAttr ".wl[101].w[11]"  1;
	setAttr ".wl[102].w[11]"  1;
	setAttr ".wl[103].w[11]"  1;
	setAttr ".wl[104].w[11]"  1;
	setAttr ".wl[105].w[11]"  1;
	setAttr ".wl[106].w[11]"  1;
	setAttr ".wl[107].w[11]"  1;
	setAttr ".wl[108].w[11]"  1;
	setAttr ".wl[109].w[11]"  1;
	setAttr ".wl[110].w[11]"  1;
	setAttr ".wl[111].w[11]"  1;
	setAttr ".wl[112].w[12]"  1;
	setAttr ".wl[113].w[12]"  1;
	setAttr ".wl[114].w[12]"  1;
	setAttr ".wl[115].w[12]"  1;
	setAttr ".wl[116].w[12]"  1;
	setAttr ".wl[117].w[12]"  1;
	setAttr ".wl[118].w[12]"  1;
	setAttr ".wl[119].w[12]"  1;
	setAttr ".wl[120].w[12]"  1;
	setAttr ".wl[121].w[12]"  1;
	setAttr ".wl[122].w[12]"  1;
	setAttr ".wl[123].w[12]"  1;
	setAttr ".wl[124].w[12]"  1;
	setAttr ".wl[125].w[12]"  1;
	setAttr ".wl[126].w[12]"  1;
	setAttr ".wl[127].w[12]"  1;
	setAttr ".wl[128].w[12]"  1;
	setAttr ".wl[129].w[12]"  1;
	setAttr ".wl[130].w[12]"  1;
	setAttr ".wl[131].w[12]"  1;
	setAttr ".wl[132].w[12]"  1;
	setAttr ".wl[133].w[12]"  1;
	setAttr ".wl[134].w[12]"  1;
	setAttr ".wl[135].w[12]"  1;
	setAttr ".wl[136].w[12]"  1;
	setAttr ".wl[137].w[12]"  1;
	setAttr ".wl[138].w[12]"  1;
	setAttr ".wl[139].w[12]"  1;
	setAttr ".wl[140].w[12]"  1;
	setAttr ".wl[141].w[12]"  1;
	setAttr ".wl[142].w[12]"  1;
	setAttr ".wl[143].w[12]"  1;
	setAttr ".wl[144].w[12]"  1;
	setAttr ".wl[145].w[12]"  1;
	setAttr ".wl[146].w[12]"  1;
	setAttr ".wl[147].w[12]"  1;
	setAttr ".wl[148].w[12]"  1;
	setAttr ".wl[149].w[12]"  1;
	setAttr ".wl[150].w[12]"  1;
	setAttr ".wl[151].w[12]"  1;
	setAttr ".wl[152].w[12]"  1;
	setAttr ".wl[153].w[12]"  1;
	setAttr ".wl[154].w[12]"  1;
	setAttr ".wl[155].w[12]"  1;
	setAttr ".wl[156].w[12]"  1;
	setAttr ".wl[157].w[12]"  1;
	setAttr ".wl[158].w[12]"  1;
	setAttr ".wl[159].w[12]"  1;
	setAttr ".wl[160].w[12]"  1;
	setAttr ".wl[161].w[12]"  1;
	setAttr ".wl[162].w[12]"  1;
	setAttr ".wl[163].w[12]"  1;
	setAttr ".wl[164].w[12]"  1;
	setAttr ".wl[165].w[12]"  1;
	setAttr ".wl[166].w[12]"  1;
	setAttr ".wl[167].w[12]"  1;
	setAttr ".wl[168].w[12]"  1;
	setAttr ".wl[169].w[12]"  1;
	setAttr ".wl[170].w[13]"  1;
	setAttr ".wl[171].w[13]"  1;
	setAttr ".wl[172].w[13]"  1;
	setAttr ".wl[173].w[13]"  1;
	setAttr ".wl[174].w[13]"  1;
	setAttr ".wl[175].w[13]"  1;
	setAttr ".wl[176].w[13]"  1;
	setAttr ".wl[177].w[13]"  1;
	setAttr ".wl[178].w[13]"  1;
	setAttr ".wl[179].w[13]"  1;
	setAttr ".wl[180].w[13]"  1;
	setAttr ".wl[181].w[13]"  1;
	setAttr ".wl[182].w[13]"  1;
	setAttr ".wl[183].w[13]"  1;
	setAttr ".wl[184].w[13]"  1;
	setAttr ".wl[185].w[13]"  1;
	setAttr ".wl[186].w[13]"  1;
	setAttr ".wl[187].w[13]"  1;
	setAttr ".wl[188].w[13]"  1;
	setAttr ".wl[189].w[13]"  1;
	setAttr ".wl[190].w[13]"  1;
	setAttr ".wl[191].w[13]"  1;
	setAttr ".wl[192].w[13]"  1;
	setAttr ".wl[193].w[13]"  1;
	setAttr ".wl[194].w[13]"  1;
	setAttr ".wl[195].w[13]"  1;
	setAttr ".wl[196].w[13]"  1;
	setAttr ".wl[197].w[13]"  1;
	setAttr ".wl[198].w[13]"  1;
	setAttr ".wl[199].w[13]"  1;
	setAttr ".wl[200].w[13]"  1;
	setAttr ".wl[201].w[13]"  1;
	setAttr ".wl[202].w[13]"  1;
	setAttr ".wl[203].w[13]"  1;
	setAttr ".wl[204].w[13]"  1;
	setAttr ".wl[205].w[13]"  1;
	setAttr ".wl[206].w[13]"  1;
	setAttr ".wl[207].w[13]"  1;
	setAttr ".wl[208].w[13]"  1;
	setAttr ".wl[209].w[13]"  1;
	setAttr ".wl[210].w[13]"  1;
	setAttr ".wl[211].w[13]"  1;
	setAttr ".wl[212].w[13]"  1;
	setAttr ".wl[213].w[13]"  1;
	setAttr ".wl[214].w[13]"  1;
	setAttr ".wl[215].w[13]"  1;
	setAttr ".wl[216].w[13]"  1;
	setAttr ".wl[217].w[13]"  1;
	setAttr ".wl[218].w[13]"  1;
	setAttr ".wl[219].w[13]"  1;
	setAttr ".wl[220].w[13]"  1;
	setAttr ".wl[221].w[13]"  1;
	setAttr ".wl[222].w[13]"  1;
	setAttr ".wl[223].w[13]"  1;
	setAttr ".wl[224].w[13]"  1;
	setAttr ".wl[225].w[13]"  1;
	setAttr ".wl[226].w[13]"  1;
	setAttr ".wl[227].w[13]"  1;
	setAttr ".wl[228].w[14]"  1;
	setAttr ".wl[229].w[14]"  1;
	setAttr ".wl[230].w[14]"  1;
	setAttr ".wl[231].w[14]"  1;
	setAttr ".wl[232].w[14]"  1;
	setAttr ".wl[233].w[14]"  1;
	setAttr ".wl[234].w[14]"  1;
	setAttr ".wl[235].w[14]"  1;
	setAttr ".wl[236].w[14]"  1;
	setAttr ".wl[237].w[14]"  1;
	setAttr ".wl[238].w[14]"  1;
	setAttr ".wl[239].w[14]"  1;
	setAttr ".wl[240].w[14]"  1;
	setAttr ".wl[241].w[14]"  1;
	setAttr ".wl[242].w[14]"  1;
	setAttr ".wl[243].w[14]"  1;
	setAttr ".wl[244].w[14]"  1;
	setAttr ".wl[245].w[14]"  1;
	setAttr ".wl[246].w[16]"  1;
	setAttr ".wl[247].w[16]"  1;
	setAttr ".wl[248].w[16]"  1;
	setAttr ".wl[249].w[16]"  1;
	setAttr ".wl[250].w[16]"  1;
	setAttr ".wl[251].w[16]"  1;
	setAttr ".wl[252].w[16]"  1;
	setAttr ".wl[253].w[16]"  1;
	setAttr ".wl[254].w[16]"  1;
	setAttr ".wl[255].w[16]"  1;
	setAttr ".wl[256].w[16]"  1;
	setAttr ".wl[257].w[16]"  1;
	setAttr ".wl[258].w[16]"  1;
	setAttr ".wl[259].w[16]"  1;
	setAttr ".wl[260].w[16]"  1;
	setAttr ".wl[261].w[16]"  1;
	setAttr ".wl[262].w[16]"  1;
	setAttr ".wl[263].w[16]"  1;
	setAttr ".wl[264].w[16]"  1;
	setAttr ".wl[265].w[16]"  1;
	setAttr ".wl[266].w[16]"  1;
	setAttr ".wl[267].w[16]"  1;
	setAttr ".wl[268].w[16]"  1;
	setAttr ".wl[269].w[16]"  1;
	setAttr ".wl[270].w[16]"  1;
	setAttr ".wl[271].w[16]"  1;
	setAttr ".wl[272].w[16]"  1;
	setAttr ".wl[273].w[16]"  1;
	setAttr ".wl[274].w[16]"  1;
	setAttr ".wl[275].w[16]"  1;
	setAttr ".wl[276].w[16]"  1;
	setAttr ".wl[277].w[16]"  1;
	setAttr ".wl[278].w[16]"  1;
	setAttr ".wl[279].w[16]"  1;
	setAttr ".wl[280].w[16]"  1;
	setAttr ".wl[281].w[16]"  1;
	setAttr ".wl[282].w[16]"  1;
	setAttr ".wl[283].w[16]"  1;
	setAttr ".wl[284].w[16]"  1;
	setAttr ".wl[285].w[16]"  1;
	setAttr ".wl[286].w[16]"  1;
	setAttr ".wl[287].w[16]"  1;
	setAttr ".wl[288].w[16]"  1;
	setAttr ".wl[289].w[16]"  1;
	setAttr ".wl[290].w[16]"  1;
	setAttr ".wl[291].w[16]"  1;
	setAttr ".wl[292].w[16]"  1;
	setAttr ".wl[293].w[16]"  1;
	setAttr ".wl[294].w[16]"  1;
	setAttr ".wl[295].w[16]"  1;
	setAttr ".wl[296].w[16]"  1;
	setAttr ".wl[297].w[16]"  1;
	setAttr ".wl[298].w[16]"  1;
	setAttr ".wl[299].w[16]"  1;
	setAttr ".wl[300].w[16]"  1;
	setAttr ".wl[301].w[16]"  1;
	setAttr ".wl[302].w[16]"  1;
	setAttr ".wl[303].w[16]"  1;
	setAttr ".wl[304].w[17]"  1;
	setAttr ".wl[305].w[17]"  1;
	setAttr ".wl[306].w[17]"  1;
	setAttr ".wl[307].w[17]"  1;
	setAttr ".wl[308].w[17]"  1;
	setAttr ".wl[309].w[17]"  1;
	setAttr ".wl[310].w[17]"  1;
	setAttr ".wl[311].w[17]"  1;
	setAttr ".wl[312].w[17]"  1;
	setAttr ".wl[313].w[17]"  1;
	setAttr ".wl[314].w[17]"  1;
	setAttr ".wl[315].w[17]"  1;
	setAttr ".wl[316].w[17]"  1;
	setAttr ".wl[317].w[17]"  1;
	setAttr ".wl[318].w[17]"  1;
	setAttr ".wl[319].w[17]"  1;
	setAttr ".wl[320].w[17]"  1;
	setAttr ".wl[321].w[17]"  1;
	setAttr ".wl[322].w[18]"  1;
	setAttr ".wl[323].w[18]"  1;
	setAttr ".wl[324].w[18]"  1;
	setAttr ".wl[325].w[18]"  1;
	setAttr ".wl[326].w[18]"  1;
	setAttr ".wl[327].w[18]"  1;
	setAttr ".wl[328].w[18]"  1;
	setAttr ".wl[329].w[18]"  1;
	setAttr ".wl[330].w[18]"  1;
	setAttr ".wl[331].w[18]"  1;
	setAttr ".wl[332].w[18]"  1;
	setAttr ".wl[333].w[18]"  1;
	setAttr ".wl[334].w[18]"  1;
	setAttr ".wl[335].w[18]"  1;
	setAttr ".wl[336].w[18]"  1;
	setAttr ".wl[337].w[18]"  1;
	setAttr ".wl[338].w[18]"  1;
	setAttr ".wl[339].w[18]"  1;
	setAttr ".wl[340].w[18]"  1;
	setAttr ".wl[341].w[18]"  1;
	setAttr ".wl[342].w[18]"  1;
	setAttr ".wl[343].w[18]"  1;
	setAttr ".wl[344].w[18]"  1;
	setAttr ".wl[345].w[18]"  1;
	setAttr ".wl[346].w[18]"  1;
	setAttr ".wl[347].w[18]"  1;
	setAttr ".wl[348].w[18]"  1;
	setAttr ".wl[349].w[18]"  1;
	setAttr ".wl[350].w[18]"  1;
	setAttr ".wl[351].w[18]"  1;
	setAttr ".wl[352].w[18]"  1;
	setAttr ".wl[353].w[18]"  1;
	setAttr ".wl[354].w[18]"  1;
	setAttr ".wl[355].w[18]"  1;
	setAttr ".wl[356].w[18]"  1;
	setAttr ".wl[357].w[18]"  1;
	setAttr ".wl[358].w[18]"  1;
	setAttr ".wl[359].w[18]"  1;
	setAttr ".wl[360].w[18]"  1;
	setAttr ".wl[361].w[18]"  1;
	setAttr ".wl[362].w[18]"  1;
	setAttr ".wl[363].w[18]"  1;
	setAttr ".wl[364].w[18]"  1;
	setAttr ".wl[365].w[18]"  1;
	setAttr ".wl[366].w[18]"  1;
	setAttr ".wl[367].w[18]"  1;
	setAttr ".wl[368].w[18]"  1;
	setAttr ".wl[369].w[18]"  1;
	setAttr ".wl[370].w[18]"  1;
	setAttr ".wl[371].w[18]"  1;
	setAttr ".wl[372].w[18]"  1;
	setAttr ".wl[373].w[18]"  1;
	setAttr ".wl[374].w[18]"  1;
	setAttr ".wl[375].w[18]"  1;
	setAttr ".wl[376].w[18]"  1;
	setAttr ".wl[377].w[18]"  1;
	setAttr ".wl[378].w[18]"  1;
	setAttr ".wl[379].w[18]"  1;
	setAttr ".wl[380].w[19]"  1;
	setAttr ".wl[381].w[19]"  1;
	setAttr ".wl[382].w[19]"  1;
	setAttr ".wl[383].w[19]"  1;
	setAttr ".wl[384].w[19]"  1;
	setAttr ".wl[385].w[19]"  1;
	setAttr ".wl[386].w[19]"  1;
	setAttr ".wl[387].w[19]"  1;
	setAttr ".wl[388].w[19]"  1;
	setAttr ".wl[389].w[19]"  1;
	setAttr ".wl[390].w[19]"  1;
	setAttr ".wl[391].w[19]"  1;
	setAttr ".wl[392].w[19]"  1;
	setAttr ".wl[393].w[19]"  1;
	setAttr ".wl[394].w[19]"  1;
	setAttr ".wl[395].w[19]"  1;
	setAttr ".wl[396].w[19]"  1;
	setAttr ".wl[397].w[19]"  1;
	setAttr ".wl[398].w[19]"  1;
	setAttr ".wl[399].w[19]"  1;
	setAttr ".wl[400].w[19]"  1;
	setAttr ".wl[401].w[19]"  1;
	setAttr ".wl[402].w[19]"  1;
	setAttr ".wl[403].w[19]"  1;
	setAttr ".wl[404].w[19]"  1;
	setAttr ".wl[405].w[19]"  1;
	setAttr ".wl[406].w[19]"  1;
	setAttr ".wl[407].w[19]"  1;
	setAttr ".wl[408].w[19]"  1;
	setAttr ".wl[409].w[19]"  1;
	setAttr ".wl[410].w[19]"  1;
	setAttr ".wl[411].w[19]"  1;
	setAttr ".wl[412].w[19]"  1;
	setAttr ".wl[413].w[19]"  1;
	setAttr ".wl[414].w[19]"  1;
	setAttr ".wl[415].w[19]"  1;
	setAttr ".wl[416].w[19]"  1;
	setAttr ".wl[417].w[19]"  1;
	setAttr ".wl[418].w[19]"  1;
	setAttr ".wl[419].w[19]"  1;
	setAttr ".wl[420].w[19]"  1;
	setAttr ".wl[421].w[19]"  1;
	setAttr ".wl[422].w[19]"  1;
	setAttr ".wl[423].w[19]"  1;
	setAttr ".wl[424].w[19]"  1;
	setAttr ".wl[425].w[19]"  1;
	setAttr ".wl[426].w[19]"  1;
	setAttr ".wl[427].w[19]"  1;
	setAttr ".wl[428].w[19]"  1;
	setAttr ".wl[429].w[19]"  1;
	setAttr ".wl[430].w[19]"  1;
	setAttr ".wl[431].w[19]"  1;
	setAttr ".wl[432].w[19]"  1;
	setAttr ".wl[433].w[19]"  1;
	setAttr ".wl[434].w[19]"  1;
	setAttr ".wl[435].w[19]"  1;
	setAttr ".wl[436].w[19]"  1;
	setAttr ".wl[437].w[19]"  1;
	setAttr ".wl[438].w[20]"  1;
	setAttr ".wl[439].w[20]"  1;
	setAttr ".wl[440].w[20]"  1;
	setAttr ".wl[441].w[20]"  1;
	setAttr ".wl[442].w[20]"  1;
	setAttr ".wl[443].w[20]"  1;
	setAttr ".wl[444].w[20]"  1;
	setAttr ".wl[445].w[20]"  1;
	setAttr ".wl[446].w[20]"  1;
	setAttr ".wl[447].w[20]"  1;
	setAttr ".wl[448].w[20]"  1;
	setAttr ".wl[449].w[20]"  1;
	setAttr ".wl[450].w[20]"  1;
	setAttr ".wl[451].w[20]"  1;
	setAttr ".wl[452].w[20]"  1;
	setAttr ".wl[453].w[20]"  1;
	setAttr ".wl[454].w[20]"  1;
	setAttr ".wl[455].w[20]"  1;
	setAttr ".wl[456].w[21]"  1;
	setAttr ".wl[457].w[21]"  1;
	setAttr ".wl[458].w[21]"  1;
	setAttr ".wl[459].w[21]"  1;
	setAttr ".wl[460].w[21]"  1;
	setAttr ".wl[461].w[21]"  1;
	setAttr ".wl[462].w[21]"  1;
	setAttr ".wl[463].w[21]"  1;
	setAttr ".wl[464].w[21]"  1;
	setAttr ".wl[465].w[21]"  1;
	setAttr ".wl[466].w[21]"  1;
	setAttr ".wl[467].w[21]"  1;
	setAttr ".wl[468].w[21]"  1;
	setAttr ".wl[469].w[21]"  1;
	setAttr ".wl[470].w[21]"  1;
	setAttr ".wl[471].w[21]"  1;
	setAttr ".wl[472].w[21]"  1;
	setAttr ".wl[473].w[21]"  1;
	setAttr ".wl[474].w[21]"  1;
	setAttr ".wl[475].w[21]"  1;
	setAttr ".wl[476].w[21]"  1;
	setAttr ".wl[477].w[21]"  1;
	setAttr ".wl[478].w[21]"  1;
	setAttr ".wl[479].w[21]"  1;
	setAttr ".wl[480].w[21]"  1;
	setAttr ".wl[481].w[21]"  1;
	setAttr ".wl[482].w[21]"  1;
	setAttr ".wl[483].w[21]"  1;
	setAttr ".wl[484].w[21]"  1;
	setAttr ".wl[485].w[21]"  1;
	setAttr ".wl[486].w[21]"  1;
	setAttr ".wl[487].w[21]"  1;
	setAttr ".wl[488].w[21]"  1;
	setAttr ".wl[489].w[21]"  1;
	setAttr ".wl[490].w[21]"  1;
	setAttr ".wl[491].w[21]"  1;
	setAttr ".wl[492].w[21]"  1;
	setAttr ".wl[493].w[21]"  1;
	setAttr ".wl[494].w[21]"  1;
	setAttr ".wl[495].w[21]"  1;
	setAttr ".wl[496].w[21]"  1;
	setAttr ".wl[497].w[21]"  1;
	setAttr ".wl[498].w[21]"  1;
	setAttr ".wl[499].w[21]"  1;
	setAttr ".wl[500].w[21]"  1;
	setAttr ".wl[501].w[21]"  1;
	setAttr ".wl[502].w[21]"  1;
	setAttr ".wl[503].w[21]"  1;
	setAttr ".wl[504].w[21]"  1;
	setAttr ".wl[505].w[21]"  1;
	setAttr ".wl[506].w[21]"  1;
	setAttr ".wl[507].w[21]"  1;
	setAttr ".wl[508].w[21]"  1;
	setAttr ".wl[509].w[21]"  1;
	setAttr ".wl[510].w[21]"  1;
	setAttr ".wl[511].w[21]"  1;
	setAttr ".wl[512].w[21]"  1;
	setAttr ".wl[513].w[21]"  1;
	setAttr ".wl[514].w[25]"  1;
	setAttr ".wl[515].w[25]"  1;
	setAttr ".wl[516].w[25]"  1;
	setAttr ".wl[517].w[25]"  1;
	setAttr ".wl[518].w[25]"  1;
	setAttr ".wl[519].w[25]"  1;
	setAttr ".wl[520].w[25]"  1;
	setAttr ".wl[521].w[25]"  1;
	setAttr ".wl[522].w[25]"  1;
	setAttr ".wl[523].w[25]"  1;
	setAttr ".wl[524].w[25]"  1;
	setAttr ".wl[525].w[25]"  1;
	setAttr ".wl[526].w[25]"  1;
	setAttr ".wl[527].w[25]"  1;
	setAttr ".wl[528].w[25]"  1;
	setAttr ".wl[529].w[25]"  1;
	setAttr ".wl[530].w[25]"  1;
	setAttr ".wl[531].w[25]"  1;
	setAttr ".wl[532].w[25]"  1;
	setAttr ".wl[533].w[25]"  1;
	setAttr ".wl[534].w[25]"  1;
	setAttr ".wl[535].w[25]"  1;
	setAttr ".wl[536].w[25]"  1;
	setAttr ".wl[537].w[25]"  1;
	setAttr ".wl[538].w[25]"  1;
	setAttr ".wl[539].w[25]"  1;
	setAttr ".wl[540].w[25]"  1;
	setAttr ".wl[541].w[25]"  1;
	setAttr ".wl[542].w[25]"  1;
	setAttr ".wl[543].w[25]"  1;
	setAttr ".wl[544].w[25]"  1;
	setAttr ".wl[545].w[25]"  1;
	setAttr ".wl[546].w[25]"  1;
	setAttr ".wl[547].w[25]"  1;
	setAttr ".wl[548].w[25]"  1;
	setAttr ".wl[549].w[25]"  1;
	setAttr ".wl[550].w[25]"  1;
	setAttr ".wl[551].w[25]"  1;
	setAttr ".wl[552].w[25]"  1;
	setAttr ".wl[553].w[25]"  1;
	setAttr ".wl[554].w[25]"  1;
	setAttr ".wl[555].w[25]"  1;
	setAttr ".wl[556].w[25]"  1;
	setAttr ".wl[557].w[25]"  1;
	setAttr ".wl[558].w[25]"  1;
	setAttr ".wl[559].w[25]"  1;
	setAttr ".wl[560].w[25]"  1;
	setAttr ".wl[561].w[25]"  1;
	setAttr ".wl[562].w[25]"  1;
	setAttr ".wl[563].w[25]"  1;
	setAttr ".wl[564].w[25]"  1;
	setAttr ".wl[565].w[25]"  1;
	setAttr ".wl[566].w[25]"  1;
	setAttr ".wl[567].w[25]"  1;
	setAttr ".wl[568].w[25]"  1;
	setAttr ".wl[569].w[25]"  1;
	setAttr ".wl[570].w[25]"  1;
	setAttr ".wl[571].w[25]"  1;
	setAttr ".wl[572].w[26]"  1;
	setAttr ".wl[573].w[26]"  1;
	setAttr ".wl[574].w[26]"  1;
	setAttr ".wl[575].w[26]"  1;
	setAttr ".wl[576].w[26]"  1;
	setAttr ".wl[577].w[26]"  1;
	setAttr ".wl[578].w[26]"  1;
	setAttr ".wl[579].w[26]"  1;
	setAttr ".wl[580].w[26]"  1;
	setAttr ".wl[581].w[26]"  1;
	setAttr ".wl[582].w[26]"  1;
	setAttr ".wl[583].w[26]"  1;
	setAttr ".wl[584].w[26]"  1;
	setAttr ".wl[585].w[26]"  1;
	setAttr ".wl[586].w[26]"  1;
	setAttr ".wl[587].w[26]"  1;
	setAttr ".wl[588].w[26]"  1;
	setAttr ".wl[589].w[26]"  1;
	setAttr ".wl[590].w[26]"  1;
	setAttr ".wl[591].w[26]"  1;
	setAttr ".wl[592].w[26]"  1;
	setAttr ".wl[593].w[26]"  1;
	setAttr ".wl[594].w[26]"  1;
	setAttr ".wl[595].w[26]"  1;
	setAttr ".wl[596].w[26]"  1;
	setAttr ".wl[597].w[26]"  1;
	setAttr ".wl[598].w[26]"  1;
	setAttr ".wl[599].w[26]"  1;
	setAttr ".wl[600].w[26]"  1;
	setAttr ".wl[601].w[26]"  1;
	setAttr ".wl[602].w[26]"  1;
	setAttr ".wl[603].w[26]"  1;
	setAttr ".wl[604].w[26]"  1;
	setAttr ".wl[605].w[26]"  1;
	setAttr ".wl[606].w[26]"  1;
	setAttr ".wl[607].w[26]"  1;
	setAttr ".wl[608].w[26]"  1;
	setAttr ".wl[609].w[26]"  1;
	setAttr ".wl[610].w[26]"  1;
	setAttr ".wl[611].w[26]"  1;
	setAttr ".wl[612].w[26]"  1;
	setAttr ".wl[613].w[26]"  1;
	setAttr ".wl[614].w[26]"  1;
	setAttr ".wl[615].w[26]"  1;
	setAttr ".wl[616].w[26]"  1;
	setAttr ".wl[617].w[26]"  1;
	setAttr ".wl[618].w[26]"  1;
	setAttr ".wl[619].w[26]"  1;
	setAttr ".wl[620].w[26]"  1;
	setAttr ".wl[621].w[26]"  1;
	setAttr ".wl[622].w[26]"  1;
	setAttr ".wl[623].w[26]"  1;
	setAttr ".wl[624].w[26]"  1;
	setAttr ".wl[625].w[26]"  1;
	setAttr ".wl[626].w[26]"  1;
	setAttr ".wl[627].w[26]"  1;
	setAttr ".wl[628].w[26]"  1;
	setAttr ".wl[629].w[26]"  1;
	setAttr ".wl[630].w[22]"  1;
	setAttr ".wl[631].w[22]"  1;
	setAttr ".wl[632].w[22]"  1;
	setAttr ".wl[633].w[22]"  1;
	setAttr ".wl[634].w[22]"  1;
	setAttr ".wl[635].w[22]"  1;
	setAttr ".wl[636].w[22]"  1;
	setAttr ".wl[637].w[22]"  1;
	setAttr ".wl[638].w[22]"  1;
	setAttr ".wl[639].w[22]"  1;
	setAttr ".wl[640].w[22]"  1;
	setAttr ".wl[641].w[22]"  1;
	setAttr ".wl[642].w[22]"  1;
	setAttr ".wl[643].w[22]"  1;
	setAttr ".wl[644].w[22]"  1;
	setAttr ".wl[645].w[22]"  1;
	setAttr ".wl[646].w[22]"  1;
	setAttr ".wl[647].w[22]"  1;
	setAttr ".wl[648].w[22]"  1;
	setAttr ".wl[649].w[22]"  1;
	setAttr ".wl[650].w[22]"  1;
	setAttr ".wl[651].w[22]"  1;
	setAttr ".wl[652].w[22]"  1;
	setAttr ".wl[653].w[22]"  1;
	setAttr ".wl[654].w[22]"  1;
	setAttr ".wl[655].w[22]"  1;
	setAttr ".wl[656].w[22]"  1;
	setAttr ".wl[657].w[22]"  1;
	setAttr ".wl[658].w[22]"  1;
	setAttr ".wl[659].w[22]"  1;
	setAttr ".wl[660].w[22]"  1;
	setAttr ".wl[661].w[22]"  1;
	setAttr ".wl[662].w[22]"  1;
	setAttr ".wl[663].w[22]"  1;
	setAttr ".wl[664].w[22]"  1;
	setAttr ".wl[665].w[22]"  1;
	setAttr ".wl[666].w[22]"  1;
	setAttr ".wl[667].w[22]"  1;
	setAttr ".wl[668].w[22]"  1;
	setAttr ".wl[669].w[22]"  1;
	setAttr ".wl[670].w[22]"  1;
	setAttr ".wl[671].w[22]"  1;
	setAttr ".wl[672].w[22]"  1;
	setAttr ".wl[673].w[22]"  1;
	setAttr ".wl[674].w[22]"  1;
	setAttr ".wl[675].w[22]"  1;
	setAttr ".wl[676].w[22]"  1;
	setAttr ".wl[677].w[22]"  1;
	setAttr ".wl[678].w[22]"  1;
	setAttr ".wl[679].w[22]"  1;
	setAttr ".wl[680].w[22]"  1;
	setAttr ".wl[681].w[22]"  1;
	setAttr ".wl[682].w[22]"  1;
	setAttr ".wl[683].w[22]"  1;
	setAttr ".wl[684].w[22]"  1;
	setAttr ".wl[685].w[22]"  1;
	setAttr ".wl[686].w[22]"  1;
	setAttr ".wl[687].w[22]"  1;
	setAttr ".wl[688].w[23]"  1;
	setAttr ".wl[689].w[23]"  1;
	setAttr ".wl[690].w[23]"  1;
	setAttr ".wl[691].w[23]"  1;
	setAttr ".wl[692].w[23]"  1;
	setAttr ".wl[693].w[23]"  1;
	setAttr ".wl[694].w[23]"  1;
	setAttr ".wl[695].w[23]"  1;
	setAttr ".wl[696].w[23]"  1;
	setAttr ".wl[697].w[23]"  1;
	setAttr ".wl[698].w[23]"  1;
	setAttr ".wl[699].w[23]"  1;
	setAttr ".wl[700].w[23]"  1;
	setAttr ".wl[701].w[23]"  1;
	setAttr ".wl[702].w[23]"  1;
	setAttr ".wl[703].w[23]"  1;
	setAttr ".wl[704].w[23]"  1;
	setAttr ".wl[705].w[23]"  1;
	setAttr ".wl[706].w[23]"  1;
	setAttr ".wl[707].w[23]"  1;
	setAttr ".wl[708].w[23]"  1;
	setAttr ".wl[709].w[23]"  1;
	setAttr ".wl[710].w[23]"  1;
	setAttr ".wl[711].w[23]"  1;
	setAttr ".wl[712].w[23]"  1;
	setAttr ".wl[713].w[23]"  1;
	setAttr ".wl[714].w[23]"  1;
	setAttr ".wl[715].w[23]"  1;
	setAttr ".wl[716].w[23]"  1;
	setAttr ".wl[717].w[23]"  1;
	setAttr ".wl[718].w[23]"  1;
	setAttr ".wl[719].w[23]"  1;
	setAttr ".wl[720].w[23]"  1;
	setAttr ".wl[721].w[23]"  1;
	setAttr ".wl[722].w[23]"  1;
	setAttr ".wl[723].w[23]"  1;
	setAttr ".wl[724].w[23]"  1;
	setAttr ".wl[725].w[27]"  1;
	setAttr ".wl[726].w[27]"  1;
	setAttr ".wl[727].w[27]"  1;
	setAttr ".wl[728].w[27]"  1;
	setAttr ".wl[729].w[27]"  1;
	setAttr ".wl[730].w[27]"  1;
	setAttr ".wl[731].w[27]"  1;
	setAttr ".wl[732].w[27]"  1;
	setAttr ".wl[733].w[27]"  1;
	setAttr ".wl[734].w[27]"  1;
	setAttr ".wl[735].w[27]"  1;
	setAttr ".wl[736].w[27]"  1;
	setAttr ".wl[737].w[27]"  1;
	setAttr ".wl[738].w[27]"  1;
	setAttr ".wl[739].w[27]"  1;
	setAttr ".wl[740].w[27]"  1;
	setAttr ".wl[741].w[27]"  1;
	setAttr ".wl[742].w[27]"  1;
	setAttr ".wl[743].w[27]"  1;
	setAttr ".wl[744].w[27]"  1;
	setAttr ".wl[745].w[27]"  1;
	setAttr ".wl[746].w[27]"  1;
	setAttr ".wl[747].w[27]"  1;
	setAttr ".wl[748].w[27]"  1;
	setAttr ".wl[749].w[27]"  1;
	setAttr ".wl[750].w[27]"  1;
	setAttr ".wl[751].w[27]"  1;
	setAttr ".wl[752].w[27]"  1;
	setAttr ".wl[753].w[27]"  1;
	setAttr ".wl[754].w[27]"  1;
	setAttr ".wl[755].w[27]"  1;
	setAttr ".wl[756].w[27]"  1;
	setAttr ".wl[757].w[27]"  1;
	setAttr ".wl[758].w[27]"  1;
	setAttr ".wl[759].w[27]"  1;
	setAttr ".wl[760].w[27]"  1;
	setAttr ".wl[761].w[27]"  1;
	setAttr ".wl[762].w[28]"  1;
	setAttr ".wl[763].w[28]"  1;
	setAttr ".wl[764].w[28]"  1;
	setAttr ".wl[765].w[28]"  1;
	setAttr ".wl[766].w[28]"  1;
	setAttr ".wl[767].w[28]"  1;
	setAttr ".wl[768].w[28]"  1;
	setAttr ".wl[769].w[28]"  1;
	setAttr ".wl[770].w[28]"  1;
	setAttr ".wl[771].w[28]"  1;
	setAttr ".wl[772].w[28]"  1;
	setAttr ".wl[773].w[28]"  1;
	setAttr ".wl[774].w[28]"  1;
	setAttr ".wl[775].w[28]"  1;
	setAttr ".wl[776].w[28]"  1;
	setAttr ".wl[777].w[28]"  1;
	setAttr ".wl[778].w[28]"  1;
	setAttr ".wl[779].w[28]"  1;
	setAttr ".wl[780].w[24]"  1;
	setAttr ".wl[781].w[24]"  1;
	setAttr ".wl[782].w[24]"  1;
	setAttr ".wl[783].w[24]"  1;
	setAttr ".wl[784].w[24]"  1;
	setAttr ".wl[785].w[24]"  1;
	setAttr ".wl[786].w[24]"  1;
	setAttr ".wl[787].w[24]"  1;
	setAttr ".wl[788].w[24]"  1;
	setAttr ".wl[789].w[24]"  1;
	setAttr ".wl[790].w[24]"  1;
	setAttr ".wl[791].w[24]"  1;
	setAttr ".wl[792].w[24]"  1;
	setAttr ".wl[793].w[24]"  1;
	setAttr ".wl[794].w[24]"  1;
	setAttr ".wl[795].w[24]"  1;
	setAttr ".wl[796].w[24]"  1;
	setAttr ".wl[797].w[24]"  1;
	setAttr ".wl[798].w[4]"  1;
	setAttr ".wl[799].w[4]"  1;
	setAttr ".wl[800].w[4]"  1;
	setAttr ".wl[801].w[4]"  1;
	setAttr ".wl[802].w[4]"  1;
	setAttr ".wl[803].w[4]"  1;
	setAttr ".wl[804].w[4]"  1;
	setAttr ".wl[805].w[4]"  1;
	setAttr ".wl[806].w[4]"  1;
	setAttr ".wl[807].w[4]"  1;
	setAttr ".wl[808].w[4]"  1;
	setAttr ".wl[809].w[4]"  1;
	setAttr ".wl[810].w[4]"  1;
	setAttr ".wl[811].w[4]"  1;
	setAttr ".wl[812].w[4]"  1;
	setAttr ".wl[813].w[4]"  1;
	setAttr ".wl[814].w[4]"  1;
	setAttr ".wl[815].w[7]"  1;
	setAttr ".wl[816].w[7]"  1;
	setAttr ".wl[817].w[7]"  1;
	setAttr ".wl[818].w[7]"  1;
	setAttr ".wl[819].w[7]"  1;
	setAttr ".wl[820].w[7]"  1;
	setAttr ".wl[821].w[7]"  1;
	setAttr ".wl[822].w[7]"  1;
	setAttr ".wl[823].w[7]"  1;
	setAttr ".wl[824].w[7]"  1;
	setAttr ".wl[825].w[7]"  1;
	setAttr ".wl[826].w[7]"  1;
	setAttr ".wl[827].w[7]"  1;
	setAttr ".wl[828].w[7]"  1;
	setAttr ".wl[829].w[7]"  1;
	setAttr ".wl[830].w[7]"  1;
	setAttr ".wl[831].w[0]"  1;
	setAttr ".wl[832].w[0]"  1;
	setAttr ".wl[833].w[0]"  1;
	setAttr ".wl[834].w[0]"  1;
	setAttr ".wl[835].w[0]"  1;
	setAttr ".wl[836].w[0]"  1;
	setAttr ".wl[837].w[0]"  1;
	setAttr ".wl[838].w[0]"  1;
	setAttr ".wl[839].w[0]"  1;
	setAttr ".wl[840].w[0]"  1;
	setAttr ".wl[841].w[0]"  1;
	setAttr ".wl[842].w[0]"  1;
	setAttr ".wl[843].w[0]"  1;
	setAttr ".wl[844].w[0]"  1;
	setAttr ".wl[845].w[0]"  1;
	setAttr ".wl[846].w[0]"  1;
	setAttr -s 29 ".pm";
	setAttr ".pm[0]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -2.9973835635546049 0.1538951074828831 -0.0098527867424692845 1;
	setAttr ".pm[1]" -type "matrix" -0.019706000177291037 9.5458239375163605e-05 0.99980581336814445 0
		 0.99979408310123452 -0.00484312301086663 0.019706231381541692 0 0.004844063663274026 0.99998826745478675 2.7723049550454343e-16 0
		 -3.3293177085353207 0.18695299671209839 -0.051337567815871669 1;
	setAttr ".pm[2]" -type "matrix" 0.019073572066682067 -7.2306505664461402e-05 0.99981808026279761 0
		 0.99981089608638352 -0.0037902094043473339 -0.019073709120506068 0 0.003790899043705255 0.99999281451640443 -3.3294493464314229e-16 0
		 -3.663457523263161 0.18309113185779133 0.090798560645895643 1;
	setAttr ".pm[3]" -type "matrix" 0.0045534302937101203 2.7211509261482174e-05 0.99998963271230668 0
		 0.99997177681231586 0.0059758774179040127 -0.00455351160160084 0 -0.0059759393721865832 0.99998214391489004 2.7695266869784393e-16 0
		 -4.0298538288761749 0.14374289064834908 0.03229866932130715 1;
	setAttr ".pm[4]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -4.5552113042827722 -0.022423060769804545 0.012381017179404621 1;
	setAttr ".pm[5]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -5.3724565035910041 0.080220267909577966 0.012965880625751916 1;
	setAttr ".pm[6]" -type "matrix" -0.05521513487124894 -0.0028069850953665091 0.99847053522666562 0
		 0.99718279461996795 0.050694021637016085 0.055286438519548509 0 -0.050771675125603766 0.99871028682242979 3.6992978125205392e-16 0
		 -5.7283388884077118 -0.01062077196272254 -0.32743110696372923 1;
	setAttr ".pm[7]" -type "matrix" 6.2253610690367447e-16 -2.4179835235144976e-16 1 0
		 0.98816815417410797 -0.15337437555255509 -6.6101170972396747e-16 0 0.15337437555255529 0.98816815417410797 1.8706038495930319e-16 0
		 -5.9376868416356183 1.1882954394298904 0.011875891656621843 1;
	setAttr ".pm[8]" -type "matrix" -0.028712074798593921 -0.027691725940385423 -0.99920407578992754 0
		 -0.69420158838219814 0.71978062955850231 2.6714741530042849e-16 0 0.71920773872949484 0.69364905653133369 -0.039890035407322846 0
		 4.4923359833454191 -4.380636646265252 -0.00015823678845114386 1;
	setAttr ".pm[9]" -type "matrix" 0.98709997017857787 0.03248661331318646 0.15677457966421132 0
		 -0.032893359049031595 0.99945886705280229 -4.8057044454985468e-14 0 -0.15668974377387351 -0.0051568425386082717 0.98763441169853405 0
		 0.047648026319366765 -4.856766370901024 0.033815810673838535 1;
	setAttr ".pm[10]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -1.5571293648345721 -4.9125923348176954 0.26539967461008485 1;
	setAttr ".pm[11]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -2.8939467189323556 -4.9125923348176954 0.2653996746100849 1;
	setAttr ".pm[12]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -4.013188759530987 -4.9125923348176954 0.2653996746100849 1;
	setAttr ".pm[13]" -type "matrix" 0.58542760674385064 -0.55709044773242944 -0.58900318361401827 0
		 -0.19665617033094795 0.60723682864941475 -0.76979853507431828 0 0.78651183585050555 0.56649242446574954 0.24593792934393963 0
		 -1.7503296388299043 -0.610323167868698 6.2274912864065772 1;
	setAttr ".pm[14]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -4.8662176025447135 -4.8696683354309416 0.26539967461008301 1;
	setAttr ".pm[15]" -type "matrix" 0.98709997017857787 0.032486613313186488 0.15677457966421096 0
		 0.032893359049031366 -0.99945886705280229 4.934854608285022e-14 0 0.15668974377387324 0.0051568425386069559 -0.98763441169853405 0
		 -0.023205666575646201 4.8575752817057767 -0.029933788001381446 1;
	setAttr ".pm[16]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 1.5818899999999994 4.9125899999999856 -0.26540000000024511 1;
	setAttr ".pm[17]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 2.9187099999999995 4.9125899999999856 -0.265400000000245 1;
	setAttr ".pm[18]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 4.0379499999999995 4.9125899999999856 -0.26540000000024483 1;
	setAttr ".pm[19]" -type "matrix" 0.58542760674385086 -0.55709044773242911 -0.58900318361401827 0
		 0.19665617033094857 -0.6072368286494142 0.76979853507431828 0 -0.78651183585050533 -0.56649242446574999 -0.24593792934393935 0
		 1.7648259885496274 0.59652782359766265 -6.2420750851938376 1;
	setAttr ".pm[20]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 4.890979999999999 4.8696699999999877 -0.26540000000024261 1;
	setAttr ".pm[21]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -2.9937361812468684 0.15104246030913954 -0.66118982568145579 1;
	setAttr ".pm[22]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -1.6843657822696541 0.15104246030913956 -0.66118982568145568 1;
	setAttr ".pm[23]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -0.37798233459824432 0.15104246030913951 -0.66118982568145579 1;
	setAttr ".pm[24]" -type "matrix" 2.1805627086799682e-05 -0.015639840254740463 -0.99987768998078941 0
		 -0.0014009236593199154 0.99987670856672772 -0.015639855455459383 0 0.99999901846822559 0.0014010933491763434 -1.0728360111438488e-07 0
		 -0.28689507890216309 -0.18221950619526753 0.66273848356830523 1;
	setAttr ".pm[25]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 2.99356836107604 -0.1510435297343021 0.68494086496493234 1;
	setAttr ".pm[26]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 1.6841970332427765 -0.15104380581882598 0.68494058625328569 1;
	setAttr ".pm[27]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 0.37780981184780282 -0.15104291654317617 0.68494094541913531 1;
	setAttr ".pm[28]" -type "matrix" 2.180562708671201e-05 -0.015639840254768122 -0.99987768998078896 0
		 0.0014009236593199282 -0.99987670856672706 0.015639855455487069 0 -0.99999901846822559 -0.0014010933491764154 1.0728360115245048e-07 0
		 0.28689542224806119 0.18184776922980761 -0.68648777846022035 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 29 ".ma";
	setAttr -s 29 ".dpf[0:28]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
		4 4 4 4 4 4 4 4 4;
	setAttr -s 29 ".lw";
	setAttr -s 29 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 29 ".ifcl";
	setAttr -s 29 ".ifcl";
createNode groupId -n "groupId491";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts7";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 3 "f[0:47]" "f[136:287]" "f[376:933]";
createNode groupId -n "groupId492";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts8";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 2 "f[48:135]" "f[288:375]";
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
createNode groupId -n "groupId494";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts10";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode dagPose -n "bindPose1";
	setAttr -s 38 ".wm";
	setAttr -s 38 ".xm";
	setAttr ".xm[0]" -type "matrix" "xform" 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
		 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[1]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.011875891656619349
		 2.9965554205038156 -0.16912594013818316 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.49690720307978387 0.50307378338314013 0.50054198510985581 0.4994574267565603 1
		 1 1 yes;
	setAttr ".xm[2]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.3340069256708782 -2.7755575615628914e-17
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -7.4107894115387808e-07 0.0062281242360974686 0.0049629550809076042 0.99996828926962256 1
		 1 1 yes;
	setAttr ".xm[3]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.33471023855854654 2.7755575615628914e-17
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -8.3715850798415925e-05 -0.019389790499412113 -0.00052648821770801002 0.99981185821443508 1
		 1 1 yes;
	setAttr ".xm[4]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.36390642398316553 0
		 -1.3877787807814457e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -7.9324524497065505e-06 0.0072606011207018298 -0.0048832934025505636 0.99996171779422993 1
		 1 1 yes;
	setAttr ".xm[5]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.52323859272551587 0.0064139039865133418
		 -0.00081114315063660763 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -5.3528736187469309e-05 0.002276132360176486 -0.017536155793018638 0.99984363757347394 1
		 1 1 yes;
	setAttr ".xm[6]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.81724519930823103 -0.1026433286793825
		 -0.0005848634463472939 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[7]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.36505776775008142 0.035412056591436258
		 0.023575376585429859 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0012694669871585738 0.027624641902397665 -0.0048697866758104225 0.99960569865875859 1
		 1 1 yes;
	setAttr ".xm[8]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.31834145421877302 0.032888733331352504
		 -0.0048231799861180868 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.0014261458367700076 -0.027616996482591191 0.10216994529927828 0.99438250683068385 1
		 1 1 yes;
	setAttr ".xm[9]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.23029713238770455 0.036350474189643434
		 0.019394678134099601 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.46056438424772361 -0.88740209930869507 0.01890625136312488 -0.0063651994808291302 1
		 1 1 yes;
	setAttr ".xm[10]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.29849561138748992 0.12591418934491666
		 0.11782608336004058 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.44185013451752514 -0.47579530135840897 -0.53557117905348772 0.53995444437411821 1
		 1 1 yes;
	setAttr ".xm[11]" -type "matrix" "xform" 1 1 1 0 0 0 0 1.4646841193933675 0.10512208223391362
		 0.015816260830065321 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.0012933896591327851 -0.078620107440288578 0.016397975996705689 0.99676893622969531 1
		 1 1 yes;
	setAttr ".xm[12]" -type "matrix" "xform" 1 1 1 0 0 0 0 1.3368173540977832 -8.8817841970012523e-16
		 -5.5511151231257827e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[13]" -type "matrix" "xform" 1 1 1 0 0 0 0 1.1192420405986296 -8.8817841970012523e-16
		 5.5511151231257827e-17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[14]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.33950951871461488 -0.092281084035011673
		 0.45622179127680446 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.42785886947404494 -0.44041778249794106 0.11540525762577326 0.78080124947666274 1
		 1 1 yes;
	setAttr ".xm[15]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.8530288430137265 -0.042923999386753835
		 1.9206265654454469e-15 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[16]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.29850009016667478 0.12591435395382714
		 -0.11782598282059852 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.47579530135840975 -0.44185013451752464 0.5399544443741181 0.5355711790534875 1
		 1 1 yes;
	setAttr ".xm[17]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.4646831096683417 -0.1051152287328927
		 -0.015815754961366647 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0.001293389659132777 -0.078620107440288314 0.016397975996705644 0.99676893622969531 1
		 1 1 yes;
	setAttr ".xm[18]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.3368199999999999 0
		 -1.1102230246251563e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[19]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.11924 0 -1.1102230246251563e-16 0
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[20]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.33950999999999887
		 0.092279999999975715 -0.45622200000000473 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0.42785886947404467 -0.44041778249794078 0.11540525762577336 0.78080124947666274 1
		 1 1 yes;
	setAttr ".xm[21]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.85302999999999951
		 0.042919999999998737 -2.2759572004815709e-15 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		0 0 0 1 1 1 1 yes;
	setAttr ".xm[22]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.0036473823077365353
		 0.002852647173743561 0.65133703893898642 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1
		 1 1 yes;
	setAttr ".xm[23]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.3093703989772143 0
		 -1.1102230246251563e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[24]" -type "matrix" "xform" 1 1 1 0 0 0 0 -1.30638344767141 2.7755575615628914e-17
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[25]" -type "matrix" "xform" 1 1 1 0 0 0 0 -0.19207324368874903
		 0.43914115289776245 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.70480472804855743 -0.70938896260890016 0.0029715539475086519 0.0029605601166640527 1
		 1 1 yes;
	setAttr ".xm[26]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.0058028705160584337
		 0.0029004680077452383 -0.65132104774429578 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
		-0.0072510207702867037 -3.685789620059536e-05 0.99997371032406868 -5.4024350627107467e-11 1
		 1 1 yes;
	setAttr ".xm[27]" -type "matrix" "xform" 1 1 1 0 0 0 0 1.3093713278332637 2.7608452390914806e-07
		 2.7871164642867541e-07 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[28]" -type "matrix" "xform" 1 1 1 0 0 0 0 1.3063872213949737 -8.8927564981244878e-07
		 -3.5916584928408213e-07 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[29]" -type "matrix" "xform" 1 1 1 0 0 0 0 0.19207320383913545 -0.43914054740225961
		 -4.6229017935939254e-07 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.70480472802649952 -0.7093889626310399 0.0029715486621564886 0.0029605653678758987 1
		 1 1 yes;
	setAttr ".xm[30]" -type "matrix" "xform" 1 1 1.0000000000000002 -1.1275702593861868e-17
		 1.4732659536784139e-17 1.6646707101169486e-16 0 -1.1192399999999991 -2.6645352591003757e-15
		 -0.055802821881460435 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[31]" -type "matrix" "xform" 1 0.99999999999999989 1.0000000000000002 2.6020852139530946e-18
		 -1.7097434579552404e-18 -6.5164350826979881e-16 0 -1.3368199999999999 3.5527136788005009e-15
		 0.055802821881460352 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[32]" -type "matrix" "xform" 1 1 1 -1.2143064331862892e-17 -3.6977854932234928e-32
		 -7.90093372758991e-19 0 1.3368173540977828 -4.4408920985006262e-15 -0.055802821881460629 0
		 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[33]" -type "matrix" "xform" 0.99999999999999989 1 1 -5.2041704279556648e-18
		 -1.3877787807814494e-17 -7.9009337275831297e-19 0 1.1192420405986288 8.8817841970012523e-16
		 0.055802821881460518 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[34]" -type "matrix" "xform" 1 0.99999999999999989 0.99999999999999989 -2.9586783401411483e-19
		 -2.7788540959998197e-17 -4.3368086899420177e-18 0 -1.3095297472159066 0.03135477367706449
		 -5.5511151231257827e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[35]" -type "matrix" "xform" 1 0.99999999999999989 1 -2.8909997103614864e-19
		 -2.865259672338798e-17 -3.4694469519536142e-18 0 -1.3062240994327188 -0.031354773677064518
		 1.1102230246251563e-16 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[36]" -type "matrix" "xform" 1.0000000000000002 0.99999999999999989 1 1.2297032422335822e-19
		 2.7472367675927413e-17 1.4745149545802857e-17 0 1.3095306760719538 -0.031354497592540567
		 2.7824442383472814e-07 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr ".xm[37]" -type "matrix" "xform" 1.0000000000000004 1 0.99999999999999989 3.4547539915947757e-19
		 -7.6325786786647265e-17 -3.7585912806428853e-17 0 1.3062278731562826 0.03135388440141465
		 -3.5869862635706795e-07 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 1 yes;
	setAttr -s 38 ".m";
	setAttr -s 38 ".p";
	setAttr -s 38 ".g[0:37]" yes no no no no no no no no no no no no no 
		no no no no no no no no no no no no no no no no yes yes yes yes yes yes yes yes;
	setAttr ".bp" yes;
createNode skinCluster -n "skinCluster4";
	setAttr ".en" 0;
	setAttr -s 393 ".wl";
	setAttr ".wl[0].w[31]"  1;
	setAttr ".wl[1].w[31]"  1;
	setAttr ".wl[2].w[10]"  1;
	setAttr ".wl[3].w[10]"  1;
	setAttr ".wl[4].w[10]"  1;
	setAttr ".wl[5].w[10]"  1;
	setAttr ".wl[6].w[31]"  1;
	setAttr ".wl[7].w[31]"  1;
	setAttr ".wl[8].w[32]"  1;
	setAttr ".wl[9].w[32]"  1;
	setAttr ".wl[10].w[11]"  1;
	setAttr ".wl[11].w[11]"  1;
	setAttr ".wl[12].w[11]"  1;
	setAttr ".wl[13].w[11]"  1;
	setAttr ".wl[14].w[32]"  1;
	setAttr ".wl[15].w[32]"  1;
	setAttr ".wl[16].w[12]"  1;
	setAttr ".wl[17].w[12]"  1;
	setAttr ".wl[18].w[12]"  1;
	setAttr ".wl[19].w[12]"  1;
	setAttr ".wl[20].w[12]"  1;
	setAttr ".wl[21].w[12]"  1;
	setAttr ".wl[22].w[12]"  1;
	setAttr ".wl[23].w[12]"  1;
	setAttr ".wl[24].w[12]"  1;
	setAttr ".wl[25].w[12]"  1;
	setAttr ".wl[26].w[12]"  1;
	setAttr ".wl[27].w[12]"  1;
	setAttr ".wl[28].w[14]"  1;
	setAttr ".wl[29].w[14]"  1;
	setAttr ".wl[30].w[14]"  1;
	setAttr ".wl[31].w[14]"  1;
	setAttr ".wl[32].w[14]"  1;
	setAttr ".wl[33].w[14]"  1;
	setAttr ".wl[34].w[14]"  1;
	setAttr ".wl[35].w[14]"  1;
	setAttr ".wl[36].w[14]"  1;
	setAttr ".wl[37].w[14]"  1;
	setAttr ".wl[38].w[14]"  1;
	setAttr ".wl[39].w[14]"  1;
	setAttr ".wl[40].w[13]"  1;
	setAttr ".wl[41].w[13]"  1;
	setAttr ".wl[42].w[13]"  1;
	setAttr ".wl[43].w[13]"  1;
	setAttr ".wl[44].w[13]"  1;
	setAttr ".wl[45].w[13]"  1;
	setAttr ".wl[46].w[13]"  1;
	setAttr ".wl[47].w[13]"  1;
	setAttr ".wl[48].w[30]"  1;
	setAttr ".wl[49].w[30]"  1;
	setAttr ".wl[50].w[16]"  1;
	setAttr ".wl[51].w[16]"  1;
	setAttr ".wl[52].w[16]"  1;
	setAttr ".wl[53].w[16]"  1;
	setAttr ".wl[54].w[30]"  1;
	setAttr ".wl[55].w[30]"  1;
	setAttr ".wl[56].w[29]"  1;
	setAttr ".wl[57].w[29]"  1;
	setAttr ".wl[58].w[17]"  1;
	setAttr ".wl[59].w[17]"  1;
	setAttr ".wl[60].w[17]"  1;
	setAttr ".wl[61].w[17]"  1;
	setAttr ".wl[62].w[29]"  1;
	setAttr ".wl[63].w[29]"  1;
	setAttr ".wl[64].w[18]"  1;
	setAttr ".wl[65].w[18]"  1;
	setAttr ".wl[66].w[18]"  1;
	setAttr ".wl[67].w[18]"  1;
	setAttr ".wl[68].w[18]"  1;
	setAttr ".wl[69].w[18]"  1;
	setAttr ".wl[70].w[18]"  1;
	setAttr ".wl[71].w[18]"  1;
	setAttr ".wl[72].w[18]"  1;
	setAttr ".wl[73].w[18]"  1;
	setAttr ".wl[74].w[18]"  1;
	setAttr ".wl[75].w[18]"  1;
	setAttr ".wl[76].w[20]"  1;
	setAttr ".wl[77].w[20]"  1;
	setAttr ".wl[78].w[20]"  1;
	setAttr ".wl[79].w[20]"  1;
	setAttr ".wl[80].w[20]"  1;
	setAttr ".wl[81].w[20]"  1;
	setAttr ".wl[82].w[20]"  1;
	setAttr ".wl[83].w[20]"  1;
	setAttr ".wl[84].w[20]"  1;
	setAttr ".wl[85].w[20]"  1;
	setAttr ".wl[86].w[20]"  1;
	setAttr ".wl[87].w[20]"  1;
	setAttr ".wl[88].w[19]"  1;
	setAttr ".wl[89].w[19]"  1;
	setAttr ".wl[90].w[19]"  1;
	setAttr ".wl[91].w[19]"  1;
	setAttr ".wl[92].w[19]"  1;
	setAttr ".wl[93].w[19]"  1;
	setAttr ".wl[94].w[19]"  1;
	setAttr ".wl[95].w[19]"  1;
	setAttr ".wl[96].w[0]"  1;
	setAttr ".wl[97].w[0]"  1;
	setAttr ".wl[98].w[0]"  1;
	setAttr ".wl[99].w[0]"  1;
	setAttr ".wl[100].w[0]"  1;
	setAttr ".wl[101].w[0]"  1;
	setAttr ".wl[102].w[0]"  1;
	setAttr ".wl[103].w[0]"  1;
	setAttr ".wl[104].w[0]"  1;
	setAttr ".wl[105].w[0]"  1;
	setAttr ".wl[106].w[0]"  1;
	setAttr ".wl[107].w[0]"  1;
	setAttr ".wl[108].w[0]"  1;
	setAttr ".wl[109].w[0]"  1;
	setAttr ".wl[110].w[0]"  1;
	setAttr ".wl[111].w[0]"  1;
	setAttr ".wl[112].w[0]"  1;
	setAttr ".wl[113].w[0]"  1;
	setAttr ".wl[114].w[0]"  1;
	setAttr ".wl[115].w[0]"  1;
	setAttr ".wl[116].w[0]"  1;
	setAttr ".wl[117].w[0]"  1;
	setAttr ".wl[118].w[0]"  1;
	setAttr ".wl[119].w[0]"  1;
	setAttr ".wl[120].w[0]"  1;
	setAttr ".wl[121].w[0]"  1;
	setAttr ".wl[122].w[0]"  1;
	setAttr ".wl[123].w[0]"  1;
	setAttr ".wl[124].w[0]"  1;
	setAttr ".wl[125].w[0]"  1;
	setAttr ".wl[126].w[0]"  1;
	setAttr ".wl[127].w[0]"  1;
	setAttr ".wl[128].w[0]"  1;
	setAttr ".wl[129].w[0]"  1;
	setAttr ".wl[130].w[0]"  1;
	setAttr ".wl[131].w[0]"  1;
	setAttr ".wl[132].w[28]"  1;
	setAttr ".wl[133].w[28]"  1;
	setAttr ".wl[134].w[28]"  1;
	setAttr ".wl[135].w[28]"  1;
	setAttr ".wl[136].w[28]"  1;
	setAttr ".wl[137].w[28]"  1;
	setAttr ".wl[138].w[28]"  1;
	setAttr ".wl[139].w[28]"  1;
	setAttr ".wl[140].w[28]"  1;
	setAttr ".wl[141].w[28]"  1;
	setAttr ".wl[142].w[28]"  1;
	setAttr ".wl[143].w[28]"  1;
	setAttr ".wl[144].w[27]"  1;
	setAttr ".wl[145].w[27]"  1;
	setAttr ".wl[146].w[27]"  1;
	setAttr ".wl[147].w[27]"  1;
	setAttr ".wl[148].w[27]"  1;
	setAttr ".wl[149].w[27]"  1;
	setAttr ".wl[150].w[27]"  1;
	setAttr ".wl[151].w[27]"  1;
	setAttr ".wl[152].w[36]"  1;
	setAttr ".wl[153].w[36]"  1;
	setAttr ".wl[154].w[26]"  1;
	setAttr ".wl[155].w[26]"  1;
	setAttr ".wl[156].w[26]"  1;
	setAttr ".wl[157].w[26]"  1;
	setAttr ".wl[158].w[36]"  1;
	setAttr ".wl[159].w[36]"  1;
	setAttr ".wl[160].w[35]"  1;
	setAttr ".wl[161].w[35]"  1;
	setAttr ".wl[162].w[25]"  1;
	setAttr ".wl[163].w[25]"  1;
	setAttr ".wl[164].w[25]"  1;
	setAttr ".wl[165].w[25]"  1;
	setAttr ".wl[166].w[35]"  1;
	setAttr ".wl[167].w[35]"  1;
	setAttr ".wl[168].w[24]"  1;
	setAttr ".wl[169].w[24]"  1;
	setAttr ".wl[170].w[24]"  1;
	setAttr ".wl[171].w[24]"  1;
	setAttr ".wl[172].w[24]"  1;
	setAttr ".wl[173].w[24]"  1;
	setAttr ".wl[174].w[24]"  1;
	setAttr ".wl[175].w[24]"  1;
	setAttr ".wl[176].w[24]"  1;
	setAttr ".wl[177].w[24]"  1;
	setAttr ".wl[178].w[24]"  1;
	setAttr ".wl[179].w[24]"  1;
	setAttr ".wl[180].w[23]"  1;
	setAttr ".wl[181].w[23]"  1;
	setAttr ".wl[182].w[23]"  1;
	setAttr ".wl[183].w[23]"  1;
	setAttr ".wl[184].w[23]"  1;
	setAttr ".wl[185].w[23]"  1;
	setAttr ".wl[186].w[23]"  1;
	setAttr ".wl[187].w[23]"  1;
	setAttr ".wl[188].w[34]"  1;
	setAttr ".wl[189].w[34]"  1;
	setAttr ".wl[190].w[22]"  1;
	setAttr ".wl[191].w[22]"  1;
	setAttr ".wl[192].w[22]"  1;
	setAttr ".wl[193].w[22]"  1;
	setAttr ".wl[194].w[34]"  1;
	setAttr ".wl[195].w[34]"  1;
	setAttr ".wl[196].w[33]"  1;
	setAttr ".wl[197].w[33]"  1;
	setAttr ".wl[198].w[21]"  1;
	setAttr ".wl[199].w[21]"  1;
	setAttr ".wl[200].w[21]"  1;
	setAttr ".wl[201].w[21]"  1;
	setAttr ".wl[202].w[33]"  1;
	setAttr ".wl[203].w[33]"  1;
	setAttr ".wl[204].w[0]"  1;
	setAttr ".wl[205].w[0]"  1;
	setAttr ".wl[206].w[0]"  1;
	setAttr ".wl[207].w[0]"  1;
	setAttr ".wl[208].w[15]"  1;
	setAttr ".wl[209].w[9]"  1;
	setAttr ".wl[210].w[15]"  1;
	setAttr ".wl[211].w[9]"  1;
	setAttr ".wl[212].w[15]"  1;
	setAttr ".wl[213].w[9]"  1;
	setAttr ".wl[214].w[15]"  1;
	setAttr ".wl[215].w[9]"  1;
	setAttr ".wl[216].w[0]"  1;
	setAttr ".wl[217].w[0]"  1;
	setAttr ".wl[218].w[0]"  1;
	setAttr ".wl[219].w[0]"  1;
	setAttr -s 5 ".wl[220].w";
	setAttr ".wl[220].w[4]" 0.37404724204354078;
	setAttr ".wl[220].w[5]" 0.41832308983273064;
	setAttr ".wl[220].w[6]" 0.20641032834573872;
	setAttr ".wl[220].w[15]" 0.00073620200808482571;
	setAttr ".wl[220].w[16]" 0.00048313776990502674;
	setAttr -s 3 ".wl[221].w[4:6]"  0.37449917625158013 0.41883015507120258 
		0.20667066867721728;
	setAttr -s 3 ".wl[222].w[4:6]"  0.1734007841644426 0.41958496080024671 
		0.40701425503531063;
	setAttr -s 5 ".wl[223].w";
	setAttr ".wl[223].w[4]" 0.17305136881657046;
	setAttr ".wl[223].w[5]" 0.41860469998646049;
	setAttr ".wl[223].w[6]" 0.40581015912615326;
	setAttr ".wl[223].w[15]" 0.0013712446376730649;
	setAttr ".wl[223].w[16]" 0.0011625274331427081;
	setAttr -s 4 ".wl[224].w[5:8]"  0.00018620398192759527 0.2727172705432076 
		0.35112181097273848 0.37597471450212638;
	setAttr -s 3 ".wl[225].w[6:8]"  0.27259238754537418 0.35114931373895802 
		0.37625829871566785;
	setAttr -s 3 ".wl[226].w[6:8]"  0.37543102199903811 0.37616988456321032 
		0.24839909343775171;
	setAttr -s 4 ".wl[227].w[5:8]"  0.00017252040833351848 0.37543891927781536 
		0.37611817317154528 0.2482703871423059;
	setAttr ".wl[228].w[4]"  1;
	setAttr -s 3 ".wl[229].w";
	setAttr ".wl[229].w[4]" 0.33445162484786556;
	setAttr ".wl[229].w[9]" 0.33445162484786556;
	setAttr ".wl[229].w[15]" 0.33109675030426899;
	setAttr ".wl[230].w[0]"  1;
	setAttr ".wl[231].w[0]"  1;
	setAttr ".wl[232].w[0]"  1;
	setAttr -s 2 ".wl[233].w[0:1]"  0.52162370085716248 0.47837629914283752;
	setAttr -s 3 ".wl[234].w[2:4]"  0.25203071975565766 0.36386453450170336 
		0.38410474574263903;
	setAttr -s 5 ".wl[235].w";
	setAttr ".wl[235].w[4]" 0.37293195192095552;
	setAttr ".wl[235].w[5]" 0.37347133080585504;
	setAttr ".wl[235].w[6]" 0.25320322400649209;
	setAttr ".wl[235].w[15]" 0.000212456739980847;
	setAttr ".wl[235].w[16]" 0.00018103652671637338;
	setAttr -s 3 ".wl[236].w";
	setAttr ".wl[236].w[4]" 0.49285985677089839;
	setAttr ".wl[236].w[5]" 0.40212213057861845;
	setAttr ".wl[236].w[9]" 0.1050180126504832;
	setAttr -s 4 ".wl[237].w[5:8]"  0.00013219590570673825 0.0018664554452632941 
		0.0022870687804259536 0.99571427986860395;
	setAttr -s 3 ".wl[238].w[6:8]"  0.41575566702295386 0.4157605055701955 
		0.16848382740685061;
	setAttr -s 3 ".wl[239].w[4:6]"  0.12843888898001649 0.44782066514313784 
		0.42374044587684578;
	setAttr -s 2 ".wl[240].w[2:3]"  0.25 0.75;
	setAttr -s 2 ".wl[241].w[2:3]"  0.25 0.75;
	setAttr -s 2 ".wl[242].w[2:3]"  0.25 0.75;
	setAttr -s 2 ".wl[243].w[2:3]"  0.25 0.75;
	setAttr -s 2 ".wl[244].w[2:3]"  0.25 0.75;
	setAttr -s 2 ".wl[245].w[2:3]"  0.25 0.75;
	setAttr -s 3 ".wl[246].w[4:6]"  0.11356978693955087 0.44527656208964606 
		0.441153650970803;
	setAttr -s 4 ".wl[247].w";
	setAttr ".wl[247].w[4]" 0.00091541037995652649;
	setAttr ".wl[247].w[5]" 0.36484623401271121;
	setAttr ".wl[247].w[6]" 0.35380010548204294;
	setAttr ".wl[247].w[8]" 0.28043825012528933;
	setAttr -s 4 ".wl[248].w[4:7]"  0.113606307514105 0.44524349794973456 
		0.44097963119873695 0.00017056333742341144;
	setAttr -s 3 ".wl[249].w[5:7]"  0.38435255849515954 0.39991283304682373 
		0.2157346084580167;
	setAttr -s 3 ".wl[250].w[5:7]"  0.38131655943239262 0.42643877936654834 
		0.1922446612010591;
	setAttr -s 3 ".wl[251].w[5:7]"  0.38444572574146618 0.39992958404850631 
		0.2156246902100275;
	setAttr -s 3 ".wl[252].w[4:6]"  0.23649373646835556 0.47534264049710423 
		0.28816362303454013;
	setAttr -s 3 ".wl[253].w[4:6]"  0.24035912358881589 0.43846310802499222 
		0.32117776838619194;
	setAttr -s 3 ".wl[254].w[5:7]"  0.4232074852984859 0.42322643171529217 
		0.15356608298622196;
	setAttr -s 3 ".wl[255].w[5:7]"  0.4276370766283929 0.43249096665491094 
		0.13987195671669619;
	setAttr -s 3 ".wl[256].w[5:7]"  0.42325497321551542 0.42325497321551542 
		0.15349005356896916;
	setAttr -s 3 ".wl[257].w[4:6]"  0.2395116470673366 0.43862588547210429 
		0.32186246746055913;
	setAttr -s 5 ".wl[258].w[4:8]"  4.6579463478490127e-05 0.0020816347540594041 
		0.076299969693725045 0.049546391287829838 0.87202542480090717;
	setAttr -s 3 ".wl[259].w[5:7]"  0.29949730096241028 0.42369208971835104 
		0.27681060931923857;
	setAttr -s 3 ".wl[260].w[5:7]"  0.33295895030710221 0.3906725211200599 
		0.27636852857283795;
	setAttr -s 4 ".wl[261].w[5:8]"  0.30214965548247391 0.42534707203632416 
		0.27249006576118101 1.3206720020878288e-05;
	setAttr -s 3 ".wl[262].w[5:7]"  0.33295895030710221 0.3906725211200599 
		0.27636852857283795;
	setAttr -s 3 ".wl[263].w[5:7]"  0.29946039271910196 0.42372850570976672 
		0.27681110157113131;
	setAttr ".wl[264].w[0]"  1;
	setAttr ".wl[265].w[0]"  1;
	setAttr ".wl[266].w[0]"  1;
	setAttr ".wl[267].w[0]"  1;
	setAttr ".wl[268].w[0]"  1;
	setAttr ".wl[269].w[0]"  1;
	setAttr -s 3 ".wl[270].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[271].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[272].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[273].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[274].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[275].w[1:3]"  0.1875 0.5625 0.25;
	setAttr -s 3 ".wl[276].w[6:8]"  0.093743445555864183 0.45312418174286206 
		0.45313237270127377;
	setAttr -s 3 ".wl[277].w[6:8]"  0.070688558350049363 0.4646557208249753 
		0.4646557208249753;
	setAttr -s 3 ".wl[278].w[6:8]"  0.21397910706457868 0.39301044646771066 
		0.39301044646771066;
	setAttr -s 3 ".wl[279].w[6:8]"  0.18247943157460519 0.40914233654170934 
		0.40837823188368549;
	setAttr -s 3 ".wl[280].w[6:8]"  0.093599451233376166 0.4532002743833119 
		0.4532002743833119;
	setAttr -s 3 ".wl[281].w[6:8]"  0.17716942906424679 0.41141528546787665 
		0.41141528546787665;
	setAttr ".wl[282].w[1]"  1;
	setAttr ".wl[283].w[1]"  1;
	setAttr ".wl[284].w[1]"  1;
	setAttr ".wl[285].w[1]"  1;
	setAttr ".wl[286].w[1]"  1;
	setAttr ".wl[287].w[1]"  1;
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
	setAttr ".wl[315].w[8]"  1;
	setAttr ".wl[316].w[8]"  1;
	setAttr ".wl[317].w[8]"  1;
	setAttr ".wl[318].w[8]"  1;
	setAttr ".wl[319].w[8]"  1;
	setAttr ".wl[320].w[8]"  1;
	setAttr ".wl[321].w[8]"  1;
	setAttr ".wl[322].w[7]"  1;
	setAttr ".wl[323].w[7]"  1;
	setAttr ".wl[324].w[7]"  1;
	setAttr ".wl[325].w[7]"  1;
	setAttr ".wl[326].w[7]"  1;
	setAttr ".wl[327].w[7]"  1;
	setAttr ".wl[328].w[7]"  1;
	setAttr ".wl[329].w[7]"  1;
	setAttr ".wl[330].w[7]"  1;
	setAttr ".wl[331].w[7]"  1;
	setAttr ".wl[332].w[7]"  0.99999999999999989;
	setAttr ".wl[333].w[7]"  1;
	setAttr ".wl[334].w[7]"  1;
	setAttr ".wl[335].w[7]"  1;
	setAttr ".wl[336].w[7]"  1;
	setAttr ".wl[337].w[7]"  1;
	setAttr ".wl[338].w[7]"  1;
	setAttr ".wl[339].w[7]"  1;
	setAttr ".wl[340].w[7]"  1;
	setAttr ".wl[341].w[7]"  1;
	setAttr ".wl[342].w[7]"  1;
	setAttr ".wl[343].w[7]"  1;
	setAttr ".wl[344].w[7]"  1;
	setAttr ".wl[345].w[7]"  1;
	setAttr ".wl[346].w[7]"  1;
	setAttr ".wl[347].w[7]"  1;
	setAttr ".wl[348].w[7]"  1;
	setAttr ".wl[349].w[7]"  1;
	setAttr ".wl[350].w[7]"  1;
	setAttr ".wl[351].w[7]"  1;
	setAttr ".wl[352].w[7]"  1;
	setAttr ".wl[353].w[7]"  1;
	setAttr ".wl[354].w[7]"  1;
	setAttr ".wl[355].w[7]"  1;
	setAttr ".wl[356].w[7]"  1;
	setAttr ".wl[357].w[7]"  1;
	setAttr ".wl[358].w[7]"  1;
	setAttr ".wl[359].w[7]"  1;
	setAttr ".wl[360].w[7]"  1;
	setAttr ".wl[361].w[7]"  1;
	setAttr ".wl[362].w[7]"  1;
	setAttr ".wl[363].w[7]"  1;
	setAttr ".wl[364].w[7]"  1;
	setAttr ".wl[365].w[7]"  1;
	setAttr ".wl[366].w[7]"  1;
	setAttr ".wl[367].w[7]"  1;
	setAttr ".wl[368].w[7]"  1;
	setAttr ".wl[369].w[7]"  1;
	setAttr ".wl[370].w[7]"  1;
	setAttr ".wl[371].w[7]"  1;
	setAttr ".wl[372].w[7]"  1;
	setAttr ".wl[373].w[7]"  1;
	setAttr ".wl[374].w[7]"  1;
	setAttr ".wl[375].w[7]"  1;
	setAttr ".wl[376].w[7]"  1;
	setAttr ".wl[377].w[7]"  1;
	setAttr ".wl[378].w[7]"  1;
	setAttr ".wl[379].w[7]"  1;
	setAttr ".wl[380].w[7]"  1;
	setAttr ".wl[381].w[7]"  1;
	setAttr ".wl[382].w[7]"  1;
	setAttr ".wl[383].w[7]"  1;
	setAttr ".wl[384].w[7]"  1;
	setAttr ".wl[385].w[7]"  1;
	setAttr ".wl[386].w[7]"  1;
	setAttr ".wl[387].w[7]"  1;
	setAttr ".wl[388].w[7]"  1;
	setAttr ".wl[389].w[7]"  1;
	setAttr ".wl[390].w[7]"  1;
	setAttr ".wl[391].w[7]"  1;
	setAttr ".wl[392].w[7]"  1;
	setAttr -s 37 ".pm";
	setAttr ".pm[0]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -2.9973835635546049 0.1538951074828831 -0.0098527867424692845 1;
	setAttr ".pm[1]" -type "matrix" -0.019706000177291037 9.5458239375163605e-05 0.99980581336814445 0
		 0.99979408310123452 -0.00484312301086663 0.019706231381541692 0 0.004844063663274026 0.99998826745478675 2.7723049550454343e-16 0
		 -3.3293177085353207 0.18695299671209839 -0.051337567815871669 1;
	setAttr ".pm[2]" -type "matrix" 0.019073572066682067 -7.2306505664461402e-05 0.99981808026279761 0
		 0.99981089608638352 -0.0037902094043473339 -0.019073709120506068 0 0.003790899043705255 0.99999281451640443 -3.3294493464314229e-16 0
		 -3.663457523263161 0.18309113185779133 0.090798560645895643 1;
	setAttr ".pm[3]" -type "matrix" 0.0045534302937101203 2.7211509261482174e-05 0.99998963271230668 0
		 0.99997177681231586 0.0059758774179040127 -0.00455351160160084 0 -0.0059759393721865832 0.99998214391489004 2.7695266869784393e-16 0
		 -4.0298538288761749 0.14374289064834908 0.03229866932130715 1;
	setAttr ".pm[4]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -4.5552113042827722 -0.022423060769804545 0.012381017179404621 1;
	setAttr ".pm[5]" -type "matrix" 6.4143521212699688e-16 -1.035932218114918e-16 1 0
		 0.9991575598669582 0.041038647159784579 -6.5172730945521338e-16 0 -0.041038647159784454 0.99915755986695842 1.7420873771577432e-16 0
		 -5.3724565035910041 0.080220267909577966 0.012965880625751916 1;
	setAttr ".pm[6]" -type "matrix" -0.05521513487124894 -0.0028069850953665091 0.99847053522666562 0
		 0.99718279461996795 0.050694021637016085 0.055286438519548509 0 -0.050771675125603766 0.99871028682242979 3.6992978125205392e-16 0
		 -5.7283388884077118 -0.01062077196272254 -0.32743110696372923 1;
	setAttr ".pm[7]" -type "matrix" 6.2253610690367447e-16 -2.4179835235144976e-16 1 0
		 0.98816815417410797 -0.15337437555255509 -6.6101170972396747e-16 0 0.15337437555255529 0.98816815417410797 1.8706038495930319e-16 0
		 -5.9376868416356183 1.1882954394298904 0.011875891656621843 1;
	setAttr ".pm[8]" -type "matrix" -0.028712074798593921 -0.027691725940385423 -0.99920407578992754 0
		 -0.69420158838219814 0.71978062955850231 2.6714741530042849e-16 0 0.71920773872949484 0.69364905653133369 -0.039890035407322846 0
		 4.4923359833454191 -4.380636646265252 -0.00015823678845114386 1;
	setAttr ".pm[9]" -type "matrix" 0.98709997017857787 0.03248661331318646 0.15677457966421132 0
		 -0.032893359049031595 0.99945886705280229 -4.8057044454985468e-14 0 -0.15668974377387351 -0.0051568425386082717 0.98763441169853405 0
		 0.047648026319366765 -4.856766370901024 0.033815810673838535 1;
	setAttr ".pm[10]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -1.5571293648345721 -4.9125923348176954 0.26539967461008485 1;
	setAttr ".pm[11]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -2.8939467189323556 -4.9125923348176954 0.2653996746100849 1;
	setAttr ".pm[12]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -4.013188759530987 -4.9125923348176954 0.2653996746100849 1;
	setAttr ".pm[13]" -type "matrix" 0.58542760674385064 -0.55709044773242944 -0.58900318361401827 0
		 -0.19665617033094795 0.60723682864941475 -0.76979853507431828 0 0.78651183585050555 0.56649242446574954 0.24593792934393963 0
		 -1.7503296388299043 -0.610323167868698 6.2274912864065772 1;
	setAttr ".pm[14]" -type "matrix" 1 7.900933727617027e-19 2.7755575615628877e-17 0
		 -5.5511151231256471e-17 0.99999999999999989 -4.8650319883769555e-14 0 -2.7755575615631625e-17 4.8853465599305281e-14 1 0
		 -4.8662176025447135 -4.8696683354309416 0.26539967461008301 1;
	setAttr ".pm[15]" -type "matrix" 0.98709997017857787 0.032486613313186488 0.15677457966421096 0
		 0.032893359049031366 -0.99945886705280229 4.934854608285022e-14 0 0.15668974377387324 0.0051568425386069559 -0.98763441169853405 0
		 -0.023205666575646201 4.8575752817057767 -0.029933788001381446 1;
	setAttr ".pm[16]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 1.5818899999999994 4.9125899999999856 -0.26540000000024511 1;
	setAttr ".pm[17]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 2.9187099999999995 4.9125899999999856 -0.265400000000245 1;
	setAttr ".pm[18]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 4.0379499999999995 4.9125899999999856 -0.26540000000024483 1;
	setAttr ".pm[19]" -type "matrix" 0.58542760674385086 -0.55709044773242911 -0.58900318361401827 0
		 0.19665617033094857 -0.6072368286494142 0.76979853507431828 0 -0.78651183585050533 -0.56649242446574999 -0.24593792934393935 0
		 1.7648259885496274 0.59652782359766265 -6.2420750851938376 1;
	setAttr ".pm[20]" -type "matrix" 1 1.0623645541548159e-16 1.3877787807813929e-16 0
		 1.1102230246250593e-16 -0.99999999999999989 4.9948760405538195e-14 0 1.9428902930940797e-16 -5.0143607190537881e-14 -1 0
		 4.890979999999999 4.8696699999999877 -0.26540000000024261 1;
	setAttr ".pm[21]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -2.9937361812468684 0.15104246030913954 -0.66118982568145579 1;
	setAttr ".pm[22]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -1.6843657822696541 0.15104246030913956 -0.66118982568145568 1;
	setAttr ".pm[23]" -type "matrix" -0.0072510207702834008 -3.6850445815817105e-05 0.99997371032434301 0
		 0.99996079702054053 0.0050819053394227888 0.0072511144085883744 0 -0.0050820389445781801 0.99998708635670175 -1.7672495411513715e-16 0
		 -0.37798233459824432 0.15104246030913951 -0.66118982568145579 1;
	setAttr ".pm[24]" -type "matrix" 2.1805627086799682e-05 -0.015639840254740463 -0.99987768998078941 0
		 -0.0014009236593199154 0.99987670856672772 -0.015639855455459383 0 0.99999901846822559 0.0014010933491763434 -1.0728360111438488e-07 0
		 -0.28689507890216309 -0.18221950619526753 0.66273848356830523 1;
	setAttr ".pm[25]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 2.99356836107604 -0.1510435297343021 0.68494086496493234 1;
	setAttr ".pm[26]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 1.6841970332427765 -0.15104380581882598 0.68494058625328569 1;
	setAttr ".pm[27]" -type "matrix" -0.007251020770290004 -3.6865346585373621e-05 0.99997371032379356 0
		 -0.99996079702054053 -0.0050819052313726912 -0.0072511144843212917 0 0.0050820389445781064 -0.99998708635670164 -1.4900968576481907e-08 0
		 0.37780981184780282 -0.15104291654317617 0.68494094541913531 1;
	setAttr ".pm[28]" -type "matrix" 2.180562708671201e-05 -0.015639840254768122 -0.99987768998078896 0
		 0.0014009236593199282 -0.99987670856672706 0.015639855455487069 0 -0.99999901846822559 -0.0014010933491764154 1.0728360115245048e-07 0
		 0.28689542224806119 0.18184776922980761 -0.68648777846022035 1;
	setAttr ".pm[29]" -type "matrix" 1.0000000000000002 1.3635176321358939e-16 1.3989928165595344e-16 0
		 2.2204460492503131e-16 -0.99999999999999989 4.9939219426420323e-14 0 1.942890293094213e-16 -5.0143607190537862e-14 -1 0
		 4.0379499999999986 4.9125899999999882 -0.20959717811878445 1;
	setAttr ".pm[30]" -type "matrix" 1.0000000000000002 8.1811057928150055e-16 1.1304243842962708e-16 4.9303806576313238e-32
		 0 -0.99999999999999989 4.994615832032423e-14 -5.5511151231257827e-17 1.9428902930940239e-16 -5.0143607190537881e-14 -0.99999999999999989 -1.577721810442024e-30
		 2.9187100000000008 4.9125899999999847 -0.32120282188170551 1.0000000000000002;
	setAttr ".pm[31]" -type "matrix" 1 6.779780292635219e-31 1.387778780781446e-17 0
		 0 0.99999999999999989 -4.86694018420053e-14 0 -2.7755575615635224e-17 4.8853465599305281e-14 1.0000000000000002 0
		 -2.8939467189323551 -4.9125923348176901 0.32120249649154547 1;
	setAttr ".pm[32]" -type "matrix" 1 1.3559560585270438e-30 2.775557561562891e-17 0
		 0 0.99999999999999967 -4.8634707372485764e-14 0 -2.7755575615635224e-17 4.8853465599305281e-14 0.99999999999999989 0
		 -4.0131887595309852 -4.9125923348176963 0.2095968527286243 1;
	setAttr ".pm[33]" -type "matrix" -0.0072510207702834008 -3.6850445815817044e-05 0.99997371032434357 0
		 0.99996079702054053 0.0050819053394227792 0.0072511144085883328 0 -0.0050820389445781792 0.99998708635670197 -1.7650811368064012e-16 0
		 -1.6842064340309619 0.11968768663207506 -0.66118982568145523 1;
	setAttr ".pm[34]" -type "matrix" -0.0072510207702833999 -3.6850445815817051e-05 0.99997371032434279 0
		 0.99996079702054053 0.0050819053394227844 0.0072511144085884698 0 -0.005082038944578181 0.99998708635670197 -1.7607215904922668e-16 0
		 -0.37814168283693478 0.18239723398620411 -0.66118982568145557 1;
	setAttr ".pm[35]" -type "matrix" -0.007251020770290004 -3.6865346585373648e-05 0.99997371032379323 0
		 -0.99996079702054075 -0.0050819052313726826 -0.0072511144843214193 0 0.005082038944578109 -0.99998708635670175 -1.4900968576224416e-08 0
		 1.6840376850040872 -0.11968903214176152 0.68494058672050862 1;
	setAttr ".pm[36]" -type "matrix" -0.007251020770290004 -3.6865346585373574e-05 0.99997371032379356 -6.2297926412494766e-20
		 -0.99996079702054064 -0.0050819052313727103 -0.0072511144843211217 1.1102644332181106e-16
		 0.0050820389445781081 -0.99998708635670175 -1.4900968576696238e-08 -1.3054438331255024e-19
		 0.37796916008649462 -0.18239769022024069 0.68494094495191205 1;
	setAttr ".gm" -type "matrix" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1;
	setAttr -s 37 ".ma";
	setAttr -s 37 ".dpf[0:36]"  4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
		4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4;
	setAttr -s 37 ".lw";
	setAttr -s 37 ".lw";
	setAttr ".mmi" yes;
	setAttr ".mi" 3;
	setAttr ".bm" 0;
	setAttr ".ucm" yes;
	setAttr -s 37 ".ifcl";
	setAttr -s 37 ".ifcl";
createNode groupId -n "groupId495";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts11";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 2 "f[0:73]" "f[122:367]";
createNode groupId -n "groupId496";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts12";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "f[74:121]";
createNode tweak -n "tweak4";
createNode objectSet -n "skinCluster4Set";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "skinCluster4GroupId";
	setAttr ".ihi" 0;
createNode groupParts -n "skinCluster4GroupParts";
	setAttr ".ihi" 0;
	setAttr ".ic" -type "componentList" 1 "vtx[*]";
createNode objectSet -n "tweakSet4";
	setAttr ".ihi" 0;
	setAttr ".vo" yes;
createNode groupId -n "groupId498";
	setAttr ".ihi" 0;
createNode groupParts -n "groupParts14";
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
	setAttr -s 4 ".st";
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
	setAttr -s 4 ".s";
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
	setAttr ".gsn" no;
connectAttr "cRoot.s" "cSpine0.is";
connectAttr "cSpine0.s" "cSpine1.is";
connectAttr "cSpine1.s" "cSpine2.is";
connectAttr "cSpine2.s" "cSpine3.is";
connectAttr "cSpine3.s" "cSpine4.is";
connectAttr "cSpine4.s" "cNeck0.is";
connectAttr "cNeck0.s" "cNeck1.is";
connectAttr "cNeck1.s" "cNeck2.is";
connectAttr "cNeck2.s" "cHead.is";
connectAttr "cNeck2.s" "cJaw.is";
connectAttr "cJaw.s" "cJawEnd.is";
connectAttr "cNeck2.s" "lEye.is";
connectAttr "cNeck2.s" "rEye.is";
connectAttr "cSpine4.s" "lCollar.is";
connectAttr "lCollar.s" "lShoulder.is";
connectAttr "lShoulder.s" "lElbow.is";
connectAttr "lElbow.s" "lWrist.is";
connectAttr "lWrist.s" "lThumb.is";
connectAttr "lThumb.s" "lThumbEnd.is";
connectAttr "lWrist.s" "lFinger.is";
connectAttr "lFinger.s" "lFingerEnd.is";
connectAttr "lElbow.s" "lWristStretch.is";
connectAttr "lShoulder.s" "lElbowStretch.is";
connectAttr "cSpine4.s" "rCollar.is";
connectAttr "rCollar.s" "rShoulder.is";
connectAttr "rShoulder.s" "rElbow.is";
connectAttr "rElbow.s" "rWrist.is";
connectAttr "rWrist.s" "rThumb.is";
connectAttr "rThumb.s" "rThumbEnd.is";
connectAttr "rWrist.s" "rFinger.is";
connectAttr "rFinger.s" "rFingerEnd.is";
connectAttr "rElbow.s" "rWristStretch.is";
connectAttr "rShoulder.s" "rElbowStretch.is";
connectAttr "cSpine0.s" "lHip.is";
connectAttr "lHip.s" "lKnee.is";
connectAttr "lKnee.s" "lAnkle.is";
connectAttr "lAnkle.s" "lHeel.is";
connectAttr "lAnkle.s" "lBall.is";
connectAttr "lBall.s" "lToe.is";
connectAttr "lKnee.s" "lAnkleStretch.is";
connectAttr "lHip.s" "lKneeStretch.is";
connectAttr "cSpine0.s" "rHip.is";
connectAttr "rHip.s" "rKnee.is";
connectAttr "rKnee.s" "rAnkle.is";
connectAttr "rAnkle.s" "rHeel.is";
connectAttr "rAnkle.s" "rBall.is";
connectAttr "rBall.s" "rToe.is";
connectAttr "rKnee.s" "rAnkleStretch.is";
connectAttr "rHip.s" "rKneeStretch.is";
connectAttr "groupId438.id" "cEyesShape.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "cEyesShape.iog.og[0].gco";
connectAttr "skinCluster2GroupId.id" "cEyesShape.iog.og[3].gid";
connectAttr "skinCluster2Set.mwc" "cEyesShape.iog.og[3].gco";
connectAttr "groupId440.id" "cEyesShape.iog.og[4].gid";
connectAttr "tweakSet2.mwc" "cEyesShape.iog.og[4].gco";
connectAttr "skinCluster2.og[0]" "cEyesShape.i";
connectAttr "tweak2.vl[0].vt[0]" "cEyesShape.twl";
connectAttr "skinCluster3.og[0]" "cJointsShape.i";
connectAttr "groupId491.id" "cJointsShape.iog.og[0].gid";
connectAttr "lambert2SG.mwc" "cJointsShape.iog.og[0].gco";
connectAttr "groupId492.id" "cJointsShape.iog.og[1].gid";
connectAttr ":initialShadingGroup.mwc" "cJointsShape.iog.og[1].gco";
connectAttr "skinCluster3GroupId.id" "cJointsShape.iog.og[2].gid";
connectAttr "skinCluster3Set.mwc" "cJointsShape.iog.og[2].gco";
connectAttr "groupId494.id" "cJointsShape.iog.og[3].gid";
connectAttr "tweakSet3.mwc" "cJointsShape.iog.og[3].gco";
connectAttr "tweak3.vl[0].vt[0]" "cJointsShape.twl";
connectAttr "skinCluster4.og[0]" "cBodyShape.i";
connectAttr "groupId495.id" "cBodyShape.iog.og[0].gid";
connectAttr "lambert2SG.mwc" "cBodyShape.iog.og[0].gco";
connectAttr "groupId496.id" "cBodyShape.iog.og[1].gid";
connectAttr ":initialShadingGroup.mwc" "cBodyShape.iog.og[1].gco";
connectAttr "skinCluster4GroupId.id" "cBodyShape.iog.og[2].gid";
connectAttr "skinCluster4Set.mwc" "cBodyShape.iog.og[2].gco";
connectAttr "groupId498.id" "cBodyShape.iog.og[3].gid";
connectAttr "tweakSet4.mwc" "cBodyShape.iog.og[3].gco";
connectAttr "tweak4.vl[0].vt[0]" "cBodyShape.twl";
connectAttr "lambert2SG.msg" "materialInfo1.sg";
connectAttr "lambert2.msg" "materialInfo1.m";
connectAttr "lambert2.oc" "lambert2SG.ss";
connectAttr "cJointsShape.iog.og[0]" "lambert2SG.dsm" -na;
connectAttr "cBodyShape.iog.og[0]" "lambert2SG.dsm" -na;
connectAttr "groupId491.msg" "lambert2SG.gn" -na;
connectAttr "groupId495.msg" "lambert2SG.gn" -na;
connectAttr "lambert3SG.msg" "materialInfo2.sg";
connectAttr "lambert3.msg" "materialInfo2.m";
connectAttr "lambert3.oc" "lambert3SG.ss";
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "lambert2SG.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "lambert3SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "lambert2SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "lambert3SG.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr "skinCluster2GroupParts.og" "skinCluster2.ip[0].ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2.ip[0].gi";
connectAttr "rEye.wm" "skinCluster2.ma[0]";
connectAttr "lEye.wm" "skinCluster2.ma[1]";
connectAttr "cHead.wm" "skinCluster2.ma[2]";
connectAttr "rEye.liw" "skinCluster2.lw[0]";
connectAttr "lEye.liw" "skinCluster2.lw[1]";
connectAttr "cHead.liw" "skinCluster2.lw[2]";
connectAttr "rEye.obcc" "skinCluster2.ifcl[0]";
connectAttr "lEye.obcc" "skinCluster2.ifcl[1]";
connectAttr "cHead.obcc" "skinCluster2.ifcl[2]";
connectAttr "cEyesShapeOrig1.w" "groupParts4.ig";
connectAttr "groupId438.id" "groupParts4.gi";
connectAttr "groupParts6.og" "tweak2.ip[0].ig";
connectAttr "groupId440.id" "tweak2.ip[0].gi";
connectAttr "skinCluster2GroupId.msg" "skinCluster2Set.gn" -na;
connectAttr "cEyesShape.iog.og[3]" "skinCluster2Set.dsm" -na;
connectAttr "skinCluster2.msg" "skinCluster2Set.ub[0]";
connectAttr "tweak2.og[0]" "skinCluster2GroupParts.ig";
connectAttr "skinCluster2GroupId.id" "skinCluster2GroupParts.gi";
connectAttr "groupId440.msg" "tweakSet2.gn" -na;
connectAttr "cEyesShape.iog.og[4]" "tweakSet2.dsm" -na;
connectAttr "tweak2.msg" "tweakSet2.ub[0]";
connectAttr "groupParts4.og" "groupParts6.ig";
connectAttr "groupId440.id" "groupParts6.gi";
connectAttr "skinCluster3GroupParts.og" "skinCluster3.ip[0].ig";
connectAttr "skinCluster3GroupId.id" "skinCluster3.ip[0].gi";
connectAttr "bindPose1.msg" "skinCluster3.bp";
connectAttr "cSpine0.wm" "skinCluster3.ma[0]";
connectAttr "cSpine1.wm" "skinCluster3.ma[1]";
connectAttr "cSpine2.wm" "skinCluster3.ma[2]";
connectAttr "cSpine3.wm" "skinCluster3.ma[3]";
connectAttr "cSpine4.wm" "skinCluster3.ma[4]";
connectAttr "cNeck0.wm" "skinCluster3.ma[5]";
connectAttr "cNeck1.wm" "skinCluster3.ma[6]";
connectAttr "cNeck2.wm" "skinCluster3.ma[7]";
connectAttr "cJaw.wm" "skinCluster3.ma[8]";
connectAttr "lCollar.wm" "skinCluster3.ma[9]";
connectAttr "lShoulder.wm" "skinCluster3.ma[10]";
connectAttr "lElbow.wm" "skinCluster3.ma[11]";
connectAttr "lWrist.wm" "skinCluster3.ma[12]";
connectAttr "lThumb.wm" "skinCluster3.ma[13]";
connectAttr "lFinger.wm" "skinCluster3.ma[14]";
connectAttr "rCollar.wm" "skinCluster3.ma[15]";
connectAttr "rShoulder.wm" "skinCluster3.ma[16]";
connectAttr "rElbow.wm" "skinCluster3.ma[17]";
connectAttr "rWrist.wm" "skinCluster3.ma[18]";
connectAttr "rThumb.wm" "skinCluster3.ma[19]";
connectAttr "rFinger.wm" "skinCluster3.ma[20]";
connectAttr "lHip.wm" "skinCluster3.ma[21]";
connectAttr "lKnee.wm" "skinCluster3.ma[22]";
connectAttr "lAnkle.wm" "skinCluster3.ma[23]";
connectAttr "lBall.wm" "skinCluster3.ma[24]";
connectAttr "rHip.wm" "skinCluster3.ma[25]";
connectAttr "rKnee.wm" "skinCluster3.ma[26]";
connectAttr "rAnkle.wm" "skinCluster3.ma[27]";
connectAttr "rBall.wm" "skinCluster3.ma[28]";
connectAttr "cSpine0.liw" "skinCluster3.lw[0]";
connectAttr "cSpine1.liw" "skinCluster3.lw[1]";
connectAttr "cSpine2.liw" "skinCluster3.lw[2]";
connectAttr "cSpine3.liw" "skinCluster3.lw[3]";
connectAttr "cSpine4.liw" "skinCluster3.lw[4]";
connectAttr "cNeck0.liw" "skinCluster3.lw[5]";
connectAttr "cNeck1.liw" "skinCluster3.lw[6]";
connectAttr "cNeck2.liw" "skinCluster3.lw[7]";
connectAttr "cJaw.liw" "skinCluster3.lw[8]";
connectAttr "lCollar.liw" "skinCluster3.lw[9]";
connectAttr "lShoulder.liw" "skinCluster3.lw[10]";
connectAttr "lElbow.liw" "skinCluster3.lw[11]";
connectAttr "lWrist.liw" "skinCluster3.lw[12]";
connectAttr "lThumb.liw" "skinCluster3.lw[13]";
connectAttr "lFinger.liw" "skinCluster3.lw[14]";
connectAttr "rCollar.liw" "skinCluster3.lw[15]";
connectAttr "rShoulder.liw" "skinCluster3.lw[16]";
connectAttr "rElbow.liw" "skinCluster3.lw[17]";
connectAttr "rWrist.liw" "skinCluster3.lw[18]";
connectAttr "rThumb.liw" "skinCluster3.lw[19]";
connectAttr "rFinger.liw" "skinCluster3.lw[20]";
connectAttr "lHip.liw" "skinCluster3.lw[21]";
connectAttr "lKnee.liw" "skinCluster3.lw[22]";
connectAttr "lAnkle.liw" "skinCluster3.lw[23]";
connectAttr "lBall.liw" "skinCluster3.lw[24]";
connectAttr "rHip.liw" "skinCluster3.lw[25]";
connectAttr "rKnee.liw" "skinCluster3.lw[26]";
connectAttr "rAnkle.liw" "skinCluster3.lw[27]";
connectAttr "rBall.liw" "skinCluster3.lw[28]";
connectAttr "cSpine0.obcc" "skinCluster3.ifcl[0]";
connectAttr "cSpine1.obcc" "skinCluster3.ifcl[1]";
connectAttr "cSpine2.obcc" "skinCluster3.ifcl[2]";
connectAttr "cSpine3.obcc" "skinCluster3.ifcl[3]";
connectAttr "cSpine4.obcc" "skinCluster3.ifcl[4]";
connectAttr "cNeck0.obcc" "skinCluster3.ifcl[5]";
connectAttr "cNeck1.obcc" "skinCluster3.ifcl[6]";
connectAttr "cNeck2.obcc" "skinCluster3.ifcl[7]";
connectAttr "cJaw.obcc" "skinCluster3.ifcl[8]";
connectAttr "lCollar.obcc" "skinCluster3.ifcl[9]";
connectAttr "lShoulder.obcc" "skinCluster3.ifcl[10]";
connectAttr "lElbow.obcc" "skinCluster3.ifcl[11]";
connectAttr "lWrist.obcc" "skinCluster3.ifcl[12]";
connectAttr "lThumb.obcc" "skinCluster3.ifcl[13]";
connectAttr "lFinger.obcc" "skinCluster3.ifcl[14]";
connectAttr "rCollar.obcc" "skinCluster3.ifcl[15]";
connectAttr "rShoulder.obcc" "skinCluster3.ifcl[16]";
connectAttr "rElbow.obcc" "skinCluster3.ifcl[17]";
connectAttr "rWrist.obcc" "skinCluster3.ifcl[18]";
connectAttr "rThumb.obcc" "skinCluster3.ifcl[19]";
connectAttr "rFinger.obcc" "skinCluster3.ifcl[20]";
connectAttr "lHip.obcc" "skinCluster3.ifcl[21]";
connectAttr "lKnee.obcc" "skinCluster3.ifcl[22]";
connectAttr "lAnkle.obcc" "skinCluster3.ifcl[23]";
connectAttr "lBall.obcc" "skinCluster3.ifcl[24]";
connectAttr "rHip.obcc" "skinCluster3.ifcl[25]";
connectAttr "rKnee.obcc" "skinCluster3.ifcl[26]";
connectAttr "rAnkle.obcc" "skinCluster3.ifcl[27]";
connectAttr "rBall.obcc" "skinCluster3.ifcl[28]";
connectAttr "cSpine4.msg" "skinCluster3.ptt";
connectAttr "cJointsShapeOrig.w" "groupParts7.ig";
connectAttr "groupId491.id" "groupParts7.gi";
connectAttr "groupParts7.og" "groupParts8.ig";
connectAttr "groupId492.id" "groupParts8.gi";
connectAttr "groupParts10.og" "tweak3.ip[0].ig";
connectAttr "groupId494.id" "tweak3.ip[0].gi";
connectAttr "skinCluster3GroupId.msg" "skinCluster3Set.gn" -na;
connectAttr "cJointsShape.iog.og[2]" "skinCluster3Set.dsm" -na;
connectAttr "skinCluster3.msg" "skinCluster3Set.ub[0]";
connectAttr "tweak3.og[0]" "skinCluster3GroupParts.ig";
connectAttr "skinCluster3GroupId.id" "skinCluster3GroupParts.gi";
connectAttr "groupId494.msg" "tweakSet3.gn" -na;
connectAttr "cJointsShape.iog.og[3]" "tweakSet3.dsm" -na;
connectAttr "tweak3.msg" "tweakSet3.ub[0]";
connectAttr "groupParts8.og" "groupParts10.ig";
connectAttr "groupId494.id" "groupParts10.gi";
connectAttr "cRoot.msg" "bindPose1.m[0]";
connectAttr "cSpine0.msg" "bindPose1.m[1]";
connectAttr "cSpine1.msg" "bindPose1.m[2]";
connectAttr "cSpine2.msg" "bindPose1.m[3]";
connectAttr "cSpine3.msg" "bindPose1.m[4]";
connectAttr "cSpine4.msg" "bindPose1.m[5]";
connectAttr "cNeck0.msg" "bindPose1.m[6]";
connectAttr "cNeck1.msg" "bindPose1.m[7]";
connectAttr "cNeck2.msg" "bindPose1.m[8]";
connectAttr "cJaw.msg" "bindPose1.m[9]";
connectAttr "lCollar.msg" "bindPose1.m[10]";
connectAttr "lShoulder.msg" "bindPose1.m[11]";
connectAttr "lElbow.msg" "bindPose1.m[12]";
connectAttr "lWrist.msg" "bindPose1.m[13]";
connectAttr "lThumb.msg" "bindPose1.m[14]";
connectAttr "lFinger.msg" "bindPose1.m[15]";
connectAttr "rCollar.msg" "bindPose1.m[16]";
connectAttr "rShoulder.msg" "bindPose1.m[17]";
connectAttr "rElbow.msg" "bindPose1.m[18]";
connectAttr "rWrist.msg" "bindPose1.m[19]";
connectAttr "rThumb.msg" "bindPose1.m[20]";
connectAttr "rFinger.msg" "bindPose1.m[21]";
connectAttr "lHip.msg" "bindPose1.m[22]";
connectAttr "lKnee.msg" "bindPose1.m[23]";
connectAttr "lAnkle.msg" "bindPose1.m[24]";
connectAttr "lBall.msg" "bindPose1.m[25]";
connectAttr "rHip.msg" "bindPose1.m[26]";
connectAttr "rKnee.msg" "bindPose1.m[27]";
connectAttr "rAnkle.msg" "bindPose1.m[28]";
connectAttr "rBall.msg" "bindPose1.m[29]";
connectAttr "rWristStretch.msg" "bindPose1.m[30]";
connectAttr "rElbowStretch.msg" "bindPose1.m[31]";
connectAttr "lElbowStretch.msg" "bindPose1.m[32]";
connectAttr "lWristStretch.msg" "bindPose1.m[33]";
connectAttr "lKneeStretch.msg" "bindPose1.m[34]";
connectAttr "lAnkleStretch.msg" "bindPose1.m[35]";
connectAttr "rKneeStretch.msg" "bindPose1.m[36]";
connectAttr "rAnkleStretch.msg" "bindPose1.m[37]";
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
connectAttr "bindPose1.m[5]" "bindPose1.p[10]";
connectAttr "bindPose1.m[10]" "bindPose1.p[11]";
connectAttr "bindPose1.m[11]" "bindPose1.p[12]";
connectAttr "bindPose1.m[12]" "bindPose1.p[13]";
connectAttr "bindPose1.m[13]" "bindPose1.p[14]";
connectAttr "bindPose1.m[13]" "bindPose1.p[15]";
connectAttr "bindPose1.m[5]" "bindPose1.p[16]";
connectAttr "bindPose1.m[16]" "bindPose1.p[17]";
connectAttr "bindPose1.m[17]" "bindPose1.p[18]";
connectAttr "bindPose1.m[18]" "bindPose1.p[19]";
connectAttr "bindPose1.m[19]" "bindPose1.p[20]";
connectAttr "bindPose1.m[19]" "bindPose1.p[21]";
connectAttr "bindPose1.m[1]" "bindPose1.p[22]";
connectAttr "bindPose1.m[22]" "bindPose1.p[23]";
connectAttr "bindPose1.m[23]" "bindPose1.p[24]";
connectAttr "bindPose1.m[24]" "bindPose1.p[25]";
connectAttr "bindPose1.m[1]" "bindPose1.p[26]";
connectAttr "bindPose1.m[26]" "bindPose1.p[27]";
connectAttr "bindPose1.m[27]" "bindPose1.p[28]";
connectAttr "bindPose1.m[28]" "bindPose1.p[29]";
connectAttr "bindPose1.m[18]" "bindPose1.p[30]";
connectAttr "bindPose1.m[17]" "bindPose1.p[31]";
connectAttr "bindPose1.m[11]" "bindPose1.p[32]";
connectAttr "bindPose1.m[12]" "bindPose1.p[33]";
connectAttr "bindPose1.m[22]" "bindPose1.p[34]";
connectAttr "bindPose1.m[23]" "bindPose1.p[35]";
connectAttr "bindPose1.m[26]" "bindPose1.p[36]";
connectAttr "bindPose1.m[27]" "bindPose1.p[37]";
connectAttr "cRoot.bps" "bindPose1.wm[0]";
connectAttr "cSpine0.bps" "bindPose1.wm[1]";
connectAttr "cSpine1.bps" "bindPose1.wm[2]";
connectAttr "cSpine2.bps" "bindPose1.wm[3]";
connectAttr "cSpine3.bps" "bindPose1.wm[4]";
connectAttr "cSpine4.bps" "bindPose1.wm[5]";
connectAttr "cNeck0.bps" "bindPose1.wm[6]";
connectAttr "cNeck1.bps" "bindPose1.wm[7]";
connectAttr "cNeck2.bps" "bindPose1.wm[8]";
connectAttr "cJaw.bps" "bindPose1.wm[9]";
connectAttr "lCollar.bps" "bindPose1.wm[10]";
connectAttr "lShoulder.bps" "bindPose1.wm[11]";
connectAttr "lElbow.bps" "bindPose1.wm[12]";
connectAttr "lWrist.bps" "bindPose1.wm[13]";
connectAttr "lThumb.bps" "bindPose1.wm[14]";
connectAttr "lFinger.bps" "bindPose1.wm[15]";
connectAttr "rCollar.bps" "bindPose1.wm[16]";
connectAttr "rShoulder.bps" "bindPose1.wm[17]";
connectAttr "rElbow.bps" "bindPose1.wm[18]";
connectAttr "rWrist.bps" "bindPose1.wm[19]";
connectAttr "rThumb.bps" "bindPose1.wm[20]";
connectAttr "rFinger.bps" "bindPose1.wm[21]";
connectAttr "lHip.bps" "bindPose1.wm[22]";
connectAttr "lKnee.bps" "bindPose1.wm[23]";
connectAttr "lAnkle.bps" "bindPose1.wm[24]";
connectAttr "lBall.bps" "bindPose1.wm[25]";
connectAttr "rHip.bps" "bindPose1.wm[26]";
connectAttr "rKnee.bps" "bindPose1.wm[27]";
connectAttr "rAnkle.bps" "bindPose1.wm[28]";
connectAttr "rBall.bps" "bindPose1.wm[29]";
connectAttr "rWristStretch.bps" "bindPose1.wm[30]";
connectAttr "rElbowStretch.bps" "bindPose1.wm[31]";
connectAttr "lElbowStretch.bps" "bindPose1.wm[32]";
connectAttr "lWristStretch.bps" "bindPose1.wm[33]";
connectAttr "lKneeStretch.bps" "bindPose1.wm[34]";
connectAttr "lAnkleStretch.bps" "bindPose1.wm[35]";
connectAttr "rKneeStretch.bps" "bindPose1.wm[36]";
connectAttr "rAnkleStretch.bps" "bindPose1.wm[37]";
connectAttr "skinCluster4GroupParts.og" "skinCluster4.ip[0].ig";
connectAttr "skinCluster4GroupId.id" "skinCluster4.ip[0].gi";
connectAttr "cSpine0.wm" "skinCluster4.ma[0]";
connectAttr "cSpine1.wm" "skinCluster4.ma[1]";
connectAttr "cSpine2.wm" "skinCluster4.ma[2]";
connectAttr "cSpine3.wm" "skinCluster4.ma[3]";
connectAttr "cSpine4.wm" "skinCluster4.ma[4]";
connectAttr "cNeck0.wm" "skinCluster4.ma[5]";
connectAttr "cNeck1.wm" "skinCluster4.ma[6]";
connectAttr "cNeck2.wm" "skinCluster4.ma[7]";
connectAttr "cJaw.wm" "skinCluster4.ma[8]";
connectAttr "lCollar.wm" "skinCluster4.ma[9]";
connectAttr "lShoulder.wm" "skinCluster4.ma[10]";
connectAttr "lElbow.wm" "skinCluster4.ma[11]";
connectAttr "lWrist.wm" "skinCluster4.ma[12]";
connectAttr "lThumb.wm" "skinCluster4.ma[13]";
connectAttr "lFinger.wm" "skinCluster4.ma[14]";
connectAttr "rCollar.wm" "skinCluster4.ma[15]";
connectAttr "rShoulder.wm" "skinCluster4.ma[16]";
connectAttr "rElbow.wm" "skinCluster4.ma[17]";
connectAttr "rWrist.wm" "skinCluster4.ma[18]";
connectAttr "rThumb.wm" "skinCluster4.ma[19]";
connectAttr "rFinger.wm" "skinCluster4.ma[20]";
connectAttr "lHip.wm" "skinCluster4.ma[21]";
connectAttr "lKnee.wm" "skinCluster4.ma[22]";
connectAttr "lAnkle.wm" "skinCluster4.ma[23]";
connectAttr "lBall.wm" "skinCluster4.ma[24]";
connectAttr "rHip.wm" "skinCluster4.ma[25]";
connectAttr "rKnee.wm" "skinCluster4.ma[26]";
connectAttr "rAnkle.wm" "skinCluster4.ma[27]";
connectAttr "rBall.wm" "skinCluster4.ma[28]";
connectAttr "rWristStretch.wm" "skinCluster4.ma[29]";
connectAttr "rElbowStretch.wm" "skinCluster4.ma[30]";
connectAttr "lElbowStretch.wm" "skinCluster4.ma[31]";
connectAttr "lWristStretch.wm" "skinCluster4.ma[32]";
connectAttr "lKneeStretch.wm" "skinCluster4.ma[33]";
connectAttr "lAnkleStretch.wm" "skinCluster4.ma[34]";
connectAttr "rKneeStretch.wm" "skinCluster4.ma[35]";
connectAttr "rAnkleStretch.wm" "skinCluster4.ma[36]";
connectAttr "cSpine0.liw" "skinCluster4.lw[0]";
connectAttr "cSpine1.liw" "skinCluster4.lw[1]";
connectAttr "cSpine2.liw" "skinCluster4.lw[2]";
connectAttr "cSpine3.liw" "skinCluster4.lw[3]";
connectAttr "cSpine4.liw" "skinCluster4.lw[4]";
connectAttr "cNeck0.liw" "skinCluster4.lw[5]";
connectAttr "cNeck1.liw" "skinCluster4.lw[6]";
connectAttr "cNeck2.liw" "skinCluster4.lw[7]";
connectAttr "cJaw.liw" "skinCluster4.lw[8]";
connectAttr "lCollar.liw" "skinCluster4.lw[9]";
connectAttr "lShoulder.liw" "skinCluster4.lw[10]";
connectAttr "lElbow.liw" "skinCluster4.lw[11]";
connectAttr "lWrist.liw" "skinCluster4.lw[12]";
connectAttr "lThumb.liw" "skinCluster4.lw[13]";
connectAttr "lFinger.liw" "skinCluster4.lw[14]";
connectAttr "rCollar.liw" "skinCluster4.lw[15]";
connectAttr "rShoulder.liw" "skinCluster4.lw[16]";
connectAttr "rElbow.liw" "skinCluster4.lw[17]";
connectAttr "rWrist.liw" "skinCluster4.lw[18]";
connectAttr "rThumb.liw" "skinCluster4.lw[19]";
connectAttr "rFinger.liw" "skinCluster4.lw[20]";
connectAttr "lHip.liw" "skinCluster4.lw[21]";
connectAttr "lKnee.liw" "skinCluster4.lw[22]";
connectAttr "lAnkle.liw" "skinCluster4.lw[23]";
connectAttr "lBall.liw" "skinCluster4.lw[24]";
connectAttr "rHip.liw" "skinCluster4.lw[25]";
connectAttr "rKnee.liw" "skinCluster4.lw[26]";
connectAttr "rAnkle.liw" "skinCluster4.lw[27]";
connectAttr "rBall.liw" "skinCluster4.lw[28]";
connectAttr "rWristStretch.liw" "skinCluster4.lw[29]";
connectAttr "rElbowStretch.liw" "skinCluster4.lw[30]";
connectAttr "lElbowStretch.liw" "skinCluster4.lw[31]";
connectAttr "lWristStretch.liw" "skinCluster4.lw[32]";
connectAttr "lKneeStretch.liw" "skinCluster4.lw[33]";
connectAttr "lAnkleStretch.liw" "skinCluster4.lw[34]";
connectAttr "rKneeStretch.liw" "skinCluster4.lw[35]";
connectAttr "rAnkleStretch.liw" "skinCluster4.lw[36]";
connectAttr "cSpine0.obcc" "skinCluster4.ifcl[0]";
connectAttr "cSpine1.obcc" "skinCluster4.ifcl[1]";
connectAttr "cSpine2.obcc" "skinCluster4.ifcl[2]";
connectAttr "cSpine3.obcc" "skinCluster4.ifcl[3]";
connectAttr "cSpine4.obcc" "skinCluster4.ifcl[4]";
connectAttr "cNeck0.obcc" "skinCluster4.ifcl[5]";
connectAttr "cNeck1.obcc" "skinCluster4.ifcl[6]";
connectAttr "cNeck2.obcc" "skinCluster4.ifcl[7]";
connectAttr "cJaw.obcc" "skinCluster4.ifcl[8]";
connectAttr "lCollar.obcc" "skinCluster4.ifcl[9]";
connectAttr "lShoulder.obcc" "skinCluster4.ifcl[10]";
connectAttr "lElbow.obcc" "skinCluster4.ifcl[11]";
connectAttr "lWrist.obcc" "skinCluster4.ifcl[12]";
connectAttr "lThumb.obcc" "skinCluster4.ifcl[13]";
connectAttr "lFinger.obcc" "skinCluster4.ifcl[14]";
connectAttr "rCollar.obcc" "skinCluster4.ifcl[15]";
connectAttr "rShoulder.obcc" "skinCluster4.ifcl[16]";
connectAttr "rElbow.obcc" "skinCluster4.ifcl[17]";
connectAttr "rWrist.obcc" "skinCluster4.ifcl[18]";
connectAttr "rThumb.obcc" "skinCluster4.ifcl[19]";
connectAttr "rFinger.obcc" "skinCluster4.ifcl[20]";
connectAttr "lHip.obcc" "skinCluster4.ifcl[21]";
connectAttr "lKnee.obcc" "skinCluster4.ifcl[22]";
connectAttr "lAnkle.obcc" "skinCluster4.ifcl[23]";
connectAttr "lBall.obcc" "skinCluster4.ifcl[24]";
connectAttr "rHip.obcc" "skinCluster4.ifcl[25]";
connectAttr "rKnee.obcc" "skinCluster4.ifcl[26]";
connectAttr "rAnkle.obcc" "skinCluster4.ifcl[27]";
connectAttr "rBall.obcc" "skinCluster4.ifcl[28]";
connectAttr "rWristStretch.obcc" "skinCluster4.ifcl[29]";
connectAttr "rElbowStretch.obcc" "skinCluster4.ifcl[30]";
connectAttr "lElbowStretch.obcc" "skinCluster4.ifcl[31]";
connectAttr "lWristStretch.obcc" "skinCluster4.ifcl[32]";
connectAttr "lKneeStretch.obcc" "skinCluster4.ifcl[33]";
connectAttr "lAnkleStretch.obcc" "skinCluster4.ifcl[34]";
connectAttr "rKneeStretch.obcc" "skinCluster4.ifcl[35]";
connectAttr "rAnkleStretch.obcc" "skinCluster4.ifcl[36]";
connectAttr "bindPose1.msg" "skinCluster4.bp";
connectAttr "cJaw.msg" "skinCluster4.ptt";
connectAttr "cBodyShapeOrig.w" "groupParts11.ig";
connectAttr "groupId495.id" "groupParts11.gi";
connectAttr "groupParts11.og" "groupParts12.ig";
connectAttr "groupId496.id" "groupParts12.gi";
connectAttr "groupParts14.og" "tweak4.ip[0].ig";
connectAttr "groupId498.id" "tweak4.ip[0].gi";
connectAttr "skinCluster4GroupId.msg" "skinCluster4Set.gn" -na;
connectAttr "cBodyShape.iog.og[2]" "skinCluster4Set.dsm" -na;
connectAttr "skinCluster4.msg" "skinCluster4Set.ub[0]";
connectAttr "tweak4.og[0]" "skinCluster4GroupParts.ig";
connectAttr "skinCluster4GroupId.id" "skinCluster4GroupParts.gi";
connectAttr "groupId498.msg" "tweakSet4.gn" -na;
connectAttr "cBodyShape.iog.og[3]" "tweakSet4.dsm" -na;
connectAttr "tweak4.msg" "tweakSet4.ub[0]";
connectAttr "groupParts12.og" "groupParts14.ig";
connectAttr "groupId498.id" "groupParts14.gi";
connectAttr "lambert2SG.pa" ":renderPartition.st" -na;
connectAttr "lambert3SG.pa" ":renderPartition.st" -na;
connectAttr "cEyesShape.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "cJointsShape.iog.og[1]" ":initialShadingGroup.dsm" -na;
connectAttr "cBodyShape.iog.og[1]" ":initialShadingGroup.dsm" -na;
connectAttr "groupId438.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId492.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId496.msg" ":initialShadingGroup.gn" -na;
connectAttr "lambert2.msg" ":defaultShaderList1.s" -na;
connectAttr "lambert3.msg" ":defaultShaderList1.s" -na;
connectAttr "defaultRenderLayer.msg" ":defaultRenderingList1.r" -na;
// End of maxi_004.ma

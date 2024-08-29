
//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_create_controller()
{
    var lt_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        lt_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        lt_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    var lt_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        lt_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    var lt_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        lt_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        lt_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);        

    M_set_field_property_C();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_C();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location, lt_MG_output_material_general_log, lt_MP_output_material_plant_log, lt_MSL_output_material_storage_location_log] = M_create_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_C(lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_read_controller()
{
    var lt_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        lt_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        lt_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    var lt_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        lt_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    var lt_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        lt_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        lt_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);  

    M_set_field_property_R();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_R();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location, lt_MG_output_material_general_log, lt_MP_output_material_plant_log, lt_MSL_output_material_storage_location_log] = M_read_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_R(lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_update_controller()
{
    var lt_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        lt_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        lt_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    var lt_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        lt_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    var lt_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        lt_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        lt_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log); 

    M_set_field_property_U();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_U();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location, lt_MG_output_material_general_log, lt_MP_output_material_plant_log, lt_MSL_output_material_storage_location_log] = M_update_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_U(lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_delete_controller()
{
    var lt_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        lt_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        lt_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    var lt_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        lt_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    var lt_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        lt_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        lt_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);          

    M_set_field_property_D();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_D();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location, lt_MG_output_material_general_log, lt_MP_output_material_plant_log, lt_MSL_output_material_storage_location_log] = M_delete_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_D(lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location);
}
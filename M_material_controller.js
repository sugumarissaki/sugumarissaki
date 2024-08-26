//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MG_material_general = [
    {
    tenant : '',
    material : '',
    material_type : '',
    material_description : '',
    base_UOM : '',
    material_group : '',
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

var tt_MG_input_material_general = structuredClone(tt_MG_material_general),
    tt_MG_output_material_general = structuredClone(tt_MG_material_general);



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MP_material_plant = [
    {
        tenant : '',
        material : '',
        plant : '',
        reorder_point : '',
        moving_average_price : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var tt_MP_input_material_plant = structuredClone(tt_MP_material_plant),
    tt_MP_output_material_plant = structuredClone(tt_MP_material_plant);


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MSL_material_storage_location = [
    {
        tenant : '',
        material : '',
        plant : '',
        storage_location : '',
        storage_bin : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var tt_MSL_input_material_storage_location = structuredClone(tt_MSL_material_storage_location),
    tt_MSL_output_material_storage_location = structuredClone(tt_MSL_material_storage_location);



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

    M_set_field_property_C();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_C();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location] = M_create_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
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

    M_set_field_property_R();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_R();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location] = M_read_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
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

    M_set_field_property_U();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_U();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location] = M_update_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
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

    M_set_field_property_D();
    [lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location] = M_copy_screen_input_D();
    [lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location] = M_delete_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_D(lt_MG_output_material_general, lt_MP_output_material_plant, lt_MSL_output_material_storage_location);
}
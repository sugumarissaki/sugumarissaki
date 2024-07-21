
//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MG_material_general = [
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

var lt_MG_input_material_general = [
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

var lt_MG_output_material_general = [
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


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MP_material_plant = [
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

var lt_MP_input_material_plant = [
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

var lt_MP_output_material_plant = [
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


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MSL_material_storage_location = [
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

var lt_MSL_input_material_storage_location = [
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

var lt_MSL_output_material_storage_location = [
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


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_create_controller()
{
    M_set_field_property_C();
    M_copy_screen_input_C();
    M_create_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_C();
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_read_controller()
{
    M_set_field_property_R();
    M_copy_screen_input_R();
    M_read_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_R();
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_update_controller()
{
    M_set_field_property_U();
    M_copy_screen_input_U();
    M_update_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_U();
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_delete_controller()
{
    M_set_field_property_D();
    M_copy_screen_input_D();
    M_delete_model(lt_MG_input_material_general, lt_MP_input_material_plant, lt_MSL_input_material_storage_location);
    M_copy_output_screen_D();
}
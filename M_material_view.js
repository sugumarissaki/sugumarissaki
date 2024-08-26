/*
    check child_D
*/

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
function MG_set_material_general_hide()
{
    document.getElementById('t_MG_material_general').style.display = "none";
    document.getElementById('b_MG_set_material_general_hide').disabled = true;
    document.getElementById('b_MG_set_material_general_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_set_material_general_unhide()
{
    document.getElementById('t_MG_material_general').style.display = "table";
    document.getElementById('b_MG_set_material_general_hide').disabled = false;
    document.getElementById('b_MG_set_material_general_unhide').disabled = true;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_material_plant_hide()
{
    document.getElementById('t_MP_material_plant').style.display = "none";
    document.getElementById('b_MP_material_plant_hide').disabled = true;
    document.getElementById('b_MP_material_plant_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_material_plant_unhide()
{
    document.getElementById('t_MP_material_plant').style.display = "table";
    document.getElementById('b_MP_material_plant_hide').disabled = false;
    document.getElementById('b_MP_material_plant_unhide').disabled = true;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_material_storage_location_hide()
{
    document.getElementById('t_MSL_material_storage_location').style.display = "none";
    document.getElementById('b_MP_material_storage_location_hide').disabled = true;
    document.getElementById('b_MP_material_storage_location_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_material_storage_location_unhide()
{
    document.getElementById('t_MSL_material_storage_location').style.display = "table";
    document.getElementById('b_MP_material_storage_location_hide').disabled = false;
    document.getElementById('b_MP_material_storage_location_unhide').disabled = true;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_set_field_property_C()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = true;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_C();
    MP_set_field_property_C();
    MSL_set_field_property_C();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = false; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_C()
{
    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    lv_tenant = document.getElementById('M_tenant').value;

    ot_MG_input_material_general = MG_copy_screen_input_C(lv_tenant);
    ot_MP_input_material_plant = MP_copy_screen_input_C(lv_tenant);
    ot_MSL_input_material_storage_location = MSL_copy_screen_input_C(lv_tenant);

    return [ot_MG_input_material_general, ot_MP_input_material_plant, ot_MSL_input_material_storage_location];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_C(it_MG_output_material_general, it_MP_output_material_plant, it_MSL_output_material_storage_location)
{
    MG_copy_output_screen_C(it_MG_output_material_general);
    MP_copy_output_screen_C(it_MP_output_material_plant);
    MSL_copy_output_screen_C(it_MSL_output_material_storage_location); 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_set_field_property_R()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = true;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_R();
    MP_set_field_property_R();
    MSL_set_field_property_R();

    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = false; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_R()
{
    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    lv_tenant = document.getElementById('M_tenant').value;

    ot_MG_input_material_general = MG_copy_screen_input_R(lv_tenant);
    ot_MP_input_material_plant = MP_copy_screen_input_R(lv_tenant);
    ot_MSL_input_material_storage_location = MSL_copy_screen_input_R(lv_tenant);

    return [ot_MG_input_material_general, ot_MP_input_material_plant, ot_MSL_input_material_storage_location]
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_R(it_MG_output_material_general, it_MP_output_material_plant, it_MSL_output_material_storage_location)
{
    MG_copy_output_screen_R(it_MG_output_material_general);
    MP_copy_output_screen_R(it_MP_output_material_plant);
    MSL_copy_output_screen_R(it_MSL_output_material_storage_location); 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_set_field_property_U()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = true;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_U();
    MP_set_field_property_U();
    MSL_set_field_property_U();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = false; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_U()
{
    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    lv_tenant = document.getElementById('M_tenant').value;

    ot_MG_input_material_general = MG_copy_screen_input_U(lv_tenant);
    ot_MP_input_material_plant = MP_copy_screen_input_U(lv_tenant);
    ot_MSL_input_material_storage_location = MSL_copy_screen_input_U(lv_tenant);

    return [ot_MG_input_material_general, ot_MP_input_material_plant, ot_MSL_input_material_storage_location];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_U(it_MG_output_material_general, it_MP_output_material_plant, it_MSL_output_material_storage_location)
{
    MG_copy_output_screen_U(it_MG_output_material_general);
    MP_copy_output_screen_U(it_MP_output_material_plant);
    MSL_copy_output_screen_U(it_MSL_output_material_storage_location); 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_set_field_property_D()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = true;    

    MG_set_field_property_D();
    MP_set_field_property_D();
    MSL_set_field_property_D();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = false;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_D()
{
    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general),
        ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant),
        ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    lv_tenant = document.getElementById('M_tenant').value;

    ot_MG_input_material_general = MG_copy_screen_input_D(lv_tenant);
    ot_MP_input_material_plant = MP_copy_screen_input_D(lv_tenant);
    ot_MSL_input_material_storage_location = MSL_copy_screen_input_D(lv_tenant);

    return [ot_MG_input_material_general, ot_MP_input_material_plant, ot_MSL_input_material_storage_location];    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_D(it_MG_output_material_general, it_MP_output_material_plant, it_MSL_output_material_storage_location)
{
    MG_copy_output_screen_D(it_MG_output_material_general);
    MP_copy_output_screen_D(it_MP_output_material_plant);
    MSL_copy_output_screen_D(it_MSL_output_material_storage_location); 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_set_field_property_C()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MG_material' + lv_counter;
        var MG_material = document.getElementById(lv_field_name);
        MG_material.disabled = false;

        lv_field_name = 'MG_material_type' + lv_counter;
        var MG_material_type = document.getElementById(lv_field_name);
        MG_material_type.disabled = false;

        lv_field_name = 'MG_material_description' + lv_counter;
        var MG_material_description = document.getElementById(lv_field_name);
        MG_material_description.disabled = false;        

        lv_field_name = 'MG_base_UOM' + lv_counter;        
        var MG_base_UOM = document.getElementById(lv_field_name);
        MG_base_UOM.disabled = false;

        lv_field_name = 'MG_material_group' + lv_counter;        
        var MG_material_group = document.getElementById(lv_field_name);
        MG_material_group.disabled = false;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_field_property_C()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MP_material' + lv_counter;
        var MP_material = document.getElementById(lv_field_name);
        MP_material.disabled = false;

        lv_field_name = 'MP_plant' + lv_counter;
        var MP_plant = document.getElementById(lv_field_name);
        MP_plant.disabled = false;

        lv_field_name = 'MP_reorder_point' + lv_counter;
        var MP_reorder_point = document.getElementById(lv_field_name);
        MP_reorder_point.disabled = false;        

        lv_field_name = 'MP_moving_average_price' + lv_counter;        
        var MP_moving_average_price = document.getElementById(lv_field_name);
        MP_moving_average_price.disabled = false;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_field_property_C()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MSL_material' + lv_counter;
        var MSL_material = document.getElementById(lv_field_name);
        MSL_material.disabled = false;

        lv_field_name = 'MSL_plant' + lv_counter;
        var MSL_plant = document.getElementById(lv_field_name);
        MSL_plant.disabled = false;

        lv_field_name = 'MSL_storage_location' + lv_counter;
        var MSL_storage_location = document.getElementById(lv_field_name);
        MSL_storage_location.disabled = false;        

        lv_field_name = 'MSL_storage_bin' + lv_counter;        
        var MSL_storage_bin = document.getElementById(lv_field_name);
        MSL_storage_bin.disabled = false;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_set_field_property_R()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MG_material' + lv_counter;
        var MG_material = document.getElementById(lv_field_name);
        MG_material.disabled = false;

        lv_field_name = 'MG_material_type' + lv_counter;
        var MG_material_type = document.getElementById(lv_field_name);
        MG_material_type.disabled = true;

        lv_field_name = 'MG_material_description' + lv_counter;
        var MG_material_description = document.getElementById(lv_field_name);
        MG_material_description.disabled = true;        

        lv_field_name = 'MG_base_UOM' + lv_counter;        
        var MG_base_UOM = document.getElementById(lv_field_name);
        MG_base_UOM.disabled = true;

        lv_field_name = 'MG_material_group' + lv_counter;        
        var MG_material_group = document.getElementById(lv_field_name);
        MG_material_group.disabled = true;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_field_property_R()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MP_material' + lv_counter;
        var MP_material = document.getElementById(lv_field_name);
        MP_material.disabled = false;

        lv_field_name = 'MP_plant' + lv_counter;
        var MP_plant = document.getElementById(lv_field_name);
        MP_plant.disabled = false;

        lv_field_name = 'MP_reorder_point' + lv_counter;
        var MP_reorder_point = document.getElementById(lv_field_name);
        MP_reorder_point.disabled = true;        

        lv_field_name = 'MP_moving_average_price' + lv_counter;        
        var MP_moving_average_price = document.getElementById(lv_field_name);
        MP_moving_average_price.disabled = true;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_field_property_R()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MSL_material' + lv_counter;
        var MSL_material = document.getElementById(lv_field_name);
        MSL_material.disabled = false;

        lv_field_name = 'MSL_plant' + lv_counter;
        var MSL_plant = document.getElementById(lv_field_name);
        MSL_plant.disabled = false;

        lv_field_name = 'MSL_storage_location' + lv_counter;
        var MSL_storage_location = document.getElementById(lv_field_name);
        MSL_storage_location.disabled = false;        

        lv_field_name = 'MSL_storage_bin' + lv_counter;        
        var MSL_storage_bin = document.getElementById(lv_field_name);
        MSL_storage_bin.disabled = true;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_set_field_property_U()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MG_material' + lv_counter;
        var MG_material = document.getElementById(lv_field_name);
        MG_material.disabled = false;

        lv_field_name = 'MG_material_type' + lv_counter;
        var MG_material_type = document.getElementById(lv_field_name);
        MG_material_type.disabled = true;

        lv_field_name = 'MG_material_description' + lv_counter;
        var MG_material_description = document.getElementById(lv_field_name);
        MG_material_description.disabled = false;        

        lv_field_name = 'MG_base_UOM' + lv_counter;        
        var MG_base_UOM = document.getElementById(lv_field_name);
        MG_base_UOM.disabled = true;

        lv_field_name = 'MG_material_group' + lv_counter;        
        var MG_material_group = document.getElementById(lv_field_name);
        MG_material_group.disabled = false;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_field_property_U()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MP_material' + lv_counter;
        var MP_material = document.getElementById(lv_field_name);
        MP_material.disabled = false;

        lv_field_name = 'MP_plant' + lv_counter;
        var MP_plant = document.getElementById(lv_field_name);
        MP_plant.disabled = false;

        lv_field_name = 'MP_reorder_point' + lv_counter;
        var MP_reorder_point = document.getElementById(lv_field_name);
        MP_reorder_point.disabled = false;        

        lv_field_name = 'MP_moving_average_price' + lv_counter;        
        var MP_moving_average_price = document.getElementById(lv_field_name);
        MP_moving_average_price.disabled = false;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_field_property_U()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MSL_material' + lv_counter;
        var MSL_material = document.getElementById(lv_field_name);
        MSL_material.disabled = false;

        lv_field_name = 'MSL_plant' + lv_counter;
        var MSL_plant = document.getElementById(lv_field_name);
        MSL_plant.disabled = false;

        lv_field_name = 'MSL_storage_location' + lv_counter;
        var MSL_storage_location = document.getElementById(lv_field_name);
        MSL_storage_location.disabled = false;        

        lv_field_name = 'MSL_storage_bin' + lv_counter;        
        var MSL_storage_bin = document.getElementById(lv_field_name);
        MSL_storage_bin.disabled = false;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_set_field_property_D()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MG_material' + lv_counter;
        var MG_material = document.getElementById(lv_field_name);
        MG_material.disabled = false;

        lv_field_name = 'MG_material_type' + lv_counter;
        var MG_material_type = document.getElementById(lv_field_name);
        MG_material_type.disabled = true;

        lv_field_name = 'MG_material_description' + lv_counter;
        var MG_material_description = document.getElementById(lv_field_name);
        MG_material_description.disabled = true;        

        lv_field_name = 'MG_base_UOM' + lv_counter;        
        var MG_base_UOM = document.getElementById(lv_field_name);
        MG_base_UOM.disabled = true;

        lv_field_name = 'MG_material_group' + lv_counter;        
        var MG_material_group = document.getElementById(lv_field_name);
        MG_material_group.disabled = true;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_set_field_property_D()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MP_material' + lv_counter;
        var MP_material = document.getElementById(lv_field_name);
        MP_material.disabled = false;

        lv_field_name = 'MP_plant' + lv_counter;
        var MP_plant = document.getElementById(lv_field_name);
        MP_plant.disabled = false;

        lv_field_name = 'MP_reorder_point' + lv_counter;
        var MP_reorder_point = document.getElementById(lv_field_name);
        MP_reorder_point.disabled = true;        

        lv_field_name = 'MP_moving_average_price' + lv_counter;        
        var MP_moving_average_price = document.getElementById(lv_field_name);
        MP_moving_average_price.disabled = true;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_field_property_D()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MSL_material' + lv_counter;
        var MSL_material = document.getElementById(lv_field_name);
        MSL_material.disabled = false;

        lv_field_name = 'MSL_plant' + lv_counter;
        var MSL_plant = document.getElementById(lv_field_name);
        MSL_plant.disabled = false;

        lv_field_name = 'MSL_storage_location' + lv_counter;
        var MSL_storage_location = document.getElementById(lv_field_name);
        MSL_storage_location.disabled = false;        

        lv_field_name = 'MSL_storage_bin' + lv_counter;        
        var MSL_storage_bin = document.getElementById(lv_field_name);
        MSL_storage_bin.disabled = true;       
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_screen_input_C(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_material_description = '',
        lv_field_name_material_type = '',
        lv_field_name_base_UOM = '',
        lv_field_name_material_group = '';

    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MG_material' + (lv_counter + 1);
        lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
        lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
        lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
        lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MG_input_material_general[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            material_type : document.getElementById(lv_field_name_material_type).value,
            material_description : document.getElementById(lv_field_name_material_description).value,
            base_UOM : document.getElementById(lv_field_name_base_UOM).value,
            material_group : document.getElementById(lv_field_name_material_group).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MG_input_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_screen_input_C(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_reorder_point = '',
        lv_field_name_moving_average_price = '';

    var ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MP_material' + (lv_counter + 1);
        lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
        lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
        lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MP_input_material_plant[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            reorder_point : document.getElementById(lv_field_name_reorder_point).value,
            moving_average_price : document.getElementById(lv_field_name_moving_average_price).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MP_input_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_screen_input_C(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_storage_bin = '';

    var ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MSL_material' + (lv_counter + 1);
        lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
        lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MSL_input_material_storage_location[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            storage_bin : document.getElementById(lv_field_name_storage_bin).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MSL_input_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_output_screen_C(it_MG_output_material_general)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_material_description = '',
    lv_field_name_material_type = '',
    lv_field_name_base_UOM = '',
    lv_field_name_material_group = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MG_output_material_general.length)
        {
            lv_field_name_material = 'MG_material' + (lv_counter + 1);
            lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
            lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
            lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
            lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MG_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MG_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MG_output_material_general[lv_counter].material;
            document.getElementById(lv_field_name_material_type).value = it_MG_output_material_general[lv_counter].material_type;
            document.getElementById(lv_field_name_material_description).value = it_MG_output_material_general[lv_counter].material_description;
            document.getElementById(lv_field_name_base_UOM).value = it_MG_output_material_general[lv_counter].base_UOM;
            document.getElementById(lv_field_name_material_group).value = it_MG_output_material_general[lv_counter].material_group;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MG_output_material_general[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MG_output_material_general[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_output_screen_C(it_MP_output_material_plant)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_reorder_point = '',
    lv_field_name_moving_average_price = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MP_output_material_plant.length)
        {
            lv_field_name_material = 'MP_material' + (lv_counter + 1);
            lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
            lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
            lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MP_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MP_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MP_output_material_plant[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MP_output_material_plant[lv_counter].plant;
            document.getElementById(lv_field_name_reorder_point).value = it_MP_output_material_plant[lv_counter].reorder_point;
            document.getElementById(lv_field_name_moving_average_price).value = it_MP_output_material_plant[lv_counter].moving_average_price;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MP_output_material_plant[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MP_output_material_plant[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_output_screen_C(it_MSL_output_material_storage_location)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_storage_location = '',
    lv_field_name_storage_bin = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MSL_output_material_storage_location.length)
        {
            lv_field_name_material = 'MSL_material' + (lv_counter + 1);
            lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
            lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MSL_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MSL_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MSL_output_material_storage_location[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MSL_output_material_storage_location[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MSL_output_material_storage_location[lv_counter].storage_location;
            document.getElementById(lv_field_name_storage_bin).value = it_MSL_output_material_storage_location[lv_counter].storage_bin;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_screen_input_R(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_material_description = '',
        lv_field_name_material_type = '',
        lv_field_name_base_UOM = '',
        lv_field_name_material_group = '';

    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MG_material' + (lv_counter + 1);
        lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
        lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
        lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
        lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MG_input_material_general[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MG_input_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_screen_input_R(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_reorder_point = '',
        lv_field_name_moving_average_price = '';

    var ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MP_material' + (lv_counter + 1);
        lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
        lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
        lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MP_input_material_plant[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MP_input_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_screen_input_R(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_storage_bin = '';

    var ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MSL_material' + (lv_counter + 1);
        lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
        lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MSL_input_material_storage_location[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MSL_input_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_output_screen_R(it_MG_output_material_general)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_material_description = '',
    lv_field_name_material_type = '',
    lv_field_name_base_UOM = '',
    lv_field_name_material_group = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MG_output_material_general.length)
        {
            lv_field_name_material = 'MG_material' + (lv_counter + 1);
            lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
            lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
            lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
            lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MG_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MG_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MG_output_material_general[lv_counter].material;
            document.getElementById(lv_field_name_material_type).value = it_MG_output_material_general[lv_counter].material_type;
            document.getElementById(lv_field_name_material_description).value = it_MG_output_material_general[lv_counter].material_description;
            document.getElementById(lv_field_name_base_UOM).value = it_MG_output_material_general[lv_counter].base_UOM;
            document.getElementById(lv_field_name_material_group).value = it_MG_output_material_general[lv_counter].material_group;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MG_output_material_general[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MG_output_material_general[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_output_screen_R(it_MP_output_material_plant)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_reorder_point = '',
    lv_field_name_moving_average_price = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MP_output_material_plant.length)
        {
            lv_field_name_material = 'MP_material' + (lv_counter + 1);
            lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
            lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
            lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MP_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MP_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MP_output_material_plant[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MP_output_material_plant[lv_counter].plant;
            document.getElementById(lv_field_name_reorder_point).value = it_MP_output_material_plant[lv_counter].reorder_point;
            document.getElementById(lv_field_name_moving_average_price).value = it_MP_output_material_plant[lv_counter].moving_average_price;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MP_output_material_plant[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MP_output_material_plant[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_output_screen_R(it_MSL_output_material_storage_location)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_storage_location = '',
    lv_field_name_storage_bin = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MSL_output_material_storage_location.length)
        {
            lv_field_name_material = 'MSL_material' + (lv_counter + 1);
            lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
            lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MSL_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MSL_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MSL_output_material_storage_location[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MSL_output_material_storage_location[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MSL_output_material_storage_location[lv_counter].storage_location;
            document.getElementById(lv_field_name_storage_bin).value = it_MSL_output_material_storage_location[lv_counter].storage_bin;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_screen_input_U(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_material_description = '',
        lv_field_name_material_type = '',
        lv_field_name_base_UOM = '',
        lv_field_name_material_group = '';

    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MG_material' + (lv_counter + 1);
        lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
        lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
        lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
        lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MG_input_material_general[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            material_type : document.getElementById(lv_field_name_material_type).value,
            material_description : document.getElementById(lv_field_name_material_description).value,
            base_UOM : document.getElementById(lv_field_name_base_UOM).value,
            material_group : document.getElementById(lv_field_name_material_group).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MG_input_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_screen_input_U(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_reorder_point = '',
        lv_field_name_moving_average_price = '';

    var ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MP_material' + (lv_counter + 1);
        lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
        lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
        lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MP_input_material_plant[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            reorder_point : document.getElementById(lv_field_name_reorder_point).value,
            moving_average_price : document.getElementById(lv_field_name_moving_average_price).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MP_input_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_screen_input_U(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_storage_bin = '';

    var ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MSL_material' + (lv_counter + 1);
        lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
        lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MSL_input_material_storage_location[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            storage_bin : document.getElementById(lv_field_name_storage_bin).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MSL_input_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_output_screen_U(it_MG_output_material_general)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_material_description = '',
    lv_field_name_material_type = '',
    lv_field_name_base_UOM = '',
    lv_field_name_material_group = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MG_output_material_general.length)
        {
            lv_field_name_material = 'MG_material' + (lv_counter + 1);
            lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
            lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
            lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
            lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MG_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MG_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MG_output_material_general[lv_counter].material;
            document.getElementById(lv_field_name_material_type).value = it_MG_output_material_general[lv_counter].material_type;
            document.getElementById(lv_field_name_material_description).value = it_MG_output_material_general[lv_counter].material_description;
            document.getElementById(lv_field_name_base_UOM).value = it_MG_output_material_general[lv_counter].base_UOM;
            document.getElementById(lv_field_name_material_group).value = it_MG_output_material_general[lv_counter].material_group;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MG_output_material_general[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MG_output_material_general[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_output_screen_U(it_MP_output_material_plant)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_reorder_point = '',
    lv_field_name_moving_average_price = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MP_output_material_plant.length)
        {
            lv_field_name_material = 'MP_material' + (lv_counter + 1);
            lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
            lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
            lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MP_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MP_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MP_output_material_plant[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MP_output_material_plant[lv_counter].plant;
            document.getElementById(lv_field_name_reorder_point).value = it_MP_output_material_plant[lv_counter].reorder_point;
            document.getElementById(lv_field_name_moving_average_price).value = it_MP_output_material_plant[lv_counter].moving_average_price;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MP_output_material_plant[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MP_output_material_plant[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_output_screen_U(it_MSL_output_material_storage_location)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_storage_location = '',
    lv_field_name_storage_bin = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MSL_output_material_storage_location.length)
        {
            lv_field_name_material = 'MSL_material' + (lv_counter + 1);
            lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
            lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MSL_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MSL_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MSL_output_material_storage_location[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MSL_output_material_storage_location[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MSL_output_material_storage_location[lv_counter].storage_location;
            document.getElementById(lv_field_name_storage_bin).value = it_MSL_output_material_storage_location[lv_counter].storage_bin;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_screen_input_D(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_material_description = '',
        lv_field_name_material_type = '',
        lv_field_name_base_UOM = '',
        lv_field_name_material_group = '';

    var ot_MG_input_material_general = structuredClone(tt_MG_input_material_general);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MG_material' + (lv_counter + 1);
        lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
        lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
        lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
        lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MG_input_material_general[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MG_input_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_screen_input_D(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_reorder_point = '',
        lv_field_name_moving_average_price = '';

    var ot_MP_input_material_plant = structuredClone(tt_MP_input_material_plant);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MP_material' + (lv_counter + 1);
        lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
        lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
        lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MP_input_material_plant[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MP_input_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_screen_input_D(iv_tenant)
{
    var lv_material = '',
        lv_counter = 0,
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_storage_bin = '';

    var ot_MSL_input_material_storage_location = structuredClone(tt_MSL_input_material_storage_location);

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material = 'MSL_material' + (lv_counter + 1);
        lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
        lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);

        lv_material = document.getElementById(lv_field_name_material).value;
        if ( lv_material != '')
        {
            ot_MSL_input_material_storage_location[lv_counter] =
            {
            tenant : iv_tenant,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MSL_input_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_output_screen_D(it_MG_output_material_general)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_material_description = '',
    lv_field_name_material_type = '',
    lv_field_name_base_UOM = '',
    lv_field_name_material_group = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MG_output_material_general.length)
        {
            lv_field_name_material = 'MG_material' + (lv_counter + 1);
            lv_field_name_material_type = 'MG_material_type' + (lv_counter + 1);
            lv_field_name_material_description = 'MG_material_description' + (lv_counter + 1);
            lv_field_name_base_UOM = 'MG_base_UOM' + (lv_counter + 1);
            lv_field_name_material_group = 'MG_material_group' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MG_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MG_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MG_output_material_general[lv_counter].material;
            document.getElementById(lv_field_name_material_type).value = it_MG_output_material_general[lv_counter].material_type;
            document.getElementById(lv_field_name_material_description).value = it_MG_output_material_general[lv_counter].material_description;
            document.getElementById(lv_field_name_base_UOM).value = it_MG_output_material_general[lv_counter].base_UOM;
            document.getElementById(lv_field_name_material_group).value = it_MG_output_material_general[lv_counter].material_group;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MG_output_material_general[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MG_output_material_general[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_output_screen_D(it_MP_output_material_plant)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_reorder_point = '',
    lv_field_name_moving_average_price = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MP_output_material_plant.length)
        {
            lv_field_name_material = 'MP_material' + (lv_counter + 1);
            lv_field_name_plant = 'MP_plant' + (lv_counter + 1);
            lv_field_name_reorder_point = 'MP_reorder_point' + (lv_counter + 1);
            lv_field_name_moving_average_price = 'MP_moving_average_price' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MP_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MP_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MP_output_material_plant[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MP_output_material_plant[lv_counter].plant;
            document.getElementById(lv_field_name_reorder_point).value = it_MP_output_material_plant[lv_counter].reorder_point;
            document.getElementById(lv_field_name_moving_average_price).value = it_MP_output_material_plant[lv_counter].moving_average_price;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MP_output_material_plant[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MP_output_material_plant[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_output_screen_D(it_MSL_output_material_storage_location)
{
    var lv_material = '',
    lv_counter = 0,
    lv_field_name_material = '',
    lv_field_name_plant = '',
    lv_field_name_storage_location = '',
    lv_field_name_storage_bin = '',
    lv_field_name_system_field_message_type = '',
    lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MSL_output_material_storage_location.length)
        {
            lv_field_name_material = 'MSL_material' + (lv_counter + 1);
            lv_field_name_plant = 'MSL_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MSL_storage_location' + (lv_counter + 1);
            lv_field_name_storage_bin = 'MSL_storage_bin' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MSL_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MSL_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material).value = it_MSL_output_material_storage_location[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MSL_output_material_storage_location[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MSL_output_material_storage_location[lv_counter].storage_location;
            document.getElementById(lv_field_name_storage_bin).value = it_MSL_output_material_storage_location[lv_counter].storage_bin;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MSL_output_material_storage_location[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}


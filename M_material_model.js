/*
    log information message too
    check child_D
*/

//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
var lt_MT_material_type = 
[
    {
        tenant : '',
        material_type : '',
        material_type_description : ''
    }
];

lt_MT_material_type = 
[
    { tenant : 'SUGUMAR', material_type : 'MT1', material_type_description : 'Material Type 1' },
    { tenant : 'SUGUMAR', material_type : 'MT2', material_type_description : 'Material Type 2' },
    { tenant : 'SUGUMAR', material_type : 'MT3', material_type_description : 'Material Type 3' },
    { tenant : 'SUGUMAR', material_type : 'MT4', material_type_description : 'Material Type 4' },

    { tenant : 'TEST', material_type : 'MT1', material_type_description : 'Material Type 1' },
    { tenant : 'TEST', material_type : 'MT2', material_type_description : 'Material Type 2' },
    { tenant : 'TEST', material_type : 'MT3', material_type_description : 'Material Type 3' },
    { tenant : 'TEST', material_type : 'MT4', material_type_description : 'Material Type 4' }    
];


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
var lt_UOM_unit_measure = 
[
    {
        tenant : '',
        UOM : '',
        UOM_description : ''
    }
];

lt_UOM_unit_measure = 
[
    { tenant : 'SUGUMAR', UOM : 'BUOM1', UOM_description : 'base UOM 1' },
    { tenant : 'SUGUMAR', UOM : 'BUOM2', UOM_description : 'base UOM 2' },
    { tenant : 'SUGUMAR', UOM : 'BUOM3', UOM_description : 'base UOM 3' },
    { tenant : 'SUGUMAR', UOM : 'BUOM4', UOM_description : 'base UOM 4' },

    { tenant : 'TEST', UOM : 'BUOM1', UOM_description : 'base UOM 1' },
    { tenant : 'TEST', UOM : 'BUOM2', UOM_description : 'base UOM 2' },
    { tenant : 'TEST', UOM : 'BUOM3', UOM_description : 'base UOM 3' },
    { tenant : 'TEST', UOM : 'BUOM4', UOM_description : 'base UOM 4' }    
];


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
var lt_P_plant = 
[
    {
        tenant : '',
        plant : '',
        plant_description : ''
    }
];

lt_P_plant = 
[
    { tenant : 'SUGUMAR', plant : 'P1', plant_description : 'Plant 1' },
    { tenant : 'SUGUMAR', plant : 'P2', plant_description : 'Plant 2' },

    { tenant : 'TEST', plant : 'P1', plant_description : 'Plant 1' },
    { tenant : 'TEST', plant : 'P2', plant_description : 'Plant 2' }    
];


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
var lt_SL_storage_location = 
[
    {
        tenant : '',
        plant : '',
        storage_location : '',
        storage_location_description : ''
    }
];

lt_SL_storage_location = 
[
    { tenant : 'SUGUMAR', plant : 'P1', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'SUGUMAR', plant : 'P1', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },
    { tenant : 'SUGUMAR', plant : 'P2', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'SUGUMAR', plant : 'P2', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },

    { tenant : 'TEST', plant : 'P1', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'TEST', plant : 'P1', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },
    { tenant : 'TEST', plant : 'P2', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'TEST', plant : 'P2', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },    
];


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
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


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
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


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
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


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_create_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var lv_tenant = '',
    lv_counter = 0;

    // lt_MT_material_type = [ { tenant : '', material_type : '', material_type_description : '' } ];

// Select data from database tables
    // MT_select_C();
    MG_select_C();
    MP_select_C();
    MSL_select_C();

// Material General    
    MG_copy_input_output_C(it_MG_input_material_general);
    for (lv_counter = 0; lv_counter < lt_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_C(lt_MG_output_material_general[lv_counter]);
        MG_check_material_general_C(lt_MG_material_general, lt_MG_output_material_general, lt_MG_output_material_general[lv_counter], lv_counter);
        MG_check_material_type_C(lt_MT_material_type, lt_MG_output_material_general[lv_counter]);
        MG_check_material_description_C(lt_MG_output_material_general[lv_counter]);
        MG_check_base_UOM_C(lt_UOM_unit_measure, lt_MG_output_material_general[lv_counter]); 
    }

// Material Plant
    MP_copy_input_output_C(it_MP_input_material_plant);
    for (lv_counter = 0; lv_counter < lt_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_C(lt_MP_output_material_plant[lv_counter]);
        MP_check_plant_C(lt_P_plant, lt_MP_output_material_plant[lv_counter]);
        MP_check_material_plant_C(lt_MP_material_plant, lt_MP_output_material_plant, lt_MP_output_material_plant[lv_counter], lv_counter);
        MP_check_parent_C(lt_MG_material_general, lt_MG_output_material_general, lt_MP_output_material_plant[lv_counter]);
    }

// Material Storage Location    
    MSL_copy_input_output_C(it_MSL_input_material_storage_location);
    for (lv_counter = 0; lv_counter < lt_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_C(lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_plant_C(lt_P_plant, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_storage_location_C(lt_SL_storage_location, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_material_storage_location_C(lt_MSL_material_storage_location, lt_MSL_output_material_storage_location, lt_MSL_output_material_storage_location[lv_counter], lv_counter); 
        MSL_check_parent_C(lt_MP_material_plant, lt_MP_output_material_plant, lt_MSL_output_material_storage_location[lv_counter]);  
    }

// Insert Data into database tables   

    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('lt_MG_material_general'); console.log(lt_MG_material_general);    
    console.log('lt_MG_output_material_general'); console.log(lt_MG_output_material_general);
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('lt_MP_material_plant'); console.log(lt_MP_material_plant);    
    console.log('lt_MP_output_material_plant'); console.log(lt_MP_output_material_plant);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('lt_MSL_material_storage_location'); console.log(lt_MSL_material_storage_location);    
    console.log('lt_MSL_output_material_storage_location'); console.log(lt_MSL_output_material_storage_location);   
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_read_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var lv_counter = 0;

// Select data from database tables    
    MG_select_R();
    MP_select_R();
    MSL_select_R();

// Material General    
    MG_copy_input_output_R(lt_MG_material_general, it_MG_input_material_general);
    for (var lv_counter = 0; lv_counter < lt_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_R(lt_MG_output_material_general[lv_counter]);
        MG_check_material_general_R(lt_MG_material_general, lt_MG_output_material_general, lt_MG_output_material_general[lv_counter], lv_counter);
    }

// Material Plant    
    MP_copy_input_output_R(lt_MP_material_plant, it_MP_input_material_plant);    
    for (var lv_counter = 0; lv_counter < lt_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_R(lt_MP_output_material_plant[lv_counter]);
        MP_check_plant_R(lt_P_plant, lt_MP_output_material_plant[lv_counter]);
        MP_check_material_plant_R(lt_MP_material_plant, lt_MP_output_material_plant, lt_MP_output_material_plant[lv_counter], lv_counter);
    }

// Material Storage Location    
    MSL_copy_input_output_R(lt_MSL_material_storage_location, it_MSL_input_material_storage_location);    
    for (var lv_counter = 0; lv_counter < lt_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_R(lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_plant_R(lt_P_plant, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_storage_location_R(lt_SL_storage_location, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_material_storage_location_R(lt_MSL_material_storage_location, lt_MSL_output_material_storage_location, lt_MSL_output_material_storage_location[lv_counter], lv_counter);
    }
      
    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('lt_MG_material_general'); console.log(lt_MG_material_general);    
    console.log('lt_MG_output_material_general'); console.log(lt_MG_output_material_general);
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('lt_MP_material_plant'); console.log(lt_MP_material_plant);    
    console.log('lt_MP_output_material_plant'); console.log(lt_MP_output_material_plant);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('lt_MSL_material_storage_location'); console.log(lt_MSL_material_storage_location);    
    console.log('lt_MSL_output_material_storage_location'); console.log(lt_MSL_output_material_storage_location);    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_update_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var lv_counter = 0;

// Select data from database tables   
    MG_select_U();
    MP_select_U();
    MSL_select_U();

// Material General    
    MG_copy_input_output_U(it_MG_input_material_general);
    for (var lv_counter = 0; lv_counter < lt_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_U(lt_MG_output_material_general[lv_counter]);
        MG_check_material_general_U(lt_MG_material_general, lt_MG_output_material_general, lt_MG_output_material_general[lv_counter], lv_counter);
    }

// Material Plant    
    MP_copy_input_output_U(it_MP_input_material_plant);    
    for (var lv_counter = 0; lv_counter < lt_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_U(lt_MP_output_material_plant[lv_counter]);
        MP_check_plant_U(lt_P_plant, lt_MP_output_material_plant[lv_counter]);
        MP_check_material_plant_U(lt_MP_material_plant, lt_MP_output_material_plant, lt_MP_output_material_plant[lv_counter], lv_counter);
    }

// Material Storage Location    
    MSL_copy_input_output_U(it_MSL_input_material_storage_location);    
    for (var lv_counter = 0; lv_counter < lt_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_U(lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_plant_U(lt_P_plant, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_storage_location_U(lt_SL_storage_location, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_material_storage_location_U(lt_MSL_material_storage_location, lt_MSL_output_material_storage_location, lt_MSL_output_material_storage_location[lv_counter], lv_counter);
    }

// update database table data

    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('lt_MG_material_general'); console.log(lt_MG_material_general);    
    console.log('lt_MG_output_material_general'); console.log(lt_MG_output_material_general);
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('lt_MP_material_plant'); console.log(lt_MP_material_plant);    
    console.log('lt_MP_output_material_plant'); console.log(lt_MP_output_material_plant);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('lt_MSL_material_storage_location'); console.log(lt_MSL_material_storage_location);    
    console.log('lt_MSL_output_material_storage_location'); console.log(lt_MSL_output_material_storage_location);     
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_delete_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var lv_counter = 0;


// Select data from database tables   
    MG_select_D();
    MP_select_D();
    MSL_select_D();

// Material Storage Location    
    MSL_copy_input_output_D(lt_MSL_material_storage_location, it_MSL_input_material_storage_location);    
    for (var lv_counter = 0; lv_counter < lt_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_D(lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_plant_D(lt_P_plant, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_storage_location_D(lt_SL_storage_location, lt_MSL_output_material_storage_location[lv_counter]);
        MSL_check_material_storage_location_D(lt_MSL_material_storage_location, lt_MSL_output_material_storage_location, lt_MSL_output_material_storage_location[lv_counter], lv_counter);
    }

// Material Plant    
    MP_copy_input_output_D(lt_MP_material_plant, it_MP_input_material_plant);    
    for (var lv_counter = 0; lv_counter < lt_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_D(lt_MP_output_material_plant[lv_counter]);
        MP_check_plant_D(lt_P_plant, lt_MP_output_material_plant[lv_counter]);
        MP_check_material_plant_D(lt_MP_material_plant, lt_MP_output_material_plant, lt_MP_output_material_plant[lv_counter], lv_counter);
        MP_check_child_D(lt_MSL_material_storage_location, lt_MSL_output_material_storage_location, lt_MP_output_material_plant[lv_counter]);                                    // ???? check all child records
    }

// Material General    
    MG_copy_input_output_D(lt_MG_material_general, it_MG_input_material_general);
    for (var lv_counter = 0; lv_counter < lt_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_D(lt_MG_output_material_general[lv_counter]);
        MG_check_material_general_D(lt_MG_material_general, lt_MG_output_material_general, lt_MG_output_material_general[lv_counter], lv_counter);
        MG_check_child_D(lt_MP_material_plant, lt_MP_output_material_plant, lt_MG_output_material_general[lv_counter]);                                  // ???? check all child records
    }

// Delete data from database tables    

    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('lt_MG_material_general'); console.log(lt_MG_material_general);    
    console.log('lt_MG_output_material_general'); console.log(lt_MG_output_material_general);
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('lt_MP_material_plant'); console.log(lt_MP_material_plant);    
    console.log('lt_MP_output_material_plant'); console.log(lt_MP_output_material_plant);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('lt_MSL_material_storage_location'); console.log(lt_MSL_material_storage_location);    
    console.log('lt_MSL_output_material_storage_location'); console.log(lt_MSL_output_material_storage_location);    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MT_select_C()
{
    lt_MT_material_type = 
    [
        { tenant : 'SUGUMAR', material_type : 'RM', material_type_description : 'Raw Material' },
        { tenant : 'SUGUMAR', material_type : 'SFM', material_type_description : 'Semi Finish Material' },
        { tenant : 'SUGUMAR', material_type : 'FM', material_type_description : 'Finish Material' }
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_select_C()
{
    lt_MG_material_general = 
    [
        { tenant : 'SUGUMAR', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' }        
    ];  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_select_C()
{
    lt_MP_material_plant = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''},
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'TEST', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''}        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_select_C()
{
    lt_MSL_material_storage_location = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' }        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_input_output_C(it_MG_input_material_general)
{
    lt_MG_output_material_general = it_MG_input_material_general;    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_tenant_C(c_MG_output_material_general)
{
    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.tenant == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_general_C(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MG_output_material_general.material == '')
    {

    }
    else  
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (i_counter + 1) ; lv_counter < it_MG_output_material_general.length; lv_counter = lv_counter + 1)
            {
                if (it_MG_output_material_general[lv_counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_output_material_general[lv_counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MG_output_material_general.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MG_material_general.length; lv_counter = lv_counter + 1)
            {
                if (it_MG_material_general[lv_counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_material_general[lv_counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General already exist';
            }
            else
            {

            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_description_C(c_MG_output_material_general)
{
    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.material_description == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material Description does not have data';
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_type_C(it_MT_material_type, c_MG_output_material_general)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.material_type == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material Type does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_MT_material_type.length; lv_counter = lv_counter + 1)
                {
                    if (it_MT_material_type[lv_counter].tenant == c_MG_output_material_general.tenant &&
                        it_MT_material_type[lv_counter].material_type == c_MG_output_material_general.material_type)
                    {
                        lv_record_exist = 'X';
                        // break                                                                                      ????
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Material Type does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_description_C(ct_MG_output_material_general)
{
    if (ct_MG_output_material_general.material == '')
    {

    }
    else
    {    
        if (ct_MG_output_material_general.system_field_message_type == '')
        {        
            if (ct_MG_output_material_general.material_description == '')
            {

                ct_MG_output_material_general.system_field_message_type = 'ERROR';
                ct_MG_output_material_general.system_field_message_description = 'Material Description does not have data';
            }
        }
    }   
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_base_UOM_C(it_UOM_unit_measure, c_MG_output_material_general)
{
    var lv_record_exist = '',
    lv_counter = 0;

    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {    
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.base_UOM == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Base UOM does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_UOM_unit_measure.length; lv_counter = lv_counter + 1)
                {
                    if (it_UOM_unit_measure[lv_counter].tenant == c_MG_output_material_general.tenant &&
                        it_UOM_unit_measure[lv_counter].UOM == c_MG_output_material_general.base_UOM)
                    {
                        lv_record_exist = 'X';
                        // break                                                                                ????
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Base UOM does not exist';
                }
            }        
        }
    }   
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_input_output_C(it_MP_input_material_plant)
{
    lt_MP_output_material_plant = it_MP_input_material_plant;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_tenant_C(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_plant_C(it_P_plant, c_MP_output_material_plant)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.plant == '' )
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Plant does not have data';
            }

            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_material_plant_C(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MP_output_material_plant.material == '')
    {

    }
    else  
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = (i_counter + 1) ; lv_counter < it_MP_output_material_plant.length; lv_counter = lv_counter + 1)
            {
                if (it_MP_output_material_plant[lv_counter].material == c_MP_output_material_plant.material &&
                    it_MP_output_material_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_output_material_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }


        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MP_material_plant.length; lv_counter = lv_counter + 1)
            {
                if (it_MP_material_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_material_plant[lv_counter].material == c_MP_output_material_plant.material &&
                    it_MP_material_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant already exist';
            }
            else
            {

            }
        }  
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_parent_C(it_MG_material_general, it_MG_output_material_general, c_MP_output_material_plant)
{
    var lv_record_exist = '';

    if (c_MP_output_material_plant.material == '')
    {

    }
    else  
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            for (counter = 0; counter < it_MG_material_general.length; counter = counter + 1)
            {
                if (it_MG_material_general[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MG_material_general[counter].material == c_MP_output_material_plant.material)
                {
                    lv_record_exist = 'X';
                }
            }

            for (counter = 0; counter < it_MG_output_material_general.length; counter = counter + 1)
            {
                if (it_MG_output_material_general[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MG_output_material_general[counter].material == c_MP_output_material_plant.material &&
                    it_MG_output_material_general[counter].system_field_message_type == '')                     // ****
                {
                    lv_record_exist = 'X';
                }
            }
            
            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Parent (Material General) does not exist';
            }
        }
    }
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_input_output_C(it_MSL_input_material_storage_location)
{
    lt_MSL_output_material_storage_location = it_MSL_input_material_storage_location;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_tenant_C(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_plant_C(it_P_plant, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.plant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        // break                                                                                                ????
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_storage_location_C(it_SL_storage_location, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.storage_location == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not have';
            }

            else
            {
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                }
            }
        }    
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_material_storage_location_C(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else 
    {  
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = (i_counter + 1) ; lv_counter < it_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
            {
                if (it_MSL_output_material_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_output_material_storage_location[lv_counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_output_material_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_output_material_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MSL_material_storage_location.length; lv_counter = lv_counter + 1)
            {
                if (it_MSL_material_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_material_storage_location[lv_counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_material_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_material_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage Location already exist';
            }
            else
            {

            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_parent_C(it_MP_material_plant, it_MP_output_material_plant, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '';

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
        {
            if (c_MSL_output_material_storage_location.system_field_message_type == '')
            {
                for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
                {
                    if (it_MP_material_plant[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_MP_material_plant[counter].material == c_MSL_output_material_storage_location.material &&
                        it_MP_material_plant[counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                for (counter = 0; counter < it_MP_output_material_plant.length; counter = counter + 1)
                {
                    if (it_MP_output_material_plant[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_MP_output_material_plant[counter].material == c_MSL_output_material_storage_location.material &&
                        it_MP_output_material_plant[counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_MP_output_material_plant[counter].system_field_message_type == '')
                    {
                        lv_record_exist = 'X';
                    }
                }
            
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Parent (Material Plant) does not exist';
                }
           }
        }   
    }   


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_select_R()
{
    lt_MG_material_general = 
    [
        { tenant : 'SUGUMAR', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' }        
    ];  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_select_R()
{
    lt_MP_material_plant = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''},
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'TEST', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''}        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_select_R()
{
    lt_MSL_material_storage_location = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' }        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_input_output_R(it_MG_material_general, it_MG_input_material_general)
{
    var lv_database_counter = 0,
        lv_output_counter = 0;

    if (it_MG_input_material_general[0].material == '*')
    {
        for (lv_database_counter = 0; lv_database_counter < it_MG_material_general.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MG_material_general[lv_database_counter].tenant == it_MG_input_material_general[0].tenant)
            {
                lt_MG_output_material_general[lv_output_counter] = it_MG_material_general[lv_database_counter];
                lv_output_counter = lv_output_counter + 1;
            }
        }
    }
    else
    {
        lt_MG_output_material_general = it_MG_input_material_general;
    }

    for (lv_output_counter = 0; lv_output_counter < lt_MG_output_material_general.length; lv_output_counter = lv_output_counter + 1)
    {
        for (lv_database_counter = 0; lv_database_counter < it_MG_material_general.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MG_material_general[lv_database_counter].tenant == lt_MG_output_material_general[lv_output_counter].tenant &&
                it_MG_material_general[lv_database_counter].material == lt_MG_output_material_general[lv_output_counter].material)
            {
                lt_MG_output_material_general[lv_output_counter] = it_MG_material_general[lv_database_counter];
            }
        }
    }            
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_tenant_R(c_MG_output_material_general)
{
    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.tenant == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_general_R(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MG_output_material_general.length; counter = counter + 1)
            {
                if (it_MG_output_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_output_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MG_output_material_general.system_field_message_type == '')
        {   
            lv_record_exist = '';
            for (counter = 0; counter < it_MG_material_general.length; counter = counter + 1)
            {
                if (it_MG_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
            }
        }            
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_input_output_R(it_MP_material_plant, it_MP_input_material_plant)
{
    var lv_database_counter = 0,
        lv_output_counter = 0;

    if (it_MP_input_material_plant[0].material == '*' &&
        it_MP_input_material_plant[0].plant == '*')
    {
        for (lv_database_counter = 0; lv_database_counter < it_MP_material_plant.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MP_material_plant[lv_database_counter].tenant == it_MP_input_material_plant[0].tenant)
                {
                    lt_MP_output_material_plant[lv_output_counter] = it_MP_material_plant[lv_database_counter];
                    lv_output_counter = lv_output_counter + 1;
                }
            }
    }
    else
    {
        lt_MP_output_material_plant = it_MP_input_material_plant;
    }

    for (lv_output_counter = 0; lv_output_counter < lt_MP_output_material_plant.length; lv_output_counter = lv_output_counter + 1)
    {
        for (lv_database_counter = 0; lv_database_counter < it_MP_material_plant.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MP_material_plant[lv_database_counter].tenant == lt_MP_output_material_plant[lv_output_counter].tenant &&
                it_MP_material_plant[lv_database_counter].material == lt_MP_output_material_plant[lv_output_counter].material &&
                it_MP_material_plant[lv_database_counter].plant == lt_MP_output_material_plant[lv_output_counter].plant)
            {
                lt_MP_output_material_plant[lv_output_counter] = it_MP_material_plant[lv_database_counter];
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_tenant_R(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_plant_R(it_P_plant, c_MP_output_material_plant)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.plant == '' )
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Plant does not have data';
            }

            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_material_plant_R(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MP_output_material_plant.material == '')  
    {

    }
    else
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MP_output_material_plant.length; counter = counter + 1)
            {
                if (it_MP_output_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_output_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_output_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
            {
                if (it_MP_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
            }
        }   
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_input_output_R(it_MSL_material_storage_location, it_MSL_input_material_storage_location)
{
    var lv_database_counter = 0,
        lv_output_counter = 0;

    if (it_MSL_input_material_storage_location[0].material == '*' &&
        it_MSL_input_material_storage_location[0].plant == '*' &&
        it_MSL_input_material_storage_location[0].storage_location == '*')
    {
        for (lv_database_counter = 0; lv_database_counter < it_MSL_material_storage_location.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MSL_material_storage_location[lv_database_counter].tenant == it_MSL_input_material_storage_location[0].tenant)
                {
                    lt_MSL_output_material_storage_location[lv_output_counter] = it_MSL_material_storage_location[lv_database_counter];
                    lv_output_counter = lv_output_counter + 1;
                }
            }
    }
    else
    {
        lt_MSL_output_material_storage_location = it_MSL_input_material_storage_location;
    }

    for (lv_output_counter = 0; lv_output_counter < lt_MSL_output_material_storage_location.length; lv_output_counter = lv_output_counter + 1)
    {
        for (lv_database_counter = 0; lv_database_counter < it_MSL_material_storage_location.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MSL_material_storage_location[lv_database_counter].tenant == lt_MSL_output_material_storage_location[lv_output_counter].tenant &&
                it_MSL_material_storage_location[lv_database_counter].material == lt_MSL_output_material_storage_location[lv_output_counter].material &&
                it_MSL_material_storage_location[lv_database_counter].plant == lt_MSL_output_material_storage_location[lv_output_counter].plant &&
                it_MSL_material_storage_location[lv_database_counter].storage_location == lt_MSL_output_material_storage_location[lv_output_counter].storage_location)
            {
                lt_MSL_output_material_storage_location[lv_output_counter] = it_MSL_material_storage_location[lv_database_counter];
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_tenant_R(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_plant_R(it_P_plant, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.plant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                }
            }
        }    
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_storage_location_R(it_SL_storage_location, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.storage_location == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_material_storage_location_R(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MSL_output_material_storage_location.material == '')  
    {

    }
    else
    {  
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MSL_output_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_output_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_output_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_output_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_output_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = 'X'
            for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
            }
        }  
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_select_U()
{
    lt_MG_material_general = 
    [
        { tenant : 'SUGUMAR', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' }        
    ];  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_select_U()
{
    lt_MP_material_plant = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''},
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'TEST', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''}        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_select_U()
{
    lt_MSL_material_storage_location = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' }        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_input_output_U(it_MG_input_material_general)
{
    lt_MG_output_material_general = it_MG_input_material_general;           // ????
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_tenant_U(c_MG_output_material_general)
{
    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.tenant == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_general_U(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MG_output_material_general.material == '')  
    {

    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MG_output_material_general.length; counter = counter + 1)
            {
                if (it_MG_output_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_output_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MG_output_material_general.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MG_material_general.length; counter = counter + 1)
            {
                if (it_MG_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
            }
        }    
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_input_output_U(it_MP_input_material_plant)
{
    lt_MP_output_material_plant = it_MP_input_material_plant;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_tenant_U(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_plant_U(it_P_plant, c_MP_output_material_plant)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.plant == '' )
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Plant does not have data';
            }

            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_material_plant_U(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MP_output_material_plant.material == '')  
    {

    }
    else
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MP_output_material_plant.length; counter = counter + 1)
            {
                if (it_MP_output_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_output_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_output_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
            {
                if (it_MP_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
            }
        }   
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_input_output_U(it_MSL_input_material_storage_location)
{
    lt_MSL_output_material_storage_location = it_MSL_input_material_storage_location;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_tenant_U(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_plant_U(it_P_plant, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.plant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not have data';
            }

            else
            {
                for (lv_counter = 0; lv_counter < lt_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (lt_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        lt_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_storage_location_U(it_SL_storage_location, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.storage_location == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else                
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_material_storage_location_U(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MSL_output_material_storage_location.material == '')  
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')  
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MSL_output_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_output_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_output_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_output_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_output_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_select_D()
{
    lt_MG_material_general = 
    [
        { tenant : 'SUGUMAR', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' }        
    ]; 
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_select_D()
{
    lt_MP_material_plant = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''},
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'TEST', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''}        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_select_D()
{
    lt_MSL_material_storage_location = 
    [
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' },
        
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', system_field_message_type : '', system_field_message_description : '' },    
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', system_field_message_type : '', system_field_message_description : '' }        
    ];
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_input_output_D(it_MSL_material_storage_location, it_MSL_input_material_storage_location)
{
    var counter = 0,
        counter_output = 0;

    if (it_MSL_input_material_storage_location[0].material == '*' &&
        it_MSL_input_material_storage_location[0].plant == '*' &&
        it_MSL_input_material_storage_location[0].storage_location == '*')
    {
        lt_MSL_output_material_storage_location = it_MSL_material_storage_location;
    }
    else
    {
        lt_MSL_output_material_storage_location = it_MSL_input_material_storage_location;
    }

    for (counter_output = 0; counter_output < lt_MSL_output_material_storage_location.length; counter_output = counter_output + 1)
    {
        for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
        {
            if (it_MSL_material_storage_location[counter].tenant == lt_MSL_output_material_storage_location[counter_output].tenant &&
                it_MSL_material_storage_location[counter].material == lt_MSL_output_material_storage_location[counter_output].material &&
                it_MSL_material_storage_location[counter].plant == lt_MSL_output_material_storage_location[counter_output].plant &&
                it_MSL_material_storage_location[counter].storage_location == lt_MSL_output_material_storage_location[counter_output].storage_location)
            {
                lt_MSL_output_material_storage_location[counter_output] = it_MSL_material_storage_location[counter];
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_tenant_D(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_plant_D(it_P_plant, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.plant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        // break                                                                                    ????
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_storage_location_D(it_SL_storage_location, c_MSL_output_material_storage_location)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.storage_location == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not have data';
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_check_material_storage_location_D(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MSL_output_material_storage_location.material == '')  
    {

    }
    else
    { 
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MSL_output_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_output_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_output_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_output_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_output_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_input_output_D(it_MP_material_plant, it_MP_input_material_plant)
{
    var counter = 0,
        counter_output = 0;

    if (it_MP_input_material_plant[0].material == '*' &&
        it_MP_input_material_plant[0].plant == '*')
    {
        lt_MP_output_material_plant = it_MP_material_plant;
    }
    else
    {
        lt_MP_output_material_plant = it_MP_input_material_plant;
    }

    for (counter_output = 0; counter_output < lt_MP_output_material_plant.length; counter_output = counter_output + 1)
    {
        for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
        {
            if (it_MP_material_plant[counter].tenant == lt_MP_output_material_plant[counter_output].tenant &&
                it_MP_material_plant[counter].material == lt_MP_output_material_plant[counter_output].material &&
                it_MP_material_plant[counter].plant == lt_MP_output_material_plant[counter_output].plant)
            {
                lt_MP_output_material_plant[counter_output] = it_MP_material_plant[counter];
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_tenant_D(c_MP_output_material_plant)
{
    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.tenant == '')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_plant_D(it_P_plant, c_MP_output_material_plant)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            if (c_MP_output_material_plant.plant == '' )
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Plant does not have data';
            }

            else
            {
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else                    
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                }
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_material_plant_D(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MP_output_material_plant.material == '')  
    {

    }
    else
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MP_output_material_plant.length; counter = counter + 1)
            {
                if (it_MP_output_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_output_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_output_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
            {
                if (it_MP_material_plant[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MP_material_plant[counter].material == c_MP_output_material_plant.material &&
                    it_MP_material_plant[counter].plant == c_MP_output_material_plant.plant)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
            }
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_check_child_D(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MP_output_material_plant)
{
    var l_record_database_exist = '',
        l_record_delete_exist = '';

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_material_storage_location[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MSL_material_storage_location[counter].material == c_MP_output_material_plant.material &&
                    it_MSL_material_storage_location[counter].plant == c_MP_output_material_plant.plant)
                {
                    l_record_database_exist = 'X';
                    // break                                                                                     ????
                }
            }
        }

        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            for (counter = 0; counter < it_MSL_output_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_output_material_storage_location[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MSL_output_material_storage_location[counter].material == c_MP_output_material_plant.material &&
                    it_MSL_output_material_storage_location[counter].plant == c_MP_output_material_plant.plant)
                {
                    l_record_delete_exist = 'X';
                    // break                                                                                     ????
                }
            }
            
            if (l_record_database_exist == 'X')
            {
                if (l_record_delete_exist == 'X')
                {

                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Child (Material Storage Location) exist';
                }
            }
            else
            {

            }
        }
    }
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_input_output_D(it_MG_material_general, it_MG_input_material_general)
{
    var counter = 0,
        counter_output = 0;

    if (it_MG_input_material_general[0].material == '*')
    {
        lt_MG_output_material_general = it_MG_material_general;
    }
    else
    {
        lt_MG_output_material_general = it_MG_input_material_general;
    }

    for (counter_output = 0; counter_output < lt_MG_output_material_general.length; counter_output = counter_output + 1)
    {
        for (counter = 0; counter < it_MG_material_general.length; counter = counter + 1)
        {
            if (it_MG_material_general[counter].tenant == lt_MG_output_material_general[counter_output].tenant &&
                it_MG_material_general[counter].material == lt_MG_output_material_general[counter_output].material)
            {
                lt_MG_output_material_general[counter_output] = it_MG_material_general[counter];
                // break                                                                                                     ????
            }
        }
    }    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_tenant_D(c_MG_output_material_general)
{
    if (c_MG_output_material_general.material == '')
    {

    }
    else
    {
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            if (c_MG_output_material_general.tenant == '')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Tenant does not have data';
            }
        }
    }  
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_material_general_D(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter)
{
    var counter = 0,
        lv_record_exist = '';

    if (c_MG_output_material_general.material == '')  
    {

    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (counter = (i_counter + 1) ; counter < it_MG_output_material_general.length; counter = counter + 1)
            {
                if (it_MG_output_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_output_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (c_MG_output_material_general.system_field_message_type == '')
        {    
            lv_record_exist = ''    ;
            for (counter = 0; counter < it_MG_material_general.length; counter = counter + 1)
            {
                if (it_MG_material_general[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MG_material_general[counter].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
            }            
        }
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_child_D(it_MP_material_plant, it_MP_output_material_plant, c_MG_output_material_general)
{
    var l_record_database_exist = '',
        l_record_delete_exist;

    if (c_MG_output_material_general.material == '') 
    {

    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
            {
                if (it_MP_material_plant[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MP_material_plant[counter].material == c_MG_output_material_general.material)
                {
                    l_record_database_exist = 'X';
                    // break                                                                       ????
                }
            }

            for (counter = 0; counter < it_MP_output_material_plant.length; counter = counter + 1)
            {
                if (it_MP_output_material_plant[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MP_output_material_plant[counter].material == c_MG_output_material_general.material &&
                    it_MP_output_material_plant[counter].system_field_message_type == '')                       // ****
                {
                    l_record_delete_exist = 'X';
                    // break                                                                       ????
                }
            }

            if (l_record_database_exist == 'X')
            {
                if (l_record_delete_exist == 'X')
                {

                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Child (Material Plant) exist';
                }
            }        
        }
    }
}    


/*
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_check_child_D(it_MP_material_plant, it_MP_output_material_plant, c_MG_output_material_general)
{
    var l_database_record_exist = '',
        l_delete_record_exist = '',
        l_record_exist = '';

    if (c_MG_output_material_general.material == '') 
    {
    
    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            for (counter = 0; counter < it_MP_material_plant.length; counter = counter + 1)
            {
                if (it_MP_material_plant[counter].tenant == c_MG_output_material_general.tenant &&
                    it_MP_material_plant[counter].material == c_MG_output_material_general.material)
                {
                    l_database_record_exist = 'X';
                    l_delete_record_exist = 'X';
                    for (counter = 0; counter < it_MP_output_material_plant.length; counter = counter + 1)
                    {
                        l_record_exist = '';
                        if (it_MP_output_material_plant[counter].tenant == it_MP_material_plant.tenant &&
                            it_MP_output_material_plant[counter].material == it_MP_material_plant.material &&
                            it_MP_output_material_plant[counter].plant == it_MP_material_plant.plant &&
                            it_MP_output_material_plant[counter].system_field_message_type == '')
                        {
                            l_record_exist = 'X';
                            // break                                                                       ????
                        }
                    }
                    if (l_record_exist == '')
                    {
                        l_delete_record_exist = '';
                    }

                    // break                                                                       ????
                }
            }

            if (l_database_record_exist == 'X')
            {
                if (l_delete_record_exist == 'X')
                {

                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Child (Material Plant) exist';
                }
            }        
        }
    }
}    
*/


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}


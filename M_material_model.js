/*
    keep data global
    class methods
    submit, get, post

    data type in only in model file - COMPLETE
    log (general, plant, storage location)  - COMPLETE 
    do not allow to delete when material documents already posted - COMPLETE     
    check all childs in delete mode - COMPLETE    
    check _copy_input_D - COMPLETE
    break  - COMPLETE
    plant = *, storage location = * in read mode - COMPLETE    
    populate other fields (material type) in update mode - COMPLETE
    remove global variables - COMPLETE
    seperate data select logic  - COMPLETE
    seperate data saving logic  - COMPLETE    
    missing ; is not syntax error. it is logical error - COMPLETE
    missing parameters is not syntax error. it is logical error - COMPLETE
    add data type - COMPLETE


// On page1.html 
localStorage.setItem('name', 'John'); 
localStorage.setItem('age', '30'); 
 
// On page2.html 
let name = localStorage.getItem('name'); 
let age = localStorage.getItem('age'); 

*/


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MT_material_type = 
[
    {
        tenant : '',
        material_type : '',
        material_type_description : ''
    }
];

var MT_material_type = structuredClone(tt_MT_material_type);

MT_material_type = 
[
    { tenant : 'TEST', material_type : 'RM', material_type_description : 'Raw Material' },
    { tenant : 'TEST', material_type : 'SFM', material_type_description : 'Semi Finish Material' },
    { tenant : 'TEST', material_type : 'FM', material_type_description : 'Finish Material' }
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_UOM_unit_measure = 
[
    {
        tenant : '',
        UOM : '',
        UOM_description : ''
    }
];

var UOM_unit_measure = structuredClone(tt_UOM_unit_measure);

UOM_unit_measure = 
[
    { tenant : 'TEST', UOM : 'BUOM1', UOM_description : 'base UOM 1' },
    { tenant : 'TEST', UOM : 'BUOM2', UOM_description : 'base UOM 2' },
    { tenant : 'TEST', UOM : 'BUOM3', UOM_description : 'base UOM 3' },
    { tenant : 'TEST', UOM : 'BUOM4', UOM_description : 'base UOM 4' }    
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_P_plant = 
[
    {
        tenant : '',
        plant : '',

        plant_description : '',
        company : ''
    }
];

var P_plant = structuredClone(tt_P_plant);

P_plant = 
[
    { tenant : 'TEST', plant : 'P1', plant_description : 'Plant 1' },
    { tenant : 'TEST', plant : 'P2', plant_description : 'Plant 2' }    
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var tt_SL_storage_location = 
[
    {
        tenant : '',
        plant : '',
        storage_location : '',
        storage_location_description : ''
    }
];

var SL_storage_location = structuredClone(tt_SL_storage_location);

SL_storage_location = 
[
    { tenant : 'TEST', plant : 'P1', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'TEST', plant : 'P1', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },
    { tenant : 'TEST', plant : 'P2', storage_location : 'SL1', storage_location_description : 'Storage Location 1' },
    { tenant : 'TEST', plant : 'P2', storage_location : 'SL2', storage_location_description : 'Storage Location 2' },    
];


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

var MG_material_general = structuredClone(tt_MG_material_general),
    tt_MG_input_material_general = structuredClone(tt_MG_material_general),
    tt_MG_output_material_general = structuredClone(tt_MG_material_general);

    MG_material_general = 
    [        
        { tenant : 'TEST', material : 'M1', material_type : 'MT1', material_description : 'MD1', base_UOM : 'BUOM1', material_group : 'MG1', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material : 'M2', material_type : 'MT2', material_description : 'MD2', base_UOM : 'BUOM2', material_group : 'MG2', system_field_message_type : '', system_field_message_description : '' }        
    ];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MG_material_general_log = 
[
    {
    tenant : '',
    material : '',
    // message : '',

    message_type : '',
    message_description : '',
    }
];

var tt_MG_output_material_general_log = structuredClone(tt_MG_material_general_log);


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

var MP_material_plant = structuredClone(tt_MP_material_plant),
    tt_MP_input_material_plant = structuredClone(tt_MP_material_plant),
    tt_MP_output_material_plant = structuredClone(tt_MP_material_plant);

    MP_material_plant = 
    [
        { tenant : 'TEST', material : 'M1', plant : 'P1', reorder_point : '1', moving_average_price : '11', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M1', plant : 'P2', reorder_point : '2', moving_average_price : '22', system_field_message_type : '', system_field_message_description : ''},    
        { tenant : 'TEST', material : 'M2', plant : 'P1', reorder_point : '3', moving_average_price : '33', system_field_message_type : '', system_field_message_description : ''},
        { tenant : 'TEST', material : 'M2', plant : 'P2', reorder_point : '4', moving_average_price : '44', system_field_message_type : '', system_field_message_description : ''}        
    ];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MP_material_plant_log = 
[
    {
    tenant : '',
    material : '',
    plant : '',
    // message : '',

    message_type : '',
    message_description : '',
    }
];

var tt_MP_output_material_plant_log = structuredClone(tt_MP_material_plant_log);


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
var tt_MSL_material_storage_location = 
    [
        {
            tenant : '',
            material : '',
            plant : '',
            storage_location : '',

            storage_bin : '',
            unrestricted_stock : '',
            restricted_stock : '',
            reserved_stock : '',
            blocked_stock : '',
            quality_in_stock : '',
            last_material_document : '',
            last_fiscal_year : '',
            last_item : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }
    ];

    var MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_input_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_material_storage_location);

        MSL_material_storage_location = 
        [
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },    
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },    
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', last_material_document : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', last_material_document : '', system_field_message_type : '', system_field_message_description : '' }        
        ];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
    var tt_MSL_material_storage_location_log = 
    [
        {
            tenant : '',
            material : '',
            plant : '',
            storage_location : '',
            // message : '',

            message_type : '',
            message_description : '',
        }
    ];

    var tt_MSL_output_material_storage_location_log = structuredClone(tt_MSL_material_storage_location_log);


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_create_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);

    var lt_MT_material_type = structuredClone(tt_MT_material_type),
        lt_UOM_unit_measure = structuredClone(tt_UOM_unit_measure),
        lt_P_plant = structuredClone(tt_P_plant),
        lt_SL_storage_location = structuredClone(tt_SL_storage_location),
        lt_MG_material_general = structuredClone(tt_MG_material_general),
        lt_MP_material_plant = structuredClone(tt_MP_material_plant),
        lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

    [lt_MT_material_type, lt_UOM_unit_measure, lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location] = M_select_C(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location);
    [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log] = M_check_C(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location, lt_MT_material_type, lt_UOM_unit_measure, lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location);
    //M_save_C()

    return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_select_C(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_MT_material_type = structuredClone(tt_MT_material_type),
        ot_UOM_unit_measure = structuredClone(tt_UOM_unit_measure),
        ot_P_plant = structuredClone(tt_P_plant),
        ot_SL_storage_location = structuredClone(tt_SL_storage_location),
        ot_MG_material_general = structuredClone(tt_MG_material_general),
        ot_MP_material_plant = structuredClone(tt_MP_material_plant),
        ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

    ot_MT_material_type = MT_select_C();
    ot_UOM_unit_measure = UOM_select_C();
    ot_P_plant = P_select_C();
    ot_SL_storage_location = SL_select_C();
    ot_MG_material_general = MG_select_C(it_MG_input_material_general);
    ot_MP_material_plant = MP_select_C(it_MP_input_material_plant);
    ot_MSL_material_storage_location = MSL_select_C(it_MSL_input_material_storage_location);
    
    return [ot_MT_material_type, ot_UOM_unit_measure, ot_P_plant, ot_SL_storage_location, ot_MG_material_general, ot_MP_material_plant, ot_MSL_material_storage_location];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_check_C(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location,
    it_MT_material_type, it_UOM_unit_measure, it_P_plant, it_SL_storage_location, it_MG_material_general, it_MP_material_plant, it_MSL_material_storage_location)
{
    var lv_counter = 0;

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);


// Material General    
    ot_MG_output_material_general = MG_copy_input_C(it_MG_input_material_general);
    for (lv_counter = 0; lv_counter < ot_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_C(ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        // MG_check_authorization_C
        MG_check_material_general_C(it_MG_material_general, ot_MG_output_material_general, ot_MG_output_material_general[lv_counter], lv_counter, ot_MG_output_material_general_log);
        MG_check_material_type_C(it_MT_material_type, ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        MG_check_material_description_C(ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        MG_check_base_UOM_C(it_UOM_unit_measure, ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log); 
    }


// Material Plant
    ot_MP_output_material_plant = MP_copy_input_C(it_MP_input_material_plant);
    for (lv_counter = 0; lv_counter < ot_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_C(ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        // MP_check_authorization_C
        MP_check_plant_C(it_P_plant, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        MP_check_material_plant_C(it_MP_material_plant, ot_MP_output_material_plant, ot_MP_output_material_plant[lv_counter], lv_counter, ot_MP_output_material_plant_log);
        MP_check_parent_C(it_MG_material_general, ot_MG_output_material_general, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
    }


// Material Storage Location    
    ot_MSL_output_material_storage_location = MSL_copy_input_C(it_MSL_input_material_storage_location);
    for (lv_counter = 0; lv_counter < ot_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_C(ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        // MSL_check_authorization_C
        MSL_check_plant_C(it_P_plant, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_storage_location_C(it_SL_storage_location, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_material_storage_location_C(it_MSL_material_storage_location, ot_MSL_output_material_storage_location, ot_MSL_output_material_storage_location[lv_counter], lv_counter, ot_MSL_output_material_storage_location_log); 
        MSL_check_parent_C(it_MP_material_plant, ot_MP_output_material_plant, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);  
    }

// Insert Data into database tables   

    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('it_MG_material_general'); console.log(it_MG_material_general);    
    console.log('ot_MG_output_material_general'); console.log(ot_MG_output_material_general);
    console.log('ot_MG_output_material_general_log'); console.log(ot_MG_output_material_general_log);
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('it_MP_material_plant'); console.log(it_MP_material_plant);    
    console.log('ot_MP_output_material_plant'); console.log(ot_MP_output_material_plant);
    console.log('ot_MP_output_material_plant_log'); console.log(ot_MP_output_material_plant_log);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location);    
    console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
    console.log('ot_MSL_output_material_storage_location_log'); console.log(ot_MSL_output_material_storage_location_log);   


    return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_save_C()
{

}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_read_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);

    var lt_P_plant = structuredClone(tt_P_plant),
        lt_SL_storage_location = structuredClone(tt_SL_storage_location),
        lt_MG_material_general = structuredClone(tt_MG_material_general),
        lt_MP_material_plant = structuredClone(tt_MP_material_plant),
        lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);
    
        [lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location] = M_select_R(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location);
        [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log] = M_check_R(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location, lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location);
        // M_save_R()

        return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_select_R(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_P_plant = structuredClone(tt_P_plant),
        ot_SL_storage_location = structuredClone(tt_SL_storage_location),
        ot_MG_material_general = structuredClone(tt_MG_material_general),
        ot_MP_material_plant = structuredClone(tt_MP_material_plant),
        ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

// Select data from database tables
    ot_P_plant = P_select_R();
    ot_SL_storage_location = SL_select_R();    
    ot_MG_material_general = MG_select_R(it_MG_input_material_general);
    ot_MP_material_plant = MP_select_R(it_MP_input_material_plant);
    ot_MSL_material_storage_location = MSL_select_R(it_MSL_input_material_storage_location);

    return [ot_P_plant, ot_SL_storage_location, ot_MG_material_general, ot_MP_material_plant, ot_MSL_material_storage_location];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_check_R(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location,
    it_P_plant, it_SL_storage_location, it_MG_material_general, it_MP_material_plant, it_MSL_material_storage_location)
{
    var lv_counter = 0;

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);


// Material General    
    ot_MG_output_material_general = MG_copy_input_R(it_MG_material_general, it_MG_input_material_general);
    for (var lv_counter = 0; lv_counter < ot_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_R(ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        // MG_check_authorization_R
        MG_check_material_general_R(it_MG_material_general, ot_MG_output_material_general, ot_MG_output_material_general[lv_counter], lv_counter, ot_MG_output_material_general_log);
    }


// Material Plant    
    ot_MP_output_material_plant = MP_copy_input_R(it_MP_material_plant, it_MP_input_material_plant);    
    for (var lv_counter = 0; lv_counter < ot_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_R(ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        // MP_check_authorization_R
        MP_check_plant_R(it_P_plant, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        MP_check_material_plant_R(it_MP_material_plant, ot_MP_output_material_plant, ot_MP_output_material_plant[lv_counter], lv_counter, ot_MP_output_material_plant_log);
    }


// Material Storage Location    
    ot_MSL_output_material_storage_location = MSL_copy_input_R(it_MSL_material_storage_location, it_MSL_input_material_storage_location);    
    for (var lv_counter = 0; lv_counter < ot_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_R(ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        // MSL_check_authorization_R
        MSL_check_plant_R(it_P_plant, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_storage_location_R(it_SL_storage_location, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_material_storage_location_R(it_MSL_material_storage_location, ot_MSL_output_material_storage_location, ot_MSL_output_material_storage_location[lv_counter], lv_counter, ot_MSL_output_material_storage_location_log);
    }
      
    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('it_MG_material_general'); console.log(it_MG_material_general);    
    console.log('ot_MG_output_material_general'); console.log(ot_MG_output_material_general);
    console.log('ot_MG_output_material_general_log'); console.log(ot_MG_output_material_general_log);    
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('ot_MP_output_material_plant_log'); console.log(ot_MP_output_material_plant_log);
    console.log('it_MP_material_plant'); console.log(it_MP_material_plant);    
    console.log('ot_MP_output_material_plant'); console.log(ot_MP_output_material_plant);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location);    
    console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
    console.log('ot_MSL_output_material_storage_location_log'); console.log(ot_MSL_output_material_storage_location_log);   
    
    return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_save_R()
{

}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_update_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);

    var lt_P_plant = structuredClone(tt_P_plant),
        lt_SL_storage_location = structuredClone(tt_SL_storage_location),
        lt_MG_material_general = structuredClone(tt_MG_material_general),
        lt_MP_material_plant = structuredClone(tt_MP_material_plant),
        lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

        [lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location] = M_select_U(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location);
        [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log] = M_check_U(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location, lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location);
        // M_save_U()

        return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_select_U(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_P_plant = structuredClone(tt_P_plant),
        ot_SL_storage_location = structuredClone(tt_SL_storage_location),
        ot_MG_material_general = structuredClone(tt_MG_material_general),
        ot_MP_material_plant = structuredClone(tt_MP_material_plant),
        ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

// Select data from database tables
    ot_P_plant = P_select_U();
    ot_SL_storage_location = SL_select_U();   
    ot_MG_material_general = MG_select_U(it_MG_input_material_general);
    ot_MP_material_plant = MP_select_U(it_MP_input_material_plant);
    ot_MSL_material_storage_location = MSL_select_U(it_MSL_input_material_storage_location);

    return [ot_P_plant, ot_SL_storage_location, ot_MG_material_general, ot_MP_material_plant, ot_MSL_material_storage_location];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_check_U(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location,
    it_P_plant, it_SL_storage_location, it_MG_material_general, it_MP_material_plant, it_MSL_material_storage_location)
{
    var lv_counter = 0;

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);


// Material General    
    ot_MG_output_material_general = MG_copy_input_U(it_MG_input_material_general, it_MG_material_general);
    for (var lv_counter = 0; lv_counter < ot_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_U(ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        // MG_check_authorization_U
        MG_check_material_general_U(it_MG_material_general, ot_MG_output_material_general, ot_MG_output_material_general[lv_counter], lv_counter, ot_MG_output_material_general_log);
    }


// Material Plant    
    ot_MP_output_material_plant = MP_copy_input_U(it_MP_input_material_plant, it_MP_material_plant);    
    for (var lv_counter = 0; lv_counter < ot_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_U(ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        // MP_check_authorization_U
        MP_check_plant_U(it_P_plant, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        MP_check_material_plant_U(it_MP_material_plant, ot_MP_output_material_plant, ot_MP_output_material_plant[lv_counter], lv_counter, ot_MP_output_material_plant_log);
    }


// Material Storage Location    
    ot_MSL_output_material_storage_location = MSL_copy_input_U(it_MSL_input_material_storage_location, it_MSL_material_storage_location);    
    for (var lv_counter = 0; lv_counter < ot_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_U(ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        // MSL_check_authorization_U
        MSL_check_plant_U(it_P_plant, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_storage_location_U(it_SL_storage_location, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_material_storage_location_U(it_MSL_material_storage_location, ot_MSL_output_material_storage_location, ot_MSL_output_material_storage_location[lv_counter], lv_counter, ot_MSL_output_material_storage_location_log);
    }


    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('it_MG_material_general'); console.log(it_MG_material_general);    
    console.log('ot_MG_output_material_general'); console.log(ot_MG_output_material_general);
    console.log('ot_MG_output_material_general_log'); console.log(ot_MG_output_material_general_log);    
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('it_MP_material_plant'); console.log(it_MP_material_plant);    
    console.log('ot_MP_output_material_plant'); console.log(ot_MP_output_material_plant);
    console.log('ot_MP_output_material_plant_log'); console.log(ot_MP_output_material_plant_log);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location);    
    console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
    console.log('ot_MSL_output_material_storage_location_log'); console.log(ot_MSL_output_material_storage_location_log); 
    
    return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_delete_model(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);

    var lt_P_plant = structuredClone(tt_P_plant),
        lt_SL_storage_location = structuredClone(tt_SL_storage_location),
        lt_MG_material_general = structuredClone(tt_MG_material_general),
        lt_MP_material_plant = structuredClone(tt_MP_material_plant),
        lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

        [lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location] = M_select_D(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location);
        [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log] = M_check_D(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location, lt_P_plant, lt_SL_storage_location, lt_MG_material_general, lt_MP_material_plant, lt_MSL_material_storage_location);
        // M_save_D()

        return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_select_D(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location)
{
    var ot_P_plant = structuredClone(tt_P_plant),
        ot_SL_storage_location = structuredClone(tt_SL_storage_location),
        ot_MG_material_general = structuredClone(tt_MG_material_general),
        ot_MP_material_plant = structuredClone(tt_MP_material_plant),
        ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

    ot_P_plant = P_select_D();
    ot_SL_storage_location = SL_select_D();   
    ot_MG_material_general = MG_select_D(it_MG_input_material_general);
    ot_MP_material_plant = MP_select_D(it_MP_input_material_plant);
    ot_MSL_material_storage_location = MSL_select_D(it_MSL_input_material_storage_location);

    return [ot_P_plant, ot_SL_storage_location, ot_MG_material_general, ot_MP_material_plant, ot_MSL_material_storage_location];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_check_D(it_MG_input_material_general, it_MP_input_material_plant, it_MSL_input_material_storage_location,
    it_P_plant, it_SL_storage_location, it_MG_material_general, it_MP_material_plant, it_MSL_material_storage_location)
{
    var lv_counter = 0;

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general),
        ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant),
        ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),

        ot_MG_output_material_general_log = structuredClone(tt_MG_output_material_general_log),
        ot_MP_output_material_plant_log = structuredClone(tt_MP_output_material_plant_log),
        ot_MSL_output_material_storage_location_log = structuredClone(tt_MSL_output_material_storage_location_log);


// Material Storage Location    
    ot_MSL_output_material_storage_location = MSL_copy_input_D(it_MSL_material_storage_location, it_MSL_input_material_storage_location);    
    for (var lv_counter = 0; lv_counter < ot_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
    {
        MSL_check_tenant_D(ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        // MSL_check_authorization_D
        MSL_check_plant_D(it_P_plant, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_storage_location_D(it_SL_storage_location, ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
        MSL_check_material_storage_location_D(it_MSL_material_storage_location, ot_MSL_output_material_storage_location, ot_MSL_output_material_storage_location[lv_counter], lv_counter, ot_MSL_output_material_storage_location_log);
        MSL_check_material_document_D(ot_MSL_output_material_storage_location[lv_counter], ot_MSL_output_material_storage_location_log);
    }


// Material Plant    
    ot_MP_output_material_plant = MP_copy_input_D(it_MP_material_plant, it_MP_input_material_plant);    
    for (var lv_counter = 0; lv_counter < ot_MP_output_material_plant.length; lv_counter = lv_counter + 1)
    {
        MP_check_tenant_D(ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        // MP_check_authorization_D
        MP_check_plant_D(it_P_plant, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
        MP_check_material_plant_D(it_MP_material_plant, ot_MP_output_material_plant, ot_MP_output_material_plant[lv_counter], lv_counter, ot_MP_output_material_plant_log);
        MP_check_child_D(it_MSL_material_storage_location, ot_MSL_output_material_storage_location, ot_MP_output_material_plant[lv_counter], ot_MP_output_material_plant_log);
    }


// Material General    
    ot_MG_output_material_general = MG_copy_input_D(it_MG_material_general, it_MG_input_material_general);
    for (var lv_counter = 0; lv_counter < ot_MG_output_material_general.length; lv_counter = lv_counter + 1)
    {
        MG_check_tenant_D(ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
        // MG_check_authorization_D
        MG_check_material_general_D(it_MG_material_general, ot_MG_output_material_general, ot_MG_output_material_general[lv_counter], lv_counter, ot_MG_output_material_general_log);
        MG_check_child_D(it_MP_material_plant, ot_MP_output_material_plant, ot_MG_output_material_general[lv_counter], ot_MG_output_material_general_log);
    }


    console.log('it_MG_input_material_general'); console.log(it_MG_input_material_general);
    console.log('it_MG_material_general'); console.log(it_MG_material_general);    
    console.log('ot_MG_output_material_general'); console.log(ot_MG_output_material_general);
    console.log('ot_MG_output_material_general_log'); console.log(ot_MG_output_material_general_log); 
    console.log('it_MP_input_material_plant'); console.log(it_MP_input_material_plant);
    console.log('it_MP_material_plant'); console.log(it_MP_material_plant);    
    console.log('ot_MP_output_material_plant'); console.log(ot_MP_output_material_plant);
    console.log('ot_MP_output_material_plant_log'); console.log(ot_MP_output_material_plant_log);
    console.log('it_MSL_input_material_storage_location'); console.log(it_MSL_input_material_storage_location);
    console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location);    
    console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
    console.log('ot_MSL_output_material_storage_location_log'); console.log(ot_MSL_output_material_storage_location_log);  
    
    return [ot_MG_output_material_general, ot_MP_output_material_plant, ot_MSL_output_material_storage_location, ot_MG_output_material_general_log, ot_MP_output_material_plant_log, ot_MSL_output_material_storage_location_log];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function M_save_D()
{

}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MT_select_C()
{
    var ot_MT_material_type = structuredClone(MT_material_type);
    return ot_MT_material_type;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function UOM_select_C()
{
    var ot_UOM_unit_measure = structuredClone(UOM_unit_measure);
    return ot_UOM_unit_measure;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function P_select_C()
{
    var ot_P_plant = structuredClone(P_plant);
    return ot_P_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function SL_select_C()
{
    var ot_SL_storage_location = structuredClone(SL_storage_location);
    return ot_SL_storage_location;
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_select_C(it_MG_input_material_general)
{
    var ot_MG_material_general = structuredClone(MG_material_general);
    return ot_MG_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_select_C(it_MP_input_material_plant)
{
    var ot_MP_material_plant = structuredClone(MP_material_plant);
    return ot_MP_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_select_C(it_MSL_input_material_storage_location)
{
    var ot_MSL_material_storage_location = structuredClone(MSL_material_storage_location);
    return ot_MSL_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_input_C(it_MG_input_material_general)
{
    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general)

    ot_MG_output_material_general = structuredClone(it_MG_input_material_general);
    
    return ot_MG_output_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_tenant_C(c_MG_output_material_general, ct_MG_output_material_general_log)
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
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_general_C(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter, ct_MG_output_material_general_log)
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
                    break;                                                                                                    
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General already exist';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material General does not exist'});
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_type_C(it_MT_material_type, c_MG_output_material_general, ct_MG_output_material_general_log)
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
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_MT_material_type.length; lv_counter = lv_counter + 1)
                {
                    if (it_MT_material_type[lv_counter].tenant == c_MG_output_material_general.tenant &&
                        it_MT_material_type[lv_counter].material_type == c_MG_output_material_general.material_type)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material Type exist'});
                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Material Type does not exist';
                    ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
                }
            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_description_C(c_MG_output_material_general, ct_MG_output_material_general_log)
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
                c_MG_output_material_general.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material Description has data'});
            }
        }
    }   
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_base_UOM_C(it_UOM_unit_measure, c_MG_output_material_general, ct_MG_output_material_general_log)
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
                c_MG_output_material_general.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                                
            }
            else
            {
                for (lv_counter = 0; lv_counter < it_UOM_unit_measure.length; lv_counter = lv_counter + 1)
                {
                    if (it_UOM_unit_measure[lv_counter].tenant == c_MG_output_material_general.tenant &&
                        it_UOM_unit_measure[lv_counter].UOM == c_MG_output_material_general.base_UOM)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Base UOM exist'});
                }
                else
                {
                    c_MG_output_material_general.system_field_message_type = 'ERROR';
                    c_MG_output_material_general.system_field_message_description = 'Base UOM does not exist';
                    c_MG_output_material_general.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                                    
                }
            }        
        }
    }   
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_input_C(it_MP_input_material_plant)
{
    var ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant);

    ot_MP_output_material_plant = structuredClone(it_MP_input_material_plant);

    return ot_MP_output_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_tenant_C(c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_plant_C(it_P_plant, c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_material_plant_C(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter, ct_MP_output_material_plant_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant already exist';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Material Plant does not exist'});
            }
        }  
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_parent_C(it_MG_material_general, it_MG_output_material_general, c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                    break;
                }
            }

            for (counter = 0; counter < it_MG_output_material_general.length; counter = counter + 1)
            {
                if (it_MG_output_material_general[counter].tenant == c_MP_output_material_plant.tenant &&
                    it_MG_output_material_general[counter].material == c_MP_output_material_plant.material)
                {
                    if (it_MG_output_material_general[counter].system_field_message_type == '')
                    {
                        ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Parent (Material General) has no error'});
                    }
                    else
                    {
                        c_MP_output_material_plant.system_field_message_type = 'ERROR';
                        c_MP_output_material_plant.system_field_message_description = 'Parent (Material General) has error';
                        ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                    }
                    lv_record_exist = 'X';
                    break;
                }
            }
            
            if (lv_record_exist == 'X')
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Parent (Material General) exist'});
            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Parent (Material General) does not exist';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
        }
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_input_C(it_MSL_input_material_storage_location)
{
    var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    ot_MSL_output_material_storage_location = structuredClone(it_MSL_input_material_storage_location);

    return ot_MSL_output_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_tenant_C(c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
{
    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.tenant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Tenant does not have data';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_plant_C(it_P_plant, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_storage_location_C(it_SL_storage_location, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }

            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location has data'});
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location exist'});
                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }    
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_material_storage_location_C(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter, ct_MSL_output_material_storage_location_log)
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
                    break;
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage Location already exist';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Material Storage Location does not exist'});
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_parent_C(it_MP_material_plant, it_MP_output_material_plant, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                        break;
                    }
                }

                for (counter = 0; counter < it_MP_output_material_plant.length; counter = counter + 1)
                {
                    if (it_MP_output_material_plant[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_MP_output_material_plant[counter].material == c_MSL_output_material_storage_location.material &&
                        it_MP_output_material_plant[counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        if (it_MP_output_material_plant[counter].system_field_message_type == '')
                        {
                            ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Parent (Material Plant) has no error'});
                        }
                        else
                        {
                            c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                            c_MSL_output_material_storage_location.system_field_message_description = 'Parent (Material Plant) has error';
                            ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                        }
                        lv_record_exist = 'X';
                        break;
                    }
                }
            
                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Parent (Material Plant) exist'});
                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Parent (Material Plant) does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
           }
        }   
    }   



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function P_select_R()
{
    var ot_P_plant = structuredClone(P_plant);
    return ot_P_plant;
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function SL_select_R()
{
    var ot_SL_storage_location = structuredClone(SL_storage_location);
    return ot_SL_storage_location;
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_select_R(it_MG_input_material_general)
{
    var ot_MG_material_general = structuredClone(MG_material_general);  
    return ot_MG_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_select_R(it_MP_input_material_plant)
{
    var ot_MP_material_plant = structuredClone(MP_material_plant);
    return ot_MP_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_select_R(it_MSL_input_material_storage_location)
{
    var ot_MSL_material_storage_location = structuredClone(MSL_material_storage_location);
    return ot_MSL_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_input_R(it_MG_material_general, it_MG_input_material_general)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general);

    for (lv_input_counter = 0; lv_input_counter < it_MG_input_material_general.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MG_material_general.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MG_input_material_general[lv_input_counter].tenant == it_MG_material_general[lv_database_counter].tenant &&
                it_MG_input_material_general[lv_input_counter].material == '*')
            {
                ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_material_general[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MG_input_material_general[lv_input_counter].tenant == it_MG_material_general[lv_database_counter].tenant &&
                it_MG_input_material_general[lv_input_counter].material == it_MG_material_general[lv_database_counter].material)
            {
                ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_material_general[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_input_material_general[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MG_output_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_tenant_R(c_MG_output_material_general, ct_MG_output_material_general_log)
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
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_general_R(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter, ct_MG_output_material_general_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material General exist'});
            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
        }            
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_input_R(it_MP_material_plant, it_MP_input_material_plant)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant);

    for (lv_input_counter = 0; lv_input_counter < it_MP_input_material_plant.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MP_material_plant.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == '*' &&
                it_MP_input_material_plant[lv_input_counter].plant == '*')
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == it_MP_material_plant[lv_database_counter].material &&
                it_MP_input_material_plant[lv_input_counter].plant == '*')
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == it_MP_material_plant[lv_database_counter].material &&
                it_MP_input_material_plant[lv_input_counter].plant == it_MP_material_plant[lv_database_counter].plant)
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_input_material_plant[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MP_output_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_tenant_R(c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Tenant has data'});                
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_plant_R(it_P_plant, c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }

            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_material_plant_R(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter, ct_MP_output_material_plant_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Material Plant exist'});
            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});                
            }
        }   
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_input_R(it_MSL_material_storage_location, it_MSL_input_material_storage_location)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    for (lv_input_counter = 0; lv_input_counter < it_MSL_input_material_storage_location.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MSL_material_storage_location.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == it_MSL_material_storage_location[lv_database_counter].plant &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == it_MSL_material_storage_location[lv_database_counter].plant &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == it_MSL_material_storage_location[lv_database_counter].storage_location)
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_input_material_storage_location[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MSL_output_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_tenant_R(c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
{
    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.tenant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Tenant does not have data';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_plant_R(it_P_plant, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }    
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_storage_location_R(it_SL_storage_location, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location has data'});
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location exist'});
                }
                else
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_material_storage_location_R(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter, ct_MSL_output_material_storage_location_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});                
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
            }
        }

        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {

            lv_record_exist = ''
            for (counter = 0; counter < it_MSL_material_storage_location.length; counter = counter + 1)
            {
                if (it_MSL_material_storage_location[counter].tenant == c_MSL_output_material_storage_location.tenant &&
                    it_MSL_material_storage_location[counter].material == c_MSL_output_material_storage_location.material &&
                    it_MSL_material_storage_location[counter].plant == c_MSL_output_material_storage_location.plant &&
                    it_MSL_material_storage_location[counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                {
                    lv_record_exist = 'X';
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Material Storage_location exist'});
            }
            else
            {
              
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});                
            }
        }  
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function P_select_U()
{
    var ot_P_plant = structuredClone(P_plant);
    return ot_P_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function SL_select_U()
{
    var ot_SL_storage_location = structuredClone(SL_storage_location);
    return ot_SL_storage_location;
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_select_U(it_MG_input_material_general)
{
    var ot_MG_material_general = structuredClone(MG_material_general);   
    return ot_MG_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_select_U(it_MP_input_material_plant)
{
    var ot_MP_material_plant = structuredClone(MP_material_plant);
    return ot_MP_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_select_U(it_MSL_input_material_storage_location)
{
    var ot_MSL_material_storage_location = structuredClone(MSL_material_storage_location);
    return ot_MSL_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_input_U(it_MG_input_material_general, it_MG_material_general)
{
    var lv_counter_input = 0,
        lv_counter_database = 0,
        lv_counter_output = 0,
        lv_record_exist = '';

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general);

    for (lv_counter_input = 0; lv_counter_input < it_MG_input_material_general.length; lv_counter_input = lv_counter_input + 1)
    {
        lv_record_exist = '';
        for (lv_counter_database = 0; lv_counter_database < it_MG_material_general.length; lv_counter_database = lv_counter_database + 1)
        {
            if (it_MG_material_general[lv_counter_database].material == it_MG_input_material_general[lv_counter_input].material)
            {
                ot_MG_output_material_general[lv_counter_output] = structuredClone(it_MG_material_general[lv_counter_database]);

                ot_MG_output_material_general[lv_counter_output].material_description = it_MG_input_material_general[lv_counter_input].material_description;
                ot_MG_output_material_general[lv_counter_output].material_group = it_MG_input_material_general[lv_counter_input].material_group;
                lv_counter_output = lv_counter_output + 1;
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MG_output_material_general[lv_counter_output] = structuredClone(it_MG_input_material_general[lv_counter_input]);
            lv_counter_output = lv_counter_output + 1;
        }        
    }

    return ot_MG_output_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_tenant_U(c_MG_output_material_general, ct_MG_output_material_general_log)
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
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }            
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_general_U(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter, ct_MG_output_material_general_log)
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
                    break;
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material General exist'});
            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }
        }    
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_input_U(it_MP_input_material_plant, it_MP_material_plant)
{
    var lv_counter_input = 0,
        lv_counter_database = 0,
        lv_counter_output = 0,
        lv_record_exist = '';

    var ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant);

    for (lv_counter_input = 0; lv_counter_input < it_MP_input_material_plant.length; lv_counter_input = lv_counter_input + 1)
    {
        lv_record_exist = '';
        for (lv_counter_database = 0; lv_counter_database < it_MP_material_plant.length; lv_counter_database = lv_counter_database + 1)
        {
            if (it_MP_material_plant[lv_counter_database].material == it_MP_input_material_plant[lv_counter_input].material &&
                it_MP_material_plant[lv_counter_database].plant == it_MP_input_material_plant[lv_counter_input].plant)
            {
                ot_MP_output_material_plant[lv_counter_output] = structuredClone(it_MP_material_plant[lv_counter_database]);

                ot_MP_output_material_plant[lv_counter_output].reorder_point = it_MP_input_material_plant[lv_counter_input].reorder_point;
                ot_MP_output_material_plant[lv_counter_output].moving_average_price = it_MP_input_material_plant[lv_counter_input].moving_average_price;
                lv_counter_output = lv_counter_output + 1;
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MP_output_material_plant[lv_counter_output] = structuredClone(it_MP_input_material_plant[lv_counter_input]);
            lv_counter_output = lv_counter_output + 1;
        }        
    }

    return ot_MP_output_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_tenant_U(c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_plant_U(it_P_plant, c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }

            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_material_plant_U(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter, ct_MP_output_material_plant_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Material Plant exist'});
            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});                
            }
        }   
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_input_U(it_MSL_input_material_storage_location, it_MSL_material_storage_location)
{
    var lv_counter_input = 0,
        lv_counter_database = 0,
        lv_counter_output = 0,
        lv_record_exist = '';

    var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    for (lv_counter_input = 0; lv_counter_input < it_MSL_input_material_storage_location.length; lv_counter_input = lv_counter_input + 1)
    {
        lv_record_exist = '';
        for (lv_counter_database = 0; lv_counter_database < it_MSL_material_storage_location.length; lv_counter_database = lv_counter_database + 1)
        {
            if (it_MSL_material_storage_location[lv_counter_database].material == it_MSL_input_material_storage_location[lv_counter_input].material &&
                it_MSL_material_storage_location[lv_counter_database].plant == it_MSL_input_material_storage_location[lv_counter_input].plant &&
                it_MSL_material_storage_location[lv_counter_database].storage_location == it_MSL_input_material_storage_location[lv_counter_input].storage_location)
            {
                ot_MSL_output_material_storage_location[lv_counter_output] = structuredClone(it_MSL_material_storage_location[lv_counter_database]);

                ot_MSL_output_material_storage_location[lv_counter_output].storage_bin = it_MSL_input_material_storage_location[lv_counter_input].storage_bin;
                lv_counter_output = lv_counter_output + 1;
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MSL_output_material_storage_location[lv_counter_output] = structuredClone(it_MSL_input_material_storage_location[lv_counter_input]);
            lv_counter_output = lv_counter_output + 1;
        }        
    }

    return ot_MSL_output_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_tenant_U(c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
{
    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.tenant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Tenant does not have data';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_plant_U(it_P_plant, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }

            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_storage_location_U(it_SL_storage_location, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location has data'});
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location exist'});
                }
                else                
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_material_storage_location_U(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter, ct_MSL_output_material_storage_location_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Material Storage_location exist'});
            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function P_select_D()
{
    var ot_P_plant = structuredClone(P_plant);
    return ot_P_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function SL_select_D()
{
    var ot_SL_storage_location = structuredClone(SL_storage_location);
    return ot_SL_storage_location;
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_select_D(it_MG_input_material_general)
{
    var ot_MG_material_general = structuredClone(MG_material_general);   
    return ot_MG_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_select_D(it_MP_input_material_plant)
{
    var ot_MP_material_plant = structuredClone(MP_material_plant);
    return ot_MP_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_select_D(it_MSL_input_material_storage_location)
{
    var ot_MSL_material_storage_location = structuredClone(MSL_material_storage_location);
    return ot_MSL_material_storage_location;
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_copy_input_D(it_MSL_material_storage_location, it_MSL_input_material_storage_location)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

    for (lv_input_counter = 0; lv_input_counter < it_MSL_input_material_storage_location.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MSL_material_storage_location.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == it_MSL_material_storage_location[lv_database_counter].plant &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == '*' &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == '*')
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MSL_input_material_storage_location[lv_input_counter].tenant == it_MSL_material_storage_location[lv_database_counter].tenant &&
                it_MSL_input_material_storage_location[lv_input_counter].material == it_MSL_material_storage_location[lv_database_counter].material &&
                it_MSL_input_material_storage_location[lv_input_counter].plant == it_MSL_material_storage_location[lv_database_counter].plant &&
                it_MSL_input_material_storage_location[lv_input_counter].storage_location == it_MSL_material_storage_location[lv_database_counter].storage_location)
            {
                ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_material_storage_location[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MSL_output_material_storage_location[lv_output_counter] = structuredClone(it_MSL_input_material_storage_location[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MSL_output_material_storage_location;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_tenant_D(c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
{
    if (c_MSL_output_material_storage_location.material == '')
    {

    }
    else
    {
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.tenant == '')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Tenant does not have data';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_plant_D(it_P_plant, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_P_plant[lv_counter].plant == c_MSL_output_material_storage_location.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Plant does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_storage_location_D(it_SL_storage_location, c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
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
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location has data'});
                for (lv_counter = 0; lv_counter < it_SL_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_SL_storage_location[lv_counter].tenant == c_MSL_output_material_storage_location.tenant &&
                        it_SL_storage_location[lv_counter].plant == c_MSL_output_material_storage_location.plant &&
                        it_SL_storage_location[lv_counter].storage_location == c_MSL_output_material_storage_location.storage_location)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Storage Location exist'});
                }
                else                    
                {
                    c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                    c_MSL_output_material_storage_location.system_field_message_description = 'Storage Location does not exist';
                    ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_material_storage_location_D(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MSL_output_material_storage_location, i_counter, ct_MSL_output_material_storage_location_log)
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
                    break;
                }
            }

            if(lv_record_exist == 'X')
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Duplicate record';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
            else
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Material Storage_location exist'});
            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Storage_location does not exist';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MSL_check_material_document_D(c_MSL_output_material_storage_location, ct_MSL_output_material_storage_location_log)
{
    if (c_MSL_output_material_storage_location.material == '')  
    {
    
    }
    else
    { 
        if (c_MSL_output_material_storage_location.system_field_message_type == '')
        {
            if (c_MSL_output_material_storage_location.last_material_document == '')
            {
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : 'INFORMATION', message_description : 'Material Document does not exist'});
            }
            else
            {
                c_MSL_output_material_storage_location.system_field_message_type = 'ERROR';
                c_MSL_output_material_storage_location.system_field_message_description = 'Material Document exist';
                ct_MSL_output_material_storage_location_log.push({tenant : c_MSL_output_material_storage_location.tenant, material : c_MSL_output_material_storage_location.material, plant : c_MSL_output_material_storage_location.plant, storage_location : c_MSL_output_material_storage_location.storage_location, message_type : c_MSL_output_material_storage_location.system_field_message_type, message_description : c_MSL_output_material_storage_location.system_field_message_description});
            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_copy_input_D(it_MP_material_plant, it_MP_input_material_plant)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MP_output_material_plant = structuredClone(tt_MP_output_material_plant);

    for (lv_input_counter = 0; lv_input_counter < it_MP_input_material_plant.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MP_material_plant.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == '*' &&
                it_MP_input_material_plant[lv_input_counter].plant == '*')
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == it_MP_material_plant[lv_database_counter].material &&
                it_MP_input_material_plant[lv_input_counter].plant == '*')
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MP_input_material_plant[lv_input_counter].tenant == it_MP_material_plant[lv_database_counter].tenant &&
                it_MP_input_material_plant[lv_input_counter].material == it_MP_material_plant[lv_database_counter].material &&
                it_MP_input_material_plant[lv_input_counter].plant == it_MP_material_plant[lv_database_counter].plant)
            {
                ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_material_plant[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MP_output_material_plant[lv_output_counter] = structuredClone(it_MP_input_material_plant[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MP_output_material_plant;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_tenant_D(c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_plant_D(it_P_plant, c_MP_output_material_plant, ct_MP_output_material_plant_log)
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
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }

            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant has data'});
                for (lv_counter = 0; lv_counter < it_P_plant.length; lv_counter = lv_counter + 1)
                {
                    if (it_P_plant[lv_counter].tenant == c_MP_output_material_plant.tenant &&
                        it_P_plant[lv_counter].plant == c_MP_output_material_plant.plant)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Plant exist'});
                }
                else                    
                {
                    c_MP_output_material_plant.system_field_message_type = 'ERROR';
                    c_MP_output_material_plant.system_field_message_description = 'Plant does not exist';
                    ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                }
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_material_plant_D(it_MP_material_plant, it_MP_output_material_plant, c_MP_output_material_plant, i_counter, ct_MP_output_material_plant_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Duplicate record';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
            else
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Material Plant exist'});
            }
            else
            {
                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                c_MP_output_material_plant.system_field_message_description = 'Material Plant does not exist';
                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MP_check_child_D(it_MSL_material_storage_location, it_MSL_output_material_storage_location, c_MP_output_material_plant, ct_MP_output_material_plant_log)
{
    var lv_counter_database = 0,
        lv_counter_output = 0,
        l_record_exist = '';

    if (c_MP_output_material_plant.material == '')
    {

    }
    else
    {  
        if (c_MP_output_material_plant.system_field_message_type == '')
        {
            for (lv_counter_database = 0; lv_counter_database < it_MSL_material_storage_location.length; lv_counter_database = lv_counter_database + 1)
            {
                if (it_MSL_material_storage_location[lv_counter_database].tenant == c_MP_output_material_plant.tenant &&
                    it_MSL_material_storage_location[lv_counter_database].material == c_MP_output_material_plant.material &&
                    it_MSL_material_storage_location[lv_counter_database].plant == c_MP_output_material_plant.plant)
                {
                    l_record_exist = '';
                    for (lv_counter_output = 0; lv_counter_output < it_MSL_output_material_storage_location.length; lv_counter_output = lv_counter_output + 1)
                    {
                        if (it_MSL_output_material_storage_location[lv_counter_output].tenant == it_MSL_material_storage_location[lv_counter_database].tenant &&
                            it_MSL_output_material_storage_location[lv_counter_output].material == it_MSL_material_storage_location[lv_counter_database].material &&
                            it_MSL_output_material_storage_location[lv_counter_output].plant == it_MSL_material_storage_location[lv_counter_database].plant &&
                            it_MSL_output_material_storage_location[lv_counter_output].storage_location == it_MSL_material_storage_location[lv_counter_database].storage_location)
                        {
                            l_record_exist = 'X';
                            if (it_MSL_output_material_storage_location[lv_counter_output].system_field_message_type == 'ERROR')
                            {
                                c_MP_output_material_plant.system_field_message_type = 'ERROR';
                                c_MP_output_material_plant.system_field_message_description = 'Child (Material Storage Location) has error';
                                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});                                
                            }
                            else
                            {
                                ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Child (Material Storage Location) has no error'});
                            }
                            break;
                        }
                    }

                    if (l_record_exist == '')
                    {
                        c_MP_output_material_plant.system_field_message_type = 'ERROR';
                        c_MP_output_material_plant.system_field_message_description = 'Child (Material Storage Location) exist';
                        ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : c_MP_output_material_plant.system_field_message_type, message_description : c_MP_output_material_plant.system_field_message_description});
                    }
                    else
                    {
                        ct_MP_output_material_plant_log.push({tenant : c_MP_output_material_plant.tenant, material : c_MP_output_material_plant.material, plant : c_MP_output_material_plant.plant, message_type : 'INFORMATION', message_description : 'Child (Material Storage Location) does not exist'});
                    }
                }
            }
        }
    }
}    




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_copy_input_D(it_MG_material_general, it_MG_input_material_general)
{
    var lv_input_counter = 0,
        lv_database_counter = 0,
        lv_output_counter = 0,
        lv_record_exist = '';

    var ot_MG_output_material_general = structuredClone(tt_MG_output_material_general);

    for (lv_input_counter = 0; lv_input_counter < it_MG_input_material_general.length; lv_input_counter = lv_input_counter + 1)
    {
        lv_record_exist = '';
        for (lv_database_counter = 0; lv_database_counter < it_MG_material_general.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MG_input_material_general[lv_input_counter].tenant == it_MG_material_general[lv_database_counter].tenant &&
                it_MG_input_material_general[lv_input_counter].material == '*')
            {
                ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_material_general[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }

            if (it_MG_input_material_general[lv_input_counter].tenant == it_MG_material_general[lv_database_counter].tenant &&
                it_MG_input_material_general[lv_input_counter].material == it_MG_material_general[lv_database_counter].material)
            {
                ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_material_general[lv_database_counter]);
                lv_output_counter = lv_output_counter + 1;
                lv_record_exist = 'X';
                // break;
            }
        }

        if (lv_record_exist == 'X')
        {

        }
        else
        {
            ot_MG_output_material_general[lv_output_counter] = structuredClone(it_MG_input_material_general[lv_input_counter]);
            lv_output_counter = lv_output_counter + 1;
        }
    }            

    return ot_MG_output_material_general;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_tenant_D(c_MG_output_material_general, ct_MG_output_material_general_log)
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
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                                
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Tenant has data'});
            }
        }
    }  
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_material_general_D(it_MG_material_general, it_MG_output_material_general, c_MG_output_material_general, i_counter, ct_MG_output_material_general_log)
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Duplicate record';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                
            }
            else
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'No Duplicate record'});
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
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Material General exist'});
            }
            else
            {
                c_MG_output_material_general.system_field_message_type = 'ERROR';
                c_MG_output_material_general.system_field_message_description = 'Material General does not exist';
                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MG_check_child_D(it_MP_material_plant, it_MP_output_material_plant, c_MG_output_material_general, ct_MG_output_material_general_log)
{
    var lv_counter_database = 0,
        lv_counter_output = 0,
        lv_record_exist = '';

    if (c_MG_output_material_general.material == '') 
    {

    }
    else
    {  
        if (c_MG_output_material_general.system_field_message_type == '')
        {
            for (lv_counter_database = 0; lv_counter_database < it_MP_material_plant.length; lv_counter_database = lv_counter_database + 1)
            {   
                if (it_MP_material_plant[lv_counter_database].tenant == c_MG_output_material_general.tenant &&
                    it_MP_material_plant[lv_counter_database].material == c_MG_output_material_general.material)
                {
                    lv_record_exist = '';
                    for (lv_counter_output = 0; lv_counter_output < it_MP_output_material_plant.length; lv_counter_output = lv_counter_output + 1)
                    {
                        if (it_MP_output_material_plant[lv_counter_output].tenant == it_MP_material_plant[lv_counter_database].tenant &&
                            it_MP_output_material_plant[lv_counter_output].material == it_MP_material_plant[lv_counter_database].material &&
                            it_MP_output_material_plant[lv_counter_output].plant == it_MP_material_plant[lv_counter_database].plant)                       
                        {
                            if (it_MP_output_material_plant[lv_counter_output].system_field_message_type == 'ERROR')
                            {
                                c_MG_output_material_general.system_field_message_type = 'ERROR';
                                c_MG_output_material_general.system_field_message_description = 'Child (Material Plant) has error';
                                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});  
                            }
                            else
                            {
                                ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Child (Material Plant) has no error'});
                            }
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {
                        ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : 'INFORMATION', message_description : 'Child (Material Plant) will be deleted'});
                    }
                    else
                    {
                        c_MG_output_material_general.system_field_message_type = 'ERROR';
                        c_MG_output_material_general.system_field_message_description = 'Child (Material Plant) exist';
                        ct_MG_output_material_general_log.push({tenant : c_MG_output_material_general.tenant, material : c_MG_output_material_general.material, message_type : c_MG_output_material_general.system_field_message_type, message_description : c_MG_output_material_general.system_field_message_description});                        
                    }
                }
            }
        }
    }
}    


//----------------------------------------------------------------------------//
// Version 20240700
//----------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}


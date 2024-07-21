
//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MDH_material_document_header = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',        
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDH_input_material_document_header = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',        
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDH_output_material_document_header = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',        
        system_field_message_type : '',
        system_field_message_description : ''
    }
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MDI_material_document_item = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        item : '',
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDI_input_material_document_item = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        item : '',
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDI_output_material_document_item = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        item : '',
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_create_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
{
    var lv_tenant = '',
    lv_counter = 0;

    MDH_select_C();
    MDI_select_C();

// Header
    MDH_copy_input_output_C(it_MDH_input_material_document_header);
    for (lv_counter = 0; lv_counter < lt_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
    {
        MDH_check_material_document_header_C(lt_MDH_material_document_header, lt_MDH_output_material_document_header, lt_MDH_output_material_document_header[lv_counter], lv_counter);
    }


// Item
    MDI_copy_input_output_C(it_MDI_input_material_document_item);   
    for (lv_counter = 0; lv_counter < lt_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
    {
        MDI_check_material_document_item_C(lt_MDI_material_document_item, lt_MDI_output_material_document_item, lt_MDI_output_material_document_item[lv_counter], lv_counter);
    }   

/*
console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item); 
*/
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_read_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
{
    var lv_tenant = '',
    lv_counter = 0;

    MDH_select_R();
    MDI_select_R();


// Header    
    MDH_copy_input_output_R(lt_MDH_material_document_header, it_MDH_input_material_document_header);
    for (lv_counter = 0; lv_counter < lt_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
    {
        MDH_check_material_document_header_R(lt_MDH_material_document_header, lt_MDH_output_material_document_header, lt_MDH_output_material_document_header[lv_counter], lv_counter);
    }


// Item    
    MDI_copy_input_output_R(lt_MDI_material_document_item, it_MDI_input_material_document_item);   
    for (lv_counter = 0; lv_counter < lt_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
    {
        MDI_check_material_document_item_R(lt_MDI_material_document_item, lt_MDI_output_material_document_item, lt_MDI_output_material_document_item[lv_counter], lv_counter);
    }   

/*
console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item); 
*/
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_update_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
{
    var lv_tenant = '',
    lv_counter = 0;

    MDH_select_U();
    MDI_select_U();

// Header
    MDH_copy_input_output_U(it_MDH_input_material_document_header);
    for (lv_counter = 0; lv_counter < lt_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
    {
        MDH_check_material_document_header_U(lt_MDH_material_document_header, lt_MDH_output_material_document_header, lt_MDH_output_material_document_header[lv_counter], lv_counter);
    }

/*
// Item
    MDI_copy_input_output_U(it_MDI_input_material_document_item);   
    for (lv_counter = 0; lv_counter < lt_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
    {
        MDI_check_material_document_item_U(lt_MDI_material_document_item, lt_MDI_output_material_document_item, lt_MDI_output_material_document_item[lv_counter], lv_counter);
    }   

*/
console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item); 

}





//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_select_C()
{
    lt_MDH_material_document_header = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_select_C()
{
    lt_MDI_material_document_item = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_input_output_C(it_MDH_input_material_document_header)
{
    lt_MDH_output_material_document_header = it_MDH_input_material_document_header; 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_check_material_document_header_C(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (ct_MDH_output_material_document_header.material_document == '')
    {

    }
    else  
    {  
        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (iv_counter + 1) ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_output_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                    it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MDH_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                    it_MDH_material_document_header[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Material Document Header already exist';
            }
            else
            {

            }
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_input_output_C(it_MDI_input_material_document_item)
{
    lt_MDI_output_material_document_item = it_MDI_input_material_document_item;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_check_material_document_item_C(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (ct_MDI_output_material_document_item.material_document == '')
    {

    }
    else  
    {  
        if (ct_MDI_output_material_document_item.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (iv_counter + 1) ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
            {
                if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                    it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                    it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                ct_MDI_output_material_document_item.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (ct_MDI_output_material_document_item.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MDI_material_document_item.length; lv_counter = lv_counter + 1)
            {
                if (it_MDI_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                    it_MDI_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                    it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                ct_MDI_output_material_document_item.system_field_message_description = 'Material Document Item already exist';
            }
            else
            {

            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_select_R()
{
    lt_MDH_material_document_header = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_select_R()
{
    lt_MDI_material_document_item = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_input_output_R(it_MDH_material_document_header, it_MDH_input_material_document_header)
{
    var lv_database_counter = 0,
        lv_output_counter = 0;

    if (it_MDH_input_material_document_header[0].material_document == '*' &&
        it_MDH_input_material_document_header[0].fiscal_year == '*' )
    {
        for (lv_database_counter = 0; lv_database_counter < it_MDH_material_document_header.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MDH_material_document_header[lv_database_counter].tenant == it_MDH_input_material_document_header[0].tenant)
            {
                lt_MDH_output_material_document_header[lv_output_counter] = it_MDH_material_document_header[lv_database_counter];
                lv_output_counter = lv_output_counter + 1;
            }
        }
    }
    else
    {
        lt_MDH_output_material_document_header = it_MDH_input_material_document_header;
    }

    for (lv_output_counter = 0; lv_output_counter < lt_MDH_output_material_document_header.length; lv_output_counter = lv_output_counter + 1)
    {
        for (lv_database_counter = 0; lv_database_counter < it_MDH_material_document_header.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MDH_material_document_header[lv_database_counter].tenant == lt_MDH_output_material_document_header[lv_output_counter].tenant &&
                it_MDH_material_document_header[lv_database_counter].material_document == lt_MDH_output_material_document_header[lv_output_counter].material_document &&
                it_MDH_material_document_header[lv_database_counter].fiscal_year == lt_MDH_output_material_document_header[lv_output_counter].fiscal_year)
            {
                lt_MDH_output_material_document_header[lv_output_counter] = it_MDH_material_document_header[lv_database_counter];
            }
        }
    }            
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_check_material_document_header_R(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (ct_MDH_output_material_document_header.material_document == '')
    {

    }
    else  
    {  
        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (iv_counter + 1) ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_output_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MDH_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                    it_MDH_material_document_header[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Material Document Header does not exist';
            }
        }
    }
}





//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_input_output_R(it_MDI_material_document_item, it_MDI_input_material_document_item)
{
    var lv_database_counter = 0,
        lv_output_counter = 0;

    if (it_MDI_input_material_document_item[0].material_document == '*' &&
        it_MDI_input_material_document_item[0].fiscal_year == '*' &&
        it_MDI_input_material_document_item[0].item == '*')
    {
        for (lv_database_counter = 0; lv_database_counter < it_MDI_material_document_item.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MDI_material_document_item[lv_database_counter].tenant == it_MDI_input_material_document_item[0].tenant)
            {
                lt_MDI_output_material_document_item[lv_output_counter] = it_MDI_material_document_item[lv_database_counter];
                lv_output_counter = lv_output_counter + 1;
            }
        }
    }
    else
    {
        lt_MDI_output_material_document_item = it_MDI_input_material_document_item;
    }

    for (lv_output_counter = 0; lv_output_counter < lt_MDI_output_material_document_item.length; lv_output_counter = lv_output_counter + 1)
    {
        for (lv_database_counter = 0; lv_database_counter < it_MDI_material_document_item.length; lv_database_counter = lv_database_counter + 1)
        {
            if (it_MDI_material_document_item[lv_database_counter].tenant == lt_MDI_output_material_document_item[lv_output_counter].tenant &&
                it_MDI_material_document_item[lv_database_counter].material_document == lt_MDI_output_material_document_item[lv_output_counter].material_document &&
                it_MDI_material_document_item[lv_database_counter].fiscal_year == lt_MDI_output_material_document_item[lv_output_counter].fiscal_year &&
                it_MDI_material_document_item[lv_database_counter].item == lt_MDI_output_material_document_item[lv_output_counter].item)
            {
                lt_MDI_output_material_document_item[lv_output_counter] = it_MDI_material_document_item[lv_database_counter];
            }
        }
    }            
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_check_material_document_item_R(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (ct_MDI_output_material_document_item.material_document == '')
    {

    }
    else  
    {  
        if (ct_MDI_output_material_document_item.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (iv_counter + 1) ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
            {
                if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                    it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                    it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                ct_MDI_output_material_document_item.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (ct_MDI_output_material_document_item.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MDI_material_document_item.length; lv_counter = lv_counter + 1)
            {
                if (it_MDI_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                    it_MDI_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                    it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                ct_MDI_output_material_document_item.system_field_message_description = 'Material Document Item does not exist';
            }
        }
    }
}




//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_select_U()
{
    lt_MDH_material_document_header = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_select_U()
{
    lt_MDI_material_document_item = 
    [
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'SUGUMAR', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'MDT1', item_text : 'IT1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
        { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'MDT2', item_text : 'IT2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
    ];
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_check_material_document_header_U(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
{
    var lv_record_exist = '',
        lv_counter = 0;

    if (ct_MDH_output_material_document_header.material_document == '')
    {

    }
    else  
    {  
        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        { 
            lv_record_exist = '';       
            for (lv_counter = (iv_counter + 1) ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_output_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Duplicate record';
            }
            else
            {

            }
        }

        if (ct_MDH_output_material_document_header.system_field_message_type == '')
        {
            lv_record_exist = '';
            for (lv_counter = 0; lv_counter < it_MDH_material_document_header.length; lv_counter = lv_counter + 1)
            {
                if (it_MDH_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                    it_MDH_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                    it_MDH_material_document_header[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                {
                    lv_record_exist = 'X';
                    // break                                                                                                    ????
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Material Document Header does not exist';
            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_input_output_U(it_MDH_input_material_document_header)
{
    lt_MDH_output_material_document_header = it_MDH_input_material_document_header; 
}

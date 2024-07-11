/*
    check child_D
*/

//--------------------------------------------------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_hide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "none";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = true;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_unhide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "table";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = false;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = true;
}



//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_material_document_item_hide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "none";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = true;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_material_document_item_unhide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "table";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = false;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = true;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MD_set_field_property_C()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = true;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_C();
    MDI_set_field_property_C();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = false; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_C()
{
    lv_tenant = document.getElementById('MD_tenant').value;

    MDH_copy_screen_input_C(lv_tenant);
    MDI_copy_screen_input_C(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_C()
{
    MDH_copy_output_screen_C(lt_MDH_output_material_document_header);
    MDI_copy_output_screen_C(lt_MDI_output_material_document_item);
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MD_set_field_property_R()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = true;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_R();
    MDI_set_field_property_R();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = false; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_R()
{
    lv_tenant = document.getElementById('MD_tenant').value;

    MDH_copy_screen_input_R(lv_tenant);
    MDI_copy_screen_input_R(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_R()
{
    MDH_copy_output_screen_R(lt_MDH_output_material_document_header);
    MDI_copy_output_screen_R(lt_MDI_output_material_document_item);
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MD_set_field_property_U()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = true;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_U();
    MDI_set_field_property_U();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = false; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}



//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_U()
{
    lv_tenant = document.getElementById('MD_tenant').value;

    MDH_copy_screen_input_U(lv_tenant);
    MDI_copy_screen_input_U(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_U()
{
    MDH_copy_output_screen_U(lt_MDH_output_material_document_header);
    MDI_copy_output_screen_U(lt_MDI_output_material_document_item);
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MD_set_field_property_D()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = true;    

    MDH_set_field_property_D();
    MDI_set_field_property_D();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = false;                    
}



//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_D()
{
    lv_tenant = document.getElementById('MD_tenant').value;

    MDH_copy_screen_input_D(lv_tenant);
    MDI_copy_screen_input_D(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_D()
{
    MDH_copy_output_screen_D(lt_MDH_output_material_document_header);
    MDI_copy_output_screen_D(lt_MDI_output_material_document_item);
}








//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_C()
{
    var lv_field_name = "MDH_material_document1";
    var MDH_material_document1 = document.getElementById(lv_field_name);
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = false;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = false;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = false; 
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = false;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = false;
    var MDH_material_document_reverse1 = document.getElementById("MDH_material_document_reverse1");
    MDH_material_document_reverse1.disabled = true;
    var MDH_fiscal_year_reverse1 = document.getElementById("MDH_fiscal_year_reverse1");
    MDH_fiscal_year_reverse1.disabled = true;          
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = false;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = false;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = false;
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = false;    
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = false;
    var MDH_material_document_reverse2 = document.getElementById("MDH_material_document_reverse2");
    MDH_material_document_reverse2.disabled = true;
    var MDH_fiscal_year_reverse2 = document.getElementById("MDH_fiscal_year_reverse2");
    MDH_fiscal_year_reverse2.disabled = true;             
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_C()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = false;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = false;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = false;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = false;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = false;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = false;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = false;
    var MDI_material_document_reverse1 = document.getElementById("MDI_material_document_reverse1");
    MDI_material_document_reverse1.disabled = true;
    var MDI_fiscal_year_reverse1 = document.getElementById("MDI_fiscal_year_reverse1");
    MDI_fiscal_year_reverse1.disabled = true;
    var MDI_item_reverse1 = document.getElementById("MDI_item_reverse1");
    MDI_item_reverse1.disabled = true;    
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = false;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = false;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = false;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = false;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = false;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = false;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = false;
    var MDI_material_document_reverse2 = document.getElementById("MDI_material_document_reverse2");
    MDI_material_document_reverse2.disabled = true;
    var MDI_fiscal_year_reverse2 = document.getElementById("MDI_fiscal_year_reverse2");
    MDI_fiscal_year_reverse2.disabled = true;
    var MDI_item_reverse2 = document.getElementById("MDI_item_reverse2");
    MDI_item_reverse2.disabled = true;      
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = false;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = false;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = false;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = false;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = false;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = false;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = false;
    var MDI_material_document_reverse3 = document.getElementById("MDI_material_document_reverse3");
    MDI_material_document_reverse3.disabled = true;
    var MDI_fiscal_year_reverse3 = document.getElementById("MDI_fiscal_year_reverse3");
    MDI_fiscal_year_reverse3.disabled = true;
    var MDI_item_reverse3 = document.getElementById("MDI_item_reverse3");
    MDI_item_reverse3.disabled = true;      
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = false;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = false;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = false;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = false;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = false;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = false;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = false;
    var MDI_material_document_reverse4 = document.getElementById("MDI_material_document_reverse4");
    MDI_material_document_reverse4.disabled = true;
    var MDI_fiscal_year_reverse4 = document.getElementById("MDI_fiscal_year_reverse4");
    MDI_fiscal_year_reverse4.disabled = true;
    var MDI_item_reverse4 = document.getElementById("MDI_item_reverse4");
    MDI_item_reverse4.disabled = true;      
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = false;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = false;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = false;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = false;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = false;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = false;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = false;
    var MDI_material_document_reverse5 = document.getElementById("MDI_material_document_reverse5");
    MDI_material_document_reverse5.disabled = true;
    var MDI_fiscal_year_reverse5 = document.getElementById("MDI_fiscal_year_reverse5");
    MDI_fiscal_year_reverse5.disabled = true;
    var MDI_item_reverse5 = document.getElementById("MDI_item_reverse5");
    MDI_item_reverse5.disabled = true;      
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = false;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = false;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = false;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = false;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = false;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = false;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = false;
    var MDI_material_document_reverse6 = document.getElementById("MDI_material_document_reverse6");
    MDI_material_document_reverse6.disabled = true;
    var MDI_fiscal_year_reverse6 = document.getElementById("MDI_fiscal_year_reverse6");
    MDI_fiscal_year_reverse6.disabled = true;
    var MDI_item_reverse6 = document.getElementById("MDI_item_reverse6");
    MDI_item_reverse6.disabled = true;      
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = false;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = false;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = false;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = false;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = false;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = false;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = false;
    var MDI_material_document_reverse7 = document.getElementById("MDI_material_document_reverse7");
    MDI_material_document_reverse7.disabled = true;
    var MDI_fiscal_year_reverse7 = document.getElementById("MDI_fiscal_year_reverse7");
    MDI_fiscal_year_reverse7.disabled = true;
    var MDI_item_reverse7 = document.getElementById("MDI_item_reverse7");
    MDI_item_reverse7.disabled = true;      
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = false;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = false;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = false;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = false;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = false;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = false;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = false;
    var MDI_material_document_reverse8 = document.getElementById("MDI_material_document_reverse8");
    MDI_material_document_reverse8.disabled = true;
    var MDI_fiscal_year_reverse8 = document.getElementById("MDI_fiscal_year_reverse8");
    MDI_fiscal_year_reverse8.disabled = true;
    var MDI_item_reverse8 = document.getElementById("MDI_item_reverse8");
    MDI_item_reverse8.disabled = true;          
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_R()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true;
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = true;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = true;
    var MDH_material_document_reverse1 = document.getElementById("MDH_material_document_reverse1");
    MDH_material_document_reverse1.disabled = true;
    var MDH_fiscal_year_reverse1 = document.getElementById("MDH_fiscal_year_reverse1");
    MDH_fiscal_year_reverse1.disabled = true;             
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true; 
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = true;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = true;
    var MDH_material_document_reverse2 = document.getElementById("MDH_material_document_reverse2");
    MDH_material_document_reverse2.disabled = true;
    var MDH_fiscal_year_reverse2 = document.getElementById("MDH_fiscal_year_reverse2");
    MDH_fiscal_year_reverse2.disabled = true;              

}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_R()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = true;
    var MDI_material_document_reverse1 = document.getElementById("MDI_material_document_reverse1");
    MDI_material_document_reverse1.disabled = true;
    var MDI_fiscal_year_reverse1 = document.getElementById("MDI_fiscal_year_reverse1");
    MDI_fiscal_year_reverse1.disabled = true;
    var MDI_item_reverse1 = document.getElementById("MDI_item_reverse1");
    MDI_item_reverse1.disabled = true;    
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = true;
    var MDI_material_document_reverse2 = document.getElementById("MDI_material_document_reverse2");
    MDI_material_document_reverse2.disabled = true;
    var MDI_fiscal_year_reverse2 = document.getElementById("MDI_fiscal_year_reverse2");
    MDI_fiscal_year_reverse2.disabled = true;
    var MDI_item_reverse2 = document.getElementById("MDI_item_reverse2");
    MDI_item_reverse2.disabled = true;      
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = true;
    var MDI_material_document_reverse3 = document.getElementById("MDI_material_document_reverse3");
    MDI_material_document_reverse3.disabled = true;
    var MDI_fiscal_year_reverse3 = document.getElementById("MDI_fiscal_year_reverse3");
    MDI_fiscal_year_reverse3.disabled = true;
    var MDI_item_reverse3 = document.getElementById("MDI_item_reverse3");
    MDI_item_reverse3.disabled = true;      
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = true;
    var MDI_material_document_reverse4 = document.getElementById("MDI_material_document_reverse4");
    MDI_material_document_reverse4.disabled = true;
    var MDI_fiscal_year_reverse4 = document.getElementById("MDI_fiscal_year_reverse4");
    MDI_fiscal_year_reverse4.disabled = true;
    var MDI_item_reverse4 = document.getElementById("MDI_item_reverse4");
    MDI_item_reverse4.disabled = true;      
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = true;
    var MDI_material_document_reverse5 = document.getElementById("MDI_material_document_reverse5");
    MDI_material_document_reverse5.disabled = true;
    var MDI_fiscal_year_reverse5 = document.getElementById("MDI_fiscal_year_reverse5");
    MDI_fiscal_year_reverse5.disabled = true;
    var MDI_item_reverse5 = document.getElementById("MDI_item_reverse5");
    MDI_item_reverse5.disabled = true;      
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = true;
    var MDI_material_document_reverse6 = document.getElementById("MDI_material_document_reverse6");
    MDI_material_document_reverse6.disabled = true;
    var MDI_fiscal_year_reverse6 = document.getElementById("MDI_fiscal_year_reverse6");
    MDI_fiscal_year_reverse6.disabled = true;
    var MDI_item_reverse6 = document.getElementById("MDI_item_reverse6");
    MDI_item_reverse6.disabled = true;      
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = true;
    var MDI_material_document_reverse7 = document.getElementById("MDI_material_document_reverse7");
    MDI_material_document_reverse7.disabled = true;
    var MDI_fiscal_year_reverse7 = document.getElementById("MDI_fiscal_year_reverse7");
    MDI_fiscal_year_reverse7.disabled = true;
    var MDI_item_reverse7 = document.getElementById("MDI_item_reverse7");
    MDI_item_reverse7.disabled = true;      
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = true;
    var MDI_material_document_reverse8 = document.getElementById("MDI_material_document_reverse8");
    MDI_material_document_reverse8.disabled = true;
    var MDI_fiscal_year_reverse8 = document.getElementById("MDI_fiscal_year_reverse8");
    MDI_fiscal_year_reverse8.disabled = true;
    var MDI_item_reverse8 = document.getElementById("MDI_item_reverse8");
    MDI_item_reverse8.disabled = true;          
}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_screen_input_R(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDH_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document1').value,
        fiscal_year : document.getElementById('MDH_fiscal_year1').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDH_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document2').value,
        fiscal_year : document.getElementById('MDH_fiscal_year2').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_screen_input_R(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDI_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document1').value,
        fiscal_year : document.getElementById('MDI_fiscal_year1').value,
        item : document.getElementById('MDI_item1').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document2').value,
        fiscal_year : document.getElementById('MDI_fiscal_year2').value,
        item : document.getElementById('MDI_item2').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document3').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[2] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document3').value,
        fiscal_year : document.getElementById('MDI_fiscal_year3').value,
        item : document.getElementById('MDI_item3').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document4').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[3] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document4').value,
        fiscal_year : document.getElementById('MDI_fiscal_year4').value,
        item : document.getElementById('MDI_item4').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document5').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[4] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document5').value,
        fiscal_year : document.getElementById('MDI_fiscal_year5').value,
        item : document.getElementById('MDI_item5').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document6').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[5] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document6').value,
        fiscal_year : document.getElementById('MDI_fiscal_year6').value,
        item : document.getElementById('MDI_item6').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document7').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document7').value,
        fiscal_year : document.getElementById('MDI_fiscal_year7').value,
        item : document.getElementById('MDI_item7').value,
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
        };
    }

    lv_material_document = document.getElementById('MDI_material_document8').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document8').value,
        fiscal_year : document.getElementById('MDI_fiscal_year8').value,
        item : document.getElementById('MDI_item8').value,
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
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_output_screen_R(it_MDH_output_material_document_header)
{
    if (it_MDH_output_material_document_header.length >= 1)
    {
        document.getElementById('MDH_material_document1').value = it_MDH_output_material_document_header[0].MDH_material_document;
        document.getElementById('MDH_fiscal_year1').value = it_MDH_output_material_document_header[0].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type1').value = it_MDH_output_material_document_header[0].MDH_material_document_type;
        document.getElementById('MDH_document_date1').value = it_MDH_output_material_document_header[0].MDH_document_date;
        document.getElementById('MDH_posting_date1').value = it_MDH_output_material_document_header[0].MDH_posting_date;
        document.getElementById('MDH_header_reference1').value = it_MDH_output_material_document_header[0].MDH_header_reference;
        document.getElementById('MDH_header_text1').value = it_MDH_output_material_document_header[0].MDH_header_text;
        document.getElementById('MDH_system_field_message_type1').value = it_MDH_output_material_document_header[0].system_field_message_type;
        document.getElementById('MDH_system_field_message_description1').value = it_MDH_output_material_document_header[0].system_field_message_description;         
    }
    
    if (it_MDH_output_material_document_header.length >= 2)
    {
        document.getElementById('MDH_material_document2').value = it_MDH_output_material_document_header[1].MDH_material_document;
        document.getElementById('MDH_fiscal_year2').value = it_MDH_output_material_document_header[1].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type2').value = it_MDH_output_material_document_header[1].MDH_material_document_type;
        document.getElementById('MDH_document_date2').value = it_MDH_output_material_document_header[1].MDH_document_date;
        document.getElementById('MDH_posting_date2').value = it_MDH_output_material_document_header[1].MDH_posting_date;
        document.getElementById('MDH_header_reference2').value = it_MDH_output_material_document_header[1].MDH_header_reference;
        document.getElementById('MDH_header_text2').value = it_MDH_output_material_document_header[1].MDH_header_text;
        document.getElementById('MDH_system_field_message_type2').value = it_MDH_output_material_document_header[1].system_field_message_type;
        document.getElementById('MDH_system_field_message_description2').value = it_MDH_output_material_document_header[1].system_field_message_description;         
    }
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_output_screen_R(it_MDI_output_material_document_item)
{
    if (it_MDI_output_material_document_item.length >= 1)
    {
        document.getElementById('MDI_material_document1').value = it_MDI_output_material_document_item[0].MDI_material_document;
        document.getElementById('MDI_fiscal_year1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year;
        document.getElementById('MDI_item1').value = it_MDI_output_material_document_item[0].MDI_item;
        document.getElementById('MDI_material1').value = it_MDI_output_material_document_item[0].MDI_material;
        document.getElementById('MDI_plant1').value = it_MDI_output_material_document_item[0].MDI_plant;
        document.getElementById('MDI_storage_location1').value = it_MDI_output_material_document_item[0].MDI_storage_location;
        document.getElementById('MDI_quantity1').value = it_MDI_output_material_document_item[0].MDI_quantity;
        document.getElementById('MDI_entry_UOM1').value = it_MDI_output_material_document_item[0].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type1').value = it_MDI_output_material_document_item[0].MDI_material_movement_type;
        document.getElementById('MDI_item_text1').value = it_MDI_output_material_document_item[0].MDI_item_text;
        document.getElementById('MDI_material_document_reverse1').value = it_MDI_output_material_document_item[0].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse1').value = it_MDI_output_material_document_item[0].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type1').value = it_MDI_output_material_document_item[0].system_field_message_type;
        document.getElementById('MDI_system_field_message_description1').value = it_MDI_output_material_document_item[0].system_field_message_description;         
    }

    if (it_MDI_output_material_document_item.length >= 2)
    {
        document.getElementById('MDI_material_document2').value = it_MDI_output_material_document_item[1].MDI_material_document;
        document.getElementById('MDI_fiscal_year2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year;
        document.getElementById('MDI_item2').value = it_MDI_output_material_document_item[1].MDI_item;
        document.getElementById('MDI_material2').value = it_MDI_output_material_document_item[1].MDI_material;
        document.getElementById('MDI_plant2').value = it_MDI_output_material_document_item[1].MDI_plant;
        document.getElementById('MDI_storage_location2').value = it_MDI_output_material_document_item[1].MDI_storage_location;
        document.getElementById('MDI_quantity2').value = it_MDI_output_material_document_item[1].MDI_quantity;
        document.getElementById('MDI_entry_UOM2').value = it_MDI_output_material_document_item[1].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type2').value = it_MDI_output_material_document_item[1].MDI_material_movement_type;
        document.getElementById('MDI_item_text2').value = it_MDI_output_material_document_item[1].MDI_item_text;
        document.getElementById('MDI_material_document_reverse2').value = it_MDI_output_material_document_item[1].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse2').value = it_MDI_output_material_document_item[1].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type2').value = it_MDI_output_material_document_item[1].system_field_message_type;
        document.getElementById('MDI_system_field_message_description2').value = it_MDI_output_material_document_item[1].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 3)
    {
        document.getElementById('MDI_material_document3').value = it_MDI_output_material_document_item[2].MDI_material_document;
        document.getElementById('MDI_fiscal_year3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year;
        document.getElementById('MDI_item3').value = it_MDI_output_material_document_item[2].MDI_item;
        document.getElementById('MDI_material3').value = it_MDI_output_material_document_item[2].MDI_material;
        document.getElementById('MDI_plant3').value = it_MDI_output_material_document_item[2].MDI_plant;
        document.getElementById('MDI_storage_location3').value = it_MDI_output_material_document_item[2].MDI_storage_location;
        document.getElementById('MDI_quantity3').value = it_MDI_output_material_document_item[2].MDI_quantity;
        document.getElementById('MDI_entry_UOM3').value = it_MDI_output_material_document_item[2].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type3').value = it_MDI_output_material_document_item[2].MDI_material_movement_type;
        document.getElementById('MDI_item_text3').value = it_MDI_output_material_document_item[2].MDI_item_text;
        document.getElementById('MDI_material_document_reverse3').value = it_MDI_output_material_document_item[2].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse3').value = it_MDI_output_material_document_item[2].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type3').value = it_MDI_output_material_document_item[2].system_field_message_type;
        document.getElementById('MDI_system_field_message_description3').value = it_MDI_output_material_document_item[2].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 4)
    {
        document.getElementById('MDI_material_document4').value = it_MDI_output_material_document_item[3].MDI_material_document;
        document.getElementById('MDI_fiscal_year4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year;
        document.getElementById('MDI_item4').value = it_MDI_output_material_document_item[3].MDI_item;
        document.getElementById('MDI_material4').value = it_MDI_output_material_document_item[3].MDI_material;
        document.getElementById('MDI_plant4').value = it_MDI_output_material_document_item[3].MDI_plant;
        document.getElementById('MDI_storage_location4').value = it_MDI_output_material_document_item[3].MDI_storage_location;
        document.getElementById('MDI_quantity4').value = it_MDI_output_material_document_item[3].MDI_quantity;
        document.getElementById('MDI_entry_UOM4').value = it_MDI_output_material_document_item[3].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type4').value = it_MDI_output_material_document_item[3].MDI_material_movement_type;
        document.getElementById('MDI_item_text4').value = it_MDI_output_material_document_item[3].MDI_item_text;
        document.getElementById('MDI_material_document_reverse4').value = it_MDI_output_material_document_item[3].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse4').value = it_MDI_output_material_document_item[3].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type4').value = it_MDI_output_material_document_item[3].system_field_message_type;
        document.getElementById('MDI_system_field_message_description4').value = it_MDI_output_material_document_item[3].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 5)
    {
        document.getElementById('MDI_material_document5').value = it_MDI_output_material_document_item[4].MDI_material_document;
        document.getElementById('MDI_fiscal_year5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year;
        document.getElementById('MDI_item5').value = it_MDI_output_material_document_item[4].MDI_item;
        document.getElementById('MDI_material5').value = it_MDI_output_material_document_item[4].MDI_material;
        document.getElementById('MDI_plant5').value = it_MDI_output_material_document_item[4].MDI_plant;
        document.getElementById('MDI_storage_location5').value = it_MDI_output_material_document_item[4].MDI_storage_location;
        document.getElementById('MDI_quantity5').value = it_MDI_output_material_document_item[4].MDI_quantity;
        document.getElementById('MDI_entry_UOM5').value = it_MDI_output_material_document_item[4].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type5').value = it_MDI_output_material_document_item[4].MDI_material_movement_type;
        document.getElementById('MDI_item_text5').value = it_MDI_output_material_document_item[4].MDI_item_text;
        document.getElementById('MDI_material_document_reverse5').value = it_MDI_output_material_document_item[4].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse5').value = it_MDI_output_material_document_item[4].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type5').value = it_MDI_output_material_document_item[4].system_field_message_type;
        document.getElementById('MDI_system_field_message_description5').value = it_MDI_output_material_document_item[4].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 6)
    {
        document.getElementById('MDI_material_document6').value = it_MDI_output_material_document_item[5].MDI_material_document;
        document.getElementById('MDI_fiscal_year6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year;
        document.getElementById('MDI_item6').value = it_MDI_output_material_document_item[5].MDI_item;
        document.getElementById('MDI_material6').value = it_MDI_output_material_document_item[5].MDI_material;
        document.getElementById('MDI_plant6').value = it_MDI_output_material_document_item[5].MDI_plant;
        document.getElementById('MDI_storage_location6').value = it_MDI_output_material_document_item[5].MDI_storage_location;
        document.getElementById('MDI_quantity6').value = it_MDI_output_material_document_item[5].MDI_quantity;
        document.getElementById('MDI_entry_UOM6').value = it_MDI_output_material_document_item[5].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type6').value = it_MDI_output_material_document_item[5].MDI_material_movement_type;
        document.getElementById('MDI_item_text6').value = it_MDI_output_material_document_item[5].MDI_item_text;
        document.getElementById('MDI_material_document_reverse6').value = it_MDI_output_material_document_item[5].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse6').value = it_MDI_output_material_document_item[5].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type6').value = it_MDI_output_material_document_item[5].system_field_message_type;
        document.getElementById('MDI_system_field_message_description6').value = it_MDI_output_material_document_item[5].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 7)
    {
        document.getElementById('MDI_material_document7').value = it_MDI_output_material_document_item[6].MDI_material_document;
        document.getElementById('MDI_fiscal_year7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year;
        document.getElementById('MDI_item7').value = it_MDI_output_material_document_item[6].MDI_item;
        document.getElementById('MDI_material7').value = it_MDI_output_material_document_item[6].MDI_material;
        document.getElementById('MDI_plant7').value = it_MDI_output_material_document_item[6].MDI_plant;
        document.getElementById('MDI_storage_location7').value = it_MDI_output_material_document_item[6].MDI_storage_location;
        document.getElementById('MDI_quantity7').value = it_MDI_output_material_document_item[6].MDI_quantity;
        document.getElementById('MDI_entry_UOM7').value = it_MDI_output_material_document_item[6].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type7').value = it_MDI_output_material_document_item[6].MDI_material_movement_type;
        document.getElementById('MDI_item_text7').value = it_MDI_output_material_document_item[6].MDI_item_text;
        document.getElementById('MDI_material_document_reverse7').value = it_MDI_output_material_document_item[6].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse7').value = it_MDI_output_material_document_item[6].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type7').value = it_MDI_output_material_document_item[6].system_field_message_type;
        document.getElementById('MDI_system_field_message_description7').value = it_MDI_output_material_document_item[6].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 8)
    {
        document.getElementById('MDI_material_document8').value = it_MDI_output_material_document_item[7].MDI_material_document;
        document.getElementById('MDI_fiscal_year8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year;
        document.getElementById('MDI_item8').value = it_MDI_output_material_document_item[7].MDI_item;
        document.getElementById('MDI_material8').value = it_MDI_output_material_document_item[7].MDI_material;
        document.getElementById('MDI_plant8').value = it_MDI_output_material_document_item[7].MDI_plant;
        document.getElementById('MDI_storage_location8').value = it_MDI_output_material_document_item[7].MDI_storage_location;
        document.getElementById('MDI_quantity8').value = it_MDI_output_material_document_item[7].MDI_quantity;
        document.getElementById('MDI_entry_UOM8').value = it_MDI_output_material_document_item[7].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type8').value = it_MDI_output_material_document_item[7].MDI_material_movement_type;
        document.getElementById('MDI_item_text8').value = it_MDI_output_material_document_item[7].MDI_item_text;
        document.getElementById('MDI_material_document_reverse8').value = it_MDI_output_material_document_item[7].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse8').value = it_MDI_output_material_document_item[7].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type8').value = it_MDI_output_material_document_item[7].system_field_message_type;
        document.getElementById('MDI_system_field_message_description8').value = it_MDI_output_material_document_item[7].system_field_message_description;         
    }    
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_U()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true; 
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = false;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = false;
    var MDH_material_document_reverse1 = document.getElementById("MDH_material_document_reverse1");
    MDH_material_document_reverse1.disabled = true;
    var MDH_fiscal_year_reverse1 = document.getElementById("MDH_fiscal_year_reverse1");
    MDH_fiscal_year_reverse1.disabled = true;            
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true; 
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = false;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = false;
    var MDH_material_document_reverse2 = document.getElementById("MDH_material_document_reverse2");
    MDH_material_document_reverse2.disabled = true;
    var MDH_fiscal_year_reverse2 = document.getElementById("MDH_fiscal_year_reverse2");
    MDH_fiscal_year_reverse2.disabled = true;              
}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_U()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = false;
    var MDI_material_document_reverse1 = document.getElementById("MDI_material_document_reverse1");
    MDI_material_document_reverse1.disabled = true;
    var MDI_fiscal_year_reverse1 = document.getElementById("MDI_fiscal_year_reverse1");
    MDI_fiscal_year_reverse1.disabled = true;
    var MDI_item_reverse1 = document.getElementById("MDI_item_reverse1");
    MDI_item_reverse1.disabled = true;    
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = false;
    var MDI_material_document_reverse2 = document.getElementById("MDI_material_document_reverse2");
    MDI_material_document_reverse2.disabled = true;
    var MDI_fiscal_year_reverse2 = document.getElementById("MDI_fiscal_year_reverse2");
    MDI_fiscal_year_reverse2.disabled = true;
    var MDI_item_reverse2 = document.getElementById("MDI_item_reverse2");
    MDI_item_reverse2.disabled = true;      
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = false;
    var MDI_material_document_reverse3 = document.getElementById("MDI_material_document_reverse3");
    MDI_material_document_reverse3.disabled = true;
    var MDI_fiscal_year_reverse3 = document.getElementById("MDI_fiscal_year_reverse3");
    MDI_fiscal_year_reverse3.disabled = true;
    var MDI_item_reverse3 = document.getElementById("MDI_item_reverse3");
    MDI_item_reverse3.disabled = true;      
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = false;
    var MDI_material_document_reverse4 = document.getElementById("MDI_material_document_reverse4");
    MDI_material_document_reverse4.disabled = true;
    var MDI_fiscal_year_reverse4 = document.getElementById("MDI_fiscal_year_reverse4");
    MDI_fiscal_year_reverse4.disabled = true;
    var MDI_item_reverse4 = document.getElementById("MDI_item_reverse4");
    MDI_item_reverse4.disabled = true;      
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = false;
    var MDI_material_document_reverse5 = document.getElementById("MDI_material_document_reverse5");
    MDI_material_document_reverse5.disabled = true;
    var MDI_fiscal_year_reverse5 = document.getElementById("MDI_fiscal_year_reverse5");
    MDI_fiscal_year_reverse5.disabled = true;
    var MDI_item_reverse5 = document.getElementById("MDI_item_reverse5");
    MDI_item_reverse5.disabled = true;      
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = false;
    var MDI_material_document_reverse6 = document.getElementById("MDI_material_document_reverse6");
    MDI_material_document_reverse6.disabled = true;
    var MDI_fiscal_year_reverse6 = document.getElementById("MDI_fiscal_year_reverse6");
    MDI_fiscal_year_reverse6.disabled = true;
    var MDI_item_reverse6 = document.getElementById("MDI_item_reverse6");
    MDI_item_reverse6.disabled = true;      
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = false;
    var MDI_material_document_reverse7 = document.getElementById("MDI_material_document_reverse7");
    MDI_material_document_reverse7.disabled = true;
    var MDI_fiscal_year_reverse7 = document.getElementById("MDI_fiscal_year_reverse7");
    MDI_fiscal_year_reverse7.disabled = true;
    var MDI_item_reverse7 = document.getElementById("MDI_item_reverse7");
    MDI_item_reverse7.disabled = true;      
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = false;
    var MDI_material_document_reverse8 = document.getElementById("MDI_material_document_reverse8");
    MDI_material_document_reverse8.disabled = true;
    var MDI_fiscal_year_reverse8 = document.getElementById("MDI_fiscal_year_reverse8");
    MDI_fiscal_year_reverse8.disabled = true;
    var MDI_item_reverse8 = document.getElementById("MDI_item_reverse8");
    MDI_item_reverse8.disabled = true;          
}    




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_screen_input_U(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDH_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document1').value,
        fiscal_year : document.getElementById('MDH_fiscal_year1').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : document.getElementById('MDH_header_reference1').value,
        header_text : document.getElementById('MDH_header_text1').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDH_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document2').value,
        fiscal_year : document.getElementById('MDH_fiscal_year2').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : document.getElementById('MDH_header_reference2').value,
        header_text : document.getElementById('MDH_header_text2').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_screen_input_U(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDI_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document1').value,
        fiscal_year : document.getElementById('MDI_fiscal_year1').value,
        item : document.getElementById('MDI_item1').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text1').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document2').value,
        fiscal_year : document.getElementById('MDI_fiscal_year2').value,
        item : document.getElementById('MDI_item2').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text2').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document3').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[2] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document3').value,
        fiscal_year : document.getElementById('MDI_fiscal_year3').value,
        item : document.getElementById('MDI_item3').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text3').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document4').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[3] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document4').value,
        fiscal_year : document.getElementById('MDI_fiscal_year4').value,
        item : document.getElementById('MDI_item4').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text4').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document5').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[4] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document5').value,
        fiscal_year : document.getElementById('MDI_fiscal_year5').value,
        item : document.getElementById('MDI_item5').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text5').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document6').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[5] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document6').value,
        fiscal_year : document.getElementById('MDI_fiscal_year6').value,
        item : document.getElementById('MDI_item6').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text6').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document7').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document7').value,
        fiscal_year : document.getElementById('MDI_fiscal_year7').value,
        item : document.getElementById('MDI_item7').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text7').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document8').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document8').value,
        fiscal_year : document.getElementById('MDI_fiscal_year8').value,
        item : document.getElementById('MDI_item8').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : document.getElementById('MDI_item_text8').value,
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_output_screen_U(it_MDH_output_material_document_header)
{
    if (it_MDH_output_material_document_header.length >= 1)
    {
        document.getElementById('MDH_material_document1').value = it_MDH_output_material_document_header[0].MDH_material_document;
        document.getElementById('MDH_fiscal_year1').value = it_MDH_output_material_document_header[0].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type1').value = it_MDH_output_material_document_header[0].MDH_material_document_type;
        document.getElementById('MDH_document_date1').value = it_MDH_output_material_document_header[0].MDH_document_date;
        document.getElementById('MDH_posting_date1').value = it_MDH_output_material_document_header[0].MDH_posting_date;
        document.getElementById('MDH_header_reference1').value = it_MDH_output_material_document_header[0].MDH_header_reference;
        document.getElementById('MDH_header_text1').value = it_MDH_output_material_document_header[0].MDH_header_text;
        document.getElementById('MDH_system_field_message_type1').value = it_MDH_output_material_document_header[0].system_field_message_type;
        document.getElementById('MDH_system_field_message_description1').value = it_MDH_output_material_document_header[0].system_field_message_description;         
    }
    
    if (it_MDH_output_material_document_header.length >= 2)
    {
        document.getElementById('MDH_material_document2').value = it_MDH_output_material_document_header[1].MDH_material_document;
        document.getElementById('MDH_fiscal_year2').value = it_MDH_output_material_document_header[1].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type2').value = it_MDH_output_material_document_header[1].MDH_material_document_type;
        document.getElementById('MDH_document_date2').value = it_MDH_output_material_document_header[1].MDH_document_date;
        document.getElementById('MDH_posting_date2').value = it_MDH_output_material_document_header[1].MDH_posting_date;
        document.getElementById('MDH_header_reference2').value = it_MDH_output_material_document_header[1].MDH_header_reference;
        document.getElementById('MDH_header_text2').value = it_MDH_output_material_document_header[1].MDH_header_text;
        document.getElementById('MDH_system_field_message_type2').value = it_MDH_output_material_document_header[1].system_field_message_type;
        document.getElementById('MDH_system_field_message_description2').value = it_MDH_output_material_document_header[1].system_field_message_description;         
    }
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_output_screen_U(it_MDI_output_material_document_item)
{
    if (it_MDI_output_material_document_item.length >= 1)
    {
        document.getElementById('MDI_material_document1').value = it_MDI_output_material_document_item[0].MDI_material_document;
        document.getElementById('MDI_fiscal_year1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year;
        document.getElementById('MDI_item1').value = it_MDI_output_material_document_item[0].MDI_item;
        document.getElementById('MDI_material1').value = it_MDI_output_material_document_item[0].MDI_material;
        document.getElementById('MDI_plant1').value = it_MDI_output_material_document_item[0].MDI_plant;
        document.getElementById('MDI_storage_location1').value = it_MDI_output_material_document_item[0].MDI_storage_location;
        document.getElementById('MDI_quantity1').value = it_MDI_output_material_document_item[0].MDI_quantity;
        document.getElementById('MDI_entry_UOM1').value = it_MDI_output_material_document_item[0].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type1').value = it_MDI_output_material_document_item[0].MDI_material_movement_type;
        document.getElementById('MDI_item_text1').value = it_MDI_output_material_document_item[0].MDI_item_text;
        document.getElementById('MDI_material_document_reverse1').value = it_MDI_output_material_document_item[0].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse1').value = it_MDI_output_material_document_item[0].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type1').value = it_MDI_output_material_document_item[0].system_field_message_type;
        document.getElementById('MDI_system_field_message_description1').value = it_MDI_output_material_document_item[0].system_field_message_description;         
    }

    if (it_MDI_output_material_document_item.length >= 2)
    {
        document.getElementById('MDI_material_document2').value = it_MDI_output_material_document_item[1].MDI_material_document;
        document.getElementById('MDI_fiscal_year2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year;
        document.getElementById('MDI_item2').value = it_MDI_output_material_document_item[1].MDI_item;
        document.getElementById('MDI_material2').value = it_MDI_output_material_document_item[1].MDI_material;
        document.getElementById('MDI_plant2').value = it_MDI_output_material_document_item[1].MDI_plant;
        document.getElementById('MDI_storage_location2').value = it_MDI_output_material_document_item[1].MDI_storage_location;
        document.getElementById('MDI_quantity2').value = it_MDI_output_material_document_item[1].MDI_quantity;
        document.getElementById('MDI_entry_UOM2').value = it_MDI_output_material_document_item[1].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type2').value = it_MDI_output_material_document_item[1].MDI_material_movement_type;
        document.getElementById('MDI_item_text2').value = it_MDI_output_material_document_item[1].MDI_item_text;
        document.getElementById('MDI_material_document_reverse2').value = it_MDI_output_material_document_item[1].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse2').value = it_MDI_output_material_document_item[1].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type2').value = it_MDI_output_material_document_item[1].system_field_message_type;
        document.getElementById('MDI_system_field_message_description2').value = it_MDI_output_material_document_item[1].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 3)
    {
        document.getElementById('MDI_material_document3').value = it_MDI_output_material_document_item[2].MDI_material_document;
        document.getElementById('MDI_fiscal_year3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year;
        document.getElementById('MDI_item3').value = it_MDI_output_material_document_item[2].MDI_item;
        document.getElementById('MDI_material3').value = it_MDI_output_material_document_item[2].MDI_material;
        document.getElementById('MDI_plant3').value = it_MDI_output_material_document_item[2].MDI_plant;
        document.getElementById('MDI_storage_location3').value = it_MDI_output_material_document_item[2].MDI_storage_location;
        document.getElementById('MDI_quantity3').value = it_MDI_output_material_document_item[2].MDI_quantity;
        document.getElementById('MDI_entry_UOM3').value = it_MDI_output_material_document_item[2].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type3').value = it_MDI_output_material_document_item[2].MDI_material_movement_type;
        document.getElementById('MDI_item_text3').value = it_MDI_output_material_document_item[2].MDI_item_text;
        document.getElementById('MDI_material_document_reverse3').value = it_MDI_output_material_document_item[2].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse3').value = it_MDI_output_material_document_item[2].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type3').value = it_MDI_output_material_document_item[2].system_field_message_type;
        document.getElementById('MDI_system_field_message_description3').value = it_MDI_output_material_document_item[2].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 4)
    {
        document.getElementById('MDI_material_document4').value = it_MDI_output_material_document_item[3].MDI_material_document;
        document.getElementById('MDI_fiscal_year4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year;
        document.getElementById('MDI_item4').value = it_MDI_output_material_document_item[3].MDI_item;
        document.getElementById('MDI_material4').value = it_MDI_output_material_document_item[3].MDI_material;
        document.getElementById('MDI_plant4').value = it_MDI_output_material_document_item[3].MDI_plant;
        document.getElementById('MDI_storage_location4').value = it_MDI_output_material_document_item[3].MDI_storage_location;
        document.getElementById('MDI_quantity4').value = it_MDI_output_material_document_item[3].MDI_quantity;
        document.getElementById('MDI_entry_UOM4').value = it_MDI_output_material_document_item[3].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type4').value = it_MDI_output_material_document_item[3].MDI_material_movement_type;
        document.getElementById('MDI_item_text4').value = it_MDI_output_material_document_item[3].MDI_item_text;
        document.getElementById('MDI_material_document_reverse4').value = it_MDI_output_material_document_item[3].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse4').value = it_MDI_output_material_document_item[3].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type4').value = it_MDI_output_material_document_item[3].system_field_message_type;
        document.getElementById('MDI_system_field_message_description4').value = it_MDI_output_material_document_item[3].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 5)
    {
        document.getElementById('MDI_material_document5').value = it_MDI_output_material_document_item[4].MDI_material_document;
        document.getElementById('MDI_fiscal_year5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year;
        document.getElementById('MDI_item5').value = it_MDI_output_material_document_item[4].MDI_item;
        document.getElementById('MDI_material5').value = it_MDI_output_material_document_item[4].MDI_material;
        document.getElementById('MDI_plant5').value = it_MDI_output_material_document_item[4].MDI_plant;
        document.getElementById('MDI_storage_location5').value = it_MDI_output_material_document_item[4].MDI_storage_location;
        document.getElementById('MDI_quantity5').value = it_MDI_output_material_document_item[4].MDI_quantity;
        document.getElementById('MDI_entry_UOM5').value = it_MDI_output_material_document_item[4].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type5').value = it_MDI_output_material_document_item[4].MDI_material_movement_type;
        document.getElementById('MDI_item_text5').value = it_MDI_output_material_document_item[4].MDI_item_text;
        document.getElementById('MDI_material_document_reverse5').value = it_MDI_output_material_document_item[4].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse5').value = it_MDI_output_material_document_item[4].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type5').value = it_MDI_output_material_document_item[4].system_field_message_type;
        document.getElementById('MDI_system_field_message_description5').value = it_MDI_output_material_document_item[4].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 6)
    {
        document.getElementById('MDI_material_document6').value = it_MDI_output_material_document_item[5].MDI_material_document;
        document.getElementById('MDI_fiscal_year6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year;
        document.getElementById('MDI_item6').value = it_MDI_output_material_document_item[5].MDI_item;
        document.getElementById('MDI_material6').value = it_MDI_output_material_document_item[5].MDI_material;
        document.getElementById('MDI_plant6').value = it_MDI_output_material_document_item[5].MDI_plant;
        document.getElementById('MDI_storage_location6').value = it_MDI_output_material_document_item[5].MDI_storage_location;
        document.getElementById('MDI_quantity6').value = it_MDI_output_material_document_item[5].MDI_quantity;
        document.getElementById('MDI_entry_UOM6').value = it_MDI_output_material_document_item[5].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type6').value = it_MDI_output_material_document_item[5].MDI_material_movement_type;
        document.getElementById('MDI_item_text6').value = it_MDI_output_material_document_item[5].MDI_item_text;
        document.getElementById('MDI_material_document_reverse6').value = it_MDI_output_material_document_item[5].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse6').value = it_MDI_output_material_document_item[5].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type6').value = it_MDI_output_material_document_item[5].system_field_message_type;
        document.getElementById('MDI_system_field_message_description6').value = it_MDI_output_material_document_item[5].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 7)
    {
        document.getElementById('MDI_material_document7').value = it_MDI_output_material_document_item[6].MDI_material_document;
        document.getElementById('MDI_fiscal_year7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year;
        document.getElementById('MDI_item7').value = it_MDI_output_material_document_item[6].MDI_item;
        document.getElementById('MDI_material7').value = it_MDI_output_material_document_item[6].MDI_material;
        document.getElementById('MDI_plant7').value = it_MDI_output_material_document_item[6].MDI_plant;
        document.getElementById('MDI_storage_location7').value = it_MDI_output_material_document_item[6].MDI_storage_location;
        document.getElementById('MDI_quantity7').value = it_MDI_output_material_document_item[6].MDI_quantity;
        document.getElementById('MDI_entry_UOM7').value = it_MDI_output_material_document_item[6].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type7').value = it_MDI_output_material_document_item[6].MDI_material_movement_type;
        document.getElementById('MDI_item_text7').value = it_MDI_output_material_document_item[6].MDI_item_text;
        document.getElementById('MDI_material_document_reverse7').value = it_MDI_output_material_document_item[6].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse7').value = it_MDI_output_material_document_item[6].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type7').value = it_MDI_output_material_document_item[6].system_field_message_type;
        document.getElementById('MDI_system_field_message_description7').value = it_MDI_output_material_document_item[6].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 8)
    {
        document.getElementById('MDI_material_document8').value = it_MDI_output_material_document_item[7].MDI_material_document;
        document.getElementById('MDI_fiscal_year8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year;
        document.getElementById('MDI_item8').value = it_MDI_output_material_document_item[7].MDI_item;
        document.getElementById('MDI_material8').value = it_MDI_output_material_document_item[7].MDI_material;
        document.getElementById('MDI_plant8').value = it_MDI_output_material_document_item[7].MDI_plant;
        document.getElementById('MDI_storage_location8').value = it_MDI_output_material_document_item[7].MDI_storage_location;
        document.getElementById('MDI_quantity8').value = it_MDI_output_material_document_item[7].MDI_quantity;
        document.getElementById('MDI_entry_UOM8').value = it_MDI_output_material_document_item[7].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type8').value = it_MDI_output_material_document_item[7].MDI_material_movement_type;
        document.getElementById('MDI_item_text8').value = it_MDI_output_material_document_item[7].MDI_item_text;
        document.getElementById('MDI_material_document_reverse8').value = it_MDI_output_material_document_item[7].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse8').value = it_MDI_output_material_document_item[7].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type8').value = it_MDI_output_material_document_item[7].system_field_message_type;
        document.getElementById('MDI_system_field_message_description8').value = it_MDI_output_material_document_item[7].system_field_message_description;         
    }    
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_screen_input_D(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDH_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document1').value,
        fiscal_year : document.getElementById('MDH_fiscal_year1').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : document.getElementById('MDH_material_document_reverse1').value,
        fiscal_year_reverse : document.getElementById('MDH_fiscal_year_reverse1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDH_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document2').value,
        fiscal_year : document.getElementById('MDH_fiscal_year2').value,
        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : document.getElementById('MDH_material_document_reverse2').value,
        fiscal_year_reverse : document.getElementById('MDH_fiscal_year_reverse2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_screen_input_D(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDI_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document1').value,
        fiscal_year : document.getElementById('MDI_fiscal_year1').value,
        item : document.getElementById('MDI_item1').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse1').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse1').value,
        item_reverse : document.getElementById('MDI_item_reverse1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document2').value,
        fiscal_year : document.getElementById('MDI_fiscal_year2').value,
        item : document.getElementById('MDI_item2').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse2').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse2').value,
        item_reverse : document.getElementById('MDI_item_reverse2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document3').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[2] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document3').value,
        fiscal_year : document.getElementById('MDI_fiscal_year3').value,
        item : document.getElementById('MDI_item3').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse3').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse3').value,
        item_reverse : document.getElementById('MDI_item_reverse3').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document4').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[3] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document4').value,
        fiscal_year : document.getElementById('MDI_fiscal_year4').value,
        item : document.getElementById('MDI_item4').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse4').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse4').value,
        item_reverse : document.getElementById('MDI_item_reverse4').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document5').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[4] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document5').value,
        fiscal_year : document.getElementById('MDI_fiscal_year5').value,
        item : document.getElementById('MDI_item5').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse5').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse5').value,
        item_reverse : document.getElementById('MDI_item_reverse5').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document6').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[5] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document6').value,
        fiscal_year : document.getElementById('MDI_fiscal_year6').value,
        item : document.getElementById('MDI_item6').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse6').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse6').value,
        item_reverse : document.getElementById('MDI_item_reverse6').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document7').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document7').value,
        fiscal_year : document.getElementById('MDI_fiscal_year7').value,
        item : document.getElementById('MDI_item7').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse7').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse7').value,
        item_reverse : document.getElementById('MDI_item_reverse7').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document8').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document8').value,
        fiscal_year : document.getElementById('MDI_fiscal_year8').value,
        item : document.getElementById('MDI_item8').value,
        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        material_document_reverse : document.getElementById('MDI_material_document_reverse8').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse8').value,
        item_reverse : document.getElementById('MDI_item_reverse8').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_output_screen_D(it_MDH_output_material_document_header)
{
    if (it_MDH_output_material_document_header.length >= 1)
    {
        document.getElementById('MDH_material_document1').value = it_MDH_output_material_document_header[0].MDH_material_document;
        document.getElementById('MDH_fiscal_year1').value = it_MDH_output_material_document_header[0].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type1').value = it_MDH_output_material_document_header[0].MDH_material_document_type;
        document.getElementById('MDH_document_date1').value = it_MDH_output_material_document_header[0].MDH_document_date;
        document.getElementById('MDH_posting_date1').value = it_MDH_output_material_document_header[0].MDH_posting_date;
        document.getElementById('MDH_header_reference1').value = it_MDH_output_material_document_header[0].MDH_header_reference;
        document.getElementById('MDH_header_text1').value = it_MDH_output_material_document_header[0].MDH_header_text;
        document.getElementById('MDH_system_field_message_type1').value = it_MDH_output_material_document_header[0].system_field_message_type;
        document.getElementById('MDH_system_field_message_description1').value = it_MDH_output_material_document_header[0].system_field_message_description;         
    }
    
    if (it_MDH_output_material_document_header.length >= 2)
    {
        document.getElementById('MDH_material_document2').value = it_MDH_output_material_document_header[1].MDH_material_document;
        document.getElementById('MDH_fiscal_year2').value = it_MDH_output_material_document_header[1].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type2').value = it_MDH_output_material_document_header[1].MDH_material_document_type;
        document.getElementById('MDH_document_date2').value = it_MDH_output_material_document_header[1].MDH_document_date;
        document.getElementById('MDH_posting_date2').value = it_MDH_output_material_document_header[1].MDH_posting_date;
        document.getElementById('MDH_header_reference2').value = it_MDH_output_material_document_header[1].MDH_header_reference;
        document.getElementById('MDH_header_text2').value = it_MDH_output_material_document_header[1].MDH_header_text;
        document.getElementById('MDH_system_field_message_type2').value = it_MDH_output_material_document_header[1].system_field_message_type;
        document.getElementById('MDH_system_field_message_description2').value = it_MDH_output_material_document_header[1].system_field_message_description;         
    }
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_output_screen_D(it_MDI_output_material_document_item)
{
    if (it_MDI_output_material_document_item.length >= 1)
    {
        document.getElementById('MDI_material_document1').value = it_MDI_output_material_document_item[0].MDI_material_document;
        document.getElementById('MDI_fiscal_year1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year;
        document.getElementById('MDI_item1').value = it_MDI_output_material_document_item[0].MDI_item;
        document.getElementById('MDI_material1').value = it_MDI_output_material_document_item[0].MDI_material;
        document.getElementById('MDI_plant1').value = it_MDI_output_material_document_item[0].MDI_plant;
        document.getElementById('MDI_storage_location1').value = it_MDI_output_material_document_item[0].MDI_storage_location;
        document.getElementById('MDI_quantity1').value = it_MDI_output_material_document_item[0].MDI_quantity;
        document.getElementById('MDI_entry_UOM1').value = it_MDI_output_material_document_item[0].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type1').value = it_MDI_output_material_document_item[0].MDI_material_movement_type;
        document.getElementById('MDI_item_text1').value = it_MDI_output_material_document_item[0].MDI_item_text;
        document.getElementById('MDI_material_document_reverse1').value = it_MDI_output_material_document_item[0].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse1').value = it_MDI_output_material_document_item[0].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type1').value = it_MDI_output_material_document_item[0].system_field_message_type;
        document.getElementById('MDI_system_field_message_description1').value = it_MDI_output_material_document_item[0].system_field_message_description;         
    }

    if (it_MDI_output_material_document_item.length >= 2)
    {
        document.getElementById('MDI_material_document2').value = it_MDI_output_material_document_item[1].MDI_material_document;
        document.getElementById('MDI_fiscal_year2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year;
        document.getElementById('MDI_item2').value = it_MDI_output_material_document_item[1].MDI_item;
        document.getElementById('MDI_material2').value = it_MDI_output_material_document_item[1].MDI_material;
        document.getElementById('MDI_plant2').value = it_MDI_output_material_document_item[1].MDI_plant;
        document.getElementById('MDI_storage_location2').value = it_MDI_output_material_document_item[1].MDI_storage_location;
        document.getElementById('MDI_quantity2').value = it_MDI_output_material_document_item[1].MDI_quantity;
        document.getElementById('MDI_entry_UOM2').value = it_MDI_output_material_document_item[1].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type2').value = it_MDI_output_material_document_item[1].MDI_material_movement_type;
        document.getElementById('MDI_item_text2').value = it_MDI_output_material_document_item[1].MDI_item_text;
        document.getElementById('MDI_material_document_reverse2').value = it_MDI_output_material_document_item[1].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse2').value = it_MDI_output_material_document_item[1].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type2').value = it_MDI_output_material_document_item[1].system_field_message_type;
        document.getElementById('MDI_system_field_message_description2').value = it_MDI_output_material_document_item[1].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 3)
    {
        document.getElementById('MDI_material_document3').value = it_MDI_output_material_document_item[2].MDI_material_document;
        document.getElementById('MDI_fiscal_year3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year;
        document.getElementById('MDI_item3').value = it_MDI_output_material_document_item[2].MDI_item;
        document.getElementById('MDI_material3').value = it_MDI_output_material_document_item[2].MDI_material;
        document.getElementById('MDI_plant3').value = it_MDI_output_material_document_item[2].MDI_plant;
        document.getElementById('MDI_storage_location3').value = it_MDI_output_material_document_item[2].MDI_storage_location;
        document.getElementById('MDI_quantity3').value = it_MDI_output_material_document_item[2].MDI_quantity;
        document.getElementById('MDI_entry_UOM3').value = it_MDI_output_material_document_item[2].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type3').value = it_MDI_output_material_document_item[2].MDI_material_movement_type;
        document.getElementById('MDI_item_text3').value = it_MDI_output_material_document_item[2].MDI_item_text;
        document.getElementById('MDI_material_document_reverse3').value = it_MDI_output_material_document_item[2].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse3').value = it_MDI_output_material_document_item[2].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type3').value = it_MDI_output_material_document_item[2].system_field_message_type;
        document.getElementById('MDI_system_field_message_description3').value = it_MDI_output_material_document_item[2].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 4)
    {
        document.getElementById('MDI_material_document4').value = it_MDI_output_material_document_item[3].MDI_material_document;
        document.getElementById('MDI_fiscal_year4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year;
        document.getElementById('MDI_item4').value = it_MDI_output_material_document_item[3].MDI_item;
        document.getElementById('MDI_material4').value = it_MDI_output_material_document_item[3].MDI_material;
        document.getElementById('MDI_plant4').value = it_MDI_output_material_document_item[3].MDI_plant;
        document.getElementById('MDI_storage_location4').value = it_MDI_output_material_document_item[3].MDI_storage_location;
        document.getElementById('MDI_quantity4').value = it_MDI_output_material_document_item[3].MDI_quantity;
        document.getElementById('MDI_entry_UOM4').value = it_MDI_output_material_document_item[3].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type4').value = it_MDI_output_material_document_item[3].MDI_material_movement_type;
        document.getElementById('MDI_item_text4').value = it_MDI_output_material_document_item[3].MDI_item_text;
        document.getElementById('MDI_material_document_reverse4').value = it_MDI_output_material_document_item[3].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse4').value = it_MDI_output_material_document_item[3].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type4').value = it_MDI_output_material_document_item[3].system_field_message_type;
        document.getElementById('MDI_system_field_message_description4').value = it_MDI_output_material_document_item[3].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 5)
    {
        document.getElementById('MDI_material_document5').value = it_MDI_output_material_document_item[4].MDI_material_document;
        document.getElementById('MDI_fiscal_year5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year;
        document.getElementById('MDI_item5').value = it_MDI_output_material_document_item[4].MDI_item;
        document.getElementById('MDI_material5').value = it_MDI_output_material_document_item[4].MDI_material;
        document.getElementById('MDI_plant5').value = it_MDI_output_material_document_item[4].MDI_plant;
        document.getElementById('MDI_storage_location5').value = it_MDI_output_material_document_item[4].MDI_storage_location;
        document.getElementById('MDI_quantity5').value = it_MDI_output_material_document_item[4].MDI_quantity;
        document.getElementById('MDI_entry_UOM5').value = it_MDI_output_material_document_item[4].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type5').value = it_MDI_output_material_document_item[4].MDI_material_movement_type;
        document.getElementById('MDI_item_text5').value = it_MDI_output_material_document_item[4].MDI_item_text;
        document.getElementById('MDI_material_document_reverse5').value = it_MDI_output_material_document_item[4].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse5').value = it_MDI_output_material_document_item[4].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type5').value = it_MDI_output_material_document_item[4].system_field_message_type;
        document.getElementById('MDI_system_field_message_description5').value = it_MDI_output_material_document_item[4].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 6)
    {
        document.getElementById('MDI_material_document6').value = it_MDI_output_material_document_item[5].MDI_material_document;
        document.getElementById('MDI_fiscal_year6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year;
        document.getElementById('MDI_item6').value = it_MDI_output_material_document_item[5].MDI_item;
        document.getElementById('MDI_material6').value = it_MDI_output_material_document_item[5].MDI_material;
        document.getElementById('MDI_plant6').value = it_MDI_output_material_document_item[5].MDI_plant;
        document.getElementById('MDI_storage_location6').value = it_MDI_output_material_document_item[5].MDI_storage_location;
        document.getElementById('MDI_quantity6').value = it_MDI_output_material_document_item[5].MDI_quantity;
        document.getElementById('MDI_entry_UOM6').value = it_MDI_output_material_document_item[5].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type6').value = it_MDI_output_material_document_item[5].MDI_material_movement_type;
        document.getElementById('MDI_item_text6').value = it_MDI_output_material_document_item[5].MDI_item_text;
        document.getElementById('MDI_material_document_reverse6').value = it_MDI_output_material_document_item[5].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse6').value = it_MDI_output_material_document_item[5].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type6').value = it_MDI_output_material_document_item[5].system_field_message_type;
        document.getElementById('MDI_system_field_message_description6').value = it_MDI_output_material_document_item[5].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 7)
    {
        document.getElementById('MDI_material_document7').value = it_MDI_output_material_document_item[6].MDI_material_document;
        document.getElementById('MDI_fiscal_year7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year;
        document.getElementById('MDI_item7').value = it_MDI_output_material_document_item[6].MDI_item;
        document.getElementById('MDI_material7').value = it_MDI_output_material_document_item[6].MDI_material;
        document.getElementById('MDI_plant7').value = it_MDI_output_material_document_item[6].MDI_plant;
        document.getElementById('MDI_storage_location7').value = it_MDI_output_material_document_item[6].MDI_storage_location;
        document.getElementById('MDI_quantity7').value = it_MDI_output_material_document_item[6].MDI_quantity;
        document.getElementById('MDI_entry_UOM7').value = it_MDI_output_material_document_item[6].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type7').value = it_MDI_output_material_document_item[6].MDI_material_movement_type;
        document.getElementById('MDI_item_text7').value = it_MDI_output_material_document_item[6].MDI_item_text;
        document.getElementById('MDI_material_document_reverse7').value = it_MDI_output_material_document_item[6].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse7').value = it_MDI_output_material_document_item[6].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type7').value = it_MDI_output_material_document_item[6].system_field_message_type;
        document.getElementById('MDI_system_field_message_description7').value = it_MDI_output_material_document_item[6].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 8)
    {
        document.getElementById('MDI_material_document8').value = it_MDI_output_material_document_item[7].MDI_material_document;
        document.getElementById('MDI_fiscal_year8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year;
        document.getElementById('MDI_item8').value = it_MDI_output_material_document_item[7].MDI_item;
        document.getElementById('MDI_material8').value = it_MDI_output_material_document_item[7].MDI_material;
        document.getElementById('MDI_plant8').value = it_MDI_output_material_document_item[7].MDI_plant;
        document.getElementById('MDI_storage_location8').value = it_MDI_output_material_document_item[7].MDI_storage_location;
        document.getElementById('MDI_quantity8').value = it_MDI_output_material_document_item[7].MDI_quantity;
        document.getElementById('MDI_entry_UOM8').value = it_MDI_output_material_document_item[7].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type8').value = it_MDI_output_material_document_item[7].MDI_material_movement_type;
        document.getElementById('MDI_item_text8').value = it_MDI_output_material_document_item[7].MDI_item_text;
        document.getElementById('MDI_material_document_reverse8').value = it_MDI_output_material_document_item[7].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse8').value = it_MDI_output_material_document_item[7].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type8').value = it_MDI_output_material_document_item[7].system_field_message_type;
        document.getElementById('MDI_system_field_message_description8').value = it_MDI_output_material_document_item[7].system_field_message_description;         
    }    
}





//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_D()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true;  
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = true; 
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = true;
    var MDH_material_document_reverse1 = document.getElementById("MDH_material_document_reverse1");
    MDH_material_document_reverse1.disabled = false;
    var MDH_fiscal_year_reverse1 = document.getElementById("MDH_fiscal_year_reverse1");
    MDH_fiscal_year_reverse1.disabled = false;          
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true;  
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = true;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = true;
    var MDH_material_document_reverse2 = document.getElementById("MDH_material_document_reverse2");
    MDH_material_document_reverse2.disabled = false;
    var MDH_fiscal_year_reverse2 = document.getElementById("MDH_fiscal_year_reverse2");
    MDH_fiscal_year_reverse2.disabled = false;              

}    




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_D()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = true;
    var MDI_material_document_reverse1 = document.getElementById("MDI_material_document_reverse1");
    MDI_material_document_reverse1.disabled = false;
    var MDI_fiscal_year_reverse1 = document.getElementById("MDI_fiscal_year_reverse1");
    MDI_fiscal_year_reverse1.disabled = false;
    var MDI_item_reverse1 = document.getElementById("MDI_item_reverse1");
    MDI_item_reverse1.disabled = false;    
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = true;
    var MDI_material_document_reverse2 = document.getElementById("MDI_material_document_reverse2");
    MDI_material_document_reverse2.disabled = false;
    var MDI_fiscal_year_reverse2 = document.getElementById("MDI_fiscal_year_reverse2");
    MDI_fiscal_year_reverse2.disabled = false;
    var MDI_item_reverse2 = document.getElementById("MDI_item_reverse2");
    MDI_item_reverse2.disabled = false;      
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = true;
    var MDI_material_document_reverse3 = document.getElementById("MDI_material_document_reverse3");
    MDI_material_document_reverse3.disabled = false;
    var MDI_fiscal_year_reverse3 = document.getElementById("MDI_fiscal_year_reverse3");
    MDI_fiscal_year_reverse3.disabled = false;
    var MDI_item_reverse3 = document.getElementById("MDI_item_reverse3");
    MDI_item_reverse3.disabled = false;      
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = true;
    var MDI_material_document_reverse4 = document.getElementById("MDI_material_document_reverse4");
    MDI_material_document_reverse4.disabled = false;
    var MDI_fiscal_year_reverse4 = document.getElementById("MDI_fiscal_year_reverse4");
    MDI_fiscal_year_reverse4.disabled = false;
    var MDI_item_reverse4 = document.getElementById("MDI_item_reverse4");
    MDI_item_reverse4.disabled = false;      
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = true;
    var MDI_material_document_reverse5 = document.getElementById("MDI_material_document_reverse5");
    MDI_material_document_reverse5.disabled = false;
    var MDI_fiscal_year_reverse5 = document.getElementById("MDI_fiscal_year_reverse5");
    MDI_fiscal_year_reverse5.disabled = false;
    var MDI_item_reverse5 = document.getElementById("MDI_item_reverse5");
    MDI_item_reverse5.disabled = false;      
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = true;
    var MDI_material_document_reverse6 = document.getElementById("MDI_material_document_reverse6");
    MDI_material_document_reverse6.disabled = false;
    var MDI_fiscal_year_reverse6 = document.getElementById("MDI_fiscal_year_reverse6");
    MDI_fiscal_year_reverse6.disabled = false;
    var MDI_item_reverse6 = document.getElementById("MDI_item_reverse6");
    MDI_item_reverse6.disabled = false;      
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = true;
    var MDI_material_document_reverse7 = document.getElementById("MDI_material_document_reverse7");
    MDI_material_document_reverse7.disabled = false;
    var MDI_fiscal_year_reverse7 = document.getElementById("MDI_fiscal_year_reverse7");
    MDI_fiscal_year_reverse7.disabled = false;
    var MDI_item_reverse7 = document.getElementById("MDI_item_reverse7");
    MDI_item_reverse7.disabled = false;      
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = true;
    var MDI_material_document_reverse8 = document.getElementById("MDI_material_document_reverse8");
    MDI_material_document_reverse8.disabled = false;
    var MDI_fiscal_year_reverse8 = document.getElementById("MDI_fiscal_year_reverse8");
    MDI_fiscal_year_reverse8.disabled = false;
    var MDI_item_reverse8 = document.getElementById("MDI_item_reverse8");
    MDI_item_reverse8.disabled = false;          
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_screen_input_C(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDH_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document1').value,
        fiscal_year : document.getElementById('MDH_fiscal_year1').value,
        material_document_type : document.getElementById('MDH_material_document_type1').value,
        document_date : document.getElementById('MDH_document_date1').value,
        posting_date : document.getElementById('MDH_posting_date1').value,
        header_reference : document.getElementById('MDH_header_reference1').value,
        header_text : document.getElementById('MDH_header_text1').value,
        material_document_reverse : document.getElementById('MDH_material_document_reverse1').value,
        fiscal_year_reverse : document.getElementById('MDH_fiscal_year_reverse1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDH_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDH_input_material_document_header[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDH_material_document2').value,
        fiscal_year : document.getElementById('MDH_fiscal_year2').value,
        material_document_type : document.getElementById('MDH_material_document_type2').value,
        document_date : document.getElementById('MDH_document_date2').value,
        posting_date : document.getElementById('MDH_posting_date2').value,
        header_reference : document.getElementById('MDH_header_reference2').value,
        header_text : document.getElementById('MDH_header_text2').value,
        material_document_reverse : document.getElementById('MDH_material_document_reverse2').value,
        fiscal_year_reverse : document.getElementById('MDH_fiscal_year_reverse2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_screen_input_C(iv_tenant)
{
    var lv_material_document = '';

    lv_material_document = document.getElementById('MDI_material_document1').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[0] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document1').value,
        fiscal_year : document.getElementById('MDI_fiscal_year1').value,
        item : document.getElementById('MDI_item1').value,
        material : document.getElementById('MDI_material1').value,
        plant : document.getElementById('MDI_plant1').value,
        storage_location : document.getElementById('MDI_storage_location1').value,
        quantity : document.getElementById('MDI_quantity1').value,
        entry_UOM : document.getElementById('MDI_entry_UOM1').value,
        material_movement_type : document.getElementById('MDI_material_movement_type1').value,
        item_text : document.getElementById('MDI_item_text1').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse1').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse1').value,
        item_reverse : document.getElementById('MDI_item_reverse1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document2').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[1] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document2').value,
        fiscal_year : document.getElementById('MDI_fiscal_year2').value,
        item : document.getElementById('MDI_item2').value,
        material : document.getElementById('MDI_material2').value,
        plant : document.getElementById('MDI_plant2').value,
        storage_location : document.getElementById('MDI_storage_location2').value,
        quantity : document.getElementById('MDI_quantity2').value,
        entry_UOM : document.getElementById('MDI_entry_UOM2').value,
        material_movement_type : document.getElementById('MDI_material_movement_type2').value,
        item_text : document.getElementById('MDI_item_text2').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse2').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse2').value,
        item_reverse : document.getElementById('MDI_item_reverse2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document3').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[2] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document3').value,
        fiscal_year : document.getElementById('MDI_fiscal_year3').value,
        item : document.getElementById('MDI_item3').value,
        material : document.getElementById('MDI_material3').value,
        plant : document.getElementById('MDI_plant3').value,
        storage_location : document.getElementById('MDI_storage_location3').value,
        quantity : document.getElementById('MDI_quantity3').value,
        entry_UOM : document.getElementById('MDI_entry_UOM3').value,
        material_movement_type : document.getElementById('MDI_material_movement_type3').value,
        item_text : document.getElementById('MDI_item_text3').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse3').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse3').value,
        item_reverse : document.getElementById('MDI_item_reverse3').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document4').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[3] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document4').value,
        fiscal_year : document.getElementById('MDI_fiscal_year4').value,
        item : document.getElementById('MDI_item4').value,
        material : document.getElementById('MDI_material4').value,
        plant : document.getElementById('MDI_plant4').value,
        storage_location : document.getElementById('MDI_storage_location4').value,
        quantity : document.getElementById('MDI_quantity4').value,
        entry_UOM : document.getElementById('MDI_entry_UOM4').value,
        material_movement_type : document.getElementById('MDI_material_movement_type4').value,
        item_text : document.getElementById('MDI_item_text4').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse4').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse4').value,
        item_reverse : document.getElementById('MDI_item_reverse4').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document5').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[4] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document5').value,
        fiscal_year : document.getElementById('MDI_fiscal_year5').value,
        item : document.getElementById('MDI_item5').value,
        material : document.getElementById('MDI_material5').value,
        plant : document.getElementById('MDI_plant5').value,
        storage_location : document.getElementById('MDI_storage_location5').value,
        quantity : document.getElementById('MDI_quantity5').value,
        entry_UOM : document.getElementById('MDI_entry_UOM5').value,
        material_movement_type : document.getElementById('MDI_material_movement_type5').value,
        item_text : document.getElementById('MDI_item_text5').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse5').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse5').value,
        item_reverse : document.getElementById('MDI_item_reverse5').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document6').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[5] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document6').value,
        fiscal_year : document.getElementById('MDI_fiscal_year6').value,
        item : document.getElementById('MDI_item6').value,
        material : document.getElementById('MDI_material6').value,
        plant : document.getElementById('MDI_plant6').value,
        storage_location : document.getElementById('MDI_storage_location6').value,
        quantity : document.getElementById('MDI_quantity6').value,
        entry_UOM : document.getElementById('MDI_entry_UOM6').value,
        material_movement_type : document.getElementById('MDI_material_movement_type6').value,
        item_text : document.getElementById('MDI_item_text6').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse6').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse6').value,
        item_reverse : document.getElementById('MDI_item_reverse6').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document7').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document7').value,
        fiscal_year : document.getElementById('MDI_fiscal_year7').value,
        item : document.getElementById('MDI_item7').value,
        material : document.getElementById('MDI_material7').value,
        plant : document.getElementById('MDI_plant7').value,
        storage_location : document.getElementById('MDI_storage_location7').value,
        quantity : document.getElementById('MDI_quantity7').value,
        entry_UOM : document.getElementById('MDI_entry_UOM7').value,
        material_movement_type : document.getElementById('MDI_material_movement_type7').value,
        item_text : document.getElementById('MDI_item_text7').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse7').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse7').value,
        item_reverse : document.getElementById('MDI_item_reverse7').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    lv_material_document = document.getElementById('MDI_material_document8').value;
    if ( lv_material_document != '')
    {
        lt_MDI_input_material_document_item[7] =
        {
        tenant : iv_tenant,
        material_document : document.getElementById('MDI_material_document8').value,
        fiscal_year : document.getElementById('MDI_fiscal_year8').value,
        item : document.getElementById('MDI_item8').value,
        material : document.getElementById('MDI_material8').value,
        plant : document.getElementById('MDI_plant8').value,
        storage_location : document.getElementById('MDI_storage_location8').value,
        quantity : document.getElementById('MDI_quantity8').value,
        entry_UOM : document.getElementById('MDI_entry_UOM8').value,
        material_movement_type : document.getElementById('MDI_material_movement_type8').value,
        item_text : document.getElementById('MDI_item_text8').value,
        material_document_reverse : document.getElementById('MDI_material_document_reverse8').value,
        fiscal_year_reverse : document.getElementById('MDI_fiscal_year_reverse8').value,
        item_reverse : document.getElementById('MDI_item_reverse8').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_copy_output_screen_C(it_MDH_output_material_document_header)
{
    if (it_MDH_output_material_document_header.length >= 1)
    {
        document.getElementById('MDH_material_document1').value = it_MDH_output_material_document_header[0].MDH_material_document;
        document.getElementById('MDH_fiscal_year1').value = it_MDH_output_material_document_header[0].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type1').value = it_MDH_output_material_document_header[0].MDH_material_document_type;
        document.getElementById('MDH_document_date1').value = it_MDH_output_material_document_header[0].MDH_document_date;
        document.getElementById('MDH_posting_date1').value = it_MDH_output_material_document_header[0].MDH_posting_date;
        document.getElementById('MDH_header_reference1').value = it_MDH_output_material_document_header[0].MDH_header_reference;
        document.getElementById('MDH_header_text1').value = it_MDH_output_material_document_header[0].MDH_header_text;
        document.getElementById('MDH_system_field_message_type1').value = it_MDH_output_material_document_header[0].system_field_message_type;
        document.getElementById('MDH_system_field_message_description1').value = it_MDH_output_material_document_header[0].system_field_message_description;         
    }
    
    if (it_MDH_output_material_document_header.length >= 2)
    {
        document.getElementById('MDH_material_document2').value = it_MDH_output_material_document_header[1].MDH_material_document;
        document.getElementById('MDH_fiscal_year2').value = it_MDH_output_material_document_header[1].MDH_fiscal_year;
        document.getElementById('MDH_material_document_type2').value = it_MDH_output_material_document_header[1].MDH_material_document_type;
        document.getElementById('MDH_document_date2').value = it_MDH_output_material_document_header[1].MDH_document_date;
        document.getElementById('MDH_posting_date2').value = it_MDH_output_material_document_header[1].MDH_posting_date;
        document.getElementById('MDH_header_reference2').value = it_MDH_output_material_document_header[1].MDH_header_reference;
        document.getElementById('MDH_header_text2').value = it_MDH_output_material_document_header[1].MDH_header_text;
        document.getElementById('MDH_system_field_message_type2').value = it_MDH_output_material_document_header[1].system_field_message_type;
        document.getElementById('MDH_system_field_message_description2').value = it_MDH_output_material_document_header[1].system_field_message_description;         
    }
}




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_copy_output_screen_C(it_MDI_output_material_document_item)
{
    if (it_MDI_output_material_document_item.length >= 1)
    {
        document.getElementById('MDI_material_document1').value = it_MDI_output_material_document_item[0].MDI_material_document;
        document.getElementById('MDI_fiscal_year1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year;
        document.getElementById('MDI_item1').value = it_MDI_output_material_document_item[0].MDI_item;
        document.getElementById('MDI_material1').value = it_MDI_output_material_document_item[0].MDI_material;
        document.getElementById('MDI_plant1').value = it_MDI_output_material_document_item[0].MDI_plant;
        document.getElementById('MDI_storage_location1').value = it_MDI_output_material_document_item[0].MDI_storage_location;
        document.getElementById('MDI_quantity1').value = it_MDI_output_material_document_item[0].MDI_quantity;
        document.getElementById('MDI_entry_UOM1').value = it_MDI_output_material_document_item[0].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type1').value = it_MDI_output_material_document_item[0].MDI_material_movement_type;
        document.getElementById('MDI_item_text1').value = it_MDI_output_material_document_item[0].MDI_item_text;
        document.getElementById('MDI_material_document_reverse1').value = it_MDI_output_material_document_item[0].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse1').value = it_MDI_output_material_document_item[0].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse1').value = it_MDI_output_material_document_item[0].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type1').value = it_MDI_output_material_document_item[0].system_field_message_type;
        document.getElementById('MDI_system_field_message_description1').value = it_MDI_output_material_document_item[0].system_field_message_description;         
    }

    if (it_MDI_output_material_document_item.length >= 2)
    {
        document.getElementById('MDI_material_document2').value = it_MDI_output_material_document_item[1].MDI_material_document;
        document.getElementById('MDI_fiscal_year2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year;
        document.getElementById('MDI_item2').value = it_MDI_output_material_document_item[1].MDI_item;
        document.getElementById('MDI_material2').value = it_MDI_output_material_document_item[1].MDI_material;
        document.getElementById('MDI_plant2').value = it_MDI_output_material_document_item[1].MDI_plant;
        document.getElementById('MDI_storage_location2').value = it_MDI_output_material_document_item[1].MDI_storage_location;
        document.getElementById('MDI_quantity2').value = it_MDI_output_material_document_item[1].MDI_quantity;
        document.getElementById('MDI_entry_UOM2').value = it_MDI_output_material_document_item[1].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type2').value = it_MDI_output_material_document_item[1].MDI_material_movement_type;
        document.getElementById('MDI_item_text2').value = it_MDI_output_material_document_item[1].MDI_item_text;
        document.getElementById('MDI_material_document_reverse2').value = it_MDI_output_material_document_item[1].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse2').value = it_MDI_output_material_document_item[1].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse2').value = it_MDI_output_material_document_item[1].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type2').value = it_MDI_output_material_document_item[1].system_field_message_type;
        document.getElementById('MDI_system_field_message_description2').value = it_MDI_output_material_document_item[1].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 3)
    {
        document.getElementById('MDI_material_document3').value = it_MDI_output_material_document_item[2].MDI_material_document;
        document.getElementById('MDI_fiscal_year3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year;
        document.getElementById('MDI_item3').value = it_MDI_output_material_document_item[2].MDI_item;
        document.getElementById('MDI_material3').value = it_MDI_output_material_document_item[2].MDI_material;
        document.getElementById('MDI_plant3').value = it_MDI_output_material_document_item[2].MDI_plant;
        document.getElementById('MDI_storage_location3').value = it_MDI_output_material_document_item[2].MDI_storage_location;
        document.getElementById('MDI_quantity3').value = it_MDI_output_material_document_item[2].MDI_quantity;
        document.getElementById('MDI_entry_UOM3').value = it_MDI_output_material_document_item[2].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type3').value = it_MDI_output_material_document_item[2].MDI_material_movement_type;
        document.getElementById('MDI_item_text3').value = it_MDI_output_material_document_item[2].MDI_item_text;
        document.getElementById('MDI_material_document_reverse3').value = it_MDI_output_material_document_item[2].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse3').value = it_MDI_output_material_document_item[2].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse3').value = it_MDI_output_material_document_item[2].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type3').value = it_MDI_output_material_document_item[2].system_field_message_type;
        document.getElementById('MDI_system_field_message_description3').value = it_MDI_output_material_document_item[2].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 4)
    {
        document.getElementById('MDI_material_document4').value = it_MDI_output_material_document_item[3].MDI_material_document;
        document.getElementById('MDI_fiscal_year4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year;
        document.getElementById('MDI_item4').value = it_MDI_output_material_document_item[3].MDI_item;
        document.getElementById('MDI_material4').value = it_MDI_output_material_document_item[3].MDI_material;
        document.getElementById('MDI_plant4').value = it_MDI_output_material_document_item[3].MDI_plant;
        document.getElementById('MDI_storage_location4').value = it_MDI_output_material_document_item[3].MDI_storage_location;
        document.getElementById('MDI_quantity4').value = it_MDI_output_material_document_item[3].MDI_quantity;
        document.getElementById('MDI_entry_UOM4').value = it_MDI_output_material_document_item[3].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type4').value = it_MDI_output_material_document_item[3].MDI_material_movement_type;
        document.getElementById('MDI_item_text4').value = it_MDI_output_material_document_item[3].MDI_item_text;
        document.getElementById('MDI_material_document_reverse4').value = it_MDI_output_material_document_item[3].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse4').value = it_MDI_output_material_document_item[3].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse4').value = it_MDI_output_material_document_item[3].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type4').value = it_MDI_output_material_document_item[3].system_field_message_type;
        document.getElementById('MDI_system_field_message_description4').value = it_MDI_output_material_document_item[3].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 5)
    {
        document.getElementById('MDI_material_document5').value = it_MDI_output_material_document_item[4].MDI_material_document;
        document.getElementById('MDI_fiscal_year5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year;
        document.getElementById('MDI_item5').value = it_MDI_output_material_document_item[4].MDI_item;
        document.getElementById('MDI_material5').value = it_MDI_output_material_document_item[4].MDI_material;
        document.getElementById('MDI_plant5').value = it_MDI_output_material_document_item[4].MDI_plant;
        document.getElementById('MDI_storage_location5').value = it_MDI_output_material_document_item[4].MDI_storage_location;
        document.getElementById('MDI_quantity5').value = it_MDI_output_material_document_item[4].MDI_quantity;
        document.getElementById('MDI_entry_UOM5').value = it_MDI_output_material_document_item[4].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type5').value = it_MDI_output_material_document_item[4].MDI_material_movement_type;
        document.getElementById('MDI_item_text5').value = it_MDI_output_material_document_item[4].MDI_item_text;
        document.getElementById('MDI_material_document_reverse5').value = it_MDI_output_material_document_item[4].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse5').value = it_MDI_output_material_document_item[4].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse5').value = it_MDI_output_material_document_item[4].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type5').value = it_MDI_output_material_document_item[4].system_field_message_type;
        document.getElementById('MDI_system_field_message_description5').value = it_MDI_output_material_document_item[4].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 6)
    {
        document.getElementById('MDI_material_document6').value = it_MDI_output_material_document_item[5].MDI_material_document;
        document.getElementById('MDI_fiscal_year6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year;
        document.getElementById('MDI_item6').value = it_MDI_output_material_document_item[5].MDI_item;
        document.getElementById('MDI_material6').value = it_MDI_output_material_document_item[5].MDI_material;
        document.getElementById('MDI_plant6').value = it_MDI_output_material_document_item[5].MDI_plant;
        document.getElementById('MDI_storage_location6').value = it_MDI_output_material_document_item[5].MDI_storage_location;
        document.getElementById('MDI_quantity6').value = it_MDI_output_material_document_item[5].MDI_quantity;
        document.getElementById('MDI_entry_UOM6').value = it_MDI_output_material_document_item[5].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type6').value = it_MDI_output_material_document_item[5].MDI_material_movement_type;
        document.getElementById('MDI_item_text6').value = it_MDI_output_material_document_item[5].MDI_item_text;
        document.getElementById('MDI_material_document_reverse6').value = it_MDI_output_material_document_item[5].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse6').value = it_MDI_output_material_document_item[5].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse6').value = it_MDI_output_material_document_item[5].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type6').value = it_MDI_output_material_document_item[5].system_field_message_type;
        document.getElementById('MDI_system_field_message_description6').value = it_MDI_output_material_document_item[5].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 7)
    {
        document.getElementById('MDI_material_document7').value = it_MDI_output_material_document_item[6].MDI_material_document;
        document.getElementById('MDI_fiscal_year7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year;
        document.getElementById('MDI_item7').value = it_MDI_output_material_document_item[6].MDI_item;
        document.getElementById('MDI_material7').value = it_MDI_output_material_document_item[6].MDI_material;
        document.getElementById('MDI_plant7').value = it_MDI_output_material_document_item[6].MDI_plant;
        document.getElementById('MDI_storage_location7').value = it_MDI_output_material_document_item[6].MDI_storage_location;
        document.getElementById('MDI_quantity7').value = it_MDI_output_material_document_item[6].MDI_quantity;
        document.getElementById('MDI_entry_UOM7').value = it_MDI_output_material_document_item[6].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type7').value = it_MDI_output_material_document_item[6].MDI_material_movement_type;
        document.getElementById('MDI_item_text7').value = it_MDI_output_material_document_item[6].MDI_item_text;
        document.getElementById('MDI_material_document_reverse7').value = it_MDI_output_material_document_item[6].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse7').value = it_MDI_output_material_document_item[6].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse7').value = it_MDI_output_material_document_item[6].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type7').value = it_MDI_output_material_document_item[6].system_field_message_type;
        document.getElementById('MDI_system_field_message_description7').value = it_MDI_output_material_document_item[6].system_field_message_description;         
    }
    
    if (it_MDI_output_material_document_item.length >= 8)
    {
        document.getElementById('MDI_material_document8').value = it_MDI_output_material_document_item[7].MDI_material_document;
        document.getElementById('MDI_fiscal_year8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year;
        document.getElementById('MDI_item8').value = it_MDI_output_material_document_item[7].MDI_item;
        document.getElementById('MDI_material8').value = it_MDI_output_material_document_item[7].MDI_material;
        document.getElementById('MDI_plant8').value = it_MDI_output_material_document_item[7].MDI_plant;
        document.getElementById('MDI_storage_location8').value = it_MDI_output_material_document_item[7].MDI_storage_location;
        document.getElementById('MDI_quantity8').value = it_MDI_output_material_document_item[7].MDI_quantity;
        document.getElementById('MDI_entry_UOM8').value = it_MDI_output_material_document_item[7].MDI_entry_UOM;
        document.getElementById('MDI_material_movement_type8').value = it_MDI_output_material_document_item[7].MDI_material_movement_type;
        document.getElementById('MDI_item_text8').value = it_MDI_output_material_document_item[7].MDI_item_text;
        document.getElementById('MDI_material_document_reverse8').value = it_MDI_output_material_document_item[7].MDI_material_document_reverse;
        document.getElementById('MDI_fiscal_year_reverse8').value = it_MDI_output_material_document_item[7].MDI_fiscal_year_reverse;
        document.getElementById('MDI_item_reverse8').value = it_MDI_output_material_document_item[7].MDI_item_reverse;
        document.getElementById('MDI_system_field_message_type8').value = it_MDI_output_material_document_item[7].system_field_message_type;
        document.getElementById('MDI_system_field_message_description8').value = it_MDI_output_material_document_item[7].system_field_message_description;         
    }    
}






//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}


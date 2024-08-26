/*


check transfer post TGI, TGR quantity
blank record
unit test
check break
debugging
data base table
records vertical scroll
authorization check
unrestricted to restreicted material movement type
restricted to unrestricted material movement type
unrestricted to blocked material movement type
blocked to unrestricted material movement type
account document
avoid if statement in main/public method


purchase order goods receipt quantity before post - COMPLETE
sales order goods issue quantity before post - COMPLETE
sales order quantity check - COMPLETE
purchase order quantity check - COMPLETE
add return parameter MSL_output_material_storage_location - COMPLETE
rename *_populate_material_document_* into *_copy_input_output_*  - COMPLETE
for read, test error message "material document item does not exist" - COMPLETE
for update, test error message "material document item does not exist" - COMPLETE
seperate data select logic - COMPLETE
seperate data saving logic - COMPLETE
add data type - COMPLETE
add return parameter - COMPLETE
remove global variable - COMPLETE

*/


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MDH_material_document_header = 
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

var tt_MDH_input_material_document_header = structuredClone(tt_MDH_material_document_header),
    tt_MDH_output_material_document_header = structuredClone(tt_MDH_material_document_header);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MDI_material_document_item = 
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
        purchase_order : '',
        purchase_order_item : '',
        sales_order : '',
        sales_order_item : '',
        unrestricted_stock_before_post : '',
        restricted_stock_before_post : '',
        reserved_stock_before_post : '',
        blocked_stock_before_post : '',
        quality_in_stock_before_post : '',
        purchase_order_goods_receipt_quantity_before_post : '',
        sales_order_goods_issue_quantity_before_post : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var tt_MDI_input_material_document_item = structuredClone(tt_MDI_material_document_item),
    tt_MDI_output_material_document_item = structuredClone(tt_MDI_material_document_item);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
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

    var tt_MSL_input_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_material_storage_location);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MMT_material_movement_type = 
    [
        {
            tenant : '',
            material_movement_type : '',
            
            material_movement_type_description : '',
            material_movement_type_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }
    ];

    var tt_MMT_input_material_movement_type = structuredClone(tt_MMT_material_movement_type),
        tt_MMT_output_material_movement_type = structuredClone(tt_MMT_material_movement_type);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_POI_purchase_order_header = 
    [
        {
            tenant : '',
            purchase_order : '',
            
            vendor : '',
        }
    ];

var tt_POI_input_purchase_order_header = structuredClone(tt_POI_purchase_order_header),    
    tt_POI_output_purchase_order_header = structuredClone(tt_POI_purchase_order_header);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_POI_purchase_order_item = 
    [
        {
            tenant : '',
            purchase_order : '',
            item : '',
            
            material : '',
            plant : '',
            storage_location : '',
            purchase_order_quantity : '',
            purchase_UOM : '',
            goods_receipt_quantity : ''
        }
    ];


    var tt_POI_input_purchase_order_item = structuredClone(tt_POI_purchase_order_item),    
    tt_POI_output_purchase_order_item = structuredClone(tt_POI_purchase_order_item);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_SOI_sales_order_header = 
    [
        {
            tenant : '',
            sales_order : '',
            
            customer : '',
        }
    ];

var tt_SOI_input_sales_order_header = structuredClone(tt_SOI_sales_order_header),    
    tt_SOI_output_sales_order_header = structuredClone(tt_SOI_sales_order_header);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_SOI_sales_order_item = 
    [
        {
            tenant : '',
            sales_order : '',
            item : '',
            
            material : '',
            plant : '',
            storage_location : '',
            sales_order_quantity : '',
            sales_UOM : '',
            goods_issue_quantity : ''
        }
    ];

    var tt_SOI_input_sales_order_item = structuredClone(tt_SOI_sales_order_item),    
    tt_SOI_output_sales_order_item = structuredClone(tt_SOI_sales_order_item);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
class MD_material_document 
{

    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_create_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
            ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
            ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
            ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lt_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            lt_MDI_material_document_item = structuredClone(tt_MDI_material_document_item),
            lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location),
            lt_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type),
            lt_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item),
            lt_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);           

        [lt_MDH_material_document_header, lt_MDI_material_document_item, lt_MSL_material_storage_location, lt_MMT_material_movement_type, lt_POI_purchase_order_item, lt_SOI_sales_order_item] = this.MD_select_C(it_MDH_input_material_document_header, it_MDI_input_material_document_item);
        [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item] = this.MD_check_C(it_MDH_input_material_document_header, it_MDI_input_material_document_item, lt_MDH_material_document_header, lt_MDI_material_document_item, lt_MSL_material_storage_location, lt_MMT_material_movement_type, lt_POI_purchase_order_item, lt_SOI_sales_order_item);
        // MD_save_C

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_select_C(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item),
            ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location),
            ot_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type),
            ot_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item),
            ot_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);

        ot_MDH_material_document_header = this.MDH_select_C(it_MDH_input_material_document_header);
        ot_MDI_material_document_item = this.MDI_select_C(it_MDI_input_material_document_item);
        ot_MSL_material_storage_location = this.MSL_select_C(it_MDI_input_material_document_item);
        // MDT_select_C();
        // MAUOM_select_C();
        ot_MMT_material_movement_type = this.MMT_select_C();
        ot_POI_purchase_order_item = this.POI_select_C();
        ot_SOI_sales_order_item = this.SOI_select_C();

        return [ot_MDH_material_document_header, ot_MDI_material_document_item, ot_MSL_material_storage_location, ot_MMT_material_movement_type, ot_POI_purchase_order_item, ot_SOI_sales_order_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_check_C(it_MDH_input_material_document_header, it_MDI_input_material_document_item, 
        it_MDH_material_document_header, it_MDI_material_document_item, it_MSL_material_storage_location, it_MMT_material_movement_type, it_POI_purchase_order_item, it_SOI_sales_order_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
            ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
            ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
            ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lt_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_output_material_storage_location_copy),
            lt_POI_output_purchase_order_item_copy = structuredClone(tt_POI_output_purchase_order_item),
            lt_SOI_output_sales_order_item_copy = structuredClone(tt_SOI_output_sales_order_item);          

        var lv_counter_header = 0,
            lv_counter_item = 0;

    // Header
        ot_MDH_output_material_document_header = this.MDH_copy_input_C(it_MDH_input_material_document_header);

        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {
            this.MDH_check_tenant_C(ot_MDH_output_material_document_header[lv_counter_header]);
            // MDH_check_material_document_type_C
            this.MDH_check_material_document_header_C(it_MDH_material_document_header, ot_MDH_output_material_document_header, ot_MDH_output_material_document_header[lv_counter_header], lv_counter_header);
        }


    // Item
        ot_MDI_output_material_document_item = this.MDI_copy_input_C(it_MDI_input_material_document_item);   

        for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
        {
            this.MDI_check_tenant_C(ot_MDI_output_material_document_item[lv_counter_item]);
            // MDI_check_material_general_C
            // MDI_check_material_plant_C
            this.MDI_check_material_storage_location_C(it_MSL_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
            // MDI_check_quantity_C
            // MDI_check_entry_UOM_C
            this.MDI_check_material_movement_type_C(it_MMT_material_movement_type, ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_material_document_item_C(it_MDI_material_document_item, ot_MDI_output_material_document_item, ot_MDI_output_material_document_item[lv_counter_item], lv_counter_item);
            this.MDI_check_purchase_order_C(ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_purchase_order_item_C(ot_MDI_output_material_document_item[lv_counter_item], it_POI_purchase_order_item);
            this.MDI_check_sales_order_C(ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_sales_order_item_C(ot_MDI_output_material_document_item[lv_counter_item], it_SOI_sales_order_item);            
            this.MDI_check_parent_C(ot_MDI_output_material_document_item[lv_counter_item], ot_MDH_output_material_document_header);  // check ot_MDH_material_document_header ????
        }   


    // Header & Item
        ot_MSL_output_material_storage_location = this.MDI_copy_output_material_storage_location_C(it_MSL_material_storage_location);
        ot_POI_output_purchase_order_item = this.MDI_copy_input_purchase_order_item_C(it_POI_purchase_order_item);
        ot_SOI_output_sales_order_item = this.MDI_copy_input_sales_order_item_C(it_SOI_sales_order_item);

        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {
            lt_MSL_output_material_storage_location_copy = this.MDI_copy_output_material_storage_location_C(ot_MSL_output_material_storage_location);
            lt_POI_output_purchase_order_item_copy = this.MDI_copy_output_purchase_order_item_C(ot_POI_output_purchase_order_item);
            lt_SOI_output_sales_order_item_copy = this.MDI_copy_output_sales_order_item_C(ot_SOI_output_sales_order_item);

            for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
            {
                if (ot_MDI_output_material_document_item[lv_counter_item].tenant == ot_MDH_output_material_document_header[lv_counter_header].tenant &&
                    ot_MDI_output_material_document_item[lv_counter_item].material_document == ot_MDH_output_material_document_header[lv_counter_header].material_document &&
                    ot_MDI_output_material_document_item[lv_counter_item].fiscal_year == ot_MDH_output_material_document_header[lv_counter_header].fiscal_year)
                {
                    this.MDI_populate_stock_goods_issue_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_issue_sales_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_receipt_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_receipt_purchase_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_transfer_goods_issue_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_transfer_goods_receipt_C(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);        

                    this.MDI_populate_sales_goods_issue_C(ot_SOI_output_sales_order_item, ot_MDI_output_material_document_item[lv_counter_item]);                    
                    this.MDI_populate_purchase_goods_receipt_C(ot_POI_output_purchase_order_item, ot_MDI_output_material_document_item[lv_counter_item]);
                }
            }

            ot_MSL_output_material_storage_location = this.MDI_revert_back_ouput_material_storage_location_C(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, lt_MSL_output_material_storage_location_copy);
            ot_SOI_output_sales_order_item = this.MDI_revert_back_output_sales_order_item_C(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_SOI_output_sales_order_item, lt_SOI_output_sales_order_item_copy);
            ot_POI_output_purchase_order_item = this.MDI_revert_back_output_purchase_order_item_C(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_POI_output_purchase_order_item, lt_POI_output_purchase_order_item_copy);
            this.MDH_check_child_C(ot_MDI_output_material_document_item, ot_MDH_output_material_document_header[lv_counter_header]);
        }
        
        console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
        console.log('it_MDH_material_document_header'); console.log(it_MDH_material_document_header); 
        console.log('ot_MDH_output_material_document_header'); console.log(ot_MDH_output_material_document_header); 
        console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
        console.log('it_MDI_material_document_item'); console.log(it_MDI_material_document_item); 
        console.log('ot_MDI_output_material_document_item'); console.log(ot_MDI_output_material_document_item); 
        console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location); 
        console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
        console.log('it_MMT_material_movement_type'); console.log(it_MMT_material_movement_type);
        console.log('it_POI_purchase_order_item'); console.log(it_POI_purchase_order_item);
        console.log('ot_POI_output_purchase_order_item'); console.log(ot_POI_output_purchase_order_item);
        console.log('it_SOI_sales_order_item'); console.log(it_SOI_sales_order_item);
        console.log('ot_SOI_output_sales_order_item'); console.log(ot_SOI_output_sales_order_item);
        
        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item];        
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_save_C()    
    {
        // MDH_save_C();
        // MDI_save_C();
        // MSL_save_C();
        // POI_save_C();
        // SOI_save_C();
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_read_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lt_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            lt_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);      

        [lt_MDH_material_document_header, lt_MDI_material_document_item] = this.MD_select_R(it_MDH_input_material_document_header, it_MDI_input_material_document_item);
        [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item] = this.MD_check_R(it_MDH_input_material_document_header, it_MDI_input_material_document_item, lt_MDH_material_document_header, lt_MDI_material_document_item);
        // MD_save_R

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//    
    MD_select_R(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDH_material_document_header = this.MDH_select_R(it_MDH_input_material_document_header);
        ot_MDI_material_document_item = this.MDI_select_R(it_MDI_input_material_document_item);

        return [ot_MDH_material_document_header, ot_MDI_material_document_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_check_R(it_MDH_input_material_document_header, it_MDI_input_material_document_item,
        it_MDH_material_document_header, it_MDI_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lv_counter_header = 0,
            lv_counter_item = 0;
        
    // Header    
        ot_MDH_output_material_document_header = this.MDH_copy_input_R(it_MDH_input_material_document_header, it_MDH_material_document_header);
        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {
            this.MDH_check_tenant_R(ot_MDH_output_material_document_header[lv_counter_header]);
            this.MDH_check_material_document_header_R(it_MDH_material_document_header, ot_MDH_output_material_document_header, ot_MDH_output_material_document_header[lv_counter_header], lv_counter_header);
        }


    // Item    
        ot_MDI_output_material_document_item = this.MDI_copy_input_R(it_MDI_input_material_document_item, it_MDI_material_document_item);  // ???? is this method required ????
        for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
        {
            this.MDI_check_tenant_R(ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_material_document_item_R(it_MDI_material_document_item, ot_MDI_output_material_document_item, ot_MDI_output_material_document_item[lv_counter_item], lv_counter_item);
            this.MDI_check_parent_R(ot_MDI_output_material_document_item[lv_counter_item], ot_MDH_output_material_document_header);
        }   

    
        console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
        console.log('it_MDH_material_document_header'); console.log(it_MDH_material_document_header); 
        console.log('ot_MDH_output_material_document_header'); console.log(ot_MDH_output_material_document_header); 
        console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
        console.log('it_MDI_material_document_item'); console.log(it_MDI_material_document_item); 
        console.log('ot_MDI_output_material_document_item'); console.log(ot_MDI_output_material_document_item); 

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item];  
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_update_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lt_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            lt_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);      

        [lt_MDH_material_document_header, lt_MDI_material_document_item] = this.MD_select_U(it_MDH_input_material_document_header, it_MDI_input_material_document_item);
        [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item] = this.MD_check_U(it_MDH_input_material_document_header, it_MDI_input_material_document_item, lt_MDH_material_document_header, lt_MDI_material_document_item);
        // MD_save_U

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//    
    MD_select_U(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDH_material_document_header = this.MDH_select_R(it_MDH_input_material_document_header);
        ot_MDI_material_document_item = this.MDI_select_R(it_MDI_input_material_document_item);

        return [ot_MDH_material_document_header, ot_MDI_material_document_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_check_U(it_MDH_input_material_document_header, it_MDI_input_material_document_item,
        it_MDH_material_document_header, it_MDI_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lv_counter_header = 0,
            lv_counter_item = 0;


    // Header
        ot_MDH_output_material_document_header = this.MDH_copy_input_U(it_MDH_input_material_document_header, it_MDH_material_document_header);
        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {
            this.MDH_check_tenant_U(ot_MDH_output_material_document_header[lv_counter_header]);
            this.MDH_check_material_document_header_U(it_MDH_material_document_header, ot_MDH_output_material_document_header, ot_MDH_output_material_document_header[lv_counter_header], lv_counter_header);
        }


    // Item
        ot_MDI_output_material_document_item = this.MDI_copy_input_U(it_MDI_input_material_document_item, it_MDI_material_document_item);   
        for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
        {
            this.MDI_check_tenant_U(ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_material_document_item_U(it_MDI_material_document_item, ot_MDI_output_material_document_item, ot_MDI_output_material_document_item[lv_counter_item], lv_counter_item);
            this.MDI_check_parent_U(ot_MDI_output_material_document_item[lv_counter_item], ot_MDH_output_material_document_header);
        }   


        console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
        console.log('it_MDH_material_document_header'); console.log(it_MDH_material_document_header); 
        console.log('ot_MDH_output_material_document_header'); console.log(ot_MDH_output_material_document_header); 
        console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
        console.log('it_MDI_material_document_item'); console.log(it_MDI_material_document_item); 
        console.log('ot_MDI_output_material_document_item'); console.log(ot_MDI_output_material_document_item); 

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item];  
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_save_U()    
    {
        // MDH_save_U
        // MDI_save_U
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_delete_model(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
            ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
            ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
            ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lt_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            lt_MDI_material_document_item = structuredClone(tt_MDI_material_document_item),
            lt_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location),
            lt_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type),
            lt_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item),
            lt_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);

            [lt_MDH_material_document_header, lt_MDI_material_document_item, lt_MSL_material_storage_location, lt_MMT_material_movement_type, lt_POI_purchase_order_item, lt_SOI_sales_order_item] = this.MD_select_D(it_MDH_input_material_document_header, it_MDI_input_material_document_item);
            [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item] = this.MD_check_D(it_MDH_input_material_document_header, it_MDI_input_material_document_item, lt_MDH_material_document_header, lt_MDI_material_document_item, lt_MSL_material_storage_location, lt_MMT_material_movement_type, lt_POI_purchase_order_item, lt_SOI_sales_order_item);
            // MD_save_D

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item]; 
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_select_D(it_MDH_input_material_document_header, it_MDI_input_material_document_item)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header),
            ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item),
            ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location),
            ot_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type),
            ot_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item),
            ot_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);

        ot_MDH_material_document_header = this.MDH_select_D(it_MDH_input_material_document_header);
        ot_MDI_material_document_item = this.MDI_select_D(it_MDI_input_material_document_item);
        ot_MSL_material_storage_location = this.MSL_select_D(it_MDI_input_material_document_item);
        ot_MMT_material_movement_type = this.MMT_select_D();
        ot_POI_purchase_order_item = this.POI_select_D();
        ot_SOI_sales_order_item = this.SOI_select_D();

        return [ot_MDH_material_document_header, ot_MDI_material_document_item, ot_MSL_material_storage_location, ot_MMT_material_movement_type, ot_POI_purchase_order_item, ot_SOI_sales_order_item];
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_check_D(it_MDH_input_material_document_header, it_MDI_input_material_document_item,
        it_MDH_material_document_header, it_MDI_material_document_item, it_MSL_material_storage_location, it_MMT_material_movement_type, it_POI_purchase_order_item, it_SOI_sales_order_item)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header), 
            ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
            ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
            ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
            ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lt_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_output_material_storage_location_copy),
            lt_POI_output_purchase_order_item_copy = structuredClone(tt_POI_output_purchase_order_item),
            lt_SOI_output_sales_order_item_copy = structuredClone(tt_SOI_output_sales_order_item);

        var lv_counter_header = 0,
            lv_counter_item = 0;

            
    // Header
        ot_MDH_output_material_document_header = this.MDH_copy_input_D(it_MDH_input_material_document_header, it_MDH_material_document_header);
        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {
            this.MDH_check_tenant_D(ot_MDH_output_material_document_header[lv_counter_header]);
            // MDH_check_material_document_type
            this.MDH_check_material_document_header_D(it_MDH_material_document_header, ot_MDH_output_material_document_header, ot_MDH_output_material_document_header[lv_counter_header], lv_counter_header);
        }


    // Item
        ot_MDI_output_material_document_item = this.MDI_copy_input_D(it_MDI_input_material_document_item, it_MDI_material_document_item);   
        for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
        {
            this.MDI_check_tenant_D(ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_populate_material_movement_type_D(it_MMT_material_movement_type, ot_MDI_output_material_document_item[lv_counter_item]);
            this.MDI_check_material_document_item_D(it_MDI_material_document_item, ot_MDI_output_material_document_item, ot_MDI_output_material_document_item[lv_counter_item], lv_counter_item);
            this.MDI_check_parent_D(ot_MDI_output_material_document_item[lv_counter_item], ot_MDH_output_material_document_header);
        }   


    // Header & Item
        ot_MSL_output_material_storage_location = this.MDI_copy_output_material_storage_location_D(it_MSL_material_storage_location);
        ot_POI_output_purchase_order_item = this.MDI_copy_input_purchase_order_item_D(it_POI_purchase_order_item);
        ot_SOI_output_sales_order_item = this.MDI_copy_input_sales_order_item_D(it_SOI_sales_order_item);

        for (lv_counter_header = 0; lv_counter_header < ot_MDH_output_material_document_header.length; lv_counter_header = lv_counter_header + 1)
        {           
            lt_MSL_output_material_storage_location_copy = this.MDI_copy_output_material_storage_location_D(ot_MSL_output_material_storage_location);
            lt_POI_output_purchase_order_item_copy = this.MDI_copy_output_purchase_order_item_D(ot_POI_output_purchase_order_item);
            lt_SOI_output_sales_order_item_copy = this.MDI_copy_output_sales_order_item_D(ot_SOI_output_sales_order_item);

            for (lv_counter_item = 0; lv_counter_item < ot_MDI_output_material_document_item.length; lv_counter_item = lv_counter_item + 1)
            {
                if (ot_MDI_output_material_document_item[lv_counter_item].tenant == ot_MDH_output_material_document_header[lv_counter_header].tenant &&
                    ot_MDI_output_material_document_item[lv_counter_item].material_document == ot_MDH_output_material_document_header[lv_counter_header].material_document &&
                    ot_MDI_output_material_document_item[lv_counter_item].fiscal_year == ot_MDH_output_material_document_header[lv_counter_header].fiscal_year)
                {
                    this.MDI_populate_stock_goods_receipt_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_receipt_purchase_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_issue_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_goods_issue_sales_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_transfer_goods_receipt_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_stock_transfer_goods_issue_D(ot_MSL_output_material_storage_location, ot_MDI_output_material_document_item[lv_counter_item]);

                    this.MDI_populate_purchase_goods_receipt_D(ot_POI_output_purchase_order_item, ot_MDI_output_material_document_item[lv_counter_item]);
                    this.MDI_populate_sales_goods_issue_D(ot_SOI_output_sales_order_item, ot_MDI_output_material_document_item[lv_counter_item]);                    
                }
            }

            ot_MSL_output_material_storage_location = this.MDI_revert_back_ouput_material_storage_location_D(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, lt_MSL_output_material_storage_location_copy);
            ot_POI_output_purchase_order_item = this.MDI_revert_back_output_purchase_order_item_D(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_POI_output_purchase_order_item, lt_POI_output_purchase_order_item_copy);
            ot_SOI_output_sales_order_item = this.MDI_revert_back_output_sales_order_item_D(ot_MDH_output_material_document_header[lv_counter_header], ot_MDI_output_material_document_item, ot_SOI_output_sales_order_item, lt_SOI_output_sales_order_item_copy);
            this.MDH_check_child_D(ot_MDI_output_material_document_item, ot_MDH_output_material_document_header[lv_counter_header]);
        }

        console.log('it_MDH_input_material_document_header'); console.log(it_MDH_input_material_document_header); 
        console.log('it_MDH_material_document_header'); console.log(it_MDH_material_document_header); 
        console.log('ot_MDH_output_material_document_header'); console.log(ot_MDH_output_material_document_header); 
        console.log('it_MDI_input_material_document_item'); console.log(it_MDI_input_material_document_item); 
        console.log('it_MDI_material_document_item'); console.log(it_MDI_material_document_item); 
        console.log('ot_MDI_output_material_document_item'); console.log(ot_MDI_output_material_document_item);
        console.log('it_MSL_material_storage_location'); console.log(it_MSL_material_storage_location); 
        console.log('ot_MSL_output_material_storage_location'); console.log(ot_MSL_output_material_storage_location);
        console.log('it_MMT_material_movement_type'); console.log(it_MMT_material_movement_type);
        console.log('it_POI_purchase_order_item'); console.log(it_POI_purchase_order_item);
        console.log('ot_POI_output_purchase_order_item'); console.log(ot_POI_output_purchase_order_item);
        console.log('it_SOI_sales_order_item'); console.log(it_SOI_sales_order_item);
        console.log('ot_SOI_output_sales_order_item'); console.log(ot_SOI_output_sales_order_item);

        return [ot_MDH_output_material_document_header, ot_MDI_output_material_document_item, ot_MSL_output_material_storage_location, ot_POI_output_purchase_order_item, ot_SOI_output_sales_order_item]; 
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MD_save_D()    
    {
        // MDH_save_D();
        // MDI_save_D();
        // MSL_save_D();
        // POI_save_D();
        // SOI_save_D();
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_select_C(it_MDH_input_material_document_header)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header);

        ot_MDH_material_document_header = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDH_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_select_C(it_MDI_input_material_document_item)
    {
        var ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDI_material_document_item = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'GR', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'GR', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'GI', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'GI', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDI_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MSL_select_C(it_MDI_input_material_document_item)
    {
        var ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);

        ot_MSL_material_storage_location = 
        [
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', unrestricted_stock : '100', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', unrestricted_stock : '200', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', unrestricted_stock : '300', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', unrestricted_stock : '400', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', unrestricted_stock : '500', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', unrestricted_stock : '600', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', unrestricted_stock : '700', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', unrestricted_stock : '800', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MSL_material_storage_location;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MMT_select_C()
    {
        var ot_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type);

        ot_MMT_material_movement_type = 
        [
            { tenant : 'TEST', material_movement_type : 'GI', material_movement_type_description : 'Goods Issue', material_movement_type_reverse : 'GIR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GR', material_movement_type_description : 'Goods Receipt', material_movement_type_reverse : 'GRR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GRP', material_movement_type_description : 'Goods Receipt Purchase', material_movement_type_reverse : 'GRPR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GIS', material_movement_type_description : 'Goods Issue Sales', material_movement_type_reverse : 'GISR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGI', material_movement_type_description : 'Transfer Goods Issue', material_movement_type_reverse : 'TGIR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGR', material_movement_type_description : 'Transfer Goods Receipt', material_movement_type_reverse : 'TGRR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GIR', material_movement_type_description : 'Goods Issue Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },            
            { tenant : 'TEST', material_movement_type : 'GRR', material_movement_type_description : 'Goods Receipt Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GRPR', material_movement_type_description : 'Goods Receipt Purchase Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GISR', material_movement_type_description : 'Goods Issue Sales Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGIR', material_movement_type_description : 'Transfer Goods Issue Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGRR', material_movement_type_description : 'Transfer Goods Receipt Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' }            
        ];

        return ot_MMT_material_movement_type;
    }

    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    POI_select_C()
    {    
        var ot_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item);

        ot_POI_purchase_order_item =
        [
            {tenant : 'TEST', purchase_order : 'PO1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', purchase_order_quantity : '1000', purchase_UOM : 'EA', goods_receipt_quantity : '100'},
            {tenant : 'TEST', purchase_order : 'PO1', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', purchase_order_quantity : '2000', purchase_UOM : 'EA', goods_receipt_quantity : '200'},
            {tenant : 'TEST', purchase_order : 'PO2', item : 'I1', material : 'M1', plant : 'P2', storage_location : 'SL1', purchase_order_quantity : '3000', purchase_UOM : 'EA', goods_receipt_quantity : '300'},
            {tenant : 'TEST', purchase_order : 'PO2', item : 'I2', material : 'M1', plant : 'P2', storage_location : 'SL2', purchase_order_quantity : '4000', purchase_UOM : 'EA', goods_receipt_quantity : '400'}        
        ];

        return ot_POI_purchase_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    SOI_select_C()
    {    
        var ot_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);

        ot_SOI_sales_order_item =
        [
            {tenant : 'TEST', sales_order : 'SO1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', sales_order_quantity : '1000', sales_UOM : 'EA', goods_issue_quantity : '100'},
            {tenant : 'TEST', sales_order : 'SO1', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', sales_order_quantity : '2000', sales_UOM : 'EA', goods_issue_quantity : '200'},
            {tenant : 'TEST', sales_order : 'SO2', item : 'I1', material : 'M1', plant : 'P2', storage_location : 'SL1', sales_order_quantity : '3000', sales_UOM : 'EA', goods_issue_quantity : '300'},
            {tenant : 'TEST', sales_order : 'SO2', item : 'I2', material : 'M1', plant : 'P2', storage_location : 'SL2', sales_order_quantity : '4000', sales_UOM : 'EA', goods_issue_quantity : '400'}
        ];

        return ot_SOI_sales_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_copy_input_C(it_MDH_input_material_document_header)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_input_material_document_header);

        ot_MDH_output_material_document_header = structuredClone(it_MDH_input_material_document_header);
        return ot_MDH_output_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_tenant_C(ct_MDH_output_material_document_header)
    {
        if (ct_MDH_output_material_document_header.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '') 
            {
                if (ct_MDH_output_material_document_header.tenant == '')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_material_document_header_C(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
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
                        break;                                                                                                    
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
                        break;
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
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_input_C(it_MDI_input_material_document_item)
    {
        var ot_MDI_output_material_document_item = structuredClone(tt_MDI_input_material_document_item);

        ot_MDI_output_material_document_item = structuredClone(it_MDI_input_material_document_item);
        return ot_MDI_output_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_tenant_C(ct_MDI_output_material_document_item)
    {
        if (ct_MDI_output_material_document_item.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.tenant == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_storage_location_C(it_MSL_material_storage_location, ct_MDI_output_material_document_item)
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
                for (lv_counter = 0; lv_counter < it_MSL_material_storage_location.length; lv_counter = lv_counter + 1)
                {
                    if (it_MSL_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MSL_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                        it_MSL_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                        it_MSL_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Material Storage Location does not exist';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_movement_type_C(it_MMT_material_movement_type, ct_MDI_output_material_document_item)
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
                if (ct_MDI_output_material_document_item.material_movement_type == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Material Movement Type does not have data';
                }
                else
                {
                    lv_record_exist = '';
                    for (lv_counter = 0; lv_counter < it_MMT_material_movement_type.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MMT_material_movement_type[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MMT_material_movement_type[lv_counter].material_movement_type == ct_MDI_output_material_document_item.material_movement_type)
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {
                        for (lv_counter = 0; lv_counter < it_MMT_material_movement_type.length; lv_counter = lv_counter + 1)
                        {
                            if (it_MMT_material_movement_type[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                                it_MMT_material_movement_type[lv_counter].material_movement_type_reverse == ct_MDI_output_material_document_item.material_movement_type)
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Reverse Material Movement Type';
                                break;
                            }
                        }
                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Material Movement Type does not exist';
                    }
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_document_item_C(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
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
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
                        it_MDI_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGI')
                { 
                    lv_record_exist = '';       
                    for (lv_counter = 0 ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                            it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                            it_MDI_output_material_document_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            it_MDI_output_material_document_item[lv_counter].quantity == ct_MDI_output_material_document_item.quantity &&
                            it_MDI_output_material_document_item[lv_counter].material_movement_type == 'TGR')
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Transfer Goods Receipt record does not exist';
                    }
                }
            }


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGR') 
                {
                    lv_record_exist = '';       
                    for (lv_counter = 0 ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                            it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                            it_MDI_output_material_document_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            it_MDI_output_material_document_item[lv_counter].quantity == ct_MDI_output_material_document_item.quantity &&
                            it_MDI_output_material_document_item[lv_counter].material_movement_type == 'TGI')
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Transfer Goods Issue record does not exist';
                    }
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_purchase_order_C(ct_MDI_output_material_document_item)
    {
        if (ct_MDI_output_material_document_item.material_document == '')
        {
            
        }
        else  
        {  
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRP')
                {
                    if (ct_MDI_output_material_document_item.purchase_order == '')
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order does not have data';
                    }
                }
                else
                {
                    if (ct_MDI_output_material_document_item.purchase_order == '')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order has data';
                    }                        
                } 
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_purchase_order_item_C(ct_MDI_output_material_document_item, it_POI_purchase_order_item)
    {
        var lv_counter = 0,
            lv_record_exist = '';
        if (ct_MDI_output_material_document_item.material_document == '')
        {
            
        }
        else  
        {  
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRP')
                {
                    if (ct_MDI_output_material_document_item.purchase_order_item == '')
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order Item does not have data';
                    }
                    else
                    {
                        lv_record_exist = '';
                        for (lv_counter = 0; lv_counter < it_POI_purchase_order_item.length; lv_counter = lv_counter + 1)
                        {
                            if (it_POI_purchase_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                                it_POI_purchase_order_item[lv_counter].purchase_order == ct_MDI_output_material_document_item.purchase_order &&
                                it_POI_purchase_order_item[lv_counter].item == ct_MDI_output_material_document_item.purchase_order_item)
                            {
                                if (it_POI_purchase_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                                    it_POI_purchase_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                                    it_POI_purchase_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                                    it_POI_purchase_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                                {

                                }
                                else
                                {
                                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                    ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order Item does not have Material Storage Location';
                                }

                                lv_record_exist = 'X';
                                break;
                            }
                        }

                        if (lv_record_exist == 'X')
                        {

                        }
                        else
                        {
                            ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                            ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order Item does not exist';
                        }
                    }
                }
                else
                {
                    if (ct_MDI_output_material_document_item.purchase_order_item == '')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Purchase Order Item has data';
                    }                        
                } 
            }
        }
    }    


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_sales_order_C(ct_MDI_output_material_document_item)
    {
        var lv_counter = 0,
            lv_record_exist = '';

        if (ct_MDI_output_material_document_item.material_document == '')
        {
            
        }
        else  
        {  
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'GIS')
                {
                    if (ct_MDI_output_material_document_item.sales_order == '')
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order does not have data';
                    }
                }
                else
                {
                    if (ct_MDI_output_material_document_item.sales_order == '')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order has data';
                    }                        
                } 
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_sales_order_item_C(ct_MDI_output_material_document_item, it_SOI_sales_order_item)
    {
        var lv_counter = 0,
            lv_record_exist = '';

        if (ct_MDI_output_material_document_item.material_document == '')
        {
            
        }
        else  
        {  
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'GIS')
                {
                    if (ct_MDI_output_material_document_item.sales_order_item == '')
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order Item does not have data';
                    }

                    else
                    {
                        lv_record_exist = '';
                        for (lv_counter = 0; lv_counter < it_SOI_sales_order_item.length; lv_counter = lv_counter + 1)
                        {
                            if (it_SOI_sales_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                                it_SOI_sales_order_item[lv_counter].sales_order == ct_MDI_output_material_document_item.sales_order &&
                                it_SOI_sales_order_item[lv_counter].item == ct_MDI_output_material_document_item.sales_order_item)
                            {
                                if (it_SOI_sales_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                                    it_SOI_sales_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                                    it_SOI_sales_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                                    it_SOI_sales_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                                {

                                }
                                else
                                {
                                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                    ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order Item does not have Material Storage Location';
                                }

                                lv_record_exist = 'X';
                                break;
                            }
                        }

                        if (lv_record_exist == 'X')
                        {

                        }
                        else
                        {
                            ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                            ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order Item does not exist';
                        }
                    }
                }
                else
                {
                    if (ct_MDI_output_material_document_item.sales_order_item == '')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Sales Order Item has data';
                    }                        
                } 
            }
        }
    }    


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_parent_C(ct_MDI_output_material_document_item, it_MDH_output_material_document_header)
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
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) does not exist';
                }
            }
            
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                lv_record_exist = '';       
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDH_output_material_document_header[lv_counter].system_field_message_type == 'ERROR')
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) has error';
                }
                else
                {

                }
            }    
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//    
    MDI_copy_output_material_storage_location_C(it_MSL_material_storage_location)
    {
        var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

        ot_MSL_output_material_storage_location = structuredClone(it_MSL_material_storage_location);
        return ot_MSL_output_material_storage_location;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------// 
    MDI_copy_input_purchase_order_item_C(it_POI_purchase_order_item)
    {
        var ot_output_POI_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item);

        ot_output_POI_purchase_order_item = structuredClone(it_POI_purchase_order_item);
        return ot_output_POI_purchase_order_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------// 
    MDI_copy_input_sales_order_item_C(it_SOI_sales_order_item)
    {
        var ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        ot_SOI_output_sales_order_item = structuredClone(it_SOI_sales_order_item);
        return ot_SOI_output_sales_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_material_storage_location_C(it_MSL_output_material_storage_location)
    {
        var ot_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_output_material_storage_location);

        ot_MSL_output_material_storage_location_copy = structuredClone(it_MSL_output_material_storage_location);
        return ot_MSL_output_material_storage_location_copy;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_purchase_order_item_C(it_POI_output_purchase_order_item)
    {
        var ot_POI_output_purchase_order_item_copy = structuredClone(tt_POI_output_purchase_order_item);

        ot_POI_output_purchase_order_item_copy = structuredClone(it_POI_output_purchase_order_item);
        return ot_POI_output_purchase_order_item_copy;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_sales_order_item_C(it_SOI_output_sales_order_item)
    {
        var ot_SOI_output_sales_order_item_copy = structuredClone(tt_SOI_output_sales_order_item);

        ot_SOI_output_sales_order_item_copy = structuredClone(it_SOI_output_sales_order_item);
        return ot_SOI_output_sales_order_item_copy;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_issue_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GI')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;                         
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_issue_sales_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GIS')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;                         
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_receipt_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                           
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_receipt_purchase_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRP')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                           
                        }
                    }
                }            
            }
        }
    }




    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_transfer_goods_issue_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGI')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;                      
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                            break;                            
                        }
                    }
                }            
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_transfer_goods_receipt_C(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_sales_goods_issue_C(ct_SOI_output_sales_order_item, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0,
            lv_open_sales_order_quantity = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GIS')
                {
                    for (lv_counter = 0 ; lv_counter < ct_SOI_output_sales_order_item.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_SOI_output_sales_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_SOI_output_sales_order_item[lv_counter].sales_order == ct_MDI_output_material_document_item.sales_order &&
                            ct_SOI_output_sales_order_item[lv_counter].item == ct_MDI_output_material_document_item.sales_order_item &&
                            ct_SOI_output_sales_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_SOI_output_sales_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_SOI_output_sales_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            lv_open_sales_order_quantity = +ct_SOI_output_sales_order_item[lv_counter].sales_order_quantity - +ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity;
                            if (+lv_open_sales_order_quantity >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.sales_order_goods_issue_quantity_before_post = ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity;
                                ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity = (+ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity) + (+ct_MDI_output_material_document_item.quantity);
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Quantity is more than Open Sales Order Quantity';                        
                            }
                            break;                            
                        }
                    }
                }            
            }
        }
    }




    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_purchase_goods_receipt_C(ct_POI_output_purchase_order_item, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0,
            lv_open_purchase_order_quantity = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRP')
                {
                    for (lv_counter = 0 ; lv_counter < ct_POI_output_purchase_order_item.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_POI_output_purchase_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_POI_output_purchase_order_item[lv_counter].purchase_order == ct_MDI_output_material_document_item.purchase_order &&
                            ct_POI_output_purchase_order_item[lv_counter].item == ct_MDI_output_material_document_item.purchase_order_item &&
                            ct_POI_output_purchase_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_POI_output_purchase_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_POI_output_purchase_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            lv_open_purchase_order_quantity = +ct_POI_output_purchase_order_item[lv_counter].purchase_order_quantity - +ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity;
                            if (+lv_open_purchase_order_quantity >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.purchase_order_goods_receipt_quantity_before_post = ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity;
                                ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity = (+ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity) + (+ct_MDI_output_material_document_item.quantity);
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Quantity is more than Open Purchase Order Quantity';                        
                            }
                            break;                            
                        }
                    }
                }            
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_ouput_material_storage_location_C(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_MSL_output_material_storage_location, it_MSL_output_material_storage_location_copy)
    {
        var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_MSL_output_material_storage_location = structuredClone(it_MSL_output_material_storage_location_copy);
        }
        else
        {
            ot_MSL_output_material_storage_location = structuredClone(it_MSL_output_material_storage_location);
        }

        return ot_MSL_output_material_storage_location;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_output_sales_order_item_C(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_SOI_output_sales_order_item, it_SOI_output_sales_order_item_copy)
    {
        var ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_SOI_output_sales_order_item = structuredClone(it_SOI_output_sales_order_item_copy);
        }
        else
        {
            ot_SOI_output_sales_order_item = structuredClone(it_SOI_output_sales_order_item);
        }

        return ot_SOI_output_sales_order_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_output_purchase_order_item_C(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_POI_output_purchase_order_item, it_POI_output_purchase_order_item_copy)
    {
        var ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_POI_output_purchase_order_item = structuredClone(it_POI_output_purchase_order_item_copy);
        }
        else
        {
            ot_POI_output_purchase_order_item = structuredClone(it_POI_output_purchase_order_item);
        }

        return ot_POI_output_purchase_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_child_C(it_MDI_output_material_document_item, ct_MDH_output_material_document_header)
    {
        var lv_counter = 0,
        lv_record_exist = '';

        if (ct_MDH_output_material_document_header.material_document == '')
        {
            
        }
        else
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '')
            {
                lv_record_exist = '';
                for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                        it_MDI_output_material_document_item[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }            
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Child (Material Document Item) does not exist'; 
                }
            }

            if (ct_MDH_output_material_document_header.system_field_message_type == '')
            {
                lv_record_exist = '';
                for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                        it_MDI_output_material_document_item[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
                    {
                        lv_record_exist = 'X';
                        break;
                    }            
                }

                if (lv_record_exist == 'X')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Child (Material Document Item) has error'; 
                }
                else
                {

                }
            }
        } 
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_select_R(it_MDH_input_material_document_header)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header);

        ot_MDH_material_document_header = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD11', fiscal_year : 'FY11', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : 'MD1', fiscal_year_reverse : 'FY1', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDH_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_select_R(it_MDI_input_material_document_item)
    {
        var ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDI_material_document_item = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'GR', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'GR', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '10', entry_UOM : 'EUOM1', material_movement_type : 'GIS', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : 'SO1', sales_order_item : 'I1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', quantity : '20', entry_UOM : 'EUOM2', material_movement_type : 'GIS', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : 'SO1', sales_order_item : 'I2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD11', fiscal_year : 'FY11', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'GRR', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : 'MD1', fiscal_year_reverse : 'FY1', item_reverse : 'I1', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD11', fiscal_year : 'FY11', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'GRR', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : 'MD1', fiscal_year_reverse : 'FY1', item_reverse : 'I2', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDI_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_copy_input_R(it_MDH_input_material_document_header, it_MDH_material_document_header)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDH_input_material_document_header.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDH_material_document_header.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDH_input_material_document_header[lv_input_counter].tenant == it_MDH_material_document_header[lv_database_counter].tenant &&
                    it_MDH_input_material_document_header[lv_input_counter].material_document == '*' &&
                    it_MDH_input_material_document_header[lv_input_counter].fiscal_year == '*' )
                {
                    ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_material_document_header[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDH_input_material_document_header[lv_input_counter].tenant == it_MDH_material_document_header[lv_database_counter].tenant &&
                    it_MDH_input_material_document_header[lv_input_counter].material_document == it_MDH_material_document_header[lv_database_counter].material_document &&
                    it_MDH_input_material_document_header[lv_input_counter].fiscal_year == it_MDH_material_document_header[lv_database_counter].fiscal_year )
                {
                    ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_material_document_header[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDH_input_material_document_header[lv_input_counter].tenant == it_MDH_material_document_header[lv_database_counter].tenant &&
                    it_MDH_input_material_document_header[lv_input_counter].material_document == it_MDH_material_document_header[lv_database_counter].material_document_reverse &&
                    it_MDH_input_material_document_header[lv_input_counter].fiscal_year == it_MDH_material_document_header[lv_database_counter].fiscal_year_reverse )
                {
                    ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_material_document_header[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_input_material_document_header[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }
        }

        return ot_MDH_output_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_tenant_R(ct_MDH_output_material_document_header)
    {
        if (ct_MDH_output_material_document_header.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '') 
            {
            if (ct_MDH_output_material_document_header.tenant == '')
            {
                ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                ct_MDH_output_material_document_header.system_field_message_description = 'Tenent does not have data';
            }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_material_document_header_R(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
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
                        break;
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
                        break;
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
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_input_R(it_MDI_input_material_document_item, it_MDI_material_document_item)
    {
        var ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDI_input_material_document_item.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDI_material_document_item.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == '*' &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == '*' &&
                    it_MDI_input_material_document_item[lv_input_counter].item == '*' )
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == it_MDI_material_document_item[lv_database_counter].material_document &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == it_MDI_material_document_item[lv_database_counter].fiscal_year &&
                    it_MDI_input_material_document_item[lv_input_counter].item == '*' )
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == it_MDI_material_document_item[lv_database_counter].material_document_reverse &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == it_MDI_material_document_item[lv_database_counter].fiscal_year_reverse &&
                    it_MDI_input_material_document_item[lv_input_counter].item == '*' )
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }
                
                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == it_MDI_material_document_item[lv_database_counter].material_document &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == it_MDI_material_document_item[lv_database_counter].fiscal_year &&
                    it_MDI_input_material_document_item[lv_input_counter].item == it_MDI_material_document_item[lv_database_counter].item)
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == it_MDI_material_document_item[lv_database_counter].material_document_reverse &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == it_MDI_material_document_item[lv_database_counter].fiscal_year_reverse &&
                    it_MDI_input_material_document_item[lv_input_counter].item == it_MDI_material_document_item[lv_database_counter].item_reverse)
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_input_material_document_item[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }
        }

        return ot_MDI_output_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_tenant_R(ct_MDI_output_material_document_item)
    {
        if (ct_MDI_output_material_document_item.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.tenant == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_document_item_R(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
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
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
                        it_MDI_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_parent_R(ct_MDI_output_material_document_item, it_MDH_output_material_document_header)
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
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) does not exist';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_select_U(it_MDH_input_material_document_header)
    {
        var ot_MDH_material_document_header = structuredClone(tt_MDH_material_document_header);

        ot_MDH_material_document_header = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDH_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_select_U(it_MDI_input_material_document_item)
    {
        var ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDI_material_document_item = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '1', entry_UOM : 'EUOM1', material_movement_type : 'GR', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '2', entry_UOM : 'EUOM2', material_movement_type : 'GR', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '3', entry_UOM : 'EUOM1', material_movement_type : 'GI', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M2', plant : 'P2', storage_location : 'SL2', quantity : '4', entry_UOM : 'EUOM2', material_movement_type : 'GI', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : '', sales_order_item : '', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDI_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_copy_input_U(it_MDH_input_material_document_header, it_MDH_material_document_header)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDH_input_material_document_header.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDH_material_document_header.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDH_material_document_header[lv_database_counter].tenant == it_MDH_input_material_document_header[lv_input_counter].tenant &&
                    it_MDH_material_document_header[lv_database_counter].material_document == it_MDH_input_material_document_header[lv_input_counter].material_document &&
                    it_MDH_material_document_header[lv_database_counter].fiscal_year == it_MDH_input_material_document_header[lv_input_counter].fiscal_year)
                {
                    ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_material_document_header[lv_database_counter]);
                    ot_MDH_output_material_document_header[lv_output_counter].header_reference = it_MDH_input_material_document_header[lv_input_counter].header_reference;
                    ot_MDH_output_material_document_header[lv_output_counter].header_text = it_MDH_input_material_document_header[lv_input_counter].header_text;
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_input_material_document_header[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }
        }

        return ot_MDH_output_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_tenant_U(ct_MDH_output_material_document_header)
    {
        if (ct_MDH_output_material_document_header.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '') 
            {
                if (ct_MDH_output_material_document_header.tenant == '')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_material_document_header_U(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
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
                        break;
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
                        break;
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
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_input_U(it_MDI_input_material_document_item, it_MDI_material_document_item)
    {
        var ot_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDI_input_material_document_item.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDI_material_document_item.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document == it_MDI_material_document_item[lv_database_counter].material_document &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year == it_MDI_material_document_item[lv_database_counter].fiscal_year &&
                    it_MDI_input_material_document_item[lv_input_counter].item == it_MDI_material_document_item[lv_database_counter].item)
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);
                    
                    ot_MDI_output_material_document_item[lv_output_counter].item_text = it_MDI_input_material_document_item[lv_input_counter].item_text;
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_input_material_document_item[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }
        }

        return ot_MDI_output_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_tenant_U(ct_MDI_output_material_document_item)
    {
        if (ct_MDI_output_material_document_item.material_document == '')
        {

        }
        else  
        {
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.tenant == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_document_item_U(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
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
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
                        it_MDI_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_parent_U(ct_MDI_output_material_document_item, it_MDH_output_material_document_header)
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
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) does not exist';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_select_D(it_MDH_input_material_document_header)
    {
        var ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDI_material_document_item = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', material_document_type : 'MDT1', document_date : 'DD1', posting_date : 'PD1', header_reference : 'HR1', header_text : 'HT1', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', material_document_type : 'MDT2', document_date : 'DD2', posting_date : 'PD2', header_reference : 'HR2', header_text : 'HT2', material_document_reverse : '', fiscal_year_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDI_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_select_D(it_MDI_input_material_document_item)
    {
        var ot_MDI_material_document_item = structuredClone(tt_MDI_material_document_item);

        ot_MDI_material_document_item = 
        [
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', quantity : '10', entry_UOM : 'EUOM1', material_movement_type : 'GIS', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : 'SO1', sales_order_item : 'I1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD1', fiscal_year : 'FY1', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', quantity : '20', entry_UOM : 'EUOM2', material_movement_type : 'GIS', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : 'SO1', sales_order_item : 'I2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I1', material : 'M1', plant : 'P2', storage_location : 'SL1', quantity : '30', entry_UOM : 'EUOM1', material_movement_type : 'GIS', item_text : 'IT1', purchase_order : '', purchase_order_item : '', sales_order : 'SO2', sales_order_item : 'I1', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_document : 'MD2', fiscal_year : 'FY2', item : 'I2', material : 'M1', plant : 'P2', storage_location : 'SL2', quantity : '40', entry_UOM : 'EUOM2', material_movement_type : 'GIS', item_text : 'IT2', purchase_order : '', purchase_order_item : '', sales_order : 'SO2', sales_order_item : 'I2', material_document_reverse : '', fiscal_year_reverse : '', item_reverse : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MDI_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MSL_select_D(it_MDI_input_material_document_item)
    {
        var ot_MSL_material_storage_location = structuredClone(tt_MSL_material_storage_location);
        
        ot_MSL_material_storage_location = 
        [
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB1', unrestricted_stock : '100', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB2', unrestricted_stock : '200', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB3', unrestricted_stock : '300', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M1', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB4', unrestricted_stock : '400', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL1', storage_bin : 'SB5', unrestricted_stock : '500', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P1', storage_location : 'SL2', storage_bin : 'SB6', unrestricted_stock : '600', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL1', storage_bin : 'SB7', unrestricted_stock : '700', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material : 'M2', plant : 'P2', storage_location : 'SL2', storage_bin : 'SB8', unrestricted_stock : '800', restricted_stock : '', reserved_stock : '', blocked_stock : '', quality_in_stock : '', system_field_message_type : '', system_field_message_description : '' }
        ];

        return ot_MSL_material_storage_location;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MMT_select_D()
    {
        var ot_MMT_material_movement_type = structuredClone(tt_MMT_material_movement_type);

        ot_MMT_material_movement_type = 
        [
            { tenant : 'TEST', material_movement_type : 'GI', material_movement_type_description : 'Goods Issue', material_movement_type_reverse : 'GIR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GR', material_movement_type_description : 'Goods Receipt', material_movement_type_reverse : 'GRR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GRP', material_movement_type_description : 'Goods Receipt Purchase', material_movement_type_reverse : 'GRPR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GIS', material_movement_type_description : 'Goods Issue Sales', material_movement_type_reverse : 'GISR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGI', material_movement_type_description : 'Transfer Goods Issue', material_movement_type_reverse : 'TGIR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGR', material_movement_type_description : 'Transfer Goods Receipt', material_movement_type_reverse : 'TGRR', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GIR', material_movement_type_description : 'Goods Issue Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },            
            { tenant : 'TEST', material_movement_type : 'GRR', material_movement_type_description : 'Goods Receipt Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GRPR', material_movement_type_description : 'Goods Receipt Purchase Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'GISR', material_movement_type_description : 'Goods Issue Sales Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGIR', material_movement_type_description : 'Transfer Goods Issue Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' },
            { tenant : 'TEST', material_movement_type : 'TGRR', material_movement_type_description : 'Transfer Goods Receipt Reverse', material_movement_type_reverse : '', system_field_message_type : '', system_field_message_description : '' }            
        ];

        return ot_MMT_material_movement_type;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    POI_select_D()
    {    
        var ot_POI_purchase_order_item = structuredClone(tt_POI_purchase_order_item);

        ot_POI_purchase_order_item =
        [
            {tenant : 'TEST', purchase_order : 'PO1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', purchase_order_quantity : '1000', purchase_UOM : 'EA', goods_receipt_quantity : '100'},
            {tenant : 'TEST', purchase_order : 'PO1', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', purchase_order_quantity : '2000', purchase_UOM : 'EA', goods_receipt_quantity : '200'},
            {tenant : 'TEST', purchase_order : 'PO2', item : 'I1', material : 'M1', plant : 'P2', storage_location : 'SL1', purchase_order_quantity : '3000', purchase_UOM : 'EA', goods_receipt_quantity : '300'},
            {tenant : 'TEST', purchase_order : 'PO2', item : 'I2', material : 'M1', plant : 'P2', storage_location : 'SL2', purchase_order_quantity : '4000', purchase_UOM : 'EA', goods_receipt_quantity : '400'}        
        ];

        return ot_POI_purchase_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    SOI_select_D()
    {    
        var ot_SOI_sales_order_item = structuredClone(tt_SOI_sales_order_item);

        ot_SOI_sales_order_item =
        [
            {tenant : 'TEST', sales_order : 'SO1', item : 'I1', material : 'M1', plant : 'P1', storage_location : 'SL1', sales_order_quantity : '1000', sales_UOM : 'EA', goods_issue_quantity : '100'},
            {tenant : 'TEST', sales_order : 'SO1', item : 'I2', material : 'M1', plant : 'P1', storage_location : 'SL2', sales_order_quantity : '2000', sales_UOM : 'EA', goods_issue_quantity : '200'},
            {tenant : 'TEST', sales_order : 'SO2', item : 'I1', material : 'M1', plant : 'P2', storage_location : 'SL1', sales_order_quantity : '3000', sales_UOM : 'EA', goods_issue_quantity : '300'},
            {tenant : 'TEST', sales_order : 'SO2', item : 'I2', material : 'M1', plant : 'P2', storage_location : 'SL2', sales_order_quantity : '4000', sales_UOM : 'EA', goods_issue_quantity : '400'}
        ];

        return ot_SOI_sales_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_copy_input_D(it_MDH_input_material_document_header, it_MDH_material_document_header)
    {
        var ot_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDH_input_material_document_header.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDH_material_document_header.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDH_input_material_document_header[lv_input_counter].tenant == it_MDH_material_document_header[lv_database_counter].tenant &&
                    it_MDH_input_material_document_header[lv_input_counter].material_document_reverse == it_MDH_material_document_header[lv_database_counter].material_document &&
                    it_MDH_input_material_document_header[lv_input_counter].fiscal_year_reverse == it_MDH_material_document_header[lv_database_counter].fiscal_year )
                {
                    ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_material_document_header[lv_database_counter]);

                    ot_MDH_output_material_document_header[lv_output_counter].material_document = it_MDH_input_material_document_header[lv_input_counter].material_document;                    // ****
                    ot_MDH_output_material_document_header[lv_output_counter].fiscal_year = it_MDH_input_material_document_header[lv_input_counter].fiscal_year;                                // ****
                    ot_MDH_output_material_document_header[lv_output_counter].material_document_reverse = it_MDH_input_material_document_header[lv_input_counter].material_document_reverse;    // ****
                    ot_MDH_output_material_document_header[lv_output_counter].fiscal_year_reverse = it_MDH_input_material_document_header[lv_input_counter].fiscal_year_reverse;                // ****
                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                    break;
                }
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDH_output_material_document_header[lv_output_counter] = structuredClone(it_MDH_input_material_document_header[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }            
        }

        return ot_MDH_output_material_document_header;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_tenant_D(ct_MDH_output_material_document_header)
    {
        if (ct_MDH_output_material_document_header.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '') 
            {
                if (ct_MDH_output_material_document_header.tenant == '')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_material_document_header_D(it_MDH_material_document_header, it_MDH_output_material_document_header, ct_MDH_output_material_document_header, iv_counter)
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
                        break;
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
                        break;
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

            if (ct_MDH_output_material_document_header.system_field_message_type == '')
            {
                if (ct_MDH_output_material_document_header.material_document_reverse == '')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Material Document Reverse does not have data';
                }
                else
                {    
                    if (ct_MDH_output_material_document_header.system_field_message_type == '')
                    {
                        lv_record_exist = '';
                        for (lv_counter = 0; lv_counter < it_MDH_material_document_header.length; lv_counter = lv_counter + 1)
                        {
                            if (it_MDH_material_document_header[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                                it_MDH_material_document_header[lv_counter].material_document == ct_MDH_output_material_document_header.material_document_reverse &&
                                it_MDH_material_document_header[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year_reverse)
                            {
                                lv_record_exist = 'X';
                                break;
                            }
                        }

                        if (lv_record_exist == 'X')
                        {

                        }
                        else
                        {
                            ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                            ct_MDH_output_material_document_header.system_field_message_description = 'Material Document Header Reverse does not exist';
                        }
                    }
                }
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_input_D(it_MDI_input_material_document_item, it_MDI_material_document_item)
    {
        var ot_MDI_output_material_document_item = structuredClone(tt_MDI_input_material_document_item);

        var lv_database_counter = 0,
            lv_input_counter = 0,
            lv_output_counter = 0,
            lv_record_exist = '';

        for (lv_input_counter = 0; lv_input_counter < it_MDI_input_material_document_item.length; lv_input_counter = lv_input_counter + 1)
        {
            lv_record_exist = '';
            for (lv_database_counter = 0; lv_database_counter < it_MDI_material_document_item.length; lv_database_counter = lv_database_counter + 1)
            {
                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document_reverse == it_MDI_material_document_item[lv_database_counter].material_document &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year_reverse == it_MDI_material_document_item[lv_database_counter].fiscal_year &&
                    it_MDI_input_material_document_item[lv_input_counter].item_reverse == '*')
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);

                    ot_MDI_output_material_document_item[lv_output_counter].material_document = it_MDI_input_material_document_item[lv_input_counter].material_document;
                    ot_MDI_output_material_document_item[lv_output_counter].fiscal_year = it_MDI_input_material_document_item[lv_input_counter].fiscal_year;
                    ot_MDI_output_material_document_item[lv_output_counter].item = it_MDI_material_document_item[lv_output_counter].item;                                             // ****
                    ot_MDI_output_material_document_item[lv_output_counter].material_document_reverse = it_MDI_input_material_document_item[lv_input_counter].material_document_reverse;
                    ot_MDI_output_material_document_item[lv_output_counter].fiscal_year_reverse = it_MDI_input_material_document_item[lv_input_counter].fiscal_year_reverse; 
                    ot_MDI_output_material_document_item[lv_output_counter].item_reverse = it_MDI_material_document_item[lv_output_counter].item;                                    // ****

                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }

                if (it_MDI_input_material_document_item[lv_input_counter].tenant == it_MDI_material_document_item[lv_database_counter].tenant &&
                    it_MDI_input_material_document_item[lv_input_counter].material_document_reverse == it_MDI_material_document_item[lv_database_counter].material_document &&
                    it_MDI_input_material_document_item[lv_input_counter].fiscal_year_reverse == it_MDI_material_document_item[lv_database_counter].fiscal_year &&
                    it_MDI_input_material_document_item[lv_input_counter].item_reverse == it_MDI_material_document_item[lv_database_counter].item)
                {
                    ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_material_document_item[lv_database_counter]);

                    ot_MDI_output_material_document_item[lv_output_counter].material_document = it_MDI_input_material_document_item[lv_input_counter].material_document;
                    ot_MDI_output_material_document_item[lv_output_counter].fiscal_year = it_MDI_input_material_document_item[lv_input_counter].fiscal_year;
                    ot_MDI_output_material_document_item[lv_output_counter].item = it_MDI_input_material_document_item[lv_input_counter].item;
                    ot_MDI_output_material_document_item[lv_output_counter].material_document_reverse = it_MDI_input_material_document_item[lv_input_counter].material_document_reverse;
                    ot_MDI_output_material_document_item[lv_output_counter].fiscal_year_reverse = it_MDI_input_material_document_item[lv_input_counter].fiscal_year_reverse; 
                    ot_MDI_output_material_document_item[lv_output_counter].item_reverse = it_MDI_input_material_document_item[lv_input_counter].item_reverse;

                    lv_output_counter = lv_output_counter + 1;
                    lv_record_exist = 'X';
                }                
            }

            if (lv_record_exist == 'X')
            {

            }
            else
            {
                ot_MDI_output_material_document_item[lv_output_counter] = structuredClone(it_MDI_input_material_document_item[lv_input_counter]);
                lv_output_counter = lv_output_counter + 1;
            }
        }

        return ot_MDI_output_material_document_item;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_tenant_D(ct_MDI_output_material_document_item)
    {
        if (ct_MDI_output_material_document_item.material_document == '')
        {
    
        }
        else  
        {
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.tenant == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Tenent does not have data';
                }
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_material_movement_type_D(it_MMT_material_movement_type, ct_MDI_output_material_document_item)
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
                for (lv_counter = 0; lv_counter < it_MMT_material_movement_type.length; lv_counter = lv_counter + 1)
                {
                    if (it_MMT_material_movement_type[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MMT_material_movement_type[lv_counter].material_movement_type == ct_MDI_output_material_document_item.material_movement_type)
                    {
                        ct_MDI_output_material_document_item.material_movement_type = it_MMT_material_movement_type[lv_counter].material_movement_type_reverse;
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    if (ct_MDI_output_material_document_item.material_movement_type_reverse == '')
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Material Movement Type does not have Material Movement Type Reverse';
                    }
                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Material Movement Type does not exist';
                }                
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_material_document_item_D(it_MDI_material_document_item, it_MDI_output_material_document_item, ct_MDI_output_material_document_item, iv_counter)
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
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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
                        it_MDI_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item)
                    {
                        lv_record_exist = 'X';
                        break;
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


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_document_reverse == '')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Material Document Item Reverse does not have data';            
                }
                else
                {
                    lv_record_exist = '';
                    for (lv_counter = 0; lv_counter < it_MDI_material_document_item.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MDI_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MDI_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document_reverse &&
                            it_MDI_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year_reverse &&
                            it_MDI_material_document_item[lv_counter].item == ct_MDI_output_material_document_item.item_reverse)
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Material Document Item Reverse does not exist';
                    }
                }
            }


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                lv_record_exist = '';
                for (lv_counter = 0; lv_counter < it_MDI_material_document_item.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDI_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDI_material_document_item[lv_counter].material_document_reverse == ct_MDI_output_material_document_item.material_document_reverse &&
                        it_MDI_material_document_item[lv_counter].fiscal_year_reverse == ct_MDI_output_material_document_item.fiscal_year_reverse &&
                        it_MDI_material_document_item[lv_counter].item_reverse == ct_MDI_output_material_document_item.item_reverse)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }

                if (lv_record_exist == 'X')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Material Document Item is already reversed';
                }
                else
                {

                }
            }  
            

            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGRR')
                { 
                    lv_record_exist = '';       
                    for (lv_counter = 0 ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                            it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                            it_MDI_output_material_document_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            it_MDI_output_material_document_item[lv_counter].quantity == ct_MDI_output_material_document_item.quantity &&
                            it_MDI_output_material_document_item[lv_counter].material_movement_type == 'TGIR')
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Transfer Goods Issue Reverse record does not exist';
                    }
                }
            }


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            {
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGIR') 
                {
                    lv_record_exist = '';       
                    for (lv_counter = 0 ; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                    {
                        if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            it_MDI_output_material_document_item[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                            it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                            it_MDI_output_material_document_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            it_MDI_output_material_document_item[lv_counter].quantity == ct_MDI_output_material_document_item.quantity &&
                            it_MDI_output_material_document_item[lv_counter].material_movement_type == 'TGRR')
                        {
                            lv_record_exist = 'X';
                            break;
                        }
                    }

                    if (lv_record_exist == 'X')
                    {

                    }
                    else
                    {
                        ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                        ct_MDI_output_material_document_item.system_field_message_description = 'Transfer Goods Receipt Reverse record does not exist';
                    }
                }
            }        
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_check_parent_D(ct_MDI_output_material_document_item, it_MDH_output_material_document_header)
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
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) does not exist';
                }
            }


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                lv_record_exist = '';       
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document == ct_MDI_output_material_document_item.material_document &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year == ct_MDI_output_material_document_item.fiscal_year &&
                        it_MDH_output_material_document_header[lv_counter].system_field_message_type == 'ERROR')
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header) has error';
                }
                else
                {

                }
            }


            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                lv_record_exist = '';       
                for (lv_counter = 0 ; lv_counter < it_MDH_output_material_document_header.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDH_output_material_document_header[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                        it_MDH_output_material_document_header[lv_counter].material_document_reverse == ct_MDI_output_material_document_item.material_document_reverse &&
                        it_MDH_output_material_document_header[lv_counter].fiscal_year_reverse == ct_MDI_output_material_document_item.fiscal_year_reverse)
                    {
                        lv_record_exist = 'X';
                        break;
                    }
                }
        
                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                    ct_MDI_output_material_document_item.system_field_message_description = 'Parent (Material Document Header Reverse) does not exist';
                }
            }

        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//    
    MDI_copy_output_material_storage_location_D(it_MSL_material_storage_location)
    {
        var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

        ot_MSL_output_material_storage_location = structuredClone(it_MSL_material_storage_location);
        return ot_MSL_output_material_storage_location;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------// 
    MDI_copy_input_purchase_order_item_D(it_POI_purchase_order_item)
    {
        var ot_output_POI_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item);

        ot_output_POI_purchase_order_item = structuredClone(it_POI_purchase_order_item);
        return ot_output_POI_purchase_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------// 
    MDI_copy_input_sales_order_item_D(it_SOI_sales_order_item)
    {
        var ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        ot_SOI_output_sales_order_item = structuredClone(it_SOI_sales_order_item);
        return ot_SOI_output_sales_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_material_storage_location_D(it_MSL_output_material_storage_location)
    {
        var ot_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_output_material_storage_location);

        ot_MSL_output_material_storage_location_copy = structuredClone(it_MSL_output_material_storage_location);
        return ot_MSL_output_material_storage_location_copy;
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_purchase_order_item_D(it_POI_output_purchase_order_item)
    {
        var ot_POI_output_purchase_order_item_copy = structuredClone(tt_POI_output_purchase_order_item);

        ot_POI_output_purchase_order_item_copy = structuredClone(it_POI_output_purchase_order_item);
        return ot_POI_output_purchase_order_item_copy;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_copy_output_sales_order_item_D(it_SOI_output_sales_order_item)
    {
        var ot_SOI_output_sales_order_item_copy = structuredClone(tt_SOI_output_sales_order_item);

        ot_SOI_output_sales_order_item_copy = structuredClone(it_SOI_output_sales_order_item);
        return ot_SOI_output_sales_order_item_copy;
    }




    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_receipt_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                break;                           
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_receipt_purchase_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRPR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                break;                           
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_issue_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GIR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                            
                        }
                    }
                }            
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_goods_issue_sales_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GISR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                            
                        }
                    }
                }            
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_transfer_goods_receipt_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGRR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            if (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock >= +ct_MDI_output_material_document_item.quantity)
                            {
                                ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                                ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                                ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                                ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                                ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                                ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) - (+ct_MDI_output_material_document_item.quantity);
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                                ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                                break;                            
                            }
                            else
                            {
                                ct_MDI_output_material_document_item.system_field_message_type = 'ERROR';
                                ct_MDI_output_material_document_item.system_field_message_description = 'Insufficient Stock';                        
                            }
                        }
                    }
                }            
            }
        }
    }


    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_stock_transfer_goods_issue_D(ct_MSL_output_material_storage_location, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'TGIR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_MSL_output_material_storage_location.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_MSL_output_material_storage_location[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_MSL_output_material_storage_location[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_MSL_output_material_storage_location[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_MSL_output_material_storage_location[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.unrestricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock;
                            ct_MDI_output_material_document_item.restricted_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].restricted_stock;
                            ct_MDI_output_material_document_item.reserved_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].reserved_stock;
                            ct_MDI_output_material_document_item.blocked_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].blocked_stock;
                            ct_MDI_output_material_document_item.quality_in_stock_before_post = ct_MSL_output_material_storage_location[lv_counter].quality_in_stock;

                            ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock = (+ct_MSL_output_material_storage_location[lv_counter].unrestricted_stock) + (+ct_MDI_output_material_document_item.quantity);
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            ct_MSL_output_material_storage_location[lv_counter].last_fiscal_year = ct_MDI_output_material_document_item.fiscal_year;
                            ct_MSL_output_material_storage_location[lv_counter].last_material_document = ct_MDI_output_material_document_item.material_document;
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_purchase_goods_receipt_D(ct_POI_output_purchase_order_item, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;  

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GRPR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_POI_output_purchase_order_item.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_POI_output_purchase_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_POI_output_purchase_order_item[lv_counter].purchase_order == ct_MDI_output_material_document_item.purchase_order &&
                            ct_POI_output_purchase_order_item[lv_counter].item == ct_MDI_output_material_document_item.purchase_order_item &&
                            ct_POI_output_purchase_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_POI_output_purchase_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_POI_output_purchase_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.purchase_order_goods_receipt_quantity_before_post = ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity;
                            ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity = (+ct_POI_output_purchase_order_item[lv_counter].goods_receipt_quantity) - (+ct_MDI_output_material_document_item.quantity);
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_populate_sales_goods_issue_D(ct_SOI_output_sales_order_item, ct_MDI_output_material_document_item)
    {
        var lv_counter = 0;

        if (ct_MDI_output_material_document_item.material_document == '')
        {
        
        }
        else  
        { 
            if (ct_MDI_output_material_document_item.system_field_message_type == '')
            { 
                if (ct_MDI_output_material_document_item.material_movement_type == 'GISR')
                {
                    for (lv_counter = 0 ; lv_counter < ct_SOI_output_sales_order_item.length; lv_counter = lv_counter + 1)
                    {
                        if (ct_SOI_output_sales_order_item[lv_counter].tenant == ct_MDI_output_material_document_item.tenant &&
                            ct_SOI_output_sales_order_item[lv_counter].sales_order == ct_MDI_output_material_document_item.sales_order &&
                            ct_SOI_output_sales_order_item[lv_counter].item == ct_MDI_output_material_document_item.sales_order_item &&
                            ct_SOI_output_sales_order_item[lv_counter].material == ct_MDI_output_material_document_item.material &&
                            ct_SOI_output_sales_order_item[lv_counter].plant == ct_MDI_output_material_document_item.plant &&
                            ct_SOI_output_sales_order_item[lv_counter].storage_location == ct_MDI_output_material_document_item.storage_location)
                        {
                            ct_MDI_output_material_document_item.sales_order_goods_issue_quantity_before_post = ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity;
                            ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity = (+ct_SOI_output_sales_order_item[lv_counter].goods_issue_quantity) - (+ct_MDI_output_material_document_item.quantity);
                            break;                            
                        }
                    }
                }            
            }
        }
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_ouput_material_storage_location_D(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_MSL_output_material_storage_location, it_MSL_output_material_storage_location_copy)
    {
        var ot_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_MSL_output_material_storage_location = structuredClone(it_MSL_output_material_storage_location_copy);
        }
        else
        {
            ot_MSL_output_material_storage_location = structuredClone(it_MSL_output_material_storage_location);
        }

        return ot_MSL_output_material_storage_location;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_output_purchase_order_item_D(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_POI_output_purchase_order_item, it_POI_output_purchase_order_item_copy)
    {
        var ot_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_POI_output_purchase_order_item = structuredClone(it_POI_output_purchase_order_item_copy);
        }
        else
        {
            ot_POI_output_purchase_order_item = structuredClone(it_POI_output_purchase_order_item);
        }

        return ot_POI_output_purchase_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDI_revert_back_output_sales_order_item_D(it_MDH_output_material_document_header, it_MDI_output_material_document_item, it_SOI_output_sales_order_item, it_SOI_output_sales_order_item_copy)
    {
        var ot_SOI_output_sales_order_item = structuredClone(tt_SOI_output_sales_order_item);

        var lv_counter = 0,
        lv_record_exist = '';

        lv_record_exist = '';
        for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
        {
            if (it_MDI_output_material_document_item[lv_counter].tenant == it_MDH_output_material_document_header.tenant &&
                it_MDI_output_material_document_item[lv_counter].material_document == it_MDH_output_material_document_header.material_document &&
                it_MDI_output_material_document_item[lv_counter].fiscal_year == it_MDH_output_material_document_header.fiscal_year &&
                it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
            {
                lv_record_exist = 'X';
                break;
            }
        }

        if (lv_record_exist == 'X')
        {
            ot_SOI_output_sales_order_item = structuredClone(it_SOI_output_sales_order_item_copy);
        }
        else
        {
            ot_SOI_output_sales_order_item = structuredClone(it_SOI_output_sales_order_item);
        }

        return ot_SOI_output_sales_order_item;
    }



    //--------------------------------------------------------------------------------------------------------------------//
    // Version 20240800
    //--------------------------------------------------------------------------------------------------------------------//
    MDH_check_child_D(it_MDI_output_material_document_item, ct_MDH_output_material_document_header)
    {
        var lv_counter = 0,
        lv_record_exist = '';

        if (ct_MDH_output_material_document_header.material_document == '')
        {
            
        }
        else
        {
            if (ct_MDH_output_material_document_header.system_field_message_type == '')
            {
                lv_record_exist = '';
                for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                        it_MDI_output_material_document_item[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year)
                    {
                        lv_record_exist = 'X';
                        break;
                    }            
                }

                if (lv_record_exist == 'X')
                {

                }
                else
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Child (Material Document Item) does not exist'; 
                }
            }

            if (ct_MDH_output_material_document_header.system_field_message_type == '')
            {
                lv_record_exist = '';
                for (lv_counter = 0; lv_counter < it_MDI_output_material_document_item.length; lv_counter = lv_counter + 1)
                {
                    if (it_MDI_output_material_document_item[lv_counter].tenant == ct_MDH_output_material_document_header.tenant &&
                        it_MDI_output_material_document_item[lv_counter].material_document == ct_MDH_output_material_document_header.material_document &&
                        it_MDI_output_material_document_item[lv_counter].fiscal_year == ct_MDH_output_material_document_header.fiscal_year &&
                        it_MDI_output_material_document_item[lv_counter].system_field_message_type == 'ERROR')
                    {
                        lv_record_exist = 'X';
                        break;
                    }            
                }

                if (lv_record_exist == 'X')
                {
                    ct_MDH_output_material_document_header.system_field_message_type = 'ERROR';
                    ct_MDH_output_material_document_header.system_field_message_description = 'Child (Material Document Item) has error'; 
                }
                else
                {

                }
            }
        } 
    }

}
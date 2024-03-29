var rasterian_sidebar = {
    "General": {
        'tools': [
            ['get_meta', 'tools_get_meta.html'],
            ['image_to_file', 'tools_image_to_file.html'],
            ['df_to_image', 'tools_df_to_image.html'],
            ['get_image_to_df', 'tools_image_to_df.html']
        ]
    },
    "sep_1": 'bar',
    "Classification": {
        'statistics_classification': [
            ['classify_by_base_and_step', 'classify_statistics_classify_by_base_and_step.html'],
            ['classify_by_list_of_values', 'classify_statistics_classify_by_list_of_values.html'],
            ['get_quantile_values', 'classify_statistics_get_quantile_values.html' ],
            ['classify_by_quantile', 'classify_statistics_classify_by_quantile.html']
        ],
        'supervised_classification': [
            ['clean_samples', 'classify_supervised_clean_samples.html'],
            ['map_classes_to_id', 'classify_supervised_map_classes_to_id.html'],
            ['select_class_to_predict', 'classify_supervised_select_class_to_predict.html'],
            ['prepare_df_sample', 'classify_supervised_prepare_df_sample.html'],
            ['split_sample', 'classify_supervised_split_sample.html'],
            ['train_model', 'classify_supervised_train_model.html'],
            ['search_model', 'classify_supervised_search_model.html'],
            ['predict_model', 'classify_supervised_predict_model.html']
        ]
        /* ,
        'unsupervised_classification': [
            []
        ] */
    },
    "Focal Analysis": {
        'global_convolution': [
            ['conv_media', 'focal_conv_media.html'],
            ['conv_matrix', 'focal_conv_matrix.html'],
            ['conv_image', 'focal_conv_image.html']
        ],
        'local_indexes': [
            ['calculate_index', 'focal_local_index_calculate.html'],
            ['index_avi', 'focal_local_index_avi.html'],
            ['index_baem', 'focal_local_index_baem.html'],
            ['index_bsi', 'focal_local_index_bsi.html'],
            ['index_bu', 'focal_local_index_bu.html'],
            ['index_evi', 'focal_local_index_evi.html'],
            ['index_gndvi', 'focal_local_index_gndvi.html'],
            ['index_msi', 'focal_local_index_msi.html'],
            ['index_nbri', 'focal_local_index_nbri.html'],
            ['index_ndbi', 'focal_local_index_ndbi.html'],
            ['index_ndgi', 'focal_local_index_ndgi.html'],
            ['index_ndmi', 'focal_local_index_ndmi.html'],
            ['index_ndsi', 'focal_local_index_ndsi.html'],
            ['index_ndvi', 'focal_local_index_ndvi.html'],
            ['index_ndwi', 'focal_local_index_ndwi.html'],
            ['index_ui', 'focal_local_index_ui.html']
        ],
        'local_math': [
            ['index_norm', 'focal_local_math_norm.html'],
            ['index_ratio', 'focal_local_math_ratio.html'],
            ['calc_index', 'focal_local_math_calc_index.html']
        ]
    },
    "Plot Img": {
        'plot': [
            ['plot_color', 'plot_plot_color.html'],
            ['plot_band_and_hist', 'plot_plot_band_and_hist.html']
        ]
    },
    "Transformation": {
        'scale_intensity_correction': [
            ['rescale_intensity',  'trans_scale_rescale_intensity.html'],
            ['equalize_hist',  'trans_scale_equalize_hist.html'],
            ['equalize_adapthist',  'trans_scale_equalize_adapthist.html'],
            ['scale_intensity',  'trans_scale_scale_intensity.html']
        ],
        'stack': [
            ['stack_bands',  'trans_stack_stack_bands.html'],
            ['create_stacked_raster',  'trans_stack_create_stacked_raster.html'],
            ['stack_new_bands_to_raster',  'trans_stack_stack_new_bands_to_raster.html']
        ]
    },
    "Vector": {
        'clip': [
            ['clip_raster_by_polygon', 'vector_clip_clip_raster_by_polygon.html'],
            ['create_raster_samples_tiles', 'vector_clip_create_raster_samples_tiles.html'],
            ['create_raster_samples_gdf', 'vector_clip_create_raster_samples_gdf.html']
        ],
        'transformation': [
            ['raster_to_polygon', 'vector_transformation_raster_to_polygon.html']
        ]
    },
    "sep_2": 'bar',
    "Examples": {
        'Examples': [
            ['Examples', 'Examples']
        ]
    }
}
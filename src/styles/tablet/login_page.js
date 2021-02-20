import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    /*      Containers      */
    cont_bkground:{
        position:'relative'
    },
    cont_inputs:{
        position:'absolute',
        alignSelf:"center",
        marginTop:260,
        left:375
    },
    cont_only_inputs:{
        position:'relative',
        marginBottom:60,
        top:10
    },
    cont_button:{
        position:'relative',
        marginTop:480,
        left:60
    },
    cont_alert:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:300,
        backgroundColor:'white',
        borderColor:'#383E71',
        borderWidth:2,
        borderRadius:8,
        marginTop:200,
        right:200
    },
    cont_fgt_psw: {
        position:'absolute',
        alignSelf:'center',
        top:840,
    },
    /*      Backgrounds     */
    bkground:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FAF5FF',
    },
    img_bkground:{
        width:'40%',
        height:'100%'
    },
    img_bkground_mask:{
        position:'absolute',
        height:'100%',
        width:'40%',
    },
    inp_bkground:{
        position:'absolute',
        height:500,
        width:500,
        borderRadius:8,
        backgroundColor:'#FAF5FF',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button_bkground:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:8,
        width:380,
        height:48,
    },
    button_exit_bkground:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        width:90,
        height:40,
    },
    /*      Text's      */
    inp_h1_txt:{
        top:10,
        fontFamily:'Montserrat-Regular',
        fontSize: 50,
        lineHeight:48,
        textAlign:'left',
        textAlignVertical:'top',
        color:'#383E71',
        right:40
        
    },
    inp_h2_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 18,
        lineHeight:30,
        textAlign:'left',
        color:'#989FDB',
        textAlignVertical:'top',
        top:15,
        right:68
    },
    inp_h3_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 16,
        lineHeight:48,
        alignItems:'center',
        color:'#383E71',
        marginBottom:-10,
        left:10
    },
    inp_h4_txt:{
        display:'none'
    },
    inp_h4_txt_active:{
        fontFamily:'Montserrat-Regular',
        fontSize: 14,
        lineHeight:48,
        alignItems:'center',
        color:'#FF377F',
        display:'flex',
        marginTop:-10,
        marginBottom:-20,
        left:10
    },
    alert_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 16,
        lineHeight:24,
        alignItems:'center',
        textAlign:'center',
        color:'#383E71',
        paddingBottom:25,
    },
    button_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 18,
        lineHeight:20,
        color:'#FFFFFF'
    },
    button_exit_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 16,
        lineHeight:24,
        color:'#FFFFFF'
    },
    fgt_psw_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 16,
        lineHeight:20,
        textAlign:'center',
        color:'#989FDB' ,
        left:165
        
    },
    /*      Inputs      */
    input_log:{
        width:380,
        height:48,
        padding:17,
        fontSize:12,
        color:'#383E71',
        borderStyle:'solid',
        borderColor:'#989FDB',
        borderWidth:1,
        borderRadius:8
    },
    input_log_active:{
        width:380,
        height:48,
        padding:17,
        fontSize:12,
        color:'#383E71',
        borderStyle:'solid',
        borderColor:'#FF377F',
        borderWidth:1,
        borderRadius:8
    },
})
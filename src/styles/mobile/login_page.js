import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    /*      Containers      */
    cont_bkground:{
        justifyContent:'center',
        alignContent:'center'
    },
    cont_inputs:{
        justifyContent:'center',
        alignItems:'center'
    },
    cont_only_inputs:{
        position:'relative',
        marginBottom:60,
        top:10
    },
    cont_button:{
        flex:1,
        top:155
    },
    cont_alert:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        height:150,
        width:250,
        backgroundColor:'white',
        borderColor:'#383E71',
        borderWidth:2,
        borderRadius:8
    },
    cont_fgt_psw: {
        top:245,    
    },
    /*      Backgrounds     */
    bkground:{
        width:'100%',
        height:'100%',
        backgroundColor:'#130525'
    },
    img_bkground:{
        resizeMode:'cover',
        width:'100%'
    },
    img_bkground_mask:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    inp_bkground:{
        position:'absolute',
        height:357,
        width:311,
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
        width:168,
        height:48,
    },
    button_exit_bkground:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        width:60,
        height:30,
    },
    /*      Text's      */
    inp_h1_txt:{
        top:10,
        fontFamily:'Montserrat-Regular',
        fontSize: 24,
        lineHeight:32,
        textAlign:'center',
        color:'#383E71'
    },
    inp_h2_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 12,
        lineHeight:20,
        textAlign:'center',
        color:'#989FDB',
        top:15
    },
    inp_h3_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 10,
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
        fontSize: 10,
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
        fontSize: 14,
        lineHeight:20,
        alignItems:'center',
        textAlign:'center',
        color:'#383E71',
        paddingBottom:20,
    },
    button_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 16,
        lineHeight:20,
        color:'#FFFFFF'
    },
    button_exit_txt:{
        fontFamily:'Montserrat-SemiBold',
        fontSize: 14,
        lineHeight:20,
        color:'#FFFFFF'
    },
    fgt_psw_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 14,
        lineHeight:20,
        textAlign:'center',
        color:'#FFFFFF'
        
    },
    fgt_psw_txt2:{
        fontFamily:'Montserrat-Regular',
        fontSize: 14,
        lineHeight:20,
        textAlign:'center',
        color:'#FFFFFF',
        marginTop:-18,
        right:20        
    },
    fgt_psw_under_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 14,
        lineHeight:20,
        textAlign:'center',
        color:'#FFFFFF',
        marginTop: -20,
        left:22,
        textDecorationLine:'underline'
    },
    /*      Inputs      */
    input_log:{
        width:256,
        height:48,
        padding:17,
        fontSize:10,
        color:'#383E71',
        borderStyle:'solid',
        borderColor:'#989FDB',
        borderWidth:1,
        borderRadius:8
    },
    input_log_active:{
        width:256,
        height:48,
        padding:17,
        fontSize:10,
        color:'#383E71',
        borderStyle:'solid',
        borderColor:'#FF377F',
        borderWidth:1,
        borderRadius:8
    },
})
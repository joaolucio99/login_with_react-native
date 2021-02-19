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
    /*      Text's      */
    inp_h1_txt:{
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
        color:'#989FDB'
    },
    inp_h3_txt:{
        fontFamily:'Montserrat-Regular',
        fontSize: 10,
        lineHeight:48,
        alignItems:'center',
        color:'#383E71',
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
        display:'flex'
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
    }
})
import { View,Text } from "../../../components/Themed";
import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { useForm,Controller } from "react-hook-form";

import Colors from "../../../constants/Colors";
import { formatMoney } from "../../../utils/formater";
import { useRef } from "react";

export default function SortieArgent(){
    const colorScheme= useColorScheme();
    const inputRef = useRef<TextInput>(null)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          loyer: '',
          telecommunication: '',
          electricite:'',
          eau:'',
          alimentation:'',
          sor_title1:'',
          sor_content1:'',
          sor_title2:'',
          sor_content2:'',
          sor_title3:'',
          sor_content3:''
        }
      });
    return(
        <>
            <View style={{
          ...styles.container,
          backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,
        }}>
                <Text style={styles.title}>
                        Renseignez vos sorties par catégories
                </Text>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:"#333",marginBottom:10}} >Loyer * {errors.loyer && <Text style={{fontSize:12,color:'red'}}>{errors.loyer.message}</Text>}</Text>

                    <View style={{flexDirection:'row',borderRadius:20,borderWidth:1,borderColor:"green"}}>
                    <Controller
                        control={control}
                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            underlineColorAndroid='transparent'
                            ref={inputRef}
                            autoFocus
                            autoCorrect={false}
                            maxLength={30}
                            keyboardType={'numeric'}
                            style={{...styles.input}}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(formatMoney(value))}
                            value={value}
                        />
                        )}
                        name="loyer"
                    />
                    {/* {errors.salaire && <Text>Obligatoire.</Text>} */}

                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10,width:"20%"}}>
                            <Text style={{color:'green',fontSize:20,fontWeight:"600"}}>
                                F CFA
                            </Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:"#333",marginBottom:10}} >Télecommunication * {errors.telecommunication && <Text style={{fontSize:12,color:'red'}}>{errors.telecommunication.message}</Text>}</Text>

                    <View style={{flexDirection:'row',borderRadius:20,borderWidth:1,borderColor:"green"}}>
                    <Controller
                        control={control}
                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            underlineColorAndroid='transparent'
                            ref={inputRef}
                            autoCorrect={false}
                            maxLength={30}
                            keyboardType={'numeric'}
                            style={{...styles.input}}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(formatMoney(value))}
                            value={value}
                        />
                        )}
                        name="telecommunication"
                    />
                    {/* {errors.primes && <Text>Obligatoire.</Text>} */}

                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"20%"}}>
                            <Text style={{color:'green',fontSize:20,fontWeight:"600"}}>
                                F CFA
                            </Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:"#333",marginBottom:10}} >Electricité * {errors.electricite && <Text style={{fontSize:12,color:'red'}}>{errors.electricite.message}</Text>}</Text>

                    <View style={{flexDirection:'row',borderRadius:20,borderWidth:1,borderColor:"green"}}>
                    <Controller
                        control={control}
                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            underlineColorAndroid='transparent'
                            ref={inputRef}
                            autoCorrect={false}
                            maxLength={30}
                            keyboardType={'numeric'}
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(formatMoney(value))}
                            value={value}
                        />
                        )}
                        name="electricite"
                    />
                    {/* {errors.primes && <Text>Obligatoire.</Text>} */}

                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"20%"}}>
                            <Text style={{color:'green',fontSize:20,fontWeight:"600"}}>
                                F CFA
                            </Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:"#333",marginBottom:10}} >Eau * {errors.eau && <Text style={{fontSize:12,color:'red'}}>{errors.eau.message}</Text>}</Text>

                    <View style={{flexDirection:'row',borderRadius:20,borderWidth:1,borderColor:"green"}}>
                    <Controller
                        control={control}
                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            underlineColorAndroid='transparent'
                            ref={inputRef}
                            autoCorrect={false}
                            maxLength={30}
                            keyboardType={'numeric'}
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(formatMoney(value))}
                            value={value}
                        />
                        )}
                        name="eau"
                    />
                    {/* {errors.primes && <Text>Obligatoire.</Text>} */}

                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"20%"}}>
                            <Text style={{color:'green',fontSize:20,fontWeight:"600"}}>
                                F CFA
                            </Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15}}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:"#333",marginBottom:10}} >Alimentation * {errors.alimentation && <Text style={{fontSize:12,color:'red'}}>{errors.alimentation.message}</Text>}</Text>

                    <View style={{flexDirection:'row',borderRadius:20,borderWidth:1,borderColor:"green"}}>
                    <Controller
                        control={control}
                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            underlineColorAndroid='transparent'
                            ref={inputRef}
                            autoCorrect={false}
                            maxLength={30}
                            keyboardType={'numeric'}
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(formatMoney(value))}
                            value={value}
                        />
                        )}
                        name="alimentation"
                    />
                    {/* {errors.primes && <Text>Obligatoire.</Text>} */}

                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"20%"}}>
                            <Text style={{color:'green',fontSize:20,fontWeight:"600"}}>
                                F CFA
                            </Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,paddingRight:10,paddingLeft:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18,flexShrink:1}}>
                            Autre dépenses
                        </Text>
                        
                        <View style={{flexDirection:'row',gap:8,backgroundColor: Colors[colorScheme ?? "light"].backgroundHome}}>
                            <View style={{flexDirection:'column',marginRight:10, backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,width:'50%'}}>
                                <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'gray'}}>Description</Text>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_title1 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_title1.message}</Text>}
                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                        <Controller
                                            control={control}
                                            rules={{required: "Obligatoire"}}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                ref={inputRef}
                                                autoCorrect={false}
                                                keyboardType={'default'}
                                                style={{...styles.input2,width:'100%'}}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                            )}
                                            name="sor_title1"
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_title2 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_title2.message}</Text>}
                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                        <Controller
                                            control={control}
                                            rules={{required: "Obligatoire"}}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                ref={inputRef}
                                                autoCorrect={false}
                                                keyboardType={'default'}
                                                style={{...styles.input2,width:'100%'}}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                            )}
                                            name="sor_title2"
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_title3 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_title3.message}</Text>}
                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                        <Controller
                                            control={control}
                                            rules={{required: "Obligatoire"}}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                underlineColorAndroid='transparent'
                                                ref={inputRef}
                                                autoCorrect={false}
                                                keyboardType={'default'}
                                                style={{...styles.input2,width:'100%'}}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                            )}
                                            name="sor_title3"
                                        />
                                    </View>
                                    
                                </View>
                                
                            </View>
                            <View style={{flexDirection:'column',backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,width:'50%'}}>
                                <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'gray'}}>Valeur</Text>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_content1 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_content1.message}</Text>}

                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                    <Controller
                                        control={control}
                                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            ref={inputRef}
                                            autoCorrect={false}
                                            maxLength={30}
                                            keyboardType={'numeric'}
                                            style={{...styles.input2,width:'75%',}}
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(formatMoney(value))}
                                            value={value}
                                        />
                                        )}
                                        name="sor_content1"
                                    />
                                   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"25%"}}>
                                        <Text style={{color:'green',fontSize:15,fontWeight:"500"}}>
                                            F CFA
                                        </Text>
                                    </View>
                                    
                                    </View>
                                </View>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_content2 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_content2.message}</Text>}

                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                    <Controller
                                        control={control}
                                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            ref={inputRef}
                                            autoCorrect={false}
                                            maxLength={30}
                                            keyboardType={'numeric'}
                                            style={{...styles.input2,width:'75%',}}
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(formatMoney(value))}
                                            value={value}
                                        />
                                        )}
                                        name="sor_content2"
                                    />
                                   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"25%"}}>
                                        <Text style={{color:'green',fontSize:15,fontWeight:"500"}}>
                                            F CFA
                                        </Text>
                                    </View>
                                    
                                    </View>
                                </View>
                                <View style={{backgroundColor: Colors[colorScheme ?? "light"].backgroundHome,marginTop:15,marginBottom:15}}>
                                    {errors.sor_content3 && <Text style={{fontSize:12,color:'red'}}>{errors.sor_content3.message}</Text>}

                                    <View style={{flexDirection:'row', borderRadius:10,borderWidth:1,borderColor:"green"}}>
                                    <Controller
                                        control={control}
                                        rules={{required: "Obligatoire",pattern:{value:/^((\S){1,15})+/i,message:"Format incorrect"}}}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            ref={inputRef}
                                            autoCorrect={false}
                                            maxLength={30}
                                            keyboardType={'numeric'}
                                            style={{...styles.input2,width:'75%',}}
                                            onBlur={onBlur}
                                            
                                            onChangeText={(value) => onChange(formatMoney(value))}
                                            value={value}
                                        />
                                        )}
                                        name="sor_content3"
                                    />
                                   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:10, width:"25%"}}>
                                        <Text style={{color:'green',fontSize:15,fontWeight:"500"}}>
                                            F CFA
                                        </Text>
                                    </View>
                                    
                                    </View>
                                </View>
                            </View>
                        </View>
                   
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 25,
        paddingTop:25,
        flexShrink: 1,
    },
    input:{
        flexDirection:"row-reverse",
        backgroundColor:"white",
        textAlign:'right',
        borderRadius:10,
        height:60,
        width:'80%',
        padding:15,
        fontSize:20,
        fontWeight:"bold"
    },
    input2:{
        flexDirection:"row-reverse",
        borderRadius:10,
        height:60,
        padding:5,
        fontSize:20,
        fontWeight:"bold"
    },
    operation: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "gray",
        borderRadius: 5,
      },
    
  });
  
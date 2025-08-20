import React from "react";
import { Text, View } from 'react-native';

export default function maisOpcoes() {
    return (
        <View>
            {/*Título e subtítulo*/}
            <View>
                <Text style={{fontSize: 20}}>
                    Acesse
                </Text>
                <Text style={{ fontSize: 20}}>
                    com E-mail e senha
                </Text>
            </View>
            {/*Campos de input*/}

            {/*Botões*/}
            <View>
                <TouchableOpacity style={{backgroundColor: '#14c871', padding: 10}}>
                        <View>
                            <View>
                                <Image
                                    source={{ uri: 'assets\Google.png'}}
                                    style={{width: 100, height: 100 }}
                                />
                            </View>
                            <View>
                                <Text style={{color: 'white'}}>Como deseja acessar?</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: '#ffffff', padding: 10}}
                        onPress={() => }
                    >
                        <View>
                            <Text style={{color: 'black'}}>Outras opções</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>  
    )
}
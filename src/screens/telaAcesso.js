import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function telaAcesso() {
    return(
        <View style={{backgroundColor: #f6f6f6}}>
            <View>
                <Image
                    source={{uri: 'assets\casual_dog.png'}}
                    style={{width: 100, height: 100}}
                
                />
            </View>
            {/*Título e subtítulo*/}
            <View>
                <Text style={{fontSize: 20}}>
                    Ótimo dia!
                </Text>
                <Text style={{ fontSize: 20}}>
                    Como deseja acessar?
                </Text>
            </View>
            {/*Botões*/}
                <TouchableOpacity
                    style={{backgroundColor: '#14c871', padding: 10}}
                >
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
    )
};

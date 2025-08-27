import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function telaAcesso() {
    return(
        <View style={{backgroundColor: '#f6f6f6'}}>

            {/* Imagem*/}
    
                <Image
                    source={{uri: 'assets\casual_dog.png'}}
                    style={{width: 100, height: 100}}

                />
            
            {/*Título e subtítulo*/}
                <Text style={{fontSize: 20}}>
                    Ótimo dia!
                </Text>
                <Text style={{ fontSize: 20}}>
                    Como deseja acessar?
                </Text>

            {/*Botões*/}
                    <TouchableOpacity
                        style={ styles.buttonVerde }
                    >
                        <View>
                            
                                <Image
                                    source={{ uri: 'assets\Google.png'}}
                                    style={{width: 100, height: 100 }}
                                />
                            
                            
                                <Text style={{color: 'white'}}>Como deseja acessar?</Text>
                            
                        </View>
                    </TouchableOpacity>

                <TouchableOpacity
                    style={ buttonBranco }

                    onPress={() => navigation.navigate('Opções')}
                >
                        <Text style={{color: 'black'}}>Outras opções</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonBranco: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#14c871',

    },
    buttonVerde: {
        backgroundColor: '#14c871',
        padding: 10,
        borderRadius: 5,
    }
});
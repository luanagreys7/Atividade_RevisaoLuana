import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";


export default function TelaAcesso({navigation}) {
    return(
        <View style={{backgroundColor: '#f6f6f6'}}>

            {/* Imagem*/}
            <Image
                source={{uri: 'assets/casual_dog.png'}}
                style={{width: 100, height: 100}}
            />
            
            {/*Título e subtítulo*/}
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>
                Ótimo dia!
            </Text>
            <Text style={{ fontWeight: 'bold'}}>
                Como deseja acessar?
            </Text>

            {/*Botões*/}
                <TouchableOpacity style={ styles.buttonVerde }>
                    <View style = { styles.container}>        
                        <Image
                            source={{ uri: 'assets\Google.png'}}
                            style={{width: 100, height: 100 }}
                        />
                            <Text style={{color: 'white'}}>Como deseja acessar?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.buttonBranco }

                    onPress={() => navigation.navigate('Opcoes')}
                >
                        <Text style={{color: 'black'}}>Outras opções</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'row',
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
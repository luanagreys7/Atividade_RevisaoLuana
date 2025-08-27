import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function maisOpcoes() {
    const [isSelected, setSelection] = useState(false);
    const PasswordInput = ({ placeholder, value, onChangeText }) => {
        const [showPassword, setShowPassword] = useState(false);
       
        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
    }
    return (
        <View>
            {/*Título e subtítulo*/}
            
                <Text style={{fontSize: 20}}>
                    Acesse
                </Text>
                <Text style={{ fontSize: 20}}>
                    com E-mail e senha
                </Text>

            {/*Campos de input*/}
            <Text>E-mail</Text>
            <TextInput
                    style={styles.input}
                    placeholder={"Digite seu E-mail"}
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onChangeText}
                    backgroundColor='e3e7f3'
            />

            <Text>Senha</Text>
            <View style={styles.container}> 
                <TextInput
                    style={styles.input}
                    placeholder={"Digite sua senha"}
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onChangeText}
                    backgroundColor='e3e7f3'
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
                <Icon
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#888"
                        />
                </TouchableOpacity>
            </View>

            {/*Checkbox*/}
            <View>
                <CheckBox>
                    value={isSelected}
                </CheckBox>
                <Text>Esqueci minha senha</Text>
            </View>

            {/*Botões*/}
            <View>
                <TouchableOpacity style={ buttonVerde }> 
                    <Text style={{color: 'white'}}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.buttonBranco }>
                    <Text style={{color: 'black'}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>





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
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#b0b4d0'
    },
    iconButton: {
        padding: 5,
    }
});
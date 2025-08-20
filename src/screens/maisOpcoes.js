import React from "react";
import { Text, View } from 'react-native';

export default function maisOpcoes() {
    const [isSelected, setSelection] = useState(false);
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
            <View>

            </View>

            {/*Checkbox*/}
            <View>
                <View>
                    <CheckBox>
                        value={isSeleec}
                    </CheckBox>

                </View>
                <View>
                    <Text>Esqueci minha senha</Text>
                </View>
            </View>

            {/*Botões*/}
            <View>
                <TouchableOpacity style={ buttonVerde }>
                    <View>
                        <Text style={{color: 'white'}}>Acessar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                        style={ styles.buttonBranco }
                >
                    <View>
                        <Text style={{color: 'black'}}>Cadastrar</Text>
                    </View>
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
    }
});
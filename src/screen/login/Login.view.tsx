import { SafeAreaView } from "react-native";
import style from './Login.style';
import InputFields from "../../components/inputFields/InputFields";
import { useState } from "react";

function LoginView() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={style.container}>
      <InputFields
        title={'Digite seu email:'}
        value={email}
        placeholder={'Email'}
        onChangeValue={(value) => setEmail(value)}
      />

      <InputFields
        title={'Digite sua senha:'}
        value={password}
        styleProps={{container: style.inputContainer}}
        placeholder={'Senha'}
        onChangeValue={(value) => setPassword(value)}
      />
    </SafeAreaView>
  );
}

export default LoginView;

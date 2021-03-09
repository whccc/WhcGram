import React from 'react';
import { Text, View } from 'react-native';
import Style from './styles';

export const CPMessage: React.FC<{
  Message: string;
  idUserApp: any;
  idUserSendMessage: string;
}> = ({ Message, idUserApp, idUserSendMessage }) => (
  <View
    style={{
      ...Style.Container,
      justifyContent:
        idUserApp === idUserSendMessage ? 'flex-end' : 'flex-start',
    }}
  >
    <View style={Style.ContainerMessage}>
      <View style={Style.ContainerUser}>
        <Text>Wilson castro</Text>
      </View>
      <View>
        <Text style={{ color: '#fff' }}>{Message}</Text>
      </View>
    </View>
  </View>
);

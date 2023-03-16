import {FontAwesome, Feather, Ionicons, MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';



export default function TabLayout() {
  const colorScheme = useColorScheme();
  const showDrawer = ()=> {
  
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        
        options={{
          title: 'Maitriser vos finances',
          
          tabBarActiveTintColor:Colors[colorScheme ?? 'light'].tabBarActiveTintColor,
          headerStyle:{borderWidth:0},
          tabBarIcon: ({ color,focused }) => focused?<Ionicons name="ios-layers" size={24} color={color} />:<Ionicons name="ios-layers-outline" size={24} color={color} />,
          
          tabBarLabel:"Accueil",
          headerLeft: ()=> (
            <Pressable  onPress={showDrawer}>
              {({ pressed }) => (
                  <FontAwesome
                    name="bars"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 17, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
            </Pressable>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 17, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="tantie_annie"
        
        options={{
          tabBarLabel:'Tantie Annie',
          headerShown:false,
          tabBarActiveTintColor:Colors[colorScheme ?? 'light'].tabBarActiveTintColor,
          tabBarIcon: ({ color,focused }) =>focused?<Ionicons name="cart" size={24} color={color} />:<Ionicons name="cart-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="documents"
        
        options={{
          tabBarLabel:'Documents',
          headerShown:false,
          tabBarActiveTintColor:Colors[colorScheme ?? 'light'].tabBarActiveTintColor,
          tabBarIcon: ({ color,focused }) => focused?<Ionicons name="document-text" size={24} color={color}/>:<Ionicons name="document-text-outline" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel:'Profile',
          headerShown:false,
          tabBarActiveTintColor:Colors[colorScheme ?? 'light'].tabBarActiveTintColor,
          tabBarIcon: ({ color,focused }) => focused?<Ionicons name="ios-person" size={22} color={color} />: <Ionicons name="ios-person-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

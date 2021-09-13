import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10,
    },
    option: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});

const OrderBySelection = ({ setSortRule }) => {

    const [ isOpen, toggleOpen ] = useState(false);

    const updateSortRule = (value) => {
        setSortRule(value);
        toggleOpen(false);
    };

    const options = [
        {
            value: "Latest repositories",
        },
        {
            value: "Highest rated repository",
        },
        {
            value: "Lowest rated repository"
        }
    ];

    const content = isOpen 
        ?   <FlatList 
                data={ options }
                style={styles.list}
                renderItem={({item}) => (
                    <Pressable key={item.value} onPress={() => updateSortRule(item.value)}>
                        <Text key={`${item.value}-text`} style={styles.option}>
                            { item.value }
                        </Text>
                    </Pressable>
                )}
            />
        :   <Pressable onPress={() => toggleOpen(true)}>
                <Text style={styles.option}>
                    Sort by
                </Text>
            </Pressable>;
        

    return (
        <View>
            { content }
        </View>
    );
};

export default OrderBySelection;
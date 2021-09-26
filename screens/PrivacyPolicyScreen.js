import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../constants/colors';

function PrivacyPolicyScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>Privacy Policy</Text>
            </View>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.font}>Your skills of writing Paragraph will make you a perfect man.If you look at any printed prose book, you will see that each chapter is divided up into sections, the first line of each being indented slightly to the right. These sections are called Paragraph. Chapters, essays and other prose compositions are broken up into paragraphs, to make the reading of them easier.

                    For the beginning of a new paragraph marks a change of topic or a step in the development of an argument or of a story. In writing essays or other compositions, it is important to know how to divide them properly into paragraphs. For an essay not broken up, looks uninteresting and is not easy to read.

                    Definition

                    A paragraph is a number of sentences grouped together and relating to one topic. Or, a group of related sentences that develop a single point.

                    This definition shows that the paragraphs of compositions are not mere arbitrary divisions. The division of a chapter into paragraphs must be made according to the changes of ideas introduced.

                    There is, therefore, no rule as to the length of a paragraph. It may be short or long according to the necessity of the case. A paragraph may consist of a single sentence or of many sentences.

                    In this aspect, the paragraphs of a piece of prose differ from the stanzas of verses of a poem. The stanza of a poem are usually of the same length and pattern but paragraphs are long or short according to the amount of matter to be expressed under each head.

                    The Principle of Good Paragraph Structure:

                    A good paragraph should have three aspects.

                    1. Unity

                    2. Order

                    3. Variety

                    Now let us see what they are.Your skills of writing Paragraph will make you a perfect man.If you look at any printed prose book, you will see that each chapter is divided up into sections, the first line of each being indented slightly to the right. These sections are called Paragraph. Chapters, essays and other prose compositions are broken up into paragraphs, to make the reading of them easier.

                    For the beginning of a new paragraph marks a change of topic or a step in the development of an argument or of a story. In writing essays or other compositions, it is important to know how to divide them properly into paragraphs. For an essay not broken up, looks uninteresting and is not easy to read.

                    Definition

                    A paragraph is a number of sentences grouped together and relating to one topic. Or, a group of related sentences that develop a single point.

                    This definition shows that the paragraphs of compositions are not mere arbitrary divisions. The division of a chapter into paragraphs must be made according to the changes of ideas introduced.

                    There is, therefore, no rule as to the length of a paragraph. It may be short or long according to the necessity of the case. A paragraph may consist of a single sentence or of many sentences.

                    In this aspect, the paragraphs of a piece of prose differ from the stanzas of verses of a poem. The stanza of a poem are usually of the same length and pattern but paragraphs are long or short according to the amount of matter to be expressed under each head.

                    The Principle of Good Paragraph Structure:

                    A good paragraph should have three aspects.

                    1. Unity

                    2. Order

                    3. Variety

                    Now let us see what they are.Your skills of writing Paragraph will make you a perfect man.If you look at any printed prose book, you will see that each chapter is divided up into sections, the first line of each being indented slightly to the right. These sections are called Paragraph. Chapters, essays and other prose compositions are broken up into paragraphs, to make the reading of them easier.

                    For the beginning of a new paragraph marks a change of topic or a step in the development of an argument or of a story. In writing essays or other compositions, it is important to know how to divide them properly into paragraphs. For an essay not broken up, looks uninteresting and is not easy to read.

                    Definition

                    A paragraph is a number of sentences grouped together and relating to one topic. Or, a group of related sentences that develop a single point.

                    This definition shows that the paragraphs of compositions are not mere arbitrary divisions. The division of a chapter into paragraphs must be made according to the changes of ideas introduced.

                    There is, therefore, no rule as to the length of a paragraph. It may be short or long according to the necessity of the case. A paragraph may consist of a single sentence or of many sentences.

                    In this aspect, the paragraphs of a piece of prose differ from the stanzas of verses of a poem. The stanza of a poem are usually of the same length and pattern but paragraphs are long or short according to the amount of matter to be expressed under each head.

                    The Principle of Good Paragraph Structure:

                    A good paragraph should have three aspects.

                    1. Unity

                    2. Order

                    3. Variety

                    Now let us see what they are.
</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    textContainer: {
        marginTop: 52.91,
        marginHorizontal: 11.39
    },
    font: {
        color: Colors.text,
        fontSize: 12,
        fontFamily: 'gotham-light'
    },
})

export default PrivacyPolicyScreen;
import { ReactNode } from "react";
import { View, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import { styled } from "nativewind";


interface BModalProps {
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
    className?: string
}
const baseThemeContainerBg = "bg-slate-200 dark:bg-slate-800 p-4"


export const BView = styled(View, baseThemeContainerBg);
export const BCenterView = styled(View, `${baseThemeContainerBg} items-center justify-center`);
export const BBetweenView = styled(View, `${baseThemeContainerBg} items-center justify-between`);
export const BScrollView = styled(ScrollView, baseThemeContainerBg);
// export const BStyleModal = styled(Modal, baseThemeContainerBg);


export const BModal = ({ modalVisible, setModalVisible, children, className }: BModalProps) => {
    return (
        <Modal
            className="flex-1"
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View
                className={`${className && className} flex-1 justify-center items-center`}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                 >
                <BView className="mx-4">
                    {/* 
                    <Pressable
                        onPress={() => setModalVisible(false)}
                        style={{ position: 'absolute', right: 23, top: 17, zIndex: 100 }}
                    > */}
                    {/* <Icon name="close" size={responsiveFontSize(3)} color={Colors.text} /> */}
                    {/* </Pressable> */}
                    {children}
                </BView>
            </View>
        </Modal>)
}
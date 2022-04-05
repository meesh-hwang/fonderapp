import { View, Text, StyleSheet, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Google Fonts
import { useFonts } from 'expo-font';
import { Assistant_400Regular, Assistant_700Bold, Assistant_800ExtraBold, Assistant_600SemiBold } from '@expo-google-fonts/assistant';


const UserProfile = ({ navigation }) => {

    // Custom Google Fonts
    let [fontsLoaded] = useFonts({
        Assistant_400Regular,
        Assistant_700Bold,
        Assistant_600SemiBold,
        Assistant_800ExtraBold,
    });

    return (
        <View style={styles.container}>
            {/* Profile Photo and Name */}
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={require('../assets/img/fries.png')} />
                <Text style={styles.profileName}>Name from API</Text>
            </View>
            <Text style={styles.settingsText}>Account Settings</Text>
            <View style={styles.accountSettings}>
                {/* Account Settings */}
                {/* PERSONAL INFORMATION */}
                <TouchableOpacity style={styles.personalInfo}>
                    <Text style={styles.subheadingText}>Personal Information{"\n"}
                        <Text style={styles.description}>Change your account information</Text>
                    </Text> 
                    <Ionicons name='chevron-forward-outline'
                            size={20}
                            color='black'
                            style={styles.icon} />
                </TouchableOpacity>
                {/* CUISINE SELECTION */}
                <TouchableOpacity style={styles.personalInfo}>
                    <Text style={styles.subheadingText}>Cuisine Selection{"\n"}
                        <Text style={styles.description}>Choose your favourite cuisine types</Text>
                    </Text>
                    <Ionicons name='chevron-forward-outline'
                            size={20}
                            color='black'
                            style={styles.icon} />
                </TouchableOpacity>
                {/* HELP */}
                <TouchableOpacity style={styles.personalInfo}>
                    <Text style={styles.subheadingText}>Help{"\n"}
                        <Text style={styles.description}>Add or update a delivery address</Text>
                    </Text>    
                    <Ionicons name='chevron-forward-outline'
                            size={20}
                            color='black'
                            style={styles.icon} />
                </TouchableOpacity>
            </View>    
            {/* REFER AND EARN BOX */}
                <Text style={[styles.settingsText, {marginTop:35}]}>Refer & Earn</Text>
                <View style={styles.inviteBox}>
                    {/* Left column text */}
                    <View style={styles.inviteText}>
                        <Text style={{ fontSize: 16, fontFamily: "Assistant_700Bold", fontWeight: "700", marginBottom: 3, }}>Invite your friends
                        </Text>
                        <Text style={{ fontFamily: "Assistant_400Regular", fontSize: 12, fontWeight: "400", lineHeight: 16, marginBottom:5 }}>Get $10 Fonder credits and give $10 Fonder credits for every referral</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ fontSize: 12, fontFamily: "Assistant_800ExtraBold", color: 'white', }}>Invite</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, fontFamily: "Assistant_600SemiBold", color: '#E66255', lineHeight:30, marginTop:8}}>*Terms & Conditions Apply</Text>
                    </View>
                    {/* Right column image */}
                    <Image style={styles.referImage} source={require('../assets/img/profile-invite-ppl.png')} />
                </View>
            </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        backgroundColor: "#fffbf3",
        display:'flex',
        flexDirection:'column',
        maxHeight:'100%'
    },

    profile: {
        marginTop: 20,
        flex: 1,
        alignItems: "center",
    },

    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "rgba(236,137,128,.75)",
    },

    profileName: {
        marginVertical: 15,
        fontSize: 24,
        // fontWeight: 700,
        fontFamily: "Assistant_700Bold",
    },

    accountSettings: {
        flex:1,
        marginBottom:20
    },

    settingsText: {
        fontSize: 22,
        fontWeight: "700",
        fontFamily: "Assistant_700Bold",
        color: "#E66255",
    },

    personalInfo: {
        paddingTop: 20,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        width:'100%',
    },

    flexSubheading: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    subheadingText: {
        fontFamily: 'Assistant_700Bold',
        fontWeight: "700",
        fontSize: 18,
        display:'flex',
        flexDirection:'column',
        lineHeight:25
    },

    icon: {
        alignSelf:'center',
    },

    description: {
        color: "rgba(116,116,116,1)",
        fontFamily: 'Assistant_400Regular',
        fontWeight: "400",
        fontSize: 12,
        alignSelf:'flex-start',
        flex:1
    },

    inviteBox: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "rgba(255,229,180,1)",
        borderRadius: 15,
        padding: 20,
    },

    inviteText: {
        width: "75%",
        paddingRight: 20,
        flex: 1,
        flexDirection: "column",
    },

    referImage: {
        height: 123,
        width: 87,
    },

    btn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#ffcb69",
        borderRadius: 40,
        marginTop: 10,
        alignSelf: 'flex-start',
    }
})
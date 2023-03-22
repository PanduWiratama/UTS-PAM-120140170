import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function SecondScreen({navigation}){
    const DATA = [
        { name: 'Suku Melayu', key: '1', desc: 'Suku Melayu menjadi suku terbesar yang mendiami Pulau Sumatera. Hampir seluruh wilayah di pulau ini ditinggali oleh Suku Melayu. Diperkirakan jumlahnya mencapai 8.789.585 jiwa di seluruh Indonesia. Rata – rata, Suku Melayu merupakan orang asli dari Sumatera Selatan, Jambi, Kepulauan Riau, Riau, Bengkulu, Sumatera Utara, dan lainnya. Awal terbentuknya suku ini adalahnya munculnya Suku Anneuk Jamee di Aceh dan masyarakat Negeri Sembilan di Semenanjung Malaya. Budaya yang digunakan oleh suku ini rata – rata merupakan serapan dari budaya Arab, Bugis, dan India. Dimana diwujudkan dalam tari–tarian, diantaranya Tari Piring, Tari Pasambahan, dan Tari Senyum Minang Manis.'},
        { name: 'Suku Minangkabau', key: '2', desc: 'Suku Minangkabau atau lebih dikenal dengan Suku Minang, merupakan suku dari Pulau Sumatera yang sebagian besar mendiami Sumatera Barat. Di wilayah lain tersebar di daerah Bengkulu bagian utara, Riau, Aceh bagian barat daya, Jambi, hingga Negeri Sembilan Malaysia. Di Sumatera Barat sendiri, jumlah suku ini mencapai 4.281.439, sementara di seluruh Indonesia mencapai 6.462.713 orang. Pakaian adat Suku Minang disebut dengan nama Bundo Kanduang atau Limpapeh Rumah Nan Gadang untuk wanita. Sementara untuk laki – laki disebut dengan nama pakaian adat Penghulu. Rumah adat Suku Minang begitu terkenal, yaitu Rumah Gadang.'},
        { name: 'Suku Rejang Bengkulu', key: '3', desc: 'Suku Rejang merupakan suku terbesar yang mendiami Provinsi Bengkulu. Selain di Bengkulu, Suku Rejang juga mendiami Provinsi Sumatera Selatan. Sementara di Bengkulu, Suku Rejang merupakan penduduk asli dan mayoritas di 5 kabupaten di Bengkulu, yaitu Kepahiang, Rejang Lebong, Lebong, Bengkulu Utara, dan Bengkulu Tengah.'},
        { name: 'Suku Ogan', key: '4', desc:'Suku Ogan banyak berdomisili di Sumatera Selatan, tepatnya di Kabupaten Ogan Ilir, Ogan Lulu, dan Ogan Komering Ulu Timur. Bahasa yang digunakan oleh Suku Ogan adalah bahasa Ogan, yang mirip dengan bahasa Melayu Deli dan Melayu Malaysia. Oleh karena itulah, bahasa Ogan dimasukkan ke dalam kelompok rumpun bahasa Melayu. Suku Ogan memiliki tradisi yang masih dilakukan hingga saat ini, yaitu tradisi pernikahan yang disebut Pengadangan. Selain itu, Suku Ogan mayoritas memeluk agama Islam. Sementara beberapa lainnya beragama Kristen Katolik. Banyaknya pemeluk agama Islam menyebabkan adat istiada Suku Ogan dihiasi dengan budaya Islam dan Melayu.'},
        { name: 'Suku Palembang', key: '5', desc:'Seperti nama ibu kota Sumatera Selatan, Suku Palembang mendiami Kota Palembang dengan mayoritas berdomisili di Tepian Sungai Musi. Tidak hanya itu, di wilayah lain juga terdapat Suku Palembang yang merupakan keturunan dari suku asli. Diantaranya di Kabupaten Ogan Komering Ilir, Bengkulu, dan Jambi. Bahasa yang digunakan oleh Suku Palembang ini mirip dengan bahasa Melayu Jambi dengan Suku Melayu Bengkulu. Dimana, setiap kata berakhiran dengan huruf “o”. Agama yang dianut oleh Suku Palembang adalah Islam sebagai mayoritas agama, sementara sisanya beragama Buddha dan animisme. Meski begitu, mereka hidup secara berdampingan dalam kedamaian.'},
        { name: 'Suku Lampung', key: '6', desc:'Seperti namanya, Suku Lampung mendiami Provinsi Lampung. Selain itu, suku ini juga mendiami Bengkulu, Sumatera Selatan, bahkan hingga Banten. Suku ini juga dikenal sebagai Suku Ulun Lampung atau Suku Orang Lampung. Secara umum, suku di Lampung sendiri dibagi menjadi dua. Dimana ada Lampung Saibatin dan Lampun Pepadun. Inilah yang menyebabkan Lampung memiliki semboyan ‘Sai Bumi Ruwa Jurai’, yang memiliki makna “Satu Bumi Dua Jiwa”. Dan menjadi identitas leluhur masyarakat Lampung.'},
        { name: 'Suku Aceh', key: '7', desc:'Suku Aceh mendiami wilayah Pulau Sumatera bagian utara. Mereka merupakan penduduk asli di Nangroe Aceh Darussalam, dimana nenek moyang Suku Aceh berasal dari Arab, Melayu, dan India. Jumlah Suku Aceh di Provinsi Aceh mencapai 3.404.000 jiwa. Dimana, suku ini memiliki tarian khas yaitu tari Saman dan Seudati. Rumah adat Suku Aceh bernama Krong Bade, dan pakaian adatnya bernama Meukasah dengan celana Cekak Musang untuk laki–laki. Sementara untuk wanita bernama Baju Kurung Lengan Panjang dan celana Cekak Musang.'},
        { name: 'Suku Batak', key: '8', desc:'Suku Batak merupakan suku asli di Tapanuli dan Sumatera Utara. Jenis dari Suku Batak pun ada berbagai macam, diantaranya Batak Toba, Batak Simalungun, Batang PakPak, Batang Mandailing, Batak Angkola, Batak Karo, dan banyak lagi. Mayoritas suku ini memeluk agama Kristen. Warisan budaya yang tetap dilestarikan hingga sekarang diantaranya Hamoraan, Uhum dan Ugaro, Hagebeon, Pengayoman, Perlambangan Cicak, dan Marsisarian. Nilai–nilai luhur juga tertanam dalam bangunan rumah adat mereka yang disebut Rumah Bolon.'},
        { name: 'Suku Nias', key: '9', desc:'Suku Nias banyak berdomisili di Sumatera Utara, dengan penduduk asli yang dikenal dengan nama Ono. Pulau yang dihuni oleh Suku Nias disebut oleh mereka sebagai Tano Niha. Suku Nias memiliki rumah adat bernama Omo Hada. Sementara pakaian tradisionalnya disebut dengan Baru Oholu untuk laki–laki, dan Oroba Si’oli untuk wanita. Dengan tradisi budaya yang khas adalah tradisi melompati batu. Sebagai simbol budaya dan ritual Ono.'},
        { name: 'Suku Bangka Belitung', key: '10', desc:'Suku Bangka mendiami wilayah Pulau Bangka, dan biasanya dikenal juga dengan Suku Melayu Bangka. Sub Suku Bangka adalah Suku Sekak Bangka, dimana suku ini mendiami pesisir sepanjang Pulau Bangka. Karena berada di pesisir pantai, sebagian besar mata pencaharian penduduk adalah sebagai nelayan. Dengan mengandalkan hasil tangkapan di pesisir pantai.'},
        { name: 'Suku Mentawai', key: '11', desc: 'Suku Mentawai mendiami Kepulauan Mentawai, yang tergolong dalam Proto Melayu. Suku Mentawai masih kental akan budaya tradisionalnya, dan kehidupannya yang masih tradisional. Gaya hidup pemburu, pengumpul semi nomaden, membuat Suku Mentawai tinggal di pesisir pantai dan hutan hujan. Selain itu, masyarakat Suku Mentawai masih mempercayai animisme, yang mana segala sesuatu memiliki roh dan jiwa. Spiritualitas Suku Mentawai juga dicirikan dalam bentuk tato di tubuh, serta mengasah gigi yang menurut mereka meningkatkan kecantikan.'},
        { name: 'Suku Talang Mamak', key: '12', desc: 'Suku Talang Mamak juga disebut sebagai Orang Talang Mamak. Yang mana suku ini hidup secara tradisional di sehiliran Sungai Indragiri, Riau. Uniknya, kelompok masyarakat ini terdapat sub kelompok yang disebut suku, kemudian dibagi dalam tobo, dan hidup sebagai suku terkecil. Suku ini termasuk ke dalam Proto Melayu, yang mana merupakan suku pertama datang di Indragiri Hulu. Dalam kesehariannya, Orang Talang Mamak menggunakan bahasa Talang Mamak. Meski begitu, jika berkomunikasi dengan orang dari luar suku, mereka akan menggunakan Bahasa Melayu.'},
        { name: 'Suku Kerinci', key: '13', desc: 'Suku Kerinci merupakan suku asli yang berdomisili di Kabupaten Kerinci. Kerinci sendiri berasal dari bahasa Tamil, yang berasal dari nama bunga kurinji. Berdasarkan bahasa dan budaya yang digunakan Suku Kerinci, suku ini termasuk dalam Melayu Proto. Bahasa yang digunakan sehari – hari adalah bahasa Kerinci dengan dialek yang beraneka macam.'}
    ];

    return(
        <ImageBackground
            style={styles.background} 
            source={require("../assets/Background2.jpg")}>
            <View style={{marginTop:60, height:750, width:Dimensions.get("screen").width}}>
                <FlashList
                data={DATA}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Third' ,item)}>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    )}
                estimatedItemSize={200}
            />
            </View>
            
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <AntDesign name='leftcircle' size={50} color="white"/>
                </TouchableOpacity>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("screen").width,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item: {
        flex:1,
        marginTop:20,
        width:350,
        padding:20,
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        fontSize: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center"
    },
    button: {
        margin:20,
        top:0,
        right:150,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
  });
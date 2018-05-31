import React from 'react'
import { Text, StyleSheet, View, Dimensions, Linking} from 'react-native'
import { StackNavigator} from 'react-navigation'
import YouTube from 'react-native-youtube'
import HyperlinkedText from 'react-native-hyperlinked-text'


const wid = Dimensions.get('window').width

export default class YouTubeVideo extends React.Component{
	static navigactionOptions = {
		headerTitle: 'YouTube',
		headerStyle: {
			backgroundColor: '#fff'
		},
		headerTitleStyle: {
			color: '#000'
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={{ width: wid, height: 60, color: '#000', padding: 5, fontSize: 18 }}>
					{this.props.navigation.state.params.title}
				</Text>
				<YouTube
					videoId={this.props.navigation.state.params.youtubeId}
					play={true}
					fullscreen={false}
					loop={true}
					apiKey={'AIzaSyCqmf7AceiC6zADq2SbuzyTZ-6qg44NFzI'}
					onReady={e => this.setState({isReady: true})}
					onChangeState={e => this.setState({status: e.state})}
					onChangeQuality={e => this.setState({quality: e.quality})}
					onError={e => this.setState({error: e.error})}
					style={{alignSelf: 'stretch', height: 300}}
				/>
				<Text style={{ width: wid, height: 33, color: '#f00', padding: 5, fontSize: 18 }}>
					Description
				</Text>
				<HyperlinkedText style={styles.entry}>
					{this.props.navigation.state.params.description}
				</HyperlinkedText>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#fff',
		padding: 1 
	},
	entry: {
		color: '#333333',
		marginTop: 5,
		alignItems: 'flex-start',
		textAlign: 'left', 
		padding: 5,
		width: wid
	}
})
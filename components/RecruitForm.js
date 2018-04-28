import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import style from '../styles/main.js'
// Custom JS Functions
import { normalizeText } from '../js/tools.js'
// Components
import RankImage from './RankImage'
import RoleImage from './RoleImage'

export default class RecruitForm extends Component {
  constructor(props) {
    super(props);

    // this.onChangeText = this.onChangeText.bind(this);

    // this.roleRef = this.updateRef.bind(this, 'role');
    // this.monthRef = this.updateRef.bind(this, 'month');
    // this.dayRef = this.updateRef.bind(this, 'day');
    // this.yearRef = this.updateRef.bind(this, 'year');
    // this.teamRef = this.updateRef.bind(this, 'team');

    this.state = {
      team: 'Legit Guild Gaming(LGG)',
      role: 'Top',
      month: 'Jan',
      day: '1',
      year: '2018',
    };
  }

  // onChangeText(text) {
  //   ['name', 'code', 'sample', 'team']
  //     .map((name) => ({ name, ref: this[name] }))
  //     .filter(({ ref }) => ref && ref.isFocused())
  //     .forEach(({ name, ref }) => {
  //       this.setState({ [name]: text });
  //     });
  // }

  // updateRef(name, ref) {
  //   this[name] = ref;
  // }

  render() {
    let { team, role, month, day, year } = this.state;

    return (
      <View style={style.formModalContainer}>
          <Text style={style.formModalSectionTitle}>For</Text>
          <Text style={[style.textMD, {textAlign: 'center', fontSize: 24}]}>{this.props.player.name}</Text>
          <View style={style.formModalPlayerDetailContainer}>
            <RankImage rank={this.props.player.rank} division={this.props.player.division} />
            <RoleImage role={this.props.player.roles[0]} />
              <Text style={style.profileRoleText}>{normalizeText(this.props.player.roles[0])}</Text>
          </View>

          <Text style={style.formModalSectionTitle}>To</Text>
          <View style={style.formModalInputWrapper}>
            <Dropdown
              ref={this.teamRef}
              value={team}
              label='Team'
              baseColor='#ffffff'
              textColor='#ffffff'
              labelFontSize={25}
              containerStyle={style.formModalInputTeam}
              data={teamData}
            />
          </View>

          <Text style={style.formModalSectionTitle}>Options</Text>
          <View style={style.formModalInputWrapper}>
            <View style={style.formModalCol}>
              <Text style={[style.textMD, {marginBottom: 5}]}>Role:</Text>
              <Dropdown
                containerStyle={{width: 100}}
                ref={this.roleRef}
                value={role}
                label='Role'
                baseColor='#ffffff'
                textColor='#ffffff'
                containerStyle={style.formModalInputRole}
                data={roleData}
              />
            </View>
            <View style={style.formModalCol}>
              <Text style={[style.textMD, {marginBottom: 5}]}>Start Date:</Text>
              <Dropdown
                containerStyle={{width: 100}}
                ref={this.monthRef}
                value={month}
                label='Month'
                baseColor='#ffffff'
                textColor='#ffffff'
                containerStyle={style.formModalInputMonth}
                data={monthData}
              />
              <Dropdown
                containerStyle={{width: 100}}
                ref={this.dayRef}
                value={day}
                label='Day'
                baseColor='#ffffff'
                textColor='#ffffff'
                containerStyle={style.formModalInputDay}
                data={dayData}
              />
              <Dropdown
                containerStyle={{width: 100}}
                ref={this.yearRef}
                value={year}
                label='Year'
                baseColor='#ffffff'
                textColor='#ffffff'
                containerStyle={style.formModalInputYear}
                data={yearData}
              />
            </View>
          </View>
          <Text style={style.formModalSectionTitle}>Message</Text>
          <TextField
            value={'sample'}
            label='Message'
            multiline={true}
          />

      </View>
    );
  }
}

// const styles = {
//   screen: {
//     width: 350, 
//     padding: 4,
//     paddingTop: 56,
//     backgroundColor: '#E8EAF6',
//   },

//   container: {
//     marginHorizontal: 4,
//     marginVertical: 8,
//     paddingHorizontal: 8,
//   },

//   text: {
//     textAlign: 'center',
//   },

//   textContainer: {
//     backgroundColor: 'white',
//     borderRadius: 2,
//     padding: 16,
//     elevation: 1,
//     shadowRadius: 1,
//     shadowOpacity: 0.3,
//     justifyContent: 'center',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//   },
// };

const teamData = [
  { value: 'Legit Guild Gaming(LGG)' },
  { value: 'Team Counter-Force(TCF)' },
];

const roleData = [
  { value: 'Top' },
  { value: 'Jungle' },
  { value: 'Mid' },
  { value: 'Bot' },
  { value: 'Support' },
];

const monthData = [
  { value: 'Jan' },
  { value: 'Feb' },
  { value: 'Mar' },
  { value: 'Apr' },
  { value: 'May' },
  { value: 'Jun' },
  { value: 'Jul' },
  { value: 'Aug' },
  { value: 'Sep' },
  { value: 'Oct' },
  { value: 'Nov' },
  { value: 'Dec' },
];

const dayData = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '10' },
  { value: '11' },
  { value: '12' },
  { value: '13' },
  { value: '14' },
  { value: '15' },
  { value: '16' },
  { value: '17' },
  { value: '18' },
  { value: '19' },
  { value: '20' },
  { value: '21' },
  { value: '22' },
  { value: '23' },
  { value: '24' },
  { value: '25' },
  { value: '26' },
  { value: '27' },
  { value: '28' },
  { value: '29' },
  { value: '30' },
];

const yearData = [
  { value: '2018' },
  { value: '2019' },
  { value: '2020' },
  { value: '2021' },
  { value: '2022' },
  { value: '2023' },
];




import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

export class History extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>
          Frontend Case Study ~{'\n'}
          This is a case study for evaluating Frontend Developer candidates
          skills. ~{'\n'} Main Goal Create a SPA using modern JS frameworks
          (Vue.js (Will be considered a plus), React.js, Angular or Svelte)
          Summary Use the TVMaze API to list Batman tv shows on page, and when
          user clicked a show redirect to a summary page. ~{'\n'}
          Criterias App should be written in modern Javascript Frameworks. ~
          {'\n'}
          You should use http://www.tvmaze.com/api for requests You should use
          EcmaScript6 features Use SCSS or LESS for styling ~{'\n'}
          Use a state management tool. (Vuex for Vue, redux for React ) ~{'\n'}
          Render app on server (Server Side Rendering) (** Will be considered a
          plus **) ~{'\n'}
          Deploy the app up and running to a server. (** Will be considered a
          plus **) ~{'\n'}
          Send the project through a VCS so we can track your commit history. ~
          {'\n'}
          Additional Features You can create a search page that list movies by
          searched criteria. ~{'\n'}
          You can limit the movies shown on page by 10 and paginate the
          remaining results. ~{'\n'}
          Hints Immutability Debouncing Scoped styling
        </Text>
      </SafeAreaView>
    );
  }
}

export default History;

import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import shortid from 'shortid';

export default class TimeTrackerEntryProjectComponent extends Component {

  @service
  store

  @tracked
  name = "";
  @tracked
  order = 0;

  @action
  createProject(event){
    event.preventDefault();
    const project = this.store.create("time-tracker/project", this.store.graph.namedNode(`http://mu.semte.ch/time-tracker/projects/${shortid.generate()}`));
    project.name = this.name;
    project.order = parseInt(this.order);
    this.name = "";
    this.order = undefined;
  }
  
}
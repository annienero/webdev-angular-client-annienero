import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../models/module.model.client';
import { ModuleServiceClient } from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules: Module[] = []
  courseId
  selectedModuleId

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.selectedModuleId = params.moduleId
      this.loadModules(params.courseId)
    })
  }

  loadModules(courseId) {
    this.courseId = courseId
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules)
  }

  ngOnInit() {
  }

}

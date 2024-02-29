import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification = {
    contenu: '',
    dateEnvoi: ''
  }
  notifications: any[] = [];




  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.notificationService.getAllNotifications().subscribe(
      data => {
        this.notifications = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteNotification(id: number): void {
    this.notificationService.deleteNotification(id).subscribe(
      () => {
       
        console.log(`Notification with ID ${id} deleted successfully.`);
      },
      (error) => {
       
        console.error(`Error deleting  with ID ${id}:`, error);
      }
    );
  }

  confirmDelete(id: number): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this notification?');
  
    if (confirmDelete) {
      this.deleteNotification(id);
    }
  }

}

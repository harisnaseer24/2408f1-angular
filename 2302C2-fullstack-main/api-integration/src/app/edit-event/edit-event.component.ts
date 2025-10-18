import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  eventTypes: any = [];
  event = {
    id: 0,
    customerName: "",
    noOfGuests: 1,
    eventTypeId: 0,
    date: new Date(),

  }
  eventId:any=0;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.getEventTypes();
    this. getEventDetails();

  }

  getEventDetails(){
this.eventId=this.route.snapshot.paramMap.get("id");
console.log(this.eventId);
this.http.get("https://localhost:7065/api/EventOrganizer/"+this.eventId).subscribe((res: any) => {
  this.event = res;
  console.log(res);

})

  }

  getEventTypes() {
    this.http.get("https://localhost:7065/api/EventOrganizer/EventTypes").subscribe((res: any) => {
      this.eventTypes = res;
      console.log(res);

    })
  }

  editEvent() {
    this.http.put("https://localhost:7065/api/EventOrganizer", this.event).subscribe((res: any) => {
      if (res != null) {
        alert("Event updated successfully..!")
        location.href = "/";
      } else {
        alert("Denied")
      }

    })
  }


}

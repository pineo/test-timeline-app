import { Component, ElementRef, ViewChild } from '@angular/core';

declare var kendo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild('timeline') timelineEl: ElementRef;

  selectedDate: Date = new Date();

  eventsData = [
    {
        description: "First event description.",
        date: new Date(2015, 4, 15),
        title: "Barcelona \u0026 Tenerife",
        subtitle: "May 15, 2015",
        images: [
            {
                src: "https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG?width=500&amp;height=500"
            }
        ],
        actions: [
            {
                text: "More info about Barcelona",
                url: "https://en.wikipedia.org/wiki/Barcelona"
            }
        ]
    },
    {
        description: "The second event description.",
        date: new Date(2018, 1, 27),
        title: "United States East Coast Tour",
        subtitle: "Feb 27, 2018",
        images: [
            {
                src: "https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/United-States/Boston-Old-South-Church_Ivo-Igov.JPG?width=500&amp;height=500"
            }
        ],
        actions: [
            {
                text: "More info about New York City",
                url: "https://en.wikipedia.org/wiki/New_York_City"
            }
        ]
    },
    {
        description: "Third event description.",
        date: new Date(2015, 5, 25),
        subtitle: "My second trip this year",
        title: "Malta, a Country of Кnights",
        images: [
            {
                src: "https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Malta/Bibliotheca-National-Library_Marie-Lan-Nguyen.JPG?width=500&amp;height=500"
            }
        ],
        actions: [
            {
                text: "More info about Malta",
                url: "https://en.wikipedia.org/wiki/Malta"
            }
        ]
    }
  ];

  ngOnInit() {
    kendo.jQuery(this.timelineEl.nativeElement).kendoTimeline({
      orientation: "vertical", // Define the layout of the widget.
      alterMode: true, // Render the events on both sides of the axis in the vertical mode.
      collapsibleEvents: true, // Start all collapsed events in the vertical mode.
      dataSource: {
        data: this.eventsData, // Defined later in this snippet.
        schema: {
            model: {
                fields: {
                    date: {
                      type: "date"
                    },
                    description: {
                      type: "string"
                    }
                }
            }
        }
      }
    });
  }
}

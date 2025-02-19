/// <reference types="cypress" />
import { mount } from "@cypress/react";
import VideoPlayer from "@/components/player/VideoPlayer";
import { COMPONENT_TEST_VIDEO } from "@/constants/test.data";

Cypress.on('uncaught:exception', (err) => {
  if (err.name === 'AbortError') {
    return false;
  }
});

describe("VideoPlayer Component", () => {
  beforeEach(() => {
    mount(<VideoPlayer src={COMPONENT_TEST_VIDEO} title="Test Video" shortDescription="Sample video" />);
    cy.get('video') 
      .should('be.visible') 
      .then(($video) => {
        cy.wrap($video).should('have.prop', 'readyState', 4); // 4 means HAVE_ENOUGH_DATA
      });

  });

  it("should render correctly", () => {
    cy.get("video").should("exist");
  });

  it("should play video on click", () => {
    cy.get("video").click();
    cy.get("video").should("have.prop", "paused", false);
  });

  it("should display the title and description", () => {
    cy.contains("Test Video").should("be.visible");
    cy.contains("Sample video").should("be.visible");
  });

  it("should hide overlay after a few seconds", () => {
    cy.get("#video-player").click();
    cy.wait(4000); 
    cy.get("#video-player-overlay").should("not.exist"); 
  });

  it("should pause the video on a second click", () => {
    cy.get("#video-player").click(); 
    cy.get("#video-player").should("have.prop", "paused", false); 
    cy.get("#video-player").click(); 
    cy.get("#video-player").should("have.prop", "paused", true);
  });

  it("should update the timeline slider as the video plays", () => {
    cy.get("video").click();
    cy.wait(2000); 

    cy.get("#video-player-controls-timeline").then(($slider) => {
      const initialValue = parseFloat($slider.val() as string);
      cy.wrap(initialValue).should("be.gt", 0); 
    });
  });

  it("should update the minutes section as the video plays", () => {
    cy.get("video").click(); 
    cy.wait(2000);

    cy.get("#video-player-controls").within(() => {
      cy.get("span").first().invoke("text").should("not.eq", "0:00"); // Check if the elapsed time is not 0:00
    });
  });

  it("should update the video current time when the slider is clicked", () => {
    cy.get("video").click(); 
    cy.wait(2000); 
  
    cy.get("#video-player-container").trigger("mouseenter");

    cy.get("video").then(($video) => {
      const initialTime = $video[0].currentTime;
      const videoDuration = $video[0].duration;
      const newTime = initialTime + 10;
  
      cy.get("#video-player-controls-timeline")
        .invoke("val", newTime) 
        .trigger("input"); 
  
      cy.get("video").should(($video) => {
        expect($video[0].currentTime).to.be.closeTo(newTime, 1); 
      });
    });
  });

});
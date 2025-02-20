/// <reference types="cypress" />
import { mount } from "@cypress/react";
import ContentBanner from "@/components/content/ContentBanner";
import { ContentBannerPreviewInput } from "@/types/content.banner.types";

Cypress.on('uncaught:exception', (err) => {
  if (err.name === 'AbortError') {
    return false;
  }
});

describe("ContentBanner", () => {

  it("renders without crashing with valid data", () => {
    const validContent: ContentBannerPreviewInput[] = [
        {
          id: "32hd02y-1udh1-1d32ewwe",
          logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/logos/forbes-logo-svgrepo-com-cropped.svg",
          imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg",
          description: "Documentary on nature in its most primal form.",
          title: "Ninja and Samurai",
          previewSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/Alone+in+New+York+_+Short+Film+(2018).mp4",
          onWatchNow: cy.spy().as("watchNowSpy")
        }
    ];

    mount(<ContentBanner content={validContent} />);
    cy.get("#content-banner-container").should("exist");
    cy.get("img").should("exist");
    cy.get("button").should("exist");
  });

  it("handles missing optional data gracefully", () => {
    const incompleteContent = [{ id: "1", imageSrc: "", title: "No Preview", description: "", logoSrc: "" }];
    mount(<ContentBanner content={incompleteContent} />);
    cy.get("#content-banner-container").should("exist");
    cy.get("img").should("exist");
    cy.get("video").should("not.exist");
  });

  it("handles empty content array without crashing", () => {
    mount(<ContentBanner content={[]} />);
    cy.get("#content-banner-container").should("exist");
    cy.get("#content-banner-main-img").should("not.exist");
    cy.get("video").should("not.exist");
  });

  it("handles invalid content gracefully", () => {
    mount(<ContentBanner content={undefined as any} />);
    cy.get("#content-banner-container").should("not.exist");
    cy.get("#content-banner-main-img").should("not.exist");
    cy.get("video").should("not.exist");
  });

  it("triggers Watch Now button when clicked", () => {
    const validContent: ContentBannerPreviewInput[] = [
        {
          id: "32hd02y-1udh1-1d32ewwe",
          logoSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/logos/forbes-logo-svgrepo-com-cropped.svg",
          imageSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/images/pexels-cottonbro-7792259.jpg",
          description: "Documentary on nature in its most primal form.",
          title: "Ninja and Samurai",
          previewSrc: "https://video-caribbean.s3.us-east-2.amazonaws.com/public/videos/Alone+in+New+York+_+Short+Film+(2018).mp4",
          onWatchNow: cy.spy().as("watchNowSpy")
        }
    ];

    mount(<ContentBanner content={validContent} />);
    cy.get('#watch-now-button').click();
    cy.get("@watchNowSpy").should("have.been.calledWith", validContent[0].id);
  });

});

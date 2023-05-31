# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Update `getShiftByFacility` Function

**Acceptance Criteria.**

- Function should retrun metadata including assocated Agent's custom id, as provided by the Facility.
- Deliverables include update to codebase and unit tests to cover changes.
- Will take 2 hours.

**Implementation Details.**
- Update database query to return custom id instead of internal of database id.
- Add unit tests to test new functionality.

### Ticket 2: Update `generateReport` Function

**Acceptance Criteria.**

- Function should use customAgent id provided by Facility when converting Shift data to PDF.
- Deliverables include updated codebase and unit tests to cover changes.
- Will take 3 hours.

**Implementation Details.**

- Update PDF generation function to accept custom id from database query results.
- Add unit tests to test new functionality.

### Ticket 3: Update Front-End

**Acceptance Criteria.**

- Facility should be able to sent custom Agent id in the UI.
- Deliverables include updated front-end codebase.
- Will take 2 hours.

**Implementation Details.**

- Add form field to Facility dashboard for setting custom Agent id.
- Update database to add support for custom Agent id.
- Connect form field to database functionality.
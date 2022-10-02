import {  Box, Heading } from '@chakra-ui/react'
import React from 'react'
import FAQComp from './FAQComp'

const FAQ = () => {
  return (
      <Box w="70%" m="auto" >
      <Heading mb='3rem'>FAQ</Heading>
      <FAQComp title={"What is time tracker ?"} desc={`A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.`} />
      <FAQComp title={"Why use time tracker"} desc={`There are many reasons to use time tracking software. Here are the main use cases for a time tracker:Tracking billable hours: helps freelancers and employees who are paid on an hourly basis measure time spent on work with accuracy up to every second.
Improving productivity: employees who struggle with poor time management and distractions can work on their efficiency, understand how they work, and what takes most of their time.
Timesheet management: one of the most common features of time tracker is a timesheet – a digital version of a paper timesheet. With a time tracker, your team can have it filled out automatically.
Work automation: time tracker helps to save time on administrative and repetitive tasks, better allocate resources, cut costs, and smoothen teams’ workflow.`} />
      <FAQComp title={"What are the benefits of time tracking ?"} desc={`Here are all the benefits of using time tracking software in a nutshell.Increased productivity Accurate timesheets Real-time updates on projects status Easy attendance management Workflow automation`} />
      <FAQComp title={"How to bill clients in hourly work ?"} desc={`With TimeCamp, you can set up billing rates for your team members, projects, and clients.Have the time tracker record billable time and easily turn timesheet data into invoices, adjust the tax rates for your country and profession. And then, simply export the document or send it straight to your clients.`} />
      <FAQComp title={"How to save time on timesheets ?"} desc={`There is nothing better than having your timesheet filled out automatically!TimeCamp’s non-intrusive desktop app works in the background so you and your team can focus on what really matters, while the time tracker collects all the data for timesheets.Edit your time logs any time or add time manually for even more accuracy. Approve your team’s daily or weekly timesheets with one click without effort.Quick, easy, and painless timesheet management!`} />

    </Box>
  )
}

export default FAQ
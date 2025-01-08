import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'modern-office',
    title: 'Modern Office Complex',
    description: 'A state-of-the-art office complex designed with sustainability in mind',
    category: 'Architecture',
    date: '2024-01',
    tools: ['Revit', 'BIM 360', 'Dynamo'],
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    content: `
# Modern Office Complex

This project showcases a sustainable office complex design that incorporates cutting-edge green building technologies.

## Key Features

- LEED Platinum certification
- Solar panel integration
- Rainwater harvesting system
- Natural lighting optimization

## Technical Details

The project utilized BIM 360 for collaboration and Dynamo for parametric design optimization. Key achievements include:

- 40% reduction in energy consumption
- 60% reduction in water usage
- 100% renewable energy integration
- Smart building management system
- Flexible workspace design
- Biophilic design elements`
  },
  {
    id: 'bim-automation',
    title: 'BIM Automation Tool',
    description: 'Custom tool development for automating repetitive BIM tasks',
    category: 'Development',
    date: '2023-12',
    tools: ['Python', 'Revit API', 'C#'],
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    content: `
# BIM Automation Tool

A powerful automation suite designed to streamline BIM workflows and increase productivity.

## Features

- Automated element placement
- Parameter management
- Batch processing capabilities
- Custom family creation

## Technical Implementation

Built using Python and C# with the Revit API, this tool suite provides a robust framework for automating common BIM tasks while maintaining data integrity and model standards.

### Key Benefits

- 75% reduction in repetitive tasks
- Standardized workflow implementation
- Error reduction through automation
- Seamless integration with existing BIM processes
- Custom reporting capabilities
- Version control and change tracking`
  },
  {
    id: 'sustainable-housing',
    title: 'Sustainable Housing',
    description: 'Eco-friendly residential project focusing on energy efficiency',
    category: 'Architecture',
    date: '2023-10',
    tools: ['Revit', 'Green Building Studio', 'Insight'],
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    content: `
# Sustainable Housing Project

An innovative residential development that prioritizes sustainability and energy efficiency.

## Key Features

- Net-zero energy design
- Smart home integration
- Sustainable materials
- Passive solar design

## Environmental Impact

The project achieves a 75% reduction in energy consumption compared to traditional housing developments through innovative design and technology integration.

### Sustainable Technologies

- Ground source heat pumps
- Solar PV integration
- Smart energy management
- Rainwater harvesting
- Green roof systems
- Low-impact materials

### Community Benefits

- Reduced utility costs
- Improved indoor air quality
- Enhanced thermal comfort
- Lower maintenance requirements
- Increased property value`
  }
];
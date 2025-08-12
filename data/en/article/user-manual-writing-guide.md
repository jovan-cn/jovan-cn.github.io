---
id: 1
title: User manual preparation guide
abstract: Software developers prepare a user guide manual.
author: Jovan
cover: https://github.com
tags: Manual
---

Use Scene：software developers to write a user guide manual.

## Structure

- Intro to：[**mandatory**] [文件] provides a general, brief description of products and documents themselves
- Quick Start：[**optionary**] [文件] How best to use products
- Start with：[**necessary**] [目录] also known as "Usage", providing primary usage tutorials
    - Environment preparation：[**required**] [文件] Preconditions that need to be met for software usage
    - Install：[**optionary**] [文件] software installation methods
    - Set settings for：[**required**] [文件] software
- Advanced：[**optionary**] [目录] also known as "Developing", offering middle- and advanced development tutorials
- API：[**optionary**] [Directory|Files] Software API per presentation
- FAQ：[**optionary**] [文件] Frequently asked questions
- Appendix：[**optionary**] [目录] does not belong to the tutorial itself, but is helpful in reading the tutorial.
    - Name explanation：[**optionary**] [文件]
    - Best practices：[**optionary**] [文件]
    - Troubleshooting：[**optionary**] [文件]
    - ChangeLog：[**optionary**] version [文件]
    - Feedback：[**optionary**] [文件]

## Recommendations

### Filename

- File name must not contain spaces.
- Half-angle characters must be used.(So Chinese cannot be used as filename)
- Filename is only lowercase (except for some files for visibility, such as README)
- Use semi-corner connection `-` to separate multiple words

------

> Special note：quoted in [Nguyen 1 Peak - writing norm for Chinese technical documents] (https://github.com/ruanyf/document-style-guide/tree/master)

More detailed instructions can be read [Requirements for Chinese Text Layout Needs] (https://w3c.github.io/clreq/)

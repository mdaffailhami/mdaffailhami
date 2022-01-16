import 'package:flutter/material.dart';
import 'package:mdaffailhami/screens/home/components/about_me.dart';
import 'package:mdaffailhami/widgets/navigation_button.dart';

import 'contact_me.dart';
import 'faq.dart';
import 'projects.dart';
import 'skills.dart';

class MyDrawer extends StatelessWidget {
  const MyDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: Theme.of(context).colorScheme.surface,
      child: Column(
        children: [
          SizedBox(height: 20),
          CircleAvatar(
            backgroundImage: AssetImage('assets/profile.jpg'),
            radius: 50,
          ),
          SizedBox(height: 5),
          Text(
            'Daffa Ilhami',
            style:
                Theme.of(context).textTheme.headline5?.copyWith(fontSize: 26),
          ),
          Divider(),
          Expanded(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  SizedBox(
                    height: 40,
                    child: MyNavigationButton(
                      componentKey: MyAboutMe.componentKey,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text('About Me'),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 40,
                    child: MyNavigationButton(
                      componentKey: MySkills.componentKey,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text('My Skills'),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 40,
                    child: MyNavigationButton(
                      componentKey: MyProjects.componentKey,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text('My Projects'),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 40,
                    child: MyNavigationButton(
                      componentKey: MyFAQ.componentKey,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text('FAQ'),
                      ),
                    ),
                  ),
                  Divider(),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: Column(
                      children: [
                        Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.primary,
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: MyNavigationButton(
                            componentKey: MyContactMeForm.componentKey,
                            child: Text('Contact Me'),
                          ),
                        ),
                        SizedBox(height: 10),
                        Wrap(
                          alignment: WrapAlignment.center,
                          spacing: 30,
                          runSpacing: 10,
                          children: MyAboutMe.socmedIconButtons,
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

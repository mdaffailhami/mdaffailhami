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
          const SizedBox(height: 20),
          const CircleAvatar(
            backgroundImage: AssetImage('assets/profile.jpg'),
            radius: 50,
          ),
          const SizedBox(height: 5),
          Text(
            'Daffa Ilhami',
            style: Theme.of(context)
                .textTheme
                .headlineSmall
                ?.copyWith(fontSize: 26),
          ),
          const Divider(),
          Expanded(
            child: GlowingOverscrollIndicator(
              axisDirection: AxisDirection.down,
              color: Theme.of(context).colorScheme.primaryContainer,
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    SizedBox(
                      height: 55,
                      child: MyNavigationButton(
                        componentKey: MyAboutMe.componentKey,
                        child: const Align(
                          alignment: Alignment.centerLeft,
                          child: Text('About Me'),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 55,
                      child: MyNavigationButton(
                        componentKey: MySkills.componentKey,
                        child: const Align(
                          alignment: Alignment.centerLeft,
                          child: Text('My Skills'),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 55,
                      child: MyNavigationButton(
                        componentKey: MyProjects.componentKey,
                        child: const Align(
                          alignment: Alignment.centerLeft,
                          child: Text('My Projects'),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 55,
                      child: MyNavigationButton(
                        componentKey: MyFAQ.componentKey,
                        child: const Align(
                          alignment: Alignment.centerLeft,
                          child: Text('FAQ'),
                        ),
                      ),
                    ),
                    const Divider(),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          ElevatedButton(
                            onPressed: () {
                              Scrollable.ensureVisible(
                                MyContactMeForm.componentKey.currentContext ??
                                    context,
                                duration: const Duration(milliseconds: 800),
                              );

                              if (Scaffold.of(context).isDrawerOpen) {
                                Navigator.of(context).pop();
                              }
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor:
                                  Theme.of(context).colorScheme.primary,
                            ),
                            child: const Text(
                              'Contact Me',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                          const SizedBox(height: 10),
                          const Wrap(
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
          ),
        ],
      ),
    );
  }
}

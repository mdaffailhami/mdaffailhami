import 'package:flutter/material.dart';
import 'package:mdaffailhami/screens/home/components/about_me.dart';
import 'package:mdaffailhami/screens/home/components/contact_me.dart';
import 'package:mdaffailhami/screens/home/components/faq.dart';
import 'package:mdaffailhami/screens/home/components/projects.dart';
import 'package:mdaffailhami/screens/home/components/technologies.dart';
import 'package:mdaffailhami/widgets/navigation_button.dart';
import 'package:mdaffailhami/widgets/responsive_builder.dart';

import 'banner.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({Key? key}) : super(key: key);

  // static final List<Widget> navigationButtons = [
  //   MyNavigationButton(
  //     text: 'About Me',
  //     componentKey: MyAboutMe.componentKey,
  //   ),
  //   MyNavigationButton(
  //     text: 'My Skills',
  //     componentKey: MySkills.componentKey,
  //   ),
  //   MyNavigationButton(
  //     text: 'My Projects',
  //     componentKey: MyProjects.componentKey,
  //   ),
  //   MyNavigationButton(
  //     text: 'FAQ',
  //     componentKey: MyFAQ.componentKey,
  //   ),
  //   MyNavigationButton(
  //     text: 'Contact Me',
  //     componentKey: MyContactMeForm.componentKey,
  //   ),
  // ];

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      backgroundColor: Theme.of(context).colorScheme.surfaceBright,
      surfaceTintColor: Colors.transparent,
      automaticallyImplyLeading: false,
      pinned: true,
      expandedHeight: 350,
      flexibleSpace: const FlexibleSpaceBar(
        background: MyBanner(),
      ),
      title: MyResponsiveBuilder((_, isSmall, isMedium, isLarge) {
        if (isSmall) {
          return Stack(
            alignment: AlignmentDirectional.centerStart,
            children: [
              IconButton(
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                icon: const Icon(Icons.menu),
              ),
              Center(
                child: MyNavigationButton(
                  componentKey: MyBanner.componentKey,
                  child: Text(
                    'MDI',
                    style: Theme.of(context).textTheme.headlineSmall,
                  ),
                ),
              ),
            ],
          );
        } else {
          return Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              MyNavigationButton(
                componentKey: MyBanner.componentKey,
                child: Text(
                  'MDI',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
              ),
              SizedBox(
                height: kToolbarHeight,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    MyNavigationButton(
                      componentKey: MyAboutMe.componentKey,
                      child: const Text('About Me'),
                    ),
                    MyNavigationButton(
                      componentKey: MyTechnologies.componentKey,
                      child: const Text('Technologies'),
                    ),
                    MyNavigationButton(
                      componentKey: MyProjects.componentKey,
                      child: const Text('Projects'),
                    ),
                    MyNavigationButton(
                      componentKey: MyFAQ.componentKey,
                      child: const Text('FAQ'),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 10),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(10),
                        child: ElevatedButton(
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
                      ),
                    ),
                  ],
                ),
              )
            ],
          );
        }
      }),
    );
  }
}

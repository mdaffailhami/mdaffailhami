import 'package:flutter/material.dart';

import 'components/app_bar.dart';
import 'components/faq.dart';
import 'components/projects.dart';
import 'components/skills.dart';
import 'components/about_me.dart';
import 'components/background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        MyBackground(),
        Scaffold(
          backgroundColor: Colors.transparent,
          drawer: Drawer(),
          body: CustomScrollView(
            physics: AlwaysScrollableScrollPhysics(),
            slivers: [
              MyAppBar(),
              SliverToBoxAdapter(
                child: Column(
                  children: [
                    MyAboutMe(),
                    MySkillsSection(),
                    Container(
                      decoration: BoxDecoration(
                        color: Theme.of(context).colorScheme.background,
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(10),
                          topRight: Radius.circular(10),
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsets.symmetric(
                            vertical: 20,
                            horizontal:
                                MediaQuery.of(context).size.width * 0.1),
                        child: Wrap(
                          runSpacing: 20,
                          children: [
                            MyProjects(),
                            MyFAQ(),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}

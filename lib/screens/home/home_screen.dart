import 'package:flutter/material.dart';
import 'package:mdaffailhami/screens/home/components/contact_me.dart';

import 'components/app_bar.dart';
import 'components/drawer.dart';
import 'components/faq.dart';
import 'components/footer.dart';
import 'components/projects.dart';
import 'components/technologies.dart';
import 'components/about_me.dart';
import 'components/background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  static final GlobalKey<ScaffoldMessengerState> scaffoldKey =
      GlobalKey<ScaffoldMessengerState>();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const MyBackground(),
        GestureDetector(
          onTap: () {
            FocusManager.instance.primaryFocus?.unfocus();
          },
          child: Scaffold(
            key: scaffoldKey,
            backgroundColor: Colors.transparent,
            drawer: const MyDrawer(),
            body: GlowingOverscrollIndicator(
              axisDirection: AxisDirection.down,
              color: Theme.of(context).colorScheme.outline,
              child: CustomScrollView(
                physics: const AlwaysScrollableScrollPhysics(),
                slivers: [
                  const MyAppBar(),
                  SliverToBoxAdapter(
                    child: Column(
                      children: [
                        const MyAboutMe(),
                        const MyTechnologies(),
                        Container(
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.surface,
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10)),
                          ),
                          child: Padding(
                            padding: EdgeInsets.symmetric(
                                vertical: 30,
                                horizontal:
                                    MediaQuery.of(context).size.width * 0.06),
                            child: const Wrap(
                              runSpacing: 30,
                              children: [
                                MyProjects(),
                                MyFAQ(),
                              ],
                            ),
                          ),
                        ),
                        const MyContactMeForm(),
                        const MyFooter(),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        )
      ],
    );
  }
}
